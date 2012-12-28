Google Chrome Extension : Google Voice SMS Text Scheduler
===================
gc-gv-sms-scheduler

Just a fun side project in my spare time. This simple chrome extension uses a content script to insert css and js into the Google Voice site (http[s]://www.google.com/voice/*), allowing you to schedule SMS texts to be sent at a later time. Had to backtrack through the official Google Voice extension to find the API calls, still having trouble finding out how to actually send the darn thing, but everything else seems to be here.

Some caveats:
 - Scheduled messages will only be sent while Chrome's background processes are still running.
 - I use Chrome's sync storage, so the texts are synced across browsers where you're signed in. Depending on latency of your internet connection, you may end up sending the same text more than once.
 - Scheduled messages only display the recipients as numbers; didn't want to deal with matching them up with your Google Contacts phone book.

Technologies used:
 - jQuery
 - jQuery UI Date Picker and Sliders
 - Trent Richardson's Time Picker (http://trentrichardson.com/examples/timepicker/)
 - Chrome's Sync Storage (scheduled messages are synced across browsers)
 
Hope this is useful to someone out there, and feel free to help contribute and expand on this project!


. Carlin
