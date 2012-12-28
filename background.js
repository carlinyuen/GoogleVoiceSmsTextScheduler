// This background process should check every minute
//	and see if we need to send out scheduled texts

// Global Variables & Constants
var GOOGLE_VOICE_DATA_REQUEST_URL = "https://www.google.com/voice/b/0/request/user/";
var GOOGLE_VOICE_SEND_SMS_REQUEST_URL = "https://www.google.com/voice/b/0/sms/send/";
var _rnr_se;	// Google Voice account key of some sort, needed for sms

// Convert javscript date to and from UTC
function convertDateToUTC(date)
{
	return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
		date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
}

function convertDateToLocal(date)
{
	return new Date($.datepicker.formatDate("m/d/yy", date) + " "
		+ $.datepicker.formatTime("H:mm:ss:l", {
			hour: date.getHours(), minute: date.getMinutes(),
			second: date.getSeconds(), millisecond: date.getMilliseconds()
		}) + " UTC");
}

// Retreive data from Google Voice's REST calls
function getGoogleVoiceData()
{
	$.ajax({
		type: 'GET',
		url: GOOGLE_VOICE_DATA_REQUEST_URL,
		success: initExtension,
		error: initExtension,
	});
}

// Initialize the extension with Google Voice data
function initExtension(data)
{
	console.log("initExtension", data);

	if (data && data.responseText)
	{
		var response = $.parseJSON(data.responseText);
		_rnr_se = response.r;
	}
	else	// Error, no data!
	{
		console.log("Could not retrieve data from Google Voice!");
		alert("Could not retrieve data from Google Voice!");
	}
}

// Show notification for sent messages
function showNotification(imagePath, title, message)
{
	var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
	var hour = time[1] % 12 || 12;               // The prettyprinted hour.
	var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
	var notification = window.webkitNotifications.createNotification(
		imagePath											// The image.
		, title + " at " + hour + time[2] + ' ' + period	// The title.
		, message											// The body.
	);
	notification.show();
}

// Send SMS message through google voice
function sendMessage(message)
{
	console.log("sendMessage", message);

	$.ajax({
		type: 'POST',
		url: GOOGLE_VOICE_SEND_SMS_REQUEST_URL
			+ "?id="
			+ "&phoneNumber=" + encodeURIComponent(message.recipients)
			+ "&text=" + encodeURIComponent(message.text)
			+ "&sendErrorSms=0"
			+ "&_rnr_se=" + _rnr_se,
		success: function(response)
		{
			console.log("success", response);

			// Go through messages and remove sent message
			var key = 'scheduledMessages';
			chrome.storage.sync.get(key, function(items)
			{
				// Check if no messages - this shouldn't happen
				if (!items || !items[key] || !items[key].length) {
					console.log("ERROR : No messages even though we just sent one!");
					return;
				}

				// Loop through and check if there's an id match
				var messages = items[key];
				var messageFound = false;
				for (var i = messages.length - 1; i >= 0; --i)
				{
					if (messages[i].id == message.id)
					{
						// Test for notification support, and show notification
						if (window.webkitNotifications) {
							showNotification("images/icon48.png"
								, "SMS Message sent to " + message.recipients
								, message.text);
						}

						// Delete from data
						messages.splice(i, 1);
						messageFound = true;
						break;
					}
				}

				// If message was found and removed, update data
				if (messageFound)
				{
					// Store new data back in, and print error if any
					chrome.storage.sync.set(
						{"scheduledMessages": messages}
						, function()
						{
							if (chrome.runtime.lastError) {
								console.log(chrome.runtime.lastError);
							} else {
								console.log("scheduledMessages updated");
							}
						});
				}
				else	// Error - couldn't find it!
				{
					console.log("ERROR : Couldn't find and remove message that was just sent!");
				}
			});
		},
		error: function(response) {
			console.log("error", response);
		},
	});
}

function checkScheduledMessages()
{
	// Get list of scheduled messages and see if
	//	any of them should be sent out
	var key = 'scheduledMessages';
	chrome.storage.sync.get(key, function(items)
	{
		// Check if no messages
		if (!items || !items[key] || !items[key].length) {
			return;
		}

		// Loop through and check datetimes
		var currentDateTime = new Date();
		var messages = items[key];
		for (var i = messages.length - 1; i >= 0; --i)
		{
			var message = messages[i];
			var messageDateTime = convertDateToLocal(
				new Date($.parseJSON(message.dateTime)));

			// If message date is in the past, then send message
			if (messageDateTime <= currentDateTime) {
				sendMessage(message);
			}
		}
	});
}

// Setup the extension
getGoogleVoiceData();

// 60000 milliseconds = 1 minute
// setInterval(checkScheduledMessages, 60000);
