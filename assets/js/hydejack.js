/*  __  __                __                                     __
 * /\ \/\ \              /\ \             __                    /\ \
 * \ \ \_\ \   __  __    \_\ \      __   /\_\      __       ___ \ \ \/'\
 *  \ \  _  \ /\ \/\ \   /'_` \   /'__`\ \/\ \   /'__`\    /'___\\ \ , <
 *   \ \ \ \ \\ \ \_\ \ /\ \L\ \ /\  __/  \ \ \ /\ \L\.\_ /\ \__/ \ \ \\`\
 *    \ \_\ \_\\/`____ \\ \___,_\\ \____\ _\ \ \\ \__/.\_\\ \____\ \ \_\ \_\
 *     \/_/\/_/ `/___/> \\/__,_ / \/____//\ \_\ \\/__/\/_/ \/____/  \/_/\/_/
 *                 /\___/                \ \____/
 *                 \/__/                  \/___/
 *
 * Powered by Hydejack v6.4.0 (https://qwtel.com/hydejack/) 
 */
!function e(t, r, n) {
  function i(s, a) {
    if (!r[s]) {
      if (!t[s]) {
        var u = "function" == typeof require && require;
        if (!a && u)return u(s, !0);
        if (o)return o(s, !0);
        var c = new Error("Cannot find module '" + s + "'");
        throw c.code = "MODULE_NOT_FOUND", c
      }
      var l = r[s] = { exports: {} };
      t[s][0].call(l.exports, function (e) {
        var r = t[s][1][e];
        return i(r || e)
      }, l, l.exports, e, t, r, n)
    }
    return r[s].exports
  }

  for (var o = "function" == typeof require && require, s = 0; s < n.length; s++)i(n[s]);
  return i
}({
  1: [function (e, t, r) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    !function (e, t, r) {
      function i(e, t) {
        return (void 0 === e ? "undefined" : n(e)) === t
      }

      function o(e) {
        return e.replace(/([a-z])-([a-z])/g, function (e, t, r) {
          return t + r.toUpperCase()
        }).replace(/^-/, "")
      }

      function s() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : O ? t.createElementNS.call(
          t,
          "http://www.w3.org/2000/svg",
          arguments[0]) : t.createElement.apply(t, arguments)
      }

      function a() {
        var e = t.body;
        return e || (e = s(O ? "svg" : "body"), e.fake = !0), e
      }

      function u(e, r, n, i) {
        var o, u, c, l, h = "modernizr", p = s("div"), f = a();
        if (parseInt(n,
            10))for (; n--;)(c = s("div")).id = i ? i[n] : h + (n + 1), p.appendChild(c);
        return o = s("style"), o.type = "text/css", o.id = "s" + h, (f.fake ? f : p).appendChild(o), f.appendChild(
          p), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), p.id = h, f.fake && (f.style.background = "", f.style.overflow = "hidden", l = S.style.overflow, S.style.overflow = "hidden", S.appendChild(
          f)), u = r(p,
          e), f.fake ? (f.parentNode.removeChild(f), S.style.overflow = l, S.offsetHeight) : p.parentNode.removeChild(
          p), !!u
      }

      function c(e, t) {
        return !!~("" + e).indexOf(t)
      }

      function l(e, t) {
        return function () {
          return e.apply(t, arguments)
        }
      }

      function h(e, t, r) {
        var n;
        for (var o in e)if (e[o] in t)return !1 === r ? e[o] : (n = t[e[o]], i(n, "function") ? l(n,
          r || t) : n);
        return !1
      }

      function p(e) {
        return e.replace(/([A-Z])/g, function (e, t) {
          return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
      }

      function f(t, r, n) {
        var i;
        if ("getComputedStyle" in e) {
          i = getComputedStyle.call(e, t, r);
          var o = e.console;
          null !== i ? n && (i = i.getPropertyValue(n)) : o && o[o.error ? "error" : "log"].call(o,
              "getComputedStyle returning null, its possible modernizr test results are inaccurate")
        } else i = !r && t.currentStyle && t.currentStyle[n];
        return i
      }

      function d(t, n) {
        var i = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
          for (; i--;)if (e.CSS.supports(p(t[i]), n))return !0;
          return !1
        }
        if ("CSSSupportsRule" in e) {
          for (var o = []; i--;)o.push("(" + p(t[i]) + ":" + n + ")");
          return o = o.join(" or "), u("@supports (" + o + ") { #modernizr { position: absolute; } }",
            function (e) {
              return "absolute" == f(e, null, "position")
            })
        }
        return r
      }

      function b(e, t, n, a) {
        function u() {
          h && (delete P.style, delete P.modElem)
        }

        if (a = !i(a, "undefined") && a, !i(n, "undefined")) {
          var l = d(e, n);
          if (!i(l, "undefined"))return l
        }
        for (var h, p, f, b, m, v = ["modernizr", "tspan", "samp"]; !P.style && v.length;)h = !0, P.modElem = s(
          v.shift()), P.style = P.modElem.style;
        for (f = e.length, p = 0; f > p; p++)if (b = e[p], m = P.style[b], c(b,
            "-") && (b = o(b)), P.style[b] !== r) {
          if (a || i(n, "undefined"))return u(), "pfx" != t || b;
          try {
            P.style[b] = n
          }
          catch (e) {
          }
          if (P.style[b] != m)return u(), "pfx" != t || b
        }
        return u(), !1
      }

      function m(e, t, r, n, o) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
          a = (e + " " + T.join(s + " ") + s).split(" ");
        return i(t, "string") || i(t, "undefined") ? b(a,
          t,
          n,
          o) : (a = (e + " " + M.join(s + " ") + s).split(" "), h(a, t, r))
      }

      function v(e, t, n) {
        return m(e, r, r, t, n)
      }

      var y = [], g = {
        _version: "3.4.0",
        _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
        _q: [],
        on: function (e, t) {
          var r = this;
          setTimeout(function () {
            t(r[e])
          }, 0)
        },
        addTest: function (e, t, r) {
          y.push({ name: e, fn: t, options: r })
        },
        addAsyncTest: function (e) {
          y.push({ name: null, fn: e })
        }
      }, w = function () {
      };
      w.prototype = g, (w = new w).addTest("eventlistener", "addEventListener" in e), w.addTest(
        "history",
        function () {
          var t = navigator.userAgent;
          return (-1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf(
              "Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol) && (e.history && "pushState" in e.history)
        }), w.addTest("queryselector", "querySelector" in t && "querySelectorAll" in t);
      var x = [], _ = g._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
      g._prefixes = _;
      var S = t.documentElement;
      w.addTest("classlist", "classList" in S), w.addTest("documentfragment", function () {
        return "createDocumentFragment" in t && "appendChild" in S
      });
      var O = "svg" === S.nodeName.toLowerCase();
      w.addTest("opacity", function () {
        var e = s("a").style;
        return e.cssText = _.join("opacity:.55;"), /^0.55$/.test(e.opacity)
      }), w.addTest("csspointerevents", function () {
        var e = s("a").style;
        return e.cssText = "pointer-events:auto", "auto" === e.pointerEvents
      }), w.addTest("cssremunit", function () {
        var e = s("a").style;
        try {
          e.fontSize = "3rem"
        }
        catch (e) {
        }
        return /rem/.test(e.fontSize)
      });
      var k = g.testStyles = u;
      w.addTest("touchevents", function () {
        var r;
        if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) r = !0; else {
          var n = ["@media (", _.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join(
            "");
          k(n, function (e) {
            r = 9 === e.offsetTop
          })
        }
        return r
      });
      var j = "Moz O ms Webkit", T = g._config.usePrefixes ? j.split(" ") : [];
      g._cssomPrefixes = T;
      var E = function (t) {
        var n, i = _.length, o = e.CSSRule;
        if (void 0 === o)return r;
        if (!t)return !1;
        if (t = t.replace(/^@/, ""), (n = t.replace(/-/g, "_")
            .toUpperCase() + "_RULE") in o)return "@" + t;
        for (var s = 0; i > s; s++) {
          var a = _[s];
          if (a.toUpperCase() + "_" + n in o)return "@-" + a.toLowerCase() + "-" + t
        }
        return !1
      };
      g.atRule = E;
      var M = g._config.usePrefixes ? j.toLowerCase().split(" ") : [];
      g._domPrefixes = M;
      var A = { elem: s("modernizr") };
      w._q.push(function () {
        delete A.elem
      });
      var P = { style: A.elem.style };
      w._q.unshift(function () {
        delete P.style
      }), g.testAllProps = m;
      var C = g.prefixed = function (e, t, r) {
        return 0 === e.indexOf("@") ? E(e) : (-1 != e.indexOf("-") && (e = o(e)), t ? m(e,
          t,
          r) : m(e, "pfx"))
      };
      w.addTest("requestanimationframe",
        !!C("requestAnimationFrame", e),
        { aliases: ["raf"] }), w.addTest("matchmedia",
        !!C("matchMedia", e)), g.testAllProps = v, w.addTest("cssanimations",
        v("animationName", "a", !0)), w.addTest("csstransforms", function () {
        return -1 === navigator.userAgent.indexOf("Android 2.") && v("transform", "scale(1)", !0)
      }), function () {
        var e, t, r, n, o, s;
        for (var a in y)if (y.hasOwnProperty(a)) {
          if (e = [], (t = y[a]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))for (r = 0; r < t.options.aliases.length; r++)e.push(
            t.options.aliases[r].toLowerCase());
          for (n = i(t.fn,
            "function") ? t.fn() : t.fn, o = 0; o < e.length; o++)1 === (s = e[o].split(".")).length ? w[s[0]] = n : (!w[s[0]] || w[s[0]] instanceof Boolean || (w[s[0]] = new Boolean(
            w[s[0]])), w[s[0]][s[1]] = n), x.push((n ? "" : "no-") + s.join("-"))
        }
      }(), delete g.addTest, delete g.addAsyncTest;
      for (var N = 0; N < w._q.length; N++)w._q[N]();
      e.Modernizr = w
    }(window, document)
  }, {}],
  2: [function (e, t, r) {
    "use strict";
    console.log(
      " __  __                __                                     __         \r\n/\\ \\/\\ \\              /\\ \\             __                    /\\ \\        \r\n\\ \\ \\_\\ \\   __  __    \\_\\ \\      __   /\\_\\      __       ___ \\ \\ \\/'\\    \r\n \\ \\  _  \\ /\\ \\/\\ \\   /'_` \\   /'__`\\ \\/\\ \\   /'__`\\    /'___\\\\ \\ , <    \r\n  \\ \\ \\ \\ \\\\ \\ \\_\\ \\ /\\ \\L\\ \\ /\\  __/  \\ \\ \\ /\\ \\L\\.\\_ /\\ \\__/ \\ \\ \\\\`\\  \r\n   \\ \\_\\ \\_\\\\/`____ \\\\ \\___,_\\\\ \\____\\ _\\ \\ \\\\ \\__/.\\_\\\\ \\____\\ \\ \\_\\ \\_\\\r\n    \\/_/\\/_/ `/___/> \\\\/__,_ / \\/____//\\ \\_\\ \\\\/__/\\/_/ \\/____/  \\/_/\\/_/\r\n                /\\___/                \\ \\____/                           \r\n                \\/__/                  \\/___/                            "), console.log(
      "Powered by Hydejack v6.4.0 (https://qwtel.com/hydejack/)")
  }, {}],
  3: [function (e, t, r) {
    "use strict";
    function n(e) {
      e.style.display = "", e.style.visibility = ""
    }

    Object.defineProperty(r,
      "__esModule",
      { value: !0 }), r.unhide = void 0, r.hasFeatures = function (e) {
      for (var t = !0, r = 0; r < e.length; r += 1) {
        var n = e[r], i = window.Modernizr[n];
        t = t && i
      }
      return t
    }, r.show = function (e) {
      e.style.display = "block", e.style.visibility = "visible"
    }, r.hide = function (e) {
      e.style.display = "none", e.style.visibility = "hidden"
    }, r.unshow = n, r.matches = function (e, t) {
      return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(
        e,
        t)
    }, r.animate = function (e, t, r) {
      return i.Observable.create(function (n) {
        return e.animate(t, r).addEventListener("finish", function (e) {
          n.next(e), n.complete()
        }), function () {
        }
      })
    };
    var i = e("rxjs/Observable");
    r.unhide = n
  }, { "rxjs/Observable": 116 }],
  4: [function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function i() {
      var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).color,
        t = void 0 === e ? "#00f" : e;
      this.rules[0].style.color = t, this.rules[0].style.borderColor = (0, h.default)(t)
      .fade(y)
      .string(), this.rules[1].style.borderColor = t, this.rules[2].style.outlineColor = t, this.rules[3].style.backgroundColor = t
    }

    Object.defineProperty(r, "__esModule", { value: !0 });
    var o = function () {
        function e(e, t) {
          var r = [], n = !0, i = !1, o = void 0;
          try {
            for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
          }
          catch (e) {
            i = !0, o = e
          } finally {
            try {
              !n && a.return && a.return()
            } finally {
              if (i)throw o
            }
          }
          return r
        }

        return function (t, r) {
          if (Array.isArray(t))return t;
          if (Symbol.iterator in Object(t))return e(t, r);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
      }(), s = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
              e,
              n.key,
              n)
          }
        }

        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }(), a = e("rxjs/Observable"), u = e("rxjs/observable/empty"),
      c = e("rxjs/observable/fromEvent"), l = e("rxjs/observable/timer"), h = function (e) {
        return e && e.__esModule ? e : { default: e }
      }(e("color")), p = e("rxjs/operator/do"), f = e("rxjs/operator/finally"),
      d = e("rxjs/operator/map"), b = e("rxjs/operator/zip"), m = e("./common"),
      v = Array.prototype.find, y = .8, g = function () {
        function e(t) {
          var r, i = t.duration;
          n(this, e);
          var o = document.getElementById("_main"), s = document.getElementById("_pageStyle"),
            a = (r = document.styleSheets, v).call(r, function (e) {
              return e.ownerNode === s
            });
          this.sidebar = document.getElementById("_sidebar"), this.duration = i, this.rules = a.cssRules || a.rules, this.prevImage = o.getAttribute(
            "data-image"), this.prevColor = o.getAttribute("data-color")
        }

        return s(e, [{
          key: "fetchImage", value: function (e) {
            var t, r = this, n = e.color, o = e.image;
            if (o === this.prevImage && n === this.prevColor)return u.empty.call(a.Observable);
            var s = void 0;
            if ("" === o || o === this.prevImage) s = l.timer.call(a.Observable,
              this.duration); else {
              var h, m = new Image;
              s = (h = (h = c.fromEvent.call(a.Observable, m, "load"), b.zipProto).call(h,
                l.timer.call(a.Observable, this.duration),
                function (e) {
                  return e
                }), f._finally).call(h, function () {
                m.src = ""
              }), m.src = o
            }
            return (t = (t = s, p._do).call(t, function () {
              i.call(r, e), r.prevImage = o, r.prevColor = n
            }), d.map).call(t, function () {
              var e = document.createElement("div");
              return e.classList.add("sidebar-bg"), e.style.backgroundColor = n, "" !== o && (e.style.backgroundImage = "url(" + o + ")"), e
            })
          }
        }, {
          key: "crossFade", value: function (e) {
            var t, r = o(e, 2), n = r[0], i = r[1];
            return n.parentNode.insertBefore(i, n.nextElementSibling), (t = (0, m.animate)(i,
              [{ opacity: 0 }, { opacity: 1 }],
              { duration: this.duration }), f._finally).call(t, function () {
              return n.parentNode.removeChild(n)
            })
          }
        }]), e
      }();
    r.default = g
  }, {
    "./common": 3,
    color: 16,
    "rxjs/Observable": 116,
    "rxjs/observable/empty": 130,
    "rxjs/observable/fromEvent": 131,
    "rxjs/observable/timer": 132,
    "rxjs/operator/do": 136,
    "rxjs/operator/finally": 139,
    "rxjs/operator/map": 140,
    "rxjs/operator/zip": 149
  }],
  5: [function (e, t, r) {
    "use strict";
    function n() {
      window.isDesktop !== window.matchMedia(u).matches && (window.isDesktop = !window.isDesktop, window.drawer.persistent = window.isDesktop, window.drawer.jumpTo(
        window.isDesktop))
    }

    function i(e) {
      window.isDesktop || (e.preventDefault(), window.drawer.toggle())
    }

    var o = function (e) {
        return e && e.__esModule ? e : { default: e }
      }(e("y-drawer/src/vanilla")), s = e("./common"),
      a = ["eventlistener", "queryselector", "matchmedia", "requestanimationframe", "classlist", "opacity", "csstransforms", "csspointerevents", "cssremunit"],
      u = "(min-width: 54em)";
    if (!window.disableDrawer && (0, s.hasFeatures)(a)) {
      window.isDesktop = window.matchMedia(u).matches;
      var c = document.getElementById("_yDrawer");
      !function (e) {
        window.drawer = e, window.addEventListener("resize", n), document.getElementById("_menu")
        .addEventListener("click", i)
      }(new o.default(c,
        {
          opened: window.isDesktop,
          persistent: window.isDesktop,
          transitionDuration: 150
        })), c.classList.add("loaded")
    }
  }, { "./common": 3, "y-drawer/src/vanilla": 177 }],
  6: [function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(r, "__esModule", { value: !0 });
    var i = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
            e,
            n.key,
            n)
        }
      }

      return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
      }
    }(), o = e("rxjs/Observable"), s = e("rxjs/observable/empty"), a = function () {
      function e(t) {
        var r = t.animationMain, i = t.duration;
        n(this, e), this.animationMain = r, this.duration = i
      }

      return i(e, null, [{
        key: "create", value: function (t) {
          for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)n[i - 1] = arguments[i];
          return null != e.types[t] ? new (Function.prototype.bind.apply(e.types[t],
            [null].concat(n))) : new (Function.prototype.bind.apply(e, [null].concat(n)))
        }
      }]), i(e, [{
        key: "start", value: function () {
          return this.animationMain.style.opacity = 0, this.animationMain.style.willChange = "", s.empty.call(
            o.Observable)
        }
      }, {
        key: "ready", value: function () {
          return s.empty.call(o.Observable)
        }
      }]), e
    }();
    r.default = a, a.types = {}
  }, { "rxjs/Observable": 116, "rxjs/observable/empty": 130 }],
  7: [function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t)throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype,
        {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    var s = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
              e,
              n.key,
              n)
          }
        }

        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }(), a = e("rxjs/Observable"), u = e("rxjs/observable/timer"), c = e("rxjs/operator/do"),
      l = e("rxjs/operator/finally"), h = e("../common"), p = function (e) {
        return e && e.__esModule ? e : { default: e }
      }(e("./flip")), f = function (e) {
        function t() {
          return n(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }

        return o(t, e), s(t, [{
          key: "start", value: function (e) {
            var t, r = this, n = document.createElement("h1");
            n.classList.add("page-title"), n.textContent = e.textContent, n.style.transformOrigin = "left top", this.animationMain.querySelector(
              ".page").innerHTML = "", this.animationMain.querySelector(".page")
            .appendChild(n), this.animationMain.style.position = "fixed", this.animationMain.style.opacity = 1;
            var i = e.getBoundingClientRect(), o = parseInt(getComputedStyle(e).fontSize, 10),
              s = n.getBoundingClientRect(), a = parseInt(getComputedStyle(n).fontSize, 10),
              u = i.left - s.left, l = i.top - s.top, p = o / a;
            return e.style.opacity = 0, (t = (0, h.animate)(n,
              [{ transform: "translate3d(" + u + "px, " + l + "px, 0) scale(" + p + ")" }, { transform: "translate3d(0, 0, 0) scale(1)" }],
              { duration: this.duration, easing: "cubic-bezier(0,0,0.32,1)" }), c._do).call(t,
              function () {
                r.animationMain.style.position = "absolute"
              })
          }
        }, {
          key: "ready", value: function (e) {
            var t, r = this;
            this.animationMain.style.willChange = "opacity";
            var n = e.querySelector(".page-title, .post-title");
            return null != n && (n.style.opacity = 0, n.style.willChange = "opacity"), (t = (t = u.timer.call(
              a.Observable,
              this.duration + 100), c._do).call(t, function () {
              null != n && (n.style.opacity = 1, n.style.willChange = "")
            }), l._finally).call(t, function () {
              r.animationMain.style.opacity = 0, r.animationMain.style.willChange = ""
            })
          }
        }]), t
      }(p.default);
    p.default.types.title = f
  }, {
    "../common": 3,
    "./flip": 6,
    "rxjs/Observable": 116,
    "rxjs/observable/timer": 132,
    "rxjs/operator/do": 136,
    "rxjs/operator/finally": 139
  }],
  8: [function (e, t, r) {
    "use strict";
    e("core-js/fn/array/for-each"), e("core-js/fn/array/find"), e("core-js/fn/function/bind"), e(
      "core-js/fn/number/constructor"), e("core-js/fn/object/assign"), e(
      "core-js/fn/object/define-property"), e("core-js/fn/object/keys"), e("core-js/fn/array/reduce"), e(
      "web-animations-js"), e("../lib/modernizr"), e("../lib/version"), e("./katex"), e("./drawer"), e(
      "./push-state")
  }, {
    "../lib/modernizr": 1,
    "../lib/version": 2,
    "./drawer": 5,
    "./katex": 9,
    "./push-state": 10,
    "core-js/fn/array/find": 17,
    "core-js/fn/array/for-each": 18,
    "core-js/fn/array/reduce": 19,
    "core-js/fn/function/bind": 20,
    "core-js/fn/number/constructor": 21,
    "core-js/fn/object/assign": 22,
    "core-js/fn/object/define-property": 23,
    "core-js/fn/object/keys": 24,
    "web-animations-js": 173
  }],
  9: [function (e, t, r) {
    "use strict";
    function n(e) {
      Array.prototype.forEach.call(e, function (e) {
        e.style.willChange = "content"
      })
    }

    function i(e, t) {
      e.outerHTML = c.default.renderToString(t,
        { displayMode: "math/tex; mode=display" === e.type })
    }

    function o(e, t) {
      try {
        var r = e.previousElementSibling;
        i(e, t), r && (0, l.matches)(r, ".MathJax_Preview") && (0, l.hide)(r)
      }
      catch (e) {
        console.error(e)
      } finally {
        e.style.willChange = ""
      }
    }

    function s(e) {
      return e.textContent.replace("% <![CDATA[", "").replace("%]]>", "")
    }

    function a(e) {
      Array.prototype.forEach.call(e, function (e) {
        o(e, s(e))
      })
    }

    function u() {
      if ((0, l.hasFeatures)(h)) {
        var e = document.querySelectorAll('script[type^="math/tex"]');
        e.length && (n(e), a(e))
      }
    }

    Object.defineProperty(r, "__esModule", { value: !0 }), r.default = u;
    var c = function (e) {
      return e && e.__esModule ? e : { default: e }
    }(e("katex")), l = e("./common"), h = ["eventlistener", "queryselector"];
    if ((0, l.hasFeatures)(h)) {
      var p = document.getElementsByTagName("style")[0];
      loadCSS("https://unpkg.com/katex@0.7.1/dist/katex.min.css", p).addEventListener("load", u)
    }
  }, { "./common": 3, katex: 90 }],
  10: [function (e, t, r) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e }
    }

    function i() {
      return u._catch.call(this, function (e, t) {
        return console.error(e), t
      })
    }

    var o = function () {
        function e(e, t) {
          var r = [], n = !0, i = !1, o = void 0;
          try {
            for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
          }
          catch (e) {
            i = !0, o = e
          } finally {
            try {
              !n && a.return && a.return()
            } finally {
              if (i)throw o
            }
          }
          return r
        }

        return function (t, r) {
          if (Array.isArray(t))return t;
          if (Symbol.iterator in Object(t))return e(t, r);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
      }(), s = e("rxjs/Observable"), a = e("rxjs/observable/fromEvent"), u = e("rxjs/operator/catch"),
      c = e("rxjs/operator/do"), l = e("rxjs/operator/debounceTime"),
      h = e("rxjs/operator/exhaustMap"), p = e("rxjs/operator/filter"), f = e("rxjs/operator/map"),
      d = e("rxjs/operator/mergeMap"), b = e("rxjs/operator/pairwise"),
      m = e("rxjs/operator/share"), v = e("rxjs/operator/startWith"),
      y = e("rxjs/operator/switchMap"), g = e("rxjs/operator/takeUntil"),
      w = e("rxjs/operator/zip"), x = n(e("y-push-state/src/vanilla")), _ = n(e("elem-dataset")),
      S = e("./common"), O = n(e("./cross-fader")), k = n(e("./katex")), j = n(e("./flip/flip"));
    e("./flip/title");
    var T = ["eventlistener", "queryselector", "requestanimationframe", "classlist", "documentfragment", "history", "opacity", "cssanimations"];
    if (!window.disablePushState && (0, S.hasFeatures)(T)) {
      var E, M = navigator.userAgent.toLowerCase(),
        A = M.indexOf("safari") > 0 && M.indexOf("chrome") < 0,
        P = new O.default({ duration: 500 }), C = document.getElementById("_yPushState"),
        N = document.createElement("div");
      N.classList.add("animation-main"), N.classList.add("fixed-top"), N.innerHTML = '\n    <div class="content">\n      <div class="page"></div>\n    </div>', C.parentNode.insertBefore(
        N,
        C);
      var R = document.createElement("div");
      R.classList.add("loading"), R.innerHTML = '\n    <span class="sr-only">Loading...</span>\n    <div class="sk-folding-cube">\n      <div class="sk-cube1 sk-cube"></div>\n      <div class="sk-cube2 sk-cube"></div>\n      <div class="sk-cube4 sk-cube"></div>\n      <div class="sk-cube3 sk-cube"></div>\n    </div>\n  ', document.querySelector(
        ".navbar .content").appendChild(R);
      var z = (E = (E = (E = (E = a.fromEvent.call(s.Observable,
        C,
        "y-push-state-start"), f.map).call(E, function (e) {
          return e.detail
        }), f.map).call(E, function (e) {
          return [e, document.getElementById("_main")]
        }), c._do).call(E, function () {
          !window.isDesktop && window.drawer.opened && window.drawer.close()
        }), m.share).call(E),
        F = (E = (E = a.fromEvent.call(s.Observable, C, "y-push-state-ready"), f.map).call(E,
          function (e) {
            return e.detail
          }), m.share).call(E),
        q = (E = a.fromEvent.call(s.Observable, C, "y-push-state-progress"), f.map).call(E,
          function (e) {
            return e.detail
          }), I = (E = (E = a.fromEvent.call(s.Observable, C, "y-push-state-after"), f.map).call(E,
        function (e) {
          return e.detail
        }), m.share).call(E);
      A && (a.fromEvent.call(s.Observable, window, "popstate").subscribe(function () {
        document.body.style.minHeight = "999999px"
      }), I.subscribe(function () {
        document.body.style.minHeight = ""
      })), (E = y.switchMap.call(z, function (e) {
        var t = o(e, 1)[0], r = t.event.currentTarget,
          n = j.default.create(r.getAttribute && r.getAttribute("data-flip"),
            { animationMain: N, currentTarget: r, duration: 250 });
        return t.flip = n, n.start(r)
      }), i).call(E).subscribe(), (E = (E = (E = c._do.call(z, function (e) {
        o(e, 2)[1].style.opacity = 0
      }), p.filter).call(E, function (e) {
        return "push" === o(e, 1)[0].type || !A
      }), h.exhaustMap).call(E, function (e) {
        var t, r = o(e, 2), n = r[0].type, i = r[1];
        return (t = (t = (0, S.animate)(i,
          [{ opacity: 1 }, { opacity: 0 }],
          { duration: 250, easing: "cubic-bezier(0,0,0.32,1)" }), c._do).call(t, function () {
          "push" === n && window.scroll(0, 0)
        }), w.zipProto).call(t, I)
      }), i).call(E).subscribe(), (E = c._do.call(q, function () {
        R.style.display = "block"
      }), i).call(E).subscribe(), (E = (E = (E = c._do.call(F, function () {
        R.style.display = "none"
      }), p.filter).call(E, function (e) {
        return "push" === e.type || !A
      }), y.switchMap).call(E, function (e) {
        var t, r = e.flip, n = o(e.content, 1)[0];
        return (t = r.ready(n), g.takeUntil).call(t, z)
      }), i).call(E).subscribe(), (E = (E = (E = (E = y.switchMap.call(F, function (e) {
        var t, r = o(e.content, 1)[0];
        return (t = P.fetchImage((0, _.default)(r)), g.takeUntil).call(t, z)
      }), v.startWith).call(E,
        document.querySelector(".sidebar-bg")), b.pairwise).call(E), d.mergeMap).call(E,
        P.crossFade.bind(P)), i).call(E).subscribe(), (E = (E = (E = p.filter.call(I, function (e) {
        return "push" === e.type || !A
      }), f.map).call(E, function (e) {
        return [e, document.querySelector("main")]
      }), y.switchMap).call(E, function (e) {
        var t = o(e, 2)[1];
        return (0, S.animate)(t,
          [{ transform: "translateY(-2rem)", opacity: 0 }, {
            transform: "translateY(0)",
            opacity: 1
          }],
          { duration: 250, easing: "cubic-bezier(0,0,0.32,1)" })
      }), i).call(E).subscribe(), (E = (E = l.debounceTime.call(I, 500), c._do).call(E,
        function () {
          window.ga && window.ga("send", "pageview"), (0, k.default)()
        }), i).call(E).subscribe(), new x.default(C,
        {
          replaceIds: ["_main"],
          linkSelector: 'a[href^="/"]',
          scriptSelector: 'script:not([type^="math/tex"])',
          duration: 250,
          noPopDuration: A,
          scrollRestoration: !A
        }).startHistory()
    }
  }, {
    "./common": 3,
    "./cross-fader": 4,
    "./flip/flip": 6,
    "./flip/title": 7,
    "./katex": 9,
    "elem-dataset": 88,
    "rxjs/Observable": 116,
    "rxjs/observable/fromEvent": 131,
    "rxjs/operator/catch": 133,
    "rxjs/operator/debounceTime": 135,
    "rxjs/operator/do": 136,
    "rxjs/operator/exhaustMap": 137,
    "rxjs/operator/filter": 138,
    "rxjs/operator/map": 140,
    "rxjs/operator/mergeMap": 142,
    "rxjs/operator/pairwise": 144,
    "rxjs/operator/share": 145,
    "rxjs/operator/startWith": 146,
    "rxjs/operator/switchMap": 147,
    "rxjs/operator/takeUntil": 148,
    "rxjs/operator/zip": 149,
    "y-push-state/src/vanilla": 291
  }],
  11: [function (e, t, r) {
    function n(e, t) {
      return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2) + Math.pow(e[2] - t[2], 2)
    }

    var i = e("color-name"), o = {};
    for (var s in i)i.hasOwnProperty(s) && (o[i[s]] = s);
    var a = t.exports = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    for (var u in a)if (a.hasOwnProperty(u)) {
      if (!("channels" in a[u]))throw new Error("missing channels property: " + u);
      if (!("labels" in a[u]))throw new Error("missing channel labels property: " + u);
      if (a[u].labels.length !== a[u].channels)throw new Error("channel and label counts mismatch: " + u);
      var c = a[u].channels, l = a[u].labels;
      delete a[u].channels, delete a[u].labels, Object.defineProperty(a[u],
        "channels",
        { value: c }), Object.defineProperty(a[u], "labels", { value: l })
    }
    a.rgb.hsl = function (e) {
      var t, r, n, i = e[0] / 255, o = e[1] / 255, s = e[2] / 255, a = Math.min(i, o, s),
        u = Math.max(i, o, s), c = u - a;
      return u === a ? t = 0 : i === u ? t = (o - s) / c : o === u ? t = 2 + (s - i) / c : s === u && (t = 4 + (i - o) / c), (t = Math.min(
        60 * t,
        360)) < 0 && (t += 360), n = (a + u) / 2, r = u === a ? 0 : n <= .5 ? c / (u + a) : c / (2 - u - a), [t, 100 * r, 100 * n]
    }, a.rgb.hsv = function (e) {
      var t, r, n, i = e[0], o = e[1], s = e[2], a = Math.min(i, o, s), u = Math.max(i, o, s),
        c = u - a;
      return r = 0 === u ? 0 : c / u * 1e3 / 10, u === a ? t = 0 : i === u ? t = (o - s) / c : o === u ? t = 2 + (s - i) / c : s === u && (t = 4 + (i - o) / c), (t = Math.min(
        60 * t,
        360)) < 0 && (t += 360), n = u / 255 * 1e3 / 10, [t, r, n]
    }, a.rgb.hwb = function (e) {
      var t = e[0], r = e[1], n = e[2], i = a.rgb.hsl(e)[0],
        o = 1 / 255 * Math.min(t, Math.min(r, n));
      return n = 1 - 1 / 255 * Math.max(t, Math.max(r, n)), [i, 100 * o, 100 * n]
    }, a.rgb.cmyk = function (e) {
      var t, r, n, i, o = e[0] / 255, s = e[1] / 255, a = e[2] / 255;
      return i = Math.min(1 - o,
        1 - s,
        1 - a), t = (1 - o - i) / (1 - i) || 0, r = (1 - s - i) / (1 - i) || 0, n = (1 - a - i) / (1 - i) || 0, [100 * t, 100 * r, 100 * n, 100 * i]
    }, a.rgb.keyword = function (e) {
      var t = o[e];
      if (t)return t;
      var r, s = 1 / 0;
      for (var a in i)if (i.hasOwnProperty(a)) {
        var u = n(e, i[a]);
        u < s && (s = u, r = a)
      }
      return r
    }, a.keyword.rgb = function (e) {
      return i[e]
    }, a.rgb.xyz = function (e) {
      var t = e[0] / 255, r = e[1] / 255, n = e[2] / 255;
      return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055,
        2.4) : t / 12.92) + .3576 * (r = r > .04045 ? Math.pow((r + .055) / 1.055,
        2.4) : r / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055,
        2.4) : n / 12.92)), 100 * (.2126 * t + .7152 * r + .0722 * n), 100 * (.0193 * t + .1192 * r + .9505 * n)]
    }, a.rgb.lab = function (e) {
      var t, r, n, i = a.rgb.xyz(e), o = i[0], s = i[1], u = i[2];
      return o /= 95.047, s /= 100, u /= 108.883, o = o > .008856 ? Math.pow(o,
        1 / 3) : 7.787 * o + 16 / 116, s = s > .008856 ? Math.pow(s,
        1 / 3) : 7.787 * s + 16 / 116, u = u > .008856 ? Math.pow(u,
        1 / 3) : 7.787 * u + 16 / 116, t = 116 * s - 16, r = 500 * (o - s), n = 200 * (s - u), [t, r, n]
    }, a.hsl.rgb = function (e) {
      var t, r, n, i, o, s = e[0] / 360, a = e[1] / 100, u = e[2] / 100;
      if (0 === a)return o = 255 * u, [o, o, o];
      t = 2 * u - (r = u < .5 ? u * (1 + a) : u + a - u * a), i = [0, 0, 0];
      for (var c = 0; c < 3; c++)(n = s + 1 / 3 * -(c - 1)) < 0 && n++, n > 1 && n--, o = 6 * n < 1 ? t + 6 * (r - t) * n : 2 * n < 1 ? r : 3 * n < 2 ? t + (r - t) * (2 / 3 - n) * 6 : t, i[c] = 255 * o;
      return i
    }, a.hsl.hsv = function (e) {
      var t, r, n = e[0], i = e[1] / 100, o = e[2] / 100, s = i, a = Math.max(o, .01);
      return o *= 2, i *= o <= 1 ? o : 2 - o, s *= a <= 1 ? a : 2 - a, r = (o + i) / 2, t = 0 === o ? 2 * s / (a + s) : 2 * i / (o + i), [n, 100 * t, 100 * r]
    }, a.hsv.rgb = function (e) {
      var t = e[0] / 60, r = e[1] / 100, n = e[2] / 100, i = Math.floor(t) % 6,
        o = t - Math.floor(t), s = 255 * n * (1 - r), a = 255 * n * (1 - r * o),
        u = 255 * n * (1 - r * (1 - o));
      switch (n *= 255, i) {
        case 0:
          return [n, u, s];
        case 1:
          return [a, n, s];
        case 2:
          return [s, n, u];
        case 3:
          return [s, a, n];
        case 4:
          return [u, s, n];
        case 5:
          return [n, s, a]
      }
    }, a.hsv.hsl = function (e) {
      var t, r, n, i = e[0], o = e[1] / 100, s = e[2] / 100, a = Math.max(s, .01);
      return n = (2 - o) * s, t = (2 - o) * a, r = o * a, r /= t <= 1 ? t : 2 - t, r = r || 0, n /= 2, [i, 100 * r, 100 * n]
    }, a.hwb.rgb = function (e) {
      var t, r, n, i, o = e[0] / 360, s = e[1] / 100, a = e[2] / 100, u = s + a;
      u > 1 && (s /= u, a /= u), r = 1 - a, n = 6 * o - (t = Math.floor(6 * o)), 0 != (1 & t) && (n = 1 - n), i = s + n * (r - s);
      var c, l, h;
      switch (t) {
        default:
        case 6:
        case 0:
          c = r, l = i, h = s;
          break;
        case 1:
          c = i, l = r, h = s;
          break;
        case 2:
          c = s, l = r, h = i;
          break;
        case 3:
          c = s, l = i, h = r;
          break;
        case 4:
          c = i, l = s, h = r;
          break;
        case 5:
          c = r, l = s, h = i
      }
      return [255 * c, 255 * l, 255 * h]
    }, a.cmyk.rgb = function (e) {
      var t, r, n, i = e[0] / 100, o = e[1] / 100, s = e[2] / 100, a = e[3] / 100;
      return t = 1 - Math.min(1, i * (1 - a) + a), r = 1 - Math.min(1,
          o * (1 - a) + a), n = 1 - Math.min(1, s * (1 - a) + a), [255 * t, 255 * r, 255 * n]
    }, a.xyz.rgb = function (e) {
      var t, r, n, i = e[0] / 100, o = e[1] / 100, s = e[2] / 100;
      return t = 3.2406 * i + -1.5372 * o + -.4986 * s, r = -.9689 * i + 1.8758 * o + .0415 * s, n = .0557 * i + -.204 * o + 1.057 * s, t = t > .0031308 ? 1.055 * Math.pow(
          t,
          1 / 2.4) - .055 : 12.92 * t, r = r > .0031308 ? 1.055 * Math.pow(r,
          1 / 2.4) - .055 : 12.92 * r, n = n > .0031308 ? 1.055 * Math.pow(n,
          1 / 2.4) - .055 : 12.92 * n, t = Math.min(Math.max(0, t), 1), r = Math.min(Math.max(0, r),
        1), n = Math.min(Math.max(0, n), 1), [255 * t, 255 * r, 255 * n]
    }, a.xyz.lab = function (e) {
      var t, r, n, i = e[0], o = e[1], s = e[2];
      return i /= 95.047, o /= 100, s /= 108.883, i = i > .008856 ? Math.pow(i,
        1 / 3) : 7.787 * i + 16 / 116, o = o > .008856 ? Math.pow(o,
        1 / 3) : 7.787 * o + 16 / 116, s = s > .008856 ? Math.pow(s,
        1 / 3) : 7.787 * s + 16 / 116, t = 116 * o - 16, r = 500 * (i - o), n = 200 * (o - s), [t, r, n]
    }, a.lab.xyz = function (e) {
      var t, r, n, i = e[0];
      t = e[1] / 500 + (r = (i + 16) / 116), n = r - e[2] / 200;
      var o = Math.pow(r, 3), s = Math.pow(t, 3), a = Math.pow(n, 3);
      return r = o > .008856 ? o : (r - 16 / 116) / 7.787, t = s > .008856 ? s : (t - 16 / 116) / 7.787, n = a > .008856 ? a : (n - 16 / 116) / 7.787, t *= 95.047, r *= 100, n *= 108.883, [t, r, n]
    }, a.lab.lch = function (e) {
      var t, r, n, i = e[0], o = e[1], s = e[2];
      return t = Math.atan2(s,
        o), (r = 360 * t / 2 / Math.PI) < 0 && (r += 360), n = Math.sqrt(o * o + s * s), [i, n, r]
    }, a.lch.lab = function (e) {
      var t, r, n, i = e[0], o = e[1];
      return n = e[2] / 360 * 2 * Math.PI, t = o * Math.cos(n), r = o * Math.sin(n), [i, t, r]
    }, a.rgb.ansi16 = function (e) {
      var t = e[0], r = e[1], n = e[2], i = 1 in arguments ? arguments[1] : a.rgb.hsv(e)[2];
      if (0 === (i = Math.round(i / 50)))return 30;
      var o = 30 + (Math.round(n / 255) << 2 | Math.round(r / 255) << 1 | Math.round(t / 255));
      return 2 === i && (o += 60), o
    }, a.hsv.ansi16 = function (e) {
      return a.rgb.ansi16(a.hsv.rgb(e), e[2])
    }, a.rgb.ansi256 = function (e) {
      var t = e[0], r = e[1], n = e[2];
      return t === r && r === n ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(
          t / 255 * 5) + 6 * Math.round(r / 255 * 5) + Math.round(n / 255 * 5)
    }, a.ansi16.rgb = function (e) {
      var t = e % 10;
      if (0 === t || 7 === t)return e > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];
      var r = .5 * (1 + ~~(e > 50));
      return [(1 & t) * r * 255, (t >> 1 & 1) * r * 255, (t >> 2 & 1) * r * 255]
    }, a.ansi256.rgb = function (e) {
      if (e >= 232) {
        var t = 10 * (e - 232) + 8;
        return [t, t, t]
      }
      e -= 16;
      var r;
      return [Math.floor(e / 36) / 5 * 255, Math.floor((r = e % 36) / 6) / 5 * 255, r % 6 / 5 * 255]
    }, a.rgb.hex = function (e) {
      var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(
        e[2]))).toString(16).toUpperCase();
      return "000000".substring(t.length) + t
    }, a.hex.rgb = function (e) {
      var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!t)return [0, 0, 0];
      var r = t[0];
      3 === t[0].length && (r = r.split("").map(function (e) {
        return e + e
      }).join(""));
      var n = parseInt(r, 16);
      return [n >> 16 & 255, n >> 8 & 255, 255 & n]
    }, a.rgb.hcg = function (e) {
      var t, r, n = e[0] / 255, i = e[1] / 255, o = e[2] / 255, s = Math.max(Math.max(n, i), o),
        a = Math.min(Math.min(n, i), o), u = s - a;
      return t = u < 1 ? a / (1 - u) : 0, r = u <= 0 ? 0 : s === n ? (i - o) / u % 6 : s === i ? 2 + (o - n) / u : 4 + (n - i) / u + 4, r /= 6, r %= 1, [360 * r, 100 * u, 100 * t]
    }, a.hsl.hcg = function (e) {
      var t = e[1] / 100, r = e[2] / 100, n = 1, i = 0;
      return (n = r < .5 ? 2 * t * r : 2 * t * (1 - r)) < 1 && (i = (r - .5 * n) / (1 - n)), [e[0], 100 * n, 100 * i]
    }, a.hsv.hcg = function (e) {
      var t = e[1] / 100, r = e[2] / 100, n = t * r, i = 0;
      return n < 1 && (i = (r - n) / (1 - n)), [e[0], 100 * n, 100 * i]
    }, a.hcg.rgb = function (e) {
      var t = e[0] / 360, r = e[1] / 100, n = e[2] / 100;
      if (0 === r)return [255 * n, 255 * n, 255 * n];
      var i = [0, 0, 0], o = t % 1 * 6, s = o % 1, a = 1 - s, u = 0;
      switch (Math.floor(o)) {
        case 0:
          i[0] = 1, i[1] = s, i[2] = 0;
          break;
        case 1:
          i[0] = a, i[1] = 1, i[2] = 0;
          break;
        case 2:
          i[0] = 0, i[1] = 1, i[2] = s;
          break;
        case 3:
          i[0] = 0, i[1] = a, i[2] = 1;
          break;
        case 4:
          i[0] = s, i[1] = 0, i[2] = 1;
          break;
        default:
          i[0] = 1, i[1] = 0, i[2] = a
      }
      return u = (1 - r) * n, [255 * (r * i[0] + u), 255 * (r * i[1] + u), 255 * (r * i[2] + u)]
    }, a.hcg.hsv = function (e) {
      var t = e[1] / 100, r = t + e[2] / 100 * (1 - t), n = 0;
      return r > 0 && (n = t / r), [e[0], 100 * n, 100 * r]
    }, a.hcg.hsl = function (e) {
      var t = e[1] / 100, r = e[2] / 100 * (1 - t) + .5 * t, n = 0;
      return r > 0 && r < .5 ? n = t / (2 * r) : r >= .5 && r < 1 && (n = t / (2 * (1 - r))), [e[0], 100 * n, 100 * r]
    }, a.hcg.hwb = function (e) {
      var t = e[1] / 100, r = t + e[2] / 100 * (1 - t);
      return [e[0], 100 * (r - t), 100 * (1 - r)]
    }, a.hwb.hcg = function (e) {
      var t = e[1] / 100, r = 1 - e[2] / 100, n = r - t, i = 0;
      return n < 1 && (i = (r - n) / (1 - n)), [e[0], 100 * n, 100 * i]
    }, a.apple.rgb = function (e) {
      return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255]
    }, a.rgb.apple = function (e) {
      return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535]
    }, a.gray.rgb = function (e) {
      return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255]
    }, a.gray.hsl = a.gray.hsv = function (e) {
      return [0, 0, e[0]]
    }, a.gray.hwb = function (e) {
      return [0, 100, e[0]]
    }, a.gray.cmyk = function (e) {
      return [0, 0, 0, e[0]]
    }, a.gray.lab = function (e) {
      return [e[0], 0, 0]
    }, a.gray.hex = function (e) {
      var t = 255 & Math.round(e[0] / 100 * 255),
        r = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
      return "000000".substring(r.length) + r
    }, a.rgb.gray = function (e) {
      return [(e[0] + e[1] + e[2]) / 3 / 255 * 100]
    }
  }, { "color-name": 14 }],
  12: [function (e, t, r) {
    function n(e) {
      var t = function (t) {
        return void 0 === t || null === t ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(
          arguments)), e(t))
      };
      return "conversion" in e && (t.conversion = e.conversion), t
    }

    function i(e) {
      var t = function (t) {
        if (void 0 === t || null === t)return t;
        arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
        var r = e(t);
        if ("object" == typeof r)for (var n = r.length, i = 0; i < n; i++)r[i] = Math.round(r[i]);
        return r
      };
      return "conversion" in e && (t.conversion = e.conversion), t
    }

    var o = e("./conversions"), s = e("./route"), a = {};
    Object.keys(o).forEach(function (e) {
      a[e] = {}, Object.defineProperty(a[e],
        "channels",
        { value: o[e].channels }), Object.defineProperty(a[e], "labels", { value: o[e].labels });
      var t = s(e);
      Object.keys(t).forEach(function (r) {
        var o = t[r];
        a[e][r] = i(o), a[e][r].raw = n(o)
      })
    }), t.exports = a
  }, { "./conversions": 11, "./route": 13 }],
  13: [function (e, t, r) {
    function n() {
      for (var e = {}, t = u.length, r = 0; r < t; r++)e[u[r]] = { distance: -1, parent: null };
      return e
    }

    function i(e) {
      var t = n(), r = [e];
      for (t[e].distance = 0; r.length;)for (var i = r.pop(), o = Object.keys(a[i]), s = o.length, u = 0; u < s; u++) {
        var c = o[u], l = t[c];
        -1 === l.distance && (l.distance = t[i].distance + 1, l.parent = i, r.unshift(c))
      }
      return t
    }

    function o(e, t) {
      return function (r) {
        return t(e(r))
      }
    }

    function s(e, t) {
      for (var r = [t[e].parent, e], n = a[t[e].parent][e], i = t[e].parent; t[i].parent;)r.unshift(
        t[i].parent), n = o(a[t[i].parent][i],
        n), i = t[i].parent;
      return n.conversion = r, n
    }

    var a = e("./conversions"), u = Object.keys(a);
    t.exports = function (e) {
      for (var t = i(e), r = {}, n = Object.keys(t), o = n.length, a = 0; a < o; a++) {
        var u = n[a];
        null !== t[u].parent && (r[u] = s(u, t))
      }
      return r
    }
  }, { "./conversions": 11 }],
  14: [function (e, t, r) {
    t.exports = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50]
    }
  }, {}],
  15: [function (e, t, r) {
    function n(e, t, r) {
      return Math.min(Math.max(t, e), r)
    }

    function i(e) {
      var t = e.toString(16).toUpperCase();
      return t.length < 2 ? "0" + t : t
    }

    var o = e("color-name"), s = e("simple-swizzle"), a = {};
    for (var u in o)o.hasOwnProperty(u) && (a[o[u]] = u);
    var c = t.exports = { to: {} };
    c.get = function (e) {
      var t, r;
      switch (e.substring(0, 3).toLowerCase()) {
        case"hsl":
          t = c.get.hsl(e), r = "hsl";
          break;
        case"hwb":
          t = c.get.hwb(e), r = "hwb";
          break;
        default:
          t = c.get.rgb(e), r = "rgb"
      }
      return t ? { model: r, value: t } : null
    }, c.get.rgb = function (e) {
      if (!e)return null;
      var t, r, i, s = /^#([a-f0-9]{3,4})$/i, a = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i,
        u = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
        c = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
        l = /(\D+)/, h = [0, 0, 0, 1];
      if (t = e.match(a)) {
        for (i = t[2], t = t[1], r = 0; r < 3; r++) {
          var p = 2 * r;
          h[r] = parseInt(t.slice(p, p + 2), 16)
        }
        i && (h[3] = Math.round(parseInt(i, 16) / 255 * 100) / 100)
      } else if (t = e.match(s)) {
        for (i = (t = t[1])[3], r = 0; r < 3; r++)h[r] = parseInt(t[r] + t[r], 16);
        i && (h[3] = Math.round(parseInt(i + i, 16) / 255 * 100) / 100)
      } else if (t = e.match(u)) {
        for (r = 0; r < 3; r++)h[r] = parseInt(t[r + 1], 0);
        t[4] && (h[3] = parseFloat(t[4]))
      } else {
        if (!(t = e.match(c)))return (t = e.match(l)) ? "transparent" === t[1] ? [0, 0, 0, 0] : (h = o[t[1]]) ? (h[3] = 1, h) : null : null;
        for (r = 0; r < 3; r++)h[r] = Math.round(2.55 * parseFloat(t[r + 1]));
        t[4] && (h[3] = parseFloat(t[4]))
      }
      for (r = 0; r < 3; r++)h[r] = n(h[r], 0, 255);
      return h[3] = n(h[3], 0, 1), h
    }, c.get.hsl = function (e) {
      if (!e)return null;
      var t = /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
        r = e.match(t);
      if (r) {
        var i = parseFloat(r[4]);
        return [(parseFloat(r[1]) % 360 + 360) % 360, n(parseFloat(r[2]),
          0,
          100), n(parseFloat(r[3]),
          0,
          100), n(isNaN(i) ? 1 : i, 0, 1)]
      }
      return null
    }, c.get.hwb = function (e) {
      if (!e)return null;
      var t = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
        r = e.match(t);
      if (r) {
        var i = parseFloat(r[4]);
        return [(parseFloat(r[1]) % 360 + 360) % 360, n(parseFloat(r[2]),
          0,
          100), n(parseFloat(r[3]),
          0,
          100), n(isNaN(i) ? 1 : i, 0, 1)]
      }
      return null
    }, c.to.hex = function () {
      var e = s(arguments);
      return "#" + i(e[0]) + i(e[1]) + i(e[2]) + (e[3] < 1 ? i(Math.round(255 * e[3])) : "")
    }, c.to.rgb = function () {
      var e = s(arguments);
      return e.length < 4 || 1 === e[3] ? "rgb(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(
          e[2]) + ")" : "rgba(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ", " + e[3] + ")"
    }, c.to.rgb.percent = function () {
      var e = s(arguments), t = Math.round(e[0] / 255 * 100), r = Math.round(e[1] / 255 * 100),
        n = Math.round(e[2] / 255 * 100);
      return e.length < 4 || 1 === e[3] ? "rgb(" + t + "%, " + r + "%, " + n + "%)" : "rgba(" + t + "%, " + r + "%, " + n + "%, " + e[3] + ")"
    }, c.to.hsl = function () {
      var e = s(arguments);
      return e.length < 4 || 1 === e[3] ? "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)" : "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + e[3] + ")"
    }, c.to.hwb = function () {
      var e = s(arguments), t = "";
      return e.length >= 4 && 1 !== e[3] && (t = ", " + e[3]), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + t + ")"
    }, c.to.keyword = function (e) {
      return a[e.slice(0, 3)]
    }
  }, { "color-name": 14, "simple-swizzle": 172 }],
  16: [function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(this instanceof n))return new n(e, t);
      if (t && t in f && (t = null), t && !(t in h))throw new Error("Unknown model: " + t);
      var r, i;
      if (e)if (e instanceof n) this.model = e.model, this.color = e.color.slice(), this.valpha = e.valpha; else if ("string" == typeof e) {
        var o = l.get(e);
        if (null === o)throw new Error("Unable to parse color from string: " + e);
        this.model = o.model, i = h[this.model].channels, this.color = o.value.slice(0,
          i), this.valpha = "number" == typeof o.value[i] ? o.value[i] : 1
      } else if (e.length) {
        this.model = t || "rgb", i = h[this.model].channels;
        var s = p.call(e, 0, i);
        this.color = c(s, i), this.valpha = "number" == typeof e[i] ? e[i] : 1
      } else if ("number" == typeof e) e &= 16777215, this.model = "rgb", this.color = [e >> 16 & 255, e >> 8 & 255, 255 & e], this.valpha = 1; else {
        this.valpha = 1;
        var a = Object.keys(e);
        "alpha" in e && (a.splice(a.indexOf("alpha"),
          1), this.valpha = "number" == typeof e.alpha ? e.alpha : 0);
        var u = a.sort().join("");
        if (!(u in d))throw new Error("Unable to parse color from object: " + JSON.stringify(e));
        this.model = d[u];
        var m = h[this.model].labels, v = [];
        for (r = 0; r < m.length; r++)v.push(e[m[r]]);
        this.color = c(v)
      } else this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
      if (b[this.model])for (i = h[this.model].channels, r = 0; r < i; r++) {
        var y = b[this.model][r];
        y && (this.color[r] = y(this.color[r]))
      }
      this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
    }

    function i(e, t) {
      return Number(e.toFixed(t))
    }

    function o(e) {
      return function (t) {
        return i(t, e)
      }
    }

    function s(e, t, r) {
      return (e = Array.isArray(e) ? e : [e]).forEach(function (e) {
        (b[e] || (b[e] = []))[t] = r
      }), e = e[0], function (n) {
        var i;
        return arguments.length ? (r && (n = r(n)), i = this[e](), i.color[t] = n, i) : (i = this[e]().color[t], r && (i = r(
          i)), i)
      }
    }

    function a(e) {
      return function (t) {
        return Math.max(0, Math.min(e, t))
      }
    }

    function u(e) {
      return Array.isArray(e) ? e : [e]
    }

    function c(e, t) {
      for (var r = 0; r < t; r++)"number" != typeof e[r] && (e[r] = 0);
      return e
    }

    var l = e("color-string"), h = e("color-convert"), p = [].slice, f = ["keyword", "gray", "hex"],
      d = {};
    Object.keys(h).forEach(function (e) {
      d[p.call(h[e].labels).sort().join("")] = e
    });
    var b = {};
    n.prototype = {
      toString: function () {
        return this.string()
      },
      toJSON: function () {
        return this[this.model]()
      },
      string: function (e) {
        var t = this.model in l.to ? this : this.rgb(),
          r = 1 === (t = t.round("number" == typeof e ? e : 1)).valpha ? t.color : t.color.concat(
            this.valpha);
        return l.to[t.model](r)
      },
      percentString: function (e) {
        var t = this.rgb().round("number" == typeof e ? e : 1),
          r = 1 === t.valpha ? t.color : t.color.concat(this.valpha);
        return l.to.rgb.percent(r)
      },
      array: function () {
        return 1 === this.valpha ? this.color.slice() : this.color.concat(this.valpha)
      },
      object: function () {
        for (var e = {}, t = h[this.model].channels, r = h[this.model].labels, n = 0; n < t; n++)e[r[n]] = this.color[n];
        return 1 !== this.valpha && (e.alpha = this.valpha), e
      },
      unitArray: function () {
        var e = this.rgb().color;
        return e[0] /= 255, e[1] /= 255, e[2] /= 255, 1 !== this.valpha && e.push(this.valpha), e
      },
      unitObject: function () {
        var e = this.rgb().object();
        return e.r /= 255, e.g /= 255, e.b /= 255, 1 !== this.valpha && (e.alpha = this.valpha), e
      },
      round: function (e) {
        return e = Math.max(e || 0, 0), new n(this.color.map(o(e)).concat(this.valpha), this.model)
      },
      alpha: function (e) {
        return arguments.length ? new n(this.color.concat(Math.max(0, Math.min(1, e))),
          this.model) : this.valpha
      },
      red: s("rgb", 0, a(255)),
      green: s("rgb", 1, a(255)),
      blue: s("rgb", 2, a(255)),
      hue: s(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function (e) {
        return (e % 360 + 360) % 360
      }),
      saturationl: s("hsl", 1, a(100)),
      lightness: s("hsl", 2, a(100)),
      saturationv: s("hsv", 1, a(100)),
      value: s("hsv", 2, a(100)),
      chroma: s("hcg", 1, a(100)),
      gray: s("hcg", 2, a(100)),
      white: s("hwb", 1, a(100)),
      wblack: s("hwb", 2, a(100)),
      cyan: s("cmyk", 0, a(100)),
      magenta: s("cmyk", 1, a(100)),
      yellow: s("cmyk", 2, a(100)),
      black: s("cmyk", 3, a(100)),
      x: s("xyz", 0, a(100)),
      y: s("xyz", 1, a(100)),
      z: s("xyz", 2, a(100)),
      l: s("lab", 0, a(100)),
      a: s("lab", 1),
      b: s("lab", 2),
      keyword: function (e) {
        return arguments.length ? new n(e) : h[this.model].keyword(this.color)
      },
      hex: function (e) {
        return arguments.length ? new n(e) : l.to.hex(this.rgb().round().color)
      },
      rgbNumber: function () {
        var e = this.rgb().color;
        return (255 & e[0]) << 16 | (255 & e[1]) << 8 | 255 & e[2]
      },
      luminosity: function () {
        for (var e = this.rgb().color, t = [], r = 0; r < e.length; r++) {
          var n = e[r] / 255;
          t[r] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
        }
        return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
      },
      contrast: function (e) {
        var t = this.luminosity(), r = e.luminosity();
        return t > r ? (t + .05) / (r + .05) : (r + .05) / (t + .05)
      },
      level: function (e) {
        var t = this.contrast(e);
        return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
      },
      dark: function () {
        var e = this.rgb().color;
        return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128
      },
      light: function () {
        return !this.dark()
      },
      negate: function () {
        for (var e = this.rgb(), t = 0; t < 3; t++)e.color[t] = 255 - e.color[t];
        return e
      },
      lighten: function (e) {
        var t = this.hsl();
        return t.color[2] += t.color[2] * e, t
      },
      darken: function (e) {
        var t = this.hsl();
        return t.color[2] -= t.color[2] * e, t
      },
      saturate: function (e) {
        var t = this.hsl();
        return t.color[1] += t.color[1] * e, t
      },
      desaturate: function (e) {
        var t = this.hsl();
        return t.color[1] -= t.color[1] * e, t
      },
      whiten: function (e) {
        var t = this.hwb();
        return t.color[1] += t.color[1] * e, t
      },
      blacken: function (e) {
        var t = this.hwb();
        return t.color[2] += t.color[2] * e, t
      },
      grayscale: function () {
        var e = this.rgb().color, t = .3 * e[0] + .59 * e[1] + .11 * e[2];
        return n.rgb(t, t, t)
      },
      fade: function (e) {
        return this.alpha(this.valpha - this.valpha * e)
      },
      opaquer: function (e) {
        return this.alpha(this.valpha + this.valpha * e)
      },
      rotate: function (e) {
        var t = this.hsl(), r = t.color[0];
        return r = (r + e) % 360, r = r < 0 ? 360 + r : r, t.color[0] = r, t
      },
      mix: function (e, t) {
        var r = this.rgb(), i = e.rgb(), o = void 0 === t ? .5 : t, s = 2 * o - 1,
          a = r.alpha() - i.alpha(), u = ((s * a == -1 ? s : (s + a) / (1 + s * a)) + 1) / 2,
          c = 1 - u;
        return n.rgb(u * r.red() + c * i.red(),
          u * r.green() + c * i.green(),
          u * r.blue() + c * i.blue(),
          r.alpha() * o + i.alpha() * (1 - o))
      }
    }, Object.keys(h).forEach(function (e) {
      if (-1 === f.indexOf(e)) {
        var t = h[e].channels;
        n.prototype[e] = function () {
          if (this.model === e)return new n(this);
          if (arguments.length)return new n(arguments, e);
          var r = "number" == typeof arguments[t] ? t : this.valpha;
          return new n(u(h[this.model][e].raw(this.color)).concat(r), e)
        }, n[e] = function (r) {
          return "number" == typeof r && (r = c(p.call(arguments), t)), new n(r, e)
        }
      }
    }), t.exports = n
  }, { "color-convert": 12, "color-string": 15 }],
  17: [function (e, t, r) {
    e("../../modules/es6.array.find"), t.exports = e("../../modules/_core").Array.find
  }, { "../../modules/_core": 35, "../../modules/es6.array.find": 80 }],
  18: [function (e, t, r) {
    e("../../modules/es6.array.for-each"), t.exports = e("../../modules/_core").Array.forEach
  }, { "../../modules/_core": 35, "../../modules/es6.array.for-each": 81 }],
  19: [function (e, t, r) {
    e("../../modules/es6.array.reduce"), t.exports = e("../../modules/_core").Array.reduce
  }, { "../../modules/_core": 35, "../../modules/es6.array.reduce": 82 }],
  20: [function (e, t, r) {
    e("../../modules/es6.function.bind"), t.exports = e("../../modules/_core").Function.bind
  }, { "../../modules/_core": 35, "../../modules/es6.function.bind": 83 }],
  21: [function (e, t, r) {
    e("../../modules/es6.number.constructor"), t.exports = Number
  }, { "../../modules/es6.number.constructor": 84 }],
  22: [function (e, t, r) {
    e("../../modules/es6.object.assign"), t.exports = e("../../modules/_core").Object.assign
  }, { "../../modules/_core": 35, "../../modules/es6.object.assign": 85 }],
  23: [function (e, t, r) {
    e("../../modules/es6.object.define-property");
    var n = e("../../modules/_core").Object;
    t.exports = function (e, t, r) {
      return n.defineProperty(e, t, r)
    }
  }, { "../../modules/_core": 35, "../../modules/es6.object.define-property": 86 }],
  24: [function (e, t, r) {
    e("../../modules/es6.object.keys"), t.exports = e("../../modules/_core").Object.keys
  }, { "../../modules/_core": 35, "../../modules/es6.object.keys": 87 }],
  25: [function (e, t, r) {
    t.exports = function (e) {
      if ("function" != typeof e)throw TypeError(e + " is not a function!");
      return e
    }
  }, {}],
  26: [function (e, t, r) {
    var n = e("./_wks")("unscopables"), i = Array.prototype;
    void 0 == i[n] && e("./_hide")(i, n, {}), t.exports = function (e) {
      i[n][e] = !0
    }
  }, { "./_hide": 45, "./_wks": 79 }],
  27: [function (e, t, r) {
    var n = e("./_is-object");
    t.exports = function (e) {
      if (!n(e))throw TypeError(e + " is not an object!");
      return e
    }
  }, { "./_is-object": 52 }],
  28: [function (e, t, r) {
    var n = e("./_to-iobject"), i = e("./_to-length"), o = e("./_to-index");
    t.exports = function (e) {
      return function (t, r, s) {
        var a, u = n(t), c = i(u.length), l = o(s, c);
        if (e && r != r) {
          for (; c > l;)if ((a = u[l++]) != a)return !0
        } else for (; c > l; l++)if ((e || l in u) && u[l] === r)return e || l || 0;
        return !e && -1
      }
    }
  }, { "./_to-index": 72, "./_to-iobject": 74, "./_to-length": 75 }],
  29: [function (e, t, r) {
    var n = e("./_ctx"), i = e("./_iobject"), o = e("./_to-object"), s = e("./_to-length"),
      a = e("./_array-species-create");
    t.exports = function (e, t) {
      var r = 1 == e, u = 2 == e, c = 3 == e, l = 4 == e, h = 6 == e, p = 5 == e || h, f = t || a;
      return function (t, a, d) {
        for (var b, m, v = o(t), y = i(v), g = n(a, d, 3), w = s(y.length), x = 0, _ = r ? f(t,
          w) : u ? f(t, 0) : void 0; w > x; x++)if ((p || x in y) && (b = y[x], m = g(b,
            x,
            v), e))if (r) _[x] = m; else if (m)switch (e) {
          case 3:
            return !0;
          case 5:
            return b;
          case 6:
            return x;
          case 2:
            _.push(b)
        } else if (l)return !1;
        return h ? -1 : c || l ? l : _
      }
    }
  }, {
    "./_array-species-create": 32,
    "./_ctx": 36,
    "./_iobject": 50,
    "./_to-length": 75,
    "./_to-object": 76
  }],
  30: [function (e, t, r) {
    var n = e("./_a-function"), i = e("./_to-object"), o = e("./_iobject"), s = e("./_to-length");
    t.exports = function (e, t, r, a, u) {
      n(t);
      var c = i(e), l = o(c), h = s(c.length), p = u ? h - 1 : 0, f = u ? -1 : 1;
      if (r < 2)for (; ;) {
        if (p in l) {
          a = l[p], p += f;
          break
        }
        if (p += f, u ? p < 0 : h <= p)throw TypeError("Reduce of empty array with no initial value")
      }
      for (; u ? p >= 0 : h > p; p += f)p in l && (a = t(a, l[p], p, c));
      return a
    }
  }, { "./_a-function": 25, "./_iobject": 50, "./_to-length": 75, "./_to-object": 76 }],
  31: [function (e, t, r) {
    var n = e("./_is-object"), i = e("./_is-array"), o = e("./_wks")("species");
    t.exports = function (e) {
      var t;
      return i(e) && ("function" != typeof(t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), n(
        t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
    }
  }, { "./_is-array": 51, "./_is-object": 52, "./_wks": 79 }],
  32: [function (e, t, r) {
    var n = e("./_array-species-constructor");
    t.exports = function (e, t) {
      return new (n(e))(t)
    }
  }, { "./_array-species-constructor": 31 }],
  33: [function (e, t, r) {
    "use strict";
    var n = e("./_a-function"), i = e("./_is-object"), o = e("./_invoke"), s = [].slice, a = {},
      u = function (e, t, r) {
        if (!(t in a)) {
          for (var n = [], i = 0; i < t; i++)n[i] = "a[" + i + "]";
          a[t] = Function("F,a", "return new F(" + n.join(",") + ")")
        }
        return a[t](e, r)
      };
    t.exports = Function.bind || function (e) {
        var t = n(this), r = s.call(arguments, 1), a = function () {
          var n = r.concat(s.call(arguments));
          return this instanceof a ? u(t, n.length, n) : o(t, n, e)
        };
        return i(t.prototype) && (a.prototype = t.prototype), a
      }
  }, { "./_a-function": 25, "./_invoke": 49, "./_is-object": 52 }],
  34: [function (e, t, r) {
    var n = {}.toString;
    t.exports = function (e) {
      return n.call(e).slice(8, -1)
    }
  }, {}],
  35: [function (e, t, r) {
    var n = t.exports = { version: "2.4.0" };
    "number" == typeof __e && (__e = n)
  }, {}],
  36: [function (e, t, r) {
    var n = e("./_a-function");
    t.exports = function (e, t, r) {
      if (n(e), void 0 === t)return e;
      switch (r) {
        case 1:
          return function (r) {
            return e.call(t, r)
          };
        case 2:
          return function (r, n) {
            return e.call(t, r, n)
          };
        case 3:
          return function (r, n, i) {
            return e.call(t, r, n, i)
          }
      }
      return function () {
        return e.apply(t, arguments)
      }
    }
  }, { "./_a-function": 25 }],
  37: [function (e, t, r) {
    t.exports = function (e) {
      if (void 0 == e)throw TypeError("Can't call method on  " + e);
      return e
    }
  }, {}],
  38: [function (e, t, r) {
    t.exports = !e("./_fails")(function () {
      return 7 != Object.defineProperty({}, "a", {
          get: function () {
            return 7
          }
        }).a
    })
  }, { "./_fails": 42 }],
  39: [function (e, t, r) {
    var n = e("./_is-object"), i = e("./_global").document, o = n(i) && n(i.createElement);
    t.exports = function (e) {
      return o ? i.createElement(e) : {}
    }
  }, { "./_global": 43, "./_is-object": 52 }],
  40: [function (e, t, r) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
      ",")
  }, {}],
  41: [function (e, t, r) {
    var n = e("./_global"), i = e("./_core"), o = e("./_hide"), s = e("./_redefine"),
      a = e("./_ctx"), u = function (e, t, r) {
        var c, l, h, p, f = e & u.F, d = e & u.G, b = e & u.S, m = e & u.P, v = e & u.B,
          y = d ? n : b ? n[t] || (n[t] = {}) : (n[t] || {}).prototype,
          g = d ? i : i[t] || (i[t] = {}), w = g.prototype || (g.prototype = {});
        d && (r = t);
        for (c in r)h = ((l = !f && y && void 0 !== y[c]) ? y : r)[c], p = v && l ? a(h,
          n) : m && "function" == typeof h ? a(Function.call, h) : h, y && s(y,
          c,
          h,
          e & u.U), g[c] != h && o(g, c, p), m && w[c] != h && (w[c] = h)
      };
    n.core = i, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
  }, { "./_core": 35, "./_ctx": 36, "./_global": 43, "./_hide": 45, "./_redefine": 65 }],
  42: [function (e, t, r) {
    t.exports = function (e) {
      try {
        return !!e()
      }
      catch (e) {
        return !0
      }
    }
  }, {}],
  43: [function (e, t, r) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function(
      "return this")();
    "number" == typeof __g && (__g = n)
  }, {}],
  44: [function (e, t, r) {
    var n = {}.hasOwnProperty;
    t.exports = function (e, t) {
      return n.call(e, t)
    }
  }, {}],
  45: [function (e, t, r) {
    var n = e("./_object-dp"), i = e("./_property-desc");
    t.exports = e("./_descriptors") ? function (e, t, r) {
      return n.f(e, t, i(1, r))
    } : function (e, t, r) {
      return e[t] = r, e
    }
  }, { "./_descriptors": 38, "./_object-dp": 55, "./_property-desc": 64 }],
  46: [function (e, t, r) {
    t.exports = e("./_global").document && document.documentElement
  }, { "./_global": 43 }],
  47: [function (e, t, r) {
    t.exports = !e("./_descriptors") && !e("./_fails")(function () {
        return 7 != Object.defineProperty(e("./_dom-create")("div"), "a", {
            get: function () {
              return 7
            }
          }).a
      })
  }, { "./_descriptors": 38, "./_dom-create": 39, "./_fails": 42 }],
  48: [function (e, t, r) {
    var n = e("./_is-object"), i = e("./_set-proto").set;
    t.exports = function (e, t, r) {
      var o, s = t.constructor;
      return s !== r && "function" == typeof s && (o = s.prototype) !== r.prototype && n(o) && i && i(
        e,
        o), e
    }
  }, { "./_is-object": 52, "./_set-proto": 66 }],
  49: [function (e, t, r) {
    t.exports = function (e, t, r) {
      var n = void 0 === r;
      switch (t.length) {
        case 0:
          return n ? e() : e.call(r);
        case 1:
          return n ? e(t[0]) : e.call(r, t[0]);
        case 2:
          return n ? e(t[0], t[1]) : e.call(r, t[0], t[1]);
        case 3:
          return n ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);
        case 4:
          return n ? e(t[0], t[1], t[2], t[3]) : e.call(r, t[0], t[1], t[2], t[3])
      }
      return e.apply(r, t)
    }
  }, {}],
  50: [function (e, t, r) {
    var n = e("./_cof");
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
      return "String" == n(e) ? e.split("") : Object(e)
    }
  }, { "./_cof": 34 }],
  51: [function (e, t, r) {
    var n = e("./_cof");
    t.exports = Array.isArray || function (e) {
        return "Array" == n(e)
      }
  }, { "./_cof": 34 }],
  52: [function (e, t, r) {
    t.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e
    }
  }, {}],
  53: [function (e, t, r) {
    "use strict";
    var n = e("./_object-keys"), i = e("./_object-gops"), o = e("./_object-pie"),
      s = e("./_to-object"), a = e("./_iobject"), u = Object.assign;
    t.exports = !u || e("./_fails")(function () {
      var e = {}, t = {}, r = Symbol(), n = "abcdefghijklmnopqrst";
      return e[r] = 7, n.split("").forEach(function (e) {
        t[e] = e
      }), 7 != u({}, e)[r] || Object.keys(u({}, t)).join("") != n
    }) ? function (e, t) {
      for (var r = s(e), u = arguments.length, c = 1, l = i.f, h = o.f; u > c;)for (var p, f = a(
        arguments[c++]), d = l ? n(f).concat(l(f)) : n(f), b = d.length, m = 0; b > m;)h.call(f,
        p = d[m++]) && (r[p] = f[p]);
      return r
    } : u
  }, {
    "./_fails": 42,
    "./_iobject": 50,
    "./_object-gops": 59,
    "./_object-keys": 61,
    "./_object-pie": 62,
    "./_to-object": 76
  }],
  54: [function (e, t, r) {
    var n = e("./_an-object"), i = e("./_object-dps"), o = e("./_enum-bug-keys"),
      s = e("./_shared-key")("IE_PROTO"), a = function () {
      }, u = function () {
        var t, r = e("./_dom-create")("iframe"), n = o.length;
        for (r.style.display = "none", e("./_html")
        .appendChild(r), r.src = "javascript:", (t = r.contentWindow.document).open(), t.write(
          "<script>document.F=Object<\/script>"), t.close(), u = t.F; n--;)delete u.prototype[o[n]];
        return u()
      };
    t.exports = Object.create || function (e, t) {
        var r;
        return null !== e ? (a.prototype = n(e), r = new a, a.prototype = null, r[s] = e) : r = u(), void 0 === t ? r : i(
          r,
          t)
      }
  }, {
    "./_an-object": 27,
    "./_dom-create": 39,
    "./_enum-bug-keys": 40,
    "./_html": 46,
    "./_object-dps": 56,
    "./_shared-key": 67
  }],
  55: [function (e, t, r) {
    var n = e("./_an-object"), i = e("./_ie8-dom-define"), o = e("./_to-primitive"),
      s = Object.defineProperty;
    r.f = e("./_descriptors") ? Object.defineProperty : function (e, t, r) {
      if (n(e), t = o(t, !0), n(r), i)try {
        return s(e, t, r)
      }
      catch (e) {
      }
      if ("get" in r || "set" in r)throw TypeError("Accessors not supported!");
      return "value" in r && (e[t] = r.value), e
    }
  }, { "./_an-object": 27, "./_descriptors": 38, "./_ie8-dom-define": 47, "./_to-primitive": 77 }],
  56: [function (e, t, r) {
    var n = e("./_object-dp"), i = e("./_an-object"), o = e("./_object-keys");
    t.exports = e("./_descriptors") ? Object.defineProperties : function (e, t) {
      i(e);
      for (var r, s = o(t), a = s.length, u = 0; a > u;)n.f(e, r = s[u++], t[r]);
      return e
    }
  }, { "./_an-object": 27, "./_descriptors": 38, "./_object-dp": 55, "./_object-keys": 61 }],
  57: [function (e, t, r) {
    var n = e("./_object-pie"), i = e("./_property-desc"), o = e("./_to-iobject"),
      s = e("./_to-primitive"), a = e("./_has"), u = e("./_ie8-dom-define"),
      c = Object.getOwnPropertyDescriptor;
    r.f = e("./_descriptors") ? c : function (e, t) {
      if (e = o(e), t = s(t, !0), u)try {
        return c(e, t)
      }
      catch (e) {
      }
      if (a(e, t))return i(!n.f.call(e, t), e[t])
    }
  }, {
    "./_descriptors": 38,
    "./_has": 44,
    "./_ie8-dom-define": 47,
    "./_object-pie": 62,
    "./_property-desc": 64,
    "./_to-iobject": 74,
    "./_to-primitive": 77
  }],
  58: [function (e, t, r) {
    var n = e("./_object-keys-internal"), i = e("./_enum-bug-keys").concat("length", "prototype");
    r.f = Object.getOwnPropertyNames || function (e) {
        return n(e, i)
      }
  }, { "./_enum-bug-keys": 40, "./_object-keys-internal": 60 }],
  59: [function (e, t, r) {
    r.f = Object.getOwnPropertySymbols
  }, {}],
  60: [function (e, t, r) {
    var n = e("./_has"), i = e("./_to-iobject"), o = e("./_array-includes")(!1),
      s = e("./_shared-key")("IE_PROTO");
    t.exports = function (e, t) {
      var r, a = i(e), u = 0, c = [];
      for (r in a)r != s && n(a, r) && c.push(r);
      for (; t.length > u;)n(a, r = t[u++]) && (~o(c, r) || c.push(r));
      return c
    }
  }, { "./_array-includes": 28, "./_has": 44, "./_shared-key": 67, "./_to-iobject": 74 }],
  61: [function (e, t, r) {
    var n = e("./_object-keys-internal"), i = e("./_enum-bug-keys");
    t.exports = Object.keys || function (e) {
        return n(e, i)
      }
  }, { "./_enum-bug-keys": 40, "./_object-keys-internal": 60 }],
  62: [function (e, t, r) {
    r.f = {}.propertyIsEnumerable
  }, {}],
  63: [function (e, t, r) {
    var n = e("./_export"), i = e("./_core"), o = e("./_fails");
    t.exports = function (e, t) {
      var r = (i.Object || {})[e] || Object[e], s = {};
      s[e] = t(r), n(n.S + n.F * o(function () {
          r(1)
        }), "Object", s)
    }
  }, { "./_core": 35, "./_export": 41, "./_fails": 42 }],
  64: [function (e, t, r) {
    t.exports = function (e, t) {
      return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t }
    }
  }, {}],
  65: [function (e, t, r) {
    var n = e("./_global"), i = e("./_hide"), o = e("./_has"), s = e("./_uid")("src"),
      a = Function.toString, u = ("" + a).split("toString");
    e("./_core").inspectSource = function (e) {
      return a.call(e)
    }, (t.exports = function (e, t, r, a) {
      var c = "function" == typeof r;
      c && (o(r, "name") || i(r, "name", t)), e[t] !== r && (c && (o(r, s) || i(r,
        s,
        e[t] ? "" + e[t] : u.join(String(t)))), e === n ? e[t] = r : a ? e[t] ? e[t] = r : i(e,
        t,
        r) : (delete e[t], i(e, t, r)))
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && this[s] || a.call(this)
    })
  }, { "./_core": 35, "./_global": 43, "./_has": 44, "./_hide": 45, "./_uid": 78 }],
  66: [function (e, t, r) {
    var n = e("./_is-object"), i = e("./_an-object"), o = function (e, t) {
      if (i(e), !n(t) && null !== t)throw TypeError(t + ": can't set as prototype!")
    };
    t.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, r, n) {
        try {
          (n = e("./_ctx")(
            Function.call,
            e("./_object-gopd").f(Object.prototype, "__proto__").set,
            2))(t, []), r = !(t instanceof Array)
        }
        catch (e) {
          r = !0
        }
        return function (e, t) {
          return o(e, t), r ? e.__proto__ = t : n(e, t), e
        }
      }({}, !1) : void 0), check: o
    }
  }, { "./_an-object": 27, "./_ctx": 36, "./_is-object": 52, "./_object-gopd": 57 }],
  67: [function (e, t, r) {
    var n = e("./_shared")("keys"), i = e("./_uid");
    t.exports = function (e) {
      return n[e] || (n[e] = i(e))
    }
  }, { "./_shared": 68, "./_uid": 78 }],
  68: [function (e, t, r) {
    var n = e("./_global"), i = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});
    t.exports = function (e) {
      return i[e] || (i[e] = {})
    }
  }, { "./_global": 43 }],
  69: [function (e, t, r) {
    var n = e("./_fails");
    t.exports = function (e, t) {
      return !!e && n(function () {
          t ? e.call(null, function () {
          }, 1) : e.call(null)
        })
    }
  }, { "./_fails": 42 }],
  70: [function (e, t, r) {
    var n = e("./_export"), i = e("./_defined"), o = e("./_fails"), s = e("./_string-ws"),
      a = "[" + s + "]", u = RegExp("^" + a + a + "*"), c = RegExp(a + a + "*$"),
      l = function (e, t, r) {
        var i = {}, a = o(function () {
          return !!s[e]() || "​" != "​"[e]()
        }), u = i[e] = a ? t(h) : s[e];
        r && (i[r] = u), n(n.P + n.F * a, "String", i)
      }, h = l.trim = function (e, t) {
        return e = String(i(e)), 1 & t && (e = e.replace(u, "")), 2 & t && (e = e.replace(c, "")), e
      };
    t.exports = l
  }, { "./_defined": 37, "./_export": 41, "./_fails": 42, "./_string-ws": 71 }],
  71: [function (e, t, r) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
  }, {}],
  72: [function (e, t, r) {
    var n = e("./_to-integer"), i = Math.max, o = Math.min;
    t.exports = function (e, t) {
      return e = n(e), e < 0 ? i(e + t, 0) : o(e, t)
    }
  }, { "./_to-integer": 73 }],
  73: [function (e, t, r) {
    var n = Math.ceil, i = Math.floor;
    t.exports = function (e) {
      return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
    }
  }, {}],
  74: [function (e, t, r) {
    var n = e("./_iobject"), i = e("./_defined");
    t.exports = function (e) {
      return n(i(e))
    }
  }, { "./_defined": 37, "./_iobject": 50 }],
  75: [function (e, t, r) {
    var n = e("./_to-integer"), i = Math.min;
    t.exports = function (e) {
      return e > 0 ? i(n(e), 9007199254740991) : 0
    }
  }, { "./_to-integer": 73 }],
  76: [function (e, t, r) {
    var n = e("./_defined");
    t.exports = function (e) {
      return Object(n(e))
    }
  }, { "./_defined": 37 }],
  77: [function (e, t, r) {
    var n = e("./_is-object");
    t.exports = function (e, t) {
      if (!n(e))return e;
      var r, i;
      if (t && "function" == typeof(r = e.toString) && !n(i = r.call(e)))return i;
      if ("function" == typeof(r = e.valueOf) && !n(i = r.call(e)))return i;
      if (!t && "function" == typeof(r = e.toString) && !n(i = r.call(e)))return i;
      throw TypeError("Can't convert object to primitive value")
    }
  }, { "./_is-object": 52 }],
  78: [function (e, t, r) {
    var n = 0, i = Math.random();
    t.exports = function (e) {
      return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
    }
  }, {}],
  79: [function (e, t, r) {
    var n = e("./_shared")("wks"), i = e("./_uid"), o = e("./_global").Symbol,
      s = "function" == typeof o;
    (t.exports = function (e) {
      return n[e] || (n[e] = s && o[e] || (s ? o : i)("Symbol." + e))
    }).store = n
  }, { "./_global": 43, "./_shared": 68, "./_uid": 78 }],
  80: [function (e, t, r) {
    "use strict";
    var n = e("./_export"), i = e("./_array-methods")(5), o = !0;
    "find" in [] && Array(1).find(function () {
      o = !1
    }), n(n.P + n.F * o, "Array", {
      find: function (e) {
        return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
      }
    }), e("./_add-to-unscopables")("find")
  }, { "./_add-to-unscopables": 26, "./_array-methods": 29, "./_export": 41 }],
  81: [function (e, t, r) {
    "use strict";
    var n = e("./_export"), i = e("./_array-methods")(0), o = e("./_strict-method")([].forEach, !0);
    n(n.P + n.F * !o, "Array", {
      forEach: function (e) {
        return i(this, e, arguments[1])
      }
    })
  }, { "./_array-methods": 29, "./_export": 41, "./_strict-method": 69 }],
  82: [function (e, t, r) {
    "use strict";
    var n = e("./_export"), i = e("./_array-reduce");
    n(n.P + n.F * !e("./_strict-method")([].reduce, !0), "Array", {
      reduce: function (e) {
        return i(this, e, arguments.length, arguments[1], !1)
      }
    })
  }, { "./_array-reduce": 30, "./_export": 41, "./_strict-method": 69 }],
  83: [function (e, t, r) {
    var n = e("./_export");
    n(n.P, "Function", { bind: e("./_bind") })
  }, { "./_bind": 33, "./_export": 41 }],
  84: [function (e, t, r) {
    "use strict";
    var n = e("./_global"), i = e("./_has"), o = e("./_cof"), s = e("./_inherit-if-required"),
      a = e("./_to-primitive"), u = e("./_fails"), c = e("./_object-gopn").f,
      l = e("./_object-gopd").f, h = e("./_object-dp").f, p = e("./_string-trim").trim,
      f = n.Number, d = f, b = f.prototype, m = "Number" == o(e("./_object-create")(b)),
      v = "trim" in String.prototype, y = function (e) {
        var t = a(e, !1);
        if ("string" == typeof t && t.length > 2) {
          var r, n, i, o = (t = v ? t.trim() : p(t, 3)).charCodeAt(0);
          if (43 === o || 45 === o) {
            if (88 === (r = t.charCodeAt(2)) || 120 === r)return NaN
          } else if (48 === o) {
            switch (t.charCodeAt(1)) {
              case 66:
              case 98:
                n = 2, i = 49;
                break;
              case 79:
              case 111:
                n = 8, i = 55;
                break;
              default:
                return +t
            }
            for (var s, u = t.slice(2), c = 0, l = u.length; c < l; c++)if ((s = u.charCodeAt(c)) < 48 || s > i)return NaN;
            return parseInt(u, n)
          }
        }
        return +t
      };
    if (!f(" 0o1") || !f("0b1") || f("+0x1")) {
      f = function (e) {
        var t = arguments.length < 1 ? 0 : e, r = this;
        return r instanceof f && (m ? u(function () {
          b.valueOf.call(r)
        }) : "Number" != o(r)) ? s(new d(y(t)), r, f) : y(t)
      };
      for (var g, w = e("./_descriptors") ? c(d) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
        ","), x = 0; w.length > x; x++)i(d, g = w[x]) && !i(f, g) && h(f, g, l(d, g));
      f.prototype = b, b.constructor = f, e("./_redefine")(n, "Number", f)
    }
  }, {
    "./_cof": 34,
    "./_descriptors": 38,
    "./_fails": 42,
    "./_global": 43,
    "./_has": 44,
    "./_inherit-if-required": 48,
    "./_object-create": 54,
    "./_object-dp": 55,
    "./_object-gopd": 57,
    "./_object-gopn": 58,
    "./_redefine": 65,
    "./_string-trim": 70,
    "./_to-primitive": 77
  }],
  85: [function (e, t, r) {
    var n = e("./_export");
    n(n.S + n.F, "Object", { assign: e("./_object-assign") })
  }, { "./_export": 41, "./_object-assign": 53 }],
  86: [function (e, t, r) {
    var n = e("./_export");
    n(n.S + n.F * !e("./_descriptors"), "Object", { defineProperty: e("./_object-dp").f })
  }, { "./_descriptors": 38, "./_export": 41, "./_object-dp": 55 }],
  87: [function (e, t, r) {
    var n = e("./_to-object"), i = e("./_object-keys");
    e("./_object-sap")("keys", function () {
      return function (e) {
        return i(n(e))
      }
    })
  }, { "./_object-keys": 61, "./_object-sap": 63, "./_to-object": 76 }],
  88: [function (e, t, r) {
    "use strict";
    t.exports = function () {
      var e = document.createElement("div");
      return e.setAttribute("data-a-b", "c"), Boolean(e.dataset && "c" === e.dataset.aB)
    }() ? function (e) {
      return e.dataset
    } : function (e) {
      for (var t = {}, r = e.attributes, n = 0, i = r.length; n < i; n++) {
        var o = r[n];
        if (o) {
          var s = o.name;
          if (0 === s.indexOf("data-")) {
            var a = s.slice(5).replace(/-./g, function (e) {
              return e.charAt(1).toUpperCase()
            }), u = o.value;
            Object.defineProperty(t, a, {
              enumerable: !0, get: function () {
                return this.value
              }.bind({ value: u || "" }), set: function (e, t) {
                void 0 === t ? this.removeAttribute(e) : this.setAttribute(e, t)
              }.bind(e, s)
            })
          }
        }
      }
      return t
    }
  }, {}],
  89: [function (e, t, r) {
    "use strict";
    t.exports = function (e) {
      return !(!e || "string" == typeof e) && (e instanceof Array || Array.isArray(e) || e.length >= 0 && (e.splice instanceof Function || Object.getOwnPropertyDescriptor(
          e,
          e.length - 1) && "String" !== e.constructor.name))
    }
  }, {}],
  90: [function (e, t, r) {
    var n = e("./src/ParseError"), i = e("./src/Settings"), o = e("./src/buildTree"),
      s = e("./src/parseTree"), a = e("./src/utils"), u = function (e, t, r) {
        a.clearNode(t);
        var n = new i(r), u = s(e, n), c = o(u, e, n).toNode();
        t.appendChild(c)
      };
    "undefined" != typeof document && "CSS1Compat" !== document.compatMode && ("undefined" != typeof console && console.warn(
      "Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), u = function () {
      throw new n("KaTeX doesn't work in quirks mode.")
    });
    t.exports = {
      render: u, renderToString: function (e, t) {
        var r = new i(t), n = s(e, r);
        return o(n, e, r).toMarkup()
      }, __parse: function (e, t) {
        var r = new i(t);
        return s(e, r)
      }, ParseError: n
    }
  }, {
    "./src/ParseError": 94,
    "./src/Settings": 96,
    "./src/buildTree": 101,
    "./src/parseTree": 110,
    "./src/utils": 113
  }],
  91: [function (e, t, r) {
    function n(e) {
      this.input = e, this.pos = 0
    }

    function i(e, t, r, n) {
      this.text = e, this.start = t, this.end = r, this.lexer = n
    }

    var o = e("match-at"), s = e("./ParseError");
    i.prototype.range = function (e, t) {
      return e.lexer !== this.lexer ? new i(t) : new i(t, this.start, e.end, this.lexer)
    };
    var a = new RegExp("([ \r\n\t]+)|([!-\\[\\]-‧‪-퟿豈-￿]|[�-�][�-�]|\\\\(?:[a-zA-Z]+|[^�-�]))");
    n.prototype.lex = function () {
      var e = this.input, t = this.pos;
      if (t === e.length)return new i("EOF", t, t, this);
      var r = o(a, e, t);
      if (null === r)throw new s("Unexpected character: '" + e[t] + "'",
        new i(e[t], t, t + 1, this));
      var n = r[2] || " ", u = this.pos;
      return this.pos += r[0].length, new i(n, u, this.pos, this)
    }, t.exports = n
  }, { "./ParseError": 94, "match-at": 114 }],
  92: [function (e, t, r) {
    function n(e, t) {
      this.lexer = new i(e), this.macros = t, this.stack = [], this.discardedWhiteSpace = []
    }

    var i = e("./Lexer");
    n.prototype.nextToken = function () {
      for (; ;) {
        0 === this.stack.length && this.stack.push(this.lexer.lex());
        var e = this.stack.pop(), t = e.text;
        if ("\\" !== t.charAt(0) || !this.macros.hasOwnProperty(t))return e;
        var r = this.macros[t];
        if ("string" == typeof r) {
          var n = new i(r);
          r = [];
          for (var o = n.lex(); "EOF" !== o.text;)r.push(o), o = n.lex();
          r.reverse(), this.macros[t] = r
        }
        this.stack = this.stack.concat(r)
      }
    }, n.prototype.get = function (e) {
      this.discardedWhiteSpace = [];
      var t = this.nextToken();
      if (e)for (; " " === t.text;)this.discardedWhiteSpace.push(t), t = this.nextToken();
      return t
    }, n.prototype.unget = function (e) {
      for (this.stack.push(e); 0 !== this.discardedWhiteSpace.length;)this.stack.push(this.discardedWhiteSpace.pop())
    }, t.exports = n
  }, { "./Lexer": 91 }],
  93: [function (e, t, r) {
    function n(e) {
      this.style = e.style, this.color = e.color, this.size = e.size, this.phantom = e.phantom, this.font = e.font, void 0 === e.parentStyle ? this.parentStyle = e.style : this.parentStyle = e.parentStyle, void 0 === e.parentSize ? this.parentSize = e.size : this.parentSize = e.parentSize
    }

    n.prototype.extend = function (e) {
      var t = {
        style: this.style,
        size: this.size,
        color: this.color,
        parentStyle: this.style,
        parentSize: this.size,
        phantom: this.phantom,
        font: this.font
      };
      for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r]);
      return new n(t)
    }, n.prototype.withStyle = function (e) {
      return this.extend({ style: e })
    }, n.prototype.withSize = function (e) {
      return this.extend({ size: e })
    }, n.prototype.withColor = function (e) {
      return this.extend({ color: e })
    }, n.prototype.withPhantom = function () {
      return this.extend({ phantom: !0 })
    }, n.prototype.withFont = function (e) {
      return this.extend({ font: e || this.font })
    }, n.prototype.reset = function () {
      return this.extend({})
    };
    var i = {
      "katex-blue": "#6495ed",
      "katex-orange": "#ffa500",
      "katex-pink": "#ff00af",
      "katex-red": "#df0030",
      "katex-green": "#28ae7b",
      "katex-gray": "gray",
      "katex-purple": "#9d38bd",
      "katex-blueA": "#ccfaff",
      "katex-blueB": "#80f6ff",
      "katex-blueC": "#63d9ea",
      "katex-blueD": "#11accd",
      "katex-blueE": "#0c7f99",
      "katex-tealA": "#94fff5",
      "katex-tealB": "#26edd5",
      "katex-tealC": "#01d1c1",
      "katex-tealD": "#01a995",
      "katex-tealE": "#208170",
      "katex-greenA": "#b6ffb0",
      "katex-greenB": "#8af281",
      "katex-greenC": "#74cf70",
      "katex-greenD": "#1fab54",
      "katex-greenE": "#0d923f",
      "katex-goldA": "#ffd0a9",
      "katex-goldB": "#ffbb71",
      "katex-goldC": "#ff9c39",
      "katex-goldD": "#e07d10",
      "katex-goldE": "#a75a05",
      "katex-redA": "#fca9a9",
      "katex-redB": "#ff8482",
      "katex-redC": "#f9685d",
      "katex-redD": "#e84d39",
      "katex-redE": "#bc2612",
      "katex-maroonA": "#ffbde0",
      "katex-maroonB": "#ff92c6",
      "katex-maroonC": "#ed5fa6",
      "katex-maroonD": "#ca337c",
      "katex-maroonE": "#9e034e",
      "katex-purpleA": "#ddd7ff",
      "katex-purpleB": "#c6b9fc",
      "katex-purpleC": "#aa87ff",
      "katex-purpleD": "#7854ab",
      "katex-purpleE": "#543b78",
      "katex-mintA": "#f5f9e8",
      "katex-mintB": "#edf2df",
      "katex-mintC": "#e0e5cc",
      "katex-grayA": "#f6f7f7",
      "katex-grayB": "#f0f1f2",
      "katex-grayC": "#e3e5e6",
      "katex-grayD": "#d6d8da",
      "katex-grayE": "#babec2",
      "katex-grayF": "#888d93",
      "katex-grayG": "#626569",
      "katex-grayH": "#3b3e40",
      "katex-grayI": "#21242c",
      "katex-kaBlue": "#314453",
      "katex-kaGreen": "#71B307"
    };
    n.prototype.getColor = function () {
      return this.phantom ? "transparent" : i[this.color] || this.color
    }, t.exports = n
  }, {}],
  94: [function (e, t, r) {
    function n(e, t) {
      var r, i, o = "KaTeX parse error: " + e;
      if (t && t.lexer && t.start <= t.end) {
        var s = t.lexer.input;
        r = t.start, i = t.end, r === s.length ? o += " at end of input: " : o += " at position " + (r + 1) + ": ";
        var a = s.slice(r, i).replace(/[^]/g, "$&̲");
        o += (r > 15 ? "…" + s.slice(r - 15, r) : s.slice(0, r)) + a + (i + 15 < s.length ? s.slice(
              i,
              i + 15) + "…" : s.slice(i))
      }
      var u = new Error(o);
      return u.name = "ParseError", u.__proto__ = n.prototype, u.position = r, u
    }

    n.prototype.__proto__ = Error.prototype, t.exports = n
  }, {}],
  95: [function (e, t, r) {
    function n(e, t) {
      this.gullet = new a(e, t.macros), this.settings = t, this.leftrightDepth = 0
    }

    function i(e, t, r) {
      this.result = e, this.isFunction = t, this.token = r
    }

    var o = e("./functions"), s = e("./environments"), a = e("./MacroExpander"), u = e("./symbols"),
      c = e("./utils"), l = e("./unicodeRegexes").cjkRegex, h = e("./parseData"),
      p = e("./ParseError"), f = h.ParseNode;
    n.prototype.expect = function (e, t) {
      if (this.nextToken.text !== e)throw new p("Expected '" + e + "', got '" + this.nextToken.text + "'",
        this.nextToken);
      !1 !== t && this.consume()
    }, n.prototype.consume = function () {
      this.nextToken = this.gullet.get("math" === this.mode)
    }, n.prototype.switchMode = function (e) {
      this.gullet.unget(this.nextToken), this.mode = e, this.consume()
    }, n.prototype.parse = function () {
      return this.mode = "math", this.consume(), this.parseInput()
    }, n.prototype.parseInput = function () {
      var e = this.parseExpression(!1);
      return this.expect("EOF", !1), e
    };
    var d = ["}", "\\end", "\\right", "&", "\\\\", "\\cr"];
    n.prototype.parseExpression = function (e, t) {
      for (var r = []; ;) {
        var n = this.nextToken;
        if (-1 !== d.indexOf(n.text))break;
        if (t && n.text === t)break;
        if (e && o[n.text] && o[n.text].infix)break;
        var i = this.parseAtom();
        if (!i) {
          if (!this.settings.throwOnError && "\\" === n.text[0]) {
            var s = this.handleUnsupportedCmd();
            r.push(s);
            continue
          }
          break
        }
        r.push(i)
      }
      return this.handleInfixNodes(r)
    }, n.prototype.handleInfixNodes = function (e) {
      for (var t, r = -1, n = 0; n < e.length; n++) {
        var i = e[n];
        if ("infix" === i.type) {
          if (-1 !== r)throw new p("only one infix operator per group", i.value.token);
          r = n, t = i.value.replaceWith
        }
      }
      if (-1 !== r) {
        var o, s, a = e.slice(0, r), u = e.slice(r + 1);
        o = 1 === a.length && "ordgroup" === a[0].type ? a[0] : new f("ordgroup",
          a,
          this.mode), s = 1 === u.length && "ordgroup" === u[0].type ? u[0] : new f("ordgroup",
          u,
          this.mode);
        var c = this.callFunction(t, [o, s], null);
        return [new f(c.type, c, this.mode)]
      }
      return e
    };
    n.prototype.handleSupSubscript = function (e) {
      var t = this.nextToken, r = t.text;
      this.consume();
      var n = this.parseGroup();
      if (n) {
        if (n.isFunction) {
          if (o[n.result].greediness > 1)return this.parseFunction(n);
          throw new p("Got function '" + n.result + "' with no arguments as " + e, t)
        }
        return n.result
      }
      if (this.settings.throwOnError || "\\" !== this.nextToken.text[0])throw new p(
        "Expected group after '" + r + "'",
        t);
      return this.handleUnsupportedCmd()
    }, n.prototype.handleUnsupportedCmd = function () {
      for (var e = this.nextToken.text, t = [], r = 0; r < e.length; r++)t.push(new f("textord",
        e[r],
        "text"));
      var n = new f("text", { body: t, type: "text" }, this.mode), i = new f("color",
        { color: this.settings.errorColor, value: [n], type: "color" },
        this.mode);
      return this.consume(), i
    }, n.prototype.parseAtom = function () {
      var e = this.parseImplicitGroup();
      if ("text" === this.mode)return e;
      for (var t, r; ;) {
        var n = this.nextToken;
        if ("\\limits" === n.text || "\\nolimits" === n.text) {
          if (!e || "op" !== e.type)throw new p("Limit controls must follow a math operator", n);
          var i = "\\limits" === n.text;
          e.value.limits = i, e.value.alwaysHandleSupSub = !0, this.consume()
        } else if ("^" === n.text) {
          if (t)throw new p("Double superscript", n);
          t = this.handleSupSubscript("superscript")
        } else if ("_" === n.text) {
          if (r)throw new p("Double subscript", n);
          r = this.handleSupSubscript("subscript")
        } else {
          if ("'" !== n.text)break;
          var o = new f("textord", "\\prime", this.mode), s = [o];
          for (this.consume(); "'" === this.nextToken.text;)s.push(o), this.consume();
          t = new f("ordgroup", s, this.mode)
        }
      }
      return t || r ? new f("supsub", { base: e, sup: t, sub: r }, this.mode) : e
    };
    var b = ["\\tiny", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"],
      m = ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"];
    n.prototype.parseImplicitGroup = function () {
      var e = this.parseSymbol();
      if (null == e)return this.parseFunction();
      var t, r = e.result;
      if ("\\left" === r) {
        var n = this.parseFunction(e);
        ++this.leftrightDepth, t = this.parseExpression(!1), --this.leftrightDepth, this.expect(
          "\\right",
          !1);
        var i = this.parseFunction();
        return new f("leftright", { body: t, left: n.value.value, right: i.value.value }, this.mode)
      }
      if ("\\begin" === r) {
        var o = this.parseFunction(e), a = o.value.name;
        if (!s.hasOwnProperty(a))throw new p("No such environment: " + a, o.value.nameGroup);
        var u = s[a], l = this.parseArguments("\\begin{" + a + "}", u),
          h = { mode: this.mode, envName: a, parser: this, positions: l.pop() },
          d = u.handler(h, l);
        this.expect("\\end", !1);
        var v = this.nextToken, y = this.parseFunction();
        if (y.value.name !== a)throw new p("Mismatch: \\begin{" + a + "} matched by \\end{" + y.value.name + "}",
          v);
        return d.position = y.position, d
      }
      return c.contains(b, r) ? (t = this.parseExpression(!1), new f("sizing",
        { size: "size" + (c.indexOf(b, r) + 1), value: t },
        this.mode)) : c.contains(m, r) ? (t = this.parseExpression(!0), new f("styling",
        { style: r.slice(1, r.length - 5), value: t },
        this.mode)) : this.parseFunction(e)
    }, n.prototype.parseFunction = function (e) {
      if (e || (e = this.parseGroup()), e) {
        if (e.isFunction) {
          var t = e.result, r = o[t];
          if ("text" === this.mode && !r.allowedInText)throw new p("Can't use function '" + t + "' in text mode",
            e.token);
          var n = this.parseArguments(t, r), i = e.token, s = this.callFunction(t, n, n.pop(), i);
          return new f(s.type, s, this.mode)
        }
        return e.result
      }
      return null
    }, n.prototype.callFunction = function (e, t, r, n) {
      var i = { funcName: e, parser: this, positions: r, token: n };
      return o[e].handler(i, t)
    }, n.prototype.parseArguments = function (e, t) {
      var r = t.numArgs + t.numOptionalArgs;
      if (0 === r)return [[this.pos]];
      for (var n = t.greediness, s = [this.pos], a = [], u = 0; u < r; u++) {
        var c, l = this.nextToken, h = t.argTypes && t.argTypes[u];
        if (u < t.numOptionalArgs) {
          if (!(c = h ? this.parseGroupOfType(h, !0) : this.parseGroup(!0))) {
            a.push(null), s.push(this.pos);
            continue
          }
        } else if (!(c = h ? this.parseGroupOfType(h) : this.parseGroup())) {
          if (this.settings.throwOnError || "\\" !== this.nextToken.text[0])throw new p(
            "Expected group after '" + e + "'",
            l);
          c = new i(this.handleUnsupportedCmd(this.nextToken.text), !1)
        }
        var f;
        if (c.isFunction) {
          if (!(o[c.result].greediness > n))throw new p("Got function '" + c.result + "' as argument to '" + e + "'",
            l);
          f = this.parseFunction(c)
        } else f = c.result;
        a.push(f), s.push(this.pos)
      }
      return a.push(s), a
    }, n.prototype.parseGroupOfType = function (e, t) {
      var r = this.mode;
      if ("original" === e && (e = r), "color" === e)return this.parseColorGroup(t);
      if ("size" === e)return this.parseSizeGroup(t);
      if (this.switchMode(e), "text" === e)for (; " " === this.nextToken.text;)this.consume();
      var n = this.parseGroup(t);
      return this.switchMode(r), n
    }, n.prototype.parseStringGroup = function (e, t) {
      if (t && "[" !== this.nextToken.text)return null;
      var r = this.mode;
      this.mode = "text", this.expect(t ? "[" : "{");
      for (var n = "", i = this.nextToken, o = i; this.nextToken.text !== (t ? "]" : "}");) {
        if ("EOF" === this.nextToken.text)throw new p("Unexpected end of input in " + e,
          i.range(this.nextToken, n));
        n += (o = this.nextToken).text, this.consume()
      }
      return this.mode = r, this.expect(t ? "]" : "}"), i.range(o, n)
    }, n.prototype.parseRegexGroup = function (e, t) {
      var r = this.mode;
      this.mode = "text";
      for (var n = this.nextToken, i = n, o = ""; "EOF" !== this.nextToken.text && e.test(o + this.nextToken.text);)o += (i = this.nextToken).text, this.consume();
      if ("" === o)throw new p("Invalid " + t + ": '" + n.text + "'", n);
      return this.mode = r, n.range(i, o)
    }, n.prototype.parseColorGroup = function (e) {
      var t = this.parseStringGroup("color", e);
      if (!t)return null;
      var r = /^(#[a-z0-9]+|[a-z]+)$/i.exec(t.text);
      if (!r)throw new p("Invalid color: '" + t.text + "'", t);
      return new i(new f("color", r[0], this.mode), !1)
    }, n.prototype.parseSizeGroup = function (e) {
      var t;
      if (!(t = e || "{" === this.nextToken.text ? this.parseStringGroup("size",
          e) : this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2}$/,
          "size")))return null;
      var r = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
      if (!r)throw new p("Invalid size: '" + t.text + "'", t);
      var n = { number: +(r[1] + r[2]), unit: r[3] };
      if ("em" !== n.unit && "ex" !== n.unit && "mu" !== n.unit)throw new p("Invalid unit: '" + n.unit + "'",
        t);
      return new i(new f("color", n, this.mode), !1)
    }, n.prototype.parseGroup = function (e) {
      var t = this.nextToken;
      if (this.nextToken.text === (e ? "[" : "{")) {
        this.consume();
        var r = this.parseExpression(!1, e ? "]" : null), n = this.nextToken;
        return this.expect(e ? "]" : "}"), "text" === this.mode && this.formLigatures(r), new i(new f(
          "ordgroup",
          r,
          this.mode,
          t,
          n), !1)
      }
      return e ? null : this.parseSymbol()
    }, n.prototype.formLigatures = function (e) {
      var t, r = e.length - 1;
      for (t = 0; t < r; ++t) {
        var n = e[t], i = n.value;
        "-" === i && "-" === e[t + 1].value && (t + 1 < r && "-" === e[t + 2].value ? (e.splice(t,
          3,
          new f("textord", "---", "text", n, e[t + 2])), r -= 2) : (e.splice(t,
          2,
          new f("textord",
            "--",
            "text",
            n,
            e[t + 1])), r -= 1)), "'" !== i && "`" !== i || e[t + 1].value !== i || (e.splice(t,
          2,
          new f("textord", i + i, "text", n, e[t + 1])), r -= 1)
      }
    }, n.prototype.parseSymbol = function () {
      var e = this.nextToken;
      return o[e.text] ? (this.consume(), new i(e.text,
        !0,
        e)) : u[this.mode][e.text] ? (this.consume(), new i(new f(u[this.mode][e.text].group,
        e.text,
        this.mode,
        e), !1, e)) : "text" === this.mode && l.test(e.text) ? (this.consume(), new i(new f(
        "textord",
        e.text,
        this.mode,
        e), !1, e)) : null
    }, n.prototype.ParseNode = f, t.exports = n
  }, {
    "./MacroExpander": 92,
    "./ParseError": 94,
    "./environments": 104,
    "./functions": 107,
    "./parseData": 109,
    "./symbols": 111,
    "./unicodeRegexes": 112,
    "./utils": 113
  }],
  96: [function (e, t, r) {
    function n(e, t) {
      return void 0 === e ? t : e
    }

    t.exports = function (e) {
      e = e || {}, this.displayMode = n(e.displayMode, !1), this.throwOnError = n(e.throwOnError,
        !0), this.errorColor = n(e.errorColor, "#cc0000"), this.macros = e.macros || {}
    }
  }, {}],
  97: [function (e, t, r) {
    function n(e, t, r, n) {
      this.id = e, this.size = t, this.cramped = n, this.sizeMultiplier = r, this.metrics = s[t > 0 ? t - 1 : 0]
    }

    var i, o = e("./fontMetrics.js").sigmas, s = [{}, {}, {}];
    for (var a in o)if (o.hasOwnProperty(a))for (i = 0; i < 3; i++)s[i][a] = o[a][i];
    for (i = 0; i < 3; i++)s[i].emPerEx = o.xHeight[i] / o.quad[i];
    n.prototype.sup = function () {
      return l[h[this.id]]
    }, n.prototype.sub = function () {
      return l[p[this.id]]
    }, n.prototype.fracNum = function () {
      return l[f[this.id]]
    }, n.prototype.fracDen = function () {
      return l[d[this.id]]
    }, n.prototype.cramp = function () {
      return l[b[this.id]]
    }, n.prototype.cls = function () {
      return u[this.size] + (this.cramped ? " cramped" : " uncramped")
    }, n.prototype.reset = function () {
      return c[this.size]
    }, n.prototype.isTight = function () {
      return this.size >= 2
    };
    var u = ["displaystyle textstyle", "textstyle", "scriptstyle", "scriptscriptstyle"],
      c = ["reset-textstyle", "reset-textstyle", "reset-scriptstyle", "reset-scriptscriptstyle"],
      l = [new n(0, 0, 1, !1), new n(1, 0, 1, !0), new n(2, 1, 1, !1), new n(3, 1, 1, !0), new n(4,
        2,
        .7,
        !1), new n(5, 2, .7, !0), new n(6, 3, .5, !1), new n(7, 3, .5, !0)],
      h = [4, 5, 4, 5, 6, 7, 6, 7], p = [5, 5, 5, 5, 7, 7, 7, 7], f = [2, 3, 4, 5, 6, 7, 6, 7],
      d = [3, 3, 5, 5, 7, 7, 7, 7], b = [1, 1, 3, 3, 5, 5, 7, 7];
    t.exports = { DISPLAY: l[0], TEXT: l[2], SCRIPT: l[4], SCRIPTSCRIPT: l[6] }
  }, { "./fontMetrics.js": 105 }],
  98: [function (e, t, r) {
    var n = e("./domTree"), i = e("./fontMetrics"), o = e("./symbols"), s = e("./utils"),
      a = ["\\Gamma", "\\Delta", "\\Theta", "\\Lambda", "\\Xi", "\\Pi", "\\Sigma", "\\Upsilon", "\\Phi", "\\Psi", "\\Omega"],
      u = ["ı", "ȷ", "£"], c = function (e, t, r, s, a) {
        o[r][e] && o[r][e].replace && (e = o[r][e].replace);
        var u, c = i.getCharacterMetrics(e, t);
        if (c) {
          var l = c.italic;
          "text" === r && (l = 0), u = new n.symbolNode(e, c.height, c.depth, l, c.skew, a)
        } else"undefined" != typeof console && console.warn("No character metrics for '" + e + "' in style '" + t + "'"), u = new n.symbolNode(
          e,
          0,
          0,
          0,
          0,
          a);
        return s && (s.style.isTight() && u.classes.push("mtight"), s.getColor() && (u.style.color = s.getColor())), u
      }, l = function (e, t, r, n, i) {
        if ("mathord" === i)return h(e, t, r, n);
        if ("textord" === i)return c(e, "Main-Regular", t, r, n.concat(["mathrm"]));
        throw new Error("unexpected type: " + i + " in mathDefault")
      }, h = function (e, t, r, n) {
        return /[0-9]/.test(e.charAt(0)) || s.contains(u, e) || s.contains(a, e) ? c(e,
          "Main-Italic",
          t,
          r,
          n.concat(["mainit"])) : c(e, "Math-Italic", t, r, n.concat(["mathit"]))
      }, p = function (e) {
        var t = 0, r = 0, n = 0;
        if (e.children)for (var i = 0; i < e.children.length; i++)e.children[i].height > t && (t = e.children[i].height), e.children[i].depth > r && (r = e.children[i].depth), e.children[i].maxFontSize > n && (n = e.children[i].maxFontSize);
        e.height = t, e.depth = r, e.maxFontSize = n
      }, f = function (e, t, r) {
        var i = new n.span(e, t, r);
        return p(i), i
      }, d = function (e, t) {
        var r = f([], [new n.symbolNode("​")]);
        return r.style.fontSize = t / e.style.sizeMultiplier + "em", f(["fontsize-ensurer", "reset-" + e.size, "size5"],
          [r])
      }, b = {
        size1: .5,
        size2: .7,
        size3: .8,
        size4: .9,
        size5: 1,
        size6: 1.2,
        size7: 1.44,
        size8: 1.73,
        size9: 2.07,
        size10: 2.49
      }, m = {
        "\\qquad": { size: "2em", className: "qquad" },
        "\\quad": { size: "1em", className: "quad" },
        "\\enspace": { size: "0.5em", className: "enspace" },
        "\\;": { size: "0.277778em", className: "thickspace" },
        "\\:": { size: "0.22222em", className: "mediumspace" },
        "\\,": { size: "0.16667em", className: "thinspace" },
        "\\!": { size: "-0.16667em", className: "negativethinspace" }
      }, v = {
        mathbf: { variant: "bold", fontName: "Main-Bold" },
        mathrm: { variant: "normal", fontName: "Main-Regular" },
        textit: { variant: "italic", fontName: "Main-Italic" },
        mathbb: { variant: "double-struck", fontName: "AMS-Regular" },
        mathcal: { variant: "script", fontName: "Caligraphic-Regular" },
        mathfrak: { variant: "fraktur", fontName: "Fraktur-Regular" },
        mathscr: { variant: "script", fontName: "Script-Regular" },
        mathsf: { variant: "sans-serif", fontName: "SansSerif-Regular" },
        mathtt: { variant: "monospace", fontName: "Typewriter-Regular" }
      };
    t.exports = {
      fontMap: v, makeSymbol: c, mathsym: function (e, t, r, n) {
        return "\\" === e || "main" === o[t][e].font ? c(e, "Main-Regular", t, r, n) : c(e,
          "AMS-Regular",
          t,
          r,
          n.concat(["amsrm"]))
      }, makeSpan: f, makeFragment: function (e) {
        var t = new n.documentFragment(e);
        return p(t), t
      }, makeVList: function (e, t, r, i) {
        var o, s, a;
        if ("individualShift" === t) {
          var u = e;
          for (e = [u[0]], s = o = -u[0].shift - u[0].elem.depth, a = 1; a < u.length; a++) {
            var c = -u[a].shift - s - u[a].elem.depth,
              l = c - (u[a - 1].elem.height + u[a - 1].elem.depth);
            s += c, e.push({ type: "kern", size: l }), e.push(u[a])
          }
        } else if ("top" === t) {
          var h = r;
          for (a = 0; a < e.length; a++)"kern" === e[a].type ? h -= e[a].size : h -= e[a].elem.height + e[a].elem.depth;
          o = h
        } else o = "bottom" === t ? -r : "shift" === t ? -e[0].elem.depth - r : "firstBaseline" === t ? -e[0].elem.depth : 0;
        var p = 0;
        for (a = 0; a < e.length; a++)"elem" === e[a].type && (p = Math.max(p,
          e[a].elem.maxFontSize));
        var b = d(i, p), m = [];
        for (s = o, a = 0; a < e.length; a++)if ("kern" === e[a].type) s += e[a].size; else {
          var v = e[a].elem, y = -v.depth - s;
          s += v.height + v.depth;
          var g = f([], [b, v]);
          g.height -= y, g.depth += y, g.style.top = y + "em", m.push(g)
        }
        var w = f(["baseline-fix"], [b, new n.symbolNode("​")]);
        m.push(w);
        var x = f(["vlist"], m);
        return x.height = Math.max(s, x.height), x.depth = Math.max(-o, x.depth), x
      }, makeOrd: function (e, t, r) {
        var n = e.mode, a = e.value;
        o[n][a] && o[n][a].replace && (a = o[n][a].replace);
        var p = ["mord"], f = t.font;
        if (f) {
          if ("mathit" === f || s.contains(u, a))return h(a, n, t, p);
          var d = v[f].fontName;
          return i.getCharacterMetrics(a, d) ? c(a, d, n, t, p.concat([f])) : l(a, n, t, p, r)
        }
        return l(a, n, t, p, r)
      }, prependChildren: function (e, t) {
        e.children = t.concat(e.children), p(e)
      }, sizingMultiplier: b, spacingFunctions: m
    }
  }, { "./domTree": 103, "./fontMetrics": 105, "./symbols": 111, "./utils": 113 }],
  99: [function (e, t, r) {
    var n = e("./ParseError"), i = e("./Style"), o = e("./buildCommon"), s = e("./delimiter"),
      a = e("./domTree"), u = e("./fontMetrics"), c = e("./utils"), l = o.makeSpan,
      h = function (e) {
        return e instanceof a.span && "mspace" === e.classes[0]
      }, p = function (e) {
        return e && "mbin" === e.classes[0]
      }, f = function (e, t) {
        return e ? c.contains(["mbin", "mopen", "mrel", "mop", "mpunct"], e.classes[0]) : t
      }, d = function (e, t) {
        return e ? c.contains(["mrel", "mclose", "mpunct"], e.classes[0]) : t
      }, b = function (e, t, r) {
        for (var n = [], i = 0; i < e.length; i++) {
          var s = e[i], u = S(s, t);
          u instanceof a.documentFragment ? Array.prototype.push.apply(n, u.children) : n.push(u)
        }
        var c = null;
        for (i = 0; i < n.length; i++)h(n[i]) ? ((c = c || []).push(n[i]), n.splice(i,
          1), i--) : c && (n[i] instanceof a.symbolNode && (n[i] = l([].concat(n[i].classes),
            [n[i]])), o.prependChildren(n[i], c), c = null);
        for (c && Array.prototype.push.apply(n, c), i = 0; i < n.length; i++)p(n[i]) && (f(n[i - 1],
          r) || d(n[i + 1], r)) && (n[i].classes[0] = "mord");
        return n
      }, m = function (e) {
        if (e instanceof a.documentFragment) {
          if (e.children.length)return m(e.children[e.children.length - 1])
        } else if (c.contains(["mord", "mop", "mbin", "mrel", "mopen", "mclose", "mpunct", "minner"],
            e.classes[0]))return e.classes[0];
        return null
      }, v = function (e, t) {
        return !!e && ("op" === e.type ? e.value.limits && (t.style.size === i.DISPLAY.size || e.value.alwaysHandleSupSub) : "accent" === e.type ? g(
            e.value.base) : null)
      }, y = function (e) {
        return !!e && ("ordgroup" === e.type ? 1 === e.value.length ? y(e.value[0]) : e : "color" === e.type ? 1 === e.value.value.length ? y(
            e.value.value[0]) : e : "font" === e.type ? y(e.value.body) : e)
      }, g = function (e) {
        var t = y(e);
        return "mathord" === t.type || "textord" === t.type || "bin" === t.type || "rel" === t.type || "inner" === t.type || "open" === t.type || "close" === t.type || "punct" === t.type
      }, w = function (e, t) {
        return l(t.concat(["sizing", "reset-" + e.size, "size5", e.style.reset(), i.TEXT.cls(), "nulldelimiter"]))
      }, x = {};
    x.mathord = function (e, t) {
      return o.makeOrd(e, t, "mathord")
    }, x.textord = function (e, t) {
      return o.makeOrd(e, t, "textord")
    }, x.bin = function (e, t) {
      return o.mathsym(e.value, e.mode, t, ["mbin"])
    }, x.rel = function (e, t) {
      return o.mathsym(e.value, e.mode, t, ["mrel"])
    }, x.open = function (e, t) {
      return o.mathsym(e.value, e.mode, t, ["mopen"])
    }, x.close = function (e, t) {
      return o.mathsym(e.value, e.mode, t, ["mclose"])
    }, x.inner = function (e, t) {
      return o.mathsym(e.value, e.mode, t, ["minner"])
    }, x.punct = function (e, t) {
      return o.mathsym(e.value, e.mode, t, ["mpunct"])
    }, x.ordgroup = function (e, t) {
      return l(["mord", t.style.cls()], b(e.value, t.reset(), !0), t)
    }, x.text = function (e, t) {
      for (var r = t.withFont(e.value.style), n = b(e.value.body,
        r,
        !0), i = 0; i < n.length - 1; i++)n[i].tryCombine(n[i + 1]) && (n.splice(i + 1, 1), i--);
      return l(["mord", "text", r.style.cls()], n, r)
    }, x.color = function (e, t) {
      var r = b(e.value.value, t.withColor(e.value.color), !1);
      return new o.makeFragment(r)
    }, x.supsub = function (e, t) {
      if (v(e.value.base, t))return x[e.value.base.type](e, t);
      var r, n, s, c, h, p = S(e.value.base, t.reset()), f = t.style;
      e.value.sup && (h = t.withStyle(f.sup()), s = S(e.value.sup, h), r = l([f.reset(), f.sup()
      .cls()], [s], h)), e.value.sub && (h = t.withStyle(f.sub()), c = S(e.value.sub,
        h), n = l([f.reset(), f.sub().cls()], [c], h));
      var d, b;
      g(e.value.base) ? (d = 0, b = 0) : (d = p.height - f.metrics.supDrop, b = p.depth + f.metrics.subDrop);
      var y;
      y = f === i.DISPLAY ? f.metrics.sup1 : f.cramped ? f.metrics.sup3 : f.metrics.sup2;
      var w, _ = i.TEXT.sizeMultiplier * f.sizeMultiplier, O = .5 / u.metrics.ptPerEm / _ + "em";
      if (e.value.sup)if (e.value.sub) {
        d = Math.max(d, y, s.depth + .25 * f.metrics.xHeight), b = Math.max(b, f.metrics.sub2);
        var k = u.metrics.defaultRuleThickness;
        if (d - s.depth - (c.height - b) < 4 * k) {
          b = 4 * k - (d - s.depth) + c.height;
          var j = .8 * f.metrics.xHeight - (d - s.depth);
          j > 0 && (d += j, b -= j)
        }
        w = o.makeVList([{ type: "elem", elem: n, shift: b }, { type: "elem", elem: r, shift: -d }],
          "individualShift",
          null,
          t), p instanceof a.symbolNode && (w.children[0].style.marginLeft = -p.italic + "em"), w.children[0].style.marginRight = O, w.children[1].style.marginRight = O
      } else d = Math.max(d,
        y,
        s.depth + .25 * f.metrics.xHeight), (w = o.makeVList([{ type: "elem", elem: r }],
        "shift",
        -d,
        t)).children[0].style.marginRight = O; else b = Math.max(b,
        f.metrics.sub1,
        c.height - .8 * f.metrics.xHeight), (w = o.makeVList([{ type: "elem", elem: n }],
        "shift",
        b,
        t)).children[0].style.marginRight = O, p instanceof a.symbolNode && (w.children[0].style.marginLeft = -p.italic + "em");
      var T = m(p) || "mord";
      return l([T], [p, l(["msupsub"], [w])], t)
    }, x.genfrac = function (e, t) {
      var r = t.style;
      "display" === e.value.size ? r = i.DISPLAY : "text" === e.value.size && (r = i.TEXT);
      var n, a = r.fracNum(), c = r.fracDen();
      n = t.withStyle(a);
      var h = S(e.value.numer, n), p = l([r.reset(), a.cls()], [h], n);
      n = t.withStyle(c);
      var f, d = S(e.value.denom, n), b = l([r.reset(), c.cls()], [d], n);
      f = e.value.hasBarLine ? u.metrics.defaultRuleThickness / t.style.sizeMultiplier : 0;
      var m, v, y;
      r.size === i.DISPLAY.size ? (m = r.metrics.num1, v = f > 0 ? 3 * f : 7 * u.metrics.defaultRuleThickness, y = r.metrics.denom1) : (f > 0 ? (m = r.metrics.num2, v = f) : (m = r.metrics.num3, v = 3 * u.metrics.defaultRuleThickness), y = r.metrics.denom2);
      var g;
      if (0 === f) {
        var x = m - h.depth - (d.height - y);
        x < v && (m += .5 * (v - x), y += .5 * (v - x)), g = o.makeVList([{
          type: "elem",
          elem: b,
          shift: y
        }, { type: "elem", elem: p, shift: -m }], "individualShift", null, t)
      } else {
        var _ = r.metrics.axisHeight;
        m - h.depth - (_ + .5 * f) < v && (m += v - (m - h.depth - (_ + .5 * f))), _ - .5 * f - (d.height - y) < v && (y += v - (_ - .5 * f - (d.height - y)));
        var O = l([t.style.reset(), i.TEXT.cls(), "frac-line"]);
        O.height = f;
        var k = -(_ - .5 * f);
        g = o.makeVList([{ type: "elem", elem: b, shift: y }, {
          type: "elem",
          elem: O,
          shift: k
        }, { type: "elem", elem: p, shift: -m }], "individualShift", null, t)
      }
      g.height *= r.sizeMultiplier / t.style.sizeMultiplier, g.depth *= r.sizeMultiplier / t.style.sizeMultiplier;
      var j;
      j = r.size === i.DISPLAY.size ? r.metrics.delim1 : r.metrics.delim2;
      var T, E;
      return T = null == e.value.leftDelim ? w(t, ["mopen"]) : s.customSizedDelim(e.value.leftDelim,
        j,
        !0,
        t.withStyle(r),
        e.mode,
        ["mopen"]), E = null == e.value.rightDelim ? w(t,
        ["mclose"]) : s.customSizedDelim(e.value.rightDelim,
        j,
        !0,
        t.withStyle(r),
        e.mode,
        ["mclose"]), l(["mord", t.style.reset(), r.cls()], [T, l(["mfrac"], [g]), E], t)
    };
    var _ = function (e, t) {
      var r = e.number;
      return "ex" === e.unit ? r *= t.metrics.emPerEx : "mu" === e.unit && (r /= 18), r
    };
    x.array = function (e, t) {
      var r, i, s = e.value.body.length, a = 0, h = new Array(s), p = t.style,
        f = 1 / u.metrics.ptPerEm, d = 5 * f, b = 12 * f, m = c.deflt(e.value.arraystretch, 1) * b,
        v = .7 * m, y = .3 * m, g = 0;
      for (r = 0; r < e.value.body.length; ++r) {
        var w = e.value.body[r], x = v, O = y;
        a < w.length && (a = w.length);
        var k = new Array(w.length);
        for (i = 0; i < w.length; ++i) {
          var j = S(w[i], t);
          O < j.depth && (O = j.depth), x < j.height && (x = j.height), k[i] = j
        }
        var T = 0;
        e.value.rowGaps[r] && (T = _(e.value.rowGaps[r].value,
          p)) > 0 && (O < (T += y) && (O = T), T = 0), k.height = x, k.depth = O, g += x, k.pos = g, g += O + T, h[r] = k
      }
      var E, M, A = g / 2 + p.metrics.axisHeight, P = e.value.cols || [], C = [];
      for (i = 0, M = 0; i < a || M < P.length; ++i, ++M) {
        for (var N = P[M] || {}, R = !0; "separator" === N.type;) {
          if (R || ((E = l(["arraycolsep"],
              [])).style.width = u.metrics.doubleRuleSep + "em", C.push(E)), "|" !== N.separator)throw new n(
            "Invalid separator type: " + N.separator);
          var z = l(["vertical-separator"], []);
          z.style.height = g + "em", z.style.verticalAlign = -(g - A) + "em", C.push(z), N = P[++M] || {}, R = !1
        }
        if (!(i >= a)) {
          var F;
          (i > 0 || e.value.hskipBeforeAndAfter) && 0 !== (F = c.deflt(N.pregap,
            d)) && ((E = l(["arraycolsep"], [])).style.width = F + "em", C.push(E));
          var q = [];
          for (r = 0; r < s; ++r) {
            var I = h[r], L = I[i];
            if (L) {
              var D = I.pos - A;
              L.depth = I.depth, L.height = I.height, q.push({ type: "elem", elem: L, shift: D })
            }
          }
          q = o.makeVList(q, "individualShift", null, t), q = l(["col-align-" + (N.align || "c")],
            [q]), C.push(q), (i < a - 1 || e.value.hskipBeforeAndAfter) && 0 !== (F = c.deflt(N.postgap,
            d)) && ((E = l(["arraycolsep"], [])).style.width = F + "em", C.push(E))
        }
      }
      return h = l(["mtable"], C), l(["mord"], [h], t)
    }, x.spacing = function (e, t) {
      return "\\ " === e.value || "\\space" === e.value || " " === e.value || "~" === e.value ? "text" === e.mode ? o.makeOrd(
        e,
        t,
        "textord") : l(["mspace"],
        [o.mathsym(e.value, e.mode, t)],
        t) : l(["mspace", o.spacingFunctions[e.value].className], [], t)
    }, x.llap = function (e, t) {
      var r = l(["inner"], [S(e.value.body, t.reset())]), n = l(["fix"], []);
      return l(["mord", "llap", t.style.cls()], [r, n], t)
    }, x.rlap = function (e, t) {
      var r = l(["inner"], [S(e.value.body, t.reset())]), n = l(["fix"], []);
      return l(["mord", "rlap", t.style.cls()], [r, n], t)
    }, x.op = function (e, t) {
      var r, n, s = !1;
      "supsub" === e.type && (r = e.value.sup, n = e.value.sub, e = e.value.base, s = !0);
      var a = t.style, h = ["\\smallint"], p = !1;
      a.size === i.DISPLAY.size && e.value.symbol && !c.contains(h, e.value.body) && (p = !0);
      var f, d = 0, m = 0;
      if (e.value.symbol) {
        var v = p ? "Size2-Regular" : "Size1-Regular";
        d = ((f = o.makeSymbol(e.value.body,
            v,
            "math",
            t,
            ["mop", "op-symbol", p ? "large-op" : "small-op"])).height - f.depth) / 2 - a.metrics.axisHeight * a.sizeMultiplier, m = f.italic
      } else if (e.value.value) {
        var y = b(e.value.value, t, !0);
        f = l(["mop"], y, t)
      } else {
        for (var g = [], w = 1; w < e.value.body.length; w++)g.push(o.mathsym(e.value.body[w],
          e.mode));
        f = l(["mop"], g, t)
      }
      if (s) {
        f = l([], [f]);
        var x, _, O, k, j;
        if (r) {
          j = t.withStyle(a.sup());
          var T = S(r, j);
          x = l([a.reset(), a.sup().cls()], [T], j), _ = Math.max(u.metrics.bigOpSpacing1,
            u.metrics.bigOpSpacing3 - T.depth)
        }
        if (n) {
          j = t.withStyle(a.sub());
          var E = S(n, j);
          O = l([a.reset(), a.sub().cls()], [E], j), k = Math.max(u.metrics.bigOpSpacing2,
            u.metrics.bigOpSpacing4 - E.height)
        }
        var M, A, P;
        if (r)if (n) {
          if (!r && !n)return f;
          P = u.metrics.bigOpSpacing5 + O.height + O.depth + k + f.depth + d, (M = o.makeVList([{
              type: "kern",
              size: u.metrics.bigOpSpacing5
            }, { type: "elem", elem: O }, { type: "kern", size: k }, {
              type: "elem",
              elem: f
            }, { type: "kern", size: _ }, { type: "elem", elem: x }, {
              type: "kern",
              size: u.metrics.bigOpSpacing5
            }],
            "bottom",
            P,
            t)).children[0].style.marginLeft = -m + "em", M.children[2].style.marginLeft = m + "em"
        } else P = f.depth + d, (M = o.makeVList([{ type: "elem", elem: f }, {
            type: "kern",
            size: _
          }, { type: "elem", elem: x }, { type: "kern", size: u.metrics.bigOpSpacing5 }],
          "bottom",
          P,
          t)).children[1].style.marginLeft = m + "em"; else A = f.height - d, (M = o.makeVList([{
            type: "kern",
            size: u.metrics.bigOpSpacing5
          }, { type: "elem", elem: O }, { type: "kern", size: k }, { type: "elem", elem: f }],
          "top",
          A,
          t)).children[0].style.marginLeft = -m + "em";
        return l(["mop", "op-limits"], [M], t)
      }
      return e.value.symbol && (f.style.top = d + "em"), f
    }, x.mod = function (e, t) {
      var r = [];
      if ("bmod" === e.value.modType ? (t.style.isTight() || r.push(l(["mspace", "negativemediumspace"],
          [],
          t)), r.push(l(["mspace", "thickspace"],
          [],
          t))) : t.style.size === i.DISPLAY.size ? r.push(l(["mspace", "quad"],
          [],
          t)) : "mod" === e.value.modType ? r.push(l(["mspace", "twelvemuspace"],
          [],
          t)) : r.push(l(["mspace", "eightmuspace"],
          [],
          t)), "pod" !== e.value.modType && "pmod" !== e.value.modType || r.push(o.mathsym("(",
          e.mode)), "pod" !== e.value.modType) {
        var n = [o.mathsym("m", e.mode), o.mathsym("o", e.mode), o.mathsym("d", e.mode)];
        "bmod" === e.value.modType ? (r.push(l(["mbin"], n, t)), r.push(l(["mspace", "thickspace"],
          [],
          t)), t.style.isTight() || r.push(l(["mspace", "negativemediumspace"],
          [],
          t))) : (Array.prototype.push.apply(r, n), r.push(l(["mspace", "sixmuspace"], [], t)))
      }
      return e.value.value && Array.prototype.push.apply(r,
        b(e.value.value, t, !1)), "pod" !== e.value.modType && "pmod" !== e.value.modType || r.push(
        o.mathsym(")", e.mode)), o.makeFragment(r)
    }, x.katex = function (e, t) {
      var r = l(["k"], [o.mathsym("K", e.mode)], t), n = l(["a"], [o.mathsym("A", e.mode)], t);
      n.height = .75 * (n.height + .2), n.depth = .75 * (n.height - .2);
      var i = l(["t"], [o.mathsym("T", e.mode)], t), s = l(["e"], [o.mathsym("E", e.mode)], t);
      s.height = s.height - .2155, s.depth = s.depth + .2155;
      var a = l(["x"], [o.mathsym("X", e.mode)], t);
      return l(["mord", "katex-logo"], [r, n, i, s, a], t)
    }, x.overline = function (e, t) {
      var r = t.style, n = S(e.value.body, t.withStyle(r.cramp())),
        s = u.metrics.defaultRuleThickness / r.sizeMultiplier,
        a = l([r.reset(), i.TEXT.cls(), "overline-line"]);
      a.height = s, a.maxFontSize = 1;
      var c = o.makeVList([{ type: "elem", elem: n }, { type: "kern", size: 3 * s }, {
        type: "elem",
        elem: a
      }, { type: "kern", size: s }], "firstBaseline", null, t);
      return l(["mord", "overline"], [c], t)
    }, x.underline = function (e, t) {
      var r = t.style, n = S(e.value.body, t),
        s = u.metrics.defaultRuleThickness / r.sizeMultiplier,
        a = l([r.reset(), i.TEXT.cls(), "underline-line"]);
      a.height = s, a.maxFontSize = 1;
      var c = o.makeVList([{ type: "kern", size: s }, { type: "elem", elem: a }, {
        type: "kern",
        size: 3 * s
      }, { type: "elem", elem: n }], "top", n.height, t);
      return l(["mord", "underline"], [c], t)
    }, x.sqrt = function (e, t) {
      var r = t.style, n = S(e.value.body, t.withStyle(r.cramp())),
        a = u.metrics.defaultRuleThickness / r.sizeMultiplier,
        c = l([r.reset(), i.TEXT.cls(), "sqrt-line"], [], t);
      c.height = a, c.maxFontSize = 1;
      var h = a;
      r.id < i.TEXT.id && (h = r.metrics.xHeight);
      var p = a + h / 4, f = (n.height + n.depth) * r.sizeMultiplier + p + a,
        d = l(["sqrt-sign"], [s.customSizedDelim("\\surd", f, !1, t, e.mode)], t),
        b = d.height + d.depth - a;
      b > n.height + n.depth + p && (p = (p + b - n.height - n.depth) / 2);
      var m = -(n.height + p + a) + d.height;
      d.style.top = m + "em", d.height -= m, d.depth += m;
      var v;
      if (v = 0 === n.height && 0 === n.depth ? l() : o.makeVList([{
            type: "elem",
            elem: n
          }, { type: "kern", size: p }, { type: "elem", elem: c }, { type: "kern", size: a }],
          "firstBaseline",
          null,
          t), e.value.index) {
        var y = t.withStyle(i.SCRIPTSCRIPT), g = S(e.value.index, y),
          w = l([r.reset(), i.SCRIPTSCRIPT.cls()], [g], y),
          x = .6 * (Math.max(d.height, v.height) - Math.max(d.depth, v.depth)),
          _ = o.makeVList([{ type: "elem", elem: w }], "shift", -x, t), O = l(["root"], [_]);
        return l(["mord", "sqrt"], [O, d, v], t)
      }
      return l(["mord", "sqrt"], [d, v], t)
    }, x.sizing = function (e, t) {
      var r = b(e.value.value, t.withSize(e.value.size), !1), n = t.style,
        i = o.sizingMultiplier[e.value.size];
      i *= n.sizeMultiplier;
      for (var s = 0; s < r.length; s++) {
        var a = c.indexOf(r[s].classes, "sizing");
        a < 0 ? (r[s].classes.push("sizing",
          "reset-" + t.size,
          e.value.size,
          n.cls()), r[s].maxFontSize = i) : r[s].classes[a + 1] === "reset-" + e.value.size && (r[s].classes[a + 1] = "reset-" + t.size)
      }
      return o.makeFragment(r)
    }, x.styling = function (e, t) {
      for (var r = {
        display: i.DISPLAY,
        text: i.TEXT,
        script: i.SCRIPT,
        scriptscript: i.SCRIPTSCRIPT
      }[e.value.style], n = t.withStyle(r), s = b(e.value.value, n, !1), a = 0; a < s.length; a++) {
        var u = c.indexOf(s[a].classes, r.reset());
        u < 0 ? s[a].classes.push(t.style.reset(), r.cls()) : s[a].classes[u] = t.style.reset()
      }
      return new o.makeFragment(s)
    }, x.font = function (e, t) {
      var r = e.value.font;
      return S(e.value.body, t.withFont(r))
    }, x.delimsizing = function (e, t) {
      var r = e.value.value;
      return "." === r ? l([e.value.mclass]) : s.sizedDelim(r,
        e.value.size,
        t,
        e.mode,
        [e.value.mclass])
    }, x.leftright = function (e, t) {
      for (var r = b(e.value.body,
        t.reset(),
        !0), n = 0, i = 0, o = !1, a = 0; a < r.length; a++)r[a].isMiddle ? o = !0 : (n = Math.max(r[a].height,
        n), i = Math.max(r[a].depth, i));
      var u = t.style;
      n *= u.sizeMultiplier, i *= u.sizeMultiplier;
      var c;
      if (c = "." === e.value.left ? w(t, ["mopen"]) : s.leftRightDelim(e.value.left,
          n,
          i,
          t,
          e.mode,
          ["mopen"]), r.unshift(c), o)for (a = 1; a < r.length; a++)r[a].isMiddle && (r[a] = s.leftRightDelim(
        r[a].isMiddle.value,
        n,
        i,
        r[a].isMiddle.options,
        e.mode,
        []));
      var h;
      return h = "." === e.value.right ? w(t, ["mclose"]) : s.leftRightDelim(e.value.right,
        n,
        i,
        t,
        e.mode,
        ["mclose"]), r.push(h), l(["minner", u.cls()], r, t)
    }, x.middle = function (e, t) {
      var r;
      return "." === e.value.value ? r = w(t, []) : (r = s.sizedDelim(e.value.value,
        1,
        t,
        e.mode,
        [])).isMiddle = { value: e.value.value, options: t }, r
    }, x.rule = function (e, t) {
      var r = l(["mord", "rule"], [], t), n = t.style, i = 0;
      e.value.shift && (i = _(e.value.shift, n));
      var o = _(e.value.width, n), s = _(e.value.height, n);
      return i /= n.sizeMultiplier, o /= n.sizeMultiplier, s /= n.sizeMultiplier, r.style.borderRightWidth = o + "em", r.style.borderTopWidth = s + "em", r.style.bottom = i + "em", r.width = o, r.height = s + i, r.depth = -i, r
    }, x.kern = function (e, t) {
      var r = l(["mord", "rule"], [], t), n = t.style, i = 0;
      return e.value.dimension && (i = _(e.value.dimension,
        n)), i /= n.sizeMultiplier, r.style.marginLeft = i + "em", r
    }, x.accent = function (e, t) {
      var r, n = e.value.base, i = t.style;
      if ("supsub" === e.type) {
        var s = e;
        n = (e = s.value.base).value.base, s.value.base = n, r = S(s, t.reset())
      }
      var a, u = S(n, t.withStyle(i.cramp()));
      if (g(n)) {
        var c = y(n);
        a = S(c, t.withStyle(i.cramp())).skew
      } else a = 0;
      var h = Math.min(u.height, i.metrics.xHeight),
        p = o.makeSymbol(e.value.accent, "Main-Regular", "math", t);
      p.italic = 0;
      var f = "\\vec" === e.value.accent ? "accent-vec" : null,
        d = l(["accent-body", f], [l([], [p])]);
      (d = o.makeVList([{ type: "elem", elem: u }, { type: "kern", size: -h }, {
        type: "elem",
        elem: d
      }], "firstBaseline", null, t)).children[1].style.marginLeft = 2 * a + "em";
      var b = l(["mord", "accent"], [d], t);
      return r ? (r.children[0] = b, r.height = Math.max(b.height,
        r.height), r.classes[0] = "mord", r) : b
    }, x.phantom = function (e, t) {
      var r = b(e.value.value, t.withPhantom(), !1);
      return new o.makeFragment(r)
    }, x.mclass = function (e, t) {
      var r = b(e.value.value, t, !0);
      return l([e.value.mclass], r, t)
    };
    var S = function (e, t) {
      if (!e)return l();
      if (x[e.type]) {
        var r, i = x[e.type](e, t);
        return t.style !== t.parentStyle && (r = t.style.sizeMultiplier / t.parentStyle.sizeMultiplier, i.height *= r, i.depth *= r), t.size !== t.parentSize && (r = o.sizingMultiplier[t.size] / o.sizingMultiplier[t.parentSize], i.height *= r, i.depth *= r), i
      }
      throw new n("Got group of unknown type: '" + e.type + "'")
    };
    t.exports = function (e, t) {
      e = JSON.parse(JSON.stringify(e));
      var r = b(e, t, !0), n = l(["base", t.style.cls()], r, t), i = l(["strut"]),
        o = l(["strut", "bottom"]);
      i.style.height = n.height + "em", o.style.height = n.height + n.depth + "em", o.style.verticalAlign = -n.depth + "em";
      var s = l(["katex-html"], [i, o, n]);
      return s.setAttribute("aria-hidden", "true"), s
    }
  }, {
    "./ParseError": 94,
    "./Style": 97,
    "./buildCommon": 98,
    "./delimiter": 102,
    "./domTree": 103,
    "./fontMetrics": 105,
    "./utils": 113
  }],
  100: [function (e, t, r) {
    var n = e("./buildCommon"), i = e("./fontMetrics"), o = e("./mathMLTree"),
      s = e("./ParseError"), a = e("./symbols"), u = e("./utils"), c = n.makeSpan, l = n.fontMap,
      h = function (e, t) {
        return a[t][e] && a[t][e].replace && (e = a[t][e].replace), new o.TextNode(e)
      }, p = function (e, t) {
        var r = t.font;
        if (!r)return null;
        var n = e.mode;
        if ("mathit" === r)return "italic";
        var o = e.value;
        if (u.contains(["\\imath", "\\jmath"], o))return null;
        a[n][o] && a[n][o].replace && (o = a[n][o].replace);
        var s = l[r].fontName;
        return i.getCharacterMetrics(o, s) ? l[t.font].variant : null
      }, f = {};
    f.mathord = function (e, t) {
      var r = new o.MathNode("mi", [h(e.value, e.mode)]), n = p(e, t);
      return n && r.setAttribute("mathvariant", n), r
    }, f.textord = function (e, t) {
      var r, n = h(e.value, e.mode), i = p(e, t) || "normal";
      return /[0-9]/.test(e.value) ? (r = new o.MathNode("mn", [n]), t.font && r.setAttribute(
        "mathvariant",
        i)) : (r = new o.MathNode("mi", [n])).setAttribute("mathvariant", i), r
    }, f.bin = function (e) {
      return new o.MathNode("mo", [h(e.value, e.mode)])
    }, f.rel = function (e) {
      return new o.MathNode("mo", [h(e.value, e.mode)])
    }, f.open = function (e) {
      return new o.MathNode("mo", [h(e.value, e.mode)])
    }, f.close = function (e) {
      return new o.MathNode("mo", [h(e.value, e.mode)])
    }, f.inner = function (e) {
      return new o.MathNode("mo", [h(e.value, e.mode)])
    }, f.punct = function (e) {
      var t = new o.MathNode("mo", [h(e.value, e.mode)]);
      return t.setAttribute("separator", "true"), t
    }, f.ordgroup = function (e, t) {
      var r = d(e.value, t);
      return new o.MathNode("mrow", r)
    }, f.text = function (e, t) {
      var r = d(e.value.body, t);
      return new o.MathNode("mtext", r)
    }, f.color = function (e, t) {
      var r = d(e.value.value, t), n = new o.MathNode("mstyle", r);
      return n.setAttribute("mathcolor", e.value.color), n
    }, f.supsub = function (e, t) {
      var r = [b(e.value.base, t)];
      e.value.sub && r.push(b(e.value.sub, t)), e.value.sup && r.push(b(e.value.sup, t));
      var n;
      return n = e.value.sub ? e.value.sup ? "msubsup" : "msub" : "msup", new o.MathNode(n, r)
    }, f.genfrac = function (e, t) {
      var r = new o.MathNode("mfrac", [b(e.value.numer, t), b(e.value.denom, t)]);
      if (e.value.hasBarLine || r.setAttribute("linethickness",
          "0px"), null != e.value.leftDelim || null != e.value.rightDelim) {
        var n = [];
        if (null != e.value.leftDelim) {
          var i = new o.MathNode("mo", [new o.TextNode(e.value.leftDelim)]);
          i.setAttribute("fence", "true"), n.push(i)
        }
        if (n.push(r), null != e.value.rightDelim) {
          var s = new o.MathNode("mo", [new o.TextNode(e.value.rightDelim)]);
          s.setAttribute("fence", "true"), n.push(s)
        }
        return new o.MathNode("mrow", n)
      }
      return r
    }, f.array = function (e, t) {
      return new o.MathNode("mtable", e.value.body.map(function (e) {
        return new o.MathNode("mtr", e.map(function (e) {
          return new o.MathNode("mtd", [b(e, t)])
        }))
      }))
    }, f.sqrt = function (e, t) {
      return e.value.index ? new o.MathNode("mroot",
        [b(e.value.body, t), b(e.value.index, t)]) : new o.MathNode("msqrt", [b(e.value.body, t)])
    }, f.leftright = function (e, t) {
      var r = d(e.value.body, t);
      if ("." !== e.value.left) {
        var n = new o.MathNode("mo", [h(e.value.left, e.mode)]);
        n.setAttribute("fence", "true"), r.unshift(n)
      }
      if ("." !== e.value.right) {
        var i = new o.MathNode("mo", [h(e.value.right, e.mode)]);
        i.setAttribute("fence", "true"), r.push(i)
      }
      return new o.MathNode("mrow", r)
    }, f.middle = function (e, t) {
      var r = new o.MathNode("mo", [h(e.value.middle, e.mode)]);
      return r.setAttribute("fence", "true"), r
    }, f.accent = function (e, t) {
      var r = new o.MathNode("mo", [h(e.value.accent, e.mode)]),
        n = new o.MathNode("mover", [b(e.value.base, t), r]);
      return n.setAttribute("accent", "true"), n
    }, f.spacing = function (e) {
      var t;
      return "\\ " === e.value || "\\space" === e.value || " " === e.value || "~" === e.value ? t = new o.MathNode(
        "mtext",
        [new o.TextNode(" ")]) : (t = new o.MathNode("mspace")).setAttribute("width",
        n.spacingFunctions[e.value].size), t
    }, f.op = function (e, t) {
      return e.value.symbol ? new o.MathNode("mo",
        [h(e.value.body, e.mode)]) : e.value.value ? new o.MathNode("mo",
        d(e.value.value, t)) : new o.MathNode("mi", [new o.TextNode(e.value.body.slice(1))])
    }, f.mod = function (e, t) {
      var r = [];
      if ("pod" !== e.value.modType && "pmod" !== e.value.modType || r.push(new o.MathNode("mo",
          [h("(", e.mode)])), "pod" !== e.value.modType && r.push(new o.MathNode("mo",
          [h("mod", e.mode)])), e.value.value) {
        var n = new o.MathNode("mspace");
        n.setAttribute("width", "0.333333em"), r.push(n), r = r.concat(d(e.value.value, t))
      }
      return "pod" !== e.value.modType && "pmod" !== e.value.modType || r.push(new o.MathNode("mo",
        [h(")", e.mode)])), new o.MathNode("mo", r)
    }, f.katex = function (e) {
      return new o.MathNode("mtext", [new o.TextNode("KaTeX")])
    }, f.font = function (e, t) {
      var r = e.value.font;
      return b(e.value.body, t.withFont(r))
    }, f.delimsizing = function (e) {
      var t = [];
      "." !== e.value.value && t.push(h(e.value.value, e.mode));
      var r = new o.MathNode("mo", t);
      return "mopen" === e.value.mclass || "mclose" === e.value.mclass ? r.setAttribute("fence",
        "true") : r.setAttribute("fence", "false"), r
    }, f.styling = function (e, t) {
      var r = d(e.value.value, t), n = new o.MathNode("mstyle", r), i = {
        display: ["0", "true"],
        text: ["0", "false"],
        script: ["1", "false"],
        scriptscript: ["2", "false"]
      }[e.value.style];
      return n.setAttribute("scriptlevel", i[0]), n.setAttribute("displaystyle", i[1]), n
    }, f.sizing = function (e, t) {
      var r = d(e.value.value, t), i = new o.MathNode("mstyle", r);
      return i.setAttribute("mathsize", n.sizingMultiplier[e.value.size] + "em"), i
    }, f.overline = function (e, t) {
      var r = new o.MathNode("mo", [new o.TextNode("‾")]);
      r.setAttribute("stretchy", "true");
      var n = new o.MathNode("mover", [b(e.value.body, t), r]);
      return n.setAttribute("accent", "true"), n
    }, f.underline = function (e, t) {
      var r = new o.MathNode("mo", [new o.TextNode("‾")]);
      r.setAttribute("stretchy", "true");
      var n = new o.MathNode("munder", [b(e.value.body, t), r]);
      return n.setAttribute("accentunder", "true"), n
    }, f.rule = function (e) {
      return new o.MathNode("mrow")
    }, f.kern = function (e) {
      return new o.MathNode("mrow")
    }, f.llap = function (e, t) {
      var r = new o.MathNode("mpadded", [b(e.value.body, t)]);
      return r.setAttribute("lspace", "-1width"), r.setAttribute("width", "0px"), r
    }, f.rlap = function (e, t) {
      var r = new o.MathNode("mpadded", [b(e.value.body, t)]);
      return r.setAttribute("width", "0px"), r
    }, f.phantom = function (e, t) {
      var r = d(e.value.value, t);
      return new o.MathNode("mphantom", r)
    }, f.mclass = function (e, t) {
      var r = d(e.value.value, t);
      return new o.MathNode("mstyle", r)
    };
    var d = function (e, t) {
      for (var r = [], n = 0; n < e.length; n++) {
        var i = e[n];
        r.push(b(i, t))
      }
      return r
    }, b = function (e, t) {
      if (!e)return new o.MathNode("mrow");
      if (f[e.type])return f[e.type](e, t);
      throw new s("Got group of unknown type: '" + e.type + "'")
    };
    t.exports = function (e, t, r) {
      var n = d(e, r), i = new o.MathNode("mrow", n),
        s = new o.MathNode("annotation", [new o.TextNode(t)]);
      s.setAttribute("encoding", "application/x-tex");
      var a = new o.MathNode("semantics", [i, s]), u = new o.MathNode("math", [a]);
      return c(["katex-mathml"], [u])
    }
  }, {
    "./ParseError": 94,
    "./buildCommon": 98,
    "./fontMetrics": 105,
    "./mathMLTree": 108,
    "./symbols": 111,
    "./utils": 113
  }],
  101: [function (e, t, r) {
    var n = e("./buildHTML"), i = e("./buildMathML"), o = e("./buildCommon"), s = e("./Options"),
      a = e("./Settings"), u = e("./Style"), c = o.makeSpan;
    t.exports = function (e, t, r) {
      r = r || new a({});
      var o = u.TEXT;
      r.displayMode && (o = u.DISPLAY);
      var l = new s({ style: o, size: "size5" }), h = i(e, t, l), p = n(e, l),
        f = c(["katex"], [h, p]);
      return r.displayMode ? c(["katex-display"], [f]) : f
    }
  }, {
    "./Options": 93,
    "./Settings": 96,
    "./Style": 97,
    "./buildCommon": 98,
    "./buildHTML": 99,
    "./buildMathML": 100
  }],
  102: [function (e, t, r) {
    var n = e("./ParseError"), i = e("./Style"), o = e("./buildCommon"), s = e("./fontMetrics"),
      a = e("./symbols"), u = e("./utils"), c = o.makeSpan, l = function (e, t) {
        return a.math[e] && a.math[e].replace ? s.getCharacterMetrics(a.math[e].replace,
          t) : s.getCharacterMetrics(e, t)
      }, h = function (e, t, r, n) {
        return o.makeSymbol(e, "Size" + t + "-Regular", r, n)
      }, p = function (e, t, r, n) {
        var i = c((n = n || []).concat(["style-wrap", r.style.reset(), t.cls()]), [e], r),
          o = t.sizeMultiplier / r.style.sizeMultiplier;
        return i.height *= o, i.depth *= o, i.maxFontSize = t.sizeMultiplier, i
      }, f = function (e, t, r, n, i, s) {
        var a = o.makeSymbol(e, "Main-Regular", i, n), u = p(a, t, n, s);
        if (r) {
          var c = (1 - n.style.sizeMultiplier / t.sizeMultiplier) * n.style.metrics.axisHeight;
          u.style.top = c + "em", u.height -= c, u.depth += c
        }
        return u
      }, d = function (e, t, r, n, o, s) {
        var a = h(e, t, o, n), u = p(c(["delimsizing", "size" + t], [a], n), i.TEXT, n, s);
        if (r) {
          var l = (1 - n.style.sizeMultiplier) * n.style.metrics.axisHeight;
          u.style.top = l + "em", u.height -= l, u.depth += l
        }
        return u
      }, b = function (e, t, r) {
        var n;
        return "Size1-Regular" === t ? n = "delim-size1" : "Size4-Regular" === t && (n = "delim-size4"), {
          type: "elem",
          elem: c(["delimsizinginner", n], [c([], [o.makeSymbol(e, t, r)])])
        }
      }, m = function (e, t, r, n, s, a) {
        var u, h, f, d;
        u = f = d = e, h = null;
        var m = "Size1-Regular";
        "\\uparrow" === e ? f = d = "⏐" : "\\Uparrow" === e ? f = d = "‖" : "\\downarrow" === e ? u = f = "⏐" : "\\Downarrow" === e ? u = f = "‖" : "\\updownarrow" === e ? (u = "\\uparrow", f = "⏐", d = "\\downarrow") : "\\Updownarrow" === e ? (u = "\\Uparrow", f = "‖", d = "\\Downarrow") : "[" === e || "\\lbrack" === e ? (u = "⎡", f = "⎢", d = "⎣", m = "Size4-Regular") : "]" === e || "\\rbrack" === e ? (u = "⎤", f = "⎥", d = "⎦", m = "Size4-Regular") : "\\lfloor" === e ? (f = u = "⎢", d = "⎣", m = "Size4-Regular") : "\\lceil" === e ? (u = "⎡", f = d = "⎢", m = "Size4-Regular") : "\\rfloor" === e ? (f = u = "⎥", d = "⎦", m = "Size4-Regular") : "\\rceil" === e ? (u = "⎤", f = d = "⎥", m = "Size4-Regular") : "(" === e ? (u = "⎛", f = "⎜", d = "⎝", m = "Size4-Regular") : ")" === e ? (u = "⎞", f = "⎟", d = "⎠", m = "Size4-Regular") : "\\{" === e || "\\lbrace" === e ? (u = "⎧", h = "⎨", d = "⎩", f = "⎪", m = "Size4-Regular") : "\\}" === e || "\\rbrace" === e ? (u = "⎫", h = "⎬", d = "⎭", f = "⎪", m = "Size4-Regular") : "\\lgroup" === e ? (u = "⎧", d = "⎩", f = "⎪", m = "Size4-Regular") : "\\rgroup" === e ? (u = "⎫", d = "⎭", f = "⎪", m = "Size4-Regular") : "\\lmoustache" === e ? (u = "⎧", d = "⎭", f = "⎪", m = "Size4-Regular") : "\\rmoustache" === e ? (u = "⎫", d = "⎩", f = "⎪", m = "Size4-Regular") : "\\surd" === e && (u = "", d = "⎷", f = "", m = "Size4-Regular");
        var v = l(u, m), y = v.height + v.depth, g = l(f, m), w = g.height + g.depth, x = l(d, m),
          _ = x.height + x.depth, S = 0, O = 1;
        if (null !== h) {
          var k = l(h, m);
          S = k.height + k.depth, O = 2
        }
        var j = y + _ + S, T = Math.ceil((t - j) / (O * w)), E = j + T * O * w,
          M = n.style.metrics.axisHeight;
        r && (M *= n.style.sizeMultiplier);
        var A = E / 2 - M, P = [];
        P.push(b(d, m, s));
        var C;
        if (null === h)for (C = 0; C < T; C++)P.push(b(f, m, s)); else {
          for (C = 0; C < T; C++)P.push(b(f, m, s));
          for (P.push(b(h, m, s)), C = 0; C < T; C++)P.push(b(f, m, s))
        }
        P.push(b(u, m, s));
        var N = o.makeVList(P, "bottom", A, n);
        return p(c(["delimsizing", "mult"], [N], n), i.TEXT, n, a)
      },
      v = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "\\surd"],
      y = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache"],
      g = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"],
      w = [0, 1.2, 1.8, 2.4, 3], x = [{ type: "small", style: i.SCRIPTSCRIPT }, {
        type: "small",
        style: i.SCRIPT
      }, { type: "small", style: i.TEXT }, { type: "large", size: 1 }, {
        type: "large",
        size: 2
      }, { type: "large", size: 3 }, { type: "large", size: 4 }],
      _ = [{ type: "small", style: i.SCRIPTSCRIPT }, {
        type: "small",
        style: i.SCRIPT
      }, { type: "small", style: i.TEXT }, { type: "stack" }],
      S = [{ type: "small", style: i.SCRIPTSCRIPT }, {
        type: "small",
        style: i.SCRIPT
      }, { type: "small", style: i.TEXT }, { type: "large", size: 1 }, {
        type: "large",
        size: 2
      }, { type: "large", size: 3 }, { type: "large", size: 4 }, { type: "stack" }],
      O = function (e) {
        return "small" === e.type ? "Main-Regular" : "large" === e.type ? "Size" + e.size + "-Regular" : "stack" === e.type ? "Size4-Regular" : void 0
      }, k = function (e, t, r, n) {
        for (var i = Math.min(2, 3 - n.style.size); i < r.length && "stack" !== r[i].type; i++) {
          var o = l(e, O(r[i])), s = o.height + o.depth;
          if ("small" === r[i].type && (s *= r[i].style.sizeMultiplier), s > t)return r[i]
        }
        return r[r.length - 1]
      }, j = function (e, t, r, n, i, o) {
        "<" === e || "\\lt" === e ? e = "\\langle" : ">" !== e && "\\gt" !== e || (e = "\\rangle");
        var s;
        s = u.contains(g, e) ? x : u.contains(v, e) ? S : _;
        var a = k(e, t, s, n);
        return "small" === a.type ? f(e, a.style, r, n, i, o) : "large" === a.type ? d(e,
          a.size,
          r,
          n,
          i,
          o) : "stack" === a.type ? m(e, t, r, n, i, o) : void 0
      };
    t.exports = {
      sizedDelim: function (e, t, r, i, o) {
        if ("<" === e || "\\lt" === e ? e = "\\langle" : ">" !== e && "\\gt" !== e || (e = "\\rangle"), u.contains(
            v,
            e) || u.contains(g, e))return d(e, t, !1, r, i, o);
        if (u.contains(y, e))return m(e, w[t], !1, r, i, o);
        throw new n("Illegal delimiter: '" + e + "'")
      }, customSizedDelim: j, leftRightDelim: function (e, t, r, n, i, o) {
        var a = n.style.metrics.axisHeight * n.style.sizeMultiplier, u = 5 / s.metrics.ptPerEm,
          c = Math.max(t - a, r + a), l = Math.max(c / 500 * 901, 2 * c - u);
        return j(e, l, !0, n, i, o)
      }
    }
  }, {
    "./ParseError": 94,
    "./Style": 97,
    "./buildCommon": 98,
    "./fontMetrics": 105,
    "./symbols": 111,
    "./utils": 113
  }],
  103: [function (e, t, r) {
    function n(e, t, r) {
      this.classes = e || [], this.children = t || [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {}, this.attributes = {}, r && (r.style.isTight() && this.classes.push(
        "mtight"), r.getColor() && (this.style.color = r.getColor()))
    }

    function i(e) {
      this.children = e || [], this.height = 0, this.depth = 0, this.maxFontSize = 0
    }

    function o(e, t, r, n, i, o, a) {
      this.value = e || "", this.height = t || 0, this.depth = r || 0, this.italic = n || 0, this.skew = i || 0, this.classes = o || [], this.style = a || {}, this.maxFontSize = 0, s.cjkRegex.test(
        e) && (s.hangulRegex.test(e) ? this.classes.push("hangul_fallback") : this.classes.push(
        "cjk_fallback")), /[îïíì]/.test(this.value) && (this.value = c[this.value])
    }

    var s = e("./unicodeRegexes"), a = e("./utils"), u = function (e) {
      for (var t = (e = e.slice()).length - 1; t >= 0; t--)e[t] || e.splice(t, 1);
      return e.join(" ")
    };
    n.prototype.setAttribute = function (e, t) {
      this.attributes[e] = t
    }, n.prototype.tryCombine = function (e) {
      return !1
    }, n.prototype.toNode = function () {
      var e = document.createElement("span");
      e.className = u(this.classes);
      for (var t in this.style)Object.prototype.hasOwnProperty.call(this.style,
        t) && (e.style[t] = this.style[t]);
      for (var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,
        r) && e.setAttribute(r, this.attributes[r]);
      for (var n = 0; n < this.children.length; n++)e.appendChild(this.children[n].toNode());
      return e
    }, n.prototype.toMarkup = function () {
      var e = "<span";
      this.classes.length && (e += ' class="', e += a.escape(u(this.classes)), e += '"');
      var t = "";
      for (var r in this.style)this.style.hasOwnProperty(r) && (t += a.hyphenate(r) + ":" + this.style[r] + ";");
      t && (e += ' style="' + a.escape(t) + '"');
      for (var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,
        n) && (e += " " + n + '="', e += a.escape(this.attributes[n]), e += '"');
      e += ">";
      for (var i = 0; i < this.children.length; i++)e += this.children[i].toMarkup();
      return e += "</span>"
    }, i.prototype.toNode = function () {
      for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++)e.appendChild(
        this.children[t].toNode());
      return e
    }, i.prototype.toMarkup = function () {
      for (var e = "", t = 0; t < this.children.length; t++)e += this.children[t].toMarkup();
      return e
    };
    var c = { "î": "ı̂", "ï": "ı̈", "í": "ı́", "ì": "ı̀" };
    o.prototype.tryCombine = function (e) {
      if (!e || !(e instanceof o) || this.italic > 0 || u(this.classes) !== u(e.classes) || this.skew !== e.skew || this.maxFontSize !== e.maxFontSize)return !1;
      for (var t in this.style)if (this.style.hasOwnProperty(t) && this.style[t] !== e.style[t])return !1;
      for (t in e.style)if (e.style.hasOwnProperty(t) && this.style[t] !== e.style[t])return !1;
      return this.value += e.value, this.height = Math.max(this.height,
        e.height), this.depth = Math.max(this.depth, e.depth), this.italic = e.italic, !0
    }, o.prototype.toNode = function () {
      var e = document.createTextNode(this.value), t = null;
      this.italic > 0 && ((t = document.createElement("span")).style.marginRight = this.italic + "em"), this.classes.length > 0 && ((t = t || document.createElement(
          "span")).className = u(this.classes));
      for (var r in this.style)this.style.hasOwnProperty(r) && ((t = t || document.createElement(
          "span")).style[r] = this.style[r]);
      return t ? (t.appendChild(e), t) : e
    }, o.prototype.toMarkup = function () {
      var e = !1, t = "<span";
      this.classes.length && (e = !0, t += ' class="', t += a.escape(u(this.classes)), t += '"');
      var r = "";
      this.italic > 0 && (r += "margin-right:" + this.italic + "em;");
      for (var n in this.style)this.style.hasOwnProperty(n) && (r += a.hyphenate(n) + ":" + this.style[n] + ";");
      r && (e = !0, t += ' style="' + a.escape(r) + '"');
      var i = a.escape(this.value);
      return e ? (t += ">", t += i, t += "</span>") : i
    }, t.exports = { span: n, documentFragment: i, symbolNode: o }
  }, { "./unicodeRegexes": 112, "./utils": 113 }],
  104: [function (e, t, r) {
    function n(e, t) {
      for (var r = [], n = [r], i = []; ;) {
        var o = e.parseExpression(!1, null);
        r.push(new u("ordgroup", o, e.mode));
        var a = e.nextToken.text;
        if ("&" === a) e.consume(); else {
          if ("\\end" === a)break;
          if ("\\\\" !== a && "\\cr" !== a)throw new s("Expected & or \\\\ or \\end", e.nextToken);
          var c = e.parseFunction();
          i.push(c.value.size), r = [], n.push(r)
        }
      }
      return t.body = n, t.rowGaps = i, new u(t.type, t, e.mode)
    }

    function i(e, r, n) {
      "string" == typeof e && (e = [e]), "number" == typeof r && (r = { numArgs: r });
      for (var i = {
        numArgs: r.numArgs || 0,
        argTypes: r.argTypes,
        greediness: 1,
        allowedInText: !!r.allowedInText,
        numOptionalArgs: r.numOptionalArgs || 0,
        handler: n
      }, o = 0; o < e.length; ++o)t.exports[e[o]] = i
    }

    var o = e("./parseData"), s = e("./ParseError"), a = e("./Style"), u = o.ParseNode;
    i("array", { numArgs: 1 }, function (e, t) {
      var r = t[0], i = {
        type: "array", cols: (r = r.value.map ? r.value : [r]).map(function (e) {
          var t = e.value;
          if (-1 !== "lcr".indexOf(t))return { type: "align", align: t };
          if ("|" === t)return { type: "separator", separator: "|" };
          throw new s("Unknown column alignment: " + e.value, e)
        }), hskipBeforeAndAfter: !0
      };
      return i = n(e.parser, i)
    }), i(["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix"], {}, function (e) {
      var t = {
        matrix: null,
        pmatrix: ["(", ")"],
        bmatrix: ["[", "]"],
        Bmatrix: ["\\{", "\\}"],
        vmatrix: ["|", "|"],
        Vmatrix: ["\\Vert", "\\Vert"]
      }[e.envName], r = { type: "array", hskipBeforeAndAfter: !1 };
      return r = n(e.parser, r), t && (r = new u("leftright",
        { body: [r], left: t[0], right: t[1] },
        e.mode)), r
    }), i("cases", {}, function (e) {
      var t = {
        type: "array",
        arraystretch: 1.2,
        cols: [{
          type: "align",
          align: "l",
          pregap: 0,
          postgap: a.TEXT.metrics.quad
        }, { type: "align", align: "l", pregap: 0, postgap: 0 }]
      };
      return t = n(e.parser, t), t = new u("leftright",
        { body: [t], left: "\\{", right: "." },
        e.mode)
    }), i("aligned", {}, function (e) {
      var t = { type: "array", cols: [] };
      t = n(e.parser, t);
      var r = new u("ordgroup", [], e.mode), i = 0;
      t.value.body.forEach(function (e) {
        var t;
        for (t = 1; t < e.length; t += 2)e[t].value.unshift(r);
        i < e.length && (i = e.length)
      });
      for (var o = 0; o < i; ++o) {
        var s = "r", a = 0;
        o % 2 == 1 ? s = "l" : o > 0 && (a = 2), t.value.cols[o] = {
          type: "align",
          align: s,
          pregap: a,
          postgap: 0
        }
      }
      return t
    })
  }, { "./ParseError": 94, "./Style": 97, "./parseData": 109 }],
  105: [function (e, t, r) {
    e("./Style");
    var n = e("./unicodeRegexes").cjkRegex, i = {
      slant: [.25, .25, .25],
      space: [0, 0, 0],
      stretch: [0, 0, 0],
      shrink: [0, 0, 0],
      xHeight: [.431, .431, .431],
      quad: [1, 1.171, 1.472],
      extraSpace: [0, 0, 0],
      num1: [.677, .732, .925],
      num2: [.394, .384, .387],
      num3: [.444, .471, .504],
      denom1: [.686, .752, 1.025],
      denom2: [.345, .344, .532],
      sup1: [.413, .503, .504],
      sup2: [.363, .431, .404],
      sup3: [.289, .286, .294],
      sub1: [.15, .143, .2],
      sub2: [.247, .286, .4],
      supDrop: [.386, .353, .494],
      subDrop: [.05, .071, .1],
      delim1: [2.39, 1.7, 1.98],
      delim2: [1.01, 1.157, 1.42],
      axisHeight: [.25, .25, .25]
    }, o = {
      defaultRuleThickness: .04,
      bigOpSpacing1: .111,
      bigOpSpacing2: .166,
      bigOpSpacing3: .2,
      bigOpSpacing4: .6,
      bigOpSpacing5: .1,
      ptPerEm: 10,
      doubleRuleSep: .2
    }, s = e("./fontMetricsData"), a = {
      "À": "A",
      "Á": "A",
      "Â": "A",
      "Ã": "A",
      "Ä": "A",
      "Å": "A",
      "Æ": "A",
      "Ç": "C",
      "È": "E",
      "É": "E",
      "Ê": "E",
      "Ë": "E",
      "Ì": "I",
      "Í": "I",
      "Î": "I",
      "Ï": "I",
      "Ð": "D",
      "Ñ": "N",
      "Ò": "O",
      "Ó": "O",
      "Ô": "O",
      "Õ": "O",
      "Ö": "O",
      "Ø": "O",
      "Ù": "U",
      "Ú": "U",
      "Û": "U",
      "Ü": "U",
      "Ý": "Y",
      "Þ": "o",
      "ß": "B",
      "à": "a",
      "á": "a",
      "â": "a",
      "ã": "a",
      "ä": "a",
      "å": "a",
      "æ": "a",
      "ç": "c",
      "è": "e",
      "é": "e",
      "ê": "e",
      "ë": "e",
      "ì": "i",
      "í": "i",
      "î": "i",
      "ï": "i",
      "ð": "d",
      "ñ": "n",
      "ò": "o",
      "ó": "o",
      "ô": "o",
      "õ": "o",
      "ö": "o",
      "ø": "o",
      "ù": "u",
      "ú": "u",
      "û": "u",
      "ü": "u",
      "ý": "y",
      "þ": "o",
      "ÿ": "y",
      "А": "A",
      "Б": "B",
      "В": "B",
      "Г": "F",
      "Д": "A",
      "Е": "E",
      "Ж": "K",
      "З": "3",
      "И": "N",
      "Й": "N",
      "К": "K",
      "Л": "N",
      "М": "M",
      "Н": "H",
      "О": "O",
      "П": "N",
      "Р": "P",
      "С": "C",
      "Т": "T",
      "У": "y",
      "Ф": "O",
      "Х": "X",
      "Ц": "U",
      "Ч": "h",
      "Ш": "W",
      "Щ": "W",
      "Ъ": "B",
      "Ы": "X",
      "Ь": "B",
      "Э": "3",
      "Ю": "X",
      "Я": "R",
      "а": "a",
      "б": "b",
      "в": "a",
      "г": "r",
      "д": "y",
      "е": "e",
      "ж": "m",
      "з": "e",
      "и": "n",
      "й": "n",
      "к": "n",
      "л": "n",
      "м": "m",
      "н": "n",
      "о": "o",
      "п": "n",
      "р": "p",
      "с": "c",
      "т": "o",
      "у": "y",
      "ф": "b",
      "х": "x",
      "ц": "n",
      "ч": "n",
      "ш": "w",
      "щ": "w",
      "ъ": "a",
      "ы": "m",
      "ь": "a",
      "э": "e",
      "ю": "m",
      "я": "r"
    };
    t.exports = {
      metrics: o, sigmas: i, getCharacterMetrics: function (e, t) {
        var r = e.charCodeAt(0);
        e[0] in a ? r = a[e[0]].charCodeAt(0) : n.test(e[0]) && (r = "M".charCodeAt(0));
        var i = s[t][r];
        if (i)return { depth: i[0], height: i[1], italic: i[2], skew: i[3], width: i[4] }
      }
    }
  }, { "./Style": 97, "./fontMetricsData": 106, "./unicodeRegexes": 112 }],
  106: [function (e, t, r) {
    t.exports = {
      "AMS-Regular": {
        65: [0, .68889, 0, 0],
        66: [0, .68889, 0, 0],
        67: [0, .68889, 0, 0],
        68: [0, .68889, 0, 0],
        69: [0, .68889, 0, 0],
        70: [0, .68889, 0, 0],
        71: [0, .68889, 0, 0],
        72: [0, .68889, 0, 0],
        73: [0, .68889, 0, 0],
        74: [.16667, .68889, 0, 0],
        75: [0, .68889, 0, 0],
        76: [0, .68889, 0, 0],
        77: [0, .68889, 0, 0],
        78: [0, .68889, 0, 0],
        79: [.16667, .68889, 0, 0],
        80: [0, .68889, 0, 0],
        81: [.16667, .68889, 0, 0],
        82: [0, .68889, 0, 0],
        83: [0, .68889, 0, 0],
        84: [0, .68889, 0, 0],
        85: [0, .68889, 0, 0],
        86: [0, .68889, 0, 0],
        87: [0, .68889, 0, 0],
        88: [0, .68889, 0, 0],
        89: [0, .68889, 0, 0],
        90: [0, .68889, 0, 0],
        107: [0, .68889, 0, 0],
        165: [0, .675, .025, 0],
        174: [.15559, .69224, 0, 0],
        240: [0, .68889, 0, 0],
        295: [0, .68889, 0, 0],
        710: [0, .825, 0, 0],
        732: [0, .9, 0, 0],
        770: [0, .825, 0, 0],
        771: [0, .9, 0, 0],
        989: [.08167, .58167, 0, 0],
        1008: [0, .43056, .04028, 0],
        8245: [0, .54986, 0, 0],
        8463: [0, .68889, 0, 0],
        8487: [0, .68889, 0, 0],
        8498: [0, .68889, 0, 0],
        8502: [0, .68889, 0, 0],
        8503: [0, .68889, 0, 0],
        8504: [0, .68889, 0, 0],
        8513: [0, .68889, 0, 0],
        8592: [-.03598, .46402, 0, 0],
        8594: [-.03598, .46402, 0, 0],
        8602: [-.13313, .36687, 0, 0],
        8603: [-.13313, .36687, 0, 0],
        8606: [.01354, .52239, 0, 0],
        8608: [.01354, .52239, 0, 0],
        8610: [.01354, .52239, 0, 0],
        8611: [.01354, .52239, 0, 0],
        8619: [0, .54986, 0, 0],
        8620: [0, .54986, 0, 0],
        8621: [-.13313, .37788, 0, 0],
        8622: [-.13313, .36687, 0, 0],
        8624: [0, .69224, 0, 0],
        8625: [0, .69224, 0, 0],
        8630: [0, .43056, 0, 0],
        8631: [0, .43056, 0, 0],
        8634: [.08198, .58198, 0, 0],
        8635: [.08198, .58198, 0, 0],
        8638: [.19444, .69224, 0, 0],
        8639: [.19444, .69224, 0, 0],
        8642: [.19444, .69224, 0, 0],
        8643: [.19444, .69224, 0, 0],
        8644: [.1808, .675, 0, 0],
        8646: [.1808, .675, 0, 0],
        8647: [.1808, .675, 0, 0],
        8648: [.19444, .69224, 0, 0],
        8649: [.1808, .675, 0, 0],
        8650: [.19444, .69224, 0, 0],
        8651: [.01354, .52239, 0, 0],
        8652: [.01354, .52239, 0, 0],
        8653: [-.13313, .36687, 0, 0],
        8654: [-.13313, .36687, 0, 0],
        8655: [-.13313, .36687, 0, 0],
        8666: [.13667, .63667, 0, 0],
        8667: [.13667, .63667, 0, 0],
        8669: [-.13313, .37788, 0, 0],
        8672: [-.064, .437, 0, 0],
        8674: [-.064, .437, 0, 0],
        8705: [0, .825, 0, 0],
        8708: [0, .68889, 0, 0],
        8709: [.08167, .58167, 0, 0],
        8717: [0, .43056, 0, 0],
        8722: [-.03598, .46402, 0, 0],
        8724: [.08198, .69224, 0, 0],
        8726: [.08167, .58167, 0, 0],
        8733: [0, .69224, 0, 0],
        8736: [0, .69224, 0, 0],
        8737: [0, .69224, 0, 0],
        8738: [.03517, .52239, 0, 0],
        8739: [.08167, .58167, 0, 0],
        8740: [.25142, .74111, 0, 0],
        8741: [.08167, .58167, 0, 0],
        8742: [.25142, .74111, 0, 0],
        8756: [0, .69224, 0, 0],
        8757: [0, .69224, 0, 0],
        8764: [-.13313, .36687, 0, 0],
        8765: [-.13313, .37788, 0, 0],
        8769: [-.13313, .36687, 0, 0],
        8770: [-.03625, .46375, 0, 0],
        8774: [.30274, .79383, 0, 0],
        8776: [-.01688, .48312, 0, 0],
        8778: [.08167, .58167, 0, 0],
        8782: [.06062, .54986, 0, 0],
        8783: [.06062, .54986, 0, 0],
        8785: [.08198, .58198, 0, 0],
        8786: [.08198, .58198, 0, 0],
        8787: [.08198, .58198, 0, 0],
        8790: [0, .69224, 0, 0],
        8791: [.22958, .72958, 0, 0],
        8796: [.08198, .91667, 0, 0],
        8806: [.25583, .75583, 0, 0],
        8807: [.25583, .75583, 0, 0],
        8808: [.25142, .75726, 0, 0],
        8809: [.25142, .75726, 0, 0],
        8812: [.25583, .75583, 0, 0],
        8814: [.20576, .70576, 0, 0],
        8815: [.20576, .70576, 0, 0],
        8816: [.30274, .79383, 0, 0],
        8817: [.30274, .79383, 0, 0],
        8818: [.22958, .72958, 0, 0],
        8819: [.22958, .72958, 0, 0],
        8822: [.1808, .675, 0, 0],
        8823: [.1808, .675, 0, 0],
        8828: [.13667, .63667, 0, 0],
        8829: [.13667, .63667, 0, 0],
        8830: [.22958, .72958, 0, 0],
        8831: [.22958, .72958, 0, 0],
        8832: [.20576, .70576, 0, 0],
        8833: [.20576, .70576, 0, 0],
        8840: [.30274, .79383, 0, 0],
        8841: [.30274, .79383, 0, 0],
        8842: [.13597, .63597, 0, 0],
        8843: [.13597, .63597, 0, 0],
        8847: [.03517, .54986, 0, 0],
        8848: [.03517, .54986, 0, 0],
        8858: [.08198, .58198, 0, 0],
        8859: [.08198, .58198, 0, 0],
        8861: [.08198, .58198, 0, 0],
        8862: [0, .675, 0, 0],
        8863: [0, .675, 0, 0],
        8864: [0, .675, 0, 0],
        8865: [0, .675, 0, 0],
        8872: [0, .69224, 0, 0],
        8873: [0, .69224, 0, 0],
        8874: [0, .69224, 0, 0],
        8876: [0, .68889, 0, 0],
        8877: [0, .68889, 0, 0],
        8878: [0, .68889, 0, 0],
        8879: [0, .68889, 0, 0],
        8882: [.03517, .54986, 0, 0],
        8883: [.03517, .54986, 0, 0],
        8884: [.13667, .63667, 0, 0],
        8885: [.13667, .63667, 0, 0],
        8888: [0, .54986, 0, 0],
        8890: [.19444, .43056, 0, 0],
        8891: [.19444, .69224, 0, 0],
        8892: [.19444, .69224, 0, 0],
        8901: [0, .54986, 0, 0],
        8903: [.08167, .58167, 0, 0],
        8905: [.08167, .58167, 0, 0],
        8906: [.08167, .58167, 0, 0],
        8907: [0, .69224, 0, 0],
        8908: [0, .69224, 0, 0],
        8909: [-.03598, .46402, 0, 0],
        8910: [0, .54986, 0, 0],
        8911: [0, .54986, 0, 0],
        8912: [.03517, .54986, 0, 0],
        8913: [.03517, .54986, 0, 0],
        8914: [0, .54986, 0, 0],
        8915: [0, .54986, 0, 0],
        8916: [0, .69224, 0, 0],
        8918: [.0391, .5391, 0, 0],
        8919: [.0391, .5391, 0, 0],
        8920: [.03517, .54986, 0, 0],
        8921: [.03517, .54986, 0, 0],
        8922: [.38569, .88569, 0, 0],
        8923: [.38569, .88569, 0, 0],
        8926: [.13667, .63667, 0, 0],
        8927: [.13667, .63667, 0, 0],
        8928: [.30274, .79383, 0, 0],
        8929: [.30274, .79383, 0, 0],
        8934: [.23222, .74111, 0, 0],
        8935: [.23222, .74111, 0, 0],
        8936: [.23222, .74111, 0, 0],
        8937: [.23222, .74111, 0, 0],
        8938: [.20576, .70576, 0, 0],
        8939: [.20576, .70576, 0, 0],
        8940: [.30274, .79383, 0, 0],
        8941: [.30274, .79383, 0, 0],
        8994: [.19444, .69224, 0, 0],
        8995: [.19444, .69224, 0, 0],
        9416: [.15559, .69224, 0, 0],
        9484: [0, .69224, 0, 0],
        9488: [0, .69224, 0, 0],
        9492: [0, .37788, 0, 0],
        9496: [0, .37788, 0, 0],
        9585: [.19444, .68889, 0, 0],
        9586: [.19444, .74111, 0, 0],
        9632: [0, .675, 0, 0],
        9633: [0, .675, 0, 0],
        9650: [0, .54986, 0, 0],
        9651: [0, .54986, 0, 0],
        9654: [.03517, .54986, 0, 0],
        9660: [0, .54986, 0, 0],
        9661: [0, .54986, 0, 0],
        9664: [.03517, .54986, 0, 0],
        9674: [.11111, .69224, 0, 0],
        9733: [.19444, .69224, 0, 0],
        10003: [0, .69224, 0, 0],
        10016: [0, .69224, 0, 0],
        10731: [.11111, .69224, 0, 0],
        10846: [.19444, .75583, 0, 0],
        10877: [.13667, .63667, 0, 0],
        10878: [.13667, .63667, 0, 0],
        10885: [.25583, .75583, 0, 0],
        10886: [.25583, .75583, 0, 0],
        10887: [.13597, .63597, 0, 0],
        10888: [.13597, .63597, 0, 0],
        10889: [.26167, .75726, 0, 0],
        10890: [.26167, .75726, 0, 0],
        10891: [.48256, .98256, 0, 0],
        10892: [.48256, .98256, 0, 0],
        10901: [.13667, .63667, 0, 0],
        10902: [.13667, .63667, 0, 0],
        10933: [.25142, .75726, 0, 0],
        10934: [.25142, .75726, 0, 0],
        10935: [.26167, .75726, 0, 0],
        10936: [.26167, .75726, 0, 0],
        10937: [.26167, .75726, 0, 0],
        10938: [.26167, .75726, 0, 0],
        10949: [.25583, .75583, 0, 0],
        10950: [.25583, .75583, 0, 0],
        10955: [.28481, .79383, 0, 0],
        10956: [.28481, .79383, 0, 0],
        57350: [.08167, .58167, 0, 0],
        57351: [.08167, .58167, 0, 0],
        57352: [.08167, .58167, 0, 0],
        57353: [0, .43056, .04028, 0],
        57356: [.25142, .75726, 0, 0],
        57357: [.25142, .75726, 0, 0],
        57358: [.41951, .91951, 0, 0],
        57359: [.30274, .79383, 0, 0],
        57360: [.30274, .79383, 0, 0],
        57361: [.41951, .91951, 0, 0],
        57366: [.25142, .75726, 0, 0],
        57367: [.25142, .75726, 0, 0],
        57368: [.25142, .75726, 0, 0],
        57369: [.25142, .75726, 0, 0],
        57370: [.13597, .63597, 0, 0],
        57371: [.13597, .63597, 0, 0]
      },
      "Caligraphic-Regular": {
        48: [0, .43056, 0, 0],
        49: [0, .43056, 0, 0],
        50: [0, .43056, 0, 0],
        51: [.19444, .43056, 0, 0],
        52: [.19444, .43056, 0, 0],
        53: [.19444, .43056, 0, 0],
        54: [0, .64444, 0, 0],
        55: [.19444, .43056, 0, 0],
        56: [0, .64444, 0, 0],
        57: [.19444, .43056, 0, 0],
        65: [0, .68333, 0, .19445],
        66: [0, .68333, .03041, .13889],
        67: [0, .68333, .05834, .13889],
        68: [0, .68333, .02778, .08334],
        69: [0, .68333, .08944, .11111],
        70: [0, .68333, .09931, .11111],
        71: [.09722, .68333, .0593, .11111],
        72: [0, .68333, .00965, .11111],
        73: [0, .68333, .07382, 0],
        74: [.09722, .68333, .18472, .16667],
        75: [0, .68333, .01445, .05556],
        76: [0, .68333, 0, .13889],
        77: [0, .68333, 0, .13889],
        78: [0, .68333, .14736, .08334],
        79: [0, .68333, .02778, .11111],
        80: [0, .68333, .08222, .08334],
        81: [.09722, .68333, 0, .11111],
        82: [0, .68333, 0, .08334],
        83: [0, .68333, .075, .13889],
        84: [0, .68333, .25417, 0],
        85: [0, .68333, .09931, .08334],
        86: [0, .68333, .08222, 0],
        87: [0, .68333, .08222, .08334],
        88: [0, .68333, .14643, .13889],
        89: [.09722, .68333, .08222, .08334],
        90: [0, .68333, .07944, .13889]
      },
      "Fraktur-Regular": {
        33: [0, .69141, 0, 0],
        34: [0, .69141, 0, 0],
        38: [0, .69141, 0, 0],
        39: [0, .69141, 0, 0],
        40: [.24982, .74947, 0, 0],
        41: [.24982, .74947, 0, 0],
        42: [0, .62119, 0, 0],
        43: [.08319, .58283, 0, 0],
        44: [0, .10803, 0, 0],
        45: [.08319, .58283, 0, 0],
        46: [0, .10803, 0, 0],
        47: [.24982, .74947, 0, 0],
        48: [0, .47534, 0, 0],
        49: [0, .47534, 0, 0],
        50: [0, .47534, 0, 0],
        51: [.18906, .47534, 0, 0],
        52: [.18906, .47534, 0, 0],
        53: [.18906, .47534, 0, 0],
        54: [0, .69141, 0, 0],
        55: [.18906, .47534, 0, 0],
        56: [0, .69141, 0, 0],
        57: [.18906, .47534, 0, 0],
        58: [0, .47534, 0, 0],
        59: [.12604, .47534, 0, 0],
        61: [-.13099, .36866, 0, 0],
        63: [0, .69141, 0, 0],
        65: [0, .69141, 0, 0],
        66: [0, .69141, 0, 0],
        67: [0, .69141, 0, 0],
        68: [0, .69141, 0, 0],
        69: [0, .69141, 0, 0],
        70: [.12604, .69141, 0, 0],
        71: [0, .69141, 0, 0],
        72: [.06302, .69141, 0, 0],
        73: [0, .69141, 0, 0],
        74: [.12604, .69141, 0, 0],
        75: [0, .69141, 0, 0],
        76: [0, .69141, 0, 0],
        77: [0, .69141, 0, 0],
        78: [0, .69141, 0, 0],
        79: [0, .69141, 0, 0],
        80: [.18906, .69141, 0, 0],
        81: [.03781, .69141, 0, 0],
        82: [0, .69141, 0, 0],
        83: [0, .69141, 0, 0],
        84: [0, .69141, 0, 0],
        85: [0, .69141, 0, 0],
        86: [0, .69141, 0, 0],
        87: [0, .69141, 0, 0],
        88: [0, .69141, 0, 0],
        89: [.18906, .69141, 0, 0],
        90: [.12604, .69141, 0, 0],
        91: [.24982, .74947, 0, 0],
        93: [.24982, .74947, 0, 0],
        94: [0, .69141, 0, 0],
        97: [0, .47534, 0, 0],
        98: [0, .69141, 0, 0],
        99: [0, .47534, 0, 0],
        100: [0, .62119, 0, 0],
        101: [0, .47534, 0, 0],
        102: [.18906, .69141, 0, 0],
        103: [.18906, .47534, 0, 0],
        104: [.18906, .69141, 0, 0],
        105: [0, .69141, 0, 0],
        106: [0, .69141, 0, 0],
        107: [0, .69141, 0, 0],
        108: [0, .69141, 0, 0],
        109: [0, .47534, 0, 0],
        110: [0, .47534, 0, 0],
        111: [0, .47534, 0, 0],
        112: [.18906, .52396, 0, 0],
        113: [.18906, .47534, 0, 0],
        114: [0, .47534, 0, 0],
        115: [0, .47534, 0, 0],
        116: [0, .62119, 0, 0],
        117: [0, .47534, 0, 0],
        118: [0, .52396, 0, 0],
        119: [0, .52396, 0, 0],
        120: [.18906, .47534, 0, 0],
        121: [.18906, .47534, 0, 0],
        122: [.18906, .47534, 0, 0],
        8216: [0, .69141, 0, 0],
        8217: [0, .69141, 0, 0],
        58112: [0, .62119, 0, 0],
        58113: [0, .62119, 0, 0],
        58114: [.18906, .69141, 0, 0],
        58115: [.18906, .69141, 0, 0],
        58116: [.18906, .47534, 0, 0],
        58117: [0, .69141, 0, 0],
        58118: [0, .62119, 0, 0],
        58119: [0, .47534, 0, 0]
      },
      "Main-Bold": {
        33: [0, .69444, 0, 0],
        34: [0, .69444, 0, 0],
        35: [.19444, .69444, 0, 0],
        36: [.05556, .75, 0, 0],
        37: [.05556, .75, 0, 0],
        38: [0, .69444, 0, 0],
        39: [0, .69444, 0, 0],
        40: [.25, .75, 0, 0],
        41: [.25, .75, 0, 0],
        42: [0, .75, 0, 0],
        43: [.13333, .63333, 0, 0],
        44: [.19444, .15556, 0, 0],
        45: [0, .44444, 0, 0],
        46: [0, .15556, 0, 0],
        47: [.25, .75, 0, 0],
        48: [0, .64444, 0, 0],
        49: [0, .64444, 0, 0],
        50: [0, .64444, 0, 0],
        51: [0, .64444, 0, 0],
        52: [0, .64444, 0, 0],
        53: [0, .64444, 0, 0],
        54: [0, .64444, 0, 0],
        55: [0, .64444, 0, 0],
        56: [0, .64444, 0, 0],
        57: [0, .64444, 0, 0],
        58: [0, .44444, 0, 0],
        59: [.19444, .44444, 0, 0],
        60: [.08556, .58556, 0, 0],
        61: [-.10889, .39111, 0, 0],
        62: [.08556, .58556, 0, 0],
        63: [0, .69444, 0, 0],
        64: [0, .69444, 0, 0],
        65: [0, .68611, 0, 0],
        66: [0, .68611, 0, 0],
        67: [0, .68611, 0, 0],
        68: [0, .68611, 0, 0],
        69: [0, .68611, 0, 0],
        70: [0, .68611, 0, 0],
        71: [0, .68611, 0, 0],
        72: [0, .68611, 0, 0],
        73: [0, .68611, 0, 0],
        74: [0, .68611, 0, 0],
        75: [0, .68611, 0, 0],
        76: [0, .68611, 0, 0],
        77: [0, .68611, 0, 0],
        78: [0, .68611, 0, 0],
        79: [0, .68611, 0, 0],
        80: [0, .68611, 0, 0],
        81: [.19444, .68611, 0, 0],
        82: [0, .68611, 0, 0],
        83: [0, .68611, 0, 0],
        84: [0, .68611, 0, 0],
        85: [0, .68611, 0, 0],
        86: [0, .68611, .01597, 0],
        87: [0, .68611, .01597, 0],
        88: [0, .68611, 0, 0],
        89: [0, .68611, .02875, 0],
        90: [0, .68611, 0, 0],
        91: [.25, .75, 0, 0],
        92: [.25, .75, 0, 0],
        93: [.25, .75, 0, 0],
        94: [0, .69444, 0, 0],
        95: [.31, .13444, .03194, 0],
        96: [0, .69444, 0, 0],
        97: [0, .44444, 0, 0],
        98: [0, .69444, 0, 0],
        99: [0, .44444, 0, 0],
        100: [0, .69444, 0, 0],
        101: [0, .44444, 0, 0],
        102: [0, .69444, .10903, 0],
        103: [.19444, .44444, .01597, 0],
        104: [0, .69444, 0, 0],
        105: [0, .69444, 0, 0],
        106: [.19444, .69444, 0, 0],
        107: [0, .69444, 0, 0],
        108: [0, .69444, 0, 0],
        109: [0, .44444, 0, 0],
        110: [0, .44444, 0, 0],
        111: [0, .44444, 0, 0],
        112: [.19444, .44444, 0, 0],
        113: [.19444, .44444, 0, 0],
        114: [0, .44444, 0, 0],
        115: [0, .44444, 0, 0],
        116: [0, .63492, 0, 0],
        117: [0, .44444, 0, 0],
        118: [0, .44444, .01597, 0],
        119: [0, .44444, .01597, 0],
        120: [0, .44444, 0, 0],
        121: [.19444, .44444, .01597, 0],
        122: [0, .44444, 0, 0],
        123: [.25, .75, 0, 0],
        124: [.25, .75, 0, 0],
        125: [.25, .75, 0, 0],
        126: [.35, .34444, 0, 0],
        168: [0, .69444, 0, 0],
        172: [0, .44444, 0, 0],
        175: [0, .59611, 0, 0],
        176: [0, .69444, 0, 0],
        177: [.13333, .63333, 0, 0],
        180: [0, .69444, 0, 0],
        215: [.13333, .63333, 0, 0],
        247: [.13333, .63333, 0, 0],
        305: [0, .44444, 0, 0],
        567: [.19444, .44444, 0, 0],
        710: [0, .69444, 0, 0],
        711: [0, .63194, 0, 0],
        713: [0, .59611, 0, 0],
        714: [0, .69444, 0, 0],
        715: [0, .69444, 0, 0],
        728: [0, .69444, 0, 0],
        729: [0, .69444, 0, 0],
        730: [0, .69444, 0, 0],
        732: [0, .69444, 0, 0],
        768: [0, .69444, 0, 0],
        769: [0, .69444, 0, 0],
        770: [0, .69444, 0, 0],
        771: [0, .69444, 0, 0],
        772: [0, .59611, 0, 0],
        774: [0, .69444, 0, 0],
        775: [0, .69444, 0, 0],
        776: [0, .69444, 0, 0],
        778: [0, .69444, 0, 0],
        779: [0, .69444, 0, 0],
        780: [0, .63194, 0, 0],
        824: [.19444, .69444, 0, 0],
        915: [0, .68611, 0, 0],
        916: [0, .68611, 0, 0],
        920: [0, .68611, 0, 0],
        923: [0, .68611, 0, 0],
        926: [0, .68611, 0, 0],
        928: [0, .68611, 0, 0],
        931: [0, .68611, 0, 0],
        933: [0, .68611, 0, 0],
        934: [0, .68611, 0, 0],
        936: [0, .68611, 0, 0],
        937: [0, .68611, 0, 0],
        8211: [0, .44444, .03194, 0],
        8212: [0, .44444, .03194, 0],
        8216: [0, .69444, 0, 0],
        8217: [0, .69444, 0, 0],
        8220: [0, .69444, 0, 0],
        8221: [0, .69444, 0, 0],
        8224: [.19444, .69444, 0, 0],
        8225: [.19444, .69444, 0, 0],
        8242: [0, .55556, 0, 0],
        8407: [0, .72444, .15486, 0],
        8463: [0, .69444, 0, 0],
        8465: [0, .69444, 0, 0],
        8467: [0, .69444, 0, 0],
        8472: [.19444, .44444, 0, 0],
        8476: [0, .69444, 0, 0],
        8501: [0, .69444, 0, 0],
        8592: [-.10889, .39111, 0, 0],
        8593: [.19444, .69444, 0, 0],
        8594: [-.10889, .39111, 0, 0],
        8595: [.19444, .69444, 0, 0],
        8596: [-.10889, .39111, 0, 0],
        8597: [.25, .75, 0, 0],
        8598: [.19444, .69444, 0, 0],
        8599: [.19444, .69444, 0, 0],
        8600: [.19444, .69444, 0, 0],
        8601: [.19444, .69444, 0, 0],
        8636: [-.10889, .39111, 0, 0],
        8637: [-.10889, .39111, 0, 0],
        8640: [-.10889, .39111, 0, 0],
        8641: [-.10889, .39111, 0, 0],
        8656: [-.10889, .39111, 0, 0],
        8657: [.19444, .69444, 0, 0],
        8658: [-.10889, .39111, 0, 0],
        8659: [.19444, .69444, 0, 0],
        8660: [-.10889, .39111, 0, 0],
        8661: [.25, .75, 0, 0],
        8704: [0, .69444, 0, 0],
        8706: [0, .69444, .06389, 0],
        8707: [0, .69444, 0, 0],
        8709: [.05556, .75, 0, 0],
        8711: [0, .68611, 0, 0],
        8712: [.08556, .58556, 0, 0],
        8715: [.08556, .58556, 0, 0],
        8722: [.13333, .63333, 0, 0],
        8723: [.13333, .63333, 0, 0],
        8725: [.25, .75, 0, 0],
        8726: [.25, .75, 0, 0],
        8727: [-.02778, .47222, 0, 0],
        8728: [-.02639, .47361, 0, 0],
        8729: [-.02639, .47361, 0, 0],
        8730: [.18, .82, 0, 0],
        8733: [0, .44444, 0, 0],
        8734: [0, .44444, 0, 0],
        8736: [0, .69224, 0, 0],
        8739: [.25, .75, 0, 0],
        8741: [.25, .75, 0, 0],
        8743: [0, .55556, 0, 0],
        8744: [0, .55556, 0, 0],
        8745: [0, .55556, 0, 0],
        8746: [0, .55556, 0, 0],
        8747: [.19444, .69444, .12778, 0],
        8764: [-.10889, .39111, 0, 0],
        8768: [.19444, .69444, 0, 0],
        8771: [.00222, .50222, 0, 0],
        8776: [.02444, .52444, 0, 0],
        8781: [.00222, .50222, 0, 0],
        8801: [.00222, .50222, 0, 0],
        8804: [.19667, .69667, 0, 0],
        8805: [.19667, .69667, 0, 0],
        8810: [.08556, .58556, 0, 0],
        8811: [.08556, .58556, 0, 0],
        8826: [.08556, .58556, 0, 0],
        8827: [.08556, .58556, 0, 0],
        8834: [.08556, .58556, 0, 0],
        8835: [.08556, .58556, 0, 0],
        8838: [.19667, .69667, 0, 0],
        8839: [.19667, .69667, 0, 0],
        8846: [0, .55556, 0, 0],
        8849: [.19667, .69667, 0, 0],
        8850: [.19667, .69667, 0, 0],
        8851: [0, .55556, 0, 0],
        8852: [0, .55556, 0, 0],
        8853: [.13333, .63333, 0, 0],
        8854: [.13333, .63333, 0, 0],
        8855: [.13333, .63333, 0, 0],
        8856: [.13333, .63333, 0, 0],
        8857: [.13333, .63333, 0, 0],
        8866: [0, .69444, 0, 0],
        8867: [0, .69444, 0, 0],
        8868: [0, .69444, 0, 0],
        8869: [0, .69444, 0, 0],
        8900: [-.02639, .47361, 0, 0],
        8901: [-.02639, .47361, 0, 0],
        8902: [-.02778, .47222, 0, 0],
        8968: [.25, .75, 0, 0],
        8969: [.25, .75, 0, 0],
        8970: [.25, .75, 0, 0],
        8971: [.25, .75, 0, 0],
        8994: [-.13889, .36111, 0, 0],
        8995: [-.13889, .36111, 0, 0],
        9651: [.19444, .69444, 0, 0],
        9657: [-.02778, .47222, 0, 0],
        9661: [.19444, .69444, 0, 0],
        9667: [-.02778, .47222, 0, 0],
        9711: [.19444, .69444, 0, 0],
        9824: [.12963, .69444, 0, 0],
        9825: [.12963, .69444, 0, 0],
        9826: [.12963, .69444, 0, 0],
        9827: [.12963, .69444, 0, 0],
        9837: [0, .75, 0, 0],
        9838: [.19444, .69444, 0, 0],
        9839: [.19444, .69444, 0, 0],
        10216: [.25, .75, 0, 0],
        10217: [.25, .75, 0, 0],
        10815: [0, .68611, 0, 0],
        10927: [.19667, .69667, 0, 0],
        10928: [.19667, .69667, 0, 0]
      },
      "Main-Italic": {
        33: [0, .69444, .12417, 0],
        34: [0, .69444, .06961, 0],
        35: [.19444, .69444, .06616, 0],
        37: [.05556, .75, .13639, 0],
        38: [0, .69444, .09694, 0],
        39: [0, .69444, .12417, 0],
        40: [.25, .75, .16194, 0],
        41: [.25, .75, .03694, 0],
        42: [0, .75, .14917, 0],
        43: [.05667, .56167, .03694, 0],
        44: [.19444, .10556, 0, 0],
        45: [0, .43056, .02826, 0],
        46: [0, .10556, 0, 0],
        47: [.25, .75, .16194, 0],
        48: [0, .64444, .13556, 0],
        49: [0, .64444, .13556, 0],
        50: [0, .64444, .13556, 0],
        51: [0, .64444, .13556, 0],
        52: [.19444, .64444, .13556, 0],
        53: [0, .64444, .13556, 0],
        54: [0, .64444, .13556, 0],
        55: [.19444, .64444, .13556, 0],
        56: [0, .64444, .13556, 0],
        57: [0, .64444, .13556, 0],
        58: [0, .43056, .0582, 0],
        59: [.19444, .43056, .0582, 0],
        61: [-.13313, .36687, .06616, 0],
        63: [0, .69444, .1225, 0],
        64: [0, .69444, .09597, 0],
        65: [0, .68333, 0, 0],
        66: [0, .68333, .10257, 0],
        67: [0, .68333, .14528, 0],
        68: [0, .68333, .09403, 0],
        69: [0, .68333, .12028, 0],
        70: [0, .68333, .13305, 0],
        71: [0, .68333, .08722, 0],
        72: [0, .68333, .16389, 0],
        73: [0, .68333, .15806, 0],
        74: [0, .68333, .14028, 0],
        75: [0, .68333, .14528, 0],
        76: [0, .68333, 0, 0],
        77: [0, .68333, .16389, 0],
        78: [0, .68333, .16389, 0],
        79: [0, .68333, .09403, 0],
        80: [0, .68333, .10257, 0],
        81: [.19444, .68333, .09403, 0],
        82: [0, .68333, .03868, 0],
        83: [0, .68333, .11972, 0],
        84: [0, .68333, .13305, 0],
        85: [0, .68333, .16389, 0],
        86: [0, .68333, .18361, 0],
        87: [0, .68333, .18361, 0],
        88: [0, .68333, .15806, 0],
        89: [0, .68333, .19383, 0],
        90: [0, .68333, .14528, 0],
        91: [.25, .75, .1875, 0],
        93: [.25, .75, .10528, 0],
        94: [0, .69444, .06646, 0],
        95: [.31, .12056, .09208, 0],
        97: [0, .43056, .07671, 0],
        98: [0, .69444, .06312, 0],
        99: [0, .43056, .05653, 0],
        100: [0, .69444, .10333, 0],
        101: [0, .43056, .07514, 0],
        102: [.19444, .69444, .21194, 0],
        103: [.19444, .43056, .08847, 0],
        104: [0, .69444, .07671, 0],
        105: [0, .65536, .1019, 0],
        106: [.19444, .65536, .14467, 0],
        107: [0, .69444, .10764, 0],
        108: [0, .69444, .10333, 0],
        109: [0, .43056, .07671, 0],
        110: [0, .43056, .07671, 0],
        111: [0, .43056, .06312, 0],
        112: [.19444, .43056, .06312, 0],
        113: [.19444, .43056, .08847, 0],
        114: [0, .43056, .10764, 0],
        115: [0, .43056, .08208, 0],
        116: [0, .61508, .09486, 0],
        117: [0, .43056, .07671, 0],
        118: [0, .43056, .10764, 0],
        119: [0, .43056, .10764, 0],
        120: [0, .43056, .12042, 0],
        121: [.19444, .43056, .08847, 0],
        122: [0, .43056, .12292, 0],
        126: [.35, .31786, .11585, 0],
        163: [0, .69444, 0, 0],
        305: [0, .43056, 0, .02778],
        567: [.19444, .43056, 0, .08334],
        768: [0, .69444, 0, 0],
        769: [0, .69444, .09694, 0],
        770: [0, .69444, .06646, 0],
        771: [0, .66786, .11585, 0],
        772: [0, .56167, .10333, 0],
        774: [0, .69444, .10806, 0],
        775: [0, .66786, .11752, 0],
        776: [0, .66786, .10474, 0],
        778: [0, .69444, 0, 0],
        779: [0, .69444, .1225, 0],
        780: [0, .62847, .08295, 0],
        915: [0, .68333, .13305, 0],
        916: [0, .68333, 0, 0],
        920: [0, .68333, .09403, 0],
        923: [0, .68333, 0, 0],
        926: [0, .68333, .15294, 0],
        928: [0, .68333, .16389, 0],
        931: [0, .68333, .12028, 0],
        933: [0, .68333, .11111, 0],
        934: [0, .68333, .05986, 0],
        936: [0, .68333, .11111, 0],
        937: [0, .68333, .10257, 0],
        8211: [0, .43056, .09208, 0],
        8212: [0, .43056, .09208, 0],
        8216: [0, .69444, .12417, 0],
        8217: [0, .69444, .12417, 0],
        8220: [0, .69444, .1685, 0],
        8221: [0, .69444, .06961, 0],
        8463: [0, .68889, 0, 0]
      },
      "Main-Regular": {
        32: [0, 0, 0, 0],
        33: [0, .69444, 0, 0],
        34: [0, .69444, 0, 0],
        35: [.19444, .69444, 0, 0],
        36: [.05556, .75, 0, 0],
        37: [.05556, .75, 0, 0],
        38: [0, .69444, 0, 0],
        39: [0, .69444, 0, 0],
        40: [.25, .75, 0, 0],
        41: [.25, .75, 0, 0],
        42: [0, .75, 0, 0],
        43: [.08333, .58333, 0, 0],
        44: [.19444, .10556, 0, 0],
        45: [0, .43056, 0, 0],
        46: [0, .10556, 0, 0],
        47: [.25, .75, 0, 0],
        48: [0, .64444, 0, 0],
        49: [0, .64444, 0, 0],
        50: [0, .64444, 0, 0],
        51: [0, .64444, 0, 0],
        52: [0, .64444, 0, 0],
        53: [0, .64444, 0, 0],
        54: [0, .64444, 0, 0],
        55: [0, .64444, 0, 0],
        56: [0, .64444, 0, 0],
        57: [0, .64444, 0, 0],
        58: [0, .43056, 0, 0],
        59: [.19444, .43056, 0, 0],
        60: [.0391, .5391, 0, 0],
        61: [-.13313, .36687, 0, 0],
        62: [.0391, .5391, 0, 0],
        63: [0, .69444, 0, 0],
        64: [0, .69444, 0, 0],
        65: [0, .68333, 0, 0],
        66: [0, .68333, 0, 0],
        67: [0, .68333, 0, 0],
        68: [0, .68333, 0, 0],
        69: [0, .68333, 0, 0],
        70: [0, .68333, 0, 0],
        71: [0, .68333, 0, 0],
        72: [0, .68333, 0, 0],
        73: [0, .68333, 0, 0],
        74: [0, .68333, 0, 0],
        75: [0, .68333, 0, 0],
        76: [0, .68333, 0, 0],
        77: [0, .68333, 0, 0],
        78: [0, .68333, 0, 0],
        79: [0, .68333, 0, 0],
        80: [0, .68333, 0, 0],
        81: [.19444, .68333, 0, 0],
        82: [0, .68333, 0, 0],
        83: [0, .68333, 0, 0],
        84: [0, .68333, 0, 0],
        85: [0, .68333, 0, 0],
        86: [0, .68333, .01389, 0],
        87: [0, .68333, .01389, 0],
        88: [0, .68333, 0, 0],
        89: [0, .68333, .025, 0],
        90: [0, .68333, 0, 0],
        91: [.25, .75, 0, 0],
        92: [.25, .75, 0, 0],
        93: [.25, .75, 0, 0],
        94: [0, .69444, 0, 0],
        95: [.31, .12056, .02778, 0],
        96: [0, .69444, 0, 0],
        97: [0, .43056, 0, 0],
        98: [0, .69444, 0, 0],
        99: [0, .43056, 0, 0],
        100: [0, .69444, 0, 0],
        101: [0, .43056, 0, 0],
        102: [0, .69444, .07778, 0],
        103: [.19444, .43056, .01389, 0],
        104: [0, .69444, 0, 0],
        105: [0, .66786, 0, 0],
        106: [.19444, .66786, 0, 0],
        107: [0, .69444, 0, 0],
        108: [0, .69444, 0, 0],
        109: [0, .43056, 0, 0],
        110: [0, .43056, 0, 0],
        111: [0, .43056, 0, 0],
        112: [.19444, .43056, 0, 0],
        113: [.19444, .43056, 0, 0],
        114: [0, .43056, 0, 0],
        115: [0, .43056, 0, 0],
        116: [0, .61508, 0, 0],
        117: [0, .43056, 0, 0],
        118: [0, .43056, .01389, 0],
        119: [0, .43056, .01389, 0],
        120: [0, .43056, 0, 0],
        121: [.19444, .43056, .01389, 0],
        122: [0, .43056, 0, 0],
        123: [.25, .75, 0, 0],
        124: [.25, .75, 0, 0],
        125: [.25, .75, 0, 0],
        126: [.35, .31786, 0, 0],
        160: [0, 0, 0, 0],
        168: [0, .66786, 0, 0],
        172: [0, .43056, 0, 0],
        175: [0, .56778, 0, 0],
        176: [0, .69444, 0, 0],
        177: [.08333, .58333, 0, 0],
        180: [0, .69444, 0, 0],
        215: [.08333, .58333, 0, 0],
        247: [.08333, .58333, 0, 0],
        305: [0, .43056, 0, 0],
        567: [.19444, .43056, 0, 0],
        710: [0, .69444, 0, 0],
        711: [0, .62847, 0, 0],
        713: [0, .56778, 0, 0],
        714: [0, .69444, 0, 0],
        715: [0, .69444, 0, 0],
        728: [0, .69444, 0, 0],
        729: [0, .66786, 0, 0],
        730: [0, .69444, 0, 0],
        732: [0, .66786, 0, 0],
        768: [0, .69444, 0, 0],
        769: [0, .69444, 0, 0],
        770: [0, .69444, 0, 0],
        771: [0, .66786, 0, 0],
        772: [0, .56778, 0, 0],
        774: [0, .69444, 0, 0],
        775: [0, .66786, 0, 0],
        776: [0, .66786, 0, 0],
        778: [0, .69444, 0, 0],
        779: [0, .69444, 0, 0],
        780: [0, .62847, 0, 0],
        824: [.19444, .69444, 0, 0],
        915: [0, .68333, 0, 0],
        916: [0, .68333, 0, 0],
        920: [0, .68333, 0, 0],
        923: [0, .68333, 0, 0],
        926: [0, .68333, 0, 0],
        928: [0, .68333, 0, 0],
        931: [0, .68333, 0, 0],
        933: [0, .68333, 0, 0],
        934: [0, .68333, 0, 0],
        936: [0, .68333, 0, 0],
        937: [0, .68333, 0, 0],
        8211: [0, .43056, .02778, 0],
        8212: [0, .43056, .02778, 0],
        8216: [0, .69444, 0, 0],
        8217: [0, .69444, 0, 0],
        8220: [0, .69444, 0, 0],
        8221: [0, .69444, 0, 0],
        8224: [.19444, .69444, 0, 0],
        8225: [.19444, .69444, 0, 0],
        8230: [0, .12, 0, 0],
        8242: [0, .55556, 0, 0],
        8407: [0, .71444, .15382, 0],
        8463: [0, .68889, 0, 0],
        8465: [0, .69444, 0, 0],
        8467: [0, .69444, 0, .11111],
        8472: [.19444, .43056, 0, .11111],
        8476: [0, .69444, 0, 0],
        8501: [0, .69444, 0, 0],
        8592: [-.13313, .36687, 0, 0],
        8593: [.19444, .69444, 0, 0],
        8594: [-.13313, .36687, 0, 0],
        8595: [.19444, .69444, 0, 0],
        8596: [-.13313, .36687, 0, 0],
        8597: [.25, .75, 0, 0],
        8598: [.19444, .69444, 0, 0],
        8599: [.19444, .69444, 0, 0],
        8600: [.19444, .69444, 0, 0],
        8601: [.19444, .69444, 0, 0],
        8614: [.011, .511, 0, 0],
        8617: [.011, .511, 0, 0],
        8618: [.011, .511, 0, 0],
        8636: [-.13313, .36687, 0, 0],
        8637: [-.13313, .36687, 0, 0],
        8640: [-.13313, .36687, 0, 0],
        8641: [-.13313, .36687, 0, 0],
        8652: [.011, .671, 0, 0],
        8656: [-.13313, .36687, 0, 0],
        8657: [.19444, .69444, 0, 0],
        8658: [-.13313, .36687, 0, 0],
        8659: [.19444, .69444, 0, 0],
        8660: [-.13313, .36687, 0, 0],
        8661: [.25, .75, 0, 0],
        8704: [0, .69444, 0, 0],
        8706: [0, .69444, .05556, .08334],
        8707: [0, .69444, 0, 0],
        8709: [.05556, .75, 0, 0],
        8711: [0, .68333, 0, 0],
        8712: [.0391, .5391, 0, 0],
        8715: [.0391, .5391, 0, 0],
        8722: [.08333, .58333, 0, 0],
        8723: [.08333, .58333, 0, 0],
        8725: [.25, .75, 0, 0],
        8726: [.25, .75, 0, 0],
        8727: [-.03472, .46528, 0, 0],
        8728: [-.05555, .44445, 0, 0],
        8729: [-.05555, .44445, 0, 0],
        8730: [.2, .8, 0, 0],
        8733: [0, .43056, 0, 0],
        8734: [0, .43056, 0, 0],
        8736: [0, .69224, 0, 0],
        8739: [.25, .75, 0, 0],
        8741: [.25, .75, 0, 0],
        8743: [0, .55556, 0, 0],
        8744: [0, .55556, 0, 0],
        8745: [0, .55556, 0, 0],
        8746: [0, .55556, 0, 0],
        8747: [.19444, .69444, .11111, 0],
        8764: [-.13313, .36687, 0, 0],
        8768: [.19444, .69444, 0, 0],
        8771: [-.03625, .46375, 0, 0],
        8773: [-.022, .589, 0, 0],
        8776: [-.01688, .48312, 0, 0],
        8781: [-.03625, .46375, 0, 0],
        8784: [-.133, .67, 0, 0],
        8800: [.215, .716, 0, 0],
        8801: [-.03625, .46375, 0, 0],
        8804: [.13597, .63597, 0, 0],
        8805: [.13597, .63597, 0, 0],
        8810: [.0391, .5391, 0, 0],
        8811: [.0391, .5391, 0, 0],
        8826: [.0391, .5391, 0, 0],
        8827: [.0391, .5391, 0, 0],
        8834: [.0391, .5391, 0, 0],
        8835: [.0391, .5391, 0, 0],
        8838: [.13597, .63597, 0, 0],
        8839: [.13597, .63597, 0, 0],
        8846: [0, .55556, 0, 0],
        8849: [.13597, .63597, 0, 0],
        8850: [.13597, .63597, 0, 0],
        8851: [0, .55556, 0, 0],
        8852: [0, .55556, 0, 0],
        8853: [.08333, .58333, 0, 0],
        8854: [.08333, .58333, 0, 0],
        8855: [.08333, .58333, 0, 0],
        8856: [.08333, .58333, 0, 0],
        8857: [.08333, .58333, 0, 0],
        8866: [0, .69444, 0, 0],
        8867: [0, .69444, 0, 0],
        8868: [0, .69444, 0, 0],
        8869: [0, .69444, 0, 0],
        8872: [.249, .75, 0, 0],
        8900: [-.05555, .44445, 0, 0],
        8901: [-.05555, .44445, 0, 0],
        8902: [-.03472, .46528, 0, 0],
        8904: [.005, .505, 0, 0],
        8942: [.03, .9, 0, 0],
        8943: [-.19, .31, 0, 0],
        8945: [-.1, .82, 0, 0],
        8968: [.25, .75, 0, 0],
        8969: [.25, .75, 0, 0],
        8970: [.25, .75, 0, 0],
        8971: [.25, .75, 0, 0],
        8994: [-.14236, .35764, 0, 0],
        8995: [-.14236, .35764, 0, 0],
        9136: [.244, .744, 0, 0],
        9137: [.244, .744, 0, 0],
        9651: [.19444, .69444, 0, 0],
        9657: [-.03472, .46528, 0, 0],
        9661: [.19444, .69444, 0, 0],
        9667: [-.03472, .46528, 0, 0],
        9711: [.19444, .69444, 0, 0],
        9824: [.12963, .69444, 0, 0],
        9825: [.12963, .69444, 0, 0],
        9826: [.12963, .69444, 0, 0],
        9827: [.12963, .69444, 0, 0],
        9837: [0, .75, 0, 0],
        9838: [.19444, .69444, 0, 0],
        9839: [.19444, .69444, 0, 0],
        10216: [.25, .75, 0, 0],
        10217: [.25, .75, 0, 0],
        10222: [.244, .744, 0, 0],
        10223: [.244, .744, 0, 0],
        10229: [.011, .511, 0, 0],
        10230: [.011, .511, 0, 0],
        10231: [.011, .511, 0, 0],
        10232: [.024, .525, 0, 0],
        10233: [.024, .525, 0, 0],
        10234: [.024, .525, 0, 0],
        10236: [.011, .511, 0, 0],
        10815: [0, .68333, 0, 0],
        10927: [.13597, .63597, 0, 0],
        10928: [.13597, .63597, 0, 0]
      },
      "Math-BoldItalic": {
        47: [.19444, .69444, 0, 0],
        65: [0, .68611, 0, 0],
        66: [0, .68611, .04835, 0],
        67: [0, .68611, .06979, 0],
        68: [0, .68611, .03194, 0],
        69: [0, .68611, .05451, 0],
        70: [0, .68611, .15972, 0],
        71: [0, .68611, 0, 0],
        72: [0, .68611, .08229, 0],
        73: [0, .68611, .07778, 0],
        74: [0, .68611, .10069, 0],
        75: [0, .68611, .06979, 0],
        76: [0, .68611, 0, 0],
        77: [0, .68611, .11424, 0],
        78: [0, .68611, .11424, 0],
        79: [0, .68611, .03194, 0],
        80: [0, .68611, .15972, 0],
        81: [.19444, .68611, 0, 0],
        82: [0, .68611, .00421, 0],
        83: [0, .68611, .05382, 0],
        84: [0, .68611, .15972, 0],
        85: [0, .68611, .11424, 0],
        86: [0, .68611, .25555, 0],
        87: [0, .68611, .15972, 0],
        88: [0, .68611, .07778, 0],
        89: [0, .68611, .25555, 0],
        90: [0, .68611, .06979, 0],
        97: [0, .44444, 0, 0],
        98: [0, .69444, 0, 0],
        99: [0, .44444, 0, 0],
        100: [0, .69444, 0, 0],
        101: [0, .44444, 0, 0],
        102: [.19444, .69444, .11042, 0],
        103: [.19444, .44444, .03704, 0],
        104: [0, .69444, 0, 0],
        105: [0, .69326, 0, 0],
        106: [.19444, .69326, .0622, 0],
        107: [0, .69444, .01852, 0],
        108: [0, .69444, .0088, 0],
        109: [0, .44444, 0, 0],
        110: [0, .44444, 0, 0],
        111: [0, .44444, 0, 0],
        112: [.19444, .44444, 0, 0],
        113: [.19444, .44444, .03704, 0],
        114: [0, .44444, .03194, 0],
        115: [0, .44444, 0, 0],
        116: [0, .63492, 0, 0],
        117: [0, .44444, 0, 0],
        118: [0, .44444, .03704, 0],
        119: [0, .44444, .02778, 0],
        120: [0, .44444, 0, 0],
        121: [.19444, .44444, .03704, 0],
        122: [0, .44444, .04213, 0],
        915: [0, .68611, .15972, 0],
        916: [0, .68611, 0, 0],
        920: [0, .68611, .03194, 0],
        923: [0, .68611, 0, 0],
        926: [0, .68611, .07458, 0],
        928: [0, .68611, .08229, 0],
        931: [0, .68611, .05451, 0],
        933: [0, .68611, .15972, 0],
        934: [0, .68611, 0, 0],
        936: [0, .68611, .11653, 0],
        937: [0, .68611, .04835, 0],
        945: [0, .44444, 0, 0],
        946: [.19444, .69444, .03403, 0],
        947: [.19444, .44444, .06389, 0],
        948: [0, .69444, .03819, 0],
        949: [0, .44444, 0, 0],
        950: [.19444, .69444, .06215, 0],
        951: [.19444, .44444, .03704, 0],
        952: [0, .69444, .03194, 0],
        953: [0, .44444, 0, 0],
        954: [0, .44444, 0, 0],
        955: [0, .69444, 0, 0],
        956: [.19444, .44444, 0, 0],
        957: [0, .44444, .06898, 0],
        958: [.19444, .69444, .03021, 0],
        959: [0, .44444, 0, 0],
        960: [0, .44444, .03704, 0],
        961: [.19444, .44444, 0, 0],
        962: [.09722, .44444, .07917, 0],
        963: [0, .44444, .03704, 0],
        964: [0, .44444, .13472, 0],
        965: [0, .44444, .03704, 0],
        966: [.19444, .44444, 0, 0],
        967: [.19444, .44444, 0, 0],
        968: [.19444, .69444, .03704, 0],
        969: [0, .44444, .03704, 0],
        977: [0, .69444, 0, 0],
        981: [.19444, .69444, 0, 0],
        982: [0, .44444, .03194, 0],
        1009: [.19444, .44444, 0, 0],
        1013: [0, .44444, 0, 0]
      },
      "Math-Italic": {
        47: [.19444, .69444, 0, 0],
        65: [0, .68333, 0, .13889],
        66: [0, .68333, .05017, .08334],
        67: [0, .68333, .07153, .08334],
        68: [0, .68333, .02778, .05556],
        69: [0, .68333, .05764, .08334],
        70: [0, .68333, .13889, .08334],
        71: [0, .68333, 0, .08334],
        72: [0, .68333, .08125, .05556],
        73: [0, .68333, .07847, .11111],
        74: [0, .68333, .09618, .16667],
        75: [0, .68333, .07153, .05556],
        76: [0, .68333, 0, .02778],
        77: [0, .68333, .10903, .08334],
        78: [0, .68333, .10903, .08334],
        79: [0, .68333, .02778, .08334],
        80: [0, .68333, .13889, .08334],
        81: [.19444, .68333, 0, .08334],
        82: [0, .68333, .00773, .08334],
        83: [0, .68333, .05764, .08334],
        84: [0, .68333, .13889, .08334],
        85: [0, .68333, .10903, .02778],
        86: [0, .68333, .22222, 0],
        87: [0, .68333, .13889, 0],
        88: [0, .68333, .07847, .08334],
        89: [0, .68333, .22222, 0],
        90: [0, .68333, .07153, .08334],
        97: [0, .43056, 0, 0],
        98: [0, .69444, 0, 0],
        99: [0, .43056, 0, .05556],
        100: [0, .69444, 0, .16667],
        101: [0, .43056, 0, .05556],
        102: [.19444, .69444, .10764, .16667],
        103: [.19444, .43056, .03588, .02778],
        104: [0, .69444, 0, 0],
        105: [0, .65952, 0, 0],
        106: [.19444, .65952, .05724, 0],
        107: [0, .69444, .03148, 0],
        108: [0, .69444, .01968, .08334],
        109: [0, .43056, 0, 0],
        110: [0, .43056, 0, 0],
        111: [0, .43056, 0, .05556],
        112: [.19444, .43056, 0, .08334],
        113: [.19444, .43056, .03588, .08334],
        114: [0, .43056, .02778, .05556],
        115: [0, .43056, 0, .05556],
        116: [0, .61508, 0, .08334],
        117: [0, .43056, 0, .02778],
        118: [0, .43056, .03588, .02778],
        119: [0, .43056, .02691, .08334],
        120: [0, .43056, 0, .02778],
        121: [.19444, .43056, .03588, .05556],
        122: [0, .43056, .04398, .05556],
        915: [0, .68333, .13889, .08334],
        916: [0, .68333, 0, .16667],
        920: [0, .68333, .02778, .08334],
        923: [0, .68333, 0, .16667],
        926: [0, .68333, .07569, .08334],
        928: [0, .68333, .08125, .05556],
        931: [0, .68333, .05764, .08334],
        933: [0, .68333, .13889, .05556],
        934: [0, .68333, 0, .08334],
        936: [0, .68333, .11, .05556],
        937: [0, .68333, .05017, .08334],
        945: [0, .43056, .0037, .02778],
        946: [.19444, .69444, .05278, .08334],
        947: [.19444, .43056, .05556, 0],
        948: [0, .69444, .03785, .05556],
        949: [0, .43056, 0, .08334],
        950: [.19444, .69444, .07378, .08334],
        951: [.19444, .43056, .03588, .05556],
        952: [0, .69444, .02778, .08334],
        953: [0, .43056, 0, .05556],
        954: [0, .43056, 0, 0],
        955: [0, .69444, 0, 0],
        956: [.19444, .43056, 0, .02778],
        957: [0, .43056, .06366, .02778],
        958: [.19444, .69444, .04601, .11111],
        959: [0, .43056, 0, .05556],
        960: [0, .43056, .03588, 0],
        961: [.19444, .43056, 0, .08334],
        962: [.09722, .43056, .07986, .08334],
        963: [0, .43056, .03588, 0],
        964: [0, .43056, .1132, .02778],
        965: [0, .43056, .03588, .02778],
        966: [.19444, .43056, 0, .08334],
        967: [.19444, .43056, 0, .05556],
        968: [.19444, .69444, .03588, .11111],
        969: [0, .43056, .03588, 0],
        977: [0, .69444, 0, .08334],
        981: [.19444, .69444, 0, .08334],
        982: [0, .43056, .02778, 0],
        1009: [.19444, .43056, 0, .08334],
        1013: [0, .43056, 0, .05556]
      },
      "Math-Regular": {
        65: [0, .68333, 0, .13889],
        66: [0, .68333, .05017, .08334],
        67: [0, .68333, .07153, .08334],
        68: [0, .68333, .02778, .05556],
        69: [0, .68333, .05764, .08334],
        70: [0, .68333, .13889, .08334],
        71: [0, .68333, 0, .08334],
        72: [0, .68333, .08125, .05556],
        73: [0, .68333, .07847, .11111],
        74: [0, .68333, .09618, .16667],
        75: [0, .68333, .07153, .05556],
        76: [0, .68333, 0, .02778],
        77: [0, .68333, .10903, .08334],
        78: [0, .68333, .10903, .08334],
        79: [0, .68333, .02778, .08334],
        80: [0, .68333, .13889, .08334],
        81: [.19444, .68333, 0, .08334],
        82: [0, .68333, .00773, .08334],
        83: [0, .68333, .05764, .08334],
        84: [0, .68333, .13889, .08334],
        85: [0, .68333, .10903, .02778],
        86: [0, .68333, .22222, 0],
        87: [0, .68333, .13889, 0],
        88: [0, .68333, .07847, .08334],
        89: [0, .68333, .22222, 0],
        90: [0, .68333, .07153, .08334],
        97: [0, .43056, 0, 0],
        98: [0, .69444, 0, 0],
        99: [0, .43056, 0, .05556],
        100: [0, .69444, 0, .16667],
        101: [0, .43056, 0, .05556],
        102: [.19444, .69444, .10764, .16667],
        103: [.19444, .43056, .03588, .02778],
        104: [0, .69444, 0, 0],
        105: [0, .65952, 0, 0],
        106: [.19444, .65952, .05724, 0],
        107: [0, .69444, .03148, 0],
        108: [0, .69444, .01968, .08334],
        109: [0, .43056, 0, 0],
        110: [0, .43056, 0, 0],
        111: [0, .43056, 0, .05556],
        112: [.19444, .43056, 0, .08334],
        113: [.19444, .43056, .03588, .08334],
        114: [0, .43056, .02778, .05556],
        115: [0, .43056, 0, .05556],
        116: [0, .61508, 0, .08334],
        117: [0, .43056, 0, .02778],
        118: [0, .43056, .03588, .02778],
        119: [0, .43056, .02691, .08334],
        120: [0, .43056, 0, .02778],
        121: [.19444, .43056, .03588, .05556],
        122: [0, .43056, .04398, .05556],
        915: [0, .68333, .13889, .08334],
        916: [0, .68333, 0, .16667],
        920: [0, .68333, .02778, .08334],
        923: [0, .68333, 0, .16667],
        926: [0, .68333, .07569, .08334],
        928: [0, .68333, .08125, .05556],
        931: [0, .68333, .05764, .08334],
        933: [0, .68333, .13889, .05556],
        934: [0, .68333, 0, .08334],
        936: [0, .68333, .11, .05556],
        937: [0, .68333, .05017, .08334],
        945: [0, .43056, .0037, .02778],
        946: [.19444, .69444, .05278, .08334],
        947: [.19444, .43056, .05556, 0],
        948: [0, .69444, .03785, .05556],
        949: [0, .43056, 0, .08334],
        950: [.19444, .69444, .07378, .08334],
        951: [.19444, .43056, .03588, .05556],
        952: [0, .69444, .02778, .08334],
        953: [0, .43056, 0, .05556],
        954: [0, .43056, 0, 0],
        955: [0, .69444, 0, 0],
        956: [.19444, .43056, 0, .02778],
        957: [0, .43056, .06366, .02778],
        958: [.19444, .69444, .04601, .11111],
        959: [0, .43056, 0, .05556],
        960: [0, .43056, .03588, 0],
        961: [.19444, .43056, 0, .08334],
        962: [.09722, .43056, .07986, .08334],
        963: [0, .43056, .03588, 0],
        964: [0, .43056, .1132, .02778],
        965: [0, .43056, .03588, .02778],
        966: [.19444, .43056, 0, .08334],
        967: [.19444, .43056, 0, .05556],
        968: [.19444, .69444, .03588, .11111],
        969: [0, .43056, .03588, 0],
        977: [0, .69444, 0, .08334],
        981: [.19444, .69444, 0, .08334],
        982: [0, .43056, .02778, 0],
        1009: [.19444, .43056, 0, .08334],
        1013: [0, .43056, 0, .05556]
      },
      "SansSerif-Regular": {
        33: [0, .69444, 0, 0],
        34: [0, .69444, 0, 0],
        35: [.19444, .69444, 0, 0],
        36: [.05556, .75, 0, 0],
        37: [.05556, .75, 0, 0],
        38: [0, .69444, 0, 0],
        39: [0, .69444, 0, 0],
        40: [.25, .75, 0, 0],
        41: [.25, .75, 0, 0],
        42: [0, .75, 0, 0],
        43: [.08333, .58333, 0, 0],
        44: [.125, .08333, 0, 0],
        45: [0, .44444, 0, 0],
        46: [0, .08333, 0, 0],
        47: [.25, .75, 0, 0],
        48: [0, .65556, 0, 0],
        49: [0, .65556, 0, 0],
        50: [0, .65556, 0, 0],
        51: [0, .65556, 0, 0],
        52: [0, .65556, 0, 0],
        53: [0, .65556, 0, 0],
        54: [0, .65556, 0, 0],
        55: [0, .65556, 0, 0],
        56: [0, .65556, 0, 0],
        57: [0, .65556, 0, 0],
        58: [0, .44444, 0, 0],
        59: [.125, .44444, 0, 0],
        61: [-.13, .37, 0, 0],
        63: [0, .69444, 0, 0],
        64: [0, .69444, 0, 0],
        65: [0, .69444, 0, 0],
        66: [0, .69444, 0, 0],
        67: [0, .69444, 0, 0],
        68: [0, .69444, 0, 0],
        69: [0, .69444, 0, 0],
        70: [0, .69444, 0, 0],
        71: [0, .69444, 0, 0],
        72: [0, .69444, 0, 0],
        73: [0, .69444, 0, 0],
        74: [0, .69444, 0, 0],
        75: [0, .69444, 0, 0],
        76: [0, .69444, 0, 0],
        77: [0, .69444, 0, 0],
        78: [0, .69444, 0, 0],
        79: [0, .69444, 0, 0],
        80: [0, .69444, 0, 0],
        81: [.125, .69444, 0, 0],
        82: [0, .69444, 0, 0],
        83: [0, .69444, 0, 0],
        84: [0, .69444, 0, 0],
        85: [0, .69444, 0, 0],
        86: [0, .69444, .01389, 0],
        87: [0, .69444, .01389, 0],
        88: [0, .69444, 0, 0],
        89: [0, .69444, .025, 0],
        90: [0, .69444, 0, 0],
        91: [.25, .75, 0, 0],
        93: [.25, .75, 0, 0],
        94: [0, .69444, 0, 0],
        95: [.35, .09444, .02778, 0],
        97: [0, .44444, 0, 0],
        98: [0, .69444, 0, 0],
        99: [0, .44444, 0, 0],
        100: [0, .69444, 0, 0],
        101: [0, .44444, 0, 0],
        102: [0, .69444, .06944, 0],
        103: [.19444, .44444, .01389, 0],
        104: [0, .69444, 0, 0],
        105: [0, .67937, 0, 0],
        106: [.19444, .67937, 0, 0],
        107: [0, .69444, 0, 0],
        108: [0, .69444, 0, 0],
        109: [0, .44444, 0, 0],
        110: [0, .44444, 0, 0],
        111: [0, .44444, 0, 0],
        112: [.19444, .44444, 0, 0],
        113: [.19444, .44444, 0, 0],
        114: [0, .44444, .01389, 0],
        115: [0, .44444, 0, 0],
        116: [0, .57143, 0, 0],
        117: [0, .44444, 0, 0],
        118: [0, .44444, .01389, 0],
        119: [0, .44444, .01389, 0],
        120: [0, .44444, 0, 0],
        121: [.19444, .44444, .01389, 0],
        122: [0, .44444, 0, 0],
        126: [.35, .32659, 0, 0],
        305: [0, .44444, 0, 0],
        567: [.19444, .44444, 0, 0],
        768: [0, .69444, 0, 0],
        769: [0, .69444, 0, 0],
        770: [0, .69444, 0, 0],
        771: [0, .67659, 0, 0],
        772: [0, .60889, 0, 0],
        774: [0, .69444, 0, 0],
        775: [0, .67937, 0, 0],
        776: [0, .67937, 0, 0],
        778: [0, .69444, 0, 0],
        779: [0, .69444, 0, 0],
        780: [0, .63194, 0, 0],
        915: [0, .69444, 0, 0],
        916: [0, .69444, 0, 0],
        920: [0, .69444, 0, 0],
        923: [0, .69444, 0, 0],
        926: [0, .69444, 0, 0],
        928: [0, .69444, 0, 0],
        931: [0, .69444, 0, 0],
        933: [0, .69444, 0, 0],
        934: [0, .69444, 0, 0],
        936: [0, .69444, 0, 0],
        937: [0, .69444, 0, 0],
        8211: [0, .44444, .02778, 0],
        8212: [0, .44444, .02778, 0],
        8216: [0, .69444, 0, 0],
        8217: [0, .69444, 0, 0],
        8220: [0, .69444, 0, 0],
        8221: [0, .69444, 0, 0]
      },
      "Script-Regular": {
        65: [0, .7, .22925, 0],
        66: [0, .7, .04087, 0],
        67: [0, .7, .1689, 0],
        68: [0, .7, .09371, 0],
        69: [0, .7, .18583, 0],
        70: [0, .7, .13634, 0],
        71: [0, .7, .17322, 0],
        72: [0, .7, .29694, 0],
        73: [0, .7, .19189, 0],
        74: [.27778, .7, .19189, 0],
        75: [0, .7, .31259, 0],
        76: [0, .7, .19189, 0],
        77: [0, .7, .15981, 0],
        78: [0, .7, .3525, 0],
        79: [0, .7, .08078, 0],
        80: [0, .7, .08078, 0],
        81: [0, .7, .03305, 0],
        82: [0, .7, .06259, 0],
        83: [0, .7, .19189, 0],
        84: [0, .7, .29087, 0],
        85: [0, .7, .25815, 0],
        86: [0, .7, .27523, 0],
        87: [0, .7, .27523, 0],
        88: [0, .7, .26006, 0],
        89: [0, .7, .2939, 0],
        90: [0, .7, .24037, 0]
      },
      "Size1-Regular": {
        40: [.35001, .85, 0, 0],
        41: [.35001, .85, 0, 0],
        47: [.35001, .85, 0, 0],
        91: [.35001, .85, 0, 0],
        92: [.35001, .85, 0, 0],
        93: [.35001, .85, 0, 0],
        123: [.35001, .85, 0, 0],
        125: [.35001, .85, 0, 0],
        710: [0, .72222, 0, 0],
        732: [0, .72222, 0, 0],
        770: [0, .72222, 0, 0],
        771: [0, .72222, 0, 0],
        8214: [-99e-5, .601, 0, 0],
        8593: [1e-5, .6, 0, 0],
        8595: [1e-5, .6, 0, 0],
        8657: [1e-5, .6, 0, 0],
        8659: [1e-5, .6, 0, 0],
        8719: [.25001, .75, 0, 0],
        8720: [.25001, .75, 0, 0],
        8721: [.25001, .75, 0, 0],
        8730: [.35001, .85, 0, 0],
        8739: [-.00599, .606, 0, 0],
        8741: [-.00599, .606, 0, 0],
        8747: [.30612, .805, .19445, 0],
        8748: [.306, .805, .19445, 0],
        8749: [.306, .805, .19445, 0],
        8750: [.30612, .805, .19445, 0],
        8896: [.25001, .75, 0, 0],
        8897: [.25001, .75, 0, 0],
        8898: [.25001, .75, 0, 0],
        8899: [.25001, .75, 0, 0],
        8968: [.35001, .85, 0, 0],
        8969: [.35001, .85, 0, 0],
        8970: [.35001, .85, 0, 0],
        8971: [.35001, .85, 0, 0],
        9168: [-99e-5, .601, 0, 0],
        10216: [.35001, .85, 0, 0],
        10217: [.35001, .85, 0, 0],
        10752: [.25001, .75, 0, 0],
        10753: [.25001, .75, 0, 0],
        10754: [.25001, .75, 0, 0],
        10756: [.25001, .75, 0, 0],
        10758: [.25001, .75, 0, 0]
      },
      "Size2-Regular": {
        40: [.65002, 1.15, 0, 0],
        41: [.65002, 1.15, 0, 0],
        47: [.65002, 1.15, 0, 0],
        91: [.65002, 1.15, 0, 0],
        92: [.65002, 1.15, 0, 0],
        93: [.65002, 1.15, 0, 0],
        123: [.65002, 1.15, 0, 0],
        125: [.65002, 1.15, 0, 0],
        710: [0, .75, 0, 0],
        732: [0, .75, 0, 0],
        770: [0, .75, 0, 0],
        771: [0, .75, 0, 0],
        8719: [.55001, 1.05, 0, 0],
        8720: [.55001, 1.05, 0, 0],
        8721: [.55001, 1.05, 0, 0],
        8730: [.65002, 1.15, 0, 0],
        8747: [.86225, 1.36, .44445, 0],
        8748: [.862, 1.36, .44445, 0],
        8749: [.862, 1.36, .44445, 0],
        8750: [.86225, 1.36, .44445, 0],
        8896: [.55001, 1.05, 0, 0],
        8897: [.55001, 1.05, 0, 0],
        8898: [.55001, 1.05, 0, 0],
        8899: [.55001, 1.05, 0, 0],
        8968: [.65002, 1.15, 0, 0],
        8969: [.65002, 1.15, 0, 0],
        8970: [.65002, 1.15, 0, 0],
        8971: [.65002, 1.15, 0, 0],
        10216: [.65002, 1.15, 0, 0],
        10217: [.65002, 1.15, 0, 0],
        10752: [.55001, 1.05, 0, 0],
        10753: [.55001, 1.05, 0, 0],
        10754: [.55001, 1.05, 0, 0],
        10756: [.55001, 1.05, 0, 0],
        10758: [.55001, 1.05, 0, 0]
      },
      "Size3-Regular": {
        40: [.95003, 1.45, 0, 0],
        41: [.95003, 1.45, 0, 0],
        47: [.95003, 1.45, 0, 0],
        91: [.95003, 1.45, 0, 0],
        92: [.95003, 1.45, 0, 0],
        93: [.95003, 1.45, 0, 0],
        123: [.95003, 1.45, 0, 0],
        125: [.95003, 1.45, 0, 0],
        710: [0, .75, 0, 0],
        732: [0, .75, 0, 0],
        770: [0, .75, 0, 0],
        771: [0, .75, 0, 0],
        8730: [.95003, 1.45, 0, 0],
        8968: [.95003, 1.45, 0, 0],
        8969: [.95003, 1.45, 0, 0],
        8970: [.95003, 1.45, 0, 0],
        8971: [.95003, 1.45, 0, 0],
        10216: [.95003, 1.45, 0, 0],
        10217: [.95003, 1.45, 0, 0]
      },
      "Size4-Regular": {
        40: [1.25003, 1.75, 0, 0],
        41: [1.25003, 1.75, 0, 0],
        47: [1.25003, 1.75, 0, 0],
        91: [1.25003, 1.75, 0, 0],
        92: [1.25003, 1.75, 0, 0],
        93: [1.25003, 1.75, 0, 0],
        123: [1.25003, 1.75, 0, 0],
        125: [1.25003, 1.75, 0, 0],
        710: [0, .825, 0, 0],
        732: [0, .825, 0, 0],
        770: [0, .825, 0, 0],
        771: [0, .825, 0, 0],
        8730: [1.25003, 1.75, 0, 0],
        8968: [1.25003, 1.75, 0, 0],
        8969: [1.25003, 1.75, 0, 0],
        8970: [1.25003, 1.75, 0, 0],
        8971: [1.25003, 1.75, 0, 0],
        9115: [.64502, 1.155, 0, 0],
        9116: [1e-5, .6, 0, 0],
        9117: [.64502, 1.155, 0, 0],
        9118: [.64502, 1.155, 0, 0],
        9119: [1e-5, .6, 0, 0],
        9120: [.64502, 1.155, 0, 0],
        9121: [.64502, 1.155, 0, 0],
        9122: [-99e-5, .601, 0, 0],
        9123: [.64502, 1.155, 0, 0],
        9124: [.64502, 1.155, 0, 0],
        9125: [-99e-5, .601, 0, 0],
        9126: [.64502, 1.155, 0, 0],
        9127: [1e-5, .9, 0, 0],
        9128: [.65002, 1.15, 0, 0],
        9129: [.90001, 0, 0, 0],
        9130: [0, .3, 0, 0],
        9131: [1e-5, .9, 0, 0],
        9132: [.65002, 1.15, 0, 0],
        9133: [.90001, 0, 0, 0],
        9143: [.88502, .915, 0, 0],
        10216: [1.25003, 1.75, 0, 0],
        10217: [1.25003, 1.75, 0, 0],
        57344: [-.00499, .605, 0, 0],
        57345: [-.00499, .605, 0, 0],
        57680: [0, .12, 0, 0],
        57681: [0, .12, 0, 0],
        57682: [0, .12, 0, 0],
        57683: [0, .12, 0, 0]
      },
      "Typewriter-Regular": {
        33: [0, .61111, 0, 0],
        34: [0, .61111, 0, 0],
        35: [0, .61111, 0, 0],
        36: [.08333, .69444, 0, 0],
        37: [.08333, .69444, 0, 0],
        38: [0, .61111, 0, 0],
        39: [0, .61111, 0, 0],
        40: [.08333, .69444, 0, 0],
        41: [.08333, .69444, 0, 0],
        42: [0, .52083, 0, 0],
        43: [-.08056, .53055, 0, 0],
        44: [.13889, .125, 0, 0],
        45: [-.08056, .53055, 0, 0],
        46: [0, .125, 0, 0],
        47: [.08333, .69444, 0, 0],
        48: [0, .61111, 0, 0],
        49: [0, .61111, 0, 0],
        50: [0, .61111, 0, 0],
        51: [0, .61111, 0, 0],
        52: [0, .61111, 0, 0],
        53: [0, .61111, 0, 0],
        54: [0, .61111, 0, 0],
        55: [0, .61111, 0, 0],
        56: [0, .61111, 0, 0],
        57: [0, .61111, 0, 0],
        58: [0, .43056, 0, 0],
        59: [.13889, .43056, 0, 0],
        60: [-.05556, .55556, 0, 0],
        61: [-.19549, .41562, 0, 0],
        62: [-.05556, .55556, 0, 0],
        63: [0, .61111, 0, 0],
        64: [0, .61111, 0, 0],
        65: [0, .61111, 0, 0],
        66: [0, .61111, 0, 0],
        67: [0, .61111, 0, 0],
        68: [0, .61111, 0, 0],
        69: [0, .61111, 0, 0],
        70: [0, .61111, 0, 0],
        71: [0, .61111, 0, 0],
        72: [0, .61111, 0, 0],
        73: [0, .61111, 0, 0],
        74: [0, .61111, 0, 0],
        75: [0, .61111, 0, 0],
        76: [0, .61111, 0, 0],
        77: [0, .61111, 0, 0],
        78: [0, .61111, 0, 0],
        79: [0, .61111, 0, 0],
        80: [0, .61111, 0, 0],
        81: [.13889, .61111, 0, 0],
        82: [0, .61111, 0, 0],
        83: [0, .61111, 0, 0],
        84: [0, .61111, 0, 0],
        85: [0, .61111, 0, 0],
        86: [0, .61111, 0, 0],
        87: [0, .61111, 0, 0],
        88: [0, .61111, 0, 0],
        89: [0, .61111, 0, 0],
        90: [0, .61111, 0, 0],
        91: [.08333, .69444, 0, 0],
        92: [.08333, .69444, 0, 0],
        93: [.08333, .69444, 0, 0],
        94: [0, .61111, 0, 0],
        95: [.09514, 0, 0, 0],
        96: [0, .61111, 0, 0],
        97: [0, .43056, 0, 0],
        98: [0, .61111, 0, 0],
        99: [0, .43056, 0, 0],
        100: [0, .61111, 0, 0],
        101: [0, .43056, 0, 0],
        102: [0, .61111, 0, 0],
        103: [.22222, .43056, 0, 0],
        104: [0, .61111, 0, 0],
        105: [0, .61111, 0, 0],
        106: [.22222, .61111, 0, 0],
        107: [0, .61111, 0, 0],
        108: [0, .61111, 0, 0],
        109: [0, .43056, 0, 0],
        110: [0, .43056, 0, 0],
        111: [0, .43056, 0, 0],
        112: [.22222, .43056, 0, 0],
        113: [.22222, .43056, 0, 0],
        114: [0, .43056, 0, 0],
        115: [0, .43056, 0, 0],
        116: [0, .55358, 0, 0],
        117: [0, .43056, 0, 0],
        118: [0, .43056, 0, 0],
        119: [0, .43056, 0, 0],
        120: [0, .43056, 0, 0],
        121: [.22222, .43056, 0, 0],
        122: [0, .43056, 0, 0],
        123: [.08333, .69444, 0, 0],
        124: [.08333, .69444, 0, 0],
        125: [.08333, .69444, 0, 0],
        126: [0, .61111, 0, 0],
        127: [0, .61111, 0, 0],
        305: [0, .43056, 0, 0],
        567: [.22222, .43056, 0, 0],
        768: [0, .61111, 0, 0],
        769: [0, .61111, 0, 0],
        770: [0, .61111, 0, 0],
        771: [0, .61111, 0, 0],
        772: [0, .56555, 0, 0],
        774: [0, .61111, 0, 0],
        776: [0, .61111, 0, 0],
        778: [0, .61111, 0, 0],
        780: [0, .56597, 0, 0],
        915: [0, .61111, 0, 0],
        916: [0, .61111, 0, 0],
        920: [0, .61111, 0, 0],
        923: [0, .61111, 0, 0],
        926: [0, .61111, 0, 0],
        928: [0, .61111, 0, 0],
        931: [0, .61111, 0, 0],
        933: [0, .61111, 0, 0],
        934: [0, .61111, 0, 0],
        936: [0, .61111, 0, 0],
        937: [0, .61111, 0, 0],
        2018: [0, .61111, 0, 0],
        2019: [0, .61111, 0, 0],
        8242: [0, .61111, 0, 0]
      }
    }
  }, {}],
  107: [function (e, t, r) {
    function n(e, r, n) {
      "string" == typeof e && (e = [e]), "number" == typeof r && (r = { numArgs: r });
      for (var i = {
        numArgs: r.numArgs,
        argTypes: r.argTypes,
        greediness: void 0 === r.greediness ? 1 : r.greediness,
        allowedInText: !!r.allowedInText,
        numOptionalArgs: r.numOptionalArgs || 0,
        infix: !!r.infix,
        handler: n
      }, o = 0; o < e.length; ++o)t.exports[e[o]] = i
    }

    var i = e("./utils"), o = e("./ParseError"), s = e("./parseData").ParseNode, a = function (e) {
      return "ordgroup" === e.type ? e.value : [e]
    };
    n("\\sqrt", { numArgs: 1, numOptionalArgs: 1 }, function (e, t) {
      var r = t[0];
      return { type: "sqrt", body: t[1], index: r }
    });
    var u = {
      "\\text": void 0,
      "\\textrm": "mathrm",
      "\\textsf": "mathsf",
      "\\texttt": "mathtt",
      "\\textnormal": "mathrm",
      "\\textbf": "mathbf",
      "\\textit": "textit"
    };
    n(["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textit"],
      { numArgs: 1, argTypes: ["text"], greediness: 2, allowedInText: !0 },
      function (e, t) {
        var r = t[0];
        return { type: "text", body: a(r), style: u[e.funcName] }
      }), n("\\color",
      { numArgs: 2, allowedInText: !0, greediness: 3, argTypes: ["color", "original"] },
      function (e, t) {
        var r = t[0], n = t[1];
        return { type: "color", color: r.value, value: a(n) }
      }), n("\\overline", { numArgs: 1 }, function (e, t) {
      return { type: "overline", body: t[0] }
    }), n("\\underline", { numArgs: 1 }, function (e, t) {
      return { type: "underline", body: t[0] }
    }), n("\\rule",
      { numArgs: 2, numOptionalArgs: 1, argTypes: ["size", "size", "size"] },
      function (e, t) {
        var r = t[0], n = t[1], i = t[2];
        return { type: "rule", shift: r && r.value, width: n.value, height: i.value }
      }), n(["\\kern", "\\mkern"], { numArgs: 1, argTypes: ["size"] }, function (e, t) {
      return { type: "kern", dimension: t[0].value }
    }), n("\\KaTeX", { numArgs: 0 }, function (e) {
      return { type: "katex" }
    }), n("\\phantom", { numArgs: 1 }, function (e, t) {
      var r = t[0];
      return { type: "phantom", value: a(r) }
    }), n(["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
      { numArgs: 1 },
      function (e, t) {
        var r = t[0];
        return { type: "mclass", mclass: "m" + e.funcName.substr(5), value: a(r) }
      }), n("\\stackrel", { numArgs: 2 }, function (e, t) {
      var r = t[0], n = t[1], i = new s("op",
        { type: "op", limits: !0, alwaysHandleSupSub: !0, symbol: !1, value: a(n) },
        n.mode);
      return {
        type: "mclass",
        mclass: "mrel",
        value: [new s("supsub", { base: i, sup: r, sub: null }, r.mode)]
      }
    }), n("\\bmod", { numArgs: 0 }, function (e, t) {
      return { type: "mod", modType: "bmod", value: null }
    }), n(["\\pod", "\\pmod", "\\mod"], { numArgs: 1 }, function (e, t) {
      var r = t[0];
      return { type: "mod", modType: e.funcName.substr(1), value: a(r) }
    });
    var c = {
        "\\bigl": { mclass: "mopen", size: 1 },
        "\\Bigl": { mclass: "mopen", size: 2 },
        "\\biggl": { mclass: "mopen", size: 3 },
        "\\Biggl": { mclass: "mopen", size: 4 },
        "\\bigr": { mclass: "mclose", size: 1 },
        "\\Bigr": { mclass: "mclose", size: 2 },
        "\\biggr": { mclass: "mclose", size: 3 },
        "\\Biggr": { mclass: "mclose", size: 4 },
        "\\bigm": { mclass: "mrel", size: 1 },
        "\\Bigm": { mclass: "mrel", size: 2 },
        "\\biggm": { mclass: "mrel", size: 3 },
        "\\Biggm": { mclass: "mrel", size: 4 },
        "\\big": { mclass: "mord", size: 1 },
        "\\Big": { mclass: "mord", size: 2 },
        "\\bigg": { mclass: "mord", size: 3 },
        "\\Bigg": { mclass: "mord", size: 4 }
      },
      l = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "<", ">", "\\langle", "\\rangle", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."],
      h = { "\\Bbb": "\\mathbb", "\\bold": "\\mathbf", "\\frak": "\\mathfrak" };
    n(["\\blue", "\\orange", "\\pink", "\\red", "\\green", "\\gray", "\\purple", "\\blueA", "\\blueB", "\\blueC", "\\blueD", "\\blueE", "\\tealA", "\\tealB", "\\tealC", "\\tealD", "\\tealE", "\\greenA", "\\greenB", "\\greenC", "\\greenD", "\\greenE", "\\goldA", "\\goldB", "\\goldC", "\\goldD", "\\goldE", "\\redA", "\\redB", "\\redC", "\\redD", "\\redE", "\\maroonA", "\\maroonB", "\\maroonC", "\\maroonD", "\\maroonE", "\\purpleA", "\\purpleB", "\\purpleC", "\\purpleD", "\\purpleE", "\\mintA", "\\mintB", "\\mintC", "\\grayA", "\\grayB", "\\grayC", "\\grayD", "\\grayE", "\\grayF", "\\grayG", "\\grayH", "\\grayI", "\\kaBlue", "\\kaGreen"],
      { numArgs: 1, allowedInText: !0, greediness: 3 },
      function (e, t) {
        var r = t[0];
        return { type: "color", color: "katex-" + e.funcName.slice(1), value: a(r) }
      }), n(["\\arcsin", "\\arccos", "\\arctan", "\\arg", "\\cos", "\\cosh", "\\cot", "\\coth", "\\csc", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\tan", "\\tanh"],
      { numArgs: 0 },
      function (e) {
        return { type: "op", limits: !1, symbol: !1, body: e.funcName }
      }), n(["\\det", "\\gcd", "\\inf", "\\lim", "\\liminf", "\\limsup", "\\max", "\\min", "\\Pr", "\\sup"],
      { numArgs: 0 },
      function (e) {
        return { type: "op", limits: !0, symbol: !1, body: e.funcName }
      }), n(["\\int", "\\iint", "\\iiint", "\\oint"], { numArgs: 0 }, function (e) {
      return { type: "op", limits: !1, symbol: !0, body: e.funcName }
    }), n(["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint"],
      { numArgs: 0 },
      function (e) {
        return { type: "op", limits: !0, symbol: !0, body: e.funcName }
      }), n("\\mathop", { numArgs: 1 }, function (e, t) {
      var r = t[0];
      return { type: "op", limits: !1, symbol: !1, value: a(r) }
    }), n(["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac"],
      { numArgs: 2, greediness: 2 },
      function (e, t) {
        var r, n = t[0], i = t[1], o = null, s = null, a = "auto";
        switch (e.funcName) {
          case"\\dfrac":
          case"\\frac":
          case"\\tfrac":
            r = !0;
            break;
          case"\\\\atopfrac":
            r = !1;
            break;
          case"\\dbinom":
          case"\\binom":
          case"\\tbinom":
            r = !1, o = "(", s = ")";
            break;
          default:
            throw new Error("Unrecognized genfrac command")
        }
        switch (e.funcName) {
          case"\\dfrac":
          case"\\dbinom":
            a = "display";
            break;
          case"\\tfrac":
          case"\\tbinom":
            a = "text"
        }
        return {
          type: "genfrac",
          numer: n,
          denom: i,
          hasBarLine: r,
          leftDelim: o,
          rightDelim: s,
          size: a
        }
      }), n(["\\llap", "\\rlap"], { numArgs: 1, allowedInText: !0 }, function (e, t) {
      var r = t[0];
      return { type: e.funcName.slice(1), body: r }
    });
    var p = function (e, t) {
      if (i.contains(l, e.value))return e;
      throw new o("Invalid delimiter: '" + e.value + "' after '" + t.funcName + "'", e)
    };
    n(["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
      { numArgs: 1 },
      function (e, t) {
        var r = p(t[0], e);
        return {
          type: "delimsizing",
          size: c[e.funcName].size,
          mclass: c[e.funcName].mclass,
          value: r.value
        }
      }), n(["\\left", "\\right"], { numArgs: 1 }, function (e, t) {
      return { type: "leftright", value: p(t[0], e).value }
    }), n("\\middle", { numArgs: 1 }, function (e, t) {
      var r = p(t[0], e);
      if (!e.parser.leftrightDepth)throw new o("\\middle without preceding \\left", r);
      return { type: "middle", value: r.value }
    }), n(["\\tiny", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"],
      0,
      null), n(["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
      0,
      null), n(["\\mathrm", "\\mathit", "\\mathbf", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"],
      { numArgs: 1, greediness: 2 },
      function (e, t) {
        var r = t[0], n = e.funcName;
        return n in h && (n = h[n]), { type: "font", font: n.slice(1), body: r }
      }), n(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot"],
      { numArgs: 1 },
      function (e, t) {
        var r = t[0];
        return { type: "accent", accent: e.funcName, base: r }
      }), n(["\\over", "\\choose", "\\atop"], { numArgs: 0, infix: !0 }, function (e) {
      var t;
      switch (e.funcName) {
        case"\\over":
          t = "\\frac";
          break;
        case"\\choose":
          t = "\\binom";
          break;
        case"\\atop":
          t = "\\\\atopfrac";
          break;
        default:
          throw new Error("Unrecognized infix genfrac command")
      }
      return { type: "infix", replaceWith: t, token: e.token }
    }), n(["\\\\", "\\cr"],
      { numArgs: 0, numOptionalArgs: 1, argTypes: ["size"] },
      function (e, t) {
        return { type: "cr", size: t[0] }
      }), n(["\\begin", "\\end"], { numArgs: 1, argTypes: ["text"] }, function (e, t) {
      var r = t[0];
      if ("ordgroup" !== r.type)throw new o("Invalid environment name", r);
      for (var n = "", i = 0; i < r.value.length; ++i)n += r.value[i].value;
      return { type: "environment", name: n, nameGroup: r }
    })
  }, { "./ParseError": 94, "./parseData": 109, "./utils": 113 }],
  108: [function (e, t, r) {
    function n(e, t) {
      this.type = e, this.attributes = {}, this.children = t || []
    }

    function i(e) {
      this.text = e
    }

    var o = e("./utils");
    n.prototype.setAttribute = function (e, t) {
      this.attributes[e] = t
    }, n.prototype.toNode = function () {
      var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
      for (var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,
        t) && e.setAttribute(t, this.attributes[t]);
      for (var r = 0; r < this.children.length; r++)e.appendChild(this.children[r].toNode());
      return e
    }, n.prototype.toMarkup = function () {
      var e = "<" + this.type;
      for (var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,
        t) && (e += " " + t + '="', e += o.escape(this.attributes[t]), e += '"');
      e += ">";
      for (var r = 0; r < this.children.length; r++)e += this.children[r].toMarkup();
      return e += "</" + this.type + ">"
    }, i.prototype.toNode = function () {
      return document.createTextNode(this.text)
    }, i.prototype.toMarkup = function () {
      return o.escape(this.text)
    }, t.exports = { MathNode: n, TextNode: i }
  }, { "./utils": 113 }],
  109: [function (e, t, r) {
    t.exports = {
      ParseNode: function (e, t, r, n, i) {
        this.type = e, this.value = t, this.mode = r, !n || i && i.lexer !== n.lexer || (this.lexer = n.lexer, this.start = n.start, this.end = (i || n).end)
      }
    }
  }, {}],
  110: [function (e, t, r) {
    var n = e("./Parser");
    t.exports = function (e, t) {
      if (!("string" == typeof e || e instanceof String))throw new TypeError(
        "KaTeX can only parse string typed expression");
      return new n(e, t).parse()
    }
  }, { "./Parser": 95 }],
  111: [function (e, t, r) {
    function n(e, r, n, i, o) {
      t.exports[e][o] = { font: r, group: n, replace: i }
    }

    t.exports = { math: {}, text: {} };
    var i = "math", o = "text", s = "main", a = "ams", u = "accent", c = "bin", l = "close",
      h = "mathord", p = "op", f = "open", d = "rel", b = "spacing", m = "textord";
    n(i, s, d, "≡", "\\equiv"), n(i, s, d, "≺", "\\prec"), n(i, s, d, "≻", "\\succ"), n(i,
      s,
      d,
      "∼",
      "\\sim"), n(i, s, d, "⊥", "\\perp"), n(i, s, d, "⪯", "\\preceq"), n(i,
      s,
      d,
      "⪰",
      "\\succeq"), n(i, s, d, "≃", "\\simeq"), n(i, s, d, "∣", "\\mid"), n(i, s, d, "≪", "\\ll"), n(
      i,
      s,
      d,
      "≫",
      "\\gg"), n(i, s, d, "≍", "\\asymp"), n(i, s, d, "∥", "\\parallel"), n(i,
      s,
      d,
      "⋈",
      "\\bowtie"), n(i, s, d, "⌣", "\\smile"), n(i, s, d, "⊑", "\\sqsubseteq"), n(i,
      s,
      d,
      "⊒",
      "\\sqsupseteq"), n(i, s, d, "≐", "\\doteq"), n(i, s, d, "⌢", "\\frown"), n(i,
      s,
      d,
      "∋",
      "\\ni"), n(i, s, d, "∝", "\\propto"), n(i, s, d, "⊢", "\\vdash"), n(i,
      s,
      d,
      "⊣",
      "\\dashv"), n(i, s, d, "∋", "\\owns"), n(i, s, "punct", ".", "\\ldotp"), n(i,
      s,
      "punct",
      "⋅",
      "\\cdotp"), n(i, s, m, "#", "\\#"), n(o, s, m, "#", "\\#"), n(i, s, m, "&", "\\&"), n(o,
      s,
      m,
      "&",
      "\\&"), n(i, s, m, "ℵ", "\\aleph"), n(i, s, m, "∀", "\\forall"), n(i, s, m, "ℏ", "\\hbar"), n(
      i,
      s,
      m,
      "∃",
      "\\exists"), n(i, s, m, "∇", "\\nabla"), n(i, s, m, "♭", "\\flat"), n(i,
      s,
      m,
      "ℓ",
      "\\ell"), n(i, s, m, "♮", "\\natural"), n(i, s, m, "♣", "\\clubsuit"), n(i,
      s,
      m,
      "℘",
      "\\wp"), n(i, s, m, "♯", "\\sharp"), n(i, s, m, "♢", "\\diamondsuit"), n(i,
      s,
      m,
      "ℜ",
      "\\Re"), n(i, s, m, "♡", "\\heartsuit"), n(i, s, m, "ℑ", "\\Im"), n(i,
      s,
      m,
      "♠",
      "\\spadesuit"), n(i, s, m, "†", "\\dag"), n(i, s, m, "‡", "\\ddag"), n(i,
      s,
      l,
      "⎱",
      "\\rmoustache"), n(i, s, f, "⎰", "\\lmoustache"), n(i, s, l, "⟯", "\\rgroup"), n(i,
      s,
      f,
      "⟮",
      "\\lgroup"), n(i, s, c, "∓", "\\mp"), n(i, s, c, "⊖", "\\ominus"), n(i,
      s,
      c,
      "⊎",
      "\\uplus"), n(i, s, c, "⊓", "\\sqcap"), n(i, s, c, "∗", "\\ast"), n(i,
      s,
      c,
      "⊔",
      "\\sqcup"), n(i, s, c, "◯", "\\bigcirc"), n(i, s, c, "∙", "\\bullet"), n(i,
      s,
      c,
      "‡",
      "\\ddagger"), n(i, s, c, "≀", "\\wr"), n(i, s, c, "⨿", "\\amalg"), n(i,
      s,
      d,
      "⟵",
      "\\longleftarrow"), n(i, s, d, "⇐", "\\Leftarrow"), n(i, s, d, "⟸", "\\Longleftarrow"), n(i,
      s,
      d,
      "⟶",
      "\\longrightarrow"), n(i, s, d, "⇒", "\\Rightarrow"), n(i,
      s,
      d,
      "⟹",
      "\\Longrightarrow"), n(i, s, d, "↔", "\\leftrightarrow"), n(i,
      s,
      d,
      "⟷",
      "\\longleftrightarrow"), n(i, s, d, "⇔", "\\Leftrightarrow"), n(i,
      s,
      d,
      "⟺",
      "\\Longleftrightarrow"), n(i, s, d, "↦", "\\mapsto"), n(i, s, d, "⟼", "\\longmapsto"), n(i,
      s,
      d,
      "↗",
      "\\nearrow"), n(i, s, d, "↩", "\\hookleftarrow"), n(i, s, d, "↪", "\\hookrightarrow"), n(i,
      s,
      d,
      "↘",
      "\\searrow"), n(i, s, d, "↼", "\\leftharpoonup"), n(i, s, d, "⇀", "\\rightharpoonup"), n(i,
      s,
      d,
      "↙",
      "\\swarrow"), n(i, s, d, "↽", "\\leftharpoondown"), n(i,
      s,
      d,
      "⇁",
      "\\rightharpoondown"), n(i, s, d, "↖", "\\nwarrow"), n(i,
      s,
      d,
      "⇌",
      "\\rightleftharpoons"), n(i, a, d, "≮", "\\nless"), n(i, a, d, "", "\\nleqslant"), n(i,
      a,
      d,
      "",
      "\\nleqq"), n(i, a, d, "⪇", "\\lneq"), n(i, a, d, "≨", "\\lneqq"), n(i,
      a,
      d,
      "",
      "\\lvertneqq"), n(i, a, d, "⋦", "\\lnsim"), n(i, a, d, "⪉", "\\lnapprox"), n(i,
      a,
      d,
      "⊀",
      "\\nprec"), n(i, a, d, "⋠", "\\npreceq"), n(i, a, d, "⋨", "\\precnsim"), n(i,
      a,
      d,
      "⪹",
      "\\precnapprox"), n(i, a, d, "≁", "\\nsim"), n(i, a, d, "", "\\nshortmid"), n(i,
      a,
      d,
      "∤",
      "\\nmid"),n(i, a, d, "⊬", "\\nvdash"),n(i, a, d, "⊭", "\\nvDash"),n(i,
      a,
      d,
      "⋪",
      "\\ntriangleleft"),n(i, a, d, "⋬", "\\ntrianglelefteq"),n(i, a, d, "⊊", "\\subsetneq"),n(i,
      a,
      d,
      "",
      "\\varsubsetneq"),n(i, a, d, "⫋", "\\subsetneqq"),n(i, a, d, "", "\\varsubsetneqq"),n(i,
      a,
      d,
      "≯",
      "\\ngtr"),n(i, a, d, "", "\\ngeqslant"),n(i, a, d, "", "\\ngeqq"),n(i,
      a,
      d,
      "⪈",
      "\\gneq"),n(i, a, d, "≩", "\\gneqq"),n(i, a, d, "", "\\gvertneqq"),n(i,
      a,
      d,
      "⋧",
      "\\gnsim"),n(i, a, d, "⪊", "\\gnapprox"),n(i, a, d, "⊁", "\\nsucc"),n(i,
      a,
      d,
      "⋡",
      "\\nsucceq"),n(i, a, d, "⋩", "\\succnsim"),n(i, a, d, "⪺", "\\succnapprox"),n(i,
      a,
      d,
      "≆",
      "\\ncong"),n(i, a, d, "", "\\nshortparallel"),n(i, a, d, "∦", "\\nparallel"),n(i,
      a,
      d,
      "⊯",
      "\\nVDash"),n(i, a, d, "⋫", "\\ntriangleright"),n(i, a, d, "⋭", "\\ntrianglerighteq"),n(i,
      a,
      d,
      "",
      "\\nsupseteqq"),n(i, a, d, "⊋", "\\supsetneq"),n(i, a, d, "", "\\varsupsetneq"),n(i,
      a,
      d,
      "⫌",
      "\\supsetneqq"),n(i, a, d, "", "\\varsupsetneqq"),n(i, a, d, "⊮", "\\nVdash"),n(i,
      a,
      d,
      "⪵",
      "\\precneqq"),n(i, a, d, "⪶", "\\succneqq"),n(i, a, d, "", "\\nsubseteqq"),n(i,
      a,
      c,
      "⊴",
      "\\unlhd"),n(i, a, c, "⊵", "\\unrhd"),n(i, a, d, "↚", "\\nleftarrow"),n(i,
      a,
      d,
      "↛",
      "\\nrightarrow"),n(i, a, d, "⇍", "\\nLeftarrow"),n(i, a, d, "⇏", "\\nRightarrow"),n(i,
      a,
      d,
      "↮",
      "\\nleftrightarrow"),n(i, a, d, "⇎", "\\nLeftrightarrow"),n(i,
      a,
      d,
      "△",
      "\\vartriangle"),n(i, a, m, "ℏ", "\\hslash"),n(i, a, m, "▽", "\\triangledown"),n(i,
      a,
      m,
      "◊",
      "\\lozenge"),n(i, a, m, "Ⓢ", "\\circledS"),n(i, a, m, "®", "\\circledR"),n(i,
      a,
      m,
      "∡",
      "\\measuredangle"),n(i, a, m, "∄", "\\nexists"),n(i, a, m, "℧", "\\mho"),n(i,
      a,
      m,
      "Ⅎ",
      "\\Finv"),n(i, a, m, "⅁", "\\Game"),n(i, a, m, "k", "\\Bbbk"),n(i,
      a,
      m,
      "‵",
      "\\backprime"),n(i, a, m, "▲", "\\blacktriangle"),n(i, a, m, "▼", "\\blacktriangledown"),n(i,
      a,
      m,
      "■",
      "\\blacksquare"),n(i, a, m, "⧫", "\\blacklozenge"),n(i, a, m, "★", "\\bigstar"),n(i,
      a,
      m,
      "∢",
      "\\sphericalangle"),n(i, a, m, "∁", "\\complement"),n(i, a, m, "ð", "\\eth"),n(i,
      a,
      m,
      "╱",
      "\\diagup"),n(i, a, m, "╲", "\\diagdown"),n(i, a, m, "□", "\\square"),n(i,
      a,
      m,
      "□",
      "\\Box"),n(i, a, m, "◊", "\\Diamond"),n(i, a, m, "¥", "\\yen"),n(i,
      a,
      m,
      "✓",
      "\\checkmark"),n(i, a, m, "ℶ", "\\beth"),n(i, a, m, "ℸ", "\\daleth"),n(i,
      a,
      m,
      "ℷ",
      "\\gimel"),n(i, a, m, "ϝ", "\\digamma"),n(i, a, m, "ϰ", "\\varkappa"),n(i,
      a,
      f,
      "┌",
      "\\ulcorner"),n(i, a, l, "┐", "\\urcorner"),n(i, a, f, "└", "\\llcorner"),n(i,
      a,
      l,
      "┘",
      "\\lrcorner"),n(i, a, d, "≦", "\\leqq"),n(i, a, d, "⩽", "\\leqslant"),n(i,
      a,
      d,
      "⪕",
      "\\eqslantless"),n(i, a, d, "≲", "\\lesssim"),n(i, a, d, "⪅", "\\lessapprox"),n(i,
      a,
      d,
      "≊",
      "\\approxeq"),n(i, a, c, "⋖", "\\lessdot"),n(i, a, d, "⋘", "\\lll"),n(i,
      a,
      d,
      "≶",
      "\\lessgtr"),n(i, a, d, "⋚", "\\lesseqgtr"),n(i, a, d, "⪋", "\\lesseqqgtr"),n(i,
      a,
      d,
      "≑",
      "\\doteqdot"),n(i, a, d, "≓", "\\risingdotseq"),n(i, a, d, "≒", "\\fallingdotseq"),n(i,
      a,
      d,
      "∽",
      "\\backsim"),n(i, a, d, "⋍", "\\backsimeq"),n(i, a, d, "⫅", "\\subseteqq"),n(i,
      a,
      d,
      "⋐",
      "\\Subset"),n(i, a, d, "⊏", "\\sqsubset"),n(i, a, d, "≼", "\\preccurlyeq"),n(i,
      a,
      d,
      "⋞",
      "\\curlyeqprec"),n(i, a, d, "≾", "\\precsim"),n(i, a, d, "⪷", "\\precapprox"),n(i,
      a,
      d,
      "⊲",
      "\\vartriangleleft"),n(i, a, d, "⊴", "\\trianglelefteq"),n(i, a, d, "⊨", "\\vDash"),n(i,
      a,
      d,
      "⊪",
      "\\Vvdash"),n(i, a, d, "⌣", "\\smallsmile"),n(i, a, d, "⌢", "\\smallfrown"),n(i,
      a,
      d,
      "≏",
      "\\bumpeq"),n(i, a, d, "≎", "\\Bumpeq"),n(i, a, d, "≧", "\\geqq"),n(i,
      a,
      d,
      "⩾",
      "\\geqslant"),n(i, a, d, "⪖", "\\eqslantgtr"),n(i, a, d, "≳", "\\gtrsim"),n(i,
      a,
      d,
      "⪆",
      "\\gtrapprox"),n(i, a, c, "⋗", "\\gtrdot"),n(i, a, d, "⋙", "\\ggg"),n(i,
      a,
      d,
      "≷",
      "\\gtrless"),n(i, a, d, "⋛", "\\gtreqless"),n(i, a, d, "⪌", "\\gtreqqless"),n(i,
      a,
      d,
      "≖",
      "\\eqcirc"),n(i, a, d, "≗", "\\circeq"),n(i, a, d, "≜", "\\triangleq"),n(i,
      a,
      d,
      "∼",
      "\\thicksim"),n(i, a, d, "≈", "\\thickapprox"),n(i, a, d, "⫆", "\\supseteqq"),n(i,
      a,
      d,
      "⋑",
      "\\Supset"),n(i, a, d, "⊐", "\\sqsupset"),n(i, a, d, "≽", "\\succcurlyeq"),n(i,
      a,
      d,
      "⋟",
      "\\curlyeqsucc"),n(i, a, d, "≿", "\\succsim"),n(i, a, d, "⪸", "\\succapprox"),n(i,
      a,
      d,
      "⊳",
      "\\vartriangleright"),n(i, a, d, "⊵", "\\trianglerighteq"),n(i, a, d, "⊩", "\\Vdash"),n(i,
      a,
      d,
      "∣",
      "\\shortmid"),n(i, a, d, "∥", "\\shortparallel"),n(i, a, d, "≬", "\\between"),n(i,
      a,
      d,
      "⋔",
      "\\pitchfork"),n(i, a, d, "∝", "\\varpropto"),n(i, a, d, "◀", "\\blacktriangleleft"),n(i,
      a,
      d,
      "∴",
      "\\therefore"),n(i, a, d, "∍", "\\backepsilon"),n(i, a, d, "▶", "\\blacktriangleright"),n(i,
      a,
      d,
      "∵",
      "\\because"),n(i, a, d, "⋘", "\\llless"),n(i, a, d, "⋙", "\\gggtr"),n(i,
      a,
      c,
      "⊲",
      "\\lhd"),n(i, a, c, "⊳", "\\rhd"),n(i, a, d, "≂", "\\eqsim"),n(i, s, d, "⋈", "\\Join"),n(i,
      a,
      d,
      "≑",
      "\\Doteq"),n(i, a, c, "∔", "\\dotplus"),n(i, a, c, "∖", "\\smallsetminus"),n(i,
      a,
      c,
      "⋒",
      "\\Cap"),n(i, a, c, "⋓", "\\Cup"),n(i, a, c, "⩞", "\\doublebarwedge"),n(i,
      a,
      c,
      "⊟",
      "\\boxminus"),n(i, a, c, "⊞", "\\boxplus"),n(i, a, c, "⋇", "\\divideontimes"),n(i,
      a,
      c,
      "⋉",
      "\\ltimes"),n(i, a, c, "⋊", "\\rtimes"),n(i, a, c, "⋋", "\\leftthreetimes"),n(i,
      a,
      c,
      "⋌",
      "\\rightthreetimes"),n(i, a, c, "⋏", "\\curlywedge"),n(i, a, c, "⋎", "\\curlyvee"),n(i,
      a,
      c,
      "⊝",
      "\\circleddash"),n(i, a, c, "⊛", "\\circledast"),n(i, a, c, "⋅", "\\centerdot"),n(i,
      a,
      c,
      "⊺",
      "\\intercal"),n(i, a, c, "⋒", "\\doublecap"),n(i, a, c, "⋓", "\\doublecup"),n(i,
      a,
      c,
      "⊠",
      "\\boxtimes"),n(i, a, d, "⇢", "\\dashrightarrow"),n(i, a, d, "⇠", "\\dashleftarrow"),n(i,
      a,
      d,
      "⇇",
      "\\leftleftarrows"),n(i, a, d, "⇆", "\\leftrightarrows"),n(i, a, d, "⇚", "\\Lleftarrow"),n(i,
      a,
      d,
      "↞",
      "\\twoheadleftarrow"),n(i, a, d, "↢", "\\leftarrowtail"),n(i, a, d, "↫", "\\looparrowleft"),n(
      i,
      a,
      d,
      "⇋",
      "\\leftrightharpoons"),n(i, a, d, "↶", "\\curvearrowleft"),n(i,
      a,
      d,
      "↺",
      "\\circlearrowleft"),n(i, a, d, "↰", "\\Lsh"),n(i, a, d, "⇈", "\\upuparrows"),n(i,
      a,
      d,
      "↿",
      "\\upharpoonleft"),n(i, a, d, "⇃", "\\downharpoonleft"),n(i, a, d, "⊸", "\\multimap"),n(i,
      a,
      d,
      "↭",
      "\\leftrightsquigarrow"),n(i, a, d, "⇉", "\\rightrightarrows"),n(i,
      a,
      d,
      "⇄",
      "\\rightleftarrows"),n(i, a, d, "↠", "\\twoheadrightarrow"),n(i,
      a,
      d,
      "↣",
      "\\rightarrowtail"),n(i, a, d, "↬", "\\looparrowright"),n(i,
      a,
      d,
      "↷",
      "\\curvearrowright"),n(i, a, d, "↻", "\\circlearrowright"),n(i, a, d, "↱", "\\Rsh"),n(i,
      a,
      d,
      "⇊",
      "\\downdownarrows"),n(i, a, d, "↾", "\\upharpoonright"),n(i,
      a,
      d,
      "⇂",
      "\\downharpoonright"),n(i, a, d, "⇝", "\\rightsquigarrow"),n(i, a, d, "⇝", "\\leadsto"),n(i,
      a,
      d,
      "⇛",
      "\\Rrightarrow"),n(i, a, d, "↾", "\\restriction"),n(i, s, m, "‘", "`"),n(i,
      s,
      m,
      "$",
      "\\$"),n(o, s, m, "$", "\\$"),n(i, s, m, "%", "\\%"),n(o, s, m, "%", "\\%"),n(i,
      s,
      m,
      "_",
      "\\_"),n(o, s, m, "_", "\\_"),n(i, s, m, "∠", "\\angle"),n(i, s, m, "∞", "\\infty"),n(i,
      s,
      m,
      "′",
      "\\prime"),n(i, s, m, "△", "\\triangle"),n(i, s, m, "Γ", "\\Gamma"),n(i,
      s,
      m,
      "Δ",
      "\\Delta"),n(i, s, m, "Θ", "\\Theta"),n(i, s, m, "Λ", "\\Lambda"),n(i, s, m, "Ξ", "\\Xi"),n(i,
      s,
      m,
      "Π",
      "\\Pi"),n(i, s, m, "Σ", "\\Sigma"),n(i, s, m, "Υ", "\\Upsilon"),n(i, s, m, "Φ", "\\Phi"),n(i,
      s,
      m,
      "Ψ",
      "\\Psi"),n(i, s, m, "Ω", "\\Omega"),n(i, s, m, "¬", "\\neg"),n(i, s, m, "¬", "\\lnot"),n(i,
      s,
      m,
      "⊤",
      "\\top"),n(i, s, m, "⊥", "\\bot"),n(i, s, m, "∅", "\\emptyset"),n(i,
      a,
      m,
      "∅",
      "\\varnothing"),n(i, s, h, "α", "\\alpha"),n(i, s, h, "β", "\\beta"),n(i,
      s,
      h,
      "γ",
      "\\gamma"),n(i, s, h, "δ", "\\delta"),n(i, s, h, "ϵ", "\\epsilon"),n(i,
      s,
      h,
      "ζ",
      "\\zeta"),n(i, s, h, "η", "\\eta"),n(i, s, h, "θ", "\\theta"),n(i, s, h, "ι", "\\iota"),n(i,
      s,
      h,
      "κ",
      "\\kappa"),n(i, s, h, "λ", "\\lambda"),n(i, s, h, "μ", "\\mu"),n(i, s, h, "ν", "\\nu"),n(i,
      s,
      h,
      "ξ",
      "\\xi"),n(i, s, h, "o", "\\omicron"),n(i, s, h, "π", "\\pi"),n(i, s, h, "ρ", "\\rho"),n(i,
      s,
      h,
      "σ",
      "\\sigma"),n(i, s, h, "τ", "\\tau"),n(i, s, h, "υ", "\\upsilon"),n(i, s, h, "ϕ", "\\phi"),n(i,
      s,
      h,
      "χ",
      "\\chi"),n(i, s, h, "ψ", "\\psi"),n(i, s, h, "ω", "\\omega"),n(i,
      s,
      h,
      "ε",
      "\\varepsilon"),n(i, s, h, "ϑ", "\\vartheta"),n(i, s, h, "ϖ", "\\varpi"),n(i,
      s,
      h,
      "ϱ",
      "\\varrho"),n(i, s, h, "ς", "\\varsigma"),n(i, s, h, "φ", "\\varphi"),n(i,
      s,
      c,
      "∗",
      "*"),n(i, s, c, "+", "+"),n(i, s, c, "−", "-"),n(i, s, c, "⋅", "\\cdot"),n(i,
      s,
      c,
      "∘",
      "\\circ"),n(i, s, c, "÷", "\\div"),n(i, s, c, "±", "\\pm"),n(i, s, c, "×", "\\times"),n(i,
      s,
      c,
      "∩",
      "\\cap"),n(i, s, c, "∪", "\\cup"),n(i, s, c, "∖", "\\setminus"),n(i, s, c, "∧", "\\land"),n(i,
      s,
      c,
      "∨",
      "\\lor"),n(i, s, c, "∧", "\\wedge"),n(i, s, c, "∨", "\\vee"),n(i, s, m, "√", "\\surd"),n(i,
      s,
      f,
      "(",
      "("),n(i, s, f, "[", "["),n(i, s, f, "⟨", "\\langle"),n(i, s, f, "∣", "\\lvert"),n(i,
      s,
      f,
      "∥",
      "\\lVert"),n(i, s, l, ")", ")"),n(i, s, l, "]", "]"),n(i, s, l, "?", "?"),n(i,
      s,
      l,
      "!",
      "!"),n(i, s, l, "⟩", "\\rangle"),n(i, s, l, "∣", "\\rvert"),n(i, s, l, "∥", "\\rVert"),n(i,
      s,
      d,
      "=",
      "="),n(i, s, d, "<", "<"),n(i, s, d, ">", ">"),n(i, s, d, ":", ":"),n(i,
      s,
      d,
      "≈",
      "\\approx"),n(i, s, d, "≅", "\\cong"),n(i, s, d, "≥", "\\ge"),n(i, s, d, "≥", "\\geq"),n(i,
      s,
      d,
      "←",
      "\\gets"),n(i, s, d, ">", "\\gt"),n(i, s, d, "∈", "\\in"),n(i, s, d, "∉", "\\notin"),n(i,
      s,
      d,
      "⊂",
      "\\subset"),n(i, s, d, "⊃", "\\supset"),n(i, s, d, "⊆", "\\subseteq"),n(i,
      s,
      d,
      "⊇",
      "\\supseteq"),n(i, a, d, "⊈", "\\nsubseteq"),n(i, a, d, "⊉", "\\nsupseteq"),n(i,
      s,
      d,
      "⊨",
      "\\models"),n(i, s, d, "←", "\\leftarrow"),n(i, s, d, "≤", "\\le"),n(i, s, d, "≤", "\\leq"),n(
      i,
      s,
      d,
      "<",
      "\\lt"),n(i, s, d, "≠", "\\ne"),n(i, s, d, "≠", "\\neq"),n(i, s, d, "→", "\\rightarrow"),n(i,
      s,
      d,
      "→",
      "\\to"),n(i, a, d, "≱", "\\ngeq"),n(i, a, d, "≰", "\\nleq"),n(i, s, b, null, "\\!"),n(i,
      s,
      b,
      " ",
      "\\ "),n(i, s, b, " ", "~"),n(i, s, b, null, "\\,"),n(i, s, b, null, "\\:"),n(i,
      s,
      b,
      null,
      "\\;"),n(i, s, b, null, "\\enspace"),n(i, s, b, null, "\\qquad"),n(i, s, b, null, "\\quad"),n(
      i,
      s,
      b,
      " ",
      "\\space"),n(i, s, "punct", ",", ","),n(i, s, "punct", ";", ";"),n(i,
      s,
      "punct",
      ":",
      "\\colon"),n(i, a, c, "⊼", "\\barwedge"),n(i, a, c, "⊻", "\\veebar"),n(i,
      s,
      c,
      "⊙",
      "\\odot"),n(i, s, c, "⊕", "\\oplus"),n(i, s, c, "⊗", "\\otimes"),n(i,
      s,
      m,
      "∂",
      "\\partial"),n(i, s, c, "⊘", "\\oslash"),n(i, a, c, "⊚", "\\circledcirc"),n(i,
      a,
      c,
      "⊡",
      "\\boxdot"),n(i, s, c, "△", "\\bigtriangleup"),n(i, s, c, "▽", "\\bigtriangledown"),n(i,
      s,
      c,
      "†",
      "\\dagger"),n(i, s, c, "⋄", "\\diamond"),n(i, s, c, "⋆", "\\star"),n(i,
      s,
      c,
      "◃",
      "\\triangleleft"),n(i, s, c, "▹", "\\triangleright"),n(i, s, f, "{", "\\{"),n(o,
      s,
      m,
      "{",
      "\\{"),n(i, s, l, "}", "\\}"),n(o, s, m, "}", "\\}"),n(i, s, f, "{", "\\lbrace"),n(i,
      s,
      l,
      "}",
      "\\rbrace"),n(i, s, f, "[", "\\lbrack"),n(i, s, l, "]", "\\rbrack"),n(i,
      s,
      f,
      "⌊",
      "\\lfloor"),n(i, s, l, "⌋", "\\rfloor"),n(i, s, f, "⌈", "\\lceil"),n(i,
      s,
      l,
      "⌉",
      "\\rceil"),n(i, s, m, "\\", "\\backslash"),n(i, s, m, "∣", "|"),n(i, s, m, "∣", "\\vert"),n(i,
      s,
      m,
      "∥",
      "\\|"),n(i, s, m, "∥", "\\Vert"),n(i, s, d, "↑", "\\uparrow"),n(i,
      s,
      d,
      "⇑",
      "\\Uparrow"),n(i, s, d, "↓", "\\downarrow"),n(i, s, d, "⇓", "\\Downarrow"),n(i,
      s,
      d,
      "↕",
      "\\updownarrow"),n(i, s, d, "⇕", "\\Updownarrow"),n(i, i, p, "∐", "\\coprod"),n(i,
      i,
      p,
      "⋁",
      "\\bigvee"),n(i, i, p, "⋀", "\\bigwedge"),n(i, i, p, "⨄", "\\biguplus"),n(i,
      i,
      p,
      "⋂",
      "\\bigcap"),n(i, i, p, "⋃", "\\bigcup"),n(i, i, p, "∫", "\\int"),n(i, i, p, "∫", "\\intop"),n(
      i,
      i,
      p,
      "∬",
      "\\iint"),n(i, i, p, "∭", "\\iiint"),n(i, i, p, "∏", "\\prod"),n(i, i, p, "∑", "\\sum"),n(i,
      i,
      p,
      "⨂",
      "\\bigotimes"),n(i, i, p, "⨁", "\\bigoplus"),n(i, i, p, "⨀", "\\bigodot"),n(i,
      i,
      p,
      "∮",
      "\\oint"),n(i, i, p, "⨆", "\\bigsqcup"),n(i, i, p, "∫", "\\smallint"),n(o,
      s,
      "inner",
      "…",
      "\\textellipsis"),n(i, s, "inner", "…", "\\mathellipsis"),n(o,
      s,
      "inner",
      "…",
      "\\ldots"),n(i, s, "inner", "…", "\\ldots"),n(i, s, "inner", "⋯", "\\cdots"),n(i,
      s,
      "inner",
      "⋱",
      "\\ddots"),n(i, s, m, "⋮", "\\vdots"),n(i, s, u, "´", "\\acute"),n(i, s, u, "`", "\\grave"),n(
      i,
      s,
      u,
      "¨",
      "\\ddot"),n(i, s, u, "~", "\\tilde"),n(i, s, u, "¯", "\\bar"),n(i, s, u, "˘", "\\breve"),n(i,
      s,
      u,
      "ˇ",
      "\\check"),n(i, s, u, "^", "\\hat"),n(i, s, u, "⃗", "\\vec"),n(i, s, u, "˙", "\\dot"),n(i,
      s,
      h,
      "ı",
      "\\imath"),n(i, s, h, "ȷ", "\\jmath"),n(o, s, m, "–", "--"),n(o, s, m, "—", "---"),n(o,
      s,
      m,
      "‘",
      "`"),n(o, s, m, "’", "'"),n(o, s, m, "“", "``"),n(o, s, m, "”", "''"),n(i,
      s,
      m,
      "°",
      "\\degree"),n(o, s, m, "°", "\\degree"),n(i, s, h, "£", "\\pounds"),n(i,
      a,
      m,
      "✠",
      "\\maltese"),n(o, a, m, "✠", "\\maltese"),n(o, s, b, " ", "\\ "),n(o, s, b, " ", " "),n(o,
      s,
      b,
      " ",
      "~");
    var v, y;
    for (v = 0; v < '0123456789/@."'.length; v++)n(i, s, m, y = '0123456789/@."'.charAt(v), y);
    for (v = 0; v < '0123456789!@*()-=+[]";:?/.,'.length; v++)n(o,
      s,
      m,
      y = '0123456789!@*()-=+[]";:?/.,'.charAt(v),
      y);
    var g = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (v = 0; v < g.length; v++)n(i, s, h, y = g.charAt(v), y), n(o, s, m, y, y);
    for (v = 192; v <= 214; v++)n(o, s, m, y = String.fromCharCode(v), y);
    for (v = 216; v <= 246; v++)n(o, s, m, y = String.fromCharCode(v), y);
    for (v = 248; v <= 255; v++)n(o, s, m, y = String.fromCharCode(v), y);
    for (v = 1040; v <= 1103; v++)n(o, s, m, y = String.fromCharCode(v), y);
    n(o, s, m, "–", "–"), n(o, s, m, "—", "—"), n(o, s, m, "‘", "‘"), n(o, s, m, "’", "’"), n(o,
      s,
      m,
      "“",
      "“"), n(o, s, m, "”", "”")
  }, {}],
  112: [function (e, t, r) {
    var n = /[\uAC00-\uD7AF]/,
      i = /[\u3040-\u309F]|[\u30A0-\u30FF]|[\u4E00-\u9FAF]|[\uAC00-\uD7AF]/;
    t.exports = { cjkRegex: i, hangulRegex: n }
  }, {}],
  113: [function (e, t, r) {
    function n(e) {
      return u[e]
    }

    var i, o = Array.prototype.indexOf, s = function (e, t) {
        if (null == e)return -1;
        if (o && e.indexOf === o)return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)if (e[r] === t)return r;
        return -1
      }, a = /([A-Z])/g, u = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;" },
      c = /[&><"']/g;
    if ("undefined" != typeof document) {
      var l = document.createElement("span");
      i = "textContent" in l ? function (e, t) {
        e.textContent = t
      } : function (e, t) {
        e.innerText = t
      }
    }
    t.exports = {
      contains: function (e, t) {
        return -1 !== s(e, t)
      }, deflt: function (e, t) {
        return void 0 === e ? t : e
      }, escape: function (e) {
        return ("" + e).replace(c, n)
      }, hyphenate: function (e) {
        return e.replace(a, "-$1").toLowerCase()
      }, indexOf: s, setTextContent: i, clearNode: function (e) {
        i(e, "")
      }
    }
  }, {}],
  114: [function (e, t, r) {
    "use strict";
    function n(e) {
      if (!e.__matchAtRelocatable) {
        var t = e.source + "|()",
          r = "g" + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "");
        e.__matchAtRelocatable = new RegExp(t, r)
      }
      return e.__matchAtRelocatable
    }

    t.exports = function (e, t, r) {
      if (e.global || e.sticky)throw new Error("matchAt(...): Only non-global regexes are supported");
      var i = n(e);
      i.lastIndex = r;
      var o = i.exec(t);
      return null == o[o.length - 1] ? (o.length = o.length - 1, o) : null
    }
  }, {}],
  115: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = function (e) {
      function t(t, r, n) {
        e.call(this), this.parent = t, this.outerValue = r, this.outerIndex = n, this.index = 0
      }

      return n(t, e), t.prototype._next = function (e) {
        this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this)
      }, t.prototype._error = function (e) {
        this.parent.notifyError(e, this), this.unsubscribe()
      }, t.prototype._complete = function () {
        this.parent.notifyComplete(this), this.unsubscribe()
      }, t
    }(e("./Subscriber").Subscriber);
    r.InnerSubscriber = i
  }, { "./Subscriber": 122 }],
  116: [function (e, t, r) {
    "use strict";
    var n = e("./util/root"), i = e("./util/toSubscriber"), o = e("./symbol/observable"),
      s = function () {
        function e(e) {
          this._isScalar = !1, e && (this._subscribe = e)
        }

        return e.prototype.lift = function (t) {
          var r = new e;
          return r.source = this, r.operator = t, r
        }, e.prototype.subscribe = function (e, t, r) {
          var n = this.operator, o = i.toSubscriber(e, t, r);
          if (n ? n.call(o,
              this.source) : o.add(this.source ? this._subscribe(o) : this._trySubscribe(o)), o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown))throw o.syncErrorValue;
          return o
        }, e.prototype._trySubscribe = function (e) {
          try {
            return this._subscribe(e)
          }
          catch (t) {
            e.syncErrorThrown = !0, e.syncErrorValue = t, e.error(t)
          }
        }, e.prototype.forEach = function (e, t) {
          var r = this;
          if (t || (n.root.Rx && n.root.Rx.config && n.root.Rx.config.Promise ? t = n.root.Rx.config.Promise : n.root.Promise && (t = n.root.Promise)), !t)throw new Error(
            "no Promise impl found");
          return new t(function (t, n) {
            var i;
            i = r.subscribe(function (t) {
              if (i)try {
                e(t)
              }
              catch (e) {
                n(e), i.unsubscribe()
              } else e(t)
            }, n, t)
          })
        }, e.prototype._subscribe = function (e) {
          return this.source.subscribe(e)
        }, e.prototype[o.observable] = function () {
          return this
        }, e.create = function (t) {
          return new e(t)
        }, e
      }();
    r.Observable = s
  }, { "./symbol/observable": 155, "./util/root": 168, "./util/toSubscriber": 170 }],
  117: [function (e, t, r) {
    "use strict";
    r.empty = {
      closed: !0, next: function (e) {
      }, error: function (e) {
        throw e
      }, complete: function () {
      }
    }
  }, {}],
  118: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = function (e) {
      function t() {
        e.apply(this, arguments)
      }

      return n(t, e), t.prototype.notifyNext = function (e, t, r, n, i) {
        this.destination.next(t)
      }, t.prototype.notifyError = function (e, t) {
        this.destination.error(e)
      }, t.prototype.notifyComplete = function (e) {
        this.destination.complete()
      }, t
    }(e("./Subscriber").Subscriber);
    r.OuterSubscriber = i
  }, { "./Subscriber": 122 }],
  119: [function (e, t, r) {
    "use strict";
    var n = function () {
      function e(t, r) {
        void 0 === r && (r = e.now), this.SchedulerAction = t, this.now = r
      }

      return e.prototype.schedule = function (e, t, r) {
        return void 0 === t && (t = 0), new this.SchedulerAction(this, e).schedule(r, t)
      }, e.now = Date.now ? Date.now : function () {
        return +new Date
      }, e
    }();
    r.Scheduler = n
  }, {}],
  120: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
        function r() {
          this.constructor = e
        }

        for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }, i = e("./Observable"), o = e("./Subscriber"), s = e("./Subscription"),
      a = e("./util/ObjectUnsubscribedError"), u = e("./SubjectSubscription"),
      c = e("./symbol/rxSubscriber"), l = function (e) {
        function t(t) {
          e.call(this, t), this.destination = t
        }

        return n(t, e), t
      }(o.Subscriber);
    r.SubjectSubscriber = l;
    var h = function (e) {
      function t() {
        e.call(this), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
      }

      return n(t, e), t.prototype[c.rxSubscriber] = function () {
        return new l(this)
      }, t.prototype.lift = function (e) {
        var t = new p(this, this);
        return t.operator = e, t
      }, t.prototype.next = function (e) {
        if (this.closed)throw new a.ObjectUnsubscribedError;
        if (!this.isStopped)for (var t = this.observers, r = t.length, n = t.slice(), i = 0; i < r; i++)n[i].next(
          e)
      }, t.prototype.error = function (e) {
        if (this.closed)throw new a.ObjectUnsubscribedError;
        this.hasError = !0, this.thrownError = e, this.isStopped = !0;
        for (var t = this.observers, r = t.length, n = t.slice(), i = 0; i < r; i++)n[i].error(e);
        this.observers.length = 0
      }, t.prototype.complete = function () {
        if (this.closed)throw new a.ObjectUnsubscribedError;
        this.isStopped = !0;
        for (var e = this.observers, t = e.length, r = e.slice(), n = 0; n < t; n++)r[n].complete();
        this.observers.length = 0
      }, t.prototype.unsubscribe = function () {
        this.isStopped = !0, this.closed = !0, this.observers = null
      }, t.prototype._trySubscribe = function (t) {
        if (this.closed)throw new a.ObjectUnsubscribedError;
        return e.prototype._trySubscribe.call(this, t)
      }, t.prototype._subscribe = function (e) {
        if (this.closed)throw new a.ObjectUnsubscribedError;
        return this.hasError ? (e.error(this.thrownError), s.Subscription.EMPTY) : this.isStopped ? (e.complete(), s.Subscription.EMPTY) : (this.observers.push(
          e), new u.SubjectSubscription(this, e))
      }, t.prototype.asObservable = function () {
        var e = new i.Observable;
        return e.source = this, e
      }, t.create = function (e, t) {
        return new p(e, t)
      }, t
    }(i.Observable);
    r.Subject = h;
    var p = function (e) {
      function t(t, r) {
        e.call(this), this.destination = t, this.source = r
      }

      return n(t, e), t.prototype.next = function (e) {
        var t = this.destination;
        t && t.next && t.next(e)
      }, t.prototype.error = function (e) {
        var t = this.destination;
        t && t.error && this.destination.error(e)
      }, t.prototype.complete = function () {
        var e = this.destination;
        e && e.complete && this.destination.complete()
      }, t.prototype._subscribe = function (e) {
        return this.source ? this.source.subscribe(e) : s.Subscription.EMPTY
      }, t
    }(h);
    r.AnonymousSubject = p
  }, {
    "./Observable": 116,
    "./SubjectSubscription": 121,
    "./Subscriber": 122,
    "./Subscription": 123,
    "./symbol/rxSubscriber": 156,
    "./util/ObjectUnsubscribedError": 157
  }],
  121: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = function (e) {
      function t(t, r) {
        e.call(this), this.subject = t, this.subscriber = r, this.closed = !1
      }

      return n(t, e), t.prototype.unsubscribe = function () {
        if (!this.closed) {
          this.closed = !0;
          var e = this.subject, t = e.observers;
          if (this.subject = null, t && 0 !== t.length && !e.isStopped && !e.closed) {
            var r = t.indexOf(this.subscriber);
            -1 !== r && t.splice(r, 1)
          }
        }
      }, t
    }(e("./Subscription").Subscription);
    r.SubjectSubscription = i
  }, { "./Subscription": 123 }],
  122: [function (e, t, r) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, i = function (e, t) {
        function r() {
          this.constructor = e
        }

        for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }, o = e("./util/isFunction"), s = e("./Subscription"), a = e("./Observer"),
      u = e("./symbol/rxSubscriber"), c = function (e) {
        function t(r, i, o) {
          switch (e.call(this), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
            case 0:
              this.destination = a.empty;
              break;
            case 1:
              if (!r) {
                this.destination = a.empty;
                break
              }
              if ("object" === (void 0 === r ? "undefined" : n(r))) {
                r instanceof t ? (this.destination = r, this.destination.add(this)) : (this.syncErrorThrowable = !0, this.destination = new l(
                  this,
                  r));
                break
              }
            default:
              this.syncErrorThrowable = !0, this.destination = new l(this, r, i, o)
          }
        }

        return i(t, e), t.prototype[u.rxSubscriber] = function () {
          return this
        }, t.create = function (e, r, n) {
          var i = new t(e, r, n);
          return i.syncErrorThrowable = !1, i
        }, t.prototype.next = function (e) {
          this.isStopped || this._next(e)
        }, t.prototype.error = function (e) {
          this.isStopped || (this.isStopped = !0, this._error(e))
        }, t.prototype.complete = function () {
          this.isStopped || (this.isStopped = !0, this._complete())
        }, t.prototype.unsubscribe = function () {
          this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this))
        }, t.prototype._next = function (e) {
          this.destination.next(e)
        }, t.prototype._error = function (e) {
          this.destination.error(e), this.unsubscribe()
        }, t.prototype._complete = function () {
          this.destination.complete(), this.unsubscribe()
        }, t.prototype._unsubscribeAndRecycle = function () {
          var e = this, t = e._parent, r = e._parents;
          return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = t, this._parents = r, this
        }, t
      }(s.Subscription);
    r.Subscriber = c;
    var l = function (e) {
      function t(t, r, n, i) {
        e.call(this), this._parentSubscriber = t;
        var s, u = this;
        o.isFunction(r) ? s = r : r && (s = r.next, n = r.error, i = r.complete, r !== a.empty && (u = Object.create(
            r), o.isFunction(u.unsubscribe) && this.add(u.unsubscribe.bind(u)), u.unsubscribe = this.unsubscribe.bind(
            this))), this._context = u, this._next = s, this._error = n, this._complete = i
      }

      return i(t, e), t.prototype.next = function (e) {
        if (!this.isStopped && this._next) {
          var t = this._parentSubscriber;
          t.syncErrorThrowable ? this.__tryOrSetError(t,
              this._next,
              e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
        }
      }, t.prototype.error = function (e) {
        if (!this.isStopped) {
          var t = this._parentSubscriber;
          if (this._error) t.syncErrorThrowable ? (this.__tryOrSetError(t,
            this._error,
            e), this.unsubscribe()) : (this.__tryOrUnsub(this._error,
            e), this.unsubscribe()); else {
            if (!t.syncErrorThrowable)throw this.unsubscribe(), e;
            t.syncErrorValue = e, t.syncErrorThrown = !0, this.unsubscribe()
          }
        }
      }, t.prototype.complete = function () {
        var e = this;
        if (!this.isStopped) {
          var t = this._parentSubscriber;
          if (this._complete) {
            var r = function () {
              return e._complete.call(e._context)
            };
            t.syncErrorThrowable ? (this.__tryOrSetError(t,
              r), this.unsubscribe()) : (this.__tryOrUnsub(r), this.unsubscribe())
          } else this.unsubscribe()
        }
      }, t.prototype.__tryOrUnsub = function (e, t) {
        try {
          e.call(this._context, t)
        }
        catch (e) {
          throw this.unsubscribe(), e
        }
      }, t.prototype.__tryOrSetError = function (e, t, r) {
        try {
          t.call(this._context, r)
        }
        catch (t) {
          return e.syncErrorValue = t, e.syncErrorThrown = !0, !0
        }
        return !1
      }, t.prototype._unsubscribe = function () {
        var e = this._parentSubscriber;
        this._context = null, this._parentSubscriber = null, e.unsubscribe()
      }, t
    }(c)
  }, {
    "./Observer": 117,
    "./Subscription": 123,
    "./symbol/rxSubscriber": 156,
    "./util/isFunction": 163
  }],
  123: [function (e, t, r) {
    "use strict";
    function n(e) {
      return e.reduce(function (e, t) {
        return e.concat(t instanceof l.UnsubscriptionError ? t.errors : t)
      }, [])
    }

    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, o = e("./util/isArray"), s = e("./util/isObject"), a = e("./util/isFunction"),
      u = e("./util/tryCatch"), c = e("./util/errorObject"), l = e("./util/UnsubscriptionError"),
      h = function () {
        function e(e) {
          this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, e && (this._unsubscribe = e)
        }

        return e.prototype.unsubscribe = function () {
          var e, t = !1;
          if (!this.closed) {
            var r = this, i = r._parent, h = r._parents, p = r._unsubscribe, f = r._subscriptions;
            this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
            for (var d = -1, b = h ? h.length : 0; i;)i.remove(this), i = ++d < b && h[d] || null;
            if (a.isFunction(p) && (v = u.tryCatch(p)
              .call(this)) === c.errorObject && (t = !0, e = e || (c.errorObject.e instanceof l.UnsubscriptionError ? n(
                  c.errorObject.e.errors) : [c.errorObject.e])), o.isArray(f))for (d = -1, b = f.length; ++d < b;) {
              var m = f[d];
              if (s.isObject(m)) {
                var v = u.tryCatch(m.unsubscribe).call(m);
                if (v === c.errorObject) {
                  t = !0, e = e || [];
                  var y = c.errorObject.e;
                  y instanceof l.UnsubscriptionError ? e = e.concat(n(y.errors)) : e.push(y)
                }
              }
            }
            if (t)throw new l.UnsubscriptionError(e)
          }
        }, e.prototype.add = function (t) {
          if (!t || t === e.EMPTY)return e.EMPTY;
          if (t === this)return this;
          var r = t;
          switch (void 0 === t ? "undefined" : i(t)) {
            case"function":
              r = new e(t);
            case"object":
              if (r.closed || "function" != typeof r.unsubscribe)return r;
              if (this.closed)return r.unsubscribe(), r;
              if ("function" != typeof r._addParent) {
                var n = r;
                (r = new e)._subscriptions = [n]
              }
              break;
            default:
              throw new Error("unrecognized teardown " + t + " added to Subscription.")
          }
          return (this._subscriptions || (this._subscriptions = [])).push(r), r._addParent(this), r
        }, e.prototype.remove = function (e) {
          var t = this._subscriptions;
          if (t) {
            var r = t.indexOf(e);
            -1 !== r && t.splice(r, 1)
          }
        }, e.prototype._addParent = function (e) {
          var t = this, r = t._parent, n = t._parents;
          r && r !== e ? n ? -1 === n.indexOf(e) && n.push(e) : this._parents = [e] : this._parent = e
        }, e.EMPTY = function (e) {
          return e.closed = !0, e
        }(new e), e
      }();
    r.Subscription = h
  }, {
    "./util/UnsubscriptionError": 158,
    "./util/errorObject": 159,
    "./util/isArray": 160,
    "./util/isFunction": 163,
    "./util/isObject": 165,
    "./util/tryCatch": 171
  }],
  124: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
        function r() {
          this.constructor = e
        }

        for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }, i = e("../Observable"), o = e("./ScalarObservable"), s = e("./EmptyObservable"),
      a = e("../util/isScheduler"), u = function (e) {
        function t(t, r) {
          e.call(this), this.array = t, this.scheduler = r, r || 1 !== t.length || (this._isScalar = !0, this.value = t[0])
        }

        return n(t, e), t.create = function (e, r) {
          return new t(e, r)
        }, t.of = function () {
          for (var e = [], r = 0; r < arguments.length; r++)e[r - 0] = arguments[r];
          var n = e[e.length - 1];
          a.isScheduler(n) ? e.pop() : n = null;
          var i = e.length;
          return i > 1 ? new t(e, n) : 1 === i ? new o.ScalarObservable(e[0],
            n) : new s.EmptyObservable(n)
        }, t.dispatch = function (e) {
          var t = e.array, r = e.index, n = e.count, i = e.subscriber;
          r >= n ? i.complete() : (i.next(t[r]), i.closed || (e.index = r + 1, this.schedule(e)))
        }, t.prototype._subscribe = function (e) {
          var r = this.array, n = r.length, i = this.scheduler;
          if (i)return i.schedule(t.dispatch, 0, { array: r, index: 0, count: n, subscriber: e });
          for (var o = 0; o < n && !e.closed; o++)e.next(r[o]);
          e.complete()
        }, t
      }(i.Observable);
    r.ArrayObservable = u
  }, {
    "../Observable": 116,
    "../util/isScheduler": 167,
    "./EmptyObservable": 126,
    "./ScalarObservable": 128
  }],
  125: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
        function r() {
          this.constructor = e
        }

        for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }, i = e("../Subject"), o = e("../Observable"), s = e("../Subscriber"),
      a = e("../Subscription"), u = function (e) {
        function t(t, r) {
          e.call(this), this.source = t, this.subjectFactory = r, this._refCount = 0, this._isComplete = !1
        }

        return n(t, e), t.prototype._subscribe = function (e) {
          return this.getSubject().subscribe(e)
        }, t.prototype.getSubject = function () {
          var e = this._subject;
          return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject
        }, t.prototype.connect = function () {
          var e = this._connection;
          return e || (this._isComplete = !1, (e = this._connection = new a.Subscription).add(this.source.subscribe(
            new l(this.getSubject(),
              this))), e.closed ? (this._connection = null, e = a.Subscription.EMPTY) : this._connection = e), e
        }, t.prototype.refCount = function () {
          return this.lift(new h(this))
        }, t
      }(o.Observable);
    r.ConnectableObservable = u;
    var c = u.prototype;
    r.connectableObservableDescriptor = {
      operator: { value: null },
      _refCount: { value: 0, writable: !0 },
      _subject: { value: null, writable: !0 },
      _connection: { value: null, writable: !0 },
      _subscribe: { value: c._subscribe },
      _isComplete: { value: c._isComplete, writable: !0 },
      getSubject: { value: c.getSubject },
      connect: { value: c.connect },
      refCount: { value: c.refCount }
    };
    var l = function (e) {
      function t(t, r) {
        e.call(this, t), this.connectable = r
      }

      return n(t, e), t.prototype._error = function (t) {
        this._unsubscribe(), e.prototype._error.call(this, t)
      }, t.prototype._complete = function () {
        this.connectable._isComplete = !0, this._unsubscribe(), e.prototype._complete.call(this)
      }, t.prototype._unsubscribe = function () {
        var e = this.connectable;
        if (e) {
          this.connectable = null;
          var t = e._connection;
          e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe()
        }
      }, t
    }(i.SubjectSubscriber), h = function () {
      function e(e) {
        this.connectable = e
      }

      return e.prototype.call = function (e, t) {
        var r = this.connectable;
        r._refCount++;
        var n = new p(e, r), i = t.subscribe(n);
        return n.closed || (n.connection = r.connect()), i
      }, e
    }(), p = function (e) {
      function t(t, r) {
        e.call(this, t), this.connectable = r
      }

      return n(t, e), t.prototype._unsubscribe = function () {
        var e = this.connectable;
        if (e) {
          this.connectable = null;
          var t = e._refCount;
          if (t <= 0) this.connection = null; else if (e._refCount = t - 1, t > 1) this.connection = null; else {
            var r = this.connection, n = e._connection;
            this.connection = null, !n || r && n !== r || n.unsubscribe()
          }
        } else this.connection = null
      }, t
    }(s.Subscriber)
  }, { "../Observable": 116, "../Subject": 120, "../Subscriber": 122, "../Subscription": 123 }],
  126: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = function (e) {
      function t(t) {
        e.call(this), this.scheduler = t
      }

      return n(t, e), t.create = function (e) {
        return new t(e)
      }, t.dispatch = function (e) {
        e.subscriber.complete()
      }, t.prototype._subscribe = function (e) {
        var r = this.scheduler;
        if (r)return r.schedule(t.dispatch, 0, { subscriber: e });
        e.complete()
      }, t
    }(e("../Observable").Observable);
    r.EmptyObservable = i
  }, { "../Observable": 116 }],
  127: [function (e, t, r) {
    "use strict";
    function n(e) {
      return !!e && "function" == typeof e.addListener && "function" == typeof e.removeListener
    }

    function i(e) {
      return !!e && "function" == typeof e.on && "function" == typeof e.off
    }

    function o(e) {
      return !!e && "[object NodeList]" === d.call(e)
    }

    function s(e) {
      return !!e && "[object HTMLCollection]" === d.call(e)
    }

    function a(e) {
      return !!e && "function" == typeof e.addEventListener && "function" == typeof e.removeEventListener
    }

    var u = function (e, t) {
        function r() {
          this.constructor = e
        }

        for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }, c = e("../Observable"), l = e("../util/tryCatch"), h = e("../util/isFunction"),
      p = e("../util/errorObject"), f = e("../Subscription"), d = Object.prototype.toString,
      b = function (e) {
        function t(t, r, n, i) {
          e.call(this), this.sourceObj = t, this.eventName = r, this.selector = n, this.options = i
        }

        return u(t, e), t.create = function (e, r, n, i) {
          return h.isFunction(n) && (i = n, n = void 0), new t(e, r, i, n)
        }, t.setupSubscription = function (e, r, u, c, l) {
          var h;
          if (o(e) || s(e))for (var p = 0, d = e.length; p < d; p++)t.setupSubscription(e[p],
            r,
            u,
            c,
            l); else if (a(e)) {
            var b = e;
            e.addEventListener(r, u, l), h = function () {
              return b.removeEventListener(r, u)
            }
          } else if (i(e)) {
            var m = e;
            e.on(r, u), h = function () {
              return m.off(r, u)
            }
          } else {
            if (!n(e))throw new TypeError("Invalid event target");
            var v = e;
            e.addListener(r, u), h = function () {
              return v.removeListener(r, u)
            }
          }
          c.add(new f.Subscription(h))
        }, t.prototype._subscribe = function (e) {
          var r = this.sourceObj, n = this.eventName, i = this.options, o = this.selector,
            s = o ? function () {
              for (var t = [], r = 0; r < arguments.length; r++)t[r - 0] = arguments[r];
              var n = l.tryCatch(o).apply(void 0, t);
              n === p.errorObject ? e.error(p.errorObject.e) : e.next(n)
            } : function (t) {
              return e.next(t)
            };
          t.setupSubscription(r, n, s, e, i)
        }, t
      }(c.Observable);
    r.FromEventObservable = b
  }, {
    "../Observable": 116,
    "../Subscription": 123,
    "../util/errorObject": 159,
    "../util/isFunction": 163,
    "../util/tryCatch": 171
  }],
  128: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = function (e) {
      function t(t, r) {
        e.call(this), this.value = t, this.scheduler = r, this._isScalar = !0, r && (this._isScalar = !1)
      }

      return n(t, e), t.create = function (e, r) {
        return new t(e, r)
      }, t.dispatch = function (e) {
        var t = e.done, r = e.value, n = e.subscriber;
        t ? n.complete() : (n.next(r), n.closed || (e.done = !0, this.schedule(e)))
      }, t.prototype._subscribe = function (e) {
        var r = this.value, n = this.scheduler;
        if (n)return n.schedule(t.dispatch, 0, { done: !1, value: r, subscriber: e });
        e.next(r), e.closed || e.complete()
      }, t
    }(e("../Observable").Observable);
    r.ScalarObservable = i
  }, { "../Observable": 116 }],
  129: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
        function r() {
          this.constructor = e
        }

        for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }, i = e("../util/isNumeric"), o = e("../Observable"), s = e("../scheduler/async"),
      a = e("../util/isScheduler"), u = e("../util/isDate"), c = function (e) {
        function t(t, r, n) {
          void 0 === t && (t = 0), e.call(this), this.period = -1, this.dueTime = 0, i.isNumeric(r) ? this.period = Number(
              r) < 1 && 1 || Number(r) : a.isScheduler(r) && (n = r), a.isScheduler(n) || (n = s.async), this.scheduler = n, this.dueTime = u.isDate(
            t) ? +t - this.scheduler.now() : t
        }

        return n(t, e), t.create = function (e, r, n) {
          return void 0 === e && (e = 0), new t(e, r, n)
        }, t.dispatch = function (e) {
          var t = e.index, r = e.period, n = e.subscriber, i = this;
          if (n.next(t), !n.closed) {
            if (-1 === r)return n.complete();
            e.index = t + 1, i.schedule(e, r)
          }
        }, t.prototype._subscribe = function (e) {
          var r = this, n = r.period, i = r.dueTime;
          return r.scheduler.schedule(t.dispatch, i, { index: 0, period: n, subscriber: e })
        }, t
      }(o.Observable);
    r.TimerObservable = c
  }, {
    "../Observable": 116,
    "../scheduler/async": 153,
    "../util/isDate": 162,
    "../util/isNumeric": 164,
    "../util/isScheduler": 167
  }],
  130: [function (e, t, r) {
    "use strict";
    var n = e("./EmptyObservable");
    r.empty = n.EmptyObservable.create
  }, { "./EmptyObservable": 126 }],
  131: [function (e, t, r) {
    "use strict";
    var n = e("./FromEventObservable");
    r.fromEvent = n.FromEventObservable.create
  }, { "./FromEventObservable": 127 }],
  132: [function (e, t, r) {
    "use strict";
    var n = e("./TimerObservable");
    r.timer = n.TimerObservable.create
  }, { "./TimerObservable": 129 }],
  133: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = e("../OuterSubscriber"), o = e("../util/subscribeToResult");
    r._catch = function (e) {
      var t = new s(e), r = this.lift(t);
      return t.caught = r
    };
    var s = function () {
      function e(e) {
        this.selector = e
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new a(e, this.selector, this.caught))
      }, e
    }(), a = function (e) {
      function t(t, r, n) {
        e.call(this, t), this.selector = r, this.caught = n
      }

      return n(t, e), t.prototype.error = function (t) {
        if (!this.isStopped) {
          var r = void 0;
          try {
            r = this.selector(t, this.caught)
          }
          catch (t) {
            return void e.prototype.error.call(this, t)
          }
          this._unsubscribeAndRecycle(), this.add(o.subscribeToResult(this, r))
        }
      }, t
    }(i.OuterSubscriber)
  }, { "../OuterSubscriber": 118, "../util/subscribeToResult": 169 }],
  134: [function (e, t, r) {
    "use strict";
    function n() {
      for (var e = [], t = 0; t < arguments.length; t++)e[t - 0] = arguments[t];
      var r = null, n = e;
      return o.isScheduler(n[e.length - 1]) && (r = n.pop()), null === r && 1 === e.length && e[0] instanceof i.Observable ? e[0] : new s.ArrayObservable(
        e,
        r).lift(new a.MergeAllOperator(1))
    }

    var i = e("../Observable"), o = e("../util/isScheduler"),
      s = e("../observable/ArrayObservable"), a = e("./mergeAll");
    r.concat = function () {
      for (var e = [], t = 0; t < arguments.length; t++)e[t - 0] = arguments[t];
      return this.lift.call(n.apply(void 0, [this].concat(e)))
    }, r.concatStatic = n
  }, {
    "../Observable": 116,
    "../observable/ArrayObservable": 124,
    "../util/isScheduler": 167,
    "./mergeAll": 141
  }],
  135: [function (e, t, r) {
    "use strict";
    function n(e) {
      e.debouncedNext()
    }

    var i = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, o = e("../Subscriber"), s = e("../scheduler/async");
    r.debounceTime = function (e, t) {
      return void 0 === t && (t = s.async), this.lift(new a(e, t))
    };
    var a = function () {
      function e(e, t) {
        this.dueTime = e, this.scheduler = t
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new u(e, this.dueTime, this.scheduler))
      }, e
    }(), u = function (e) {
      function t(t, r, n) {
        e.call(this,
          t), this.dueTime = r, this.scheduler = n, this.debouncedSubscription = null, this.lastValue = null, this.hasValue = !1
      }

      return i(t, e), t.prototype._next = function (e) {
        this.clearDebounce(), this.lastValue = e, this.hasValue = !0, this.add(this.debouncedSubscription = this.scheduler.schedule(
          n,
          this.dueTime,
          this))
      }, t.prototype._complete = function () {
        this.debouncedNext(), this.destination.complete()
      }, t.prototype.debouncedNext = function () {
        this.clearDebounce(), this.hasValue && (this.destination.next(this.lastValue), this.lastValue = null, this.hasValue = !1)
      }, t.prototype.clearDebounce = function () {
        var e = this.debouncedSubscription;
        null !== e && (this.remove(e), e.unsubscribe(), this.debouncedSubscription = null)
      }, t
    }(o.Subscriber)
  }, { "../Subscriber": 122, "../scheduler/async": 153 }],
  136: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = e("../Subscriber");
    r._do = function (e, t, r) {
      return this.lift(new o(e, t, r))
    };
    var o = function () {
      function e(e, t, r) {
        this.nextOrObserver = e, this.error = t, this.complete = r
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new s(e, this.nextOrObserver, this.error, this.complete))
      }, e
    }(), s = function (e) {
      function t(t, r, n, o) {
        e.call(this, t);
        var s = new i.Subscriber(r, n, o);
        s.syncErrorThrowable = !0, this.add(s), this.safeSubscriber = s
      }

      return n(t, e), t.prototype._next = function (e) {
        var t = this.safeSubscriber;
        t.next(e), t.syncErrorThrown ? this.destination.error(t.syncErrorValue) : this.destination.next(
          e)
      }, t.prototype._error = function (e) {
        var t = this.safeSubscriber;
        t.error(e), t.syncErrorThrown ? this.destination.error(t.syncErrorValue) : this.destination.error(
          e)
      }, t.prototype._complete = function () {
        var e = this.safeSubscriber;
        e.complete(), e.syncErrorThrown ? this.destination.error(e.syncErrorValue) : this.destination.complete()
      }, t
    }(i.Subscriber)
  }, { "../Subscriber": 122 }],
  137: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = e("../OuterSubscriber"), o = e("../util/subscribeToResult");
    r.exhaustMap = function (e, t) {
      return this.lift(new s(e, t))
    };
    var s = function () {
      function e(e, t) {
        this.project = e, this.resultSelector = t
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new a(e, this.project, this.resultSelector))
      }, e
    }(), a = function (e) {
      function t(t, r, n) {
        e.call(this,
          t), this.project = r, this.resultSelector = n, this.hasSubscription = !1, this.hasCompleted = !1, this.index = 0
      }

      return n(t, e), t.prototype._next = function (e) {
        this.hasSubscription || this.tryNext(e)
      }, t.prototype.tryNext = function (e) {
        var t = this.index++, r = this.destination;
        try {
          var n = this.project(e, t);
          this.hasSubscription = !0, this.add(o.subscribeToResult(this, n, e, t))
        }
        catch (e) {
          r.error(e)
        }
      }, t.prototype._complete = function () {
        this.hasCompleted = !0, this.hasSubscription || this.destination.complete()
      }, t.prototype.notifyNext = function (e, t, r, n, i) {
        var o = this, s = o.resultSelector, a = o.destination;
        s ? this.trySelectResult(e, t, r, n) : a.next(t)
      }, t.prototype.trySelectResult = function (e, t, r, n) {
        var i = this, o = i.resultSelector, s = i.destination;
        try {
          var a = o(e, t, r, n);
          s.next(a)
        }
        catch (e) {
          s.error(e)
        }
      }, t.prototype.notifyError = function (e) {
        this.destination.error(e)
      }, t.prototype.notifyComplete = function (e) {
        this.remove(e), this.hasSubscription = !1, this.hasCompleted && this.destination.complete()
      }, t
    }(i.OuterSubscriber)
  }, { "../OuterSubscriber": 118, "../util/subscribeToResult": 169 }],
  138: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = e("../Subscriber");
    r.filter = function (e, t) {
      return this.lift(new o(e, t))
    };
    var o = function () {
      function e(e, t) {
        this.predicate = e, this.thisArg = t
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new s(e, this.predicate, this.thisArg))
      }, e
    }(), s = function (e) {
      function t(t, r, n) {
        e.call(this, t), this.predicate = r, this.thisArg = n, this.count = 0, this.predicate = r
      }

      return n(t, e), t.prototype._next = function (e) {
        var t;
        try {
          t = this.predicate.call(this.thisArg, e, this.count++)
        }
        catch (e) {
          return void this.destination.error(e)
        }
        t && this.destination.next(e)
      }, t
    }(i.Subscriber)
  }, { "../Subscriber": 122 }],
  139: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = e("../Subscriber"), o = e("../Subscription");
    r._finally = function (e) {
      return this.lift(new s(e))
    };
    var s = function () {
      function e(e) {
        this.callback = e
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new a(e, this.callback))
      }, e
    }(), a = function (e) {
      function t(t, r) {
        e.call(this, t), this.add(new o.Subscription(r))
      }

      return n(t, e), t
    }(i.Subscriber)
  }, { "../Subscriber": 122, "../Subscription": 123 }],
  140: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = e("../Subscriber");
    r.map = function (e, t) {
      if ("function" != typeof e)throw new TypeError(
        "argument is not a function. Are you looking for `mapTo()`?");
      return this.lift(new o(e, t))
    };
    var o = function () {
      function e(e, t) {
        this.project = e, this.thisArg = t
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new s(e, this.project, this.thisArg))
      }, e
    }();
    r.MapOperator = o;
    var s = function (e) {
      function t(t, r, n) {
        e.call(this, t), this.project = r, this.count = 0, this.thisArg = n || this
      }

      return n(t, e), t.prototype._next = function (e) {
        var t;
        try {
          t = this.project.call(this.thisArg, e, this.count++)
        }
        catch (e) {
          return void this.destination.error(e)
        }
        this.destination.next(t)
      }, t
    }(i.Subscriber)
  }, { "../Subscriber": 122 }],
  141: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = e("../OuterSubscriber"), o = e("../util/subscribeToResult");
    r.mergeAll = function (e) {
      return void 0 === e && (e = Number.POSITIVE_INFINITY), this.lift(new s(e))
    };
    var s = function () {
      function e(e) {
        this.concurrent = e
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new a(e, this.concurrent))
      }, e
    }();
    r.MergeAllOperator = s;
    var a = function (e) {
      function t(t, r) {
        e.call(this,
          t), this.concurrent = r, this.hasCompleted = !1, this.buffer = [], this.active = 0
      }

      return n(t, e), t.prototype._next = function (e) {
        this.active < this.concurrent ? (this.active++, this.add(o.subscribeToResult(this,
          e))) : this.buffer.push(e)
      }, t.prototype._complete = function () {
        this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete()
      }, t.prototype.notifyComplete = function (e) {
        var t = this.buffer;
        this.remove(e), this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
      }, t
    }(i.OuterSubscriber);
    r.MergeAllSubscriber = a
  }, { "../OuterSubscriber": 118, "../util/subscribeToResult": 169 }],
  142: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = e("../util/subscribeToResult"), o = e("../OuterSubscriber");
    r.mergeMap = function (e, t, r) {
      return void 0 === r && (r = Number.POSITIVE_INFINITY), "number" == typeof t && (r = t, t = null), this.lift(
        new s(e, t, r))
    };
    var s = function () {
      function e(e, t, r) {
        void 0 === r && (r = Number.POSITIVE_INFINITY), this.project = e, this.resultSelector = t, this.concurrent = r
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new a(e, this.project, this.resultSelector, this.concurrent))
      }, e
    }();
    r.MergeMapOperator = s;
    var a = function (e) {
      function t(t, r, n, i) {
        void 0 === i && (i = Number.POSITIVE_INFINITY), e.call(this,
          t), this.project = r, this.resultSelector = n, this.concurrent = i, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
      }

      return n(t, e), t.prototype._next = function (e) {
        this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e)
      }, t.prototype._tryNext = function (e) {
        var t, r = this.index++;
        try {
          t = this.project(e, r)
        }
        catch (e) {
          return void this.destination.error(e)
        }
        this.active++, this._innerSub(t, e, r)
      }, t.prototype._innerSub = function (e, t, r) {
        this.add(i.subscribeToResult(this, e, t, r))
      }, t.prototype._complete = function () {
        this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete()
      }, t.prototype.notifyNext = function (e, t, r, n, i) {
        this.resultSelector ? this._notifyResultSelector(e, t, r, n) : this.destination.next(t)
      }, t.prototype._notifyResultSelector = function (e, t, r, n) {
        var i;
        try {
          i = this.resultSelector(e, t, r, n)
        }
        catch (e) {
          return void this.destination.error(e)
        }
        this.destination.next(i)
      }, t.prototype.notifyComplete = function (e) {
        var t = this.buffer;
        this.remove(e), this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
      }, t
    }(o.OuterSubscriber);
    r.MergeMapSubscriber = a
  }, { "../OuterSubscriber": 118, "../util/subscribeToResult": 169 }],
  143: [function (e, t, r) {
    "use strict";
    var n = e("../observable/ConnectableObservable");
    r.multicast = function (e, t) {
      var r;
      if (r = "function" == typeof e ? e : function () {
          return e
        }, "function" == typeof t)return this.lift(new i(r, t));
      var o = Object.create(this, n.connectableObservableDescriptor);
      return o.source = this, o.subjectFactory = r, o
    };
    var i = function () {
      function e(e, t) {
        this.subjectFactory = e, this.selector = t
      }

      return e.prototype.call = function (e, t) {
        var r = this.selector, n = this.subjectFactory(), i = r(n).subscribe(e);
        return i.add(t.subscribe(n)), i
      }, e
    }();
    r.MulticastOperator = i
  }, { "../observable/ConnectableObservable": 125 }],
  144: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = e("../Subscriber");
    r.pairwise = function () {
      return this.lift(new o)
    };
    var o = function () {
      function e() {
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new s(e))
      }, e
    }(), s = function (e) {
      function t(t) {
        e.call(this, t), this.hasPrev = !1
      }

      return n(t, e), t.prototype._next = function (e) {
        this.hasPrev ? this.destination.next([this.prev, e]) : this.hasPrev = !0, this.prev = e
      }, t
    }(i.Subscriber)
  }, { "../Subscriber": 122 }],
  145: [function (e, t, r) {
    "use strict";
    function n() {
      return new o.Subject
    }

    var i = e("./multicast"), o = e("../Subject");
    r.share = function () {
      return i.multicast.call(this, n).refCount()
    }
  }, { "../Subject": 120, "./multicast": 143 }],
  146: [function (e, t, r) {
    "use strict";
    var n = e("../observable/ArrayObservable"), i = e("../observable/ScalarObservable"),
      o = e("../observable/EmptyObservable"), s = e("./concat"), a = e("../util/isScheduler");
    r.startWith = function () {
      for (var e = [], t = 0; t < arguments.length; t++)e[t - 0] = arguments[t];
      var r = e[e.length - 1];
      a.isScheduler(r) ? e.pop() : r = null;
      var u = e.length;
      return 1 === u ? s.concatStatic(new i.ScalarObservable(e[0], r),
        this) : u > 1 ? s.concatStatic(new n.ArrayObservable(e, r),
        this) : s.concatStatic(new o.EmptyObservable(r), this)
    }
  }, {
    "../observable/ArrayObservable": 124,
    "../observable/EmptyObservable": 126,
    "../observable/ScalarObservable": 128,
    "../util/isScheduler": 167,
    "./concat": 134
  }],
  147: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = e("../OuterSubscriber"), o = e("../util/subscribeToResult");
    r.switchMap = function (e, t) {
      return this.lift(new s(e, t))
    };
    var s = function () {
      function e(e, t) {
        this.project = e, this.resultSelector = t
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new a(e, this.project, this.resultSelector))
      }, e
    }(), a = function (e) {
      function t(t, r, n) {
        e.call(this, t), this.project = r, this.resultSelector = n, this.index = 0
      }

      return n(t, e), t.prototype._next = function (e) {
        var t, r = this.index++;
        try {
          t = this.project(e, r)
        }
        catch (e) {
          return void this.destination.error(e)
        }
        this._innerSub(t, e, r)
      }, t.prototype._innerSub = function (e, t, r) {
        var n = this.innerSubscription;
        n && n.unsubscribe(), this.add(this.innerSubscription = o.subscribeToResult(this, e, t, r))
      }, t.prototype._complete = function () {
        var t = this.innerSubscription;
        t && !t.closed || e.prototype._complete.call(this)
      }, t.prototype._unsubscribe = function () {
        this.innerSubscription = null
      }, t.prototype.notifyComplete = function (t) {
        this.remove(t), this.innerSubscription = null, this.isStopped && e.prototype._complete.call(
          this)
      }, t.prototype.notifyNext = function (e, t, r, n, i) {
        this.resultSelector ? this._tryNotifyNext(e, t, r, n) : this.destination.next(t)
      }, t.prototype._tryNotifyNext = function (e, t, r, n) {
        var i;
        try {
          i = this.resultSelector(e, t, r, n)
        }
        catch (e) {
          return void this.destination.error(e)
        }
        this.destination.next(i)
      }, t
    }(i.OuterSubscriber)
  }, { "../OuterSubscriber": 118, "../util/subscribeToResult": 169 }],
  148: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = e("../OuterSubscriber"), o = e("../util/subscribeToResult");
    r.takeUntil = function (e) {
      return this.lift(new s(e))
    };
    var s = function () {
      function e(e) {
        this.notifier = e
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new a(e, this.notifier))
      }, e
    }(), a = function (e) {
      function t(t, r) {
        e.call(this, t), this.notifier = r, this.add(o.subscribeToResult(this, r))
      }

      return n(t, e), t.prototype.notifyNext = function (e, t, r, n, i) {
        this.complete()
      }, t.prototype.notifyComplete = function () {
      }, t
    }(i.OuterSubscriber)
  }, { "../OuterSubscriber": 118, "../util/subscribeToResult": 169 }],
  149: [function (e, t, r) {
    "use strict";
    function n() {
      for (var e = [], t = 0; t < arguments.length; t++)e[t - 0] = arguments[t];
      var r = e[e.length - 1];
      return "function" == typeof r && e.pop(), new o.ArrayObservable(e).lift(new h(r))
    }

    var i = function (e, t) {
        function r() {
          this.constructor = e
        }

        for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }, o = e("../observable/ArrayObservable"), s = e("../util/isArray"), a = e("../Subscriber"),
      u = e("../OuterSubscriber"), c = e("../util/subscribeToResult"), l = e("../symbol/iterator");
    r.zipProto = function () {
      for (var e = [], t = 0; t < arguments.length; t++)e[t - 0] = arguments[t];
      return this.lift.call(n.apply(void 0, [this].concat(e)))
    }, r.zipStatic = n;
    var h = function () {
      function e(e) {
        this.project = e
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new p(e, this.project))
      }, e
    }();
    r.ZipOperator = h;
    var p = function (e) {
      function t(t, r, n) {
        void 0 === n && (n = Object.create(null)), e.call(this,
          t), this.iterators = [], this.active = 0, this.project = "function" == typeof r ? r : null, this.values = n
      }

      return i(t, e), t.prototype._next = function (e) {
        var t = this.iterators;
        s.isArray(e) ? t.push(new d(e)) : "function" == typeof e[l.iterator] ? t.push(new f(e[l.iterator]())) : t.push(
          new b(this.destination, this, e))
      }, t.prototype._complete = function () {
        var e = this.iterators, t = e.length;
        if (0 !== t) {
          this.active = t;
          for (var r = 0; r < t; r++) {
            var n = e[r];
            n.stillUnsubscribed ? this.add(n.subscribe(n, r)) : this.active--
          }
        } else this.destination.complete()
      }, t.prototype.notifyInactive = function () {
        0 === --this.active && this.destination.complete()
      }, t.prototype.checkIterators = function () {
        for (var e = this.iterators, t = e.length, r = this.destination, n = 0; n < t; n++)if ("function" == typeof(s = e[n]).hasValue && !s.hasValue())return;
        for (var i = !1, o = [], n = 0; n < t; n++) {
          var s = e[n], a = s.next();
          if (s.hasCompleted() && (i = !0), a.done)return void r.complete();
          o.push(a.value)
        }
        this.project ? this._tryProject(o) : r.next(o), i && r.complete()
      }, t.prototype._tryProject = function (e) {
        var t;
        try {
          t = this.project.apply(this, e)
        }
        catch (e) {
          return void this.destination.error(e)
        }
        this.destination.next(t)
      }, t
    }(a.Subscriber);
    r.ZipSubscriber = p;
    var f = function () {
      function e(e) {
        this.iterator = e, this.nextResult = e.next()
      }

      return e.prototype.hasValue = function () {
        return !0
      }, e.prototype.next = function () {
        var e = this.nextResult;
        return this.nextResult = this.iterator.next(), e
      }, e.prototype.hasCompleted = function () {
        var e = this.nextResult;
        return e && e.done
      }, e
    }(), d = function () {
      function e(e) {
        this.array = e, this.index = 0, this.length = 0, this.length = e.length
      }

      return e.prototype[l.iterator] = function () {
        return this
      }, e.prototype.next = function (e) {
        var t = this.index++, r = this.array;
        return t < this.length ? { value: r[t], done: !1 } : { value: null, done: !0 }
      }, e.prototype.hasValue = function () {
        return this.array.length > this.index
      }, e.prototype.hasCompleted = function () {
        return this.array.length === this.index
      }, e
    }(), b = function (e) {
      function t(t, r, n) {
        e.call(this,
          t), this.parent = r, this.observable = n, this.stillUnsubscribed = !0, this.buffer = [], this.isComplete = !1
      }

      return i(t, e), t.prototype[l.iterator] = function () {
        return this
      }, t.prototype.next = function () {
        var e = this.buffer;
        return 0 === e.length && this.isComplete ? { value: null, done: !0 } : {
          value: e.shift(),
          done: !1
        }
      }, t.prototype.hasValue = function () {
        return this.buffer.length > 0
      }, t.prototype.hasCompleted = function () {
        return 0 === this.buffer.length && this.isComplete
      }, t.prototype.notifyComplete = function () {
        this.buffer.length > 0 ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete()
      }, t.prototype.notifyNext = function (e, t, r, n, i) {
        this.buffer.push(t), this.parent.checkIterators()
      }, t.prototype.subscribe = function (e, t) {
        return c.subscribeToResult(this, this.observable, this, t)
      }, t
    }(u.OuterSubscriber)
  }, {
    "../OuterSubscriber": 118,
    "../Subscriber": 122,
    "../observable/ArrayObservable": 124,
    "../symbol/iterator": 154,
    "../util/isArray": 160,
    "../util/subscribeToResult": 169
  }],
  150: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = function (e) {
      function t(t, r) {
        e.call(this)
      }

      return n(t, e), t.prototype.schedule = function (e, t) {
        return void 0 === t && (t = 0), this
      }, t
    }(e("../Subscription").Subscription);
    r.Action = i
  }, { "../Subscription": 123 }],
  151: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = e("../util/root"), o = function (e) {
      function t(t, r) {
        e.call(this, t, r), this.scheduler = t, this.work = r, this.pending = !1
      }

      return n(t, e), t.prototype.schedule = function (e, t) {
        if (void 0 === t && (t = 0), this.closed)return this;
        this.state = e, this.pending = !0;
        var r = this.id, n = this.scheduler;
        return null != r && (this.id = this.recycleAsyncId(n,
          r,
          t)), this.delay = t, this.id = this.id || this.requestAsyncId(n, this.id, t), this
      }, t.prototype.requestAsyncId = function (e, t, r) {
        return void 0 === r && (r = 0), i.root.setInterval(e.flush.bind(e, this), r)
      }, t.prototype.recycleAsyncId = function (e, t, r) {
        return void 0 === r && (r = 0), null !== r && this.delay === r && !1 === this.pending ? t : i.root.clearInterval(
            t) && void 0 || void 0
      }, t.prototype.execute = function (e, t) {
        if (this.closed)return new Error("executing a cancelled action");
        this.pending = !1;
        var r = this._execute(e, t);
        if (r)return r;
        !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler,
          this.id,
          null))
      }, t.prototype._execute = function (e, t) {
        var r = !1, n = void 0;
        try {
          this.work(e)
        }
        catch (e) {
          r = !0, n = !!e && e || new Error(e)
        }
        if (r)return this.unsubscribe(), n
      }, t.prototype._unsubscribe = function () {
        var e = this.id, t = this.scheduler, r = t.actions, n = r.indexOf(this);
        this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== n && r.splice(
          n,
          1), null != e && (this.id = this.recycleAsyncId(t, e, null)), this.delay = null
      }, t
    }(e("./Action").Action);
    r.AsyncAction = o
  }, { "../util/root": 168, "./Action": 150 }],
  152: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = function (e) {
      function t() {
        e.apply(this, arguments), this.actions = [], this.active = !1, this.scheduled = void 0
      }

      return n(t, e), t.prototype.flush = function (e) {
        var t = this.actions;
        if (this.active) t.push(e); else {
          var r;
          this.active = !0;
          do {
            if (r = e.execute(e.state, e.delay))break
          }
          while (e = t.shift());
          if (this.active = !1, r) {
            for (; e = t.shift();)e.unsubscribe();
            throw r
          }
        }
      }, t
    }(e("../Scheduler").Scheduler);
    r.AsyncScheduler = i
  }, { "../Scheduler": 119 }],
  153: [function (e, t, r) {
    "use strict";
    var n = e("./AsyncAction"), i = e("./AsyncScheduler");
    r.async = new i.AsyncScheduler(n.AsyncAction)
  }, { "./AsyncAction": 151, "./AsyncScheduler": 152 }],
  154: [function (e, t, r) {
    "use strict";
    function n(e) {
      var t = e.Symbol;
      if ("function" == typeof t)return t.iterator || (t.iterator = t("iterator polyfill")), t.iterator;
      var r = e.Set;
      if (r && "function" == typeof(new r)["@@iterator"])return "@@iterator";
      var n = e.Map;
      if (n)for (var i = Object.getOwnPropertyNames(n.prototype), o = 0; o < i.length; ++o) {
        var s = i[o];
        if ("entries" !== s && "size" !== s && n.prototype[s] === n.prototype.entries)return s
      }
      return "@@iterator"
    }

    var i = e("../util/root");
    r.symbolIteratorPonyfill = n, r.iterator = n(i.root), r.$$iterator = r.iterator
  }, { "../util/root": 168 }],
  155: [function (e, t, r) {
    "use strict";
    function n(e) {
      var t, r = e.Symbol;
      return "function" == typeof r ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
    }

    var i = e("../util/root");
    r.getSymbolObservable = n, r.observable = n(i.root), r.$$observable = r.observable
  }, { "../util/root": 168 }],
  156: [function (e, t, r) {
    "use strict";
    var n = e("../util/root").root.Symbol;
    r.rxSubscriber = "function" == typeof n && "function" == typeof n.for ? n.for("rxSubscriber") : "@@rxSubscriber", r.$$rxSubscriber = r.rxSubscriber
  }, { "../util/root": 168 }],
  157: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = function (e) {
      function t() {
        var t = e.call(this, "object unsubscribed");
        this.name = t.name = "ObjectUnsubscribedError", this.stack = t.stack, this.message = t.message
      }

      return n(t, e), t
    }(Error);
    r.ObjectUnsubscribedError = i
  }, {}],
  158: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = function (e) {
      function t(t) {
        e.call(this), this.errors = t;
        var r = Error.call(this,
          t ? t.length + " errors occurred during unsubscription:\n  " + t.map(function (e, t) {
              return t + 1 + ") " + e.toString()
            }).join("\n  ") : "");
        this.name = r.name = "UnsubscriptionError", this.stack = r.stack, this.message = r.message
      }

      return n(t, e), t
    }(Error);
    r.UnsubscriptionError = i
  }, {}],
  159: [function (e, t, r) {
    "use strict";
    r.errorObject = { e: {} }
  }, {}],
  160: [function (e, t, r) {
    "use strict";
    r.isArray = Array.isArray || function (e) {
        return e && "number" == typeof e.length
      }
  }, {}],
  161: [function (e, t, r) {
    "use strict";
    r.isArrayLike = function (e) {
      return e && "number" == typeof e.length
    }
  }, {}],
  162: [function (e, t, r) {
    "use strict";
    r.isDate = function (e) {
      return e instanceof Date && !isNaN(+e)
    }
  }, {}],
  163: [function (e, t, r) {
    "use strict";
    r.isFunction = function (e) {
      return "function" == typeof e
    }
  }, {}],
  164: [function (e, t, r) {
    "use strict";
    var n = e("../util/isArray");
    r.isNumeric = function (e) {
      return !n.isArray(e) && e - parseFloat(e) + 1 >= 0
    }
  }, { "../util/isArray": 160 }],
  165: [function (e, t, r) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    r.isObject = function (e) {
      return null != e && "object" === (void 0 === e ? "undefined" : n(e))
    }
  }, {}],
  166: [function (e, t, r) {
    "use strict";
    r.isPromise = function (e) {
      return e && "function" != typeof e.subscribe && "function" == typeof e.then
    }
  }, {}],
  167: [function (e, t, r) {
    "use strict";
    r.isScheduler = function (e) {
      return e && "function" == typeof e.schedule
    }
  }, {}],
  168: [function (e, t, r) {
    (function (e) {
      "use strict";
      var t = "undefined" != typeof window && window,
        n = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
        i = void 0 !== e && e, o = t || i || n;
      r.root = o, function () {
        if (!o)throw new Error("RxJS could not find any global context (window, self, global)")
      }()
    }).call(this,
      "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }, {}],
  169: [function (e, t, r) {
    "use strict";
    var n = e("./root"), i = e("./isArrayLike"), o = e("./isPromise"), s = e("./isObject"),
      a = e("../Observable"), u = e("../symbol/iterator"), c = e("../InnerSubscriber"),
      l = e("../symbol/observable");
    r.subscribeToResult = function (e, t, r, h) {
      var p = new c.InnerSubscriber(e, r, h);
      if (p.closed)return null;
      if (t instanceof a.Observable)return t._isScalar ? (p.next(t.value), p.complete(), null) : t.subscribe(
        p);
      if (i.isArrayLike(t)) {
        for (var f = 0, d = t.length; f < d && !p.closed; f++)p.next(t[f]);
        p.closed || p.complete()
      } else {
        if (o.isPromise(t))return t.then(function (e) {
          p.closed || (p.next(e), p.complete())
        }, function (e) {
          return p.error(e)
        }).then(null, function (e) {
          n.root.setTimeout(function () {
            throw e
          })
        }), p;
        if (t && "function" == typeof t[u.iterator])for (var b = t[u.iterator](); ;) {
          var m = b.next();
          if (m.done) {
            p.complete();
            break
          }
          if (p.next(m.value), p.closed)break
        } else if (t && "function" == typeof t[l.observable]) {
          var v = t[l.observable]();
          if ("function" == typeof v.subscribe)return v.subscribe(new c.InnerSubscriber(e, r, h));
          p.error(new TypeError("Provided object does not correctly implement Symbol.observable"))
        } else {
          var y = "You provided " + (s.isObject(t) ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
          p.error(new TypeError(y))
        }
      }
      return null
    }
  }, {
    "../InnerSubscriber": 115,
    "../Observable": 116,
    "../symbol/iterator": 154,
    "../symbol/observable": 155,
    "./isArrayLike": 161,
    "./isObject": 165,
    "./isPromise": 166,
    "./root": 168
  }],
  170: [function (e, t, r) {
    "use strict";
    var n = e("../Subscriber"), i = e("../symbol/rxSubscriber"), o = e("../Observer");
    r.toSubscriber = function (e, t, r) {
      if (e) {
        if (e instanceof n.Subscriber)return e;
        if (e[i.rxSubscriber])return e[i.rxSubscriber]()
      }
      return e || t || r ? new n.Subscriber(e, t, r) : new n.Subscriber(o.empty)
    }
  }, { "../Observer": 117, "../Subscriber": 122, "../symbol/rxSubscriber": 156 }],
  171: [function (e, t, r) {
    "use strict";
    function n() {
      try {
        return i.apply(this, arguments)
      }
      catch (e) {
        return o.errorObject.e = e, o.errorObject
      }
    }

    var i, o = e("./errorObject");
    r.tryCatch = function (e) {
      return i = e, n
    }
  }, { "./errorObject": 159 }],
  172: [function (e, t, r) {
    "use strict";
    var n = e("is-arrayish"), i = Array.prototype.concat, o = Array.prototype.slice,
      s = t.exports = function (e) {
        for (var t = [], r = 0, s = e.length; r < s; r++) {
          var a = e[r];
          n(a) ? t = i.call(t, o.call(a)) : t.push(a)
        }
        return t
      };
    s.wrap = function (e) {
      return function () {
        return e(s(arguments))
      }
    }
  }, { "is-arrayish": 89 }],
  173: [function (require, module, exports) {
    !function (a, b) {
      var c = {}, d = {}, e = {}, f = null;
      !function (e, t) {
        function r() {
          this._delay = 0, this._endDelay = 0, this._fill = "none", this._iterationStart = 0, this._iterations = 1, this._duration = 0, this._playbackRate = 1, this._direction = "normal", this._easing = "linear", this._easingFunction = y
        }

        function n() {
          return e.isDeprecated("Invalid timing inputs",
            "2016-03-02",
            "TypeError exceptions will be thrown instead.",
            !0)
        }

        function i(t, n, i) {
          var o = new r;
          return n && (o.fill = "both", o.duration = "auto"), "number" != typeof t || isNaN(t) ? void 0 !== t && Object.getOwnPropertyNames(
              t).forEach(function (r) {
              if ("auto" != t[r]) {
                if (("number" == typeof o[r] || "duration" == r) && ("number" != typeof t[r] || isNaN(
                    t[r])))return;
                if ("fill" == r && -1 == m.indexOf(t[r]))return;
                if ("direction" == r && -1 == v.indexOf(t[r]))return;
                if ("playbackRate" == r && 1 !== t[r] && e.isDeprecated(
                    "AnimationEffectTiming.playbackRate",
                    "2014-11-28",
                    "Use Animation.playbackRate instead."))return;
                o[r] = t[r]
              }
            }) : o.duration = t, o
        }

        function o(e, t, r, n) {
          return e < 0 || e > 1 || r < 0 || r > 1 ? y : function (i) {
            function o(e, t, r) {
              return 3 * e * (1 - r) * (1 - r) * r + 3 * t * (1 - r) * r * r + r * r * r
            }

            if (i <= 0) {
              var s = 0;
              return e > 0 ? s = t / e : !t && r > 0 && (s = n / r), s * i
            }
            if (i >= 1) {
              var a = 0;
              return r < 1 ? a = (n - 1) / (r - 1) : 1 == r && e < 1 && (a = (t - 1) / (e - 1)), 1 + a * (i - 1)
            }
            for (var u = 0, c = 1; u < c;) {
              var l = (u + c) / 2, h = o(e, r, l);
              if (Math.abs(i - h) < 1e-5)return o(t, n, l);
              h < i ? u = l : c = l
            }
            return o(t, n, l)
          }
        }

        function s(e, t) {
          return function (r) {
            if (r >= 1)return 1;
            var n = 1 / e;
            return (r += t * n) - r % n
          }
        }

        function a(e) {
          S || (S = document.createElement("div").style), S.animationTimingFunction = "", S.animationTimingFunction = e;
          var t = S.animationTimingFunction;
          if ("" == t && n())throw new TypeError(e + " is not a valid value for easing");
          return t
        }

        function u(e) {
          if ("linear" == e)return y;
          var t = k.exec(e);
          if (t)return o.apply(this, t.slice(1).map(Number));
          var r = j.exec(e);
          return r ? s(Number(r[1]), { start: g, middle: w, end: x }[r[2]]) : _[e] || y
        }

        function c(e) {
          return 0 === e.duration || 0 === e.iterations ? 0 : e.duration * e.iterations
        }

        function l(e, t, r) {
          if (null == t)return T;
          var n = r.delay + e + r.endDelay;
          return t < Math.min(r.delay, n) ? E : t >= Math.min(r.delay + e, n) ? M : A
        }

        function h(e, t, r, n, i) {
          switch (n) {
            case E:
              return "backwards" == t || "both" == t ? 0 : null;
            case A:
              return r - i;
            case M:
              return "forwards" == t || "both" == t ? e : null;
            case T:
              return null
          }
        }

        function p(e, t, r, n, i) {
          var o = i;
          return 0 === e ? t !== E && (o += r) : o += n / e, o
        }

        function f(e, t, r, n, i, o) {
          var s = e === 1 / 0 ? t % 1 : e % 1;
          return 0 !== s || r !== M || 0 === n || 0 === i && 0 !== o || (s = 1), s
        }

        function d(e, t, r, n) {
          return e === M && t === 1 / 0 ? 1 / 0 : 1 === r ? Math.floor(n) - 1 : Math.floor(n)
        }

        function b(e, t, r) {
          var n = e;
          if ("normal" !== e && "reverse" !== e) {
            var i = t;
            "alternate-reverse" === e && (i += 1), n = "normal", i !== 1 / 0 && i % 2 != 0 && (n = "reverse")
          }
          return "normal" === n ? r : 1 - r
        }

        var m = "backwards|forwards|both|none".split("|"),
          v = "reverse|alternate|alternate-reverse".split("|"), y = function (e) {
            return e
          };
        r.prototype = {
          _setMember: function (t, r) {
            this["_" + t] = r, this._effect && (this._effect._timingInput[t] = r, this._effect._timing = e.normalizeTimingInput(
              this._effect._timingInput), this._effect.activeDuration = e.calculateActiveDuration(
              this._effect._timing), this._effect._animation && this._effect._animation._rebuildUnderlyingAnimation())
          }, get playbackRate() {
            return this._playbackRate
          }, set delay(e) {
            this._setMember("delay", e)
          }, get delay() {
            return this._delay
          }, set endDelay(e) {
            this._setMember("endDelay", e)
          }, get endDelay() {
            return this._endDelay
          }, set fill(e) {
            this._setMember("fill", e)
          }, get fill() {
            return this._fill
          }, set iterationStart(e) {
            if ((isNaN(e) || e < 0) && n())throw new TypeError(
              "iterationStart must be a non-negative number, received: " + timing.iterationStart);
            this._setMember("iterationStart", e)
          }, get iterationStart() {
            return this._iterationStart
          }, set duration(e) {
            if ("auto" != e && (isNaN(e) || e < 0) && n())throw new TypeError(
              "duration must be non-negative or auto, received: " + e);
            this._setMember("duration", e)
          }, get duration() {
            return this._duration
          }, set direction(e) {
            this._setMember("direction", e)
          }, get direction() {
            return this._direction
          }, set easing(e) {
            this._easingFunction = u(a(e)), this._setMember("easing", e)
          }, get easing() {
            return this._easing
          }, set iterations(e) {
            if ((isNaN(e) || e < 0) && n())throw new TypeError(
              "iterations must be non-negative, received: " + e);
            this._setMember("iterations", e)
          }, get iterations() {
            return this._iterations
          }
        };
        var g = 1, w = .5, x = 0, _ = {
            ease: o(.25, .1, .25, 1),
            "ease-in": o(.42, 0, 1, 1),
            "ease-out": o(0, 0, .58, 1),
            "ease-in-out": o(.42, 0, .58, 1),
            "step-start": s(1, g),
            "step-middle": s(1, w),
            "step-end": s(1, x)
          }, S = null, O = "\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",
          k = new RegExp("cubic-bezier\\(" + O + "," + O + "," + O + "," + O + "\\)"),
          j = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/, T = 0, E = 1, M = 2, A = 3;
        e.cloneTimingInput = function (e) {
          if ("number" == typeof e)return e;
          var t = {};
          for (var r in e)t[r] = e[r];
          return t
        }, e.makeTiming = i, e.numericTimingToObject = function (e) {
          return "number" == typeof e && (e = isNaN(e) ? { duration: 0 } : { duration: e }), e
        }, e.normalizeTimingInput = function (t, r) {
          return t = e.numericTimingToObject(t), i(t, r)
        }, e.calculateActiveDuration = function (e) {
          return Math.abs(c(e) / e.playbackRate)
        }, e.calculateIterationProgress = function (e, t, r) {
          var n = l(e, t, r), i = h(e, r.fill, t, n, r.delay);
          if (null === i)return null;
          var o = p(r.duration, n, r.iterations, i, r.iterationStart),
            s = f(o, r.iterationStart, n, r.iterations, i, r.duration),
            a = d(n, r.iterations, s, o), u = b(r.direction, a, s);
          return r._easingFunction(u)
        }, e.calculatePhase = l, e.normalizeEasing = a, e.parseEasingFunction = u
      }(c), function (e, t) {
        function r(e, t) {
          return e in c ? c[e][t] || t : t
        }

        function n(e) {
          return "display" === e || 0 === e.lastIndexOf("animation", 0) || 0 === e.lastIndexOf(
              "transition",
              0)
        }

        function i(e, t, i) {
          if (!n(e)) {
            var o = s[e];
            if (o) {
              a.style[e] = t;
              for (var u in o) {
                var c = o[u], l = a.style[c];
                i[c] = r(c, l)
              }
            } else i[e] = r(e, t)
          }
        }

        function o(e) {
          var t = [];
          for (var r in e)if (!(r in ["easing", "offset", "composite"])) {
            var n = e[r];
            Array.isArray(n) || (n = [n]);
            for (var i, o = n.length, s = 0; s < o; s++)i = {}, i.offset = "offset" in e ? e.offset : 1 == o ? 1 : s / (o - 1), "easing" in e && (i.easing = e.easing), "composite" in e && (i.composite = e.composite), i[r] = n[s], t.push(
              i)
          }
          return t.sort(function (e, t) {
            return e.offset - t.offset
          }), t
        }

        var s = {
            background: ["backgroundImage", "backgroundPosition", "backgroundSize", "backgroundRepeat", "backgroundAttachment", "backgroundOrigin", "backgroundClip", "backgroundColor"],
            border: ["borderTopColor", "borderTopStyle", "borderTopWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
            borderBottom: ["borderBottomWidth", "borderBottomStyle", "borderBottomColor"],
            borderColor: ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"],
            borderLeft: ["borderLeftWidth", "borderLeftStyle", "borderLeftColor"],
            borderRadius: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
            borderRight: ["borderRightWidth", "borderRightStyle", "borderRightColor"],
            borderTop: ["borderTopWidth", "borderTopStyle", "borderTopColor"],
            borderWidth: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
            flex: ["flexGrow", "flexShrink", "flexBasis"],
            font: ["fontFamily", "fontSize", "fontStyle", "fontVariant", "fontWeight", "lineHeight"],
            margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
            outline: ["outlineColor", "outlineStyle", "outlineWidth"],
            padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]
          }, a = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
          u = { thin: "1px", medium: "3px", thick: "5px" }, c = {
            borderBottomWidth: u,
            borderLeftWidth: u,
            borderRightWidth: u,
            borderTopWidth: u,
            fontSize: {
              "xx-small": "60%",
              "x-small": "75%",
              small: "89%",
              medium: "100%",
              large: "120%",
              "x-large": "150%",
              "xx-large": "200%"
            },
            fontWeight: { normal: "400", bold: "700" },
            outlineWidth: u,
            textShadow: { none: "0px 0px 0px transparent" },
            boxShadow: { none: "0px 0px 0px 0px transparent" }
          };
        e.convertToArrayForm = o, e.normalizeKeyframes = function (t) {
          if (null == t)return [];
          window.Symbol && Symbol.iterator && Array.prototype.from && t[Symbol.iterator] && (t = Array.from(
            t)), Array.isArray(t) || (t = o(t));
          for (var r = t.map(function (t) {
            var r = {};
            for (var n in t) {
              var o = t[n];
              if ("offset" == n) {
                if (null != o) {
                  if (o = Number(o), !isFinite(o))throw new TypeError(
                    "Keyframe offsets must be numbers.");
                  if (o < 0 || o > 1)throw new TypeError("Keyframe offsets must be between 0 and 1.")
                }
              } else if ("composite" == n) {
                if ("add" == o || "accumulate" == o)throw{
                  type: DOMException.NOT_SUPPORTED_ERR,
                  name: "NotSupportedError",
                  message: "add compositing is not supported"
                };
                if ("replace" != o)throw new TypeError("Invalid composite mode " + o + ".")
              } else o = "easing" == n ? e.normalizeEasing(o) : "" + o;
              i(n, o, r)
            }
            return void 0 == r.offset && (r.offset = null), void 0 == r.easing && (r.easing = "linear"), r
          }), n = !0, s = -1 / 0, a = 0; a < r.length; a++) {
            var u = r[a].offset;
            if (null != u) {
              if (u < s)throw new TypeError(
                "Keyframes are not loosely sorted by offset. Sort or specify offsets.");
              s = u
            } else n = !1
          }
          return r = r.filter(function (e) {
            return e.offset >= 0 && e.offset <= 1
          }), n || function () {
            var e = r.length;
            null == r[e - 1].offset && (r[e - 1].offset = 1), e > 1 && null == r[0].offset && (r[0].offset = 0);
            for (var t = 0, n = r[0].offset, i = 1; i < e; i++) {
              var o = r[i].offset;
              if (null != o) {
                for (var s = 1; s < i - t; s++)r[t + s].offset = n + (o - n) * s / (i - t);
                t = i, n = o
              }
            }
          }(), r
        }
      }(c), function (e) {
        var t = {};
        e.isDeprecated = function (e, r, n, i) {
          var o = i ? "are" : "is", s = new Date, a = new Date(r);
          return a.setMonth(a.getMonth() + 3), !(s < a && (e in t || console.warn("Web Animations: " + e + " " + o + " deprecated and will stop working on " + a.toDateString() + ". " + n), t[e] = !0, 1))
        }, e.deprecated = function (t, r, n, i) {
          var o = i ? "are" : "is";
          if (e.isDeprecated(t, r, n, i))throw new Error(t + " " + o + " no longer supported. " + n)
        }
      }(c), function () {
        if (document.documentElement.animate) {
          var a = document.documentElement.animate([], 0), b = !0;
          if (a && (b = !1, "play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split(
              "|").forEach(function (e) {
              void 0 === a[e] && (b = !0)
            })), !b)return
        }
        !function (e, t, r) {
          function n(e) {
            for (var t = {}, r = 0; r < e.length; r++)for (var n in e[r])if ("offset" != n && "easing" != n && "composite" != n) {
              var i = { offset: e[r].offset, easing: e[r].easing, value: e[r][n] };
              t[n] = t[n] || [], t[n].push(i)
            }
            for (var o in t) {
              var s = t[o];
              if (0 != s[0].offset || 1 != s[s.length - 1].offset)throw{
                type: DOMException.NOT_SUPPORTED_ERR,
                name: "NotSupportedError",
                message: "Partial keyframes are not supported"
              }
            }
            return t
          }

          function i(r) {
            var n = [];
            for (var i in r)for (var o = r[i], s = 0; s < o.length - 1; s++) {
              var a = s, u = s + 1, c = o[a].offset, l = o[u].offset, h = c, p = l;
              0 == s && (h = -1 / 0, 0 == l && (u = a)), s == o.length - 2 && (p = 1 / 0, 1 == c && (a = u)), n.push(
                {
                  applyFrom: h,
                  applyTo: p,
                  startOffset: o[a].offset,
                  endOffset: o[u].offset,
                  easingFunction: e.parseEasingFunction(o[a].easing),
                  property: i,
                  interpolation: t.propertyInterpolation(i, o[a].value, o[u].value)
                })
            }
            return n.sort(function (e, t) {
              return e.startOffset - t.startOffset
            }), n
          }

          t.convertEffectInput = function (r) {
            var o = n(e.normalizeKeyframes(r)), s = i(o);
            return function (e, r) {
              if (null != r) s.filter(function (e) {
                return r >= e.applyFrom && r < e.applyTo
              }).forEach(function (n) {
                var i = r - n.startOffset, o = n.endOffset - n.startOffset,
                  s = 0 == o ? 0 : n.easingFunction(i / o);
                t.apply(e, n.property, n.interpolation(s))
              }); else for (var n in o)"offset" != n && "easing" != n && "composite" != n && t.clear(
                e,
                n)
            }
          }
        }(c, d), function (e, t, r) {
          function n(e) {
            return e.replace(/-(.)/g, function (e, t) {
              return t.toUpperCase()
            })
          }

          function i(e, t, r) {
            o[r] = o[r] || [], o[r].push([e, t])
          }

          var o = {};
          t.addPropertiesHandler = function (e, t, r) {
            for (var o = 0; o < r.length; o++)i(e, t, n(r[o]))
          };
          var s = {
            backgroundColor: "transparent",
            backgroundPosition: "0% 0%",
            borderBottomColor: "currentColor",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            borderBottomWidth: "3px",
            borderLeftColor: "currentColor",
            borderLeftWidth: "3px",
            borderRightColor: "currentColor",
            borderRightWidth: "3px",
            borderSpacing: "2px",
            borderTopColor: "currentColor",
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            borderTopWidth: "3px",
            bottom: "auto",
            clip: "rect(0px, 0px, 0px, 0px)",
            color: "black",
            fontSize: "100%",
            fontWeight: "400",
            height: "auto",
            left: "auto",
            letterSpacing: "normal",
            lineHeight: "120%",
            marginBottom: "0px",
            marginLeft: "0px",
            marginRight: "0px",
            marginTop: "0px",
            maxHeight: "none",
            maxWidth: "none",
            minHeight: "0px",
            minWidth: "0px",
            opacity: "1.0",
            outlineColor: "invert",
            outlineOffset: "0px",
            outlineWidth: "3px",
            paddingBottom: "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
            paddingTop: "0px",
            right: "auto",
            strokeDasharray: "none",
            strokeDashoffset: "0px",
            textIndent: "0px",
            textShadow: "0px 0px 0px transparent",
            top: "auto",
            transform: "",
            verticalAlign: "0px",
            visibility: "visible",
            width: "auto",
            wordSpacing: "normal",
            zIndex: "auto"
          };
          t.propertyInterpolation = function (r, i, a) {
            var u = r;
            /-/.test(r) && !e.isDeprecated("Hyphenated property names",
              "2016-03-22",
              "Use camelCase instead.",
              !0) && (u = n(r)), "initial" != i && "initial" != a || ("initial" == i && (i = s[u]), "initial" == a && (a = s[u]));
            for (var c = i == a ? [] : o[u], l = 0; c && l < c.length; l++) {
              var h = c[l][0](i), p = c[l][0](a);
              if (void 0 !== h && void 0 !== p) {
                var f = c[l][1](h, p);
                if (f) {
                  var d = t.Interpolation.apply(null, f);
                  return function (e) {
                    return 0 == e ? i : 1 == e ? a : d(e)
                  }
                }
              }
            }
            return t.Interpolation(!1, !0, function (e) {
              return e ? a : i
            })
          }
        }(c, d), function (e, t, r) {
          function n(t) {
            var r = e.calculateActiveDuration(t), n = function (n) {
              return e.calculateIterationProgress(r, n, t)
            };
            return n._totalDuration = t.delay + r + t.endDelay, n
          }

          t.KeyframeEffect = function (r, i, o, s) {
            var a, u = n(e.normalizeTimingInput(o)), c = t.convertEffectInput(i), l = function () {
              c(r, a)
            };
            return l._update = function (e) {
              return null !== (a = u(e))
            }, l._clear = function () {
              c(r, null)
            }, l._hasSameTarget = function (e) {
              return r === e
            }, l._target = r, l._totalDuration = u._totalDuration, l._id = s, l
          }
        }(c, d), function (e, t) {
          function r(e, t, r) {
            r.enumerable = !0, r.configurable = !0, Object.defineProperty(e, t, r)
          }

          function n(e) {
            this._surrogateStyle = document.createElementNS("http://www.w3.org/1999/xhtml",
              "div").style, this._style = e.style, this._length = 0, this._isAnimatedProperty = {};
            for (var t = 0; t < this._style.length; t++) {
              var r = this._style[t];
              this._surrogateStyle[r] = this._style[r]
            }
            this._updateIndices()
          }

          function i(e) {
            if (!e._webAnimationsPatchedStyle) {
              var t = new n(e);
              try {
                r(e, "style", {
                  get: function () {
                    return t
                  }
                })
              }
              catch (t) {
                e.style._set = function (t, r) {
                  e.style[t] = r
                }, e.style._clear = function (t) {
                  e.style[t] = ""
                }
              }
              e._webAnimationsPatchedStyle = e.style
            }
          }

          var o = { cssText: 1, length: 1, parentRule: 1 }, s = {
            getPropertyCSSValue: 1,
            getPropertyPriority: 1,
            getPropertyValue: 1,
            item: 1,
            removeProperty: 1,
            setProperty: 1
          }, a = { removeProperty: 1, setProperty: 1 };
          n.prototype = {
            get cssText() {
              return this._surrogateStyle.cssText
            }, set cssText(e) {
              for (var t = {}, r = 0; r < this._surrogateStyle.length; r++)t[this._surrogateStyle[r]] = !0;
              this._surrogateStyle.cssText = e, this._updateIndices();
              for (r = 0; r < this._surrogateStyle.length; r++)t[this._surrogateStyle[r]] = !0;
              for (var n in t)this._isAnimatedProperty[n] || this._style.setProperty(n,
                this._surrogateStyle.getPropertyValue(n))
            }, get length() {
              return this._surrogateStyle.length
            }, get parentRule() {
              return this._style.parentRule
            }, _updateIndices: function () {
              for (; this._length < this._surrogateStyle.length;)Object.defineProperty(this,
                this._length,
                {
                  configurable: !0, enumerable: !1, get: function (e) {
                  return function () {
                    return this._surrogateStyle[e]
                  }
                }(this._length)
                }), this._length++;
              for (; this._length > this._surrogateStyle.length;)this._length--, Object.defineProperty(
                this,
                this._length,
                { configurable: !0, enumerable: !1, value: void 0 })
            }, _set: function (e, t) {
              this._style[e] = t, this._isAnimatedProperty[e] = !0
            }, _clear: function (e) {
              this._style[e] = this._surrogateStyle[e], delete this._isAnimatedProperty[e]
            }
          };
          for (var u in s)n.prototype[u] = function (e, t) {
            return function () {
              var r = this._surrogateStyle[e].apply(this._surrogateStyle, arguments);
              return t && (this._isAnimatedProperty[arguments[0]] || this._style[e].apply(this._style,
                arguments), this._updateIndices()), r
            }
          }(u, u in a);
          for (var c in document.documentElement.style)c in o || c in s || function (e) {
            r(n.prototype, e, {
              get: function () {
                return this._surrogateStyle[e]
              }, set: function (t) {
                this._surrogateStyle[e] = t, this._updateIndices(), this._isAnimatedProperty[e] || (this._style[e] = t)
              }
            })
          }(c);
          e.apply = function (t, r, n) {
            i(t), t.style._set(e.propertyName(r), n)
          }, e.clear = function (t, r) {
            t._webAnimationsPatchedStyle && t.style._clear(e.propertyName(r))
          }
        }(d), function (e) {
          window.Element.prototype.animate = function (t, r) {
            var n = "";
            return r && r.id && (n = r.id), e.timeline._play(e.KeyframeEffect(this, t, r, n))
          }
        }(d), function (e, t) {
          function r(e, t, n) {
            if ("number" == typeof e && "number" == typeof t)return e * (1 - n) + t * n;
            if ("boolean" == typeof e && "boolean" == typeof t)return n < .5 ? e : t;
            if (e.length == t.length) {
              for (var i = [], o = 0; o < e.length; o++)i.push(r(e[o], t[o], n));
              return i
            }
            throw"Mismatched interpolation arguments " + e + ":" + t
          }

          e.Interpolation = function (e, t, n) {
            return function (i) {
              return n(r(e, t, i))
            }
          }
        }(d), function (e, t) {
          function r(e, t, r) {
            return Math.max(Math.min(e, r), t)
          }

          var n = function () {
            function e(e, t) {
              for (var r = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], n = 0; n < 4; n++)for (var i = 0; i < 4; i++)for (var o = 0; o < 4; o++)r[n][i] += t[n][o] * e[o][i];
              return r
            }

            function t(e) {
              return 0 == e[0][2] && 0 == e[0][3] && 0 == e[1][2] && 0 == e[1][3] && 0 == e[2][0] && 0 == e[2][1] && 1 == e[2][2] && 0 == e[2][3] && 0 == e[3][2] && 1 == e[3][3]
            }

            return function (r, n, i, o, s) {
              for (var a = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], u = 0; u < 4; u++)a[u][3] = s[u];
              for (u = 0; u < 3; u++)for (b = 0; b < 3; b++)a[3][u] += r[b] * a[b][u];
              var c = o[0], l = o[1], h = o[2], p = o[3],
                f = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
              f[0][0] = 1 - 2 * (l * l + h * h), f[0][1] = 2 * (c * l - h * p), f[0][2] = 2 * (c * h + l * p), f[1][0] = 2 * (c * l + h * p), f[1][1] = 1 - 2 * (c * c + h * h), f[1][2] = 2 * (l * h - c * p), f[2][0] = 2 * (c * h - l * p), f[2][1] = 2 * (l * h + c * p), f[2][2] = 1 - 2 * (c * c + l * l), a = e(
                a,
                f);
              var d = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
              i[2] && (d[2][1] = i[2], a = e(a, d)), i[1] && (d[2][1] = 0, d[2][0] = i[0], a = e(a,
                d)), i[0] && (d[2][0] = 0, d[1][0] = i[0], a = e(a, d));
              for (u = 0; u < 3; u++)for (var b = 0; b < 3; b++)a[u][b] *= n[u];
              return t(a) ? [a[0][0], a[0][1], a[1][0], a[1][1], a[3][0], a[3][1]] : a[0].concat(a[1],
                a[2],
                a[3])
            }
          }();
          e.composeMatrix = n, e.quat = function (t, n, i) {
            var o = e.dot(t, n), s = [];
            if (1 === (o = r(o,
                -1,
                1))) s = t; else for (var a = Math.acos(o), u = 1 * Math.sin(i * a) / Math.sqrt(1 - o * o), c = 0; c < 4; c++)s.push(
              t[c] * (Math.cos(i * a) - o * u) + n[c] * u);
            return s
          }
        }(d), function (e, t, r) {
          e.sequenceNumber = 0;
          var n = function (e, t, r) {
            this.target = e, this.currentTime = t, this.timelineTime = r, this.type = "finish", this.bubbles = !1, this.cancelable = !1, this.currentTarget = e, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now()
          };
          t.Animation = function (t) {
            this.id = "", t && t._id && (this.id = t._id), this._sequenceNumber = e.sequenceNumber++, this._currentTime = 0, this._startTime = null, this._paused = !1, this._playbackRate = 1, this._inTimeline = !0, this._finishedFlag = !0, this.onfinish = null, this._finishHandlers = [], this._effect = t, this._inEffect = this._effect._update(
              0), this._idle = !0, this._currentTimePending = !1
          }, t.Animation.prototype = {
            _ensureAlive: function () {
              this.playbackRate < 0 && 0 === this.currentTime ? this._inEffect = this._effect._update(
                -1) : this._inEffect = this._effect._update(this.currentTime), this._inTimeline || !this._inEffect && this._finishedFlag || (this._inTimeline = !0, t.timeline._animations.push(
                this))
            }, _tickCurrentTime: function (e, t) {
              e != this._currentTime && (this._currentTime = e, this._isFinished && !t && (this._currentTime = this._playbackRate > 0 ? this._totalDuration : 0), this._ensureAlive())
            }, get currentTime() {
              return this._idle || this._currentTimePending ? null : this._currentTime
            }, set currentTime(e) {
              e = +e, isNaN(e) || (t.restart(), this._paused || null == this._startTime || (this._startTime = this._timeline.currentTime - e / this._playbackRate), this._currentTimePending = !1, this._currentTime != e && (this._idle && (this._idle = !1, this._paused = !0), this._tickCurrentTime(
                e,
                !0), t.applyDirtiedAnimation(this)))
            }, get startTime() {
              return this._startTime
            }, set startTime(e) {
              e = +e, isNaN(e) || this._paused || this._idle || (this._startTime = e, this._tickCurrentTime(
                (this._timeline.currentTime - this._startTime) * this.playbackRate), t.applyDirtiedAnimation(
                this))
            }, get playbackRate() {
              return this._playbackRate
            }, set playbackRate(e) {
              if (e != this._playbackRate) {
                var r = this.currentTime;
                this._playbackRate = e, this._startTime = null, "paused" != this.playState && "idle" != this.playState && (this._finishedFlag = !1, this._idle = !1, this._ensureAlive(), t.applyDirtiedAnimation(
                  this)), null != r && (this.currentTime = r)
              }
            }, get _isFinished() {
              return !this._idle && (this._playbackRate > 0 && this._currentTime >= this._totalDuration || this._playbackRate < 0 && this._currentTime <= 0)
            }, get _totalDuration() {
              return this._effect._totalDuration
            }, get playState() {
              return this._idle ? "idle" : null == this._startTime && !this._paused && 0 != this.playbackRate || this._currentTimePending ? "pending" : this._paused ? "paused" : this._isFinished ? "finished" : "running"
            }, _rewind: function () {
              if (this._playbackRate >= 0) this._currentTime = 0; else {
                if (!(this._totalDuration < 1 / 0))throw new DOMException(
                  "Unable to rewind negative playback rate animation with infinite duration",
                  "InvalidStateError");
                this._currentTime = this._totalDuration
              }
            }, play: function () {
              this._paused = !1, (this._isFinished || this._idle) && (this._rewind(), this._startTime = null), this._finishedFlag = !1, this._idle = !1, this._ensureAlive(), t.applyDirtiedAnimation(
                this)
            }, pause: function () {
              this._isFinished || this._paused || this._idle ? this._idle && (this._rewind(), this._idle = !1) : this._currentTimePending = !0, this._startTime = null, this._paused = !0
            }, finish: function () {
              this._idle || (this.currentTime = this._playbackRate > 0 ? this._totalDuration : 0, this._startTime = this._totalDuration - this.currentTime, this._currentTimePending = !1, t.applyDirtiedAnimation(
                this))
            }, cancel: function () {
              this._inEffect && (this._inEffect = !1, this._idle = !0, this._paused = !1, this._isFinished = !0, this._finishedFlag = !0, this._currentTime = 0, this._startTime = null, this._effect._update(
                null), t.applyDirtiedAnimation(this))
            }, reverse: function () {
              this.playbackRate *= -1, this.play()
            }, addEventListener: function (e, t) {
              "function" == typeof t && "finish" == e && this._finishHandlers.push(t)
            }, removeEventListener: function (e, t) {
              if ("finish" == e) {
                var r = this._finishHandlers.indexOf(t);
                r >= 0 && this._finishHandlers.splice(r, 1)
              }
            }, _fireEvents: function (e) {
              if (this._isFinished) {
                if (!this._finishedFlag) {
                  var t = new n(this, this._currentTime, e),
                    r = this._finishHandlers.concat(this.onfinish ? [this.onfinish] : []);
                  setTimeout(function () {
                    r.forEach(function (e) {
                      e.call(t.target, t)
                    })
                  }, 0), this._finishedFlag = !0
                }
              } else this._finishedFlag = !1
            }, _tick: function (e, t) {
              this._idle || this._paused || (null == this._startTime ? t && (this.startTime = e - this._currentTime / this.playbackRate) : this._isFinished || this._tickCurrentTime(
                  (e - this._startTime) * this.playbackRate)), t && (this._currentTimePending = !1, this._fireEvents(
                e))
            }, get _needsTick() {
              return this.playState in { pending: 1, running: 1 } || !this._finishedFlag
            }, _targetAnimations: function () {
              var e = this._effect._target;
              return e._activeAnimations || (e._activeAnimations = []), e._activeAnimations
            }, _markTarget: function () {
              var e = this._targetAnimations();
              -1 === e.indexOf(this) && e.push(this)
            }, _unmarkTarget: function () {
              var e = this._targetAnimations(), t = e.indexOf(this);
              -1 !== t && e.splice(t, 1)
            }
          }
        }(c, d), function (e, t, r) {
          function n(e) {
            var t = c;
            c = [], e < m.currentTime && (e = m.currentTime), m._animations.sort(i), m._animations = a(
              e,
              !0,
              m._animations)[0], t.forEach(function (t) {
              t[1](e)
            }), s(), h = void 0
          }

          function i(e, t) {
            return e._sequenceNumber - t._sequenceNumber
          }

          function o() {
            this._animations = [], this.currentTime = window.performance && performance.now ? performance.now() : 0
          }

          function s() {
            d.forEach(function (e) {
              e()
            }), d.length = 0
          }

          function a(e, r, n) {
            b = !0, f = !1, t.timeline.currentTime = e, p = !1;
            var i = [], o = [], s = [], a = [];
            return n.forEach(function (t) {
              t._tick(e,
                r), t._inEffect ? (o.push(t._effect), t._markTarget()) : (i.push(t._effect), t._unmarkTarget()), t._needsTick && (p = !0);
              var n = t._inEffect || t._needsTick;
              t._inTimeline = n, n ? s.push(t) : a.push(t)
            }), d.push.apply(d, i), d.push.apply(d, o), p && requestAnimationFrame(function () {
            }), b = !1, [s, a]
          }

          var u = window.requestAnimationFrame, c = [], l = 0;
          window.requestAnimationFrame = function (e) {
            var t = l++;
            return 0 == c.length && u(n), c.push([t, e]), t
          }, window.cancelAnimationFrame = function (e) {
            c.forEach(function (t) {
              t[0] == e && (t[1] = function () {
              })
            })
          }, o.prototype = {
            _play: function (r) {
              r._timing = e.normalizeTimingInput(r.timing);
              var n = new t.Animation(r);
              return n._idle = !1, n._timeline = this, this._animations.push(n), t.restart(), t.applyDirtiedAnimation(
                n), n
            }
          };
          var h = void 0, p = !1, f = !1;
          t.restart = function () {
            return p || (p = !0, requestAnimationFrame(function () {
            }), f = !0), f
          }, t.applyDirtiedAnimation = function (e) {
            if (!b) {
              e._markTarget();
              var r = e._targetAnimations();
              r.sort(i), a(t.timeline.currentTime, !1, r.slice())[1].forEach(function (e) {
                var t = m._animations.indexOf(e);
                -1 !== t && m._animations.splice(t, 1)
              }), s()
            }
          };
          var d = [], b = !1, m = new o;
          t.timeline = m
        }(c, d), function (e, t) {
          function r(e, t) {
            for (var r = 0, n = 0; n < e.length; n++)r += e[n] * t[n];
            return r
          }

          function n(e, t) {
            return [e[0] * t[0] + e[4] * t[1] + e[8] * t[2] + e[12] * t[3], e[1] * t[0] + e[5] * t[1] + e[9] * t[2] + e[13] * t[3], e[2] * t[0] + e[6] * t[1] + e[10] * t[2] + e[14] * t[3], e[3] * t[0] + e[7] * t[1] + e[11] * t[2] + e[15] * t[3], e[0] * t[4] + e[4] * t[5] + e[8] * t[6] + e[12] * t[7], e[1] * t[4] + e[5] * t[5] + e[9] * t[6] + e[13] * t[7], e[2] * t[4] + e[6] * t[5] + e[10] * t[6] + e[14] * t[7], e[3] * t[4] + e[7] * t[5] + e[11] * t[6] + e[15] * t[7], e[0] * t[8] + e[4] * t[9] + e[8] * t[10] + e[12] * t[11], e[1] * t[8] + e[5] * t[9] + e[9] * t[10] + e[13] * t[11], e[2] * t[8] + e[6] * t[9] + e[10] * t[10] + e[14] * t[11], e[3] * t[8] + e[7] * t[9] + e[11] * t[10] + e[15] * t[11], e[0] * t[12] + e[4] * t[13] + e[8] * t[14] + e[12] * t[15], e[1] * t[12] + e[5] * t[13] + e[9] * t[14] + e[13] * t[15], e[2] * t[12] + e[6] * t[13] + e[10] * t[14] + e[14] * t[15], e[3] * t[12] + e[7] * t[13] + e[11] * t[14] + e[15] * t[15]]
          }

          function i(e) {
            var t = e.rad || 0;
            return ((e.deg || 0) / 360 + (e.grad || 0) / 400 + (e.turn || 0)) * (2 * Math.PI) + t
          }

          function o(e) {
            switch (e.t) {
              case"rotatex":
                o = i(e.d[0]);
                return [1, 0, 0, 0, 0, Math.cos(o), Math.sin(o), 0, 0, -Math.sin(o), Math.cos(o), 0, 0, 0, 0, 1];
              case"rotatey":
                o = i(e.d[0]);
                return [Math.cos(o), 0, -Math.sin(o), 0, 0, 1, 0, 0, Math.sin(o), 0, Math.cos(o), 0, 0, 0, 0, 1];
              case"rotate":
              case"rotatez":
                o = i(e.d[0]);
                return [Math.cos(o), Math.sin(o), 0, 0, -Math.sin(o), Math.cos(o), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
              case"rotate3d":
                var t = e.d[0], r = e.d[1], n = e.d[2], o = i(e.d[3]), s = t * t + r * r + n * n;
                if (0 === s) t = 1, r = 0, n = 0; else if (1 !== s) {
                  var a = Math.sqrt(s);
                  t /= a, r /= a, n /= a
                }
                var u = Math.sin(o / 2), c = u * Math.cos(o / 2), l = u * u;
                return [1 - 2 * (r * r + n * n) * l, 2 * (t * r * l + n * c), 2 * (t * n * l - r * c), 0, 2 * (t * r * l - n * c), 1 - 2 * (t * t + n * n) * l, 2 * (r * n * l + t * c), 0, 2 * (t * n * l + r * c), 2 * (r * n * l - t * c), 1 - 2 * (t * t + r * r) * l, 0, 0, 0, 0, 1];
              case"scale":
                return [e.d[0], 0, 0, 0, 0, e.d[1], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
              case"scalex":
                return [e.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
              case"scaley":
                return [1, 0, 0, 0, 0, e.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
              case"scalez":
                return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, e.d[0], 0, 0, 0, 0, 1];
              case"scale3d":
                return [e.d[0], 0, 0, 0, 0, e.d[1], 0, 0, 0, 0, e.d[2], 0, 0, 0, 0, 1];
              case"skew":
                var h = i(e.d[0]), p = i(e.d[1]);
                return [1, Math.tan(p), 0, 0, Math.tan(h), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
              case"skewx":
                o = i(e.d[0]);
                return [1, 0, 0, 0, Math.tan(o), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
              case"skewy":
                o = i(e.d[0]);
                return [1, Math.tan(o), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
              case"translate":
                return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t = e.d[0].px || 0, r = e.d[1].px || 0, 0, 1];
              case"translatex":
                return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t = e.d[0].px || 0, 0, 0, 1];
              case"translatey":
                return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, r = e.d[0].px || 0, 0, 1];
              case"translatez":
                return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, n = e.d[0].px || 0, 1];
              case"translate3d":
                return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t = e.d[0].px || 0, r = e.d[1].px || 0, n = e.d[2].px || 0, 1];
              case"perspective":
                return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, e.d[0].px ? -1 / e.d[0].px : 0, 0, 0, 0, 1];
              case"matrix":
                return [e.d[0], e.d[1], 0, 0, e.d[2], e.d[3], 0, 0, 0, 0, 1, 0, e.d[4], e.d[5], 0, 1];
              case"matrix3d":
                return e.d
            }
          }

          function s(e) {
            return 0 === e.length ? [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] : e.map(o)
            .reduce(n)
          }

          var a = function () {
            function e(e) {
              return e[0][0] * e[1][1] * e[2][2] + e[1][0] * e[2][1] * e[0][2] + e[2][0] * e[0][1] * e[1][2] - e[0][2] * e[1][1] * e[2][0] - e[1][2] * e[2][1] * e[0][0] - e[2][2] * e[0][1] * e[1][0]
            }

            function t(t) {
              for (var r = 1 / e(t), n = t[0][0], i = t[0][1], o = t[0][2], s = t[1][0], a = t[1][1], u = t[1][2], c = t[2][0], l = t[2][1], h = t[2][2], p = [[(a * h - u * l) * r, (o * l - i * h) * r, (i * u - o * a) * r, 0], [(u * c - s * h) * r, (n * h - o * c) * r, (o * s - n * u) * r, 0], [(s * l - a * c) * r, (c * i - n * l) * r, (n * a - i * s) * r, 0]], f = [], d = 0; d < 3; d++) {
                for (var b = 0, m = 0; m < 3; m++)b += t[3][m] * p[m][d];
                f.push(b)
              }
              return f.push(1), p.push(f), p
            }

            function n(e) {
              return [[e[0][0], e[1][0], e[2][0], e[3][0]], [e[0][1], e[1][1], e[2][1], e[3][1]], [e[0][2], e[1][2], e[2][2], e[3][2]], [e[0][3], e[1][3], e[2][3], e[3][3]]]
            }

            function i(e, t) {
              for (var r = [], n = 0; n < 4; n++) {
                for (var i = 0, o = 0; o < 4; o++)i += e[o] * t[o][n];
                r.push(i)
              }
              return r
            }

            function o(e) {
              var t = s(e);
              return [e[0] / t, e[1] / t, e[2] / t]
            }

            function s(e) {
              return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2])
            }

            function a(e, t, r, n) {
              return [r * e[0] + n * t[0], r * e[1] + n * t[1], r * e[2] + n * t[2]]
            }

            function u(e, t) {
              return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
            }

            return function (c) {
              var l = [c.slice(0, 4), c.slice(4, 8), c.slice(8, 12), c.slice(12, 16)];
              if (1 !== l[3][3])return null;
              for (var h = [], p = 0; p < 4; p++)h.push(l[p].slice());
              for (p = 0; p < 3; p++)h[p][3] = 0;
              if (0 === e(h))return null;
              var f, d = [];
              l[0][3] || l[1][3] || l[2][3] ? (d.push(l[0][3]), d.push(l[1][3]), d.push(l[2][3]), d.push(
                l[3][3]), f = i(d, n(t(h)))) : f = [0, 0, 0, 1];
              var b = l[3].slice(0, 3), m = [];
              m.push(l[0].slice(0, 3));
              var v = [];
              v.push(s(m[0])), m[0] = o(m[0]);
              var y = [];
              m.push(l[1].slice(0, 3)), y.push(r(m[0], m[1])), m[1] = a(m[1],
                m[0],
                1,
                -y[0]), v.push(s(m[1])), m[1] = o(m[1]), y[0] /= v[1], m.push(l[2].slice(0,
                3)), y.push(r(m[0], m[2])), m[2] = a(m[2], m[0], 1, -y[1]), y.push(r(m[1],
                m[2])), m[2] = a(m[2],
                m[1],
                1,
                -y[2]), v.push(s(m[2])), m[2] = o(m[2]), y[1] /= v[2], y[2] /= v[2];
              var g = u(m[1], m[2]);
              if (r(m[0],
                  g) < 0)for (p = 0; p < 3; p++)v[p] *= -1, m[p][0] *= -1, m[p][1] *= -1, m[p][2] *= -1;
              var w, x, _ = m[0][0] + m[1][1] + m[2][2] + 1;
              return _ > 1e-4 ? (w = .5 / Math.sqrt(_), x = [(m[2][1] - m[1][2]) * w, (m[0][2] - m[2][0]) * w, (m[1][0] - m[0][1]) * w, .25 / w]) : m[0][0] > m[1][1] && m[0][0] > m[2][2] ? (w = 2 * Math.sqrt(
                  1 + m[0][0] - m[1][1] - m[2][2]), x = [.25 * w, (m[0][1] + m[1][0]) / w, (m[0][2] + m[2][0]) / w, (m[2][1] - m[1][2]) / w]) : m[1][1] > m[2][2] ? (w = 2 * Math.sqrt(
                  1 + m[1][1] - m[0][0] - m[2][2]), x = [(m[0][1] + m[1][0]) / w, .25 * w, (m[1][2] + m[2][1]) / w, (m[0][2] - m[2][0]) / w]) : (w = 2 * Math.sqrt(
                  1 + m[2][2] - m[0][0] - m[1][1]), x = [(m[0][2] + m[2][0]) / w, (m[1][2] + m[2][1]) / w, .25 * w, (m[1][0] - m[0][1]) / w]), [b, v, y, x, f]
            }
          }();
          e.dot = r, e.makeMatrixDecomposition = function (e) {
            return [a(s(e))]
          }
        }(d), function (e) {
          function t(e, t) {
            var r = e.exec(t);
            if (r)return r = e.ignoreCase ? r[0].toLowerCase() : r[0], [r, t.substr(r.length)]
          }

          function r(e, t) {
            var r = e(t = t.replace(/^\s*/, ""));
            if (r)return [r[0], r[1].replace(/^\s*/, "")]
          }

          function n(e, t) {
            for (var r = e, n = t; r && n;)r > n ? r %= n : n %= r;
            return r = e * t / (r + n)
          }

          function i(e, t, r, i, o) {
            for (var s = [], a = [], u = [], c = n(i.length, o.length), l = 0; l < c; l++) {
              var h = t(i[l % i.length], o[l % o.length]);
              if (!h)return;
              s.push(h[0]), a.push(h[1]), u.push(h[2])
            }
            return [s, a, function (t) {
              var n = t.map(function (e, t) {
                return u[t](e)
              }).join(r);
              return e ? e(n) : n
            }]
          }

          e.consumeToken = t, e.consumeTrimmed = r, e.consumeRepeated = function (e, n, i) {
            e = r.bind(null, e);
            for (var o = []; ;) {
              var s = e(i);
              if (!s)return [o, i];
              if (o.push(s[0]), i = s[1], !(s = t(n, i)) || "" == s[1])return [o, i];
              i = s[1]
            }
          }, e.consumeParenthesised = function (e, t) {
            for (var r = 0, n = 0; n < t.length && (!/\s|,/.test(t[n]) || 0 != r); n++)if ("(" == t[n]) r++; else if (")" == t[n] && (0 == --r && n++, r <= 0))break;
            var i = e(t.substr(0, n));
            return void 0 == i ? void 0 : [i, t.substr(n)]
          }, e.ignore = function (e) {
            return function (t) {
              var r = e(t);
              return r && (r[0] = void 0), r
            }
          }, e.optional = function (e, t) {
            return function (r) {
              return e(r) || [t, r]
            }
          }, e.consumeList = function (t, r) {
            for (var n = [], i = 0; i < t.length; i++) {
              var o = e.consumeTrimmed(t[i], r);
              if (!o || "" == o[0])return;
              void 0 !== o[0] && n.push(o[0]), r = o[1]
            }
            if ("" == r)return n
          }, e.mergeNestedRepeated = i.bind(null,
            null), e.mergeWrappedNestedRepeated = i, e.mergeList = function (e, t, r) {
            for (var n = [], i = [], o = [], s = 0, a = 0; a < r.length; a++)if ("function" == typeof r[a]) {
              var u = r[a](e[s], t[s++]);
              n.push(u[0]), i.push(u[1]), o.push(u[2])
            } else!function (e) {
              n.push(!1), i.push(!1), o.push(function () {
                return r[e]
              })
            }(a);
            return [n, i, function (e) {
              for (var t = "", r = 0; r < e.length; r++)t += o[r](e[r]);
              return t
            }]
          }
        }(d), function (e) {
          function t(t) {
            var r = { inset: !1, lengths: [], color: null }, n = e.consumeRepeated(function (t) {
              var n = e.consumeToken(/^inset/i, t);
              return n ? (r.inset = !0, n) : (n = e.consumeLengthOrPercent(t)) ? (r.lengths.push(n[0]), n) : (n = e.consumeColor(
                t)) ? (r.color = n[0], n) : void 0
            }, /^/, t);
            if (n && n[0].length)return [r, n[1]]
          }

          var r = function (t, r, n, i) {
            function o(e) {
              return {
                inset: e,
                color: [0, 0, 0, 0],
                lengths: [{ px: 0 }, { px: 0 }, { px: 0 }, { px: 0 }]
              }
            }

            for (var s = [], a = [], u = 0; u < n.length || u < i.length; u++) {
              var c = n[u] || o(i[u].inset), l = i[u] || o(n[u].inset);
              s.push(c), a.push(l)
            }
            return e.mergeNestedRepeated(t, r, s, a)
          }.bind(null, function (t, r) {
            for (; t.lengths.length < Math.max(t.lengths.length,
              r.lengths.length);)t.lengths.push({ px: 0 });
            for (; r.lengths.length < Math.max(t.lengths.length,
              r.lengths.length);)r.lengths.push({ px: 0 });
            if (t.inset == r.inset && !!t.color == !!r.color) {
              for (var n, i = [], o = [[], 0], s = [[], 0], a = 0; a < t.lengths.length; a++) {
                var u = e.mergeDimensions(t.lengths[a], r.lengths[a], 2 == a);
                o[0].push(u[0]), s[0].push(u[1]), i.push(u[2])
              }
              if (t.color && r.color) {
                var c = e.mergeColors(t.color, r.color);
                o[1] = c[0], s[1] = c[1], n = c[2]
              }
              return [o, s, function (e) {
                for (var r = t.inset ? "inset " : " ", o = 0; o < i.length; o++)r += i[o](e[0][o]) + " ";
                return n && (r += n(e[1])), r
              }]
            }
          }, ", ");
          e.addPropertiesHandler(function (r) {
            var n = e.consumeRepeated(t, /^,/, r);
            if (n && "" == n[1])return n[0]
          }, r, ["box-shadow", "text-shadow"])
        }(d), function (e, t) {
          function r(e) {
            return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "")
          }

          function n(e, t, r) {
            return Math.min(t, Math.max(e, r))
          }

          function i(e) {
            if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(e))return Number(e)
          }

          function o(e, t) {
            return function (i, o) {
              return [i, o, function (i) {
                return r(n(e, t, i))
              }]
            }
          }

          function s(e) {
            var t = e.trim().split(/\s*[\s,]\s*/);
            if (0 !== t.length) {
              for (var r = [], n = 0; n < t.length; n++) {
                var o = i(t[n]);
                if (void 0 === o)return;
                r.push(o)
              }
              return r
            }
          }

          e.clamp = n, e.addPropertiesHandler(s, function (e, t) {
            if (e.length == t.length)return [e, t, function (e) {
              return e.map(r).join(" ")
            }]
          }, ["stroke-dasharray"]), e.addPropertiesHandler(i,
            o(0, 1 / 0),
            ["border-image-width", "line-height"]), e.addPropertiesHandler(i,
            o(0, 1),
            ["opacity", "shape-image-threshold"]), e.addPropertiesHandler(i, function (e, t) {
            if (0 != e)return o(0, 1 / 0)(e, t)
          }, ["flex-grow", "flex-shrink"]), e.addPropertiesHandler(i, function (e, t) {
            return [e, t, function (e) {
              return Math.round(n(1, 1 / 0, e))
            }]
          }, ["orphans", "widows"]), e.addPropertiesHandler(i,
            function (e, t) {
              return [e, t, Math.round]
            },
            ["z-index"]), e.parseNumber = i, e.parseNumberList = s, e.mergeNumbers = function (e, t) {
            return [e, t, r]
          }, e.numberToString = r
        }(d), function (e, t) {
          e.addPropertiesHandler(String, function (e, t) {
            if ("visible" == e || "visible" == t)return [0, 1, function (r) {
              return r <= 0 ? e : r >= 1 ? t : "visible"
            }]
          }, ["visibility"])
        }(d), function (e, t) {
          function r(e) {
            e = e.trim(), o.fillStyle = "#000", o.fillStyle = e;
            var t = o.fillStyle;
            if (o.fillStyle = "#fff", o.fillStyle = e, t == o.fillStyle) {
              o.fillRect(0, 0, 1, 1);
              var r = o.getImageData(0, 0, 1, 1).data;
              o.clearRect(0, 0, 1, 1);
              var n = r[3] / 255;
              return [r[0] * n, r[1] * n, r[2] * n, n]
            }
          }

          function n(t, r) {
            return [t, r, function (t) {
              if (t[3])for (var r = 0; r < 3; r++)t[r] = Math.round(function (e) {
                return Math.max(0, Math.min(255, e))
              }(t[r] / t[3]));
              return t[3] = e.numberToString(e.clamp(0, 1, t[3])), "rgba(" + t.join(",") + ")"
            }]
          }

          var i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
          i.width = i.height = 1;
          var o = i.getContext("2d");
          e.addPropertiesHandler(r,
            n,
            ["background-color", "border-bottom-color", "border-left-color", "border-right-color", "border-top-color", "color", "fill", "flood-color", "lighting-color", "outline-color", "stop-color", "stroke", "text-decoration-color"]), e.consumeColor = e.consumeParenthesised.bind(
            null,
            r), e.mergeColors = n
        }(d), function (a, b) {
          function c(a, b) {
            if ("0" == (b = b.trim().toLowerCase()) && "px".search(a) >= 0)return { px: 0 };
            if (/^[^(]*$|^calc/.test(b)) {
              b = b.replace(/calc\(/g, "(");
              var c = {};
              b = b.replace(a, function (e) {
                return c[e] = null, "U" + e
              });
              for (var d = "U(" + a.source + ")", e = b.replace(/[-+]?(\d*\.)?\d+/g, "N").replace(
                new RegExp("N" + d, "g"),
                "D").replace(/\s[+-]\s/g, "O").replace(/\s/g,
                ""), f = [/N\*(D)/g, /(N|D)[*\/]N/g, /(N|D)O\1/g, /\((N|D)\)/g], g = 0; g < f.length;)f[g].test(
                e) ? (e = e.replace(f[g], "$1"), g = 0) : g++;
              if ("D" == e) {
                for (var h in c) {
                  var i = eval(b.replace(new RegExp("U" + h, "g"), "").replace(new RegExp(d, "g"),
                    "*0"));
                  if (!isFinite(i))return;
                  c[h] = i
                }
                return c
              }
            }
          }

          function d(t, r) {
            return e(t, r, !0)
          }

          function e(e, t, r) {
            var n, i = [];
            for (n in e)i.push(n);
            for (n in t)i.indexOf(n) < 0 && i.push(n);
            return e = i.map(function (t) {
              return e[t] || 0
            }), t = i.map(function (e) {
              return t[e] || 0
            }), [e, t, function (e) {
              var t = e.map(function (t, n) {
                return 1 == e.length && r && (t = Math.max(t, 0)), a.numberToString(t) + i[n]
              }).join(" + ");
              return e.length > 1 ? "calc(" + t + ")" : t
            }]
          }

          var f = "px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",
            g = c.bind(null, new RegExp(f, "g")), h = c.bind(null, new RegExp(f + "|%", "g")),
            i = c.bind(null, /deg|rad|grad|turn/g);
          a.parseLength = g, a.parseLengthOrPercent = h, a.consumeLengthOrPercent = a.consumeParenthesised.bind(
            null,
            h), a.parseAngle = i, a.mergeDimensions = e;
          var j = a.consumeParenthesised.bind(null, g), k = a.consumeRepeated.bind(void 0, j, /^/),
            l = a.consumeRepeated.bind(void 0, k, /^,/);
          a.consumeSizePairList = l;
          var m = function (e) {
              var t = l(e);
              if (t && "" == t[1])return t[0]
            }, n = a.mergeNestedRepeated.bind(void 0, d, " "),
            o = a.mergeNestedRepeated.bind(void 0, n, ",");
          a.mergeNonNegativeSizePair = n, a.addPropertiesHandler(m,
            o,
            ["background-size"]), a.addPropertiesHandler(h,
            d,
            ["border-bottom-width", "border-image-width", "border-left-width", "border-right-width", "border-top-width", "flex-basis", "font-size", "height", "line-height", "max-height", "max-width", "outline-width", "width"]), a.addPropertiesHandler(
            h,
            e,
            ["border-bottom-left-radius", "border-bottom-right-radius", "border-top-left-radius", "border-top-right-radius", "bottom", "left", "letter-spacing", "margin-bottom", "margin-left", "margin-right", "margin-top", "min-height", "min-width", "outline-offset", "padding-bottom", "padding-left", "padding-right", "padding-top", "perspective", "right", "shape-margin", "stroke-dashoffset", "text-indent", "top", "vertical-align", "word-spacing"])
        }(d, f), function (e, t) {
          function r(t) {
            return e.consumeLengthOrPercent(t) || e.consumeToken(/^auto/, t)
          }

          function n(t) {
            var n = e.consumeList([e.ignore(e.consumeToken.bind(null,
              /^rect/)), e.ignore(e.consumeToken.bind(null, /^\(/)), e.consumeRepeated.bind(null,
              r,
              /^,/), e.ignore(e.consumeToken.bind(null, /^\)/))], t);
            if (n && 4 == n[0].length)return n[0]
          }

          var i = e.mergeWrappedNestedRepeated.bind(null, function (e) {
            return "rect(" + e + ")"
          }, function (t, r) {
            return "auto" == t || "auto" == r ? [!0, !1, function (n) {
              var i = n ? t : r;
              if ("auto" == i)return "auto";
              var o = e.mergeDimensions(i, i);
              return o[2](o[0])
            }] : e.mergeDimensions(t, r)
          }, ", ");
          e.parseBox = n, e.mergeBoxes = i, e.addPropertiesHandler(n, i, ["clip"])
        }(d), function (e, t) {
          function r(e) {
            return function (t) {
              var r = 0;
              return e.map(function (e) {
                return e === u ? t[r++] : e
              })
            }
          }

          function n(e) {
            return e
          }

          function i(e) {
            return e.toFixed(6).replace(".000000", "")
          }

          function o(t, r) {
            if (t.decompositionPair !== r) {
              t.decompositionPair = r;
              var n = e.makeMatrixDecomposition(t)
            }
            if (r.decompositionPair !== t) {
              r.decompositionPair = t;
              var o = e.makeMatrixDecomposition(r)
            }
            return null == n[0] || null == o[0] ? [[!1], [!0], function (e) {
              return e ? r[0].d : t[0].d
            }] : (n[0].push(0), o[0].push(1), [n, o, function (t) {
              var r = e.quat(n[0][3], o[0][3], t[5]);
              return e.composeMatrix(t[0], t[1], t[2], r, t[4]).map(i).join(",")
            }])
          }

          function s(e) {
            return e.replace(/[xy]/, "")
          }

          function a(e) {
            return e.replace(/(x|y|z|3d)?$/, "3d")
          }

          var u = null, c = { px: 0 }, l = { deg: 0 }, h = {
            matrix: ["NNNNNN", [u, u, 0, 0, u, u, 0, 0, 0, 0, 1, 0, u, u, 0, 1], n],
            matrix3d: ["NNNNNNNNNNNNNNNN", n],
            rotate: ["A"],
            rotatex: ["A"],
            rotatey: ["A"],
            rotatez: ["A"],
            rotate3d: ["NNNA"],
            perspective: ["L"],
            scale: ["Nn", r([u, u, 1]), n],
            scalex: ["N", r([u, 1, 1]), r([u, 1])],
            scaley: ["N", r([1, u, 1]), r([1, u])],
            scalez: ["N", r([1, 1, u])],
            scale3d: ["NNN", n],
            skew: ["Aa", null, n],
            skewx: ["A", null, r([u, l])],
            skewy: ["A", null, r([l, u])],
            translate: ["Tt", r([u, u, c]), n],
            translatex: ["T", r([u, c, c]), r([u, c])],
            translatey: ["T", r([c, u, c]), r([c, u])],
            translatez: ["L", r([c, c, u])],
            translate3d: ["TTL", n]
          };
          e.addPropertiesHandler(function (t) {
            if ("none" == (t = t.toLowerCase().trim()))return [];
            for (var r, n = /\s*(\w+)\(([^)]*)\)/g, i = [], o = 0; r = n.exec(t);) {
              if (r.index != o)return;
              o = r.index + r[0].length;
              var s = r[1], a = h[s];
              if (!a)return;
              var u = r[2].split(","), p = a[0];
              if (p.length < u.length)return;
              for (var f = [], d = 0; d < p.length; d++) {
                var b, m = u[d], v = p[d];
                if (void 0 === (b = m ? {
                    A: function (t) {
                      return "0" == t.trim() ? l : e.parseAngle(t)
                    }, N: e.parseNumber, T: e.parseLengthOrPercent, L: e.parseLength
                  }[v.toUpperCase()](m) : { a: l, n: f[0], t: c }[v]))return;
                f.push(b)
              }
              if (i.push({ t: s, d: f }), n.lastIndex == t.length)return i
            }
          }, function (t, r) {
            var n = e.makeMatrixDecomposition && !0, i = !1;
            if (!t.length || !r.length)for (t.length || (i = !0, t = r, r = []), b = 0; b < t.length; b++) {
              var u = t[b].t, c = t[b].d, l = "scale" == u.substr(0, 5) ? 1 : 0;
              r.push({
                t: u, d: c.map(function (e) {
                  if ("number" == typeof e)return l;
                  var t = {};
                  for (var r in e)t[r] = l;
                  return t
                })
              })
            }
            var p = [], f = [], d = [];
            if (t.length != r.length) {
              if (!n)return;
              p = [(j = o(t, r))[0]], f = [j[1]], d = [["matrix", [j[2]]]]
            } else for (var b = 0; b < t.length; b++) {
              var m = t[b].t, v = r[b].t, y = t[b].d, g = r[b].d, w = h[m], x = h[v];
              if (function (e, t) {
                  return "perspective" == e && "perspective" == t || ("matrix" == e || "matrix3d" == e) && ("matrix" == t || "matrix3d" == t)
                }(m, v)) {
                if (!n)return;
                j = o([t[b]], [r[b]]), p.push(j[0]), f.push(j[1]), d.push(["matrix", [j[2]]])
              } else {
                if (m == v) u = m; else if (w[2] && x[2] && s(m) == s(v)) u = s(m), y = w[2](y), g = x[2](
                  g); else {
                  if (!w[1] || !x[1] || a(m) != a(v)) {
                    if (!n)return;
                    p = [(j = o(t, r))[0]], f = [j[1]], d = [["matrix", [j[2]]]];
                    break
                  }
                  u = a(m), y = w[1](y), g = x[1](g)
                }
                for (var _ = [], S = [], O = [], k = 0; k < y.length; k++) {
                  var j = ("number" == typeof y[k] ? e.mergeNumbers : e.mergeDimensions)(y[k],
                    g[k]);
                  _[k] = j[0], S[k] = j[1], O.push(j[2])
                }
                p.push(_), f.push(S), d.push([u, O])
              }
            }
            if (i) {
              var T = p;
              p = f, f = T
            }
            return [p, f, function (e) {
              return e.map(function (e, t) {
                var r = e.map(function (e, r) {
                  return d[t][1][r](e)
                }).join(",");
                return "matrix" == d[t][0] && 16 == r.split(",").length && (d[t][0] = "matrix3d"), d[t][0] + "(" + r + ")"
              }).join(" ")
            }]
          }, ["transform"])
        }(d), function (e) {
          function t(t) {
            return t = 100 * Math.round(t / 100), t = e.clamp(100,
              900,
              t), 400 === t ? "normal" : 700 === t ? "bold" : String(t)
          }

          e.addPropertiesHandler(function (e) {
            var t = Number(e);
            if (!(isNaN(t) || t < 100 || t > 900 || t % 100 != 0))return t
          }, function (e, r) {
            return [e, r, t]
          }, ["font-weight"])
        }(d), function (e) {
          function t(e) {
            var t = {};
            for (var r in e)t[r] = -e[r];
            return t
          }

          function r(t) {
            return e.consumeToken(/^(left|center|right|top|bottom)\b/i,
                t) || e.consumeLengthOrPercent(t)
          }

          function n(t, n) {
            var i = e.consumeRepeated(r, /^/, n);
            if (i && "" == i[1]) {
              var s = i[0];
              if (s[0] = s[0] || "center", s[1] = s[1] || "center", 3 == t && (s[2] = s[2] || { px: 0 }), s.length == t) {
                if (/top|bottom/.test(s[0]) || /left|right/.test(s[1])) {
                  var a = s[0];
                  s[0] = s[1], s[1] = a
                }
                if (/left|right|center|Object/.test(s[0]) && /top|bottom|center|Object/.test(s[1]))return s.map(
                  function (e) {
                    return "object" == typeof e ? e : o[e]
                  })
              }
            }
          }

          function i(n) {
            var i = e.consumeRepeated(r, /^/, n);
            if (i) {
              for (var s = i[0], a = [{ "%": 50 }, { "%": 50 }], u = 0, c = !1, l = 0; l < s.length; l++) {
                var h = s[l];
                "string" == typeof h ? (c = /bottom|right/.test(h), u = {
                  left: 0,
                  right: 0,
                  center: u,
                  top: 1,
                  bottom: 1
                }[h], a[u] = o[h], "center" == h && u++) : (c && (h = t(h), h["%"] = (h["%"] || 0) + 100), a[u] = h, u++, c = !1)
              }
              return [a, i[1]]
            }
          }

          var o = {
            left: { "%": 0 },
            center: { "%": 50 },
            right: { "%": 100 },
            top: { "%": 0 },
            bottom: { "%": 100 }
          }, s = e.mergeNestedRepeated.bind(null, e.mergeDimensions, " ");
          e.addPropertiesHandler(n.bind(null, 3),
            s,
            ["transform-origin"]), e.addPropertiesHandler(n.bind(null, 2),
            s,
            ["perspective-origin"]), e.consumePosition = i, e.mergeOffsetList = s;
          var a = e.mergeNestedRepeated.bind(null, s, ", ");
          e.addPropertiesHandler(function (t) {
            var r = e.consumeRepeated(i, /^,/, t);
            if (r && "" == r[1])return r[0]
          }, a, ["background-position", "object-position"])
        }(d), function (e) {
          var t = e.consumeParenthesised.bind(null, e.parseLengthOrPercent),
            r = e.consumeRepeated.bind(void 0, t, /^/),
            n = e.mergeNestedRepeated.bind(void 0, e.mergeDimensions, " "),
            i = e.mergeNestedRepeated.bind(void 0, n, ",");
          e.addPropertiesHandler(function (n) {
            var i = e.consumeToken(/^circle/, n);
            if (i && i[0])return ["circle"].concat(e.consumeList([e.ignore(e.consumeToken.bind(void 0,
              /^\(/)), t, e.ignore(e.consumeToken.bind(void 0, /^at/)), e.consumePosition, e.ignore(
              e.consumeToken.bind(void 0, /^\)/))], i[1]));
            var o = e.consumeToken(/^ellipse/, n);
            if (o && o[0])return ["ellipse"].concat(e.consumeList([e.ignore(e.consumeToken.bind(void 0,
              /^\(/)), r, e.ignore(e.consumeToken.bind(void 0, /^at/)), e.consumePosition, e.ignore(
              e.consumeToken.bind(void 0, /^\)/))], o[1]));
            var s = e.consumeToken(/^polygon/, n);
            return s && s[0] ? ["polygon"].concat(e.consumeList([e.ignore(e.consumeToken.bind(void 0,
              /^\(/)), e.optional(e.consumeToken.bind(void 0, /^nonzero\s*,|^evenodd\s*,/),
              "nonzero,"), e.consumeSizePairList, e.ignore(e.consumeToken.bind(void 0, /^\)/))],
              s[1])) : void 0
          }, function (t, r) {
            if (t[0] === r[0])return "circle" == t[0] ? e.mergeList(t.slice(1),
              r.slice(1),
              ["circle(", e.mergeDimensions, " at ", e.mergeOffsetList, ")"]) : "ellipse" == t[0] ? e.mergeList(
              t.slice(1),
              r.slice(1),
              ["ellipse(", e.mergeNonNegativeSizePair, " at ", e.mergeOffsetList, ")"]) : "polygon" == t[0] && t[1] == r[1] ? e.mergeList(
              t.slice(2),
              r.slice(2),
              ["polygon(", t[1], i, ")"]) : void 0
          }, ["shape-outside"])
        }(d), function (e, t) {
          function r(e, t) {
            t.concat([e]).forEach(function (t) {
              t in document.documentElement.style && (n[e] = t)
            })
          }

          var n = {};
          r("transform", ["webkitTransform", "msTransform"]), r("transformOrigin",
            ["webkitTransformOrigin"]), r("perspective", ["webkitPerspective"]), r(
            "perspectiveOrigin",
            ["webkitPerspectiveOrigin"]), e.propertyName = function (e) {
            return n[e] || e
          }
        }(d)
      }(), function () {
        if (void 0 === document.createElement("div").animate([]).oncancel) {
          if (window.performance && performance.now) e = function () {
            return performance.now()
          }; else var e = function () {
            return Date.now()
          };
          var t = function (e, t, r) {
            this.target = e, this.currentTime = t, this.timelineTime = r, this.type = "cancel", this.bubbles = !1, this.cancelable = !1, this.currentTarget = e, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now()
          }, r = window.Element.prototype.animate;
          window.Element.prototype.animate = function (n, i) {
            var o = r.call(this, n, i);
            o._cancelHandlers = [], o.oncancel = null;
            var s = o.cancel;
            o.cancel = function () {
              s.call(this);
              var r = new t(this, null, e()),
                n = this._cancelHandlers.concat(this.oncancel ? [this.oncancel] : []);
              setTimeout(function () {
                n.forEach(function (e) {
                  e.call(r.target, r)
                })
              }, 0)
            };
            var a = o.addEventListener;
            o.addEventListener = function (e, t) {
              "function" == typeof t && "cancel" == e ? this._cancelHandlers.push(t) : a.call(this,
                e,
                t)
            };
            var u = o.removeEventListener;
            return o.removeEventListener = function (e, t) {
              if ("cancel" == e) {
                var r = this._cancelHandlers.indexOf(t);
                r >= 0 && this._cancelHandlers.splice(r, 1)
              } else u.call(this, e, t)
            }, o
          }
        }
      }(), function (e) {
        var t = document.documentElement, r = null, n = !1;
        try {
          var i = "0" == getComputedStyle(t).getPropertyValue("opacity") ? "1" : "0";
          (r = t.animate({ opacity: [i, i] },
            { duration: 1 })).currentTime = 0, n = getComputedStyle(t)
            .getPropertyValue("opacity") == i
        }
        catch (e) {
        } finally {
          r && r.cancel()
        }
        if (!n) {
          var o = window.Element.prototype.animate;
          window.Element.prototype.animate = function (t, r) {
            return window.Symbol && Symbol.iterator && Array.prototype.from && t[Symbol.iterator] && (t = Array.from(
              t)), Array.isArray(t) || null === t || (t = e.convertToArrayForm(t)), o.call(this,
              t,
              r)
          }
        }
      }(c), b.true = a
    }({}, function () {
      return this
    }())
  }, {}],
  174: [function (e, t, r) {
    (function (e) {
      "use strict";
      function t(e, t) {
        if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== (void 0 === t ? "undefined" : u(t)) && "function" != typeof t ? e : t
      }

      function n(e, t) {
        if ("function" != typeof t && null !== t)throw new TypeError(
          "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : u(
            t)));
        e.prototype = Object.create(t && t.prototype,
          {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }

      function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
      }

      function o(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          return new CustomEvent(e, t)
        }
        catch (n) {
          var r = document.createEvent("CustomEvent");
          return r.initCustomEvent(e, !0, !0, t.detail), r
        }
      }

      function s(e, t) {
        var r = this;
        f(this, e, {
          enumerable: !0, get: function () {
            return r[b][e]
          }, set: function (n) {
            null != t ? t(n) : r.setState(e, n)
          }
        })
      }

      function a() {
        var e = this, t = this.sideEffects();
        Object.keys(this[b]).forEach(function (r) {
          if (void 0 === e[r]) {
            var n = t[r];
            s.call(e, r, n)
          }
        })
      }

      var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
      Object.defineProperty(r, "__esModule", { value: !0 });
      var c = "function" == typeof Symbol && "symbol" === u(Symbol.iterator) ? function (e) {
        return void 0 === e ? "undefined" : u(e)
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : u(
          e)
      }, l = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
              e,
              n.key,
              n)
          }
        }

        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }(), h = function e() {
        i(this, e)
      }, p = e.Symbol || function (e) {
          return "_" + e
        }, f = Object.defineProperty.bind(Object), d = p("root"), b = p("state");
      r.default = function () {
        return function (e) {
          function r() {
            return i(this, r), t(this,
              (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments))
          }

          return n(r, e), l(r, [{
            key: "getComponentName", value: function () {
              throw Error(
                "Component needs to have a name, e.g. `my-tag`. Override `getComponentName`")
            }
          }, {
            key: "setupComponent", value: function (e, t) {
              return f(this, b, { value: Object.assign({}, this.defaults(), t) }), a.call(this), f(
                this,
                d,
                { value: this.setupDOM(e) }), this
            }
          }, {
            key: "setupDOM", value: function (e) {
              return e
            }
          }, {
            key: "getRoot", value: function () {
              return this[d]
            }
          }, {
            key: "getEl", value: function () {
              return this[d]
            }
          }, {
            key: "fireEvent", value: function (e, t) {
              var r = this.componentName + "-" + e;
              this.el.dispatchEvent(o(r, t))
            }
          }, {
            key: "defaults", value: function () {
              return console.warn("defaults not provided"), {}
            }
          }, {
            key: "sideEffects", value: function () {
              return console.warn("sideEffects not provided"), {}
            }
          }, {
            key: "setState", value: function (e, t) {
              if ("string" == typeof e) this.setStateKV(e, t); else {
                if ("object" !== (void 0 === e ? "undefined" : c(e)))throw Error(
                  "setState needs argument");
                this.setStateMap(e)
              }
            }
          }, {
            key: "setStateKV", value: function (e, t) {
              this[b][e] = t
            }
          }, {
            key: "setStateMap", value: function (e) {
              var t = this;
              Object.keys(this[b]).forEach(function (r) {
                t.setStateKV(r, e[r])
              })
            }
          }, {
            key: "componentName", get: function () {
              return this.getComponentName()
            }
          }, {
            key: "root", get: function () {
              return this.getRoot()
            }
          }, {
            key: "el", get: function () {
              return this.getEl()
            }
          }]), r
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h)
      }
    }).call(this,
      "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }, {}],
  175: [function (e, t, r) {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }), r.linearTween = function (e, t, r, n) {
      return r * e / n + t
    }, r.pageDist = function (e, t) {
      return Math.sqrt(Math.pow(e.pageX - t.pageX, 2) + Math.pow(e.pageY - t.pageY, 2))
    }, r.contains = function (e, t) {
      for (var r = e; null != r;) {
        if (r.classList && r.classList.contains(t))return !0;
        r = r.parentNode
      }
      return !1
    }
  }, {}],
  176: [function (e, t, r) {
    (function (t) {
      "use strict";
      function n(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
      }

      function i(e, t) {
        if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== (void 0 === t ? "undefined" : s(t)) && "function" != typeof t ? e : t
      }

      function o(e, t) {
        if ("function" != typeof t && null !== t)throw new TypeError(
          "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : s(
            t)));
        e.prototype = Object.create(t && t.prototype,
          {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }

      var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
      Object.defineProperty(r, "__esModule", { value: !0 });
      var a = function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
                e,
                n.key,
                n)
            }
          }

          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        }(), u = function e(t, r, n) {
          null === t && (t = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(t, r);
          if (void 0 === i) {
            var o = Object.getPrototypeOf(t);
            return null === o ? void 0 : e(o, r, n)
          }
          if ("value" in i)return i.value;
          var s = i.get;
          if (void 0 !== s)return s.call(n)
        }, c = function (e) {
          return e && e.__esModule ? e : { default: e }
        }(e("y-component/src/component-core")), l = e("../common"), h = t.Symbol || function (e) {
            return "_" + e
          }, p = h("idle"), f = h("touching"), d = h("startAnimating"), b = h("animating"),
        m = Object.defineProperty.bind(Object);
      r.default = function (e) {
        return function (e) {
          function t() {
            return n(this, t), i(this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
          }

          return o(t, e), a(t, [{
            key: "getComponentName", value: function () {
              return "y-drawer"
            }
          }, {
            key: "defaults", value: function () {
              return { opened: !1, transitionDuration: 200, persistent: !1 }
            }
          }, {
            key: "sideEffects", value: function () {
              var e = this;
              return {
                opened: function (t) {
                  !0 === t ? e.open() : e.close()
                }, persistent: function (t) {
                  !0 === t ? e.persist() : e.unpersist()
                }
              }
            }
          }, {
            key: "setupComponent", value: function (e, r) {
              return u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                "setupComponent",
                this).call(this,
                e,
                r), this.cacheDOMElements(), this.defProperties(), this.bindCallbacks(), this.jumpTo(
                this.opened), this.persistent || this.addEventListeners(), this.persistent && (this.scrim.style.display = "none"), this
            }
          }, {
            key: "cacheDOMElements", value: function () {
              m(this, "scrim", { value: this.root.querySelector(".y-drawer-scrim") }), m(this,
                "content",
                { value: this.root.querySelector(".y-drawer-content") })
            }
          }, {
            key: "defProperties", value: function () {
              m(this, "startX", { value: 0, writable: !0 }), m(this,
                "startY",
                { value: 0, writable: !0 }), m(this, "pageX", { value: 0, writable: !0 }), m(this,
                "pageY",
                { value: 0, writable: !0 }), m(this, "lastPageX", { value: 0, writable: !0 }), m(
                this,
                "lastPageY",
                { value: 0, writable: !0 }), m(this, "isScrolling", { writable: !0 }), m(this,
                "startedMoving",
                { value: !1, writable: !0 }), m(this,
                "loopState",
                { value: p, writable: !0 }), m(this,
                "velocity",
                { value: 0, writable: !0 }), m(this,
                "startTranslateX",
                { value: 0, writable: !0 }), m(this,
                "translateX",
                { value: 0, writable: !0 }), m(this,
                "animationFrameRequested",
                { value: !1, writable: !0 }), m(this,
                "touching",
                { value: !1, writable: !0 }), m(this, "lastTime", { writable: !0 }), m(this,
                "sliderWidth",
                { writable: !0 }), m(this, "animation", { writable: !0, configurable: !0 })
            }
          }, {
            key: "bindCallbacks", value: function () {
              m(this, "touchStartCallback", { value: this.touchStartCallback.bind(this) }), m(this,
                "touchMoveCallback",
                { value: this.touchMoveCallback.bind(this) }), m(this,
                "touchEndCallback",
                { value: this.touchEndCallback.bind(this) }), m(this,
                "scrimClickCallback",
                { value: this.scrimClickCallback.bind(this) }), m(this,
                "animationFrameCallback",
                { value: this.animationFrameCallback.bind(this) })
            }
          }, {
            key: "addEventListeners", value: function () {
              document.addEventListener("touchstart",
                this.touchStartCallback,
                { passive: !1 }), document.addEventListener("touchmove",
                this.touchMoveCallback,
                { passive: !1 }), document.addEventListener("touchend",
                this.touchEndCallback,
                { passive: !1 }), this.scrim.addEventListener("click", this.scrimClickCallback)
            }
          }, {
            key: "removeEventListeners", value: function () {
              document.removeEventListener("touchstart",
                this.touchStartCallback,
                { passive: !1 }), document.removeEventListener("touchmove",
                this.touchMoveCallback,
                { passive: !1 }), document.removeEventListener("touchend",
                this.touchEndCallback,
                { passive: !1 }), this.scrim.removeEventListener("click", this.scrimClickCallback)
            }
          }, {
            key: "requestAnimationLoop", value: function () {
              this.animationFrameRequested || (this.animationFrameRequested = !0, requestAnimationFrame(
                this.animationFrameCallback))
            }
          }, {
            key: "getNearestTouch", value: function (e) {
              var t = this;
              return 1 === e.length ? e[0] : Array.prototype.reduce.call(e, function (e, r) {
                var n = (0, l.pageDist)(t, r);
                return n < e.dist ? { dist: n, touch: r } : e
              }, { dist: Number.POSITIVE_INFINITY, touch: null }).touch
            }
          }, {
            key: "touchStartCallback", value: function (e) {
              if (1 === e.touches.length) {
                this.isScrolling = void 0;
                var t = e.touches[0];
                this.startX = t.pageX, this.startY = t.pageY, this.pageX = t.pageX, this.pageY = t.pageY, this.lastPageX = t.pageX, this.lastPageY = t.pageY, (this.opened || this.pageX < window.innerWidth / 3) && (this.prepInteraction(), this.touching = !0, this.loopState = f)
              }
            }
          }, {
            key: "touchMoveCallback", value: function (e) {
              if (this.touching) {
                var t = this.getNearestTouch(e.touches);
                if (this.pageX = t.pageX, this.pageY = t.pageY, void 0 === this.isScrolling && this.startedMoving && (this.isScrolling = Math.abs(
                      this.startY - this.pageY) > Math.abs(this.startX - this.pageX), this.isScrolling || (this.loopState = f, this.requestAnimationLoop())), this.isScrolling)return;
                e.preventDefault(), this.startedMoving = !0
              }
            }
          }, {
            key: "updateMenuOpen", value: function () {
              this.velocity > .2 ? this.setState("opened",
                !0) : this.velocity < -.2 ? this.setState("opened",
                !1) : this.translateX >= this.sliderWidth / 2 ? this.setState("opened",
                !0) : this.setState("opened", !1)
            }
          }, {
            key: "touchEndCallback", value: function (e) {
              if (this.touching) {
                if (this.isScrolling || e.touches.length > 0)return;
                this.startedMoving && this.updateMenuOpen(), this.opened ? this.scrim.style.pointerEvents = "all" : this.scrim.style.pointerEvents = "", this.loopState = d, this.startedMoving = !1, this.touching = !1
              }
            }
          }, {
            key: "scrimClickCallback", value: function () {
              this.close()
            }
          }, {
            key: "prepInteraction", value: function () {
              this.content.style.willChange = "transform", this.scrim.style.willChange = "opacity", this.content.classList.remove(
                "y-drawer-opened"), this.sliderWidth = this.getMovableSliderWidth()
            }
          }, {
            key: "getMovableSliderWidth", value: function () {
              return -this.content.offsetLeft
            }
          }, {
            key: "animateTo", value: function (e) {
              this.prepInteraction(), this.setState("opened",
                e), this.loopState = d, this.requestAnimationLoop()
            }
          }, {
            key: "jumpTo", value: function (e) {
              this.prepInteraction(), this.setState("opened",
                e), this.loopState = p, this.startTranslateX = e * this.sliderWidth, this.endAnimating(), this.updateDOM(
                this.startTranslateX,
                this.sliderWidth)
            }
          }, {
            key: "updateTranslateX", value: function () {
              var e = this.pageX - this.startX;
              return this.translateX = this.startTranslateX + e, this.translateX = Math.max(0,
                Math.min(this.sliderWidth, this.translateX)), e
            }
          }, {
            key: "animationFrameCallback", value: function (e) {
              switch (this.loopState) {
                case f:
                  this.touchingFrame(e);
                  break;
                case d:
                  this.startAnimatingFrame(e), this.loopState = b, this.animationFrameCallback(e);
                  break;
                case b:
                  this.animatingFrame(e)
              }
            }
          }, {
            key: "touchingFrame", value: function (e) {
              var t = e - this.lastTime;
              if (t > 0) {
                var r = this.pageX - this.lastPageX;
                this.velocity = r / t * .8 + (1 - .8) * this.velocity
              }
              this.updateTranslateX(), this.updateDOM(this.translateX,
                this.sliderWidth), this.lastTime = e, this.lastPageX = this.pageX, this.lastPageY = this.pageY, requestAnimationFrame(
                this.animationFrameCallback)
            }
          }, {
            key: "startAnimatingFrame", value: function (e) {
              this.updateTranslateX();
              var t = {};
              t.startX = this.translateX, t.endX = (this.opened ? 1 : 0) * this.sliderWidth, t.changeInValue = t.endX - t.startX, t.startTime = e, this.animation = t
            }
          }, {
            key: "animatingFrame", value: function (e) {
              var t = e - this.animation.startTime;
              t < this.transitionDuration ? this.animatingCont(t) : this.animatingEnd(), this.updateDOM(
                this.startTranslateX,
                this.sliderWidth)
            }
          }, {
            key: "animatingCont", value: function (e) {
              var t = this.animation.startX, r = this.animation.changeInValue;
              this.startTranslateX = (0, l.linearTween)(e,
                t,
                r,
                this.transitionDuration), requestAnimationFrame(this.animationFrameCallback)
            }
          }, {
            key: "animatingEnd", value: function () {
              this.startTranslateX = this.animation.endX, delete this.animation, this.endAnimating()
            }
          }, {
            key: "endAnimating", value: function () {
              this.animationFrameRequested = !1, this.loopState = p, this.velocity = 0, this.opened ? (this.scrim.style.pointerEvents = "all", this.content.classList.add(
                "y-drawer-opened")) : this.scrim.style.pointerEvents = "", this.content.style.willChange = "", this.scrim.style.willChange = "", this.fireEvent(
                "transitioned")
            }
          }, {
            key: "updateDOM", value: function (e, t) {
              this.content.style.transform = "translateX(" + e + "px)", this.scrim.style.opacity = e / t
            }
          }, {
            key: "close", value: function () {
              return this.animateTo(!1), this
            }
          }, {
            key: "open", value: function () {
              return this.animateTo(!0), this
            }
          }, {
            key: "toggle", value: function () {
              return this.opened ? this.close() : this.open(), this
            }
          }, {
            key: "persist", value: function () {
              this.scrim.style.display = "none", this.removeEventListeners(), this.setState(
                "persistent",
                !0)
            }
          }, {
            key: "unpersist", value: function () {
              this.scrim.style.display = "", this.addEventListeners(), this.setState("persistent",
                !1)
            }
          }]), t
        }((0, c.default)(e))
      }
    }).call(this,
      "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }, { "../common": 175, "y-component/src/component-core": 174 }],
  177: [function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" !== (void 0 === t ? "undefined" : a(t)) && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t)throw new TypeError(
        "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : a(
          t)));
      e.prototype = Object.create(t && t.prototype,
        {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function s(e) {
      return document.createRange().createContextualFragment(e)
    }

    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    Object.defineProperty(r, "__esModule", { value: !0 });
    var u = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
            e,
            n.key,
            n)
        }
      }

      return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
      }
    }(), c = function (e) {
      function t(e, r) {
        n(this, t);
        var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return o.setupComponent(e, r), o
      }

      return o(t, e), u(t, [{
        key: "setupDOM", value: function (e) {
          if (!e)throw Error("No element provided");
          var t = document.createElement("div");
          t.classList.add("y-drawer-scrim");
          var r = document.createElement("div");
          for (r.classList.add("y-drawer-content"); e.children.length > 0;)r.appendChild(e.children[0]);
          e.appendChild(t), e.appendChild(r);
          var n = document.getElementsByTagName("style")[0];
          return n.parentNode.insertBefore(s(
            "\n<style>\n@media screen {\n  .y-drawer-scrim {\n    display: block;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    opacity: 0;\n    z-index: 0;\n    pointer-events: none;\n    transform: translate3d(0,0,0);\n    -webkit-tap-highlight-color: transparent;\n\n    background: rgba(0, 0, 0, 0.67);\n  }\n\n  .y-drawer-content {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    top: 0;\n    z-index: 1;\n    overflow-x: hidden;\n    overflow-y: auto;\n    transform: translate3d(0,0,0);\n    -webkit-overflow-scrolling: touch;\n    contain: strict;\n\n    left: -18rem;\n    width: 18rem;\n  }\n\n  .y-drawer-content.y-drawer-opened {\n    left: 0!important;\n    transform: translate3d(0,0,0)!important;\n  }\n}\n\n@media print {\n  .y-drawer-scrim {\n    display: none!important;\n  }\n\n  .y-drawer-content {\n    transform: none!important;\n  }\n}\n\n</style>"),
            n), e
        }
      }]), t
    }((0, function (e) {
      return e && e.__esModule ? e : { default: e }
    }(e("../core")).default)());
    r.default = c
  }, { "../core": 176 }],
  178: [function (e, t, r) {
    arguments[4][115][0].apply(r, arguments)
  }, { "./Subscriber": 186, dup: 115 }],
  179: [function (e, t, r) {
    "use strict";
    var n = e("./Observable"), i = function () {
      function e(e, t, r) {
        this.kind = e, this.value = t, this.error = r, this.hasValue = "N" === e
      }

      return e.prototype.observe = function (e) {
        switch (this.kind) {
          case"N":
            return e.next && e.next(this.value);
          case"E":
            return e.error && e.error(this.error);
          case"C":
            return e.complete && e.complete()
        }
      }, e.prototype.do = function (e, t, r) {
        switch (this.kind) {
          case"N":
            return e && e(this.value);
          case"E":
            return t && t(this.error);
          case"C":
            return r && r()
        }
      }, e.prototype.accept = function (e, t, r) {
        return e && "function" == typeof e.next ? this.observe(e) : this.do(e, t, r)
      }, e.prototype.toObservable = function () {
        switch (this.kind) {
          case"N":
            return n.Observable.of(this.value);
          case"E":
            return n.Observable.throw(this.error);
          case"C":
            return n.Observable.empty()
        }
        throw new Error("unexpected notification kind value")
      }, e.createNext = function (t) {
        return void 0 !== t ? new e("N", t) : this.undefinedValueNotification
      }, e.createError = function (t) {
        return new e("E", void 0, t)
      }, e.createComplete = function () {
        return this.completeNotification
      }, e.completeNotification = new e("C"), e.undefinedValueNotification = new e("N", void 0), e
    }();
    r.Notification = i
  }, { "./Observable": 180 }],
  180: [function (e, t, r) {
    "use strict";
    var n = e("./util/root"), i = e("./util/toSubscriber"), o = e("./symbol/observable"),
      s = function () {
        function e(e) {
          this._isScalar = !1, e && (this._subscribe = e)
        }

        return e.prototype.lift = function (t) {
          var r = new e;
          return r.source = this, r.operator = t, r
        }, e.prototype.subscribe = function (e, t, r) {
          var n = this.operator, o = i.toSubscriber(e, t, r);
          if (n ? n.call(o,
              this.source) : o.add(this._trySubscribe(o)), o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown))throw o.syncErrorValue;
          return o
        }, e.prototype._trySubscribe = function (e) {
          try {
            return this._subscribe(e)
          }
          catch (t) {
            e.syncErrorThrown = !0, e.syncErrorValue = t, e.error(t)
          }
        }, e.prototype.forEach = function (e, t) {
          var r = this;
          if (t || (n.root.Rx && n.root.Rx.config && n.root.Rx.config.Promise ? t = n.root.Rx.config.Promise : n.root.Promise && (t = n.root.Promise)), !t)throw new Error(
            "no Promise impl found");
          return new t(function (t, n) {
            var i;
            i = r.subscribe(function (t) {
              if (i)try {
                e(t)
              }
              catch (e) {
                n(e), i.unsubscribe()
              } else e(t)
            }, n, t)
          })
        }, e.prototype._subscribe = function (e) {
          return this.source.subscribe(e)
        }, e.prototype[o.observable] = function () {
          return this
        }, e.create = function (t) {
          return new e(t)
        }, e
      }();
    r.Observable = s
  }, { "./symbol/observable": 268, "./util/root": 283, "./util/toSubscriber": 285 }],
  181: [function (e, t, r) {
    arguments[4][117][0].apply(r, arguments)
  }, { dup: 117 }],
  182: [function (e, t, r) {
    arguments[4][118][0].apply(r, arguments)
  }, { "./Subscriber": 186, dup: 118 }],
  183: [function (e, t, r) {
    arguments[4][119][0].apply(r, arguments)
  }, { dup: 119 }],
  184: [function (e, t, r) {
    arguments[4][120][0].apply(r, arguments)
  }, {
    "./Observable": 180,
    "./SubjectSubscription": 185,
    "./Subscriber": 186,
    "./Subscription": 187,
    "./symbol/rxSubscriber": 269,
    "./util/ObjectUnsubscribedError": 271,
    dup: 120
  }],
  185: [function (e, t, r) {
    arguments[4][121][0].apply(r, arguments)
  }, { "./Subscription": 187, dup: 121 }],
  186: [function (e, t, r) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, i = function (e, t) {
        function r() {
          this.constructor = e
        }

        for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }, o = e("./util/isFunction"), s = e("./Subscription"), a = e("./Observer"),
      u = e("./symbol/rxSubscriber"), c = function (e) {
        function t(r, i, o) {
          switch (e.call(this), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
            case 0:
              this.destination = a.empty;
              break;
            case 1:
              if (!r) {
                this.destination = a.empty;
                break
              }
              if ("object" === (void 0 === r ? "undefined" : n(r))) {
                r instanceof t ? (this.destination = r, this.destination.add(this)) : (this.syncErrorThrowable = !0, this.destination = new l(
                  this,
                  r));
                break
              }
            default:
              this.syncErrorThrowable = !0, this.destination = new l(this, r, i, o)
          }
        }

        return i(t, e), t.prototype[u.rxSubscriber] = function () {
          return this
        }, t.create = function (e, r, n) {
          var i = new t(e, r, n);
          return i.syncErrorThrowable = !1, i
        }, t.prototype.next = function (e) {
          this.isStopped || this._next(e)
        }, t.prototype.error = function (e) {
          this.isStopped || (this.isStopped = !0, this._error(e))
        }, t.prototype.complete = function () {
          this.isStopped || (this.isStopped = !0, this._complete())
        }, t.prototype.unsubscribe = function () {
          this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this))
        }, t.prototype._next = function (e) {
          this.destination.next(e)
        }, t.prototype._error = function (e) {
          this.destination.error(e), this.unsubscribe()
        }, t.prototype._complete = function () {
          this.destination.complete(), this.unsubscribe()
        }, t.prototype._unsubscribeAndRecycle = function () {
          var e = this, t = e._parent, r = e._parents;
          return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = t, this._parents = r, this
        }, t
      }(s.Subscription);
    r.Subscriber = c;
    var l = function (e) {
      function t(t, r, n, i) {
        e.call(this), this._parentSubscriber = t;
        var s, u = this;
        o.isFunction(r) ? s = r : r && (s = r.next, n = r.error, i = r.complete, r !== a.empty && (u = Object.create(
            r), o.isFunction(u.unsubscribe) && this.add(u.unsubscribe.bind(u)), u.unsubscribe = this.unsubscribe.bind(
            this))), this._context = u, this._next = s, this._error = n, this._complete = i
      }

      return i(t, e), t.prototype.next = function (e) {
        if (!this.isStopped && this._next) {
          var t = this._parentSubscriber;
          t.syncErrorThrowable ? this.__tryOrSetError(t,
              this._next,
              e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
        }
      }, t.prototype.error = function (e) {
        if (!this.isStopped) {
          var t = this._parentSubscriber;
          if (this._error) t.syncErrorThrowable ? (this.__tryOrSetError(t,
            this._error,
            e), this.unsubscribe()) : (this.__tryOrUnsub(this._error,
            e), this.unsubscribe()); else {
            if (!t.syncErrorThrowable)throw this.unsubscribe(), e;
            t.syncErrorValue = e, t.syncErrorThrown = !0, this.unsubscribe()
          }
        }
      }, t.prototype.complete = function () {
        if (!this.isStopped) {
          var e = this._parentSubscriber;
          this._complete ? e.syncErrorThrowable ? (this.__tryOrSetError(e,
            this._complete), this.unsubscribe()) : (this.__tryOrUnsub(this._complete), this.unsubscribe()) : this.unsubscribe()
        }
      }, t.prototype.__tryOrUnsub = function (e, t) {
        try {
          e.call(this._context, t)
        }
        catch (e) {
          throw this.unsubscribe(), e
        }
      }, t.prototype.__tryOrSetError = function (e, t, r) {
        try {
          t.call(this._context, r)
        }
        catch (t) {
          return e.syncErrorValue = t, e.syncErrorThrown = !0, !0
        }
        return !1
      }, t.prototype._unsubscribe = function () {
        var e = this._parentSubscriber;
        this._context = null, this._parentSubscriber = null, e.unsubscribe()
      }, t
    }(c)
  }, {
    "./Observer": 181,
    "./Subscription": 187,
    "./symbol/rxSubscriber": 269,
    "./util/isFunction": 277
  }],
  187: [function (e, t, r) {
    arguments[4][123][0].apply(r, arguments)
  }, {
    "./util/UnsubscriptionError": 272,
    "./util/errorObject": 273,
    "./util/isArray": 274,
    "./util/isFunction": 277,
    "./util/isObject": 279,
    "./util/tryCatch": 286,
    dup: 123
  }],
  188: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../observable/defer");
    n.Observable.defer = i.defer
  }, { "../../Observable": 180, "../../observable/defer": 228 }],
  189: [function (e, t, r) {
    "use strict";
    var n = e("../../../Observable"), i = e("../../../observable/dom/ajax");
    n.Observable.ajax = i.ajax
  }, { "../../../Observable": 180, "../../../observable/dom/ajax": 230 }],
  190: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../observable/from");
    n.Observable.from = i.from
  }, { "../../Observable": 180, "../../observable/from": 231 }],
  191: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../observable/fromEvent");
    n.Observable.fromEvent = i.fromEvent
  }, { "../../Observable": 180, "../../observable/fromEvent": 232 }],
  192: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../observable/merge");
    n.Observable.merge = i.merge
  }, { "../../Observable": 180, "../../observable/merge": 233 }],
  193: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../observable/of");
    n.Observable.of = i.of
  }, { "../../Observable": 180, "../../observable/of": 234 }],
  194: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../observable/throw");
    n.Observable.throw = i._throw
  }, { "../../Observable": 180, "../../observable/throw": 235 }],
  195: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../observable/timer");
    n.Observable.timer = i.timer
  }, { "../../Observable": 180, "../../observable/timer": 236 }],
  196: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/catch");
    n.Observable.prototype.catch = i._catch, n.Observable.prototype._catch = i._catch
  }, { "../../Observable": 180, "../../operator/catch": 237 }],
  197: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/concatMap");
    n.Observable.prototype.concatMap = i.concatMap
  }, { "../../Observable": 180, "../../operator/concatMap": 239 }],
  198: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/debounceTime");
    n.Observable.prototype.debounceTime = i.debounceTime
  }, { "../../Observable": 180, "../../operator/debounceTime": 240 }],
  199: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/delay");
    n.Observable.prototype.delay = i.delay
  }, { "../../Observable": 180, "../../operator/delay": 241 }],
  200: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/distinctUntilKeyChanged");
    n.Observable.prototype.distinctUntilKeyChanged = i.distinctUntilKeyChanged
  }, { "../../Observable": 180, "../../operator/distinctUntilKeyChanged": 243 }],
  201: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/do");
    n.Observable.prototype.do = i._do, n.Observable.prototype._do = i._do
  }, { "../../Observable": 180, "../../operator/do": 244 }],
  202: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/filter");
    n.Observable.prototype.filter = i.filter
  }, { "../../Observable": 180, "../../operator/filter": 245 }],
  203: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/map");
    n.Observable.prototype.map = i.map
  }, { "../../Observable": 180, "../../operator/map": 246 }],
  204: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/mergeMap");
    n.Observable.prototype.mergeMap = i.mergeMap, n.Observable.prototype.flatMap = i.mergeMap
  }, { "../../Observable": 180, "../../operator/mergeMap": 249 }],
  205: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/partition");
    n.Observable.prototype.partition = i.partition
  }, { "../../Observable": 180, "../../operator/partition": 252 }],
  206: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/retryWhen");
    n.Observable.prototype.retryWhen = i.retryWhen
  }, { "../../Observable": 180, "../../operator/retryWhen": 253 }],
  207: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/share");
    n.Observable.prototype.share = i.share
  }, { "../../Observable": 180, "../../operator/share": 254 }],
  208: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/startWith");
    n.Observable.prototype.startWith = i.startWith
  }, { "../../Observable": 180, "../../operator/startWith": 255 }],
  209: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/switch");
    n.Observable.prototype.switch = i._switch, n.Observable.prototype._switch = i._switch
  }, { "../../Observable": 180, "../../operator/switch": 256 }],
  210: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/switchMap");
    n.Observable.prototype.switchMap = i.switchMap
  }, { "../../Observable": 180, "../../operator/switchMap": 257 }],
  211: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/take");
    n.Observable.prototype.take = i.take
  }, { "../../Observable": 180, "../../operator/take": 258 }],
  212: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/takeUntil");
    n.Observable.prototype.takeUntil = i.takeUntil
  }, { "../../Observable": 180, "../../operator/takeUntil": 259 }],
  213: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/throttleTime");
    n.Observable.prototype.throttleTime = i.throttleTime
  }, { "../../Observable": 180, "../../operator/throttleTime": 260 }],
  214: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/withLatestFrom");
    n.Observable.prototype.withLatestFrom = i.withLatestFrom
  }, { "../../Observable": 180, "../../operator/withLatestFrom": 261 }],
  215: [function (e, t, r) {
    "use strict";
    var n = e("../../Observable"), i = e("../../operator/zip");
    n.Observable.prototype.zip = i.zipProto
  }, { "../../Observable": 180, "../../operator/zip": 262 }],
  216: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
        function r() {
          this.constructor = e
        }

        for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }, i = e("../Observable"), o = e("./ScalarObservable"), s = e("./EmptyObservable"),
      a = function (e) {
        function t(t, r) {
          e.call(this), this.arrayLike = t, this.scheduler = r, r || 1 !== t.length || (this._isScalar = !0, this.value = t[0])
        }

        return n(t, e), t.create = function (e, r) {
          var n = e.length;
          return 0 === n ? new s.EmptyObservable : 1 === n ? new o.ScalarObservable(e[0],
            r) : new t(e, r)
        }, t.dispatch = function (e) {
          var t = e.arrayLike, r = e.index, n = e.length, i = e.subscriber;
          i.closed || (r >= n ? i.complete() : (i.next(t[r]), e.index = r + 1, this.schedule(e)))
        }, t.prototype._subscribe = function (e) {
          var r = this, n = r.arrayLike, i = r.scheduler, o = n.length;
          if (i)return i.schedule(t.dispatch,
            0,
            { arrayLike: n, index: 0, length: o, subscriber: e });
          for (var s = 0; s < o && !e.closed; s++)e.next(n[s]);
          e.complete()
        }, t
      }(i.Observable);
    r.ArrayLikeObservable = a
  }, { "../Observable": 180, "./EmptyObservable": 220, "./ScalarObservable": 226 }],
  217: [function (e, t, r) {
    arguments[4][124][0].apply(r, arguments)
  }, {
    "../Observable": 180,
    "../util/isScheduler": 281,
    "./EmptyObservable": 220,
    "./ScalarObservable": 226,
    dup: 124
  }],
  218: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
        function r() {
          this.constructor = e
        }

        for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }, i = e("../Subject"), o = e("../Observable"), s = e("../Subscriber"),
      a = e("../Subscription"), u = function (e) {
        function t(t, r) {
          e.call(this), this.source = t, this.subjectFactory = r, this._refCount = 0
        }

        return n(t, e), t.prototype._subscribe = function (e) {
          return this.getSubject().subscribe(e)
        }, t.prototype.getSubject = function () {
          var e = this._subject;
          return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject
        }, t.prototype.connect = function () {
          var e = this._connection;
          return e || ((e = this._connection = new a.Subscription).add(this.source.subscribe(new c(
            this.getSubject(),
            this))), e.closed ? (this._connection = null, e = a.Subscription.EMPTY) : this._connection = e), e
        }, t.prototype.refCount = function () {
          return this.lift(new l(this))
        }, t
      }(o.Observable);
    r.ConnectableObservable = u, r.connectableObservableDescriptor = {
      operator: { value: null },
      _refCount: { value: 0, writable: !0 },
      _subject: { value: null, writable: !0 },
      _connection: { value: null, writable: !0 },
      _subscribe: { value: u.prototype._subscribe },
      getSubject: { value: u.prototype.getSubject },
      connect: { value: u.prototype.connect },
      refCount: { value: u.prototype.refCount }
    };
    var c = function (e) {
      function t(t, r) {
        e.call(this, t), this.connectable = r
      }

      return n(t, e), t.prototype._error = function (t) {
        this._unsubscribe(), e.prototype._error.call(this, t)
      }, t.prototype._complete = function () {
        this._unsubscribe(), e.prototype._complete.call(this)
      }, t.prototype._unsubscribe = function () {
        var e = this.connectable;
        if (e) {
          this.connectable = null;
          var t = e._connection;
          e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe()
        }
      }, t
    }(i.SubjectSubscriber), l = function () {
      function e(e) {
        this.connectable = e
      }

      return e.prototype.call = function (e, t) {
        var r = this.connectable;
        r._refCount++;
        var n = new h(e, r), i = t.subscribe(n);
        return n.closed || (n.connection = r.connect()), i
      }, e
    }(), h = function (e) {
      function t(t, r) {
        e.call(this, t), this.connectable = r
      }

      return n(t, e), t.prototype._unsubscribe = function () {
        var e = this.connectable;
        if (e) {
          this.connectable = null;
          var t = e._refCount;
          if (t <= 0) this.connection = null; else if (e._refCount = t - 1, t > 1) this.connection = null; else {
            var r = this.connection, n = e._connection;
            this.connection = null, !n || r && n !== r || n.unsubscribe()
          }
        } else this.connection = null
      }, t
    }(s.Subscriber)
  }, { "../Observable": 180, "../Subject": 184, "../Subscriber": 186, "../Subscription": 187 }],
  219: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
        function r() {
          this.constructor = e
        }

        for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }, i = e("../Observable"), o = e("../util/subscribeToResult"), s = e("../OuterSubscriber"),
      a = function (e) {
        function t(t) {
          e.call(this), this.observableFactory = t
        }

        return n(t, e), t.create = function (e) {
          return new t(e)
        }, t.prototype._subscribe = function (e) {
          return new u(e, this.observableFactory)
        }, t
      }(i.Observable);
    r.DeferObservable = a;
    var u = function (e) {
      function t(t, r) {
        e.call(this, t), this.factory = r, this.tryDefer()
      }

      return n(t, e), t.prototype.tryDefer = function () {
        try {
          this._callFactory()
        }
        catch (e) {
          this._error(e)
        }
      }, t.prototype._callFactory = function () {
        var e = this.factory();
        e && this.add(o.subscribeToResult(this, e))
      }, t
    }(s.OuterSubscriber)
  }, { "../Observable": 180, "../OuterSubscriber": 182, "../util/subscribeToResult": 284 }],
  220: [function (e, t, r) {
    arguments[4][126][0].apply(r, arguments)
  }, { "../Observable": 180, dup: 126 }],
  221: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = function (e) {
      function t(t, r) {
        e.call(this), this.error = t, this.scheduler = r
      }

      return n(t, e), t.create = function (e, r) {
        return new t(e, r)
      }, t.dispatch = function (e) {
        var t = e.error;
        e.subscriber.error(t)
      }, t.prototype._subscribe = function (e) {
        var r = this.error, n = this.scheduler;
        if (n)return n.schedule(t.dispatch, 0, { error: r, subscriber: e });
        e.error(r)
      }, t
    }(e("../Observable").Observable);
    r.ErrorObservable = i
  }, { "../Observable": 180 }],
  222: [function (e, t, r) {
    arguments[4][127][0].apply(r, arguments)
  }, {
    "../Observable": 180,
    "../Subscription": 187,
    "../util/errorObject": 273,
    "../util/isFunction": 277,
    "../util/tryCatch": 286,
    dup: 127
  }],
  223: [function (e, t, r) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, i = function (e, t) {
        function r() {
          this.constructor = e
        }

        for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }, o = e("../util/isArray"), s = e("../util/isArrayLike"), a = e("../util/isPromise"),
      u = e("./PromiseObservable"), c = e("./IteratorObservable"), l = e("./ArrayObservable"),
      h = e("./ArrayLikeObservable"), p = e("../symbol/iterator"), f = e("../Observable"),
      d = e("../operator/observeOn"), b = e("../symbol/observable"), m = function (e) {
        function t(t, r) {
          e.call(this, null), this.ish = t, this.scheduler = r
        }

        return i(t, e), t.create = function (e, r) {
          if (null != e) {
            if ("function" == typeof e[b.observable])return e instanceof f.Observable && !r ? e : new t(
              e,
              r);
            if (o.isArray(e))return new l.ArrayObservable(e, r);
            if (a.isPromise(e))return new u.PromiseObservable(e, r);
            if ("function" == typeof e[p.iterator] || "string" == typeof e)return new c.IteratorObservable(
              e,
              r);
            if (s.isArrayLike(e))return new h.ArrayLikeObservable(e, r)
          }
          throw new TypeError((null !== e && (void 0 === e ? "undefined" : n(e)) || e) + " is not observable")
        }, t.prototype._subscribe = function (e) {
          var t = this.ish, r = this.scheduler;
          return null == r ? t[b.observable]().subscribe(e) : t[b.observable]()
          .subscribe(new d.ObserveOnSubscriber(e, r, 0))
        }, t
      }(f.Observable);
    r.FromObservable = m
  }, {
    "../Observable": 180,
    "../operator/observeOn": 251,
    "../symbol/iterator": 267,
    "../symbol/observable": 268,
    "../util/isArray": 274,
    "../util/isArrayLike": 275,
    "../util/isPromise": 280,
    "./ArrayLikeObservable": 216,
    "./ArrayObservable": 217,
    "./IteratorObservable": 224,
    "./PromiseObservable": 225
  }],
  224: [function (e, t, r) {
    "use strict";
    function n(e) {
      var t = e[l.iterator];
      if (!t && "string" == typeof e)return new p(e);
      if (!t && void 0 !== e.length)return new f(e);
      if (!t)throw new TypeError("object is not iterable");
      return e[l.iterator]()
    }

    function i(e) {
      var t = +e.length;
      return isNaN(t) ? 0 : 0 !== t && o(t) ? (t = s(t) * Math.floor(Math.abs(t)), t <= 0 ? 0 : t > d ? d : t) : t
    }

    function o(e) {
      return "number" == typeof e && u.root.isFinite(e)
    }

    function s(e) {
      var t = +e;
      return 0 === t ? t : isNaN(t) ? t : t < 0 ? -1 : 1
    }

    var a = function (e, t) {
        function r() {
          this.constructor = e
        }

        for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }, u = e("../util/root"), c = e("../Observable"), l = e("../symbol/iterator"),
      h = function (e) {
        function t(t, r) {
          if (e.call(this), this.scheduler = r, null == t)throw new Error("iterator cannot be null.");
          this.iterator = n(t)
        }

        return a(t, e), t.create = function (e, r) {
          return new t(e, r)
        }, t.dispatch = function (e) {
          var t = e.index, r = e.hasError, n = e.iterator, i = e.subscriber;
          if (r) i.error(e.error); else {
            var o = n.next();
            o.done ? i.complete() : (i.next(o.value), e.index = t + 1, i.closed ? "function" == typeof n.return && n.return() : this.schedule(
              e))
          }
        }, t.prototype._subscribe = function (e) {
          var r = this, n = r.iterator, i = r.scheduler;
          if (i)return i.schedule(t.dispatch, 0, { index: 0, iterator: n, subscriber: e });
          for (; ;) {
            var o = n.next();
            if (o.done) {
              e.complete();
              break
            }
            if (e.next(o.value), e.closed) {
              "function" == typeof n.return && n.return();
              break
            }
          }
        }, t
      }(c.Observable);
    r.IteratorObservable = h;
    var p = function () {
      function e(e, t, r) {
        void 0 === t && (t = 0), void 0 === r && (r = e.length), this.str = e, this.idx = t, this.len = r
      }

      return e.prototype[l.iterator] = function () {
        return this
      }, e.prototype.next = function () {
        return this.idx < this.len ? { done: !1, value: this.str.charAt(this.idx++) } : {
          done: !0,
          value: void 0
        }
      }, e
    }(), f = function () {
      function e(e, t, r) {
        void 0 === t && (t = 0), void 0 === r && (r = i(e)), this.arr = e, this.idx = t, this.len = r
      }

      return e.prototype[l.iterator] = function () {
        return this
      }, e.prototype.next = function () {
        return this.idx < this.len ? { done: !1, value: this.arr[this.idx++] } : {
          done: !0,
          value: void 0
        }
      }, e
    }(), d = Math.pow(2, 53) - 1
  }, { "../Observable": 180, "../symbol/iterator": 267, "../util/root": 283 }],
  225: [function (e, t, r) {
    "use strict";
    function n(e) {
      var t = e.value, r = e.subscriber;
      r.closed || (r.next(t), r.complete())
    }

    function i(e) {
      var t = e.err, r = e.subscriber;
      r.closed || r.error(t)
    }

    var o = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, s = e("../util/root"), a = function (e) {
      function t(t, r) {
        e.call(this), this.promise = t, this.scheduler = r
      }

      return o(t, e), t.create = function (e, r) {
        return new t(e, r)
      }, t.prototype._subscribe = function (e) {
        var t = this, r = this.promise, o = this.scheduler;
        if (null == o) this._isScalar ? e.closed || (e.next(this.value), e.complete()) : r.then(
          function (r) {
            t.value = r, t._isScalar = !0, e.closed || (e.next(r), e.complete())
          },
          function (t) {
            e.closed || e.error(t)
          }).then(null, function (e) {
          s.root.setTimeout(function () {
            throw e
          })
        }); else if (this._isScalar) {
          if (!e.closed)return o.schedule(n, 0, { value: this.value, subscriber: e })
        } else r.then(function (r) {
          t.value = r, t._isScalar = !0, e.closed || e.add(o.schedule(n,
            0,
            { value: r, subscriber: e }))
        }, function (t) {
          e.closed || e.add(o.schedule(i, 0, { err: t, subscriber: e }))
        }).then(null, function (e) {
          s.root.setTimeout(function () {
            throw e
          })
        })
      }, t
    }(e("../Observable").Observable);
    r.PromiseObservable = a
  }, { "../Observable": 180, "../util/root": 283 }],
  226: [function (e, t, r) {
    arguments[4][128][0].apply(r, arguments)
  }, { "../Observable": 180, dup: 128 }],
  227: [function (e, t, r) {
    arguments[4][129][0].apply(r, arguments)
  }, {
    "../Observable": 180,
    "../scheduler/async": 266,
    "../util/isDate": 276,
    "../util/isNumeric": 278,
    "../util/isScheduler": 281,
    dup: 129
  }],
  228: [function (e, t, r) {
    "use strict";
    var n = e("./DeferObservable");
    r.defer = n.DeferObservable.create
  }, { "./DeferObservable": 219 }],
  229: [function (e, t, r) {
    "use strict";
    function n() {
      if (p.root.XMLHttpRequest)return new p.root.XMLHttpRequest;
      if (p.root.XDomainRequest)return new p.root.XDomainRequest;
      throw new Error("CORS is not supported by your browser")
    }

    function i() {
      if (p.root.XMLHttpRequest)return new p.root.XMLHttpRequest;
      var e = void 0;
      try {
        for (var t = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], r = 0; r < 3; r++)try {
          if (e = t[r], new p.root.ActiveXObject(e))break
        }
        catch (e) {
        }
        return new p.root.ActiveXObject(e)
      }
      catch (e) {
        throw new Error("XMLHttpRequest is not supported by your browser")
      }
    }

    function o(e, t) {
      return void 0 === t && (t = null), new y({ method: "GET", url: e, headers: t })
    }

    function s(e, t, r) {
      return new y({ method: "POST", url: e, body: t, headers: r })
    }

    function a(e, t) {
      return new y({ method: "DELETE", url: e, headers: t })
    }

    function u(e, t, r) {
      return new y({ method: "PUT", url: e, body: t, headers: r })
    }

    function c(e, t, r) {
      return new y({ method: "PATCH", url: e, body: t, headers: r })
    }

    function l(e, t) {
      return new y({
        method: "GET",
        url: e,
        responseType: "json",
        headers: t
      }).lift(new v.MapOperator(function (e, t) {
        return e.response
      }, null))
    }

    var h = function (e, t) {
        function r() {
          this.constructor = e
        }

        for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }, p = e("../../util/root"), f = e("../../util/tryCatch"), d = e("../../util/errorObject"),
      b = e("../../Observable"), m = e("../../Subscriber"), v = e("../../operator/map");
    r.ajaxGet = o, r.ajaxPost = s, r.ajaxDelete = a, r.ajaxPut = u, r.ajaxPatch = c, r.ajaxGetJSON = l;
    var y = function (e) {
      function t(t) {
        e.call(this);
        var r = {
          async: !0,
          createXHR: function () {
            return this.crossDomain ? n.call(this) : i()
          },
          crossDomain: !1,
          withCredentials: !1,
          headers: {},
          method: "GET",
          responseType: "json",
          timeout: 0
        };
        if ("string" == typeof t) r.url = t; else for (var o in t)t.hasOwnProperty(o) && (r[o] = t[o]);
        this.request = r
      }

      return h(t, e), t.prototype._subscribe = function (e) {
        return new g(e, this.request)
      }, t.create = function () {
        var e = function (e) {
          return new t(e)
        };
        return e.get = o, e.post = s, e.delete = a, e.put = u, e.patch = c, e.getJSON = l, e
      }(), t
    }(b.Observable);
    r.AjaxObservable = y;
    var g = function (e) {
      function t(t, r) {
        e.call(this, t), this.request = r, this.done = !1;
        var n = r.headers = r.headers || {};
        r.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), "Content-Type" in n || p.root.FormData && r.body instanceof p.root.FormData || void 0 === r.body || (n["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8"), r.body = this.serializeBody(
          r.body,
          r.headers["Content-Type"]), this.send()
      }

      return h(t, e), t.prototype.next = function (e) {
        this.done = !0;
        var t = this, r = t.xhr, n = t.request, i = t.destination, o = new w(e, r, n);
        i.next(o)
      }, t.prototype.send = function () {
        var e = this, t = e.request, r = e.request, n = r.user, i = r.method, o = r.url,
          s = r.async, a = r.password, u = r.headers, c = r.body, l = t.createXHR,
          h = f.tryCatch(l).call(t);
        if (h === d.errorObject) this.error(d.errorObject.e); else {
          this.xhr = h, this.setupEvents(h, t);
          if ((n ? f.tryCatch(h.open).call(h, i, o, s, n, a) : f.tryCatch(h.open).call(h,
              i,
              o,
              s)) === d.errorObject)return this.error(d.errorObject.e), null;
          if (h.timeout = t.timeout, h.responseType = t.responseType, "withCredentials" in h && (h.withCredentials = !!t.withCredentials), this.setHeaders(
              h,
              u), (c ? f.tryCatch(h.send).call(h, c) : f.tryCatch(h.send)
            .call(h)) === d.errorObject)return this.error(d.errorObject.e), null
        }
        return h
      }, t.prototype.serializeBody = function (e, t) {
        if (!e || "string" == typeof e)return e;
        if (p.root.FormData && e instanceof p.root.FormData)return e;
        if (t) {
          var r = t.indexOf(";");
          -1 !== r && (t = t.substring(0, r))
        }
        switch (t) {
          case"application/x-www-form-urlencoded":
            return Object.keys(e).map(function (t) {
              return encodeURI(t) + "=" + encodeURI(e[t])
            }).join("&");
          case"application/json":
            return JSON.stringify(e);
          default:
            return e
        }
      }, t.prototype.setHeaders = function (e, t) {
        for (var r in t)t.hasOwnProperty(r) && e.setRequestHeader(r, t[r])
      }, t.prototype.setupEvents = function (e, t) {
        function r(e) {
          var t = r, n = t.subscriber, i = t.progressSubscriber, o = t.request;
          i && i.error(e), n.error(new _(this, o))
        }

        function n(e) {
          var t = n, r = t.subscriber, i = t.progressSubscriber, o = t.request;
          if (4 === this.readyState) {
            var s = 1223 === this.status ? 204 : this.status,
              a = "text" === this.responseType ? this.response || this.responseText : this.response;
            0 === s && (s = a ? 200 : 0), 200 <= s && s < 300 ? (i && i.complete(), r.next(e), r.complete()) : (i && i.error(
              e), r.error(new x("ajax error " + s, this, o)))
          }
        }

        var i = t.progressSubscriber;
        if (e.ontimeout = r, r.request = t, r.subscriber = this, r.progressSubscriber = i, e.upload && "withCredentials" in e) {
          if (i) {
            var o;
            o = function (e) {
              o.progressSubscriber.next(e)
            }, p.root.XDomainRequest ? e.onprogress = o : e.upload.onprogress = o, o.progressSubscriber = i
          }
          var s;
          s = function (e) {
            var t = s, r = t.progressSubscriber, n = t.subscriber, i = t.request;
            r && r.error(e), n.error(new x("ajax error", this, i))
          }, e.onerror = s, s.request = t, s.subscriber = this, s.progressSubscriber = i
        }
        e.onreadystatechange = n, n.subscriber = this, n.progressSubscriber = i, n.request = t
      }, t.prototype.unsubscribe = function () {
        var t = this, r = t.done, n = t.xhr;
        !r && n && 4 !== n.readyState && "function" == typeof n.abort && n.abort(), e.prototype.unsubscribe.call(
          this)
      }, t
    }(m.Subscriber);
    r.AjaxSubscriber = g;
    var w = function () {
      return function (e, t, r) {
        switch (this.originalEvent = e, this.xhr = t, this.request = r, this.status = t.status, this.responseType = t.responseType || r.responseType, this.responseType) {
          case"json":
            this.response = "response" in t ? t.responseType ? t.response : JSON.parse(t.response || t.responseText || "null") : JSON.parse(
              t.responseText || "null");
            break;
          case"xml":
            this.response = t.responseXML;
            break;
          case"text":
          default:
            this.response = "response" in t ? t.response : t.responseText
        }
      }
    }();
    r.AjaxResponse = w;
    var x = function (e) {
      function t(t, r, n) {
        e.call(this, t), this.message = t, this.xhr = r, this.request = n, this.status = r.status
      }

      return h(t, e), t
    }(Error);
    r.AjaxError = x;
    var _ = function (e) {
      function t(t, r) {
        e.call(this, "ajax timeout", t, r)
      }

      return h(t, e), t
    }(x);
    r.AjaxTimeoutError = _
  }, {
    "../../Observable": 180,
    "../../Subscriber": 186,
    "../../operator/map": 246,
    "../../util/errorObject": 273,
    "../../util/root": 283,
    "../../util/tryCatch": 286
  }],
  230: [function (e, t, r) {
    "use strict";
    var n = e("./AjaxObservable");
    r.ajax = n.AjaxObservable.create
  }, { "./AjaxObservable": 229 }],
  231: [function (e, t, r) {
    "use strict";
    var n = e("./FromObservable");
    r.from = n.FromObservable.create
  }, { "./FromObservable": 223 }],
  232: [function (e, t, r) {
    arguments[4][131][0].apply(r, arguments)
  }, { "./FromEventObservable": 222, dup: 131 }],
  233: [function (e, t, r) {
    "use strict";
    var n = e("../operator/merge");
    r.merge = n.mergeStatic
  }, { "../operator/merge": 247 }],
  234: [function (e, t, r) {
    "use strict";
    var n = e("./ArrayObservable");
    r.of = n.ArrayObservable.of
  }, { "./ArrayObservable": 217 }],
  235: [function (e, t, r) {
    "use strict";
    var n = e("./ErrorObservable");
    r._throw = n.ErrorObservable.create
  }, { "./ErrorObservable": 221 }],
  236: [function (e, t, r) {
    arguments[4][132][0].apply(r, arguments)
  }, { "./TimerObservable": 227, dup: 132 }],
  237: [function (e, t, r) {
    arguments[4][133][0].apply(r, arguments)
  }, { "../OuterSubscriber": 182, "../util/subscribeToResult": 284, dup: 133 }],
  238: [function (e, t, r) {
    arguments[4][134][0].apply(r, arguments)
  }, {
    "../Observable": 180,
    "../observable/ArrayObservable": 217,
    "../util/isScheduler": 281,
    "./mergeAll": 248,
    dup: 134
  }],
  239: [function (e, t, r) {
    "use strict";
    var n = e("./mergeMap");
    r.concatMap = function (e, t) {
      return this.lift(new n.MergeMapOperator(e, t, 1))
    }
  }, { "./mergeMap": 249 }],
  240: [function (e, t, r) {
    arguments[4][135][0].apply(r, arguments)
  }, { "../Subscriber": 186, "../scheduler/async": 266, dup: 135 }],
  241: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
        function r() {
          this.constructor = e
        }

        for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }, i = e("../scheduler/async"), o = e("../util/isDate"), s = e("../Subscriber"),
      a = e("../Notification");
    r.delay = function (e, t) {
      void 0 === t && (t = i.async);
      var r = o.isDate(e) ? +e - t.now() : Math.abs(e);
      return this.lift(new u(r, t))
    };
    var u = function () {
      function e(e, t) {
        this.delay = e, this.scheduler = t
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new c(e, this.delay, this.scheduler))
      }, e
    }(), c = function (e) {
      function t(t, r, n) {
        e.call(this,
          t), this.delay = r, this.scheduler = n, this.queue = [], this.active = !1, this.errored = !1
      }

      return n(t, e), t.dispatch = function (e) {
        for (var t = e.source, r = t.queue, n = e.scheduler, i = e.destination; r.length > 0 && r[0].time - n.now() <= 0;)r.shift()
        .notification
        .observe(i);
        if (r.length > 0) {
          var o = Math.max(0, r[0].time - n.now());
          this.schedule(e, o)
        } else t.active = !1
      }, t.prototype._schedule = function (e) {
        this.active = !0, this.add(e.schedule(t.dispatch,
          this.delay,
          { source: this, destination: this.destination, scheduler: e }))
      }, t.prototype.scheduleNotification = function (e) {
        if (!0 !== this.errored) {
          var t = this.scheduler, r = new l(t.now() + this.delay, e);
          this.queue.push(r), !1 === this.active && this._schedule(t)
        }
      }, t.prototype._next = function (e) {
        this.scheduleNotification(a.Notification.createNext(e))
      }, t.prototype._error = function (e) {
        this.errored = !0, this.queue = [], this.destination.error(e)
      }, t.prototype._complete = function () {
        this.scheduleNotification(a.Notification.createComplete())
      }, t
    }(s.Subscriber), l = function () {
      return function (e, t) {
        this.time = e, this.notification = t
      }
    }()
  }, {
    "../Notification": 179,
    "../Subscriber": 186,
    "../scheduler/async": 266,
    "../util/isDate": 276
  }],
  242: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = e("../Subscriber"), o = e("../util/tryCatch"), s = e("../util/errorObject");
    r.distinctUntilChanged = function (e, t) {
      return this.lift(new a(e, t))
    };
    var a = function () {
      function e(e, t) {
        this.compare = e, this.keySelector = t
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new u(e, this.compare, this.keySelector))
      }, e
    }(), u = function (e) {
      function t(t, r, n) {
        e.call(this,
          t), this.keySelector = n, this.hasKey = !1, "function" == typeof r && (this.compare = r)
      }

      return n(t, e), t.prototype.compare = function (e, t) {
        return e === t
      }, t.prototype._next = function (e) {
        var t = e;
        if (this.keySelector && (t = o.tryCatch(this.keySelector)(
            e)) === s.errorObject)return this.destination.error(s.errorObject.e);
        var r = !1;
        if (this.hasKey) {
          if ((r = o.tryCatch(this.compare)(
              this.key,
              t)) === s.errorObject)return this.destination.error(s.errorObject.e)
        } else this.hasKey = !0;
        !1 === Boolean(r) && (this.key = t, this.destination.next(e))
      }, t
    }(i.Subscriber)
  }, { "../Subscriber": 186, "../util/errorObject": 273, "../util/tryCatch": 286 }],
  243: [function (e, t, r) {
    "use strict";
    var n = e("./distinctUntilChanged");
    r.distinctUntilKeyChanged = function (e, t) {
      return n.distinctUntilChanged.call(this, function (r, n) {
        return t ? t(r[e], n[e]) : r[e] === n[e]
      })
    }
  }, { "./distinctUntilChanged": 242 }],
  244: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = e("../Subscriber");
    r._do = function (e, t, r) {
      return this.lift(new o(e, t, r))
    };
    var o = function () {
      function e(e, t, r) {
        this.nextOrObserver = e, this.error = t, this.complete = r
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new s(e, this.nextOrObserver, this.error, this.complete))
      }, e
    }(), s = function (e) {
      function t(t, r, n, o) {
        e.call(this, t);
        var s = new i.Subscriber(r, n, o);
        s.syncErrorThrowable = !0, this.add(s), this.safeSubscriber = s
      }

      return n(t, e), t.prototype._next = function (e) {
        var t = this.safeSubscriber;
        t.next(e), t.syncErrorThrown ? this.destination.error(t.syncErrorValue) : this.destination.next(
          e)
      }, t.prototype._error = function (e) {
        var t = this.safeSubscriber;
        t.error(e), t.syncErrorThrown ? this.destination.error(t.syncErrorValue) : this.destination.error(
          e)
      }, t.prototype._complete = function () {
        var e = this.safeSubscriber;
        e.complete(), e.syncErrorThrown ? this.destination.error(e.syncErrorValue) : this.destination.complete()
      }, t
    }(i.Subscriber)
  }, { "../Subscriber": 186 }],
  245: [function (e, t, r) {
    arguments[4][138][0].apply(r, arguments)
  }, { "../Subscriber": 186, dup: 138 }],
  246: [function (e, t, r) {
    arguments[4][140][0].apply(r, arguments)
  }, { "../Subscriber": 186, dup: 140 }],
  247: [function (e, t, r) {
    "use strict";
    function n() {
      for (var e = [], t = 0; t < arguments.length; t++)e[t - 0] = arguments[t];
      var r = Number.POSITIVE_INFINITY, n = null, u = e[e.length - 1];
      return a.isScheduler(u) ? (n = e.pop(), e.length > 1 && "number" == typeof e[e.length - 1] && (r = e.pop())) : "number" == typeof u && (r = e.pop()), null === n && 1 === e.length && e[0] instanceof i.Observable ? e[0] : new o.ArrayObservable(
        e,
        n).lift(new s.MergeAllOperator(r))
    }

    var i = e("../Observable"), o = e("../observable/ArrayObservable"), s = e("./mergeAll"),
      a = e("../util/isScheduler");
    r.merge = function () {
      for (var e = [], t = 0; t < arguments.length; t++)e[t - 0] = arguments[t];
      return this.lift.call(n.apply(void 0, [this].concat(e)))
    }, r.mergeStatic = n
  }, {
    "../Observable": 180,
    "../observable/ArrayObservable": 217,
    "../util/isScheduler": 281,
    "./mergeAll": 248
  }],
  248: [function (e, t, r) {
    arguments[4][141][0].apply(r, arguments)
  }, { "../OuterSubscriber": 182, "../util/subscribeToResult": 284, dup: 141 }],
  249: [function (e, t, r) {
    arguments[4][142][0].apply(r, arguments)
  }, { "../OuterSubscriber": 182, "../util/subscribeToResult": 284, dup: 142 }],
  250: [function (e, t, r) {
    arguments[4][143][0].apply(r, arguments)
  }, { "../observable/ConnectableObservable": 218, dup: 143 }],
  251: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = e("../Subscriber"), o = e("../Notification");
    r.observeOn = function (e, t) {
      return void 0 === t && (t = 0), this.lift(new s(e, t))
    };
    var s = function () {
      function e(e, t) {
        void 0 === t && (t = 0), this.scheduler = e, this.delay = t
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new a(e, this.scheduler, this.delay))
      }, e
    }();
    r.ObserveOnOperator = s;
    var a = function (e) {
      function t(t, r, n) {
        void 0 === n && (n = 0), e.call(this, t), this.scheduler = r, this.delay = n
      }

      return n(t, e), t.dispatch = function (e) {
        var t = e.notification, r = e.destination;
        t.observe(r), this.unsubscribe()
      }, t.prototype.scheduleMessage = function (e) {
        this.add(this.scheduler.schedule(t.dispatch, this.delay, new u(e, this.destination)))
      }, t.prototype._next = function (e) {
        this.scheduleMessage(o.Notification.createNext(e))
      }, t.prototype._error = function (e) {
        this.scheduleMessage(o.Notification.createError(e))
      }, t.prototype._complete = function () {
        this.scheduleMessage(o.Notification.createComplete())
      }, t
    }(i.Subscriber);
    r.ObserveOnSubscriber = a;
    var u = function () {
      return function (e, t) {
        this.notification = e, this.destination = t
      }
    }();
    r.ObserveOnMessage = u
  }, { "../Notification": 179, "../Subscriber": 186 }],
  252: [function (e, t, r) {
    "use strict";
    var n = e("../util/not"), i = e("./filter");
    r.partition = function (e, t) {
      return [i.filter.call(this, e, t), i.filter.call(this, n.not(e, t))]
    }
  }, { "../util/not": 282, "./filter": 245 }],
  253: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
        function r() {
          this.constructor = e
        }

        for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }, i = e("../Subject"), o = e("../util/tryCatch"), s = e("../util/errorObject"),
      a = e("../OuterSubscriber"), u = e("../util/subscribeToResult");
    r.retryWhen = function (e) {
      return this.lift(new c(e, this))
    };
    var c = function () {
      function e(e, t) {
        this.notifier = e, this.source = t
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new l(e, this.notifier, this.source))
      }, e
    }(), l = function (e) {
      function t(t, r, n) {
        e.call(this, t), this.notifier = r, this.source = n
      }

      return n(t, e), t.prototype.error = function (t) {
        if (!this.isStopped) {
          var r = this.errors, n = this.retries, a = this.retriesSubscription;
          if (n) this.errors = null, this.retriesSubscription = null; else {
            if (r = new i.Subject, (n = o.tryCatch(this.notifier)(
                r)) === s.errorObject)return e.prototype.error.call(this, s.errorObject.e);
            a = u.subscribeToResult(this, n)
          }
          this._unsubscribeAndRecycle(), this.errors = r, this.retries = n, this.retriesSubscription = a, r.next(
            t)
        }
      }, t.prototype._unsubscribe = function () {
        var e = this, t = e.errors, r = e.retriesSubscription;
        t && (t.unsubscribe(), this.errors = null), r && (r.unsubscribe(), this.retriesSubscription = null), this.retries = null
      }, t.prototype.notifyNext = function (e, t, r, n, i) {
        var o = this, s = o.errors, a = o.retries, u = o.retriesSubscription;
        this.errors = null, this.retries = null, this.retriesSubscription = null, this._unsubscribeAndRecycle(), this.errors = s, this.retries = a, this.retriesSubscription = u, this.source.subscribe(
          this)
      }, t
    }(a.OuterSubscriber)
  }, {
    "../OuterSubscriber": 182,
    "../Subject": 184,
    "../util/errorObject": 273,
    "../util/subscribeToResult": 284,
    "../util/tryCatch": 286
  }],
  254: [function (e, t, r) {
    arguments[4][145][0].apply(r, arguments)
  }, { "../Subject": 184, "./multicast": 250, dup: 145 }],
  255: [function (e, t, r) {
    arguments[4][146][0].apply(r, arguments)
  }, {
    "../observable/ArrayObservable": 217,
    "../observable/EmptyObservable": 220,
    "../observable/ScalarObservable": 226,
    "../util/isScheduler": 281,
    "./concat": 238,
    dup: 146
  }],
  256: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = e("../OuterSubscriber"), o = e("../util/subscribeToResult");
    r._switch = function () {
      return this.lift(new s)
    };
    var s = function () {
      function e() {
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new a(e))
      }, e
    }(), a = function (e) {
      function t(t) {
        e.call(this, t), this.active = 0, this.hasCompleted = !1
      }

      return n(t, e), t.prototype._next = function (e) {
        this.unsubscribeInner(), this.active++, this.add(this.innerSubscription = o.subscribeToResult(
          this,
          e))
      }, t.prototype._complete = function () {
        this.hasCompleted = !0, 0 === this.active && this.destination.complete()
      }, t.prototype.unsubscribeInner = function () {
        this.active = this.active > 0 ? this.active - 1 : 0;
        var e = this.innerSubscription;
        e && (e.unsubscribe(), this.remove(e))
      }, t.prototype.notifyNext = function (e, t, r, n, i) {
        this.destination.next(t)
      }, t.prototype.notifyError = function (e) {
        this.destination.error(e)
      }, t.prototype.notifyComplete = function () {
        this.unsubscribeInner(), this.hasCompleted && 0 === this.active && this.destination.complete()
      }, t
    }(i.OuterSubscriber)
  }, { "../OuterSubscriber": 182, "../util/subscribeToResult": 284 }],
  257: [function (e, t, r) {
    arguments[4][147][0].apply(r, arguments)
  }, { "../OuterSubscriber": 182, "../util/subscribeToResult": 284, dup: 147 }],
  258: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
        function r() {
          this.constructor = e
        }

        for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }, i = e("../Subscriber"), o = e("../util/ArgumentOutOfRangeError"),
      s = e("../observable/EmptyObservable");
    r.take = function (e) {
      return 0 === e ? new s.EmptyObservable : this.lift(new a(e))
    };
    var a = function () {
      function e(e) {
        if (this.total = e, this.total < 0)throw new o.ArgumentOutOfRangeError
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new u(e, this.total))
      }, e
    }(), u = function (e) {
      function t(t, r) {
        e.call(this, t), this.total = r, this.count = 0
      }

      return n(t, e), t.prototype._next = function (e) {
        var t = this.total, r = ++this.count;
        r <= t && (this.destination.next(e), r === t && (this.destination.complete(), this.unsubscribe()))
      }, t
    }(i.Subscriber)
  }, {
    "../Subscriber": 186,
    "../observable/EmptyObservable": 220,
    "../util/ArgumentOutOfRangeError": 270
  }],
  259: [function (e, t, r) {
    arguments[4][148][0].apply(r, arguments)
  }, { "../OuterSubscriber": 182, "../util/subscribeToResult": 284, dup: 148 }],
  260: [function (e, t, r) {
    "use strict";
    function n(e) {
      e.subscriber.clearThrottle()
    }

    var i = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, o = e("../Subscriber"), s = e("../scheduler/async");
    r.throttleTime = function (e, t) {
      return void 0 === t && (t = s.async), this.lift(new a(e, t))
    };
    var a = function () {
      function e(e, t) {
        this.duration = e, this.scheduler = t
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new u(e, this.duration, this.scheduler))
      }, e
    }(), u = function (e) {
      function t(t, r, n) {
        e.call(this, t), this.duration = r, this.scheduler = n
      }

      return i(t, e), t.prototype._next = function (e) {
        this.throttled || (this.add(this.throttled = this.scheduler.schedule(n,
          this.duration,
          { subscriber: this })), this.destination.next(e))
      }, t.prototype.clearThrottle = function () {
        var e = this.throttled;
        e && (e.unsubscribe(), this.remove(e), this.throttled = null)
      }, t
    }(o.Subscriber)
  }, { "../Subscriber": 186, "../scheduler/async": 266 }],
  261: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = e("../OuterSubscriber"), o = e("../util/subscribeToResult");
    r.withLatestFrom = function () {
      for (var e = [], t = 0; t < arguments.length; t++)e[t - 0] = arguments[t];
      var r;
      "function" == typeof e[e.length - 1] && (r = e.pop());
      var n = e;
      return this.lift(new s(n, r))
    };
    var s = function () {
      function e(e, t) {
        this.observables = e, this.project = t
      }

      return e.prototype.call = function (e, t) {
        return t.subscribe(new a(e, this.observables, this.project))
      }, e
    }(), a = function (e) {
      function t(t, r, n) {
        e.call(this, t), this.observables = r, this.project = n, this.toRespond = [];
        var i = r.length;
        this.values = new Array(i);
        for (s = 0; s < i; s++)this.toRespond.push(s);
        for (var s = 0; s < i; s++) {
          var a = r[s];
          this.add(o.subscribeToResult(this, a, a, s))
        }
      }

      return n(t, e), t.prototype.notifyNext = function (e, t, r, n, i) {
        this.values[r] = t;
        var o = this.toRespond;
        if (o.length > 0) {
          var s = o.indexOf(r);
          -1 !== s && o.splice(s, 1)
        }
      }, t.prototype.notifyComplete = function () {
      }, t.prototype._next = function (e) {
        if (0 === this.toRespond.length) {
          var t = [e].concat(this.values);
          this.project ? this._tryProject(t) : this.destination.next(t)
        }
      }, t.prototype._tryProject = function (e) {
        var t;
        try {
          t = this.project.apply(this, e)
        }
        catch (e) {
          return void this.destination.error(e)
        }
        this.destination.next(t)
      }, t
    }(i.OuterSubscriber)
  }, { "../OuterSubscriber": 182, "../util/subscribeToResult": 284 }],
  262: [function (e, t, r) {
    arguments[4][149][0].apply(r, arguments)
  }, {
    "../OuterSubscriber": 182,
    "../Subscriber": 186,
    "../observable/ArrayObservable": 217,
    "../symbol/iterator": 267,
    "../util/isArray": 274,
    "../util/subscribeToResult": 284,
    dup: 149
  }],
  263: [function (e, t, r) {
    arguments[4][150][0].apply(r, arguments)
  }, { "../Subscription": 187, dup: 150 }],
  264: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = e("../util/root"), o = function (e) {
      function t(t, r) {
        e.call(this, t, r), this.scheduler = t, this.work = r, this.pending = !1
      }

      return n(t, e), t.prototype.schedule = function (e, t) {
        if (void 0 === t && (t = 0), this.closed)return this;
        this.state = e, this.pending = !0;
        var r = this.id, n = this.scheduler;
        return null != r && (this.id = this.recycleAsyncId(n,
          r,
          t)), this.delay = t, this.id = this.id || this.requestAsyncId(n, this.id, t), this
      }, t.prototype.requestAsyncId = function (e, t, r) {
        return void 0 === r && (r = 0), i.root.setInterval(e.flush.bind(e, this), r)
      }, t.prototype.recycleAsyncId = function (e, t, r) {
        return void 0 === r && (r = 0), null !== r && this.delay === r && !1 === this.pending ? t : i.root.clearInterval(
            t) && void 0 || void 0
      }, t.prototype.execute = function (e, t) {
        if (this.closed)return new Error("executing a cancelled action");
        this.pending = !1;
        var r = this._execute(e, t);
        if (r)return r;
        !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler,
          this.id,
          null))
      }, t.prototype._execute = function (e, t) {
        var r = !1, n = void 0;
        try {
          this.work(e)
        }
        catch (e) {
          r = !0, n = !!e && e || new Error(e)
        }
        if (r)return this.unsubscribe(), n
      }, t.prototype._unsubscribe = function () {
        var e = this.id, t = this.scheduler, r = t.actions, n = r.indexOf(this);
        this.work = null, this.delay = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== n && r.splice(
          n,
          1), null != e && (this.id = this.recycleAsyncId(t, e, null))
      }, t
    }(e("./Action").Action);
    r.AsyncAction = o
  }, { "../util/root": 283, "./Action": 263 }],
  265: [function (e, t, r) {
    arguments[4][152][0].apply(r, arguments)
  }, { "../Scheduler": 183, dup: 152 }],
  266: [function (e, t, r) {
    arguments[4][153][0].apply(r, arguments)
  }, { "./AsyncAction": 264, "./AsyncScheduler": 265, dup: 153 }],
  267: [function (e, t, r) {
    arguments[4][154][0].apply(r, arguments)
  }, { "../util/root": 283, dup: 154 }],
  268: [function (e, t, r) {
    arguments[4][155][0].apply(r, arguments)
  }, { "../util/root": 283, dup: 155 }],
  269: [function (e, t, r) {
    arguments[4][156][0].apply(r, arguments)
  }, { "../util/root": 283, dup: 156 }],
  270: [function (e, t, r) {
    "use strict";
    var n = function (e, t) {
      function r() {
        this.constructor = e
      }

      for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, i = function (e) {
      function t() {
        var t = e.call(this, "argument out of range");
        this.name = t.name = "ArgumentOutOfRangeError", this.stack = t.stack, this.message = t.message
      }

      return n(t, e), t
    }(Error);
    r.ArgumentOutOfRangeError = i
  }, {}],
  271: [function (e, t, r) {
    arguments[4][157][0].apply(r, arguments)
  }, { dup: 157 }],
  272: [function (e, t, r) {
    arguments[4][158][0].apply(r, arguments)
  }, { dup: 158 }],
  273: [function (e, t, r) {
    arguments[4][159][0].apply(r, arguments)
  }, { dup: 159 }],
  274: [function (e, t, r) {
    arguments[4][160][0].apply(r, arguments)
  }, { dup: 160 }],
  275: [function (e, t, r) {
    arguments[4][161][0].apply(r, arguments)
  }, { dup: 161 }],
  276: [function (e, t, r) {
    arguments[4][162][0].apply(r, arguments)
  }, { dup: 162 }],
  277: [function (e, t, r) {
    arguments[4][163][0].apply(r, arguments)
  }, { dup: 163 }],
  278: [function (e, t, r) {
    arguments[4][164][0].apply(r, arguments)
  }, { "../util/isArray": 274, dup: 164 }],
  279: [function (e, t, r) {
    arguments[4][165][0].apply(r, arguments)
  }, { dup: 165 }],
  280: [function (e, t, r) {
    arguments[4][166][0].apply(r, arguments)
  }, { dup: 166 }],
  281: [function (e, t, r) {
    arguments[4][167][0].apply(r, arguments)
  }, { dup: 167 }],
  282: [function (e, t, r) {
    "use strict";
    r.not = function (e, t) {
      function r() {
        return !r.pred.apply(r.thisArg, arguments)
      }

      return r.pred = e, r.thisArg = t, r
    }
  }, {}],
  283: [function (e, t, r) {
    (function (e) {
      "use strict";
      var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
      "object" == ("undefined" == typeof window ? "undefined" : t(window)) && window.window === window ? r.root = window : "object" == ("undefined" == typeof self ? "undefined" : t(
        self)) && self.self === self ? r.root = self : "object" == (void 0 === e ? "undefined" : t(e)) && e.global === e ? r.root = e : function () {
        throw new Error("RxJS could not find any global context (window, self, global)")
      }()
    }).call(this,
      "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }, {}],
  284: [function (e, t, r) {
    arguments[4][169][0].apply(r, arguments)
  }, {
    "../InnerSubscriber": 178,
    "../Observable": 180,
    "../symbol/iterator": 267,
    "../symbol/observable": 268,
    "./isArrayLike": 275,
    "./isObject": 279,
    "./isPromise": 280,
    "./root": 283,
    dup: 169
  }],
  285: [function (e, t, r) {
    arguments[4][170][0].apply(r, arguments)
  }, { "../Observer": 181, "../Subscriber": 186, "../symbol/rxSubscriber": 269, dup: 170 }],
  286: [function (e, t, r) {
    arguments[4][171][0].apply(r, arguments)
  }, { "./errorObject": 273, dup: 171 }],
  287: [function (e, t, r) {
    arguments[4][174][0].apply(r, arguments)
  }, { dup: 174 }],
  288: [function (e, t, r) {
    "use strict";
    function n(e) {
      var t = e.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
      if ("string" == typeof t[1] && t[1].length > 0 && t[1].toLowerCase() !== window.location.protocol)return !0;
      var r = { http: 80, https: 443 }[window.location.protocol];
      return "string" == typeof t[2] && t[2].length > 0 && t[2].replace(new RegExp(":(" + r + ")?$"),
          "") !== window.location.host
    }

    function i(e) {
      return e.replace(/#.*/, "")
    }

    function o(e, t) {
      var r = t || window.location.href, n = e.indexOf("#") > -1, o = i(e) === i(r);
      return n && o
    }

    function s(e, t) {
      return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(
        e,
        t)
    }

    Object.defineProperty(r,
      "__esModule",
      { value: !0 }), r.isExternal = n, r.stripHash = i, r.isHash = o, r.matches = s, r.querySelectorInv = function (e, t) {
      for (var r = e; r !== document && r !== document.documentElement;) {
        if (s(r, t))return r;
        r = r.parentNode
      }
      return null
    }, r.shouldLoadAnchor = function (e, t, r) {
      var i = e.href;
      return !(n(i) || o(i) || s(e, t) || "" !== e.target || null !== r && -1 === i.search(r))
    }, r.getScrollHeight = function () {
      var e = document.documentElement, t = document.body, r = "scrollHeight";
      return e[r] || t[r]
    }, r.getScrollLeft = function () {
      return window.pageXOffset || document.body.scrollLeft
    }, r.getScrollTop = function () {
      return window.pageYOffset || document.body.scrollTop
    }, r.expInterval = function (e, t) {
      return a.Observable.create(function (r) {
        function n() {
          r.next(i), i *= t, o = setTimeout(n, i)
        }

        var i = e, o = void 0;
        return o = setTimeout(n, i), function () {
          clearTimeout(o)
        }
      })
    }, r.fragmentFromString = function (e) {
      return document.createRange().createContextualFragment(e)
    };
    var a = e("rxjs/Observable")
  }, { "rxjs/Observable": 180 }],
  289: [function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" !== (void 0 === t ? "undefined" : s(t)) && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t)throw new TypeError(
        "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : s(
          t)));
      e.prototype = Object.create(t && t.prototype,
        {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
            e,
            n.key,
            n)
        }
      }

      return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
      }
    }(), u = function () {
      function e(e, t) {
        var r = [], n = !0, i = !1, o = void 0;
        try {
          for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
        }
        catch (e) {
          i = !0, o = e
        } finally {
          try {
            !n && a.return && a.return()
          } finally {
            if (i)throw o
          }
        }
        return r
      }

      return function (t, r) {
        if (Array.isArray(t))return t;
        if (Symbol.iterator in Object(t))return e(t, r);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
    }(), c = e("rxjs/Observable"), l = e("rxjs/Subject");
    e("rxjs/add/observable/defer"), e("rxjs/add/observable/from"), e("rxjs/add/observable/fromEvent"), e(
      "rxjs/add/observable/merge"), e("rxjs/add/observable/of"), e("rxjs/add/observable/throw"), e(
      "rxjs/add/observable/timer"), e("rxjs/add/observable/dom/ajax"), e("rxjs/add/operator/catch"), e(
      "rxjs/add/operator/concatMap"), e("rxjs/add/operator/debounceTime"), e(
      "rxjs/add/operator/delay"), e("rxjs/add/operator/distinctUntilKeyChanged"), e(
      "rxjs/add/operator/do"), e("rxjs/add/operator/filter"), e("rxjs/add/operator/map"), e(
      "rxjs/add/operator/mergeMap"), e("rxjs/add/operator/partition"), e(
      "rxjs/add/operator/retryWhen"), e("rxjs/add/operator/share"), e("rxjs/add/operator/startWith"), e(
      "rxjs/add/operator/switch"), e("rxjs/add/operator/switchMap"), e("rxjs/add/operator/take"), e(
      "rxjs/add/operator/takeUntil"), e("rxjs/add/operator/throttleTime"), e(
      "rxjs/add/operator/withLatestFrom"), e("rxjs/add/operator/zip");
    var h = function (e) {
      return e && e.__esModule ? e : { default: e }
    }(e("y-component/src/component-core")), p = e("../common"), f = e("./kind");
    c.Observable.prototype.pauseWith = function (e) {
      return this.withLatestFrom(e).filter(function (e) {
        return !1 === u(e, 2)[1]
      }).map(function (e) {
        return u(e, 1)[0]
      })
    }, r.default = function (e) {
      return function (e) {
        function t() {
          return n(this, t), i(this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }

        return o(t, e), a(t, [{
          key: "getComponentName", value: function () {
            return "y-push-state"
          }
        }, {
          key: "defaults", value: function () {
            return {
              replaceIds: [],
              linkSelector: "a[href]",
              scriptSelector: "script",
              scrollRestoration: !1,
              hrefRegex: null,
              blacklist: ".no-push-state",
              duration: 0,
              noPopDuration: !0
            }
          }
        }, {
          key: "sideEffects", value: function () {
            return {}
          }
        }, {
          key: "startHistory", value: function () {
            return this.checkPreCondition(), this.setupScrollRestoration(), this.cacheTitleElement(), this.setupObservables(), this
          }
        }, {
          key: "checkPreCondition", value: function () {
            if (0 === this.replaceIds.length) {
              var e = this.el.id;
              if (!e)throw Error("No replace ids provided nor does this component have and id");
              console.warn("No replace ids provided. Will replace entire content of #" + e)
            }
          }
        }, {
          key: "setupScrollRestoration", value: function () {
            "scrollRestoration" in history && (history.scrollRestoration = this.scrollRestoration ? "manual" : "auto"), this.setScrollPosition(), window.addEventListener(
              "beforeunload",
              this.updateHistoryState.bind(this))
          }
        }, {
          key: "cacheTitleElement", value: function () {
            this.titleElement = document.querySelector("title") || {}
          }
        }, {
          key: "bindPushEvents", value: function (e) {
            var t = this;
            return this.fromEvents(e, "click").map(function (e) {
              return new f.Push(e)
            }).filter(function (e) {
              return t.isPageChangeEvent(e)
            }).do(function (e) {
              var r = e.event;
              t.updateHistoryState(), r.preventDefault()
            })
          }
        }, {
          key: "bindHintEvents", value: function (e) {
            var t = this;
            return c.Observable.merge(this.fromEvents(e, "mouseenter"),
              this.fromEvents(e, "touchstart"),
              this.fromEvents(e, "focus")).map(function (e) {
              return new f.Hint(e)
            }).filter(function (e) {
              return t.isPageChangeAnchor(e)
            })
          }
        }, {
          key: "bindPopstateEvent", value: function () {
            return c.Observable.fromEvent(window, "popstate").map(function (e) {
              return new f.Pop(e)
            }).filter(function () {
              return null != window.history.state
            })
          }
        }, {
          key: "linkObservable", value: function () {
            return c.Observable.of(this.el.querySelectorAll(this.linkSelector))
          }
        }, {
          key: "fromEvents", value: function (e, t) {
            return e.mergeMap(function (e) {
              return c.Observable.fromEvent(e, t)
            })
          }
        }, {
          key: "fetchPage", value: function (e) {
            var t = this;
            return c.Observable.ajax(this.hrefToAjax(e)).map(function (t) {
              var r = t.response;
              return Object.assign(e, { response: r })
            }).catch(function (r) {
              return t.recoverIfResponse(e, r)
            }).retryWhen(function () {
              return c.Observable.merge(c.Observable.fromEvent(window, "online"),
                (0, p.expInterval)(1e3, 2)).do(t.onRetry.bind(t, e))
            })
          }
        }, {
          key: "hrefToAjax", value: function (e) {
            return { method: "GET", url: e.href, responseType: "text" }
          }
        }, {
          key: "recoverIfResponse", value: function (e, t) {
            var r = t.status, n = t.xhr;
            return n && r && r > 400 ? c.Observable.of(Object.assign(e,
              { response: n.response })) : (this.onError(Object.assign(e,
              t)), c.Observable.throw(t))
          }
        }, {
          key: "setupObservables", value: function () {
            var e = this;
            this.push$$ = new l.Subject, this.hint$$ = new l.Subject;
            var t = this.push$$.switch().throttleTime(this.duration + 100),
              r = this.bindPopstateEvent();
            this.page$ = c.Observable.merge(t, r).share();
            var n = c.Observable.defer(function () {
              return c.Observable.merge(e.page$.map(function () {
                return !0
              }), e.render$.map(function () {
                return !1
              })).startWith(!1)
            });
            this.hint$ = this.hint$$.switch()
            .pauseWith(n), this.prefetch$ = c.Observable.merge(this.hint$, this.page$)
            .distinctUntilKeyChanged("href")
            .switchMap(function (t) {
              return e.fetchPage(t)
            })
            .catch(function (e, t) {
              return t
            })
            .startWith({})
            .share(), this.render$ = this.page$.do(this.onStart.bind(this))
            .withLatestFrom(this.prefetch$)
            .switchMap(this.getResponse.bind(this))
            .map(this.responseToContent.bind(this))
            .do(this.onReady.bind(this))
            .do(this.updateDOM.bind(this))
            .do(this.resetScrollPostion.bind(this))
            .do(this.onAfter.bind(this))
            .catch(function (t, r) {
              return e.onError(t), console.error(t), r
            })
            .share(), this.render$.debounceTime(this.duration)
            .do(this.renewEventListeners.bind(this))
            .subscribe(), this.render$.switchMap(this.reinsertScriptTags.bind(this))
            .do(this.onLoad.bind(this))
            .catch(function (t, r) {
              return e.onError(t), console.error(t), r
            })
            .subscribe(), this.page$.switchMap(function () {
              return c.Observable.timer(e.duration + 200)
              .do(e.onAnimationEnd.bind(e))
              .takeUntil(e.render$)
            }).do(this.onProgress.bind(this)).catch(function (t, r) {
              return e.onError(t), console.error(t), r
            }).subscribe(), this.render$.subscribe(), this.onLoad({}), this.renewEventListeners()
          }
        }, {
          key: "getResponse", value: function (e) {
            var t = u(e, 2), r = t[0], n = t[1], i = void 0;
            return r.href === n.href ? (i = c.Observable.of(Object.assign(r,
              { response: n.response })), (r instanceof f.Push || !this.noPopDuration) && (i = i.delay(
              this.duration + 100))) : (i = this.prefetch$.take(1).map(function (e) {
              return Object.assign(r, { response: e.response })
            }), (r instanceof f.Push || !this.noPopDuration) && (i = i.zip(c.Observable.timer(this.duration + 100),
              function (e) {
                return e
              }))), i
          }
        }, {
          key: "responseToContent", value: function (e) {
            var t = e.response, r = (0, p.fragmentFromString)(t),
              n = this.getTitleFromDocumentFragment(r), i = this.getContentFromDocumentFragment(r),
              o = this.tempRemoveScriptTags(i);
            return Object.assign(e, { title: n, content: i, scripts: o })
          }
        }, {
          key: "updateDOM", value: function (e) {
            try {
              var t = e.href, r = e.title, n = e.content;
              e instanceof f.Push && window.history.replaceState({ id: this.componentName },
                r,
                t), this.titleElement.textContent = r, this.replaceContent(n)
            }
            catch (t) {
              throw Object.assign(e, { error: t })
            }
          }
        }, {
          key: "tempRemoveScriptTags", value: function (e) {
            var t = this, r = [];
            return e.forEach(function (e) {
              return Array.prototype.forEach.call(e.querySelectorAll(t.scriptSelector),
                function (e) {
                  var t = [e, e.previousElementSibling];
                  e.parentNode.removeChild(e), r.push(t)
                })
            }), r
          }
        }, {
          key: "insertScript", value: function (e) {
            var t = u(e, 2), r = t[0], n = t[1];
            return "" !== r.src ? c.Observable.create(function (e) {
              r.addEventListener("load", function (t) {
                e.next(t), e.complete()
              }), r.addEventListener("error", function (t) {
                e.error(t)
              }), n.parentNode.insertBefore(r, n.nextElementSibling)
            }) : c.Observable.of({}).do(function () {
              n.parentNode.insertBefore(r, n.nextElementSibling)
            })
          }
        }, {
          key: "reinsertScriptTags", value: function (e) {
            var t = e.scripts;
            return 0 === t.length ? c.Observable.of({}) : c.Observable.from(t)
            .concatMap(this.insertScript)
          }
        }, {
          key: "renewEventListeners", value: function () {
            var e = this.linkObservable();
            this.push$$.next(this.bindPushEvents(e)), this.hint$$.next(this.bindHintEvents(e))
          }
        }, {
          key: "isPageChangeEvent", value: function (e) {
            var t = e.event;
            return !t.metaKey && !t.ctrlKey && this.isPageChangeAnchor(e)
          }
        }, {
          key: "isPageChangeAnchor", value: function (e) {
            var t = e.event.currentTarget;
            return null != t && (0, p.shouldLoadAnchor)(t, this.blacklist, this.hrefRegex)
          }
        }, {
          key: "getTitleFromDocumentFragment", value: function (e) {
            return (e.querySelector("title") || {}).textContent
          }
        }, {
          key: "getContentFromDocumentFragment", value: function (e) {
            return this.replaceIds.length > 0 ? this.replaceIds.map(function (t) {
              return e.querySelector("#" + t)
            }) : e.querySelector("#" + this.el.id)
          }
        }, {
          key: "replaceContent", value: function (e) {
            this.replaceIds.length > 0 ? this.replaceContentByIds(e) : this.replaceContentWholesale(
              e)
          }
        }, {
          key: "replaceContentByIds", value: function (e) {
            var t = this.replaceIds.map(function (e) {
              return document.getElementById(e)
            });
            Array.prototype.forEach.call(t, function (t) {
              t.parentNode.replaceChild(e.shift(), t)
            })
          }
        }, {
          key: "replaceContentWholesale", value: function (e) {
            this.el.innerHTML = e.innerHTML
          }
        }, {
          key: "saveScrollPosition", value: function (e) {
            return Object.assign(e,
              { scrollTop: (0, p.getScrollTop)(), scrollHeight: (0, p.getScrollHeight)() })
          }
        }, {
          key: "updateHistoryState", value: function () {
            var e = history.state || { id: this.componentName };
            e = this.scrollRestoration ? this.saveScrollPosition(e) : e, history.replaceState(e,
              document.title,
              window.location.href)
          }
        }, {
          key: "setScrollPosition", value: function () {
            var e = history.state || {};
            document.body.style.minHeight = (e.scrollHeight || 0) + "px", null != e.scrollTop && window.scroll(
              window.pageXOffset,
              e.scrollTop), document.body.style.minHeight = ""
          }
        }, {
          key: "resetScrollPostion", value: function (e) {
            this.scrollRestoration && e instanceof f.Pop && this.setScrollPosition()
          }
        }, {
          key: "onStart", value: function (e) {
            var t = e.href;
            e instanceof f.Push && window.history.pushState({ id: this.componentName },
              "",
              t), this.fireEvent("start", { detail: e })
          }
        }, {
          key: "onReady", value: function (e) {
            this.fireEvent("ready", { detail: e })
          }
        }, {
          key: "onAfter", value: function (e) {
            this.fireEvent("after", { detail: e })
          }
        }, {
          key: "onError", value: function (e) {
            this.fireEvent("error", { detail: e })
          }
        }, {
          key: "onProgress", value: function (e) {
            this.fireEvent("progress", { detail: e })
          }
        }, {
          key: "onRetry", value: function (e) {
            this.fireEvent("retry", { detail: e })
          }
        }, {
          key: "onAnimationEnd", value: function (e) {
            this.fireEvent("animationend", { detail: e })
          }
        }, {
          key: "onLoad", value: function (e) {
            this.fireEvent("load", { detail: e })
          }
        }]), t
      }((0, h.default)(e))
    }
  }, {
    "../common": 288,
    "./kind": 290,
    "rxjs/Observable": 180,
    "rxjs/Subject": 184,
    "rxjs/add/observable/defer": 188,
    "rxjs/add/observable/dom/ajax": 189,
    "rxjs/add/observable/from": 190,
    "rxjs/add/observable/fromEvent": 191,
    "rxjs/add/observable/merge": 192,
    "rxjs/add/observable/of": 193,
    "rxjs/add/observable/throw": 194,
    "rxjs/add/observable/timer": 195,
    "rxjs/add/operator/catch": 196,
    "rxjs/add/operator/concatMap": 197,
    "rxjs/add/operator/debounceTime": 198,
    "rxjs/add/operator/delay": 199,
    "rxjs/add/operator/distinctUntilKeyChanged": 200,
    "rxjs/add/operator/do": 201,
    "rxjs/add/operator/filter": 202,
    "rxjs/add/operator/map": 203,
    "rxjs/add/operator/mergeMap": 204,
    "rxjs/add/operator/partition": 205,
    "rxjs/add/operator/retryWhen": 206,
    "rxjs/add/operator/share": 207,
    "rxjs/add/operator/startWith": 208,
    "rxjs/add/operator/switch": 209,
    "rxjs/add/operator/switchMap": 210,
    "rxjs/add/operator/take": 211,
    "rxjs/add/operator/takeUntil": 212,
    "rxjs/add/operator/throttleTime": 213,
    "rxjs/add/operator/withLatestFrom": 214,
    "rxjs/add/operator/zip": 215,
    "y-component/src/component-core": 287
  }],
  290: [function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" !== (void 0 === t ? "undefined" : s(t)) && "function" != typeof t ? e : t
    }

    function i(e, t) {
      if ("function" != typeof t && null !== t)throw new TypeError(
        "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : s(
          t)));
      e.prototype = Object.create(t && t.prototype,
        {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function o(e, t) {
      if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
            e,
            n.key,
            n)
        }
      }

      return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
      }
    }(), u = r.Kind = function e(t) {
      o(this, e), this.event = t
    };
    r.Push = function (e) {
      function t(e) {
        o(this, t);
        var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return r.href = e.currentTarget.href, r
      }

      return i(t, e), a(t, [{
        key: "type", get: function () {
          return "push"
        }
      }]), t
    }(u), r.Hint = function (e) {
      function t(e) {
        o(this, t);
        var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return r.href = e.currentTarget.href, r
      }

      return i(t, e), a(t, [{
        key: "type", get: function () {
          return "hint"
        }
      }]), t
    }(u), r.Pop = function (e) {
      function t(e) {
        o(this, t);
        var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return r.href = window.location.href, r
      }

      return i(t, e), a(t, [{
        key: "type", get: function () {
          return "pop"
        }
      }]), t
    }(u)
  }, {}],
  291: [function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" !== (void 0 === t ? "undefined" : s(t)) && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t)throw new TypeError(
        "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : s(
          t)));
      e.prototype = Object.create(t && t.prototype,
        {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
            e,
            n.key,
            n)
        }
      }

      return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
      }
    }(), u = function (e) {
      function t(e, r) {
        n(this, t);
        var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return o.setupComponent(e, r), o
      }

      return o(t, e), a(t, [{
        key: "setupDOM", value: function (e) {
          if (!e)throw Error("No element provided");
          return e
        }
      }]), t
    }((0, function (e) {
      return e && e.__esModule ? e : { default: e }
    }(e("../core")).default)());
    r.default = u
  }, { "../core": 289 }]
}, {}, [8]);
