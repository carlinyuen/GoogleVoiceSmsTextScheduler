function e(a) {
    throw a;
}
var h = void 0,
    i = !0,
    j = null,
    p = !1,
    r, ba = ba || {}, s = this,
    ca = function (a, b) {
        var c = a.split("."),
            d = s;
        !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
        for (var f; c.length && (f = c.shift());)!c.length && b !== h ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
    }, da = function (a) {
        for (var a = a.split("."), b = s, c; c = a.shift();) if (b[c] != j) b = b[c];
        else return j;
        return b
    }, ea = function () {}, t = function (a) {
        a.t = function () {
            return a.Mf ? a.Mf : a.Mf = new a
        }
    }, fa = function (a) {
        var b = typeof a;
        if ("object" == b) if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }, u = function (a) {
        return "array" == fa(a)
    }, ga = function (a) {
        var b = fa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }, v = function (a) {
        return "string" == typeof a
    }, ha = function (a) {
        return "number" == typeof a
    }, ia = function (a) {
        return "function" == fa(a)
    }, ja = function (a) {
        var b = typeof a;
        return "object" == b && a != j || "function" == b
    }, ma = function (a) {
        return a[ka] || (a[ka] = ++la)
    }, ka = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
    la = 0,
    na = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, oa = function (a, b, c) {
        a || e(Error());
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    },

	// CARLIN
	w = function (a, b, c) {
        w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
        return w.apply(j, arguments)
    },

	pa = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = Array.prototype.slice.call(arguments);
            b.unshift.apply(b, c);
            return a.apply(this,
            b)
        }
    }, qa = Date.now || function () {
        return +new Date
    }, z = function (a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.b = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
Function.prototype.bind = Function.prototype.bind || function (a, b) {
    if (1 < arguments.length) {
        var c = Array.prototype.slice.call(arguments, 1);
        c.unshift(this, a);
        return w.apply(j, c)
    }
    return w(this, a)
};
var ra = function () {};
ra.prototype.Gc = p;
ra.prototype.u = function () {
    this.Gc || (this.Gc = i, this.g())
};
ra.prototype.g = function () {
    this.Ah && sa.apply(j, this.Ah)
};
var ta = function (a) {
    a && "function" == typeof a.u && a.u()
}, sa = function (a) {
    for (var b = 0, c = arguments.length; b < c; ++b) {
        var d = arguments[b];
        ga(d) ? sa.apply(j, d) : ta(d)
    }
};
var ua = function (a) {
    this.stack = Error().stack || "";
    a && (this.message = "" + a)
};
z(ua, Error);
ua.prototype.name = "CustomError";
var va = function (a, b) {
    for (var c = 1; c < arguments.length; c++) var d = ("" + arguments[c]).replace(/\$/g, "$$$$"),
        a = a.replace(/\%s/, d);
    return a
}, wa = function (a) {
    return /^[\s\xa0]*$/.test(a)
}, xa = function (a) {
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}, ya = function (a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}, za = /^[a-zA-Z0-9\-_.!~*'()]*$/,
    Aa = function (a) {
        a = "" + a;
        return !za.test(a) ? encodeURIComponent(a) : a
    }, Ga = function (a) {
        if (!Ba.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ca, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Da, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ea, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Fa, "&quot;"));
        return a
    }, Ca = /&/g,
    Da = /</g,
    Ea = />/g,
    Fa = /\"/g,
    Ba = /[&<>\"]/,
    Ja = function (a) {
        return -1 != a.indexOf("&") ? "document" in s ? Ha(a) : Ia(a) : a
    }, Ha = function (a) {
        var b = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        }, c = document.createElement("div");
        return a.replace(Ka, function (a, f) {
            var g = b[a];
            if (g) return g;
            if ("#" == f.charAt(0)) {
                var k = Number("0" + f.substr(1));
                isNaN(k) || (g = String.fromCharCode(k))
            }
            g || (c.innerHTML = a + " ", g = c.firstChild.nodeValue.slice(0, -1));
            return b[a] = g
        })
    }, Ia = function (a) {
        return a.replace(/&([^;]+);/g, function (a, c) {
            switch (c) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    if ("#" == c.charAt(0)) {
                        var d = Number("0" + c.substr(1));
                        if (!isNaN(d)) return String.fromCharCode(d)
                    }
                    return a
            }
        })
    }, Ka = /&([^;\s<&]+);?/g,
    La = function (a) {
        return ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }, Ma = function (a) {
        return Array.prototype.join.call(arguments,
            "")
    };
var Na = function (a, b) {
    b.unshift(a);
    ua.call(this, va.apply(j, b));
    b.shift()
};
z(Na, ua);
Na.prototype.name = "AssertionError";
var Oa = function (a, b, c) {
    if (!a) {
        var d = Array.prototype.slice.call(arguments, 2),
            f = "Assertion failed";
        if (b) var f = f + (": " + b),
            g = d;
        e(new Na("" + f, g || []))
    }
}, Pa = function (a, b) {
    e(new Na("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
};
var A = Array.prototype,
    Qa = A.indexOf ? function (a, b, c) {
        Oa(a.length != j);
        return A.indexOf.call(a, b, c)
    } : function (a, b, c) {
        c = c == j ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (v(a)) return !v(b) || 1 != b.length ? -1 : a.indexOf(b, c);
        for (; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1
    }, Ra = A.forEach ? function (a, b, c) {
        Oa(a.length != j);
        A.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, f = v(a) ? a.split("") : a, g = 0; g < d; g++) g in f && b.call(c, f[g], g, a)
    }, Sa = A.filter ? function (a, b, c) {
        Oa(a.length != j);
        return A.filter.call(a, b, c)
    } : function (a,
    b, c) {
        for (var d = a.length, f = [], g = 0, k = v(a) ? a.split("") : a, l = 0; l < d; l++) if (l in k) {
            var o = k[l];
            b.call(c, o, l, a) && (f[g++] = o)
        }
        return f
    }, Ta = A.map ? function (a, b, c) {
        Oa(a.length != j);
        return A.map.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, f = Array(d), g = v(a) ? a.split("") : a, k = 0; k < d; k++) k in g && (f[k] = b.call(c, g[k], k, a));
        return f
    }, Ua = A.every ? function (a, b, c) {
        Oa(a.length != j);
        return A.every.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, f = v(a) ? a.split("") : a, g = 0; g < d; g++) if (g in f && !b.call(c, f[g], g, a)) return p;
        return i
    },
    Va = function (a, b) {
        return 0 <= Qa(a, b)
    }, Wa = function (a, b) {
        var c = Qa(a, b),
            d;
        if (d = 0 <= c) Oa(a.length != j), A.splice.call(a, c, 1);
        return d
    }, Xa = function (a) {
        return A.concat.apply(A, arguments)
    }, Ya = function (a) {
        if (u(a)) return Xa(a);
        for (var b = [], c = 0, d = a.length; c < d; c++) b[c] = a[c];
        return b
    }, Za = function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c],
                f;
            if (u(d) || (f = ga(d)) && d.hasOwnProperty("callee")) a.push.apply(a, d);
            else if (f) for (var g = a.length, k = d.length, l = 0; l < k; l++) a[g + l] = d[l];
            else a.push(d)
        }
    }, ab = function (a,
    b, c, d) {
        Oa(a.length != j);
        A.splice.apply(a, $a(arguments, 1))
    }, $a = function (a, b, c) {
        Oa(a.length != j);
        return 2 >= arguments.length ? A.slice.call(a, b) : A.slice.call(a, b, c)
    };
var bb = function (a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
}, cb = function (a) {
    var b = [],
        c = 0,
        d;
    for (d in a) b[c++] = a[d];
    return b
}, db = function (a) {
    var b = [],
        c = 0,
        d;
    for (d in a) b[c++] = d;
    return b
}, fb = function () {
    var a = eb,
        b;
    for (b in a) return p;
    return i
}, gb = function (a, b, c) {
    b in a && e(Error('The object already contains the key "' + b + '"'));
    a[b] = c
}, hb = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
    ib = function (a, b) {
        for (var c, d, f = 1; f < arguments.length; f++) {
            d = arguments[f];
            for (c in d) a[c] = d[c];
            for (var g = 0; g < hb.length; g++) c = hb[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
var jb, kb, lb, mb, nb, ob, pb = function () {
    return s.navigator ? s.navigator.userAgent : j
}, qb = function () {
    return s.navigator
};
nb = mb = lb = kb = jb = p;
var rb;
if (rb = pb()) {
    var sb = qb();
    jb = 0 == rb.indexOf("Opera");
    kb = !jb && -1 != rb.indexOf("MSIE");
    mb = (lb = !jb && -1 != rb.indexOf("WebKit")) && -1 != rb.indexOf("Mobile");
    nb = !jb && !lb && "Gecko" == sb.product
}
var tb = jb,
    C = kb,
    D = nb,
    E = lb,
    ub = mb,
    vb = qb();
ob = -1 != (vb && vb.platform || "").indexOf("Mac");
var wb = !! qb() && -1 != (qb().appVersion || "").indexOf("X11"),
    xb;
a: {
    var yb = "",
        zb;
    if (tb && s.opera) var Ab = s.opera.version,
        yb = "function" == typeof Ab ? Ab() : Ab;
    else if (D ? zb = /rv\:([^\);]+)(\)|;)/ : C ? zb = /MSIE\s+([^\);]+)(\)|;)/ : E && (zb = /WebKit\/(\S+)/), zb) var Bb = zb.exec(pb()),
        yb = Bb ? Bb[1] : "";
    if (C) {
        var Cb, Db = s.document;
        Cb = Db ? Db.documentMode : h;
        if (Cb > parseFloat(yb)) {
            xb = "" + Cb;
            break a
        }
    }
    xb = yb
}
var Eb = xb,
    Fb = {}, F = function (a) {
        var b;
        if (!(b = Fb[a])) {
            b = 0;
            for (var c = ya("" + Eb).split("."), d = ya("" + a).split("."), f = Math.max(c.length, d.length), g = 0; 0 == b && g < f; g++) {
                var k = c[g] || "",
                    l = d[g] || "",
                    o = RegExp("(\\d*)(\\D*)", "g"),
                    m = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var n = o.exec(k) || ["", "", ""],
                        q = m.exec(l) || ["", "", ""];
                    if (0 == n[0].length && 0 == q[0].length) break;
                    b = ((0 == n[1].length ? 0 : parseInt(n[1], 10)) < (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? -1 : (0 == n[1].length ? 0 : parseInt(n[1], 10)) > (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? 1 : 0) || ((0 == n[2].length) < (0 == q[2].length) ? -1 : (0 == n[2].length) > (0 == q[2].length) ? 1 : 0) || (n[2] < q[2] ? -1 : n[2] > q[2] ? 1 : 0)
                } while (0 == b)
            }
            b = Fb[a] = 0 <= b
        }
        return b
    }, Gb = {}, Hb = function (a) {
        return Gb[a] || (Gb[a] = C && !! document.documentMode && document.documentMode >= a)
    };
var Ib = function (a) {
    Ib[" "](a);
    return a
};
Ib[" "] = ea;
var Jb = !C || Hb(9),
    Kb = !C || Hb(9),
    Lb = C && !F("8");
!E || F("528");
D && F("1.9b") || C && F("8") || tb && F("9.5") || E && F("528");
D && !F("8") || C && F("9");
var Mb = function (a, b) {
    this.type = a;
    this.currentTarget = this.target = b
};
z(Mb, ra);
r = Mb.prototype;
r.g = function () {
    delete this.type;
    delete this.target;
    delete this.currentTarget
};
r.zb = p;
r.yc = i;
r.stopPropagation = function () {
    this.zb = i
};
r.preventDefault = function () {
    this.yc = p
};
var Nb = function (a, b) {
    a && this.Bb(a, b)
};
z(Nb, Mb);
var Ob = [1, 4, 2];
r = Nb.prototype;
r.target = j;
r.relatedTarget = j;
r.offsetX = 0;
r.offsetY = 0;
r.clientX = 0;
r.clientY = 0;
r.screenX = 0;
r.screenY = 0;
r.button = 0;
r.keyCode = 0;
r.charCode = 0;
r.ctrlKey = p;
r.altKey = p;
r.shiftKey = p;
r.metaKey = p;
r.me = p;
r.Na = j;
r.Bb = function (a, b) {
    var c = this.type = a.type;
    Mb.call(this, c);
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
        if (D) {
            var f;
            a: {
                try {
                    Ib(d.nodeName);
                    f = i;
                    break a
                } catch (g) {}
                f = p
            }
            f || (d = j)
        }
    } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    this.relatedTarget = d;
    this.offsetX = E || a.offsetX !== h ? a.offsetX : a.layerX;
    this.offsetY = E || a.offsetY !== h ? a.offsetY : a.layerY;
    this.clientX = a.clientX !== h ? a.clientX : a.pageX;
    this.clientY = a.clientY !== h ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.me = ob ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.Na = a;
    delete this.yc;
    delete this.zb
};
var Pb = function (a) {
    return Jb ? 0 == a.Na.button : "click" == a.type ? i : !! (a.Na.button & Ob[0])
};
Nb.prototype.stopPropagation = function () {
    Nb.b.stopPropagation.call(this);
    this.Na.stopPropagation ? this.Na.stopPropagation() : this.Na.cancelBubble = i
};
Nb.prototype.preventDefault = function () {
    Nb.b.preventDefault.call(this);
    var a = this.Na;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = p, Lb) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
Nb.prototype.od = function () {
    return this.Na
};
Nb.prototype.g = function () {
    Nb.b.g.call(this);
    this.relatedTarget = this.currentTarget = this.target = this.Na = j
};
var Qb = function () {}, Rb = 0;
r = Qb.prototype;
r.key = 0;
r.removed = p;
r.ze = p;
r.Bb = function (a, b, c, d, f, g) {
    ia(a) ? this.Nf = i : a && a.handleEvent && ia(a.handleEvent) ? this.Nf = p : e(Error("Invalid listener argument"));
    this.Sb = a;
    this.Gf = b;
    this.src = c;
    this.type = d;
    this.capture = !! f;
    this.jd = g;
    this.ze = p;
    this.key = ++Rb;
    this.removed = p
};
r.handleEvent = function (a) {
    return this.Nf ? this.Sb.call(this.jd || this.src, a) : this.Sb.handleEvent.call(this.Sb, a)
};
var Tb = {}, Ub = {}, Vb = {}, Wb = {}, Xb = function (a, b, c, d, f) {
    if (b) {
        if (u(b)) {
            for (var g = 0; g < b.length; g++) Xb(a, b[g], c, d, f);
            return j
        }
        var d = !! d,
            k = Ub;
        b in k || (k[b] = {
            z: 0,
            oa: 0
        });
        k = k[b];
        d in k || (k[d] = {
            z: 0,
            oa: 0
        }, k.z++);
        var k = k[d],
            l = ma(a),
            o;
        k.oa++;
        if (k[l]) {
            o = k[l];
            for (g = 0; g < o.length; g++) if (k = o[g], k.Sb == c && k.jd == f) {
                if (k.removed) break;
                return o[g].key
            }
        } else o = k[l] = [], k.z++;
        g = Yb();
        g.src = a;
        k = new Qb;
        k.Bb(c, g, a, b, d, f);
        c = k.key;
        g.key = c;
        o.push(k);
        Tb[c] = k;
        Vb[l] || (Vb[l] = []);
        Vb[l].push(k);
        a.addEventListener ? (a == s || !a.Ff) && a.addEventListener(b,
        g, d) : a.attachEvent(b in Wb ? Wb[b] : Wb[b] = "on" + b, g);
        return c
    }
    e(Error("Invalid event type"))
}, Yb = function () {
    var a = Zb,
        b = Kb ? function (c) {
            return a.call(b.src, b.key, c)
        } : function (c) {
            c = a.call(b.src, b.key, c);
            if (!c) return c
        };
    return b
}, $b = function (a, b, c, d, f) {
    if (u(b)) {
        for (var g = 0; g < b.length; g++) $b(a, b[g], c, d, f);
        return j
    }
    a = Xb(a, b, c, d, f);
    Tb[a].ze = i;
    return a
}, ac = function (a, b, c, d, f) {
    if (u(b)) for (var g = 0; g < b.length; g++) ac(a, b[g], c, d, f);
    else if (d = !! d, a = bc(a, b, d)) for (g = 0; g < a.length; g++) if (a[g].Sb == c && a[g].capture == d && a[g].jd == f) {
        cc(a[g].key);
        break
    }
}, cc = function (a) {
    if (!Tb[a]) return p;
    var b = Tb[a];
    if (b.removed) return p;
    var c = b.src,
        d = b.type,
        f = b.Gf,
        g = b.capture;
    c.removeEventListener ? (c == s || !c.Ff) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in Wb ? Wb[d] : Wb[d] = "on" + d, f);
    c = ma(c);
    f = Ub[d][g][c];
    if (Vb[c]) {
        var k = Vb[c];
        Wa(k, b);
        0 == k.length && delete Vb[c]
    }
    b.removed = i;
    f.Jf = i;
    dc(d, g, c, f);
    delete Tb[a];
    return i
}, dc = function (a, b, c, d) {
    if (!d.rd && d.Jf) {
        for (var f = 0, g = 0; f < d.length; f++) d[f].removed ? d[f].Gf.src = j : (f != g && (d[g] = d[f]),
        g++);
        d.length = g;
        d.Jf = p;
        0 == g && (delete Ub[a][b][c], Ub[a][b].z--, 0 == Ub[a][b].z && (delete Ub[a][b], Ub[a].z--), 0 == Ub[a].z && delete Ub[a])
    }
}, ec = function (a) {
    var b, c = 0,
        d = b == j;
    b = !! b;
    if (a == j) bb(Vb, function (a) {
        for (var f = a.length - 1; 0 <= f; f--) {
            var g = a[f];
            if (d || b == g.capture) cc(g.key), c++
        }
    });
    else if (a = ma(a), Vb[a]) for (var a = Vb[a], f = a.length - 1; 0 <= f; f--) {
        var g = a[f];
        if (d || b == g.capture) cc(g.key), c++
    }
}, bc = function (a, b, c) {
    var d = Ub;
    return b in d && (d = d[b], c in d && (d = d[c], a = ma(a), d[a])) ? d[a] : j
}, gc = function (a, b, c, d, f) {
    var g = 1,
        b = ma(b);
    if (a[b]) {
        a.oa--;
        a = a[b];
        a.rd ? a.rd++ : a.rd = 1;
        try {
            for (var k = a.length, l = 0; l < k; l++) {
                var o = a[l];
                o && !o.removed && (g &= fc(o, f) !== p)
            }
        } finally {
            a.rd--, dc(c, d, b, a)
        }
    }
    return Boolean(g)
}, fc = function (a, b) {
    var c = a.handleEvent(b);
    a.ze && cc(a.key);
    return c
}, Zb = function (a, b) {
    if (!Tb[a]) return i;
    var c = Tb[a],
        d = c.type,
        f = Ub;
    if (!(d in f)) return i;
    var f = f[d],
        g, k;
    if (!Kb) {
        g = b || da("window.event");
        var l = i in f,
            o = p in f;
        if (l) {
            if (0 > g.keyCode || g.returnValue != h) return i;
            a: {
                var m = p;
                if (0 == g.keyCode) try {
                    g.keyCode = -1;
                    break a
                } catch (n) {
                    m = i
                }
                if (m || g.returnValue == h) g.returnValue = i
            }
        }
        m = new Nb;
        m.Bb(g, this);
        g = i;
        try {
            if (l) {
                for (var q = [], x = m.currentTarget; x; x = x.parentNode) q.push(x);
                k = f[i];
                k.oa = k.z;
                for (var y = q.length - 1; !m.zb && 0 <= y && k.oa; y--) m.currentTarget = q[y], g &= gc(k, q[y], d, i, m);
                if (o) {
                    k = f[p];
                    k.oa = k.z;
                    for (y = 0; !m.zb && y < q.length && k.oa; y++) m.currentTarget = q[y], g &= gc(k, q[y], d, p, m)
                }
            } else g = fc(c, m)
        } finally {
            q && (q.length = 0), m.u()
        }
        return g
    }
    d = new Nb(b, this);
    try {
        g = fc(c, d)
    } finally {
        d.u()
    }
    return g
};
var hc = function () {};
z(hc, ra);
r = hc.prototype;
r.Ff = i;
r.cd = j;
r.ke = function (a) {
    this.cd = a
};
r.addEventListener = function (a, b, c, d) {
    Xb(this, a, b, c, d)
};
r.removeEventListener = function (a, b, c, d) {
    ac(this, a, b, c, d)
};
r.dispatchEvent = function (a) {
    var b = a.type || a,
        c = Ub;
    if (b in c) {
        if (v(a)) a = new Mb(a, this);
        else if (a instanceof Mb) a.target = a.target || this;
        else {
            var d = a,
                a = new Mb(b, this);
            ib(a, d)
        }
        var d = 1,
            f, c = c[b],
            b = i in c,
            g;
        if (b) {
            f = [];
            for (g = this; g; g = g.cd) f.push(g);
            g = c[i];
            g.oa = g.z;
            for (var k = f.length - 1; !a.zb && 0 <= k && g.oa; k--) a.currentTarget = f[k], d &= gc(g, f[k], a.type, i, a) && a.yc != p
        }
        if (p in c) if (g = c[p], g.oa = g.z, b) for (k = 0; !a.zb && k < f.length && g.oa; k++) a.currentTarget = f[k], d &= gc(g, f[k], a.type, p, a) && a.yc != p;
        else for (f = this; !a.zb && f && g.oa; f = f.cd) a.currentTarget = f, d &= gc(g, f, a.type, p, a) && a.yc != p;
        a = Boolean(d)
    } else a = i;
    return a
};
r.g = function () {
    hc.b.g.call(this);
    ec(this);
    this.cd = j
};
var jc = function (a, b) {
    this.Ab = a || 1;
    this.rc = b || ic;
    this.re = w(this.oh, this);
    this.se = qa()
};
z(jc, hc);
jc.prototype.enabled = p;
var ic = s.window;
r = jc.prototype;
r.o = j;
r.setInterval = function (a) {
    this.Ab = a;
    this.o && this.enabled ? (this.stop(), this.start()) : this.o && this.stop()
};
r.oh = function () {
    if (this.enabled) {
        var a = qa() - this.se;
        0 < a && a < 0.8 * this.Ab ? this.o = this.rc.setTimeout(this.re, this.Ab - a) : (this.dispatchEvent("tick"), this.enabled && (this.o = this.rc.setTimeout(this.re, this.Ab), this.se = qa()))
    }
};
r.start = function () {
    this.enabled = i;
    this.o || (this.o = this.rc.setTimeout(this.re, this.Ab), this.se = qa())
};
r.stop = function () {
    this.enabled = p;
    this.o && (this.rc.clearTimeout(this.o), this.o = j)
};
r.g = function () {
    jc.b.g.call(this);
    this.stop();
    delete this.rc
};
var kc = function (a, b, c) {
    ia(a) ? c && (a = w(a, c)) : a && "function" == typeof a.handleEvent ? a = w(a.handleEvent, a) : e(Error("Invalid listener argument"));
    return 2147483647 < b ? -1 : ic.setTimeout(a, b || 0)
};
var lc = function (a, b, c) {
    this.Xd = a;
    this.Ab = b || 0;
    this.$ = c;
    this.gh = w(this.mh, this)
};
z(lc, ra);
r = lc.prototype;
r.ea = 0;
r.g = function () {
    lc.b.g.call(this);
    this.stop();
    delete this.Xd;
    delete this.$
};
r.start = function (a) {
    this.stop();
    this.ea = kc(this.gh, a !== h ? a : this.Ab)
};
r.stop = function () {
    this.rb() && ic.clearTimeout(this.ea);
    this.ea = 0
};
r.rb = function () {
    return 0 != this.ea
};
r.mh = function () {
    this.ea = 0;
    this.Xd && this.Xd.call(this.$)
};
var mc, nc = function (a) {
    a = a.className;
    return v(a) && a.match(/\S+/g) || []
}, G = function (a, b) {
    for (var c = nc(a), d = $a(arguments, 1), f = c.length + d.length, g = c, k = 0; k < d.length; k++) Va(g, d[k]) || g.push(d[k]);
    a.className = c.join(" ");
    return c.length == f
}, pc = function (a, b) {
    var c = nc(a),
        d = $a(arguments, 1),
        f = oc(c, d);
    a.className = f.join(" ");
    return f.length == c.length - d.length
}, oc = function (a, b) {
    return Sa(a, function (a) {
        return !Va(b, a)
    })
};
var H = function (a, b) {
    this.x = a !== h ? a : 0;
    this.y = b !== h ? b : 0
};
H.prototype.Ca = function () {
    return new H(this.x, this.y)
};
H.prototype.toString = function () {
    return "(" + this.x + ", " + this.y + ")"
};
var qc = function (a, b) {
    return new H(a.x - b.x, a.y - b.y)
};
var rc = function (a, b) {
    this.width = a;
    this.height = b
};
r = rc.prototype;
r.Ca = function () {
    return new rc(this.width, this.height)
};
r.toString = function () {
    return "(" + this.width + " x " + this.height + ")"
};
r.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
r.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
r.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var sc = !C || Hb(9);
!D && !C || C && Hb(9) || D && F("1.9.1");
var tc = C && !F("9");
var vc = function (a) {
    return a ? new uc(I(a)) : mc || (mc = new uc)
}, J = function (a) {
    return v(a) ? document.getElementById(a) : a
}, xc = function (a, b, c, d) {
    a = d || a;
    b = b && "*" != b ? b.toUpperCase() : "";
    if (a.querySelectorAll && a.querySelector && (!E || wc(document) || F("528")) && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
    if (c && a.getElementsByClassName) {
        a = a.getElementsByClassName(c);
        if (b) {
            for (var d = {}, f = 0, g = 0, k; k = a[g]; g++) b == k.nodeName && (d[f++] = k);
            d.length = f;
            return d
        }
        return a
    }
    a = a.getElementsByTagName(b || "*");
    if (c) {
        d = {};
        for (g = f = 0; k = a[g]; g++) b = k.className, "function" == typeof b.split && Va(b.split(/\s+/), c) && (d[f++] = k);
        d.length = f;
        return d
    }
    return a
}, zc = function (a, b) {
    bb(b, function (b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in yc ? a.setAttribute(yc[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}, yc = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    rowspan: "rowSpan",
    valign: "vAlign",
    height: "height",
    width: "width",
    usemap: "useMap",
    frameborder: "frameBorder",
    maxlength: "maxLength",
    type: "type"
}, Bc = function (a, b) {
    var c = b[0],
        d = b[1];
    if (!sc && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', Ga(d.name), '"');
        if (d.type) {
            c.push(' type="', Ga(d.type), '"');
            var f = {};
            ib(f, d);
            d = f;
            delete d.type
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    d && (v(d) ? c.className = d : u(d) ? G.apply(j, [c].concat(d)) : zc(c, d));
    2 < b.length && Ac(a, c, b);
    return c
}, Ac = function (a, b, c) {
    function d(c) {
        c && b.appendChild(v(c) ? a.createTextNode(c) : c)
    }
    for (var f = 2; f < c.length; f++) {
        var g = c[f];
        ga(g) && !(ja(g) && 0 < g.nodeType) ? Ra(Cc(g) ? Ya(g) : g, d) : d(g)
    }
}, wc = function (a) {
    return "CSS1Compat" == a.compatMode
}, Dc = function (a) {
    for (var b; b = a.firstChild;) a.removeChild(b)
}, Ec = function (a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : j
}, Gc = function (a) {
    return a.firstElementChild != h ? a.firstElementChild : Fc(a.firstChild)
}, Fc = function (a) {
    for (; a && 1 != a.nodeType;) a = a.nextSibling;
    return a
}, Hc = function (a, b) {
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
}, I = function (a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}, Ic = function (a, b) {
    if ("textContent" in a) a.textContent = b;
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = b
    } else Dc(a), a.appendChild(I(a).createTextNode(b))
}, Jc = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
}, Kc = {
    IMG: " ",
    BR: "\n"
}, Lc = function (a) {
    var b = a.getAttributeNode("tabindex");
    return b && b.specified ? (a = a.tabIndex, ha(a) && 0 <= a && 32768 > a) : p
}, Nc = function (a) {
    var b = [];
    Mc(a, b, p);
    return b.join("")
}, Mc = function (a, b, c) {
    if (!(a.nodeName in Jc)) if (3 == a.nodeType) c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
    else if (a.nodeName in Kc) b.push(Kc[a.nodeName]);
    else for (a = a.firstChild; a;) Mc(a, b, c), a = a.nextSibling
}, Cc = function (a) {
    if (a && "number" == typeof a.length) {
        if (ja(a)) return "function" == typeof a.item || "string" == typeof a.item;
        if (ia(a)) return "function" == typeof a.item
    }
    return p
}, Oc = function (a) {
    try {
        return a && a.activeElement
    } catch (b) {}
    return j
}, uc = function (a) {
    this.D = a || s.document || document
};
uc.prototype.m = vc;
var Pc = function (a) {
    return a.D
};
uc.prototype.a = function (a) {
    return v(a) ? this.D.getElementById(a) : a
};
uc.prototype.e = function (a, b, c) {
    return Bc(this.D, arguments)
};
uc.prototype.createElement = function (a) {
    return this.D.createElement(a)
};
uc.prototype.createTextNode = function (a) {
    return this.D.createTextNode(a)
};
var Qc = function (a) {
    return wc(a.D)
}, Rc = function (a) {
    var b = a.D,
        a = !E && wc(b) ? b.documentElement : b.body,
        b = b.parentWindow || b.defaultView;
    return new H(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
};
r = uc.prototype;
r.appendChild = function (a, b) {
    a.appendChild(b)
};
r.bf = Dc;
r.removeNode = Ec;
r.Tb = Gc;
r.contains = Hc;
var Sc = "StopIteration" in s ? s.StopIteration : Error("StopIteration"),
    Tc = function () {};
Tc.prototype.next = function () {
    e(Sc)
};
Tc.prototype.Ee = function () {
    return this
};
var Uc = function (a) {
    if (a instanceof Tc) return a;
    if ("function" == typeof a.Ee) return a.Ee(p);
    if (ga(a)) {
        var b = 0,
            c = new Tc;
        c.next = function () {
            for (;;) {
                b >= a.length && e(Sc);
                if (b in a) return a[b++];
                b++
            }
        };
        return c
    }
    e(Error("Not implemented"))
}, Vc = function (a, b, c) {
    if (ga(a)) try {
        Ra(a, b, c)
    } catch (d) {
        d !== Sc && e(d)
    } else {
        a = Uc(a);
        try {
            for (;;) b.call(c, a.next(), h, a)
        } catch (f) {
            f !== Sc && e(f)
        }
    }
}, Wc = function (a, b) {
    a = Uc(a);
    try {
        for (; !b.call(h, a.next(), h, a););
    } catch (c) {
        c !== Sc && e(c)
    }
};
var Xc = function (a) {
    if ("function" == typeof a.Cb) return a.Cb();
    if (v(a)) return a.split("");
    if (ga(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    }
    return cb(a)
}, Yc = function (a, b, c) {
    if ("function" == typeof a.forEach) a.forEach(b, c);
    else if (ga(a) || v(a)) Ra(a, b, c);
    else {
        var d;
        if ("function" == typeof a.Ub) d = a.Ub();
        else if ("function" != typeof a.Cb) if (ga(a) || v(a)) {
            d = [];
            for (var f = a.length, g = 0; g < f; g++) d.push(g)
        } else d = db(a);
        else d = h;
        for (var f = Xc(a), g = f.length, k = 0; k < g; k++) b.call(c, f[k], d && d[k], a)
    }
};
var ad = function (a, b) {
    this.Pa = {};
    this.G = [];
    var c = arguments.length;
    if (1 < c) {
        c % 2 && e(Error("Uneven number of arguments"));
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else if (a) {
        a instanceof ad ? (c = a.Ub(), d = a.Cb()) : (c = db(a), d = cb(a));
        for (var f = 0; f < c.length; f++) this.set(c[f], d[f])
    }
};
r = ad.prototype;
r.z = 0;
r.qd = 0;
r.Cb = function () {
    bd(this);
    for (var a = [], b = 0; b < this.G.length; b++) a.push(this.Pa[this.G[b]]);
    return a
};
r.Ub = function () {
    bd(this);
    return this.G.concat()
};
r.bb = function (a) {
    return Object.prototype.hasOwnProperty.call(this.Pa, a)
};
r.clear = function () {
    this.Pa = {};
    this.qd = this.z = this.G.length = 0
};
var bd = function (a) {
    if (a.z != a.G.length) {
        for (var b = 0, c = 0; b < a.G.length;) {
            var d = a.G[b];
            Object.prototype.hasOwnProperty.call(a.Pa, d) && (a.G[c++] = d);
            b++
        }
        a.G.length = c
    }
    if (a.z != a.G.length) {
        for (var f = {}, c = b = 0; b < a.G.length;) d = a.G[b], Object.prototype.hasOwnProperty.call(f, d) || (a.G[c++] = d, f[d] = 1), b++;
        a.G.length = c
    }
};
ad.prototype.get = function (a, b) {
    return Object.prototype.hasOwnProperty.call(this.Pa, a) ? this.Pa[a] : b
};
ad.prototype.set = function (a, b) {
    Object.prototype.hasOwnProperty.call(this.Pa, a) || (this.z++, this.G.push(a), this.qd++);
    this.Pa[a] = b
};
ad.prototype.Ca = function () {
    return new ad(this)
};
ad.prototype.Ee = function (a) {
    bd(this);
    var b = 0,
        c = this.G,
        d = this.Pa,
        f = this.qd,
        g = this,
        k = new Tc;
    k.next = function () {
        for (;;) {
            f != g.qd && e(Error("The map has changed since the iterator was created"));
            b >= c.length && e(Sc);
            var k = c[b++];
            return a ? k : d[k]
        }
    };
    return k
};
var cd = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
};
cd.prototype.Ca = function () {
    return new cd(this.top, this.right, this.bottom, this.left)
};
cd.prototype.toString = function () {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
cd.prototype.contains = function (a) {
    return !this || !a ? p : a instanceof cd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
};
var dd = function (a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
};
dd.prototype.Ca = function () {
    return new dd(this.left, this.top, this.width, this.height)
};
dd.prototype.toString = function () {
    return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
dd.prototype.contains = function (a) {
    return a instanceof dd ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
var ed = function (a, b) {
    var c = I(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, j)) ? c[b] || c.getPropertyValue(b) : ""
}, fd = function (a, b) {
    return a.currentStyle ? a.currentStyle[b] : j
}, gd = function (a, b) {
    return ed(a, b) || fd(a, b) || a.style && a.style[b]
}, id = function (a, b, c) {
    var d, f = D && (ob || wb) && F("1.9");
    b instanceof H ? (d = b.x, b = b.y) : (d = b, b = c);
    a.style.left = hd(d, f);
    a.style.top = hd(b, f)
}, jd = function (a) {
    a = a ? 9 == a.nodeType ? a : I(a) : document;
    return C && !Hb(9) && !Qc(vc(a)) ? a.body : a.documentElement
},
kd = function (a) {
    var b = a.getBoundingClientRect();
    C && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}, ld = function (a) {
    if (C && !Hb(8)) return a.offsetParent;
    for (var b = I(a), c = gd(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode; a && a != b; a = a.parentNode) if (c = gd(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c ||
        "relative" == c)) return a;
    return j
}, od = function (a) {
    for (var b = new cd(0, Infinity, Infinity, 0), c = vc(a), d = c.D.body, f = c.D.documentElement, g = !E && wc(c.D) ? c.D.documentElement : c.D.body; a = ld(a);) if ((!C || 0 != a.clientWidth) && (!E || 0 != a.clientHeight || a != d) && a != d && a != f && "visible" != gd(a, "overflow")) {
        var k = md(a),
            l;
        l = a;
        if (D && !F("1.9")) {
            var o = parseFloat(ed(l, "borderLeftWidth"));
            if (nd(l)) var m = l.offsetWidth - l.clientWidth - o - parseFloat(ed(l, "borderRightWidth")),
                o = o + m;
            l = new H(o, parseFloat(ed(l, "borderTopWidth")))
        } else l = new H(l.clientLeft,
        l.clientTop);
        k.x += l.x;
        k.y += l.y;
        b.top = Math.max(b.top, k.y);
        b.right = Math.min(b.right, k.x + a.clientWidth);
        b.bottom = Math.min(b.bottom, k.y + a.clientHeight);
        b.left = Math.max(b.left, k.x)
    }
    d = g.scrollLeft;
    g = g.scrollTop;
    b.left = Math.max(b.left, d);
    b.top = Math.max(b.top, g);
    c = c.D.parentWindow || c.D.defaultView || window;
    f = c.document;
    E && !F("500") && !ub ? ("undefined" == typeof c.innerHeight && (c = window), f = c.innerHeight, a = c.document.documentElement.scrollHeight, c == c.top && a < f && (f -= 15), c = new rc(c.innerWidth, f)) : (c = wc(f) ? f.documentElement : f.body, c = new rc(c.clientWidth, c.clientHeight));
    b.right = Math.min(b.right, d + c.width);
    b.bottom = Math.min(b.bottom, g + c.height);
    return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : j
}, md = function (a) {
    var b, c = I(a),
        d = gd(a, "position"),
        f = D && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
        g = new H(0, 0),
        k = jd(c);
    if (a == k) return g;
    if (a.getBoundingClientRect) b = kd(a), a = Rc(vc(c)), g.x = b.left + a.x, g.y = b.top + a.y;
    else if (c.getBoxObjectFor && !f) b = c.getBoxObjectFor(a),
    a = c.getBoxObjectFor(k), g.x = b.screenX - a.screenX, g.y = b.screenY - a.screenY;
    else {
        b = a;
        do {
            g.x += b.offsetLeft;
            g.y += b.offsetTop;
            b != a && (g.x += b.clientLeft || 0, g.y += b.clientTop || 0);
            if (E && "fixed" == gd(b, "position")) {
                g.x += c.body.scrollLeft;
                g.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        } while (b && b != a);
        if (tb || E && "absolute" == d) g.y -= c.body.offsetTop;
        for (b = a;
        (b = ld(b)) && b != c.body && b != k;) if (g.x -= b.scrollLeft, !tb || "TR" != b.tagName) g.y -= b.scrollTop
    }
    return g
}, pd = function (a, b, c) {
    var d = md(a);
    b instanceof H && (c = b.y, b = b.x);
    id(a, a.offsetLeft + (b - d.x), a.offsetTop + (c - d.y))
}, hd = function (a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}, rd = function (a) {
    if ("none" != gd(a, "display")) return qd(a);
    var b = a.style,
        c = b.display,
        d = b.visibility,
        f = b.position;
    b.visibility = "hidden";
    b.position = "absolute";
    b.display = "inline";
    a = qd(a);
    b.display = c;
    b.position = f;
    b.visibility = d;
    return a
}, qd = function (a) {
    var b = a.offsetWidth,
        c = a.offsetHeight,
        d = E && !b && !c;
    return (b === h || d) && a.getBoundingClientRect ? (a = kd(a), new rc(a.right - a.left, a.bottom - a.top)) : new rc(b, c)
},
sd = function (a) {
    var b = md(a),
        a = rd(a);
    return new dd(b.x, b.y, a.width, a.height)
}, K = function (a, b) {
    a.style.display = b ? "" : "none"
}, nd = function (a) {
    return "rtl" == gd(a, "direction")
}, td = D ? "MozUserSelect" : E ? "WebkitUserSelect" : j,
    ud = function (a, b, c) {
        c = !c ? a.getElementsByTagName("*") : j;
        if (td) {
            if (b = b ? "none" : "", a.style[td] = b, c) for (var a = 0, d; d = c[a]; a++) d.style[td] = b
        } else if (C || tb) if (b = b ? "on" : "", a.setAttribute("unselectable", b), c) for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
    }, vd = function (a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b,
        10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        var f = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return f
    }, wd = {
        thin: 2,
        medium: 4,
        thick: 6
    }, xd = function (a, b) {
        if ("none" == fd(a, b + "Style")) return 0;
        var c = fd(a, b + "Width");
        return c in wd ? wd[c] : vd(a, c)
    }, yd = function (a) {
        if (C) {
            var b = xd(a, "borderLeft"),
                c = xd(a, "borderRight"),
                d = xd(a, "borderTop"),
                a = xd(a, "borderBottom");
            return new cd(d, c, a, b)
        }
        b = ed(a, "borderLeftWidth");
        c = ed(a, "borderRightWidth");
        d = ed(a, "borderTopWidth");
        a = ed(a, "borderBottomWidth");
        return new cd(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    };
var zd = function (a) {
    this.Wb = a;
    var b = xc(document, j, "gc-status-text", a);
    this.we = b = b.length ? b[0] : a
};
z(zd, hc);
var Ad = new ad;
zd.prototype.Xb = j;
zd.prototype.o = j;
var Bd = function (a) {
    a = J(a);
    a.id || e(Error("gc.Notification areas must have ids"));
    Ad.bb(a.id) || Ad.set(a.id, new zd(a));
    return Ad.get(a.id)
};
zd.prototype.show = function (a, b, c, d) {
    d ? (this.Ae = new lc(w(this.sd, this, a, b, c), d), this.Ae.start()) : this.sd(a, b, c)
};
zd.prototype.a = function () {
    return this.Wb
};
zd.prototype.sd = function (a, b, c) {
    b && (this.Xb && pc(this.Wb, this.Xb), G(this.Wb, b), this.Xb = b);
    v(a) ? this.we.innerHTML = a : (Dc(this.we), this.we.appendChild(a));
    K(this.Wb, i);
    this.o && this.o.stop();
    c && (this.o = new lc(this.reset, c, this), this.o.start())
};
zd.prototype.reset = function () {
    this.Ae && this.Ae.stop();
    this.Xb && (pc(this.Wb, this.Xb), this.Xb = j);
    K(this.Wb, p)
};
var L = function (a) {
    this.$ = a;
    this.G = []
};
z(L, ra);
var Cd = [];
L.prototype.d = function (a, b, c, d, f) {
    u(b) || (Cd[0] = b, b = Cd);
    for (var g = 0; g < b.length; g++) this.G.push(Xb(a, b[g], c || this, d || p, f || this.$ || this));
    return this
};
var Dd = function (a, b, c, d, f, g) {
    if (u(c)) for (var k = 0; k < c.length; k++) Dd(a, b, c[k], d, f, g);
    else a.G.push($b(b, c, d || a, f, g || a.$ || a))
};
L.prototype.Q = function (a, b, c, d, f) {
    if (u(b)) for (var g = 0; g < b.length; g++) this.Q(a, b[g], c, d, f);
    else {
        a: {
            c = c || this;
            f = f || this.$ || this;
            d = !! d;
            if (a = bc(a, b, d)) for (b = 0; b < a.length; b++) if (!a[b].removed && a[b].Sb == c && a[b].capture == d && a[b].jd == f) {
                a = a[b];
                break a
            }
            a = j
        }
        a && (a = a.key, cc(a), Wa(this.G, a))
    }
    return this
};
L.prototype.removeAll = function () {
    Ra(this.G, cc);
    this.G.length = 0
};
L.prototype.g = function () {
    L.b.g.call(this);
    this.removeAll()
};
L.prototype.handleEvent = function () {
    e(Error("EventHandler.handleEvent not implemented"))
};
var Ed = function () {};
t(Ed);
Ed.prototype.Dh = 0;
var Fd = function (a) {
    return ":" + (a.Dh++).toString(36)
};
Ed.t();
var M = function (a) {
    this.L = a || vc();
    this.vc = Gd
};
z(M, hc);
M.prototype.sh = Ed.t();
var Gd = j,
    Hd = function (a, b) {
        switch (a) {
            case 1:
                return b ? "disable" : "enable";
            case 2:
                return b ? "highlight" : "unhighlight";
            case 4:
                return b ? "activate" : "deactivate";
            case 8:
                return b ? "select" : "unselect";
            case 16:
                return b ? "check" : "uncheck";
            case 32:
                return b ? "focus" : "blur";
            case 64:
                return b ? "open" : "close"
        }
        e(Error("Invalid component state"))
    };
r = M.prototype;
r.ea = j;
r.s = p;
r.c = j;
r.vc = j;
r.Jd = j;
r.C = j;
r.P = j;
r.ka = j;
r.He = p;
var Id = function (a) {
    return a.ea || (a.ea = Fd(a.sh))
}, Jd = function (a, b) {
    if (a.C && a.C.ka) {
        var c = a.C.ka,
            d = a.ea;
        d in c && delete c[d];
        gb(a.C.ka, b, a)
    }
    a.ea = b
};
M.prototype.a = function () {
    return this.c
};
var Kd = function (a) {
    return a.Jb || (a.Jb = new L(a))
}, Md = function (a, b) {
    a == b && e(Error("Unable to set parent component"));
    b && a.C && a.ea && Ld(a.C, a.ea) && a.C != b && e(Error("Unable to set parent component"));
    a.C = b;
    M.b.ke.call(a, b)
};
r = M.prototype;
r.getParent = function () {
    return this.C
};
r.ke = function (a) {
    this.C && this.C != a && e(Error("Method not supported"));
    M.b.ke.call(this, a)
};
r.m = function () {
    return this.L
};
r.e = function () {
    this.c = this.L.createElement("div")
};
r.Dc = function (a) {
    Nd(this, a)
};
var Nd = function (a, b, c) {
    a.s && e(Error("Component already rendered"));
    a.c || a.e();
    b ? b.insertBefore(a.c, c || j) : a.L.D.body.appendChild(a.c);
    (!a.C || a.C.s) && a.T()
};
r = M.prototype;
r.l = function (a) {
    this.s && e(Error("Component already rendered"));
    if (a && this.na(a)) {
        this.He = i;
        if (!this.L || this.L.D != I(a)) this.L = vc(a);
        this.ua(a);
        this.T()
    } else e(Error("Invalid element to decorate"))
};
r.na = function () {
    return i
};
r.ua = function (a) {
    this.c = a
};
r.T = function () {
    this.s = i;
    Od(this, function (a) {
        !a.s && a.a() && a.T()
    })
};
r.ia = function () {
    Od(this, function (a) {
        a.s && a.ia()
    });
    this.Jb && this.Jb.removeAll();
    this.s = p
};
r.g = function () {
    M.b.g.call(this);
    this.s && this.ia();
    this.Jb && (this.Jb.u(), delete this.Jb);
    Od(this, function (a) {
        a.u()
    });
    !this.He && this.c && Ec(this.c);
    this.C = this.Jd = this.c = this.ka = this.P = j
};
r.pc = function (a, b) {
    this.tc(a, Pd(this), b)
};
r.tc = function (a, b, c) {
    a.s && (c || !this.s) && e(Error("Component already rendered"));
    (0 > b || b > Pd(this)) && e(Error("Child component index out of bounds"));
    if (!this.ka || !this.P) this.ka = {}, this.P = [];
    a.getParent() == this ? (this.ka[Id(a)] = a, Wa(this.P, a)) : gb(this.ka, Id(a), a);
    Md(a, this);
    ab(this.P, b, 0, a);
    a.s && this.s && a.getParent() == this ? (c = this.B(), c.insertBefore(a.a(), c.childNodes[b] || j)) : c ? (this.c || this.e(), b = N(this, b + 1), Nd(a, this.B(), b ? b.c : j)) : this.s && !a.s && a.c && a.T()
};
r.B = function () {
    return this.c
};
var Qd = function (a) {
    a.vc == j && (a.vc = nd(a.s ? a.c : a.L.D.body));
    return a.vc
};
M.prototype.Nb = function (a) {
    this.s && e(Error("Component already rendered"));
    this.vc = a
};
var Pd = function (a) {
    return a.P ? a.P.length : 0
}, Ld = function (a, b) {
    return a.ka && b ? (b in a.ka ? a.ka[b] : h) || j : j
}, N = function (a, b) {
    return a.P ? a.P[b] || j : j
}, Od = function (a, b, c) {
    a.P && Ra(a.P, b, c)
}, Rd = function (a, b) {
    return a.P && b ? Qa(a.P, b) : -1
};
M.prototype.removeChild = function (a, b) {
    if (a) {
        var c = v(a) ? a : Id(a),
            a = Ld(this, c);
        if (c && a) {
            var d = this.ka;
            c in d && delete d[c];
            Wa(this.P, a);
            b && (a.ia(), a.c && Ec(a.c));
            Md(a, j)
        }
    }
    a || e(Error("Child is not in parent component"));
    return a
};
M.prototype.bf = function (a) {
    for (; this.P && 0 != this.P.length;) this.removeChild(N(this, 0), a)
};
var Td = function (a, b, c, d, f) {
    if (!C && (!E || !F("525"))) return i;
    if (ob && f) return Sd(a);
    if (f && !d || !c && (17 == b || 18 == b) || C && d && b == a) return p;
    switch (a) {
        case 13:
            return !(C && Hb(9));
        case 27:
            return !E
    }
    return Sd(a)
}, Sd = function (a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || E && 0 == a) return i;
    switch (a) {
        case 32:
        case 63:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return i;
        default:
            return p
    }
}, Ud = function (a) {
    switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
    }
};
var Vd = function (a, b) {
    a.setAttribute("role", b);
    a.Jh = b
}, O = function (a, b, c) {
    a.setAttribute("aria-" + b, c)
};
var Wd = function () {}, Xd;
t(Wd);
r = Wd.prototype;
r.la = function () {};
r.e = function (a) {
    var b = a.m().e("div", this.cb(a).join(" "), a.ha);
    this.ad(a, b);
    return b
};
r.B = function (a) {
    return a
};
r.qc = function (a, b, c) {
    if (a = a.a ? a.a() : a) if (C && !F("7")) {
        var d = Yd(this, nc(a), b);
        d.push(b);
        pa(c ? G : pc, a).apply(j, d)
    } else c ? G(a, b) : pc(a, b)
};
r.na = function () {
    return i
};
r.l = function (a, b) {
    b.id && Jd(a, b.id);
    var c = this.B(b);
    c && c.firstChild ? Zd(a, c.firstChild.nextSibling ? Ya(c.childNodes) : c.firstChild) : a.ha = j;
    var d = 0,
        f = this.k(),
        g = this.Ba(),
        k = p,
        l = p,
        c = p,
        o = nc(b);
    Ra(o, function (a) {
        !k && a == f ? (k = i, g == f && (l = i)) : !l && a == g ? l = i : d |= this.Ud(a)
    }, this);
    a.j = d;
    k || (o.push(f), g == f && (l = i));
    l || o.push(g);
    var m = a.wa;
    m && o.push.apply(o, m);
    if (C && !F("7")) {
        var n = Yd(this, o);
        0 < n.length && (o.push.apply(o, n), c = i)
    }
    if (!k || !l || m || c) b.className = o.join(" ");
    this.ad(a, b);
    return b
};
r.Gb = function (a) {
    Qd(a) && this.Nb(a.a(), i);
    a.isEnabled() && this.Ua(a, a.K())
};
r.ad = function (a, b) {
    Oa(a);
    Oa(b);
    a.isEnabled() || this.da(b, 1, i);
    a.j & 8 && this.da(b, 8, i);
    a.J & 16 && this.da(b, 16, !! (a.j & 16));
    a.J & 64 && this.da(b, 64, a.fa())
};
r.$b = function (a, b) {
    ud(a, !b, !C && !tb)
};
r.Nb = function (a, b) {
    this.qc(a, this.Ba() + "-rtl", b)
};
r.Sa = function (a) {
    var b;
    return a.J & 32 && (b = a.R()) ? Lc(b) : p
};
r.Ua = function (a, b) {
    var c;
    if (a.J & 32 && (c = a.R())) {
        if (!b && a.j & 32) {
            try {
                c.blur()
            } catch (d) {}
            a.j & 32 && a.Ia(j)
        }
        Lc(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
    }
};
r.H = function (a, b) {
    K(a, b)
};
r.ma = function (a, b, c) {
    var d = a.a();
    if (d) {
        var f = this.ec(b);
        f && this.qc(a, f, c);
        this.da(d, b, c)
    }
};
r.da = function (a, b, c) {
    Xd || (Xd = {
        1: "disabled",
        8: "selected",
        16: "checked",
        64: "expanded"
    });
    (b = Xd[b]) && O(a, b, c)
};
r.X = function (a, b) {
    var c = this.B(a);
    if (c && (Dc(c), b)) if (v(b)) Ic(c, b);
    else {
        var d = function (a) {
            if (a) {
                var b = I(c);
                c.appendChild(v(a) ? b.createTextNode(a) : a)
            }
        };
        u(b) ? Ra(b, d) : ga(b) && !("nodeType" in b) ? Ra(Ya(b), d) : d(b)
    }
};
r.R = function (a) {
    return a.a()
};
r.k = function () {
    return "goog-control"
};
r.Fe = function () {
    return []
};
r.Ba = function () {
    return this.k()
};
r.cb = function (a) {
    var b = this.k(),
        c = [b],
        d = this.Ba();
    d != b && c.push(d);
    b = a.j;
    for (d = []; b;) {
        var f = b & -b;
        d.push(this.ec(f));
        b &= ~f
    }
    c.push.apply(c, d);
    (a = a.wa) && c.push.apply(c, a);
    C && !F("7") && c.push.apply(c, Yd(this, c));
    return c
};
var Yd = function (a, b, c) {
    var d = [];
    c && (b = b.concat([c]));
    Ra(a.Fe(), function (a) {
        Ua(a, pa(Va, b)) && (!c || Va(a, c)) && d.push(a.join("_"))
    });
    return d
};
Wd.prototype.ec = function (a) {
    this.td || $d(this);
    return this.td[a]
};
Wd.prototype.Ud = function (a) {
    if (!this.Xf) {
        this.td || $d(this);
        var b = this.td,
            c = {}, d;
        for (d in b) c[b[d]] = d;
        this.Xf = c
    }
    a = parseInt(this.Xf[a], 10);
    return isNaN(a) ? 0 : a
};
var $d = function (a) {
    var b = a.Ba();
    a.td = {
        1: b + "-disabled",
        2: b + "-hover",
        4: b + "-active",
        8: b + "-selected",
        16: b + "-checked",
        32: b + "-focused",
        64: b + "-open"
    }
};
var ae = function () {};
z(ae, Wd);
t(ae);
r = ae.prototype;
r.la = function () {
    return "button"
};
r.da = function (a, b, c) {
    16 == b ? O(a, "pressed", c) : ae.b.da.call(this, a, b, c)
};
r.e = function (a) {
    var b = ae.b.e.call(this, a),
        c = a.mb();
    c && this.Gd(b, c);
    (c = a.n()) && this.N(b, c);
    a.J & 16 && this.da(b, 16, !! (a.j & 16));
    return b
};
r.l = function (a, b) {
    var b = ae.b.l.call(this, a, b),
        c = this.n(b);
    a.Lc = c;
    a.Dd = this.mb(b);
    a.J & 16 && this.da(b, 16, !! (a.j & 16));
    return b
};
r.n = ea;
r.N = ea;
r.mb = function (a) {
    return a.title
};
r.Gd = function (a, b) {
    a && (a.title = b || "")
};
r.k = function () {
    return "goog-button"
};
var ce = function (a, b) {
    a && be(this, a, b)
};
z(ce, hc);
r = ce.prototype;
r.c = j;
r.md = j;
r.le = j;
r.nd = j;
r.gb = -1;
r.fb = -1;
var de = {
    3: 13,
    12: 144,
    63232: 38,
    63233: 40,
    63234: 37,
    63235: 39,
    63236: 112,
    63237: 113,
    63238: 114,
    63239: 115,
    63240: 116,
    63241: 117,
    63242: 118,
    63243: 119,
    63244: 120,
    63245: 121,
    63246: 122,
    63247: 123,
    63248: 44,
    63272: 46,
    63273: 36,
    63275: 35,
    63276: 33,
    63277: 34,
    63289: 144,
    63302: 45
}, ee = {
    Up: 38,
    Down: 40,
    Left: 37,
    Right: 39,
    Enter: 13,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    "U+007F": 46,
    Home: 36,
    End: 35,
    PageUp: 33,
    PageDown: 34,
    Insert: 45
}, fe = C || E && F("525");
ce.prototype.$g = function (a) {
    if (E && (17 == this.gb && !a.ctrlKey || 18 == this.gb && !a.altKey)) this.fb = this.gb = -1;
    fe && !Td(a.keyCode, this.gb, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.fb = D ? Ud(a.keyCode) : a.keyCode
};
ce.prototype.ah = function () {
    this.fb = this.gb = -1
};
ce.prototype.handleEvent = function (a) {
    var b = a.od(),
        c, d;
    C && "keypress" == a.type ? (c = this.fb, d = 13 != c && 27 != c ? b.keyCode : 0) : E && "keypress" == a.type ? (c = this.fb, d = 0 <= b.charCode && 63232 > b.charCode && Sd(c) ? b.charCode : 0) : tb ? (c = this.fb, d = Sd(c) ? b.keyCode : 0) : (c = b.keyCode || this.fb, d = b.charCode || 0, ob && 63 == d && 224 == c && (c = 191));
    var f = c,
        g = b.keyIdentifier;
    c ? 63232 <= c && c in de ? f = de[c] : 25 == c && a.shiftKey && (f = 9) : g && g in ee && (f = ee[g]);
    a = f == this.gb;
    this.gb = f;
    b = new ge(f, d, a, b);
    try {
        this.dispatchEvent(b)
    } finally {
        b.u()
    }
};
ce.prototype.a = function () {
    return this.c
};
var be = function (a, b, c) {
    a.nd && a.detach();
    a.c = b;
    a.md = Xb(a.c, "keypress", a, c);
    a.le = Xb(a.c, "keydown", a.$g, c, a);
    a.nd = Xb(a.c, "keyup", a.ah, c, a)
};
ce.prototype.detach = function () {
    this.md && (cc(this.md), cc(this.le), cc(this.nd), this.nd = this.le = this.md = j);
    this.c = j;
    this.fb = this.gb = -1
};
ce.prototype.g = function () {
    ce.b.g.call(this);
    this.detach()
};
var ge = function (a, b, c, d) {
    d && this.Bb(d, h);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c
};
z(ge, Nb);
var R = function (a, b) {
    a || e(Error("Invalid class name " + a));
    ia(b) || e(Error("Invalid decorator function " + b));
    he[a] = b
}, ie = {}, he = {};
var S = function (a, b, c) {
    M.call(this, c);
    if (!b) {
        for (var b = this.constructor, d; b;) {
            d = ma(b);
            if (d = ie[d]) break;
            b = b.b ? b.b.constructor : j
        }
        b = d ? ia(d.t) ? d.t() : new d : j
    }
    this.f = b;
    this.ha = a
};
z(S, M);
r = S.prototype;
r.ha = j;
r.j = 0;
r.J = 39;
r.ye = 255;
r.mc = 0;
r.I = i;
r.wa = j;
r.Kd = i;
r.Mc = p;
r.Uc = j;
var ke = function (a, b) {
    a.s && b != a.Kd && je(a, b);
    a.Kd = b
};
r = S.prototype;
r.R = function () {
    return this.f.R(this)
};
r.Qc = function () {
    return this.U || (this.U = new ce)
};
r.za = function () {
    return this.f
};
r.qc = function (a, b) {
    b ? a && (this.wa ? Va(this.wa, a) || this.wa.push(a) : this.wa = [a], this.f.qc(this, a, i)) : a && this.wa && (Wa(this.wa, a), 0 == this.wa.length && (this.wa = j), this.f.qc(this, a, p))
};
r.e = function () {
    var a = this.f.e(this);
    this.c = a;
    var b = this.Uc || this.f.la();
    b && Vd(a, b);
    this.Mc || this.f.$b(a, p);
    this.K() || this.f.H(a, p)
};
r.B = function () {
    return this.f.B(this.a())
};
r.na = function (a) {
    return this.f.na(a)
};
r.ua = function (a) {
    this.c = a = this.f.l(this, a);
    var b = this.Uc || this.f.la();
    b && Vd(a, b);
    this.Mc || this.f.$b(a, p);
    this.I = "none" != a.style.display
};
r.T = function () {
    S.b.T.call(this);
    this.f.Gb(this);
    if (this.J & -2 && (this.Kd && je(this, i), this.J & 32)) {
        var a = this.R();
        if (a) {
            var b = this.Qc();
            be(b, a);
            Kd(this).d(b, "key", this.ca).d(a, "focus", this.nb).d(a, "blur", this.Ia)
        }
    }
};
var je = function (a, b) {
    var c = Kd(a),
        d = a.a();
    b ? (c.d(d, "mouseover", a.Rd).d(d, "mousedown", a.ra).d(d, "mouseup", a.Ka).d(d, "mouseout", a.Qd), C && c.d(d, "dblclick", a.ff)) : (c.Q(d, "mouseover", a.Rd).Q(d, "mousedown", a.ra).Q(d, "mouseup", a.Ka).Q(d, "mouseout", a.Qd), C && c.Q(d, "dblclick", a.ff))
};
S.prototype.ia = function () {
    S.b.ia.call(this);
    this.U && this.U.detach();
    this.K() && this.isEnabled() && this.f.Ua(this, p)
};
S.prototype.g = function () {
    S.b.g.call(this);
    this.U && (this.U.u(), delete this.U);
    delete this.f;
    this.wa = this.ha = j
};
S.prototype.X = function (a) {
    this.f.X(this.a(), a);
    this.ha = a
};
var Zd = function (a, b) {
    a.ha = b
};
r = S.prototype;
r.Mb = function () {
    var a = this.ha;
    if (!a) return "";
    if (!v(a)) if (u(a)) a = Ta(a, Nc).join("");
    else {
        if (tc && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            Mc(a, b, i);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        tc || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""))
    }
    return xa(a)
};
r.Nb = function (a) {
    S.b.Nb.call(this, a);
    var b = this.a();
    b && this.f.Nb(b, a)
};
r.$b = function (a) {
    this.Mc = a;
    var b = this.a();
    b && this.f.$b(b, a)
};
r.K = function () {
    return this.I
};
r.H = function (a, b) {
    if (b || this.I != a && this.dispatchEvent(a ? "show" : "hide")) {
        var c = this.a();
        c && this.f.H(c, a);
        this.isEnabled() && this.f.Ua(this, a);
        this.I = a;
        return i
    }
    return p
};
r.isEnabled = function () {
    return !(this.j & 1)
};
r.setEnabled = function (a) {
    var b = this.getParent();
    if ((!b || "function" != typeof b.isEnabled || b.isEnabled()) && le(this, 1, !a)) a || (this.setActive(p), this.va(p)), this.K() && this.f.Ua(this, a), this.ma(1, !a)
};
r.va = function (a) {
    le(this, 2, a) && this.ma(2, a)
};
r.rb = function () {
    return !!(this.j & 4)
};
r.setActive = function (a) {
    le(this, 4, a) && this.ma(4, a)
};
r.ne = function (a) {
    le(this, 8, a) && this.ma(8, a)
};
var me = function (a, b) {
    le(a, 16, b) && a.ma(16, b)
}, ne = function (a, b) {
    le(a, 32, b) && a.ma(32, b)
};
S.prototype.fa = function () {
    return !!(this.j & 64)
};
S.prototype.F = function (a) {
    le(this, 64, a) && this.ma(64, a)
};
S.prototype.ma = function (a, b) {
    this.J & a && b != !! (this.j & a) && (this.f.ma(this, a, b), this.j = b ? this.j | a : this.j & ~a)
};
var T = function (a, b, c) {
    a.s && a.j & b && !c && e(Error("Component already rendered"));
    !c && a.j & b && a.ma(b, p);
    a.J = c ? a.J | b : a.J & ~b
}, oe = function (a, b) {
    return !!(a.ye & b) && !! (a.J & b)
}, le = function (a, b, c) {
    return !!(a.J & b) && !! (a.j & b) != c && (!(a.mc & b) || a.dispatchEvent(Hd(b, c))) && !a.Gc
};
r = S.prototype;
r.Rd = function (a) {
    (!a.relatedTarget || !Hc(this.a(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && oe(this, 2) && this.va(i)
};
r.Qd = function (a) {
    if ((!a.relatedTarget || !Hc(this.a(), a.relatedTarget)) && this.dispatchEvent("leave")) oe(this, 4) && this.setActive(p), oe(this, 2) && this.va(p)
};
r.ra = function (a) {
    if (this.isEnabled() && (oe(this, 2) && this.va(i), Pb(a) && (!E || !ob || !a.ctrlKey))) oe(this, 4) && this.setActive(i), this.f.Sa(this) && this.R().focus();
    !this.Mc && Pb(a) && (!E || !ob || !a.ctrlKey) && a.preventDefault()
};
r.Ka = function (a) {
    this.isEnabled() && (oe(this, 2) && this.va(i), this.rb() && this.Ya(a) && oe(this, 4) && this.setActive(p))
};
r.ff = function (a) {
    this.isEnabled() && this.Ya(a)
};
r.Ya = function (a) {
    oe(this, 16) && me(this, !(this.j & 16));
    oe(this, 8) && this.ne(i);
    oe(this, 64) && this.F(!this.fa());
    var b = new Mb("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.me = a.me);
    return this.dispatchEvent(b)
};
r.nb = function () {
    oe(this, 32) && ne(this, i)
};
r.Ia = function () {
    oe(this, 4) && this.setActive(p);
    oe(this, 32) && ne(this, p)
};
r.ca = function (a) {
    return this.K() && this.isEnabled() && this.Aa(a) ? (a.preventDefault(), a.stopPropagation(), i) : p
};
r.Aa = function (a) {
    return 13 == a.keyCode && this.Ya(a)
};
ia(S) || e(Error("Invalid component class " + S));
ia(Wd) || e(Error("Invalid renderer class " + Wd));
var pe = ma(S);
ie[pe] = Wd;
R("goog-control", function () {
    return new S(j)
});
var qe = function () {};
z(qe, ae);
t(qe);
r = qe.prototype;
r.la = function () {};
r.e = function (a) {
    re(a);
    return a.m().e("button", {
        "class": this.cb(a).join(" "),
        disabled: !a.isEnabled(),
        title: a.mb() || "",
        value: a.n() || ""
    }, a.Mb() || "")
};
r.na = function (a) {
    return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
};
r.l = function (a, b) {
    re(a);
    b.disabled && G(b, this.ec(1));
    return qe.b.l.call(this, a, b)
};
r.Gb = function (a) {
    Kd(a).d(a.a(), "click", a.Ya)
};
r.$b = ea;
r.Nb = ea;
r.Sa = function (a) {
    return a.isEnabled()
};
r.Ua = ea;
r.ma = function (a, b, c) {
    qe.b.ma.call(this, a, b, c);
    if ((a = a.a()) && 1 == b) a.disabled = c
};
r.n = function (a) {
    return a.value
};
r.N = function (a, b) {
    a && (a.value = b)
};
r.da = ea;
var re = function (a) {
    ke(a, p);
    a.ye &= -256;
    T(a, 32, p)
};
var U = function (a, b, c) {
    S.call(this, a, b || qe.t(), c)
};
z(U, S);
r = U.prototype;
r.n = function () {
    return this.Lc
};
r.N = function (a) {
    this.Lc = a;
    this.za().N(this.a(), a)
};
r.mb = function () {
    return this.Dd
};
r.Gd = function (a) {
    this.Dd = a;
    this.za().Gd(this.a(), a)
};
r.g = function () {
    U.b.g.call(this);
    delete this.Lc;
    delete this.Dd
};
r.T = function () {
    U.b.T.call(this);
    if (this.J & 32) {
        var a = this.R();
        a && Kd(this).d(a, "keyup", this.Aa)
    }
};
r.Aa = function (a) {
    return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Ya(a) : 32 == a.keyCode
};
R("goog-button", function () {
    return new U(j)
});
var se = function () {};
z(se, ae);
t(se);
r = se.prototype;
r.e = function (a) {
    var b = {
        "class": "goog-inline-block " + this.cb(a).join(" "),
        title: a.mb() || ""
    };
    return a.m().e("div", b, a.ha)
};
r.la = function () {
    return "button"
};
r.na = function (a) {
    return "DIV" == a.tagName
};
r.l = function (a, b) {
    G(b, "goog-inline-block");
    return se.b.l.call(this, a, b)
};
r.n = function () {
    return j
};
r.k = function () {
    return "goog-flat-button"
};
R("goog-flat-button", function () {
    return new U(j, se.t())
});
var te = function () {};
z(te, Wd);
t(te);
te.prototype.e = function (a) {
    return a.m().e("div", this.k())
};
te.prototype.l = function (a, b) {
    b.id && Jd(a, b.id);
    if ("HR" == b.tagName) {
        var c = b,
            b = this.e(a);
        c.parentNode && c.parentNode.insertBefore(b, c);
        Ec(c)
    } else G(b, this.k());
    return b
};
te.prototype.X = function () {};
te.prototype.k = function () {
    return "goog-menuseparator"
};
var ue = function (a, b) {
    S.call(this, j, a || te.t(), b);
    T(this, 1, p);
    T(this, 2, p);
    T(this, 4, p);
    T(this, 32, p);
    this.j = 1
};
z(ue, S);
ue.prototype.T = function () {
    ue.b.T.call(this);
    Vd(this.a(), "separator")
};
R("goog-menuseparator", function () {
    return new ue
});
var ve = function () {};
t(ve);
ve.prototype.la = function () {};
var we = function (a, b) {
    a && (a.tabIndex = b ? 0 : -1)
};
ve.prototype.e = function (a) {
    return a.m().e("div", this.cb(a).join(" "))
};
ve.prototype.B = function (a) {
    return a
};
ve.prototype.na = function (a) {
    return "DIV" == a.tagName
};
ve.prototype.l = function (a, b) {
    b.id && Jd(a, b.id);
    var c = this.k(),
        d = p,
        f = nc(b);
    f && Ra(f, function (b) {
        b == c ? d = i : b && (b == c + "-disabled" ? a.setEnabled(p) : b == c + "-horizontal" ? xe(a, "horizontal") : b == c + "-vertical" && xe(a, "vertical"))
    }, this);
    d || G(b, c);
    ye(this, a, this.B(b));
    return b
};
var ye = function (a, b, c) {
    if (c) for (var d = c.firstChild, f; d && d.parentNode == c;) {
        f = d.nextSibling;
        if (1 == d.nodeType) {
            var g = a.Wd(d);
            g && (g.c = d, b.isEnabled() || g.setEnabled(p), b.pc(g), g.l(d))
        } else(!d.nodeValue || "" == ya(d.nodeValue)) && c.removeChild(d);
        d = f
    }
};
r = ve.prototype;
r.Wd = function (a) {
    a: {
        for (var b = nc(a), c = 0, d = b.length; c < d; c++) if (a = b[c] in he ? he[b[c]]() : j) break a;
        a = j
    }
    return a
};
r.Gb = function (a) {
    a = a.a();
    ud(a, i, D);
    C && (a.hideFocus = i);
    var b = this.la();
    b && Vd(a, b)
};
r.R = function (a) {
    return a.a()
};
r.k = function () {
    return "goog-container"
};
r.cb = function (a) {
    var b = this.k(),
        c = [b, "horizontal" == a.qb ? b + "-horizontal" : b + "-vertical"];
    a.isEnabled() || c.push(b + "-disabled");
    return c
};
var V = function (a, b, c) {
    M.call(this, c);
    this.f = b || ve.t();
    this.qb = a || "vertical"
};
z(V, M);
r = V.prototype;
r.Md = j;
r.U = j;
r.f = j;
r.qb = j;
r.I = i;
r.tb = i;
r.oe = i;
r.Z = -1;
r.S = j;
r.Fa = p;
r.Jg = p;
r.Dg = i;
r.Ja = j;
r.R = function () {
    return this.Md || this.f.R(this)
};
r.Qc = function () {
    return this.U || (this.U = new ce(this.R()))
};
r.za = function () {
    return this.f
};
r.e = function () {
    this.c = this.f.e(this)
};
r.B = function () {
    return this.f.B(this.a())
};
r.na = function (a) {
    return this.f.na(a)
};
r.ua = function (a) {
    this.c = this.f.l(this, a);
    "none" == a.style.display && (this.I = p)
};
r.T = function () {
    V.b.T.call(this);
    Od(this, function (a) {
        a.s && ze(this, a)
    }, this);
    var a = this.a();
    this.f.Gb(this);
    this.H(this.I, i);
    Kd(this).d(this, "enter", this.zd).d(this, "highlight", this.xd).d(this, "unhighlight", this.yd).d(this, "open", this.ig).d(this, "close", this.gg).d(a, "mousedown", this.ra).d(I(a), "mouseup", this.hg).d(a, ["mousedown", "mouseup", "mouseover", "mouseout"], this.fg);
    this.Sa() && Ae(this, i)
};
var Ae = function (a, b) {
    var c = Kd(a),
        d = a.R();
    b ? c.d(d, "focus", a.nb).d(d, "blur", a.Ia).d(a.Qc(), "key", a.ca) : c.Q(d, "focus", a.nb).Q(d, "blur", a.Ia).Q(a.Qc(), "key", a.ca)
};
r = V.prototype;
r.ia = function () {
    Be(this, -1);
    this.S && this.S.F(p);
    this.Fa = p;
    V.b.ia.call(this)
};
r.g = function () {
    V.b.g.call(this);
    this.U && (this.U.u(), this.U = j);
    this.f = this.S = this.Ja = this.Md = j
};
r.zd = function () {
    return i
};
r.xd = function (a) {
    var b = Rd(this, a.target);
    if (-1 < b && b != this.Z) {
        var c = N(this, this.Z);
        c && c.va(p);
        this.Z = b;
        c = N(this, this.Z);
        this.Fa && c.setActive(i);
        this.Dg && this.S && c != this.S && (c.J & 64 ? c.F(i) : this.S.F(p))
    }
    O(this.a(), "activedescendant", a.target.a().id)
};
r.yd = function (a) {
    a.target == N(this, this.Z) && (this.Z = -1);
    O(this.a(), "activedescendant", "")
};
r.ig = function (a) {
    if ((a = a.target) && a != this.S && a.getParent() == this) this.S && this.S.F(p), this.S = a
};
r.gg = function (a) {
    a.target == this.S && (this.S = j)
};
r.ra = function (a) {
    this.tb && (this.Fa = i);
    var b = this.R();
    b && Lc(b) ? b.focus() : a.preventDefault()
};
r.hg = function () {
    this.Fa = p
};
r.fg = function (a) {
    var b;
    a: {
        b = a.target;
        if (this.Ja) for (var c = this.a(); b && b !== c;) {
            var d = b.id;
            if (d in this.Ja) {
                b = this.Ja[d];
                break a
            }
            b = b.parentNode
        }
        b = j
    }
    if (b) switch (a.type) {
        case "mousedown":
            b.ra(a);
            break;
        case "mouseup":
            b.Ka(a);
            break;
        case "mouseover":
            b.Rd(a);
            break;
        case "mouseout":
            b.Qd(a)
    }
};
r.nb = function () {};
r.Ia = function () {
    Be(this, -1);
    this.Fa = p;
    this.S && this.S.F(p)
};
r.ca = function (a) {
    return this.isEnabled() && this.K() && (0 != Pd(this) || this.Md) && this.Aa(a) ? (a.preventDefault(), a.stopPropagation(), i) : p
};
r.Aa = function (a) {
    var b = N(this, this.Z);
    if (b && "function" == typeof b.ca && b.ca(a) || this.S && this.S != b && "function" == typeof this.S.ca && this.S.ca(a)) return i;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return p;
    switch (a.keyCode) {
        case 27:
            if (this.Sa()) this.R().blur();
            else return p;
            break;
        case 36:
            Ce(this);
            break;
        case 35:
            De(this);
            break;
        case 38:
            if ("vertical" == this.qb) Ee(this);
            else return p;
            break;
        case 37:
            if ("horizontal" == this.qb) Qd(this) ? Fe(this) : Ee(this);
            else return p;
            break;
        case 40:
            if ("vertical" == this.qb) Fe(this);
            else return p;
            break;
        case 39:
            if ("horizontal" == this.qb) Qd(this) ? Ee(this) : Fe(this);
            else return p;
            break;
        default:
            return p
    }
    return i
};
var ze = function (a, b) {
    var c = b.a(),
        c = c.id || (c.id = Id(b));
    a.Ja || (a.Ja = {});
    a.Ja[c] = b
};
V.prototype.pc = function (a, b) {
    V.b.pc.call(this, a, b)
};
V.prototype.tc = function (a, b, c) {
    a.mc |= 2;
    a.mc |= 64;
    (this.Sa() || !this.Jg) && T(a, 32, p);
    ke(a, p);
    V.b.tc.call(this, a, b, c);
    a.s && this.s && ze(this, a);
    b <= this.Z && this.Z++
};
V.prototype.removeChild = function (a, b) {
    if (a = v(a) ? Ld(this, a) : a) {
        var c = Rd(this, a); - 1 != c && (c == this.Z ? a.va(p) : c < this.Z && this.Z--);
        var d = a.a();
        d && d.id && this.Ja && (c = this.Ja, d = d.id, d in c && delete c[d])
    }
    a = V.b.removeChild.call(this, a, b);
    ke(a, i);
    return a
};
var xe = function (a, b) {
    a.a() && e(Error("Component already rendered"));
    a.qb = b
};
r = V.prototype;
r.K = function () {
    return this.I
};
r.H = function (a, b) {
    if (b || this.I != a && this.dispatchEvent(a ? "show" : "hide")) {
        this.I = a;
        var c = this.a();
        c && (K(c, a), this.Sa() && we(this.R(), this.tb && this.I), b || this.dispatchEvent(this.I ? "aftershow" : "afterhide"));
        return i
    }
    return p
};
r.isEnabled = function () {
    return this.tb
};
r.setEnabled = function (a) {
    if (this.tb != a && this.dispatchEvent(a ? "enable" : "disable")) a ? (this.tb = i, Od(this, function (a) {
        a.Ef ? delete a.Ef : a.setEnabled(i)
    })) : (Od(this, function (a) {
        a.isEnabled() ? a.setEnabled(p) : a.Ef = i
    }), this.Fa = this.tb = p), this.Sa() && we(this.R(), a && this.I)
};
r.Sa = function () {
    return this.oe
};
r.Ua = function (a) {
    a != this.oe && this.s && Ae(this, a);
    this.oe = a;
    this.tb && this.I && we(this.R(), a)
};
var Be = function (a, b) {
    var c = N(a, b);
    c ? c.va(i) : -1 < a.Z && N(a, a.Z).va(p)
};
V.prototype.va = function (a) {
    Be(this, Rd(this, a))
};
var Ce = function (a) {
    Ge(a, function (a, c) {
        return (a + 1) % c
    }, Pd(a) - 1)
}, De = function (a) {
    Ge(a, function (a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, 0)
}, Fe = function (a) {
    Ge(a, function (a, c) {
        return (a + 1) % c
    }, a.Z)
}, Ee = function (a) {
    Ge(a, function (a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, a.Z)
}, Ge = function (a, b, c) {
    for (var c = 0 > c ? Rd(a, a.S) : c, d = Pd(a), c = b.call(a, c, d), f = 0; f <= d;) {
        var g = N(a, c);
        if (g && a.Sf(g)) {
            Be(a, c);
            break
        }
        f++;
        c = b.call(a, c, d)
    }
};
V.prototype.Sf = function (a) {
    return a.K() && a.isEnabled() && !! (a.J & 2)
};
var He = function () {};
z(He, Wd);
t(He);
He.prototype.k = function () {
    return "goog-menuheader"
};
var Ie = function (a, b, c) {
    S.call(this, a, c || He.t(), b);
    T(this, 1, p);
    T(this, 2, p);
    T(this, 4, p);
    T(this, 32, p);
    this.j = 1
};
z(Ie, S);
R("goog-menuheader", function () {
    return new Ie(j)
});
var Je = function () {
    this.Wf = []
};
z(Je, Wd);
t(Je);
var Ke = function (a, b) {
    var c = a.Wf[b];
    if (!c) {
        switch (b) {
            case 0:
                c = a.Ba() + "-highlight";
                break;
            case 1:
                c = a.Ba() + "-checkbox";
                break;
            case 2:
                c = a.Ba() + "-content"
        }
        a.Wf[b] = c
    }
    return c
};
r = Je.prototype;
r.la = function () {
    return "menuitem"
};
r.e = function (a) {
    var b = a.m().e("div", this.cb(a).join(" "), Le(this, a.ha, a.m()));
    Me(this, a, b, !! (a.J & 8) || !! (a.J & 16));
    return b
};
r.B = function (a) {
    return a && a.firstChild
};
r.l = function (a, b) {
    var c = Gc(b),
        d = Ke(this, 2);
    c && -1 != c.className.indexOf(d) || b.appendChild(Le(this, b.childNodes, a.m()));
    Va(nc(b), "goog-option") && (a.Vc(i), this.Vc(a, b, i));
    return Je.b.l.call(this, a, b)
};
r.X = function (a, b) {
    var c = this.B(a),
        d = Ne(this, a) ? c.firstChild : j;
    Je.b.X.call(this, a, b);
    d && !Ne(this, a) && c.insertBefore(d, c.firstChild || j)
};
var Le = function (a, b, c) {
    a = Ke(a, 2);
    return c.e("div", a, b)
};
Je.prototype.ee = function (a, b, c) {
    b && (Vd(b, c ? "menuitemradio" : this.la()), Me(this, a, b, c))
};
Je.prototype.Vc = function (a, b, c) {
    b && (Vd(b, c ? "menuitemcheckbox" : this.la()), Me(this, a, b, c))
};
var Ne = function (a, b) {
    var c = a.B(b);
    if (c) {
        var c = c.firstChild,
            d = Ke(a, 1);
        return !!c && !! c.className && -1 != c.className.indexOf(d)
    }
    return p
}, Me = function (a, b, c, d) {
    d != Ne(a, c) && (d ? G(c, "goog-option") : pc(c, "goog-option"), c = a.B(c), d ? (a = Ke(a, 1), c.insertBefore(b.m().e("div", a), c.firstChild || j)) : c.removeChild(c.firstChild))
};
Je.prototype.ec = function (a) {
    switch (a) {
        case 2:
            return Ke(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return Je.b.ec.call(this, a)
    }
};
Je.prototype.Ud = function (a) {
    var b = Ke(this, 0);
    switch (a) {
        case "goog-option-selected":
            return 16;
        case b:
            return 2;
        default:
            return Je.b.Ud.call(this, a)
    }
};
Je.prototype.k = function () {
    return "goog-menuitem"
};
var Oe = function (a, b, c, d) {
    S.call(this, a, d || Je.t(), c);
    this.N(b)
};
z(Oe, S);
r = Oe.prototype;
r.n = function () {
    var a = this.Jd;
    return a != j ? a : this.Mb()
};
r.N = function (a) {
    this.Jd = a
};
r.ee = function (a) {
    T(this, 8, a);
    this.j & 16 && !a && me(this, p);
    var b = this.a();
    b && this.za().ee(this, b, a)
};
r.Vc = function (a) {
    T(this, 16, a);
    var b = this.a();
    b && this.za().Vc(this, b, a)
};
r.Mb = function () {
    var a = this.ha;
    return u(a) ? (a = Ta(a, function (a) {
        var c = nc(a);
        return Va(c, "goog-menuitem-accel") || Va(c, "goog-menuitem-mnemonic-separator") ? "" : Nc(a)
    }).join(""), xa(a)) : Oe.b.Mb.call(this)
};
r.Ka = function (a) {
    var b = this.getParent();
    if (b) {
        var c = b.of;
        b.of = j;
        if (b = c && ha(a.clientX)) b = new H(a.clientX, a.clientY), b = c == b ? i : !c || !b ? p : c.x == b.x && c.y == b.y;
        if (b) return
    }
    Oe.b.Ka.call(this, a)
};
r.Aa = function (a) {
    return a.keyCode == this.ie() && this.Ya(a) ? i : Oe.b.Aa.call(this, a)
};
r.ie = function () {
    return this.Ih
};
R("goog-menuitem", function () {
    return new Oe(j)
});
var Pe = function () {};
z(Pe, ve);
t(Pe);
r = Pe.prototype;
r.la = function () {
    return "menu"
};
r.na = function (a) {
    return "UL" == a.tagName || Pe.b.na.call(this, a)
};
r.Wd = function (a) {
    return "HR" == a.tagName ? new ue : Pe.b.Wd.call(this, a)
};
r.ub = function (a, b) {
    return Hc(a.a(), b)
};
r.k = function () {
    return "goog-menu"
};
r.Gb = function (a) {
    Pe.b.Gb.call(this, a);
    O(a.a(), "haspopup", "true")
};
R("goog-menuseparator", function () {
    return new ue
});
var Qe = function (a, b) {
    V.call(this, "vertical", b || Pe.t(), a);
    this.Ua(p)
};
z(Qe, V);
r = Qe.prototype;
r.Pd = i;
r.ih = p;
r.k = function () {
    return this.za().k()
};
r.ub = function (a) {
    if (this.za().ub(this, a)) return i;
    for (var b = 0, c = Pd(this); b < c; b++) {
        var d = N(this, b);
        if ("function" == typeof d.ub && d.ub(a)) return i
    }
    return p
};
r.yb = function (a) {
    this.pc(a, i)
};
r.Xa = function (a, b) {
    this.tc(a, b, i)
};
r.removeItem = function (a) {
    (a = this.removeChild(a, i)) && a.u()
};
r.Pb = function (a) {
    (a = this.removeChild(N(this, a), i)) && a.u()
};
r.Vb = function (a) {
    return N(this, a)
};
r.pd = function () {
    return Pd(this)
};
r.Ye = function (a, b) {
    var c = this.K();
    c || K(this.a(), i);
    pd(this.a(), a, b);
    c || K(this.a(), p)
};
r.H = function (a, b, c) {
    (b = Qe.b.H.call(this, a, b)) && a && this.s && this.Pd && this.R().focus();
    this.of = a && c && ha(c.clientX) ? new H(c.clientX, c.clientY) : j;
    return b
};
r.zd = function (a) {
    this.Pd && this.R().focus();
    return Qe.b.zd.call(this, a)
};
r.Sf = function (a) {
    return (this.ih || a.isEnabled()) && a.K() && !! (a.J & 2)
};
r.ua = function (a) {
    var b = this.za(),
        c;
    c = this.m();
    c = xc(c.D, "div", b.k() + "-content", a);
    for (var d = c.length, f = 0; f < d; f++) ye(b, this, c[f]);
    Qe.b.ua.call(this, a)
};
r.Aa = function (a) {
    var b = Qe.b.Aa.call(this, a);
    b || Od(this, function (c) {
        !b && c.ie && c.ie() == a.keyCode && (this.isEnabled() && this.va(c), b = c.ca(a))
    }, this);
    return b
};
var Re = function (a, b, c, d, f, g, k, l) {
    var o, m = c.offsetParent;
    if (m) {
        var n = "HTML" == m.tagName || "BODY" == m.tagName;
        if (!n || "static" != gd(m, "position")) o = md(m), n || (n = (n = nd(m)) && D ? -m.scrollLeft : n && (!C || !F("8")) ? m.scrollWidth - m.clientWidth - m.scrollLeft : m.scrollLeft, o = qc(o, new H(n, m.scrollTop)))
    }
    m = sd(a);
    if (n = od(a)) {
        var q = new dd(n.left, n.top, n.right - n.left, n.bottom - n.top),
            n = Math.max(m.left, q.left),
            x = Math.min(m.left + m.width, q.left + q.width);
        if (n <= x) {
            var y = Math.max(m.top, q.top),
                q = Math.min(m.top + m.height, q.top + q.height);
            y <= q && (m.left = n, m.top = y, m.width = x - n, m.height = q - y)
        }
    }
    n = vc(a);
    y = vc(c);
    if (n.D != y.D) {
        var x = n.D.body,
            y = y.D.parentWindow || y.D.defaultView,
            q = new H(0, 0),
            P = I(x) ? I(x).parentWindow || I(x).defaultView : window,
            Sb = x;
        do {
            var aa;
            if (P == y) aa = md(Sb);
            else {
                var Q = Sb;
                aa = new H;
                if (1 == Q.nodeType) if (Q.getBoundingClientRect) Q = kd(Q), aa.x = Q.left, aa.y = Q.top;
                else {
                    var Zc = Rc(vc(Q)),
                        Q = md(Q);
                    aa.x = Q.x - Zc.x;
                    aa.y = Q.y - Zc.y
                } else {
                    var Zc = ia(Q.od),
                        $c = Q;
                    Q.targetTouches ? $c = Q.targetTouches[0] : Zc && Q.od().targetTouches && ($c = Q.od().targetTouches[0]);
                    aa.x = $c.clientX;
                    aa.y = $c.clientY
                }
            }
            q.x += aa.x;
            q.y += aa.y
        } while (P && P != y && (Sb = P.frameElement) && (P = P.parent));
        x = qc(q, md(x));
        C && !Qc(n) && (x = qc(x, Rc(n)));
        m.left += x.x;
        m.top += x.y
    }
    a = (b & 4 && nd(a) ? b ^ 2 : b) & -5;
    b = new H(a & 2 ? m.left + m.width : m.left, a & 1 ? m.top + m.height : m.top);
    o && (b = qc(b, o));
    f && (b.x += (a & 2 ? -1 : 1) * f.x, b.y += (a & 1 ? -1 : 1) * f.y);
    var B;
    if (k && (B = od(c)) && o) B.top -= o.y, B.right -= o.x, B.bottom -= o.y, B.left -= o.x;
    a: {
        a = B;
        B = b.Ca();
        f = 0;
        b = (d & 4 && nd(c) ? d ^ 2 : d) & -5;
        d = rd(c);
        l = l ? l.Ca() : d.Ca();
        if (g || 0 != b)(b & 2 ? B.x -= l.width + (g ? g.right : 0) : g && (B.x += g.left), b & 1) ? B.y -= l.height + (g ? g.bottom : 0) : g && (B.y += g.top);
        if (k) {
            if (a) {
                g = B;
                f = 0;
                if (65 == (k & 65) && (g.x < a.left || g.x >= a.right)) k &= -2;
                if (132 == (k & 132) && (g.y < a.top || g.y >= a.bottom)) k &= -5;
                g.x < a.left && k & 1 && (g.x = a.left, f |= 1);
                g.x < a.left && g.x + l.width > a.right && k & 16 && (l.width = Math.max(l.width - (g.x + l.width - a.right), 0), f |= 4);
                g.x + l.width > a.right && k & 1 && (g.x = Math.max(a.right - l.width, a.left), f |= 1);
                k & 2 && (f |= (g.x < a.left ? 16 : 0) | (g.x + l.width > a.right ? 32 : 0));
                g.y < a.top && k & 4 && (g.y = a.top, f |= 2);
                g.y >= a.top && g.y + l.height > a.bottom && k & 32 && (l.height = Math.max(l.height - (g.y + l.height - a.bottom), 0), f |= 8);
                g.y + l.height > a.bottom && k & 4 && (g.y = Math.max(a.bottom - l.height, a.top), f |= 2);
                k & 8 && (f |= (g.y < a.top ? 64 : 0) | (g.y + l.height > a.bottom ? 128 : 0));
                k = f
            } else k = 256;
            f = k;
            if (f & 496) {
                c = f;
                break a
            }
        }
        id(c, B);
        if (!(d == l || (!d || !l ? 0 : d.width == l.width && d.height == l.height))) g = Qc(vc(I(c))), C && (!g || !F("8")) ? (k = c.style, g ? (C ? (g = vd(c, fd(c, "paddingLeft")), d = vd(c, fd(c, "paddingRight")), B = vd(c, fd(c, "paddingTop")), a = vd(c, fd(c, "paddingBottom")), g = new cd(B, d, a, g)) : (g = ed(c, "paddingLeft"),
        d = ed(c, "paddingRight"), B = ed(c, "paddingTop"), a = ed(c, "paddingBottom"), g = new cd(parseFloat(B), parseFloat(d), parseFloat(a), parseFloat(g))), c = yd(c), k.pixelWidth = l.width - c.left - g.left - g.right - c.right, k.pixelHeight = l.height - c.top - g.top - g.bottom - c.bottom) : (k.pixelWidth = l.width, k.pixelHeight = l.height)) : (c = c.style, D ? c.MozBoxSizing = "border-box" : E ? c.WebkitBoxSizing = "border-box" : c.boxSizing = "border-box", c.width = Math.max(l.width, 0) + "px", c.height = Math.max(l.height, 0) + "px");
        c = f
    }
    return c
};
var Se = function () {};
Se.prototype.ja = function () {};
var Te = function (a, b, c) {
    this.element = a;
    this.bd = b;
    this.xh = c
};
z(Te, Se);
Te.prototype.ja = function (a, b, c) {
    Re(this.element, this.bd, a, b, h, c, this.xh)
};
var Ue = function (a, b, c) {
    Te.call(this, a, b);
    this.bg = c ? 5 : 0
};
z(Ue, Te);
Ue.prototype.Td = function () {
    return this.bg
};
Ue.prototype.ja = function (a, b, c, d) {
    var f = Re(this.element, this.bd, a, b, j, c, 10, d);
    if (f & 496) {
        var g = Ve(f, this.bd),
            b = Ve(f, b),
            f = Re(this.element, g, a, b, j, c, 10, d);
        f & 496 && (g = Ve(f, g), b = Ve(f, b), Re(this.element, g, a, b, j, c, this.Td(), d))
    }
};
var Ve = function (a, b) {
    a & 48 && (b ^= 2);
    a & 192 && (b ^= 1);
    return b
};
var We = function (a, b, c, d) {
    Ue.call(this, a, b, c || d);
    if (c || d) this.bg = 65 | (d ? 32 : 132)
};
z(We, Ue);
var Xe, Ye;
Ye = Xe = p;
var Ze = pb();
Ze && (-1 != Ze.indexOf("Firefox") || -1 != Ze.indexOf("Camino") || (-1 != Ze.indexOf("iPhone") || -1 != Ze.indexOf("iPod") ? Xe = i : -1 != Ze.indexOf("iPad") && (Ye = i)));
var $e = Xe,
    af = Ye;
var bf = function () {};
z(bf, ae);
t(bf);
r = bf.prototype;
r.e = function (a) {
    var b = {
        "class": "goog-inline-block " + this.cb(a).join(" "),
        title: a.mb() || ""
    }, b = a.m().e("div", b, this.ic(a.ha, a.m()));
    this.ad(a, b);
    return b
};
r.la = function () {
    return "button"
};
r.ad = function (a, b) {
    Oa(a);
    Oa(b);
    a.isEnabled() || this.da(b, 1, i);
    a.j & 8 && this.da(b, 8, i);
    a.J & 16 && this.da(b, 16, i);
    a.fa() && this.da(b, 64, i)
};
r.B = function (a) {
    return a && a.firstChild.firstChild
};
r.ic = function (a, b) {
    return b.e("div", "goog-inline-block " + (this.k() + "-outer-box"), b.e("div", "goog-inline-block " + (this.k() + "-inner-box"), a))
};
r.na = function (a) {
    return "DIV" == a.tagName
};
r.mf = function (a, b) {
    var c = a.m().Tb(b);
    return c && -1 != c.className.indexOf(this.k() + "-outer-box") && (c = a.m().Tb(c)) && -1 != c.className.indexOf(this.k() + "-inner-box") ? i : p
};
r.l = function (a, b) {
    cf(b, i);
    cf(b, p);
    this.mf(a, b) || b.appendChild(this.ic(b.childNodes, a.m()));
    G(b, "goog-inline-block", this.k());
    return bf.b.l.call(this, a, b)
};
r.k = function () {
    return "goog-custom-button"
};
var cf = function (a, b) {
    if (a) for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
        d = b ? c.nextSibling : c.previousSibling;
        if (3 == c.nodeType) {
            var f = c.nodeValue;
            if ("" == ya(f)) a.removeChild(c);
            else {
                c.nodeValue = b ? f.replace(/^[\s\xa0]+/, "") : f.replace(/[\s\xa0]+$/, "");
                break
            }
        } else break;
        c = d
    }
};
var df = function () {};
z(df, bf);
t(df);
D && (df.prototype.X = function (a, b) {
    var c = df.b.B.call(this, a && a.firstChild);
    if (c) {
        var d = this.createCaption(b, vc(a)),
            f = c.parentNode;
        f && f.replaceChild(d, c)
    }
});
r = df.prototype;
r.B = function (a) {
    a = df.b.B.call(this, a && a.firstChild);
    if (D && a && a.__goog_wrapper_div) a = a.firstChild;
    return a
};
r.l = function (a, b) {
    var c = xc(document, "*", "goog-menu", b)[0];
    if (c) {
        K(c, p);
        I(c).body.appendChild(c);
        var d = new Qe;
        d.l(c);
        a.pb(d)
    }
    return df.b.l.call(this, a, b)
};
r.ic = function (a, b) {
    return df.b.ic.call(this, [this.createCaption(a, b), this.hc(b)], b)
};
r.createCaption = function (a, b) {
    return b.e("div", "goog-inline-block " + (this.k() + "-caption"), a)
};
r.hc = function (a) {
    return a.e("div", "goog-inline-block " + (this.k() + "-dropdown"), "\u00a0")
};
r.k = function () {
    return "goog-menu-button"
};
var W = function (a, b, c, d) {
    U.call(this, a, c || df.t(), d);
    T(this, 64, i);
    this.Sc = new We(j, 5);
    b && this.pb(b);
    this.sg = j;
    this.o = new jc(500);
    if (($e || af) && !F("533.17.9")) this.Fc = i
};
z(W, U);
r = W.prototype;
r.Fc = p;
r.eg = p;
r.T = function () {
    W.b.T.call(this);
    this.h && ef(this, this.h, i);
    O(this.a(), "haspopup", "true")
};
r.ia = function () {
    W.b.ia.call(this);
    if (this.h) {
        this.F(p);
        this.h.ia();
        ef(this, this.h, p);
        var a = this.h.a();
        a && Ec(a)
    }
};
r.g = function () {
    W.b.g.call(this);
    this.h && (this.h.u(), delete this.h);
    delete this.jg;
    this.o.u()
};
r.ra = function (a) {
    W.b.ra.call(this, a);
    this.rb() && (this.F(!this.fa(), a), this.h && (this.h.Fa = this.fa()))
};
r.Ka = function (a) {
    W.b.Ka.call(this, a);
    this.h && !this.rb() && (this.h.Fa = p)
};
r.Ya = function () {
    this.setActive(p);
    return i
};
r.cg = function (a) {
    this.h && this.h.K() && !this.ub(a.target) && this.F(p)
};
r.ub = function (a) {
    return a && Hc(this.a(), a) || this.h && this.h.ub(a) || p
};
r.Aa = function (a) {
    if (32 == a.keyCode) {
        if (a.preventDefault(), "keyup" != a.type) return i
    } else if ("key" != a.type) return p;
    if (this.h && this.h.K()) {
        var b = this.h.ca(a);
        return 27 == a.keyCode ? (this.F(p), i) : b
    }
    return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode ? (this.F(i), i) : p
};
r.oc = function () {
    this.F(p)
};
r.dg = function () {
    this.rb() || this.F(p)
};
r.Ia = function (a) {
    this.Fc || this.F(p);
    W.b.Ia.call(this, a)
};
var ff = function (a) {
    a.h || a.pb(new Qe(a.m()));
    return a.h || j
};
r = W.prototype;
r.pb = function (a) {
    var b = this.h;
    if (a != b && (b && (this.F(p), this.s && ef(this, b, p), delete this.h), a)) {
        this.h = a;
        Md(a, this);
        a.H(p);
        var c = this.Fc;
        (a.Pd = c) && a.Ua(i);
        this.s && ef(this, a, i)
    }
    return b
};
r.yb = function (a) {
    ff(this).pc(a, i)
};
r.Xa = function (a, b) {
    ff(this).tc(a, b, i)
};
r.removeItem = function (a) {
    (a = ff(this).removeChild(a, i)) && a.u()
};
r.Pb = function (a) {
    var b = ff(this);
    (a = b.removeChild(N(b, a), i)) && a.u()
};
r.Vb = function (a) {
    return this.h ? N(this.h, a) : j
};
r.pd = function () {
    return this.h ? Pd(this.h) : 0
};
r.H = function (a, b) {
    var c = W.b.H.call(this, a, b);
    c && !this.K() && this.F(p);
    return c
};
r.setEnabled = function (a) {
    W.b.setEnabled.call(this, a);
    this.isEnabled() || this.F(p)
};
r.F = function (a, b) {
    W.b.F.call(this, a);
    if (this.h && !! (this.j & 64) == a) {
        if (a) this.h.s || (this.eg ? this.h.Dc(this.a().parentNode) : this.h.Dc()), this.kb = od(this.a()), this.jb = sd(this.a()), gf(this), Be(this.h, -1);
        else if (this.setActive(p), this.h.Fa = p, this.a() && O(this.a(), "activedescendant", ""), this.Hc != j) {
            this.Hc = h;
            var c = this.h.a();
            if (c) {
                var d = "",
                    f;
                d instanceof rc ? (f = d.height, d = d.width) : f = "";
                c.style.width = hd(d, i);
                c.style.height = hd(f, i)
            }
        }
        this.h.H(a, p, b);
        this.Gc || (c = Kd(this), d = a ? c.d : c.Q, d.call(c, Pc(this.m()), "mousedown",
        this.cg, i), this.Fc && d.call(c, this.h, "blur", this.dg), d.call(c, this.o, "tick", this.Ec), a ? this.o.start() : this.o.stop())
    }
};
var gf = function (a) {
    if (a.h.s) {
        var b = a.Sc;
        a.Sc.element = a.jg || a.a();
        var c = a.h.a();
        a.h.K() || (c.style.visibility = "hidden", K(c, i));
        !a.Hc && a.Sc.Td && a.Sc.Td() & 32 && (a.Hc = rd(c));
        b.ja(c, b.bd ^ 1, a.sg, a.Hc);
        a.h.K() || (K(c, p), c.style.visibility = "visible")
    }
};
W.prototype.Ec = function () {
    var a = sd(this.a()),
        b = od(this.a());
    if (!(this.jb == a || (!this.jb || !a ? 0 : this.jb.left == a.left && this.jb.width == a.width && this.jb.top == a.top && this.jb.height == a.height)) || !(this.kb == b || (!this.kb || !b ? 0 : this.kb.top == b.top && this.kb.right == b.right && this.kb.bottom == b.bottom && this.kb.left == b.left))) this.jb = a, this.kb = b, gf(this)
};
var ef = function (a, b, c) {
    var d = Kd(a),
        c = c ? d.d : d.Q;
    c.call(d, b, "action", a.oc);
    c.call(d, b, "highlight", a.xd);
    c.call(d, b, "unhighlight", a.yd)
};
W.prototype.xd = function (a) {
    O(this.a(), "activedescendant", a.target.a().id)
};
W.prototype.yd = function () {
    N(this.h, this.h.Z) || O(this.a(), "activedescendant", "")
};
R("goog-menu-button", function () {
    return new W(j)
});
var hf = function () {};
z(hf, se);
t(hf);
r = hf.prototype;
r.e = function (a) {
    var b = {
        "class": "goog-inline-block " + this.cb(a).join(" "),
        title: a.mb() || ""
    };
    return a.m().e("div", b, [this.createCaption(a.ha, a.m()), this.hc(a.m())])
};
r.B = function (a) {
    return a && a.firstChild
};
r.l = function (a, b) {
    var c = xc(document, "*", "goog-menu", b)[0];
    if (c) {
        K(c, p);
        Pc(a.m()).body.appendChild(c);
        var d = new Qe;
        d.l(c);
        a.pb(d)
    }
    xc(document, "*", this.k() + "-caption", b)[0] || b.appendChild(this.createCaption(b.childNodes, a.m()));
    xc(document, "*", this.k() + "-dropdown", b)[0] || b.appendChild(this.hc(a.m()));
    return hf.b.l.call(this, a, b)
};
r.createCaption = function (a, b) {
    return b.e("div", "goog-inline-block " + (this.k() + "-caption"), a)
};
r.hc = function (a) {
    return a.e("div", "goog-inline-block " + (this.k() + "-dropdown"), "\u00a0")
};
r.k = function () {
    return "goog-flat-menu-button"
};
R("goog-flat-menu-button", function () {
    return new W(j, j, hf.t())
});
var kf = function (a) {
    this.eb = [];
    jf(this, a)
};
z(kf, hc);
kf.prototype.Ea = j;
kf.prototype.Wa = j;
kf.prototype.pd = function () {
    return this.eb.length
};
kf.prototype.Vb = function (a) {
    return this.eb[a] || j
};
var jf = function (a, b) {
    b && (Ra(b, function (a) {
        lf(this, a, p)
    }, a), Za(a.eb, b))
};
r = kf.prototype;
r.yb = function (a) {
    this.Xa(a, this.pd())
};
r.Xa = function (a, b) {
    a && (lf(this, a, p), ab(this.eb, b, 0, a))
};
r.removeItem = function (a) {
    a && Wa(this.eb, a) && a == this.Ea && (this.Ea = j, this.dispatchEvent("select"))
};
r.Pb = function (a) {
    this.removeItem(this.Vb(a))
};
r.nc = function () {
    return this.Ea
};
r.Va = function (a) {
    a != this.Ea && (lf(this, this.Ea, p), this.Ea = a, lf(this, a, i));
    this.dispatchEvent("select")
};
r.be = function () {
    return this.Ea ? Qa(this.eb, this.Ea) : -1
};
r.Rc = function (a) {
    this.Va(this.Vb(a))
};
r.clear = function () {
    var a = this.eb;
    if (!u(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0;
    this.Ea = j
};
r.g = function () {
    kf.b.g.call(this);
    delete this.eb;
    this.Ea = j
};
var lf = function (a, b, c) {
    b && ("function" == typeof a.Wa ? a.Wa(b, c) : "function" == typeof b.ne && b.ne(c))
};
var X = function (a, b, c, d) {
    W.call(this, a, b, c, d);
    this.$c = a;
    mf(this);
    this.Uc = "listbox"
};
z(X, W);
r = X.prototype;
r.p = j;
r.$c = j;
r.T = function () {
    X.b.T.call(this);
    mf(this);
    nf(this);
    O(this.a(), "haspopup", "false")
};
r.ua = function (a) {
    X.b.ua.call(this, a);
    (a = this.Mb()) ? (this.$c = a, mf(this)) : this.Rc(0)
};
r.g = function () {
    X.b.g.call(this);
    this.p && (this.p.u(), this.p = j);
    this.$c = j
};
r.oc = function (a) {
    this.Va(a.target);
    X.b.oc.call(this, a);
    a.stopPropagation();
    this.dispatchEvent("action")
};
r.Yg = function () {
    var a = this.nc();
    X.b.N.call(this, a && a.n());
    mf(this)
};
r.pb = function (a) {
    var b = X.b.pb.call(this, a);
    a != b && (this.p && this.p.clear(), a && (this.p ? Od(a, function (a) {
        of(a);
        this.p.yb(a)
    }, this) : pf(this, a)));
    return b
};
r.yb = function (a) {
    of(a);
    X.b.yb.call(this, a);
    this.p ? this.p.yb(a) : pf(this, ff(this))
};
r.Xa = function (a, b) {
    of(a);
    X.b.Xa.call(this, a, b);
    this.p ? this.p.Xa(a, b) : pf(this, ff(this))
};
r.removeItem = function (a) {
    X.b.removeItem.call(this, a);
    this.p && this.p.removeItem(a)
};
r.Pb = function (a) {
    X.b.Pb.call(this, a);
    this.p && this.p.Pb(a)
};
r.Va = function (a) {
    if (this.p) {
        var b = this.nc();
        this.p.Va(a);
        a != b && this.dispatchEvent("change")
    }
};
r.Rc = function (a) {
    this.p && this.Va(this.p.Vb(a))
};
r.N = function (a) {
    if (a != j && this.p) for (var b = 0, c; c = this.p.Vb(b); b++) if (c && "function" == typeof c.n && c.n() == a) {
        this.Va(c);
        return
    }
    this.Va(j)
};
r.nc = function () {
    return this.p ? this.p.nc() : j
};
r.be = function () {
    return this.p ? this.p.be() : -1
};
var pf = function (a, b) {
    a.p = new kf;
    b && Od(b, function (a) {
        of(a);
        this.p.yb(a)
    }, a);
    nf(a)
}, nf = function (a) {
    a.p && Kd(a).d(a.p, "select", a.Yg)
}, mf = function (a) {
    var b = a.nc();
    a.X(b ? b.Mb() : a.$c)
}, of = function (a) {
    a.Uc = a instanceof Oe ? "option" : "separator"
};
X.prototype.F = function (a, b) {
    X.b.F.call(this, a, b);
    this.fa() && Be(ff(this), this.be())
};
R("goog-select", function () {
    return new X(j)
});
var rf = function (a, b, c, d) {
    W.call(this, a, b, c || qf.t(), d)
};
z(rf, X);
rf.prototype.Pc = j;
rf.prototype.nf = p;
var sf = function (a, b) {
    (a.nf = b) ? (ud(a.a(), p), a.Va(a.Pc), K(a.B(), p), K(a.La().parentNode, i), a.La().focus(), a.F(p)) : (ud(a.a(), i), K(a.La().parentNode, p), K(a.B(), i))
};
r = rf.prototype;
r.La = function () {
    return this.za().La(this.a())
};
r.ua = function (a) {
    rf.b.ua.call(this, a);
    this.Pc = j;
    Od(ff(this), function (a) {
        Va(nc(a.a()), this.f.k() + "-option-select") && (this.Pc = a)
    }, this)
};
r.oc = function (a) {
    a.target != this.Pc ? (sf(this, p), rf.b.oc.call(this, a)) : sf(this, i)
};
r.ra = function (a) {
    a.target != this.La() && rf.b.ra.call(this, a)
};
r.Ka = function (a) {
    a.target != this.La() && rf.b.Ka.call(this, a)
};
r.ca = function (a) {
    a.target != this.La() && rf.b.ca.call(this, a)
};
r.n = function () {
    return this.nf ? this.La().value : this.Lc
};
var qf = function () {};
z(qf, hf);
t(qf);
qf.prototype.La = function (a) {
    return a && a.firstChild.nextSibling.firstChild
};
qf.prototype.l = function (a, b) {
    var c = xc(document, "*", "goog-menu", b)[0];
    if (c) {
        I(c).body.appendChild(c);
        var d = new Qe;
        d.l(c);
        a.pb(d)
    }
    b.appendChild(this.createCaption(b.childNodes, a.L));
    b.appendChild(tf(this, a.L));
    b.appendChild(this.hc(a.L));
    return hf.b.l.call(this, a, b)
};
var tf = function (a, b) {
    var c = b.e("input", {
        type: "text"
    });
    return b.e("div", {
        "class": "goog-inline-block " + a.k() + "-input",
        style: "display: none;"
    }, c)
};
var uf = function (a, b, c) {
    this.Ie = a;
    this.Wa = c;
    this.f = b;
    Xb(b, ["hilite", "select", "canceldismiss", "dismiss"], this);
    this.sa = j;
    this.O = [];
    this.ba = -1;
    this.aa = 0;
    this.wb = this.V = j;
    this.Se = {}
};
z(uf, hc);
r = uf.prototype;
r.Cd = 10;
r.Og = i;
r.Cf = p;
r.Df = p;
r.Bf = p;
r.za = function () {
    return this.f
};
r.handleEvent = function (a) {
    if (a.target == this.f) switch (a.type) {
        case "hilite":
            this.ya(a.hd);
            break;
        case "select":
            vf(this);
            break;
        case "canceldismiss":
            wf(this);
            break;
        case "dismiss":
            xf(this)
    }
};
r.fa = function () {
    return this.f.K()
};
var yf = function (a) {
    var b = a.aa + a.O.length - 1;
    a.ba >= a.aa && a.ba < b ? a.ya(a.ba + 1) : -1 == a.ba ? a.ya(a.aa) : a.ba == b && (a.Cf ? a.ya(-1) : a.Df && a.ya(a.aa))
}, zf = function (a) {
    a.ba > a.aa ? a.ya(a.ba - 1) : a.Cf && a.ba == a.aa ? a.ya(-1) : a.Df && (-1 == a.ba || a.ba == a.aa) && a.ya(a.aa + a.O.length - 1)
};
uf.prototype.ya = function (a) {
    this.ba = a;
    this.f.ya(a);
    return -1 != Af(this, a)
};
var vf = function (a) {
    var b = Af(a, a.ba);
    if (-1 != b) {
        var b = a.O[b],
            c = a.Wa.$d(b);
        a.Bf ? (a.sa = j, xf(a)) : a.Ga();
        c || (a.dispatchEvent({
            type: "update",
            hd: b
        }), a.Bf && a.Wa.update(i));
        return i
    }
    a.Ga();
    a.dispatchEvent({
        type: "update",
        hd: j
    });
    return p
};
uf.prototype.Ga = function () {
    this.ba = -1;
    this.sa = j;
    this.aa += this.O.length;
    this.O = [];
    window.clearTimeout(this.wb);
    this.wb = j;
    this.f.Ga();
    this.dispatchEvent("suggestionsupdate")
};
var xf = function (a) {
    a.wb || (a.wb = window.setTimeout(w(a.Ga, a), 100))
};
uf.prototype.ag = function () {
    return this.wb ? (window.clearTimeout(this.wb), this.wb = j, i) : p
};
var wf = function (a) {
    a.ag() || window.setTimeout(w(a.ag, a), 10)
};
uf.prototype.g = function () {
    uf.b.g.call(this);
    delete this.Se;
    this.f.u();
    this.Wa.u();
    this.Ie = j
};
uf.prototype.Rg = function (a, b, c) {
    this.sa == a && this.fe(b, c)
};
uf.prototype.fe = function (a, b) {
    var c = b ? Af(this, this.ba) : -1;
    this.aa += this.O.length;
    this.O = a;
    for (var d = [], f = 0; f < a.length; ++f) d.push({
        id: this.aa + f,
        data: a[f]
    });
    f = j;
    this.V && (f = this.Se[ma(this.V)] || this.V);
    this.f.yg = f;
    this.f.fe(d, this.sa, this.V);
    (this.Og || 0 <= c) && 0 != d.length && this.sa ? this.ya(0 <= c ? this.aa + c : this.aa) : this.ba = -1;
    this.dispatchEvent("suggestionsupdate")
};
var Af = function (a, b) {
    var c = b - a.aa;
    return 0 > c || c >= a.O.length ? -1 : c
};
uf.prototype.xe = function (a) {
    var b = this.Wa;
    b.xe.apply(b, arguments)
};
uf.prototype.update = function (a) {
    this.Wa.update(a)
};
var Bf = function (a, b) {
    this.O = a;
    this.Lg = !b
};
Bf.prototype.wf = function (a, b) {
    var c = [];
    if ("" != a) {
        var d = La(a),
            f = RegExp("(^|\\W+)" + d, "i");
        Wc(this.O, function (a) {
            ("" + a).match(f) && c.push(a);
            return c.length >= b
        })
    }
    return c
};
var Cf = function (a, b, c) {
    var d = [];
    Vc(a.O, function (a, c) {
        var f = b.toLowerCase(),
            o = ("" + a).toLowerCase(),
            m = 0;
        if (-1 != o.indexOf(f)) m = parseInt((o.indexOf(f) / 4).toString(), 10);
        else for (var n = f.split(""), q = -1, x = 10, y = 0, P; P = n[y]; y++) P = o.indexOf(P), P > q ? (q = P - q - 1, q > x - 5 && (q = x - 5), m += q, q = P) : (m += x, x += 5);
        m < 6 * f.length && d.push({
            nh: a,
            Of: m,
            index: c
        })
    });
    d.sort(function (a, b) {
        var c = a.Of - b.Of;
        return 0 != c ? c : a.index - b.index
    });
    for (var a = [], f = 0; f < c && f < d.length; f++) a.push(d[f].nh);
    return a
};
var Ff = function (a) {
    var b;
    a: {
        var c = 0,
            d = 0;
        if (Df(a)) c = a.selectionStart, d = -1;
        else if (C) {
            var f = Ef(a);
            b = f[0];
            f = f[1];
            if (b.inRange(f)) {
                b.setEndPoint("EndToStart", f);
                if ("textarea" == a.type) {
                    f.duplicate();
                    c = a = b.text;
                    for (d = p; !d;) 0 == b.compareEndPoints("StartToEnd", b) ? d = i : (b.moveEnd("character", -1), b.text == a ? c += "\r\n" : d = i);
                    b = [c.length, -1];
                    break a
                }
                c = b.text.length;
                d = -1
            }
        }
        b = [c, d]
    }
    return b[0]
}, Ef = function (a) {
    var b = a.ownerDocument || a.document,
        c = b.selection.createRange();
    "textarea" == a.type ? (b = b.body.createTextRange(),
    b.moveToElementText(a)) : b = a.createTextRange();
    return [b, c]
}, Gf = function (a, b) {
    "textarea" == a.type && (b = a.value.substring(0, b).replace(/(\r\n|\r|\n)/g, "\n").length);
    return b
}, Df = function (a) {
    try {
        return "number" == typeof a.selectionStart
    } catch (b) {
        return p
    }
};
var Hf = function (a, b, c, d) {
    d = d || 150;
    this.Kb = c != j ? c : i;
    this.wc = a != j ? a : ",;";
    this.Gg = this.wc.substring(0, 1);
    a = this.Kb ? "[\\s" + this.wc + "]+" : "[\\s]+";
    this.ef = RegExp("^" + a + "|" + a + "$", "g");
    this.Hg = RegExp("\\s*[" + this.wc + "]$");
    this.yf = b || "";
    this.ug = this.Kb;
    this.o = 0 < d ? new jc(d) : j;
    this.Y = new L(this);
    this.Ad = new L(this);
    this.U = new ce;
    this.sf = -1
};
z(Hf, ra);
var If = ($e || af) && !F("533.17.9");
r = Hf.prototype;
r.Zg = i;
r.rh = i;
r.gf = p;
r.kh = i;
r.jh = i;
r.Vd = j;
r.v = j;
r.Nd = "";
r.$a = p;
r.Zd = p;
r.Ag = i;
r.n = function () {
    return this.v.value
};
r.N = function (a) {
    this.v.value = a
};
r.xe = function (a) {
    for (var b = 0; b < arguments.length; b++) {
        var c = arguments[b];
        ja(c) && 1 == c.nodeType && O(c, "haspopup", i);
        this.Y.d(c, "focus", this.nb);
        this.Y.d(c, "blur", this.Ia);
        this.v || (this.Ad.d(c, "keydown", this.Tg), ja(c) && 1 == c.nodeType && Oc(I(c)) == c && Jf(this, c))
    }
};
r.$d = function (a, b) {
    var c = a.toString();
    if (b !== h ? b : this.Kb) {
        var d = Kf(this, this.n(), Ff(this.v)),
            f = Lf(this, this.n());
        this.Hg.test(c) || (c = c.replace(/[\s\xa0]+$/, "") + this.Gg);
        this.Zg && (0 != d && !wa(f[d - 1]) && (c = " " + c), d == f.length - 1 && (c += " "));
        if (c != f[d]) {
            f[d] = c;
            c = this.v;
            (D || C && F("9")) && c.blur();
            c.value = f.join("");
            for (var g = 0, k = 0; k <= d; k++) g += f[k].length;
            c.focus();
            d = g;
            f = this.v;
            c = d;
            Df(f) ? f.selectionStart = c : C && (g = Ef(f), k = g[0], k.inRange(g[1]) && (c = Gf(f, c), k.collapse(i), k.move("character", c), k.select()));
            f = this.v;
            Df(f) ? f.selectionEnd = d : C && (g = Ef(f), c = g[1], g[0].inRange(c) && (d = Gf(f, d), f = Gf(f, Ff(f)), c.collapse(i), c.moveEnd("character", d - f), c.select()))
        }
    } else this.N(c);
    this.Zd = i;
    return p
};
r.g = function () {
    Hf.b.g.call(this);
    this.Vd != j && window.clearTimeout(this.Vd);
    this.Y.u();
    delete this.Y;
    this.Ad.u();
    this.U.u()
};
r.ca = function (a) {
    switch (a.keyCode) {
        case 40:
            if (this.w.fa()) return this.gf ? zf(this.w) : yf(this.w), a.preventDefault(), i;
            if (!this.Kb) return this.update(i), a.preventDefault(), i;
            break;
        case 38:
            if (this.w.fa()) return this.gf ? yf(this.w) : zf(this.w), a.preventDefault(), i;
            break;
        case 9:
            if (this.w.fa() && !a.shiftKey) {
                if (this.update(), vf(this.w) && this.ug) return a.preventDefault(), i
            } else this.w.Ga();
            break;
        case 13:
            if (this.w.fa()) {
                if (this.update(), vf(this.w)) return a.preventDefault(), a.stopPropagation(), i
            } else this.w.Ga();
            break;
        case 27:
            if (this.w.fa()) return this.w.Ga(), a.preventDefault(), a.stopPropagation(), i;
            break;
        case 229:
            if (!this.$a) return this.$a || (this.Y.d(this.v, "keyup", this.df), this.Y.d(this.v, "keypress", this.cf), this.$a = i), i;
            break;
        default:
            this.o && !this.Ag && (this.o.stop(), this.o.start())
    }
    return Mf(this, a)
};
var Mf = function (a, b) {
    var c = a.Kb && b.charCode && -1 != a.wc.indexOf(String.fromCharCode(b.charCode));
    a.kh && c && a.update();
    return a.jh && c && vf(a.w) ? (b.preventDefault(), i) : p
};
Hf.prototype.Kg = function () {
    return p
};
Hf.prototype.nb = function (a) {
    Jf(this, a.target || j)
};
var Jf = function (a, b) {
    a.Ad.removeAll();
    a.w && wf(a.w);
    b != a.v && (a.v = b, a.o && (a.o.start(), a.Y.d(a.o, "tick", a.Ec)), a.Nd = a.n(), be(a.U, a.v), a.Y.d(a.U, "key", a.Ve), a.Y.d(a.v, "mousedown", a.We), C && a.Y.d(a.v, "keypress", a.Ue))
};
r = Hf.prototype;
r.Ia = function () {
    If ? this.Vd = window.setTimeout(w(this.Yf, this), 0) : this.Yf()
};
r.Yf = function () {
    this.v && (this.Y.Q(this.U, "key", this.Ve), this.U.detach(), this.Y.Q(this.v, "keyup", this.Kg), this.Y.Q(this.v, "mousedown", this.We), C && this.Y.Q(this.v, "keypress", this.Ue), this.$a && Nf(this), this.v = j, this.o && (this.o.stop(), this.Y.Q(this.o, "tick", this.Ec)), this.w && xf(this.w))
};
r.Ec = function () {
    this.update()
};
r.Tg = function (a) {
    this.nb(a)
};
r.Ve = function (a) {
    this.sf = a.keyCode;
    this.w && this.ca(a)
};
r.cf = function () {
    this.$a && 229 != this.sf && Nf(this)
};
r.df = function (a) {
    this.$a && (13 == a.keyCode || 77 == a.keyCode && a.ctrlKey) && Nf(this)
};
r.We = function (a) {
    this.w && this.ra(a)
};
r.ra = function () {};
var Nf = function (a) {
    a.$a && (a.$a = p, a.Y.Q(a.v, "keypress", a.cf), a.Y.Q(a.v, "keyup", a.df))
};
Hf.prototype.Ue = function (a) {
    Mf(this, a)
};
Hf.prototype.update = function (a) {
    if (this.v && (a || this.n() != this.Nd)) {
        if (a || !this.Zd) {
            var b, a = Ff(this.v);
            b = this.n();
            a = Lf(this, b)[Kf(this, b, a)];
            b = this.ef ? ("" + a).replace(this.ef, "") : a;
            if (this.w && (this.w.V = this.v, a = this.w, this.n(), a.sa != b)) {
                a.sa = b;
                b = a.Ie;
                var c = a.sa,
                    d = a.Cd,
                    f = w(a.Rg, a),
                    g = b.wf(c, d);
                0 == g.length && b.Lg && (g = Cf(b, c, d));
                f(c, g);
                wf(a)
            }
        }
        this.Nd = this.n()
    }
    this.Zd = p
};
var Kf = function (a, b, c) {
    a = Lf(a, b);
    if (c == b.length) return a.length - 1;
    for (var d = b = 0, f = 0; d < a.length && f <= c; d++) f += a[d].length, b = d;
    return b
}, Lf = function (a, b) {
    if (!a.Kb) return [b];
    for (var c = ("" + b).split(""), d = [], f = [], g = 0, k = p; g < c.length; g++) a.yf && -1 != a.yf.indexOf(c[g]) ? (a.rh && !k && (d.push(f.join("")), f.length = 0), f.push(c[g]), k = !k) : !k && -1 != a.wc.indexOf(c[g]) ? (f.push(c[g]), d.push(f.join("")), f.length = 0) : f.push(c[g]);
    d.push(f.join(""));
    return d
};
var eb = {}, Of = j,
    Pf = function (a) {
        a = ma(a);
        delete eb[a];
        fb() && Of && (ic.clearTimeout(Of), Of = j)
    }, Rf = function () {
        Of || (Of = kc(function () {
            Of = j;
            Qf()
        }, 20))
    }, Qf = function () {
        var a = qa();
        bb(eb, function (b) {
            Sf(b, a)
        });
        fb() || Rf()
    };
var Tf = function () {
    this.j = 0;
    this.zf = this.startTime = j
};
z(Tf, hc);
Tf.prototype.vb = function () {
    this.Ma("begin")
};
Tf.prototype.Qb = function () {
    this.Ma("end")
};
Tf.prototype.Ma = function (a) {
    this.dispatchEvent(a)
};
var Uf = function (a, b, c, d) {
    Tf.call(this);
    (!u(a) || !u(b)) && e(Error("Start and end parameters must be arrays"));
    a.length != b.length && e(Error("Start and end points must be the same length"));
    this.xc = a;
    this.vh = b;
    this.duration = c;
    this.Vf = d;
    this.coords = []
};
z(Uf, Tf);
Uf.prototype.pa = 0;
Uf.prototype.play = function (a) {
    if (a || 0 == this.j) this.pa = 0, this.coords = this.xc;
    else if (1 == this.j) return p;
    Pf(this);
    this.startTime = a = qa(); - 1 == this.j && (this.startTime -= this.duration * this.pa);
    this.zf = this.startTime + this.duration;
    this.pa || this.vb();
    this.Ma("play"); - 1 == this.j && this.Ma("resume");
    this.j = 1;
    var b = ma(this);
    b in eb || (eb[b] = this);
    Rf();
    Sf(this, a);
    return i
};
Uf.prototype.stop = function (a) {
    Pf(this);
    this.j = 0;
    a && (this.pa = 1);
    Vf(this, this.pa);
    this.Ma("stop");
    this.Qb()
};
Uf.prototype.g = function () {
    0 == this.j || this.stop(p);
    this.Ma("destroy");
    Uf.b.g.call(this)
};
var Sf = function (a, b) {
    a.pa = (b - a.startTime) / (a.zf - a.startTime);
    1 <= a.pa && (a.pa = 1);
    Vf(a, a.pa);
    1 == a.pa ? (a.j = 0, Pf(a), a.Ma("finish"), a.Qb()) : 1 == a.j && a.ae()
}, Vf = function (a, b) {
    ia(a.Vf) && (b = a.Vf(b));
    a.coords = Array(a.xc.length);
    for (var c = 0; c < a.xc.length; c++) a.coords[c] = (a.vh[c] - a.xc[c]) * b + a.xc[c]
};
Uf.prototype.ae = function () {
    this.Ma("animate")
};
Uf.prototype.Ma = function (a) {
    this.dispatchEvent(new Wf(a, this))
};
var Wf = function (a, b) {
    Mb.call(this, a);
    this.coords = b.coords;
    this.x = b.coords[0];
    this.y = b.coords[1];
    this.duration = b.duration;
    this.pa = b.pa;
    this.state = b.j
};
z(Wf, Mb);
var Xf = function (a, b, c, d, f) {
    Uf.call(this, b, c, d, f);
    this.element = a
};
z(Xf, Uf);
Xf.prototype.ld = ea;
Xf.prototype.ae = function () {
    this.ld();
    Xf.b.ae.call(this)
};
Xf.prototype.Qb = function () {
    this.ld();
    Xf.b.Qb.call(this)
};
Xf.prototype.vb = function () {
    this.ld();
    Xf.b.vb.call(this)
};
var Yf = function (a, b, c, d, f) {
    ha(b) && (b = [b]);
    ha(c) && (c = [c]);
    Xf.call(this, a, b, c, d, f);
    (1 != b.length || 1 != c.length) && e(Error("Start and end points must be 1D"))
};
z(Yf, Xf);
Yf.prototype.ld = function () {
    var a = this.coords[0],
        b = this.element.style;
    "opacity" in b ? b.opacity = a : "MozOpacity" in b ? b.MozOpacity = a : "filter" in b && (b.filter = "" === a ? "" : "alpha(opacity=" + 100 * a + ")")
};
Yf.prototype.show = function () {
    this.element.style.display = ""
};
Yf.prototype.hide = function () {
    this.element.style.display = "none"
};
var Zf = function (a, b, c) {
    Yf.call(this, a, 1, 0, b, c)
};
z(Zf, Yf);
var $f = function (a, b, c) {
    Yf.call(this, a, 1, 0, b, c)
};
z($f, Yf);
$f.prototype.vb = function () {
    this.show();
    $f.b.vb.call(this)
};
$f.prototype.Qb = function () {
    this.hide();
    $f.b.Qb.call(this)
};
var ag = function (a, b, c) {
    Yf.call(this, a, 0, 1, b, c)
};
z(ag, Yf);
ag.prototype.vb = function () {
    this.show();
    ag.b.vb.call(this)
};
var bg = function (a, b, c, d) {
    this.C = a || document.body;
    this.L = vc(this.C);
    this.vg = !a;
    this.c = j;
    this.sa = "";
    this.O = [];
    this.ob = [];
    this.Ze = this.Yc = -1;
    this.I = p;
    this.className = "ac-renderer";
    this.Id = "ac-row";
    this.af = "active";
    this.$e = "ac-active";
    this.zg = "ac-highlighted";
    this.fc = b || j;
    this.ng = d != j ? d : i;
    this.Sd = p;
    this.wg = c != j ? c : p;
    this.Od = j;
    this.Oc = p;
    this.Xc = 0
};
z(bg, hc);
r = bg.prototype;
r.a = function () {
    return this.c
};
r.fe = function (a, b, c) {
    this.sa = b;
    this.O = a;
    this.Yc = -1;
    this.Ze = qa();
    this.V = c;
    this.ob = [];
    cg(this)
};
r.Ga = function () {
    this.V && O(this.V, "activedescendant", "");
    this.I && (this.I = p, this.V && O(this.V, "haspopup", p), 0 < this.Xc ? (ta(this.Lb), this.Lb = new $f(this.c, this.Xc), this.Lb.play()) : K(this.c, p))
};
r.show = function () {
    this.I || ((this.I = i, this.V && (Vd(this.V, "combobox"), O(this.V, "autocomplete", "list"), O(this.V, "haspopup", i)), 0 < this.Xc) ? (ta(this.Lb), this.Lb = new ag(this.c, this.Xc), this.Lb.play()) : K(this.c, i))
};
r.K = function () {
    return this.I
};
var dg = function (a, b) {
    var c = 0 <= b && b < a.ob.length ? a.ob[b] : h;
    if (a.dispatchEvent({
        type: "rowhilite",
        Fh: c
    }) && (0 <= a.Yc && pc(a.ob[a.Yc], a.$e, a.af), a.Yc = b, c)) {
        G(c, a.$e, a.af);
        a.V && O(a.V, "activedescendant", c ? c.id : "");
        var d = a.c,
            f = md(c),
            g = md(d),
            k = yd(d),
            l = f.x - g.x - k.left,
            f = f.y - g.y - k.top,
            g = d.clientHeight - c.offsetHeight,
            k = d.scrollLeft,
            o = d.scrollTop,
            k = k + Math.min(l, Math.max(l - (d.clientWidth - c.offsetWidth), 0)),
            o = o + Math.min(f, Math.max(f - g, 0)),
            c = new H(k, o);
        d.scrollLeft = c.x;
        d.scrollTop = c.y
    }
};
bg.prototype.ya = function (a) {
    if (-1 == a) dg(this, -1);
    else for (var b = 0; b < this.O.length; b++) if (this.O[b].id == a) {
        dg(this, b);
        break
    }
};
var eg = function (a) {
    if (!a.c) {
        var b = a.L.e("div", {
            style: "display:none"
        });
        a.c = b;
        G(b, a.className);
        Vd(b, "listbox");
        b.id = Fd(Ed.t());
        a.L.appendChild(a.C, b);
        Xb(b, "click", a.Ne, p, a);
        Xb(b, "mousedown", a.Oe, p, a);
        Xb(b, "mouseover", a.Pe, p, a)
    }
}, cg = function (a) {
    eg(a);
    a.Oc && (a.c.style.visibility = "hidden");
    a.xg && (a.c.style.minWidth = a.xg.clientWidth + "px");
    a.ob.length = 0;
    a.L.bf(a.c);
    if (a.fc && a.fc.Dc) a.fc.Dc(a);
    else {
        var b = j;
        Vc(a.O, function (a) {
            var d = this.sa,
                f = this.L.e("div", {
                    className: this.Id,
                    id: Fd(Ed.t())
                });
            Vd(f, "option");
            if (!this.fc || !this.fc.Eh) f.innerHTML = Ga(a.data.toString());
            d && this.ng && fg(this, f, d);
            G(f, this.Id);
            this.ob.push(f);
            a = f;
            this.Oc ? this.c.insertBefore(a, b) : this.L.appendChild(this.c, a);
            b = a
        }, a)
    }
    0 == a.O.length ? a.Ga() : (a.show(), a.ja(), ud(a.c, i))
};
bg.prototype.ja = function () {
    if (this.V && this.vg) {
        var a = this.yg || this.V,
            b = md(a),
            c = rd(a),
            a = rd(jd(a)),
            d = rd(this.c);
        b.y = this.Oc ? b.y - d.height : b.y + c.height;
        (this.wg || b.x + d.width > a.width) && "LEFT" != this.Od ? (b.x = b.x + c.width - d.width, this.Od = "RIGHT") : this.Od = "LEFT";
        pd(this.c, b);
        this.Oc && (this.c.style.visibility = "visible")
    }
};
bg.prototype.g = function () {
    this.c && (ac(this.c, "click", this.Ne, p, this), ac(this.c, "mousedown", this.Oe, p, this), ac(this.c, "mouseover", this.Pe, p, this), this.L.removeNode(this.c), this.c = j, this.I = p);
    ta(this.Lb);
    delete this.C;
    bg.b.g.call(this)
};
var fg = function (a, b, c) {
    if (3 == b.nodeType) {
        var d = j;
        u(c) && 1 < c.length && !a.Sd && (d = $a(c, 1));
        c = gg(a, c);
        if (0 != c.length) {
            for (var f = b.nodeValue, g = RegExp("([\\s\\S]*?)\\b(" + c + ")", "gi"), c = [], k = 0, l = g.exec(f), o = 0; l;) o++, c.push(l[1]), c.push(l[2]), k = g.lastIndex, l = g.exec(f);
            c.push(f.substring(k));
            if (1 < c.length) {
                d = !a.Sd ? 1 : o;
                for (f = 0; f < d; f++) g = 2 * f, b.nodeValue = c[g], k = a.L.createElement("b"), k.className = a.zg, a.L.appendChild(k, a.L.createTextNode(c[g + 1])), k = b.parentNode.insertBefore(k, b.nextSibling), b.parentNode.insertBefore(a.L.createTextNode(""),
                k.nextSibling), b = k.nextSibling;
                a = $a(c, 2 * d);
                b.nodeValue = a.join("")
            } else d && fg(a, b, d)
        }
    } else for (b = b.firstChild; b;) d = b.nextSibling, fg(a, b, c), b = d
}, gg = function (a, b) {
    var c = "";
    if (!b) return c;
    u(b) && (b = Sa(b, function (a) {
        return !wa(a == j ? "" : "" + a)
    }));
    a.Sd ? u(b) ? c = Ta(b, La).join("|") : (c = b.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, ""), c = La(c), c = c.replace(/ /g, "|")) : u(b) ? c = 0 < b.length ? La(b[0]) : "" : /^\W/.test(b) || (c = La(b));
    return c
}, hg = function (a, b) {
    for (; b && b != a.c && !Va(nc(b), a.Id);) b = b.parentNode;
    return b ? Qa(a.ob,
    b) : -1
};
bg.prototype.Ne = function (a) {
    var b = hg(this, a.target);
    0 <= b && this.dispatchEvent({
        type: "select",
        hd: this.O[b].id
    });
    a.stopPropagation()
};
bg.prototype.Oe = function (a) {
    a.stopPropagation();
    a.preventDefault()
};
bg.prototype.Pe = function (a) {
    a = hg(this, a.target);
    0 <= a && !(300 > qa() - this.Ze) && this.dispatchEvent({
        type: "hilite",
        hd: this.O[a].id
    })
};
var lg = function (a, b, c, d, f) {
    a = new ig(a, !d);
    f = new jg(j, j, h, h, f);
    c = new kg( !! c);
    uf.call(this, a, f, c);
    c.w = this;
    c.xe(b)
};
z(lg, uf);
var ig = function (a, b) {
    Bf.call(this, a, b)
};
z(ig, Bf);
ig.prototype.wf = function (a, b) {
    var c = [];
    if ("" != a) {
        var d = La(a),
            f = RegExp("(^|\\W+)" + d, "i"),
            g = RegExp(d, "i"),
            k = /^\d+$/.test(a);
        Wc(this.O, function (a) {
            (mg(a).match(f) || k && mg(a).match(g)) && c.push(a);
            return c.length >= b
        })
    }
    return c
};
var jg = function (a, b, c, d, f) {
    bg.call(this, a, b, c, d);
    f && (this.className = f)
};
z(jg, bg);
var kg = function (a) {
    Hf.call(this, ",;", '"', a)
};
z(kg, Hf);
kg.prototype.$d = function (a) {
    kg.b.$d.call(this, a.Xg())
};
var ng = function (a, b) {
    this.ea = a;
    this.Eb = b
};
ng.prototype.toString = function () {
    var a = this.Eb.phoneTypeName ? this.Eb.phoneTypeName.charAt(0).toUpperCase() : "O";
    return Ma(Ja(this.Eb.name), " ", this.Eb.displayNumber, " (", a, ")")
};
ng.prototype.Xg = function () {
    return this.Eb.displayNumber
};
var mg = function (a) {
    return Ma(a.Eb.name, " ", a.Eb.displayNumber, " ", a.ea)
};
var pg = function (a) {
    return og(a || arguments.callee.caller, [])
}, og = function (a, b) {
    var c = [];
    if (Va(b, a)) c.push("[...circular reference...]");
    else if (a && 50 > b.length) {
        c.push(qg(a) + "(");
        for (var d = a.arguments, f = 0; f < d.length; f++) {
            0 < f && c.push(", ");
            var g;
            g = d[f];
            switch (typeof g) {
                case "object":
                    g = g ? "object" : "null";
                    break;
                case "string":
                    break;
                case "number":
                    g = "" + g;
                    break;
                case "boolean":
                    g = g ? "true" : "false";
                    break;
                case "function":
                    g = (g = qg(g)) ? g : "[fn]";
                    break;
                default:
                    g = typeof g
            }
            40 < g.length && (g = g.substr(0, 40) + "...");
            c.push(g)
        }
        b.push(a);
        c.push(")\n");
        try {
            c.push(og(a.caller, b))
        } catch (k) {
            c.push("[exception trying to get caller]\n")
        }
    } else a ? c.push("[...long stack...]") : c.push("[end]");
    return c.join("")
}, qg = function (a) {
    if (rg[a]) return rg[a];
    a = "" + a;
    if (!rg[a]) {
        var b = /function ([^\(]+)/.exec(a);
        rg[a] = b ? b[1] : "[Anonymous]"
    }
    return rg[a]
}, rg = {};
var sg = function (a, b, c, d, f) {
    this.reset(a, b, c, d, f)
};
sg.prototype.Uf = j;
sg.prototype.Tf = j;
var tg = 0;
sg.prototype.reset = function (a, b, c, d, f) {
    "number" == typeof f || tg++;
    d || qa();
    this.Ac = a;
    this.uh = b;
    delete this.Uf;
    delete this.Tf
};
sg.prototype.Pf = function (a) {
    this.Ac = a
};
sg.prototype.getMessage = function () {
    return this.uh
};
var ug = function (a) {
    this.wh = a
};
ug.prototype.C = j;
ug.prototype.Ac = j;
ug.prototype.P = j;
ug.prototype.Zf = j;
var vg = function (a, b) {
    this.name = a;
    this.value = b
};
vg.prototype.toString = function () {
    return this.name
};
var wg = new vg("SEVERE", 1E3),
    xg = new vg("WARNING", 900),
    yg = new vg("CONFIG", 700),
    zg = new vg("FINE", 500);
ug.prototype.getParent = function () {
    return this.C
};
ug.prototype.getChildren = function () {
    this.P || (this.P = {});
    return this.P
};
ug.prototype.Pf = function (a) {
    this.Ac = a
};
var Ag = function (a) {
    if (a.Ac) return a.Ac;
    if (a.C) return Ag(a.C);
    Pa("Root logger has no level set.");
    return j
};
ug.prototype.log = function (a, b, c) {
    if (a.value >= Ag(this).value) {
        a = this.yh(a, b, c);
        b = "log:" + a.getMessage();
        s.console && (s.console.timeStamp ? s.console.timeStamp(b) : s.console.markTimeline && s.console.markTimeline(b));
        s.msWriteProfilerMark && s.msWriteProfilerMark(b);
        for (b = this; b;) {
            var c = b,
                d = a;
            if (c.Zf) for (var f = 0, g = h; g = c.Zf[f]; f++) g(d);
            b = b.getParent()
        }
    }
};
ug.prototype.yh = function (a, b, c) {
    var d = new sg(a, "" + b, this.wh);
    if (c) {
        d.Uf = c;
        var f;
        var g = arguments.callee.caller;
        try {
            var k;
            var l = da("window.location.href");
            if (v(c)) k = {
                message: c,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: l,
                stack: "Not available"
            };
            else {
                var o, m, n = p;
                try {
                    o = c.lineNumber || c.Hh || "Not available"
                } catch (q) {
                    o = "Not available", n = i
                }
                try {
                    m = c.fileName || c.filename || c.sourceURL || l
                } catch (x) {
                    m = "Not available", n = i
                }
                k = n || !c.lineNumber || !c.fileName || !c.stack ? {
                    message: c.message,
                    name: c.name,
                    lineNumber: o,
                    fileName: m,
                    stack: c.stack || "Not available"
                } : c
            }
            f = "Message: " + Ga(k.message) + '\nUrl: <a href="view-source:' + k.fileName + '" target="_new">' + k.fileName + "</a>\nLine: " + k.lineNumber + "\n\nBrowser stack:\n" + Ga(k.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ga(pg(g) + "-> ")
        } catch (y) {
            f = "Exception trying to expose exception! You win, we lose. " + y
        }
        d.Tf = f
    }
    return d
};
var Bg = function (a, b) {
    a.log(zg, b, h)
}, Cg = {}, Dg = j,
    Eg = function (a) {
        Dg || (Dg = new ug(""), Cg[""] = Dg, Dg.Pf(yg));
        var b;
        if (!(b = Cg[a])) {
            b = new ug(a);
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1),
                c = Eg(a.substr(0, c));
            c.getChildren()[d] = b;
            b.C = c;
            Cg[a] = b
        }
        return b
    };
var Fg = function (a) {
    a = "" + a;
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
        return eval("(" + a + ")")
    } catch (b) {}
    e(Error("Invalid JSON string: " + a))
};
var Gg = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
    Hg = E,
    Ig = function (a, b) {
        if (Hg) {
            Hg = p;
            var c = s.location;
            if (c) {
                var d = c.href;
                if (d && (d = (d = Ig(3, d)) && decodeURIComponent(d)) && d != c.hostname) Hg = i, e(Error())
            }
        }
        return b.match(Gg)[a] || j
    };
var Jg = function () {};
Jg.prototype.gd = j;
var Kg, Lg = function () {};
z(Lg, Jg);
var Ng = function (a) {
    return (a = Mg(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}, Og = function (a) {
    var b = {};
    Mg(a) && (b[0] = i, b[1] = i);
    return b
};
Lg.prototype.Ge = j;
var Mg = function (a) {
    if (!a.Ge && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d), a.Ge = d
            } catch (f) {}
        }
        e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
    }
    return a.Ge
};
Kg = new Lg;
var Pg = function (a) {
    this.headers = new ad;
    this.Rb = a || j
};
z(Pg, hc);
Pg.prototype.ga = Eg("goog.net.XhrIo");


// CARLIN
// Tg(Dh("/sms/send/"), w(this.bh, this), "POST", a.toString())
var Qg = /^https?$/i,
    Rg = [],
    Tg = function (a, b, c, d, f, g) {
        var k = new Pg;
        Rg.push(k);
        b && Xb(k, "complete", b);
        Xb(k, "ready", pa(Sg, k));
        g && (k.uc = Math.max(0, g));
        k.send(a, c, d, f)
    }, Sg = function (a) {
        a.u();
        Wa(Rg, a)
    };
r = Pg.prototype;
r.Za = p;
r.q = j;
r.fd = j;
r.ge = "";
r.tf = "";
r.sc = "";
r.he = p;
r.ed = p;
r.ce = p;
r.sb = p;
r.uc = 0;
r.xb = j;
r.uf = "";
r.Qg = p;
r.send = function (a, b, c, d) {
    this.q && e(Error("[goog.net.XhrIo] Object is active with another request"));
    b = b ? b.toUpperCase() : "GET";
    this.ge = a;
    this.sc = "";
    this.tf = b;
    this.he = p;
    this.Za = i;
    this.q = this.Rb ? Ng(this.Rb) : Ng(Kg);
    this.fd = this.Rb ? this.Rb.gd || (this.Rb.gd = Og(this.Rb)) : Kg.gd || (Kg.gd = Og(Kg));
    this.q.onreadystatechange = w(this.rf, this);
    try {
        Bg(this.ga, Ug(this, "Opening Xhr")), this.ce = i, this.q.open(b, a, i), this.ce = p
    } catch (f) {
        Bg(this.ga, Ug(this, "Error opening Xhr: " + f.message));
        Vg(this, f);
        return
    }
    var a = c || "",
        g = this.headers.Ca();
    d && Yc(d, function (a, b) {
        g.set(b, a)
    });
    "POST" == b && !g.bb("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    Yc(g, function (a, b) {
        this.q.setRequestHeader(b, a)
    }, this);
    this.uf && (this.q.responseType = this.uf);
    "withCredentials" in this.q && (this.q.withCredentials = this.Qg);
    try {
        this.xb && (ic.clearTimeout(this.xb), this.xb = j), 0 < this.uc && (Bg(this.ga, Ug(this, "Will abort after " + this.uc + "ms if incomplete")), this.xb = ic.setTimeout(w(this.Pg, this), this.uc)), Bg(this.ga, Ug(this, "Sending request")),
        this.ed = i, this.q.send(a), this.ed = p
    } catch (k) {
        Bg(this.ga, Ug(this, "Send error: " + k.message)), Vg(this, k)
    }
};
r.Pg = function () {
    "undefined" != typeof ba && this.q && (this.sc = "Timed out after " + this.uc + "ms, aborting", Bg(this.ga, Ug(this, this.sc)), this.dispatchEvent("timeout"), this.abort(8))
};
var Vg = function (a, b) {
    a.Za = p;
    a.q && (a.sb = i, a.q.abort(), a.sb = p);
    a.sc = b;
    Wg(a);
    Xg(a)
}, Wg = function (a) {
    a.he || (a.he = i, a.dispatchEvent("complete"), a.dispatchEvent("error"))
};
Pg.prototype.abort = function () {
    this.q && this.Za && (Bg(this.ga, Ug(this, "Aborting")), this.Za = p, this.sb = i, this.q.abort(), this.sb = p, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Xg(this))
};
Pg.prototype.g = function () {
    this.q && (this.Za && (this.Za = p, this.sb = i, this.q.abort(), this.sb = p), Xg(this, i));
    Pg.b.g.call(this)
};
Pg.prototype.rf = function () {
    !this.ce && !this.ed && !this.sb ? this.qh() : Yg(this)
};
Pg.prototype.qh = function () {
    Yg(this)
};
var Yg = function (a) {
    if (a.Za && "undefined" != typeof ba) if (a.fd[1] && 4 == Zg(a) && 2 == $g(a)) Bg(a.ga, Ug(a, "Local request error detected and ignored"));
    else if (a.ed && 4 == Zg(a)) ic.setTimeout(w(a.rf, a), 0);
    else if (a.dispatchEvent("readystatechange"), 4 == Zg(a)) {
        Bg(a.ga, Ug(a, "Request complete"));
        a.Za = p;
        if (ah(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
        else {
            var b;
            try {
                b = 2 < Zg(a) ? a.q.statusText : ""
            } catch (c) {
                Bg(a.ga, "Can not get status: " + c.message), b = ""
            }
            a.sc = b + " [" + $g(a) + "]";
            Wg(a)
        }
        Xg(a)
    }
}, Xg = function (a, b) {
    if (a.q) {
        var c = a.q,
            d = a.fd[0] ? ea : j;
        a.q = j;
        a.fd = j;
        a.xb && (ic.clearTimeout(a.xb), a.xb = j);
        b || a.dispatchEvent("ready");
        try {
            c.onreadystatechange = d
        } catch (f) {
            a.ga.log(wg, "Problem encountered resetting onreadystatechange: " + f.message, h)
        }
    }
};
Pg.prototype.rb = function () {
    return !!this.q
};
var ah = function (a) {
    var b = $g(a),
        c;
    a: switch (b) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 304:
        case 1223:
            c = i;
            break a;
        default:
            c = p
    }
    if (!c) {
        if (b = 0 === b) a = Ig(1, "" + a.ge), !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1)), b = !Qg.test(a ? a.toLowerCase() : "");
        c = b
    }
    return c
}, Zg = function (a) {
    return a.q ? a.q.readyState : 0
}, $g = function (a) {
    try {
        return 2 < Zg(a) ? a.q.status : -1
    } catch (b) {
        return a.ga.log(xg, "Can not get status: " + b.message, h), -1
    }
}, bh = function (a) {
    try {
        return a.q ? a.q.responseText : ""
    } catch (b) {
        return Bg(a.ga,
            "Can not get responseText: " + b.message), ""
    }
}, ch = function (a) {
    if (a.q) return Fg(a.q.responseText)
}, Ug = function (a, b) {
    return b + " [" + a.tf + " " + a.ge + " " + $g(a) + "]"
};
var dh = function (a, b, c) {
    U.call(this, a, b || bf.t(), c)
};
z(dh, U);
R("goog-custom-button", function () {
    return new dh(j)
});
var Y = function (a, b) {
    M.call(this, b);
    this.xa = a || ""
};
z(Y, M);
Y.prototype.Da = j;
var eh = "placeholder" in document.createElement("input");
r = Y.prototype;
r.gc = p;
r.e = function () {
    this.c = this.m().e("input", {
        type: "text"
    })
};
r.ua = function (a) {
    Y.b.ua.call(this, a);
    this.xa || (this.xa = a.getAttribute("label") || "");
    Oc(I(a)) == a && (this.gc = i, pc(this.a(), this.lc));
    eh ? this.a().placeholder = this.xa : O(this.a(), "label", this.xa)
};
r.T = function () {
    Y.b.T.call(this);
    var a = new L(this);
    a.d(this.a(), "focus", this.Fd);
    a.d(this.a(), "blur", this.pg);
    eh ? this.i = a : (D && a.d(this.a(), ["keypress", "keydown", "keyup"], this.qg), a.d(I(this.a()) ? I(this.a()).parentWindow || I(this.a()).defaultView : window, "load", this.rg), this.i = a, fh(this));
    gh(this);
    this.a().og = this
};
r.ia = function () {
    Y.b.ia.call(this);
    hh(this);
    this.a().og = j
};
var fh = function (a) {
    !a.Bg && a.i && a.a().form && (a.i.d(a.a().form, "submit", a.Cg), a.Bg = i)
}, hh = function (a) {
    a.i && (a.i.u(), a.i = j)
};
r = Y.prototype;
r.g = function () {
    Y.b.g.call(this);
    hh(this)
};
r.lc = "label-input-label";
r.Fd = function () {
    this.gc = i;
    pc(this.a(), this.lc);
    if (!eh && !ih(this) && !this.Yd) {
        var a = this,
            b = function () {
                a.a().value = ""
            };
        C ? kc(b, 10) : b()
    }
};
r.pg = function () {
    eh || (this.i.Q(this.a(), "click", this.Fd), this.Da = j);
    this.gc = p;
    gh(this)
};
r.qg = function (a) {
    27 == a.keyCode && ("keydown" == a.type ? this.Da = this.a().value : "keypress" == a.type ? this.a().value = this.Da : "keyup" == a.type && (this.Da = j), a.preventDefault())
};
r.Cg = function () {
    ih(this) || (this.a().value = "", kc(this.Vg, 10, this))
};
r.Vg = function () {
    ih(this) || (this.a().value = this.xa)
};
r.rg = function () {
    gh(this)
};
var ih = function (a) {
    return !!a.a() && "" != a.a().value && a.a().value != a.xa
};
Y.prototype.clear = function () {
    this.a().value = "";
    this.Da != j && (this.Da = "")
};
Y.prototype.reset = function () {
    ih(this) && (this.clear(), gh(this))
};
Y.prototype.N = function (a) {
    this.Da != j && (this.Da = a);
    this.a().value = a;
    gh(this)
};
Y.prototype.n = function () {
    return this.Da != j ? this.Da : ih(this) ? this.a().value : ""
};
var gh = function (a) {
    eh ? a.a().placeholder != a.xa && (a.a().placeholder = a.xa) : (fh(a), O(a.a(), "label", a.xa));
    ih(a) ? pc(a.a(), a.lc) : (!a.Yd && !a.gc && G(a.a(), a.lc), eh || kc(a.Sg, 10, a))
}, jh = function (a) {
    var b = ih(a);
    a.Yd = i;
    a.a().focus();
    !b && !eh && (a.a().value = a.xa);
    a.a().select();
    eh || (a.i && Dd(a.i, a.a(), "click", a.Fd), kc(a.Ig, 10, a))
};
Y.prototype.setEnabled = function (a) {
    this.a().disabled = !a;
    var b = this.a(),
        c = this.lc + "-disabled";
    !a ? G(b, c) : pc(b, c)
};
Y.prototype.isEnabled = function () {
    return !this.a().disabled
};
Y.prototype.Ig = function () {
    this.Yd = p
};
Y.prototype.Sg = function () {
    this.a() && !ih(this) && !this.gc && (this.a().value = this.xa)
};
var kh = function (a, b, c) {
    Oe.call(this, a, b, c);
    this.ee(i)
};
z(kh, Oe);
kh.prototype.Ya = function () {
    return this.dispatchEvent("action")
};
R("goog-option", function () {
    return new kh(j)
});
var mh = function (a, b) {
    this.$ = new L(this);
    var c = a || j;
    lh(this);
    this.c = c;
    b && (this.Ib = b)
};
z(mh, hc);
r = mh.prototype;
r.c = j;
r.hf = i;
r.qe = j;
r.Ob = p;
r.dh = p;
r.pe = -1;
r.Eg = p;
r.eh = i;
r.Ib = "toggle_display";
r.a = function () {
    return this.c
};
var nh = function (a) {
    lh(a);
    a.hf = i
};
mh.prototype.kc = function (a) {
    this.qe = a
};
var lh = function (a) {
    a.Ob && e(Error("Can not change this state of the popup while showing."))
};
mh.prototype.K = function () {
    return this.Ob
};
mh.prototype.H = function (a) {
    this.bc && this.bc.stop();
    this.jc && this.jc.stop();
    a ? this.sd() : oh(this)
};
mh.prototype.ja = ea;
mh.prototype.sd = function () {
    if (!this.Ob && this.dispatchEvent("beforeshow")) {
        this.c || e(Error("Caller must call setElement before trying to show the popup"));
        this.ja();
        var a = I(this.c);
        this.Eg && this.$.d(a, "keydown", this.Fg, i);
        if (this.hf) if (this.$.d(a, "mousedown", this.kf, i), C) {
            var b;
            try {
                b = a.activeElement
            } catch (c) {}
            for (; b && "IFRAME" == b.nodeName;) {
                try {
                    var d = b.contentDocument || b.contentWindow.document
                } catch (f) {
                    break
                }
                a = d;
                b = a.activeElement
            }
            this.$.d(a, "mousedown", this.kf, i);
            this.$.d(a, "deactivate", this.jf)
        } else this.$.d(a,
            "blur", this.jf);
        "toggle_display" == this.Ib ? (this.c.style.visibility = "visible", K(this.c, i)) : "move_offscreen" == this.Ib && this.ja();
        this.Ob = i;
        this.bc ? ($b(this.bc, "end", this.lf, p, this), this.bc.play()) : this.lf()
    }
};
var oh = function (a, b) {
    if (!a.Ob || !a.dispatchEvent({
        type: "beforehide",
        target: b
    })) return p;
    a.$ && a.$.removeAll();
    a.Ob = p;
    a.jc ? ($b(a.jc, "end", pa(a.Lf, b), p, a), a.jc.play()) : a.Lf(b);
    return i
};
r = mh.prototype;
r.Lf = function (a) {
    "toggle_display" == this.Ib ? this.dh ? kc(this.Af, 0, this) : this.Af() : "move_offscreen" == this.Ib && (this.c.style.left = "-200px", this.c.style.top = "-200px");
    qa();
    this.dispatchEvent({
        type: "hide",
        target: a
    })
};
r.Af = function () {
    this.c.style.visibility = "hidden";
    K(this.c, p)
};
r.lf = function () {
    this.pe = qa();
    this.dispatchEvent("show")
};
r.kf = function (a) {
    a = a.target;
    !Hc(this.c, a) && (!this.qe || Hc(this.qe, a)) && !(150 > qa() - this.pe) && oh(this, a)
};
r.Fg = function (a) {
    27 == a.keyCode && oh(this, a.target) && (a.preventDefault(), a.stopPropagation())
};
r.jf = function (a) {
    if (this.eh) {
        var b = I(this.c);
        if (C || tb) {
            if (a = b.activeElement, !a || Hc(this.c, a) || "BODY" == a.tagName) return
        } else if (a.target != b) return;
        150 > qa() - this.pe || oh(this)
    }
};
r.g = function () {
    mh.b.g.call(this);
    this.$.u();
    ta(this.bc);
    ta(this.jc);
    delete this.c;
    delete this.$
};
var ph = function (a, b) {
    this.Ng = 4;
    this.de = b || h;
    mh.call(this, a)
};
z(ph, mh);
ph.prototype.Ye = function (a) {
    this.de = a || h;
    this.K() && this.ja()
};
var qh = function (a) {
    a.Mg = new cd(10, 10, 10, 10);
    a.K() && a.ja()
};
ph.prototype.ja = function () {
    if (this.de) {
        var a = !this.K() && "move_offscreen" != this.Ib,
            b = this.a();
        a && (b.style.visibility = "hidden", K(b, i));
        this.de.ja(b, this.Ng, this.Mg);
        a && K(b, p)
    }
};
var rh = function (a, b, c) {
    U.call(this, a, b || bf.t(), c);
    T(this, 16, i)
};
z(rh, U);
R("goog-toggle-button", function () {
    return new rh(j)
});
var sh = function () {};
z(sh, bf);
t(sh);
var th = [];
r = sh.prototype;
r.e = sh.b.e;
r.B = function (a) {
    return a && a.firstChild.firstChild.firstChild.lastChild
};
r.ic = function (a, b) {
    var c = this.Ba();
    return b.e("div", "goog-inline-block " + (c + "-outer-box"), b.e("div", "goog-inline-block " + (c + "-inner-box"), b.e("div", c + "-pos", b.e("div", c + "-top-shadow", "\u00a0"), b.e("div", c + "-content", a))))
};
r.mf = function (a, b) {
    var c = this.Ba(),
        d = a.m().Tb(b);
    if (d && -1 != d.className.indexOf(c + "-outer-box") && (d = a.m().Tb(d)) && -1 != d.className.indexOf(c + "-inner-box")) if ((d = a.m().Tb(d)) && -1 != d.className.indexOf(c + "-pos")) if ((d = a.m().Tb(d)) && -1 != d.className.indexOf(c + "-top-shadow")) if (a.m(), (d = d.nextElementSibling != h ? d.nextElementSibling : Fc(d.nextSibling)) && -1 != d.className.indexOf(c + "-content")) return i;
    return p
};
r.k = function () {
    return "goog-button"
};
r.Ba = function () {
    return "goog-button-base"
};
r.Fe = function () {
    return th
};
R("goog-button", function () {
    return new U(j, sh.t())
});
var uh = function () {};
z(uh, sh);
t(uh);
var vh = [
    ["goog-button-base-disabled", "goog-primaryactionbutton"],
    ["goog-button-base-focused", "goog-primaryactionbutton"],
    ["goog-button-base-hover", "goog-primaryactionbutton"]
];
uh.prototype.k = function () {
    return "goog-primaryactionbutton"
};
uh.prototype.Fe = function () {
    return vh
};
R("goog-primaryactionbutton", function () {
    return new U(j, uh.t())
});
var wh = function (a, b, c) {
    this.Oa = a || j;
    this.Rf = b || j;
    this.th = !! c
}, yh = function (a) {
    if (!a.M && (a.M = new ad, a.z = 0, a.Oa)) for (var b = a.Oa.split("&"), c = 0; c < b.length; c++) {
        var d = b[c].indexOf("="),
            f = j,
            g = j;
        0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
        f = decodeURIComponent(f.replace(/\+/g, " "));
        f = xh(a, f);
        a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
};
r = wh.prototype;
r.M = j;
r.z = j;
r.add = function (a, b) {
    yh(this);
    zh(this);
    a = xh(this, a);
    if (this.bb(a)) {
        var c = this.M.get(a);
        u(c) ? c.push(b) : this.M.set(a, [c, b])
    } else this.M.set(a, b);
    this.z++;
    return this
};
r.clear = function () {
    zh(this);
    this.M && this.M.clear();
    this.z = 0
};
r.bb = function (a) {
    yh(this);
    a = xh(this, a);
    return this.M.bb(a)
};
r.Ub = function () {
    yh(this);
    for (var a = this.M.Cb(), b = this.M.Ub(), c = [], d = 0; d < b.length; d++) {
        var f = a[d];
        if (u(f)) for (var g = 0; g < f.length; g++) c.push(b[d]);
        else c.push(b[d])
    }
    return c
};
r.Cb = function (a) {
    yh(this);
    var b = [];
    if (a) a = xh(this, a), this.bb(a) && (b = Xa(b, this.M.get(a)));
    else for (var a = this.M.Cb(), c = 0; c < a.length; c++) b = Xa(b, a[c]);
    return b
};
r.set = function (a, b) {
    yh(this);
    zh(this);
    a = xh(this, a);
    if (this.bb(a)) {
        var c = this.M.get(a);
        u(c) ? this.z -= c.length : this.z--
    }
    this.M.set(a, b);
    this.z++;
    return this
};
r.get = function (a, b) {
    yh(this);
    a = xh(this, a);
    if (this.bb(a)) {
        var c = this.M.get(a);
        return u(c) ? c[0] : c
    }
    return b
};
r.toString = function () {
    if (this.Oa) return this.Oa;
    if (!this.M) return "";
    for (var a = [], b = 0, c = this.M.Ub(), d = 0; d < c.length; d++) {
        var f = c[d],
            g = Aa(f),
            f = this.M.get(f);
        if (u(f)) for (var k = 0; k < f.length; k++) 0 < b && a.push("&"), a.push(g), "" !== f[k] && a.push("=", Aa(f[k])), b++;
        else 0 < b && a.push("&"), a.push(g), "" !== f && a.push("=", Aa(f)), b++
    }
    return this.Oa = a.join("")
};
var zh = function (a) {
    delete a.ve;
    delete a.Oa;
    a.Rf && delete a.Rf.Gh
};
wh.prototype.Ca = function () {
    var a = new wh;
    this.ve && (a.ve = this.ve);
    this.Oa && (a.Oa = this.Oa);
    this.M && (a.M = this.M.Ca());
    return a
};
var xh = function (a, b) {
    var c = "" + b;
    a.th && (c = c.toLowerCase());
    return c
};
var Z = function (a, b, c) {
    return Bc(document, arguments)
}, Ah = [0, 69, 208, 255],
    Bh, Ch = function (a) {
        var b = new dh(j, sh.t());
        b.l(a);
        return b
    },

	// CARLIN
    // Tg(Dh("/sms/send/"), w(this.bh, this), "POST", a.toString())
	Dh = function (a, b, c) {
        var d = localStorage.account || "0";
        if (c) return "b/" + d + a;
        a = "https://www.google.com/voice/b/" + d + a;
        b && (a += "?b=" + d);
        return a
    },
	//

	Eh = function () {
        localStorage.loggedOut = "1";
        chrome.browserAction.setIcon({
            path: "bubble-19-lo.png"
        });
        chrome.browserAction.setBadgeBackgroundColor({
            color: [190, 190, 190, 230]
        });
        chrome.browserAction.setBadgeText({
            text: "?"
        })
    }, Fh = function () {
        chrome.tabs.getAllInWindow(j,

        function (a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (-1 != c.url.indexOf("https://www.google.com/voice")) {
                    chrome.tabs.update(c.id, {
                        url: Dh(""),
                        selected: i
                    });
                    return
                }
            }
            chrome.tabs.create({
                url: Dh("")
            })
        })
    }, Hh = function (a) {
        localStorage.loggedOut ? Eh() : Tg(Dh("/request/user/", i), pa(Gh, a), "GET")
    }, Gh = function (a, b) {
        if (bh(b.target).length) {
            localStorage.loggedOut = "";
            var c = ch(b.target);
            localStorage.data = JSON.stringify({
                number: c.number,
                type: c.type,
                phones: c.phones,
                contactPhones: c.contactPhones,
                r: c.r
            });
            localStorage.timestamp = new Date;
            a && a()
        } else Eh()
    }, Jh = function (a, b, c, d, f, g) {
        localStorage.phone = b;
        var k = new wh;
        k.set("outgoingNumber", a);
        k.set("forwardingNumber", b);
        k.set("subscriberNumber", c);
        k.set("_rnr_se", d);
        bb(f, function (a) {
            a && b == a.phoneNumber && k.set("phoneType", a.type)
        }, this);
        Tg(Dh("/call/connect/"), pa(Ih, k, g), "POST", k.toString())
    }, Ih = function (a, b, c) {
        b && b(a, c)
    }, Kh = function (a, b, c) {
        var d = new wh;
        d.set("outgoingNumber", a);
        d.set("forwardingNumber", b);
        d.set("cancelType", "C2C");
        d.set("_rnr_se", c);
        Tg(Dh("/call/cancel/"), j,
            "POST", d.toString())
    }, Lh = function () {
        return JSON.parse(localStorage.data)
    }, Mh = function () {
        this.hb = 0;
        this.ph = 8;
        this.Bc = 0;
        this.Qf = 4
    };
Mh.prototype.start = function () {
    if (!this.hb) {
        var a = this;
        this.hb = window.setInterval(function () {
            for (var b = "", c = 0; c < a.Qf; c++) b += c == a.Bc ? "." : " ";
            a.Bc >= a.Qf && (b += "");
            chrome.browserAction.setBadgeBackgroundColor({
                color: Ah
            });
            chrome.browserAction.setBadgeText({
                text: b
            });
            a.Bc++;
            a.Bc == a.ph && (a.Bc = 0)
        }, 100)
    }
};
Mh.prototype.stop = function () {
    this.hb && (window.clearInterval(this.hb), this.hb = 0)
};
var Nh = function () {
    this.zc = 0;
    this.Ra = -1;
    this.ue = new Mh
}, Oh = 0;
Nh.prototype.Bb = function () {
    this.Qa = document.getElementById("canvas");
    this.hh = document.getElementById("gc-logged-in");
    this.Db = this.Qa.getContext("2d");
    this.Hf = document.getElementById("gc-bell");
    chrome.browserAction.setIcon({
        path: "bubble-19.png"
    });
    this.ue.start();
    this.If();
    this.Kf();
    var a = this;
    chrome.tabs.onUpdated.addListener(function (b, c) {
        c.url && 0 == c.url.indexOf("https://www.google.com/voice") && Ph(a, function (b) {
            Qh(a, b + "");
            Rh(a)
        })
    });
    chrome.extension.onRequest.addListener(w(this.lh, this));
    chrome.browserAction.onClicked.addListener(function () {
        Fh()
    })
};
Nh.prototype.lh = function (a, b, c) {
    switch (a.action) {
        case "links":
            var d = localStorage.linksOff || "",
                f = localStorage.selectOff || "",
                g = localStorage.loggedOut || "";
            localStorage.isClient && (g = i);
            chrome.tabs.getSelected(j, function (a) {
                0 == a.url.indexOf("https://www.google.com/voice") && (f = d = "1");
                c({
                    linksOff: d,
                    selectOff: f,
                    loggedOut: g
                })
            });
            break;
        case "phones":
            localStorage.loggedOut ? c({
                loggedOut: "1"
            }) : localStorage.data ? this.$f(c) : Hh(w(this.$f, this, c));
            break;
        case "call":
            b = Lh();
            Jh(a.number, a.phone, b.number.raw, b.r, b.phones,
            w(this.zh, this, c));
            break;
        case "cancel":
            b = Lh();
            Kh(a.number, a.phone, b.r);
            break;
        case "closeWidget":
        case "resizeWidget":
            chrome.tabs.getSelected(j, function (b) {
                chrome.tabs.sendRequest(b.id, {
                    action: a.action
                })
            });
            break;
        default:
            c({})
    }
};
Nh.prototype.zh = function (a, b, c) {
    a({
        responseText: bh(c.target)
    })
};
Nh.prototype.$f = function (a) {
    var b = Lh();
    a({
        phones: b.phones,
        savedPhone: localStorage.phone,
        did: b.number,
        r: b.r
    })
};
var Rh = function (a) {
    if (!localStorage.isClient) {
        var b = Math.min(3E4 * Math.pow(2, Oh), 36E5),
            b = Math.round(b);
        a.hb && ic.clearTimeout(a.hb);
        a.hb = kc(w(a.If, a), b)
    }
};
Nh.prototype.If = function () {
    var a = this;
    Ph(this, function (b) {
        a.ue.stop();
        Qh(a, b + "");
        Rh(a)
    }, function () {
        a.ue.stop();
        a.Ra = -1;
        Eh();
        Rh(a)
    })
};
var Ph = function (a, b, c) {
    Tg(Dh("/request/unread/", i), w(a.Bh, a, b, c), "GET", j, j, 5E3)
};
Nh.prototype.Bh = function (a, b, c) {
    if (ah(c.target)) {
        var d;
        try {
            d = ch(c.target)
        } catch (f) {
            Oh++;
            b && b();
            return
        }
        d.unreadCounts ? ("inbox" in d.unreadCounts ? (Bh && Bh != d.r && Hh(), Bh = d.r, b = d.unreadCounts.inbox, localStorage.isClient = "") : (b = 0, localStorage.isClient = i, localStorage.data = ""), Oh = 0, localStorage.loggedOut = "", a && a(b)) : (Oh++, b && b())
    } else Oh++, b && b()
};
var Qh = function (a, b) {
    var c = b;
    localStorage.unreadCount = b;
    99 < parseInt(b, 10) && (c = "99+");
    0 <= a.Ra && a.Ra < parseInt(b, 10) && !localStorage.alertOff && (a.Hf.load(), a.Hf.play());
    a.Ra != c && (a.Ra = c, Sh(a, 1))
}, Sh = function (a, b) {
    a.zc += 1 / 36;
    Th(a);
    1 < b && chrome.browserAction.setBadgeText({
        text: "0" != a.Ra ? a.Ra : ""
    });
    a.zc <= b ? setTimeout(function () {
        Sh(a, b)
    }, 20) : (a.zc = 0, Th(a), chrome.browserAction.setBadgeText({
        text: "0" != a.Ra ? a.Ra : ""
    }), chrome.browserAction.setBadgeBackgroundColor({
        color: Ah
    }))
}, Th = function (a) {
    a.Db.save();
    a.Db.clearRect(0,
    0, a.Qa.width, a.Qa.height);
    a.Db.translate(Math.ceil(a.Qa.width / 2), Math.ceil(a.Qa.height / 2));
    a.Db.rotate(2 * Math.PI * ((1 - Math.sin(Math.PI / 2 + a.zc * Math.PI)) / 2));
    a.Db.drawImage(a.hh, -Math.ceil(a.Qa.width / 2), -Math.ceil(a.Qa.height / 2));
    a.Db.restore();
    chrome.browserAction.setIcon({
        imageData: a.Db.getImageData(0, 0, a.Qa.width, a.Qa.height)
    })
};
Nh.prototype.Kf = function () {
    Hh();
    window.setTimeout(w(this.Kf, this), 18E5)
};
var $ = function () {
    this.i = new L(this);
    this.cc = localStorage["default"] || "2";
    if ("0" == this.cc) Uh(), this.ac();
    else if (localStorage.loggedOut) Eh(), Uh(), this.ac();
    else if (localStorage.isClient) Vh(this);
    else {
        this.lg = J("gc-logo");
        this.vd = J("gc-quickcall");
        this.wd = J("gc-quicksms");
        this.Jc = J("gc-inbox");
        this.Hd = i;
        this.Yb = new rh(j, sh.t());
        this.Yb.l(J("gc-tab-call"));
        this.Fb = new rh(j, sh.t());
        this.Fb.l(J("gc-tab-sms"));
        this.Zb = new rh(j, sh.t());
        this.Zb.l(J("gc-tab-inbox"));
        this.i.d(this.lg, "click", this.ac);
        this.i.d(J("gc-goto-inbox"),
            "click", this.ac);
        this.i.d(J("gc-popout"), "click", this.mg);
        this.i.d(this.Yb, "action", w(this.Hb, this, "call", j, p));
        this.i.d(this.Fb, "action", w(this.Hb, this, "sms", j, p));
        this.i.d(this.Zb, "action", w(this.Hb, this, "inbox", j, p));
        this.W = new rf;
        this.W.l(J("gc-quickcall-phone"));
        this.qa = new Y("");
        this.qa.l(J("gc-quickcall-ac"));
        this.A = Ch(J("gc-quickcall-connect"));
        this.Ic = Ch(J("gc-quickcall-cancel"));
        this.ta = Bd("gc-quickcall-msg");
        this.ib = p;
        this.Bd = i;
        this.i.d(this.A, "action", this.ud);
        this.i.d(this.Ic, "action",
        this.ud);
        this.lb = Ch(J("gc-quicksms-send"));
        this.Nc = J("gc-quicksms-number");
        this.Ha = new Y("");
        this.Ha.l(this.Nc);
        this.Ta = J("gc-quicksms-text");
        this.Je = J("gc-quicksms-cnt");
        this.Kc = Bd("gc-quicksms-msg");
        this.Ed = i;
        this.i.d(this.lb, "action", this.Ke);
        this.i.d(this.Nc, "change", this.kg);
        this.i.d(this.Ta, "keypress", Wh);
        this.i.d(this.Ta, "keyup", pa(Xh, this.Je));
        this.Le = Bd("gc-status");
        var a;
        "0" != this.cc && (a = "1" == this.cc ? localStorage.tab || "call" : "2" == this.cc ? 0 < parseInt(localStorage.unreadCount || "0", 10) ? "inbox" : localStorage.tab || "call" : this.cc, this.Hb(a, j, i));
        a = new Date;
        localStorage.data ? this.Me() : Hh(w(this.Me, this));
        localStorage.lastPopup = a
    }
};
$.prototype.ac = function () {
    Fh();
    kc(window.close, 800)
};
$.prototype.mg = function () {
    var a = window.open(chrome.extension.getURL("popup.html"), "gc-popout-window", "width=348,height=654");
    Dd(this.i, a, "load", function () {
        a.window.document.body.className = "gc-popout"
    })
};
var Uh = function () {
    var a = J("gc-popup-c");
    K(J("gc-loading-site"), i);
    K(a, p)
}, Vh = function (a) {
    var b = J("gc-client"),
        c = J("gc-popup-c");
    a.i.d(J("gc-client-link"), "click", function () {
        chrome.tabs.create({
            url: "https://www.google.com/voice?promo=1"
        })
    });
    K(b, i);
    K(c, p)
};
$.prototype.Hb = function (a, b, c, d) {
    c = c ? 100 : 0;
    switch (a) {
        case "call":
            me(this.Yb, i);
            me(this.Fb, p);
            me(this.Zb, p);
            kc(w(function () {
                K(this.vd, i);
                b ? (this.qa.N(b), ne(this.A, i), this.A.a().focus()) : (this.qa.N(this.Ha.n()), jh(this.qa))
            }, this), c);
            K(this.wd, p);
            K(this.Jc, p);
            break;
        case "sms":
            me(this.Yb, p);
            me(this.Fb, i);
            me(this.Zb, p);
            K(this.vd, p);
            kc(w(function () {
                K(this.wd, i);
                localStorage.smsText && (this.Ta.value = localStorage.smsText);
                b ? (this.Ha.N(b), this.Ta.focus()) : localStorage.smsTo ? (this.Ha.N(localStorage.smsTo),
                this.Ta.focus()) : (this.Ha.N(this.qa.n()), jh(this.Ha))
            }, this), c);
            K(this.Jc, p);
            break;
        case "inbox":
            me(this.Yb, p), me(this.Fb, p), me(this.Zb, i), K(this.vd, p), K(this.wd, p), K(this.Jc, i), Yh(this)
    }
    localStorage.tab = a;
    d && d.stopPropagation()
};
$.prototype.Me = function () {
    var a = Lh();
    this.Zc = a.number;
    this.pf = 5 == a.type;
    this.Wc = a.phones;
    this.Qe = a.contactPhones;
    this.dc = a.r;
    a = J("gc-number");
    this.Zc && (a.textContent = this.Zc.formatted);
    Zh(this);
    $h(this);
    this.pf ? this.Fb.H(p) : ai(this)
};
var $h = function (a) {
    var b = J("gc-quickcall-ac"),
        c = [];
    bb(a.Qe, function (a, b) {
        "email" != a.phoneTypeName && c.push(new ng(b, a))
    }, a);
    a.Tc && a.Tc.g();
    a.Tc = new lg(c, b);
    a.Tc.Cd = 4;
    a.i.d(a.qa.a(), "keypress", function (a) {
        13 == a.keyCode && !this.Tc.fa() && this.ud(a)
    });
    jh(a.qa)
}, Zh = function (a) {
    for (var b = ff(a.W).pd(), c = 0; c < b; c++) a.W.Pb(0);
    var d = {}, f = 0;
    bb(a.Wc, function (a) {
        if (a) {
            var b = new kh(Ja(a.name));
            b.N(a.phoneNumber);
            this.W.Xa(b, f++);
            d[a.phoneNumber] = 1
        }
    }, a);
    localStorage.phone && d[localStorage.phone] ? a.W.N(localStorage.phone) : a.W.Rc(0)
};
$.prototype.ud = function (a) {
    if (a.target == this.A || a.target == this.qa.a() || "submit" == a.type) {
        var a = (a = this.qa) ? a.n() : "",
            b = this.W.n(),
            c = i;
        if (!this.ib) {
            if (!a || !b) this.ib = c = p, this.ta.show("Invalid number.", "gc-quickcall-err", 12E3);
            c && (bi(this, a, b), this.ib = i)
        }
    } else this.Ic.H(p), this.ta.reset(), this.A.H(i), this.ib = p, Kh(h, h, this.dc)
};
var bi = function (a, b, c) {
    a.A.X("Connecting...");
    a.A.setEnabled(p);
    Jh(b, c, a.Zc.raw, a.dc, a.Wc, w(a.fh, a))
};
$.prototype.fh = function (a, b) {
    this.A.setEnabled(i);
    this.A.X("Connect");
    var c = {};
    try {
        c = ch(b.target)
    } catch (d) {
        c = {
            ok: p
        }
    }
    if (c.ok) this.Bd = i, this.A.H(p), this.Ic.H(i), this.ta.reset(), this.ta.show("Calling you...", "gc-quickcall-msg", 12E3), (new lc(w(this.dd, this), 35E3, this)).start();
    else if (this.Bd) {
        this.Bd = p;
        var c = this.qa ? this.qa.n() : "",
            f = this.W.n();
        bi(this, c, f)
    } else f = "Please try again.", this.ib = p, c.data && "20" == c.data.code && (f = "Invalid number."), this.ta.show(f, "gc-quickcall-err")
};
$.prototype.dd = function () {
    this.Ic.H(p);
    this.ta.reset();
    this.A.H(i);
    this.A.setActive(p);
    this.A.X("Connect");
    this.ib = p
};
var ai = function (a) {
    var b = a.Nc,
        c = [];
    bb(a.Qe, function (a, b) {
        c.push(new ng(b, a))
    }, a);
    a.te && a.te.g();
    a.te = new lg(c, b, i);
    a.te.Cd = 4
};
$.prototype.kg = function () {
    localStorage.smsTo = this.Nc.value
};

// CARLIN
$.prototype.Ke = function () {
    if (!wa(this.Ta.value) && !wa(this.Ha.n())) {
        this.lb.setEnabled(p);
        this.lb.X("Sending...");
        this.Kc.reset();
        var a = new wh;
        a.add("id", "");
        a.add("phoneNumber", this.Ha.n());
        a.add("text", this.Ta.value);
        a.add("sendErrorSms", 0);
        a.set("_rnr_se", this.dc);
        Tg(Dh("/sms/send/"), w(this.bh, this), "POST", a.toString())
    }
};
//

$.prototype.bh = function (a) {
    var b = {};
    try {
        b = ch(a.target)
    } catch (c) {
        b = {
            ok: p
        }
    }
    b.ok ? (this.Ed = i, this.Ha.clear(), localStorage.smsTo = "", this.Ta.value = "", localStorage.smsText = "", this.Je.innerHTML = 160, this.lb.X("Send"), this.lb.setEnabled(i), this.Kc.reset(), this.Kc.show("Text sent.", "gc-quickcall-msg", 12E3)) : this.Ed ? (this.Ed = p, this.Ke()) : (a = "Please try again.", b.data && ("58" == b.data.code ? a = "Too many at once." : "66" == b.data.code ? a = "Out of credit." : "67" == b.data.code && (a = "Destination not supported.")), this.lb.X("Send"),
    this.lb.setEnabled(i), this.Kc.show(a, "gc-quickcall-err", 12E3))
};
var Wh = function (a) {
    return 440 <= a.target.value.length && 8 != a.keyCode && 46 != a.keyCode ? (a.stopPropagation(), a.preventDefault(), p) : i
}, Xh = function (a, b) {
    var c = b.target,
        d = Math.ceil((c.value.length + 1) / 160),
        f = 160 - c.value.length % 160;
    a.innerHTML = 3 <= d ? "Really?" : 2 == d ? Ma(d, ".", f) : f;
    localStorage.smsText = c.value
}, Yh = function (a) {
    kc(w(function () {
        Tg(Dh("/request/messages/"), w(this.Ch, this), "GET")
    }, a), 1)
};
$.prototype.Ch = function (a) {
    bh(a.target).length ? (localStorage.loggedOut = "", this.Be = ch(a.target), this.vf = this.Be.contacts, ci(this, this.Be), this.Le.reset()) : (Eh(), this.ac())
};
var ci = function (a, b) {
    a.Ce = j;
    a.Cc = Gc(a.Jc);
    a.Cc.innerHTML = "";
    b.messageList.length ? Ra(b.messageList, function (a) {
        this.Cc.appendChild(di(this, a))
    }, a) : a.Cc.appendChild(Z("div", {
        "class": "gc-no-items"
    }, "No items in your inbox."));
    a.Cc.style.marginRight = 510 < rd(a.Cc).height ? "4px" : "0px"
}, di = function (a, b) {
    var c, d = {}, f;
    a.vf.contactPhoneMap && b.phoneNumber && (c = (d = a.vf.contactPhoneMap[b.phoneNumber]) ? d.name || d.displayNumber : "Unknown");
    c = c || b.displayNumber;
    c = Ja(c);
    f = d && d.photoUrl ? "https://www.google.com/s2/" + Dh(d.photoUrl,
    p, i) + "?sz=32" : "images/blue_ghost.jpg";
    var d = Z("a", {
        "class": "gc-message-action",
        href: "javascript://"
    }, "Call"),
        g = a.pf ? "" : Z("a", {
            "class": "gc-message-action",
            href: "javascript://"
        }, "Text"),
        k = Z("a", {
            "class": "gc-message-action",
            href: "javascript://"
        }, "Archive"),
        l = Z("a", {
            "class": "gc-message-action",
            href: "javascript://"
        }, "Delete"),
        o = Z("div", {
            "class": "gc-message-status"
        }, Z("span")),
        m = Z("div", {
            style: "display: none; margin: 0 0 0 -2px;"
        }),
        n = {}, q = "",
        x = "";
    if (b.children) if (x = (n = b.children[b.children.length - 1]) ? n.message :
        "", 2 == b.type || 4 == b.type) q = Math.floor(n.duration / 60), n = n.duration % 60, q = Z("div", {
        "class": "gc-message-play"
    }, Z("div", {
        "class": ""
    }, (10 > q ? "0" + q : q) + ":" + (10 > n ? "0" + n : n))), n = Ma(Aa(Dh("/media/send_voicemail/")), b.id, "%3Fread%3D", 1), a.i.d(q, "click", w(a.Ug, a, i, m, q, b.id, n, o)), a.i.d(m, "click", function (a) {
        a.stopPropagation()
    });
    else if (11 == b.type || 10 == b.type) if (4 >= b.children.length) x = Ta(b.children, function (a) {
        return ei(a.type, c, a.message)
    }, a);
    else {
        for (var n = b.children[0], x = ei(n.type, c, n.message), y = [], P = 1; P < b.children.length - 2; P++) n = b.children[P], n = ei(n.type, c, n.message), y.push(n);
        var Sb = Z("div", {
            style: "display: none;"
        }, y),
            aa = Z("div", {
                "class": "gc-message-sms-more"
            }, b.children.length - 3 + " more messages");
        $b(aa, "click", function () {
            K(aa, p);
            K(Sb, i)
        }, a);
        n = b.children[b.children.length - 2];
        y = ei(n.type, c, n.message);
        n = b.children[b.children.length - 1];
        n = ei(n.type, c, n.message);
        x = [x, aa, Sb, y, n]
    }
    f = Z("div", {
        "class": b.isRead ? "gc-message-read" : "gc-message-unread"
    }, Z("div", {
        "class": "gc-message-top"
    }, Z("div", {
        "class": "gc-message-portrait"
    },
    Z("img", {
        src: f
    }), Z("div", {
        "class": "gc-message-icon-" + b.type
    })), Z("div", {
        "class": "gc-message-info"
    }, Z("div", {}, Z("div", {
        "class": "goog-inline-block gc-message-title"
    }, c), Z("div", {
        "class": "goog-inline-block"
    })), Z("div", {
        style: "color: #666"
    }, b.relativeStartTime)), Z("div", {
        "class": "clear"
    }, ""), Z("div", {
        "class": "gc-message-text"
    }, x), o), Z("div", {
        "class": "gc-message-actions"
    }, q, m, Z("div", {}, d, g, k, l)));
    a.i.d(d, "click", w(a.Hb, a, "call", b.displayNumber, p));
    g && a.i.d(g, "click", w(a.Hb, a, "sms", b.displayNumber, p));
    a.i.d(k, "click", w(a.kd, a, f, "archive", b.id, j));
    a.i.d(l, "click", w(a.kd, a, f, "delete", b.id, j));
    b.isRead || a.i.d(f, "click", w(a.kd, a, f, "read", b.id, o));
    return f
}, ei = function (a, b, c) {
    return Z("div", {
        "class": "gc-message-sms-row"
    }, Z("span", {
        "class": "gc-message-sms-from"
    }, (10 == a ? b : "Me") + ": "), Z("span", {
        "class": "gc-message-sms-text"
    }, c))
};
$.prototype.kd = function (a, b, c, d, f) {
    var g = new wh;
    g.add("messages", [c]);
    g.set("_rnr_se", this.dc);
    switch (b) {
        case "read":
            g.add("read", "1");
            Tg(Dh("/inbox/mark/"), w(this.De, this, a, b, c, d), "POST", g.toString());
            (new Zf(d, 400)).play();
            break;
        case "archive":
            g.add("archive", "1");
            Tg(Dh("/inbox/archiveMessages/"), w(this.De, this, a, b, c, d), "POST", g.toString());
            a = new $f(a, 600);
            a.play();
            break;
        case "delete":
            g.add("trash", "1"), Tg(Dh("/inbox/deleteMessages/"), w(this.De, this, a, b, c, d), "POST", g.toString()), a = new $f(a, 600),
            a.play()
    }
    f && f.stopPropagation()
};
$.prototype.De = function (a, b, c, d, f) {
    var g = {};
    try {
        g = ch(f.target)
    } catch (k) {
        g = {
            ok: p
        }
    }
    if (g.ok) switch (this.Hd = i, b) {
        case "archive":
        case "delete":
            this.Le.show("Loading..."), Yh(this)
    } else this.Hd && (this.Hd = p, this.kd(a, b, c, d))
};
$.prototype.Ug = function (a, b, c, d, f, g, k) {
    K(c, !a);
    this.Ce && K(this.Ce, i);
    if (a) {
        K(b, i);
        J("gc-audioPlayer") && swfobject.removeSWF("gc-audioPlayer");
        var a = Z("div", {
            id: "gc-flash-messageplayer"
        }),
            l = "https://www.google.com" + this.Be.swfPlayer,
            d = {
                messagePath: f,
                baseurl: Aa("https://www.google.com/voice"),
                conv: d
            }, f = {
                wmode: "transparent",
                data: l
            }, o = {
                id: "gc-audioPlayer",
                movie: l,
                name: "gc-audioPlayer"
            };
        b.appendChild(a);
        swfobject.embedSWF(l, "gc-flash-messageplayer", "100%", "20", "8.0.0", "expressInstall.swf", d, f, o);
        (new Zf(g,
        400)).play()
    } else "" == b.style.display && K(b, p);
    this.Ce = c;
    k.stopPropagation()
};
var gi = function (a) {
    this.Ld = i;
    var b = fi(this);
    this.ab = new ph(b);
    this.c = J(a);
    chrome.extension.sendRequest({
        action: "phones"
    }, w(this.tg, this));
    nh(this.ab);
    qh(this.ab);
    this.ab.Ye(new Ue(this.c, 0));
    this.Xe();
    this.i = new L(this);
    this.i.d(this.W, "show", w(this.kc, this, p));
    this.i.d(this.W, "hide", w(this.kc, this, i));
    this.i.d(this.A, "action", this.Te);
    this.i.d(this.Re, "click", function () {
        this.ab.H(p)
    });
    this.i.d(this.ab, "hide", function () {
        chrome.extension.sendRequest({
            action: "closeWidget"
        })
    })
};
gi.prototype.Xe = function () {
    var a = window.location.hash.substring(1);
    this.xf = a;
    Ic(this.qf, a);
    this.ab.H(i);
    chrome.extension.sendRequest({
        action: "resizeWidget"
    })
};
var fi = function (a) {
    a.qf = Z("span", {
        "class": "gc-cs-number"
    }, "(408) 555-5555");
    var b = Z("div", {
        "class": "gc-cs-phone"
    }),
        c = Z("div", {
            "class": "gc-cs-connect"
        }, "Connect");
    a.Re = Z("img", {
        src: chrome.extension.getURL("images/lilac-close.png")
    });
    var d = Z("div", {
        "class": "gc-cs-calli"
    }, Z("span", {
        "class": "gc-cs-call"
    }, "Call "), a.qf, a.Re),
        f = Z("div", {
            "class": "gc-call-popup"
        }, d, Z("div", {
            "class": "gc-cs-content"
        }, Z("div", {}, Z("div", {
            "class": "gc-cs-cwith"
        }, "Phone to call with"), b), Z("div", {}, c, Z("div", {
            id: "gc-quickcall-msg",
            style: "display: none",
            "class": "goog-inline-block gc-quickcall-msg"
        }))));
    document.body.appendChild(f);
    d.style.backgroundImage = "url(" + chrome.extension.getURL("bubble-19.png") + ")";
    a.W = new rf;
    a.W.l(b);
    xc(document, "div", "goog-flat-menu-button-dropdown", b)[0].style.backgroundImage = "url(" + chrome.extension.getURL("toolbar_icons.gif") + ")";
    b = new dh(j, sh.t());
    b.l(c);
    a.A = b;
    a.ta = Bd("gc-quickcall-msg");
    return f
};
r = gi.prototype;
r.tg = function (a) {
    if (a.phones) {
        this.Wc = a.phones;
        this.Zc = a.did;
        this.dc = a.r;
        var b = {}, c = 0;
        bb(this.Wc, function (a) {
            if (a) {
                var f = new kh(Ja(a.name));
                f.N(a.phoneNumber);
                b[a.phoneNumber] = 1;
                this.W.Xa(f, c++)
            }
        }, this);
        a.savedPhone && b[a.savedPhone] ? this.W.N(a.savedPhone) : this.W.Rc(0);
        a = ff(this.W).a();
        G(a, "gc-cs")
    }
};
r.Te = function () {
    var a = this.W.n();
    this.je ? (this.dd(), chrome.extension.sendRequest({
        action: "cancel",
        number: this.xf,
        phone: a
    }, function () {})) : (this.A.setEnabled(p), this.A.X("Connecting..."), chrome.extension.sendRequest({
        action: "call",
        number: this.xf,
        phone: a
    }, w(this.Wg, this)))
};
r.Wg = function (a) {
    this.A.setEnabled(i);
    this.A.X("Connect");
    var b = p;
    if (a.responseText) {
        var c = {};
        try {
            c = JSON.parse(a.responseText)
        } catch (d) {
            c = {
                ok: p
            }
        }
        c.ok && (this.Ld = b = i, this.A.X("Hang up"), this.je = i, this.ta.reset(), this.ta.show("Calling you...", "gc-quickcall-msg", 12E3), (new lc(w(this.dd, this), 35E3, this)).start())
    }
    b || (this.Ld ? (this.je = this.Ld = p, this.Te()) : (b = "Please try again.", this.ib = p, a.data && "20" == a.data.code && (b = "Invalid number."), this.ta.show(b, "gc-quickcall-err")))
};
r.dd = function () {
    this.ta.reset();
    this.A.setEnabled(i);
    this.A.X("Connect");
    this.A.setActive(p);
    this.je = p
};
r.kc = function (a) {
    a ? this.ab.kc(j) : this.ab.kc(document.body.firstChild)
};
ca("Voice", Nh);
Nh.prototype.init = Nh.prototype.Bb;
ca("VoicePopup", $);
ca("CallWidget", gi);
gi.prototype.reloadWidget = gi.prototype.Xe;

