;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      "use strict"
      function r(t, n, e, r, i, a, o, f) {
        var c,
          u = "function" == typeof t ? t.options : t
        if (
          (n && ((u.render = n), (u.staticRenderFns = e), (u._compiled = !0)),
          r && (u.functional = !0),
          a && (u._scopeId = "data-v-" + a),
          o
            ? ((c = function (t) {
                ;(t =
                  t ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  i && i.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(o)
              }),
              (u._ssrRegister = c))
            : i &&
              (c = f
                ? function () {
                    i.call(this, this.$root.$options.shadowRoot)
                  }
                : i),
          c)
        )
          if (u.functional) {
            u._injectStyles = c
            var s = u.render
            u.render = function (t, n) {
              return c.call(n), s(t, n)
            }
          } else {
            var h = u.beforeCreate
            u.beforeCreate = h ? [].concat(h, c) : [c]
          }
        return { exports: t, options: u }
      }
      e.d(n, "a", function () {
        return r
      })
    },
    function (t, n) {
      var e = (t.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")())
      "number" == typeof __g && (__g = e)
    },
    function (t, n) {
      t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
      }
    },
    function (t, n, e) {
      t.exports = !e(10)(function () {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function () {
              return 7
            },
          }).a
        )
      })
    },
    function (t, n) {
      t.exports = function (t) {
        try {
          return !!t()
        } catch (t) {
          return !0
        }
      }
    },
    function (t, n) {
      var e = {}.hasOwnProperty
      t.exports = function (t, n) {
        return e.call(t, n)
      }
    },
    function (t, n, e) {
      var r = e(8)
      t.exports = function (t) {
        if (!r(t)) throw TypeError(t + " is not an object!")
        return t
      }
    },
    function (t, n, e) {
      var r = e(28)("wks"),
        i = e(25),
        a = e(7).Symbol,
        o = "function" == typeof a
      ;(t.exports = function (t) {
        return r[t] || (r[t] = (o && a[t]) || (o ? a : i)("Symbol." + t))
      }).store = r
    },
    ,
    function (t, n, e) {
      var r = e(16),
        i = e(27)
      t.exports = e(9)
        ? function (t, n, e) {
            return r.f(t, n, i(1, e))
          }
        : function (t, n, e) {
            return (t[n] = e), t
          }
    },
    function (t, n, e) {
      var r = e(12),
        i = e(42),
        a = e(24),
        o = Object.defineProperty
      n.f = e(9)
        ? Object.defineProperty
        : function (t, n, e) {
            if ((r(t), (n = a(n, !0)), r(e), i))
              try {
                return o(t, n, e)
              } catch (t) {}
            if ("get" in e || "set" in e)
              throw TypeError("Accessors not supported!")
            return "value" in e && (t[n] = e.value), t
          }
    },
    function (t, n, e) {
      var r = e(7),
        i = e(23),
        a = e(15),
        o = e(21),
        f = e(35),
        c = function (t, n, e) {
          var u,
            s,
            h,
            l,
            d = t & c.F,
            p = t & c.G,
            _ = t & c.S,
            b = t & c.P,
            y = t & c.B,
            v = p ? r : _ ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
            g = p ? i : i[n] || (i[n] = {}),
            x = g.prototype || (g.prototype = {})
          for (u in (p && (e = n), e))
            (h = ((s = !d && v && void 0 !== v[u]) ? v : e)[u]),
              (l =
                y && s
                  ? f(h, r)
                  : b && "function" == typeof h
                  ? f(Function.call, h)
                  : h),
              v && o(v, u, h, t & c.U),
              g[u] != h && a(g, u, l),
              b && x[u] != h && (x[u] = h)
        }
      ;(r.core = i),
        (c.F = 1),
        (c.G = 2),
        (c.S = 4),
        (c.P = 8),
        (c.B = 16),
        (c.W = 32),
        (c.U = 64),
        (c.R = 128),
        (t.exports = c)
    },
    function (t, n, e) {
      var r = e(58),
        i = e(22)
      t.exports = function (t) {
        return r(i(t))
      }
    },
    ,
    ,
    function (t, n, e) {
      var r = e(7),
        i = e(15),
        a = e(11),
        o = e(25)("src"),
        f = e(70),
        c = ("" + f).split("toString")
      ;(e(23).inspectSource = function (t) {
        return f.call(t)
      }),
        (t.exports = function (t, n, e, f) {
          var u = "function" == typeof e
          u && (a(e, "name") || i(e, "name", n)),
            t[n] !== e &&
              (u && (a(e, o) || i(e, o, t[n] ? "" + t[n] : c.join(String(n)))),
              t === r
                ? (t[n] = e)
                : f
                ? t[n]
                  ? (t[n] = e)
                  : i(t, n, e)
                : (delete t[n], i(t, n, e)))
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && this[o]) || f.call(this)
        })
    },
    function (t, n) {
      t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on  " + t)
        return t
      }
    },
    function (t, n) {
      var e = (t.exports = { version: "2.6.9" })
      "number" == typeof __e && (__e = e)
    },
    function (t, n, e) {
      var r = e(8)
      t.exports = function (t, n) {
        if (!r(t)) return t
        var e, i
        if (n && "function" == typeof (e = t.toString) && !r((i = e.call(t))))
          return i
        if ("function" == typeof (e = t.valueOf) && !r((i = e.call(t))))
          return i
        if (!n && "function" == typeof (e = t.toString) && !r((i = e.call(t))))
          return i
        throw TypeError("Can't convert object to primitive value")
      }
    },
    function (t, n) {
      var e = 0,
        r = Math.random()
      t.exports = function (t) {
        return "Symbol(".concat(
          void 0 === t ? "" : t,
          ")_",
          (++e + r).toString(36)
        )
      }
    },
    function (t, n) {
      var e = {}.toString
      t.exports = function (t) {
        return e.call(t).slice(8, -1)
      }
    },
    function (t, n) {
      t.exports = function (t, n) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: n,
        }
      }
    },
    function (t, n, e) {
      var r = e(23),
        i = e(7),
        a = i["__core-js_shared__"] || (i["__core-js_shared__"] = {})
      ;(t.exports = function (t, n) {
        return a[t] || (a[t] = void 0 !== n ? n : {})
      })("versions", []).push({
        version: r.version,
        mode: e(34) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
      })
    },
    function (t, n) {
      var e = Math.ceil,
        r = Math.floor
      t.exports = function (t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : e)(t)
      }
    },
    function (t, n) {
      t.exports =
        "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
          ","
        )
    },
    ,
    ,
    ,
    function (t, n) {
      t.exports = !1
    },
    function (t, n, e) {
      var r = e(57)
      t.exports = function (t, n, e) {
        if ((r(t), void 0 === n)) return t
        switch (e) {
          case 1:
            return function (e) {
              return t.call(n, e)
            }
          case 2:
            return function (e, r) {
              return t.call(n, e, r)
            }
          case 3:
            return function (e, r, i) {
              return t.call(n, e, r, i)
            }
        }
        return function () {
          return t.apply(n, arguments)
        }
      }
    },
    function (t, n, e) {
      var r = e(45),
        i = e(30)
      t.exports =
        Object.keys ||
        function (t) {
          return r(t, i)
        }
    },
    function (t, n, e) {
      var r = e(28)("keys"),
        i = e(25)
      t.exports = function (t) {
        return r[t] || (r[t] = i(t))
      }
    },
    function (t, n, e) {
      var r = e(47),
        i = e(27),
        a = e(18),
        o = e(24),
        f = e(11),
        c = e(42),
        u = Object.getOwnPropertyDescriptor
      n.f = e(9)
        ? u
        : function (t, n) {
            if (((t = a(t)), (n = o(n, !0)), c))
              try {
                return u(t, n)
              } catch (t) {}
            if (f(t, n)) return i(!r.f.call(t, n), t[n])
          }
    },
    ,
    ,
    ,
    function (t, n, e) {
      t.exports =
        !e(9) &&
        !e(10)(function () {
          return (
            7 !=
            Object.defineProperty(e(43)("div"), "a", {
              get: function () {
                return 7
              },
            }).a
          )
        })
    },
    function (t, n, e) {
      var r = e(8),
        i = e(7).document,
        a = r(i) && r(i.createElement)
      t.exports = function (t) {
        return a ? i.createElement(t) : {}
      }
    },
    function (t, n, e) {
      var r = e(22)
      t.exports = function (t) {
        return Object(r(t))
      }
    },
    function (t, n, e) {
      var r = e(11),
        i = e(18),
        a = e(59)(!1),
        o = e(37)("IE_PROTO")
      t.exports = function (t, n) {
        var e,
          f = i(t),
          c = 0,
          u = []
        for (e in f) e != o && r(f, e) && u.push(e)
        for (; n.length > c; ) r(f, (e = n[c++])) && (~a(u, e) || u.push(e))
        return u
      }
    },
    function (t, n, e) {
      var r = e(29),
        i = Math.min
      t.exports = function (t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
      }
    },
    function (t, n) {
      n.f = {}.propertyIsEnumerable
    },
    function (t, n, e) {
      var r = e(12),
        i = e(74),
        a = e(30),
        o = e(37)("IE_PROTO"),
        f = function () {},
        c = function () {
          var t,
            n = e(43)("iframe"),
            r = a.length
          for (
            n.style.display = "none",
              e(75).appendChild(n),
              n.src = "javascript:",
              (t = n.contentWindow.document).open(),
              t.write("<script>document.F=Object</script>"),
              t.close(),
              c = t.F;
            r--;

          )
            delete c.prototype[a[r]]
          return c()
        }
      t.exports =
        Object.create ||
        function (t, n) {
          var e
          return (
            null !== t
              ? ((f.prototype = r(t)),
                (e = new f()),
                (f.prototype = null),
                (e[o] = t))
              : (e = c()),
            void 0 === n ? e : i(e, n)
          )
        }
    },
    function (t, n, e) {
      var r = e(45),
        i = e(30).concat("length", "prototype")
      n.f =
        Object.getOwnPropertyNames ||
        function (t) {
          return r(t, i)
        }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      var r = e(17),
        i = e(22),
        a = e(10),
        o = e(71),
        f = "[" + o + "]",
        c = RegExp("^" + f + f + "*"),
        u = RegExp(f + f + "*$"),
        s = function (t, n, e) {
          var i = {},
            f = a(function () {
              return !!o[t]() || "​" != "​"[t]()
            }),
            c = (i[t] = f ? n(h) : o[t])
          e && (i[e] = c), r(r.P + r.F * f, "String", i)
        },
        h = (s.trim = function (t, n) {
          return (
            (t = String(i(t))),
            1 & n && (t = t.replace(c, "")),
            2 & n && (t = t.replace(u, "")),
            t
          )
        })
      t.exports = s
    },
    function (t, n) {
      t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!")
        return t
      }
    },
    function (t, n, e) {
      var r = e(26)
      t.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function (t) {
            return "String" == r(t) ? t.split("") : Object(t)
          }
    },
    function (t, n, e) {
      var r = e(18),
        i = e(46),
        a = e(73)
      t.exports = function (t) {
        return function (n, e, o) {
          var f,
            c = r(n),
            u = i(c.length),
            s = a(o, u)
          if (t && e != e) {
            for (; u > s; ) if ((f = c[s++]) != f) return !0
          } else
            for (; u > s; s++)
              if ((t || s in c) && c[s] === e) return t || s || 0
          return !t && -1
        }
      }
    },
    function (t, n, e) {
      "use strict"
      var r = e(7),
        i = e(11),
        a = e(26),
        o = e(77),
        f = e(24),
        c = e(10),
        u = e(49).f,
        s = e(38).f,
        h = e(16).f,
        l = e(56).trim,
        d = r.Number,
        p = d,
        _ = d.prototype,
        b = "Number" == a(e(48)(_)),
        y = "trim" in String.prototype,
        v = function (t) {
          var n = f(t, !1)
          if ("string" == typeof n && n.length > 2) {
            var e,
              r,
              i,
              a = (n = y ? n.trim() : l(n, 3)).charCodeAt(0)
            if (43 === a || 45 === a) {
              if (88 === (e = n.charCodeAt(2)) || 120 === e) return NaN
            } else if (48 === a) {
              switch (n.charCodeAt(1)) {
                case 66:
                case 98:
                  ;(r = 2), (i = 49)
                  break
                case 79:
                case 111:
                  ;(r = 8), (i = 55)
                  break
                default:
                  return +n
              }
              for (var o, c = n.slice(2), u = 0, s = c.length; u < s; u++)
                if ((o = c.charCodeAt(u)) < 48 || o > i) return NaN
              return parseInt(c, r)
            }
          }
          return +n
        }
      if (!d(" 0o1") || !d("0b1") || d("+0x1")) {
        d = function (t) {
          var n = arguments.length < 1 ? 0 : t,
            e = this
          return e instanceof d &&
            (b
              ? c(function () {
                  _.valueOf.call(e)
                })
              : "Number" != a(e))
            ? o(new p(v(n)), e, d)
            : v(n)
        }
        for (
          var g,
            x = e(9)
              ? u(p)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                  ","
                ),
            m = 0;
          x.length > m;
          m++
        )
          i(p, (g = x[m])) && !i(d, g) && h(d, g, s(p, g))
        ;(d.prototype = _), (_.constructor = d), e(21)(r, "Number", d)
      }
    },
    function (t, n, e) {
      t.exports = !e(122)(function () {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function () {
              return 7
            },
          }).a
        )
      })
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      t.exports = e(28)("native-function-to-string", Function.toString)
    },
    function (t, n) {
      t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
    },
    function (t, n, e) {
      var r = e(16).f,
        i = e(11),
        a = e(13)("toStringTag")
      t.exports = function (t, n, e) {
        t &&
          !i((t = e ? t : t.prototype), a) &&
          r(t, a, { configurable: !0, value: n })
      }
    },
    function (t, n, e) {
      var r = e(29),
        i = Math.max,
        a = Math.min
      t.exports = function (t, n) {
        return (t = r(t)) < 0 ? i(t + n, 0) : a(t, n)
      }
    },
    function (t, n, e) {
      var r = e(16),
        i = e(12),
        a = e(36)
      t.exports = e(9)
        ? Object.defineProperties
        : function (t, n) {
            i(t)
            for (var e, o = a(n), f = o.length, c = 0; f > c; )
              r.f(t, (e = o[c++]), n[e])
            return t
          }
    },
    function (t, n, e) {
      var r = e(7).document
      t.exports = r && r.documentElement
    },
    function (t, n) {
      t.exports = {}
    },
    function (t, n, e) {
      var r = e(8),
        i = e(78).set
      t.exports = function (t, n, e) {
        var a,
          o = n.constructor
        return (
          o !== e &&
            "function" == typeof o &&
            (a = o.prototype) !== e.prototype &&
            r(a) &&
            i &&
            i(t, a),
          t
        )
      }
    },
    function (t, n, e) {
      var r = e(8),
        i = e(12),
        a = function (t, n) {
          if ((i(t), !r(n) && null !== n))
            throw TypeError(n + ": can't set as prototype!")
        }
      t.exports = {
        set:
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function (t, n, r) {
                try {
                  ;(r = e(35)(
                    Function.call,
                    e(38).f(Object.prototype, "__proto__").set,
                    2
                  ))(t, []),
                    (n = !(t instanceof Array))
                } catch (t) {
                  n = !0
                }
                return function (t, e) {
                  return a(t, e), n ? (t.__proto__ = e) : r(t, e), t
                }
              })({}, !1)
            : void 0),
        check: a,
      }
    },
    function (t, n) {
      t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      "use strict"
      e(56)("trim", function (t) {
        return function () {
          return t(this, 3)
        }
      })
    },
    function (t, n, e) {
      "use strict"
      var r = e(17),
        i = e(57),
        a = e(44),
        o = e(10),
        f = [].sort,
        c = [1, 2, 3]
      r(
        r.P +
          r.F *
            (o(function () {
              c.sort(void 0)
            }) ||
              !o(function () {
                c.sort(null)
              }) ||
              !e(108)(f)),
        "Array",
        {
          sort: function (t) {
            return void 0 === t ? f.call(a(this)) : f.call(a(this), i(t))
          },
        }
      )
    },
    function (t, n, e) {
      "use strict"
      var r = e(10)
      t.exports = function (t, n) {
        return (
          !!t &&
          r(function () {
            n ? t.call(null, function () {}, 1) : t.call(null)
          })
        )
      }
    },
    function (t, n, e) {
      e(110)("asyncIterator")
    },
    function (t, n, e) {
      var r = e(7),
        i = e(23),
        a = e(34),
        o = e(111),
        f = e(16).f
      t.exports = function (t) {
        var n = i.Symbol || (i.Symbol = a ? {} : r.Symbol || {})
        "_" == t.charAt(0) || t in n || f(n, t, { value: o.f(t) })
      }
    },
    function (t, n, e) {
      n.f = e(13)
    },
    function (t, n, e) {
      "use strict"
      var r = e(7),
        i = e(11),
        a = e(9),
        o = e(17),
        f = e(21),
        c = e(214).KEY,
        u = e(10),
        s = e(28),
        h = e(72),
        l = e(25),
        d = e(13),
        p = e(111),
        _ = e(110),
        b = e(215),
        y = e(114),
        v = e(12),
        g = e(8),
        x = e(44),
        m = e(18),
        w = e(24),
        M = e(27),
        S = e(48),
        N = e(216),
        T = e(38),
        A = e(113),
        C = e(16),
        E = e(36),
        k = T.f,
        P = C.f,
        U = N.f,
        L = r.Symbol,
        O = r.JSON,
        j = O && O.stringify,
        R = d("_hidden"),
        D = d("toPrimitive"),
        F = {}.propertyIsEnumerable,
        I = s("symbol-registry"),
        Y = s("symbols"),
        q = s("op-symbols"),
        $ = Object.prototype,
        H = "function" == typeof L && !!A.f,
        z = r.QObject,
        X = !z || !z.prototype || !z.prototype.findChild,
        V =
          a &&
          u(function () {
            return (
              7 !=
              S(
                P({}, "a", {
                  get: function () {
                    return P(this, "a", { value: 7 }).a
                  },
                })
              ).a
            )
          })
            ? function (t, n, e) {
                var r = k($, n)
                r && delete $[n], P(t, n, e), r && t !== $ && P($, n, r)
              }
            : P,
        B = function (t) {
          var n = (Y[t] = S(L.prototype))
          return (n._k = t), n
        },
        Z =
          H && "symbol" == typeof L.iterator
            ? function (t) {
                return "symbol" == typeof t
              }
            : function (t) {
                return t instanceof L
              },
        W = function (t, n, e) {
          return (
            t === $ && W(q, n, e),
            v(t),
            (n = w(n, !0)),
            v(e),
            i(Y, n)
              ? (e.enumerable
                  ? (i(t, R) && t[R][n] && (t[R][n] = !1),
                    (e = S(e, { enumerable: M(0, !1) })))
                  : (i(t, R) || P(t, R, M(1, {})), (t[R][n] = !0)),
                V(t, n, e))
              : P(t, n, e)
          )
        },
        G = function (t, n) {
          v(t)
          for (var e, r = b((n = m(n))), i = 0, a = r.length; a > i; )
            W(t, (e = r[i++]), n[e])
          return t
        },
        J = function (t) {
          var n = F.call(this, (t = w(t, !0)))
          return (
            !(this === $ && i(Y, t) && !i(q, t)) &&
            (!(n || !i(this, t) || !i(Y, t) || (i(this, R) && this[R][t])) || n)
          )
        },
        Q = function (t, n) {
          if (((t = m(t)), (n = w(n, !0)), t !== $ || !i(Y, n) || i(q, n))) {
            var e = k(t, n)
            return (
              !e || !i(Y, n) || (i(t, R) && t[R][n]) || (e.enumerable = !0), e
            )
          }
        },
        K = function (t) {
          for (var n, e = U(m(t)), r = [], a = 0; e.length > a; )
            i(Y, (n = e[a++])) || n == R || n == c || r.push(n)
          return r
        },
        tt = function (t) {
          for (
            var n, e = t === $, r = U(e ? q : m(t)), a = [], o = 0;
            r.length > o;

          )
            !i(Y, (n = r[o++])) || (e && !i($, n)) || a.push(Y[n])
          return a
        }
      H ||
        (f(
          (L = function () {
            if (this instanceof L)
              throw TypeError("Symbol is not a constructor!")
            var t = l(arguments.length > 0 ? arguments[0] : void 0),
              n = function (e) {
                this === $ && n.call(q, e),
                  i(this, R) && i(this[R], t) && (this[R][t] = !1),
                  V(this, t, M(1, e))
              }
            return a && X && V($, t, { configurable: !0, set: n }), B(t)
          }).prototype,
          "toString",
          function () {
            return this._k
          }
        ),
        (T.f = Q),
        (C.f = W),
        (e(49).f = N.f = K),
        (e(47).f = J),
        (A.f = tt),
        a && !e(34) && f($, "propertyIsEnumerable", J, !0),
        (p.f = function (t) {
          return B(d(t))
        })),
        o(o.G + o.W + o.F * !H, { Symbol: L })
      for (
        var nt =
            "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
              ","
            ),
          et = 0;
        nt.length > et;

      )
        d(nt[et++])
      for (var rt = E(d.store), it = 0; rt.length > it; ) _(rt[it++])
      o(o.S + o.F * !H, "Symbol", {
        for: function (t) {
          return i(I, (t += "")) ? I[t] : (I[t] = L(t))
        },
        keyFor: function (t) {
          if (!Z(t)) throw TypeError(t + " is not a symbol!")
          for (var n in I) if (I[n] === t) return n
        },
        useSetter: function () {
          X = !0
        },
        useSimple: function () {
          X = !1
        },
      }),
        o(o.S + o.F * !H, "Object", {
          create: function (t, n) {
            return void 0 === n ? S(t) : G(S(t), n)
          },
          defineProperty: W,
          defineProperties: G,
          getOwnPropertyDescriptor: Q,
          getOwnPropertyNames: K,
          getOwnPropertySymbols: tt,
        })
      var at = u(function () {
        A.f(1)
      })
      o(o.S + o.F * at, "Object", {
        getOwnPropertySymbols: function (t) {
          return A.f(x(t))
        },
      }),
        O &&
          o(
            o.S +
              o.F *
                (!H ||
                  u(function () {
                    var t = L()
                    return (
                      "[null]" != j([t]) ||
                      "{}" != j({ a: t }) ||
                      "{}" != j(Object(t))
                    )
                  })),
            "JSON",
            {
              stringify: function (t) {
                for (var n, e, r = [t], i = 1; arguments.length > i; )
                  r.push(arguments[i++])
                if (((e = n = r[1]), (g(n) || void 0 !== t) && !Z(t)))
                  return (
                    y(n) ||
                      (n = function (t, n) {
                        if (
                          ("function" == typeof e && (n = e.call(this, t, n)),
                          !Z(n))
                        )
                          return n
                      }),
                    (r[1] = n),
                    j.apply(O, r)
                  )
              },
            }
          ),
        L.prototype[D] || e(15)(L.prototype, D, L.prototype.valueOf),
        h(L, "Symbol"),
        h(Math, "Math", !0),
        h(r.JSON, "JSON", !0)
    },
    function (t, n) {
      n.f = Object.getOwnPropertySymbols
    },
    function (t, n, e) {
      var r = e(26)
      t.exports =
        Array.isArray ||
        function (t) {
          return "Array" == r(t)
        }
    },
    function (t, n, e) {
      for (
        var r = e(217),
          i = e(36),
          a = e(21),
          o = e(7),
          f = e(15),
          c = e(76),
          u = e(13),
          s = u("iterator"),
          h = u("toStringTag"),
          l = c.Array,
          d = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1,
          },
          p = i(d),
          _ = 0;
        _ < p.length;
        _++
      ) {
        var b,
          y = p[_],
          v = d[y],
          g = o[y],
          x = g && g.prototype
        if (x && (x[s] || f(x, s, l), x[h] || f(x, h, y), (c[y] = l), v))
          for (b in r) x[b] || a(x, b, r[b], !0)
      }
    },
    function (t, n, e) {
      var r = e(13)("unscopables"),
        i = Array.prototype
      null == i[r] && e(15)(i, r, {}),
        (t.exports = function (t) {
          i[r][t] = !0
        })
    },
    function (t, n, e) {
      "use strict"
      var r = e(17),
        i = e(222)(2)
      r(r.P + r.F * !e(108)([].filter, !0), "Array", {
        filter: function (t) {
          return i(this, t, arguments[1])
        },
      })
    },
    function (t, n, e) {
      t.exports = e(227)
    },
    function (t, n) {
      var e = (t.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")())
      "number" == typeof __g && (__g = e)
    },
    function (t, n) {
      var e = (t.exports = { version: "2.6.9" })
      "number" == typeof __e && (__e = e)
    },
    function (t, n, e) {
      var r = e(233),
        i = e(234),
        a = e(236),
        o = Object.defineProperty
      n.f = e(61)
        ? Object.defineProperty
        : function (t, n, e) {
            if ((r(t), (n = a(n, !0)), r(e), i))
              try {
                return o(t, n, e)
              } catch (t) {}
            if ("get" in e || "set" in e)
              throw TypeError("Accessors not supported!")
            return "value" in e && (t[n] = e.value), t
          }
    },
    function (t, n) {
      t.exports = function (t) {
        try {
          return !!t()
        } catch (t) {
          return !0
        }
      }
    },
    function (t, n, e) {
      "use strict"
      var r,
        i,
        a = e(246),
        o = RegExp.prototype.exec,
        f = String.prototype.replace,
        c = o,
        u =
          ((r = /a/),
          (i = /b*/g),
          o.call(r, "a"),
          o.call(i, "a"),
          0 !== r.lastIndex || 0 !== i.lastIndex),
        s = void 0 !== /()??/.exec("")[1]
      ;(u || s) &&
        (c = function (t) {
          var n,
            e,
            r,
            i,
            c = this
          return (
            s && (e = new RegExp("^" + c.source + "$(?!\\s)", a.call(c))),
            u && (n = c.lastIndex),
            (r = o.call(c, t)),
            u && r && (c.lastIndex = c.global ? r.index + r[0].length : n),
            s &&
              r &&
              r.length > 1 &&
              f.call(r[0], e, function () {
                for (i = 1; i < arguments.length - 2; i++)
                  void 0 === arguments[i] && (r[i] = void 0)
              }),
            r
          )
        }),
        (t.exports = c)
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      var r = e(25)("meta"),
        i = e(8),
        a = e(11),
        o = e(16).f,
        f = 0,
        c =
          Object.isExtensible ||
          function () {
            return !0
          },
        u = !e(10)(function () {
          return c(Object.preventExtensions({}))
        }),
        s = function (t) {
          o(t, r, { value: { i: "O" + ++f, w: {} } })
        },
        h = (t.exports = {
          KEY: r,
          NEED: !1,
          fastKey: function (t, n) {
            if (!i(t))
              return "symbol" == typeof t
                ? t
                : ("string" == typeof t ? "S" : "P") + t
            if (!a(t, r)) {
              if (!c(t)) return "F"
              if (!n) return "E"
              s(t)
            }
            return t[r].i
          },
          getWeak: function (t, n) {
            if (!a(t, r)) {
              if (!c(t)) return !0
              if (!n) return !1
              s(t)
            }
            return t[r].w
          },
          onFreeze: function (t) {
            return u && h.NEED && c(t) && !a(t, r) && s(t), t
          },
        })
    },
    function (t, n, e) {
      var r = e(36),
        i = e(113),
        a = e(47)
      t.exports = function (t) {
        var n = r(t),
          e = i.f
        if (e)
          for (var o, f = e(t), c = a.f, u = 0; f.length > u; )
            c.call(t, (o = f[u++])) && n.push(o)
        return n
      }
    },
    function (t, n, e) {
      var r = e(18),
        i = e(49).f,
        a = {}.toString,
        o =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : []
      t.exports.f = function (t) {
        return o && "[object Window]" == a.call(t)
          ? (function (t) {
              try {
                return i(t)
              } catch (t) {
                return o.slice()
              }
            })(t)
          : i(r(t))
      }
    },
    function (t, n, e) {
      "use strict"
      var r = e(116),
        i = e(218),
        a = e(76),
        o = e(18)
      ;(t.exports = e(219)(
        Array,
        "Array",
        function (t, n) {
          ;(this._t = o(t)), (this._i = 0), (this._k = n)
        },
        function () {
          var t = this._t,
            n = this._k,
            e = this._i++
          return !t || e >= t.length
            ? ((this._t = void 0), i(1))
            : i(0, "keys" == n ? e : "values" == n ? t[e] : [e, t[e]])
        },
        "values"
      )),
        (a.Arguments = a.Array),
        r("keys"),
        r("values"),
        r("entries")
    },
    function (t, n) {
      t.exports = function (t, n) {
        return { value: n, done: !!t }
      }
    },
    function (t, n, e) {
      "use strict"
      var r = e(34),
        i = e(17),
        a = e(21),
        o = e(15),
        f = e(76),
        c = e(220),
        u = e(72),
        s = e(221),
        h = e(13)("iterator"),
        l = !([].keys && "next" in [].keys()),
        d = function () {
          return this
        }
      t.exports = function (t, n, e, p, _, b, y) {
        c(e, n, p)
        var v,
          g,
          x,
          m = function (t) {
            if (!l && t in N) return N[t]
            switch (t) {
              case "keys":
              case "values":
                return function () {
                  return new e(this, t)
                }
            }
            return function () {
              return new e(this, t)
            }
          },
          w = n + " Iterator",
          M = "values" == _,
          S = !1,
          N = t.prototype,
          T = N[h] || N["@@iterator"] || (_ && N[_]),
          A = T || m(_),
          C = _ ? (M ? m("entries") : A) : void 0,
          E = ("Array" == n && N.entries) || T
        if (
          (E &&
            (x = s(E.call(new t()))) !== Object.prototype &&
            x.next &&
            (u(x, w, !0), r || "function" == typeof x[h] || o(x, h, d)),
          M &&
            T &&
            "values" !== T.name &&
            ((S = !0),
            (A = function () {
              return T.call(this)
            })),
          (r && !y) || (!l && !S && N[h]) || o(N, h, A),
          (f[n] = A),
          (f[w] = d),
          _)
        )
          if (
            ((v = {
              values: M ? A : m("values"),
              keys: b ? A : m("keys"),
              entries: C,
            }),
            y)
          )
            for (g in v) g in N || a(N, g, v[g])
          else i(i.P + i.F * (l || S), n, v)
        return v
      }
    },
    function (t, n, e) {
      "use strict"
      var r = e(48),
        i = e(27),
        a = e(72),
        o = {}
      e(15)(o, e(13)("iterator"), function () {
        return this
      }),
        (t.exports = function (t, n, e) {
          ;(t.prototype = r(o, { next: i(1, e) })), a(t, n + " Iterator")
        })
    },
    function (t, n, e) {
      var r = e(11),
        i = e(44),
        a = e(37)("IE_PROTO"),
        o = Object.prototype
      t.exports =
        Object.getPrototypeOf ||
        function (t) {
          return (
            (t = i(t)),
            r(t, a)
              ? t[a]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? o
              : null
          )
        }
    },
    function (t, n, e) {
      var r = e(35),
        i = e(58),
        a = e(44),
        o = e(46),
        f = e(223)
      t.exports = function (t, n) {
        var e = 1 == t,
          c = 2 == t,
          u = 3 == t,
          s = 4 == t,
          h = 6 == t,
          l = 5 == t || h,
          d = n || f
        return function (n, f, p) {
          for (
            var _,
              b,
              y = a(n),
              v = i(y),
              g = r(f, p, 3),
              x = o(v.length),
              m = 0,
              w = e ? d(n, x) : c ? d(n, 0) : void 0;
            x > m;
            m++
          )
            if ((l || m in v) && ((b = g((_ = v[m]), m, y)), t))
              if (e) w[m] = b
              else if (b)
                switch (t) {
                  case 3:
                    return !0
                  case 5:
                    return _
                  case 6:
                    return m
                  case 2:
                    w.push(_)
                }
              else if (s) return !1
          return h ? -1 : u || s ? s : w
        }
      }
    },
    function (t, n, e) {
      var r = e(224)
      t.exports = function (t, n) {
        return new (r(t))(n)
      }
    },
    function (t, n, e) {
      var r = e(8),
        i = e(114),
        a = e(13)("species")
      t.exports = function (t) {
        var n
        return (
          i(t) &&
            ("function" != typeof (n = t.constructor) ||
              (n !== Array && !i(n.prototype)) ||
              (n = void 0),
            r(n) && null === (n = n[a]) && (n = void 0)),
          void 0 === n ? Array : n
        )
      }
    },
    function (t, n, e) {
      "use strict"
      function r(t, n) {
        if (!(t instanceof n))
          throw new TypeError("Cannot call a class as a function")
      }
      e.d(n, "a", function () {
        return r
      })
    },
    function (t, n, e) {
      "use strict"
      e.d(n, "a", function () {
        return o
      })
      var r = e(118),
        i = e.n(r)
      function a(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            i()(t, r.key, r)
        }
      }
      function o(t, n, e) {
        return n && a(t.prototype, n), e && a(t, e), t
      }
    },
    function (t, n, e) {
      e(228)
      var r = e(120).Object
      t.exports = function (t, n, e) {
        return r.defineProperty(t, n, e)
      }
    },
    function (t, n, e) {
      var r = e(229)
      r(r.S + r.F * !e(61), "Object", { defineProperty: e(121).f })
    },
    function (t, n, e) {
      var r = e(119),
        i = e(120),
        a = e(230),
        o = e(232),
        f = e(238),
        c = function (t, n, e) {
          var u,
            s,
            h,
            l = t & c.F,
            d = t & c.G,
            p = t & c.S,
            _ = t & c.P,
            b = t & c.B,
            y = t & c.W,
            v = d ? i : i[n] || (i[n] = {}),
            g = v.prototype,
            x = d ? r : p ? r[n] : (r[n] || {}).prototype
          for (u in (d && (e = n), e))
            ((s = !l && x && void 0 !== x[u]) && f(v, u)) ||
              ((h = s ? x[u] : e[u]),
              (v[u] =
                d && "function" != typeof x[u]
                  ? e[u]
                  : b && s
                  ? a(h, r)
                  : y && x[u] == h
                  ? (function (t) {
                      var n = function (n, e, r) {
                        if (this instanceof t) {
                          switch (arguments.length) {
                            case 0:
                              return new t()
                            case 1:
                              return new t(n)
                            case 2:
                              return new t(n, e)
                          }
                          return new t(n, e, r)
                        }
                        return t.apply(this, arguments)
                      }
                      return (n.prototype = t.prototype), n
                    })(h)
                  : _ && "function" == typeof h
                  ? a(Function.call, h)
                  : h),
              _ &&
                (((v.virtual || (v.virtual = {}))[u] = h),
                t & c.R && g && !g[u] && o(g, u, h)))
        }
      ;(c.F = 1),
        (c.G = 2),
        (c.S = 4),
        (c.P = 8),
        (c.B = 16),
        (c.W = 32),
        (c.U = 64),
        (c.R = 128),
        (t.exports = c)
    },
    function (t, n, e) {
      var r = e(231)
      t.exports = function (t, n, e) {
        if ((r(t), void 0 === n)) return t
        switch (e) {
          case 1:
            return function (e) {
              return t.call(n, e)
            }
          case 2:
            return function (e, r) {
              return t.call(n, e, r)
            }
          case 3:
            return function (e, r, i) {
              return t.call(n, e, r, i)
            }
        }
        return function () {
          return t.apply(n, arguments)
        }
      }
    },
    function (t, n) {
      t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!")
        return t
      }
    },
    function (t, n, e) {
      var r = e(121),
        i = e(237)
      t.exports = e(61)
        ? function (t, n, e) {
            return r.f(t, n, i(1, e))
          }
        : function (t, n, e) {
            return (t[n] = e), t
          }
    },
    function (t, n, e) {
      var r = e(79)
      t.exports = function (t) {
        if (!r(t)) throw TypeError(t + " is not an object!")
        return t
      }
    },
    function (t, n, e) {
      t.exports =
        !e(61) &&
        !e(122)(function () {
          return (
            7 !=
            Object.defineProperty(e(235)("div"), "a", {
              get: function () {
                return 7
              },
            }).a
          )
        })
    },
    function (t, n, e) {
      var r = e(79),
        i = e(119).document,
        a = r(i) && r(i.createElement)
      t.exports = function (t) {
        return a ? i.createElement(t) : {}
      }
    },
    function (t, n, e) {
      var r = e(79)
      t.exports = function (t, n) {
        if (!r(t)) return t
        var e, i
        if (n && "function" == typeof (e = t.toString) && !r((i = e.call(t))))
          return i
        if ("function" == typeof (e = t.valueOf) && !r((i = e.call(t))))
          return i
        if (!n && "function" == typeof (e = t.toString) && !r((i = e.call(t))))
          return i
        throw TypeError("Can't convert object to primitive value")
      }
    },
    function (t, n) {
      t.exports = function (t, n) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: n,
        }
      }
    },
    function (t, n) {
      var e = {}.hasOwnProperty
      t.exports = function (t, n) {
        return e.call(t, n)
      }
    },
    function (t, n, e) {
      "use strict"
      var r = e(12),
        i = e(44),
        a = e(46),
        o = e(29),
        f = e(240),
        c = e(242),
        u = Math.max,
        s = Math.min,
        h = Math.floor,
        l = /\$([$&`']|\d\d?|<[^>]*>)/g,
        d = /\$([$&`']|\d\d?)/g
      e(244)("replace", 2, function (t, n, e, p) {
        return [
          function (r, i) {
            var a = t(this),
              o = null == r ? void 0 : r[n]
            return void 0 !== o ? o.call(r, a, i) : e.call(String(a), r, i)
          },
          function (t, n) {
            var i = p(e, t, this, n)
            if (i.done) return i.value
            var h = r(t),
              l = String(this),
              d = "function" == typeof n
            d || (n = String(n))
            var b = h.global
            if (b) {
              var y = h.unicode
              h.lastIndex = 0
            }
            for (var v = []; ; ) {
              var g = c(h, l)
              if (null === g) break
              if ((v.push(g), !b)) break
              "" === String(g[0]) && (h.lastIndex = f(l, a(h.lastIndex), y))
            }
            for (var x, m = "", w = 0, M = 0; M < v.length; M++) {
              g = v[M]
              for (
                var S = String(g[0]),
                  N = u(s(o(g.index), l.length), 0),
                  T = [],
                  A = 1;
                A < g.length;
                A++
              )
                T.push(void 0 === (x = g[A]) ? x : String(x))
              var C = g.groups
              if (d) {
                var E = [S].concat(T, N, l)
                void 0 !== C && E.push(C)
                var k = String(n.apply(void 0, E))
              } else k = _(S, l, N, T, C, n)
              N >= w && ((m += l.slice(w, N) + k), (w = N + S.length))
            }
            return m + l.slice(w)
          },
        ]
        function _(t, n, r, a, o, f) {
          var c = r + t.length,
            u = a.length,
            s = d
          return (
            void 0 !== o && ((o = i(o)), (s = l)),
            e.call(f, s, function (e, i) {
              var f
              switch (i.charAt(0)) {
                case "$":
                  return "$"
                case "&":
                  return t
                case "`":
                  return n.slice(0, r)
                case "'":
                  return n.slice(c)
                case "<":
                  f = o[i.slice(1, -1)]
                  break
                default:
                  var s = +i
                  if (0 === s) return e
                  if (s > u) {
                    var l = h(s / 10)
                    return 0 === l
                      ? e
                      : l <= u
                      ? void 0 === a[l - 1]
                        ? i.charAt(1)
                        : a[l - 1] + i.charAt(1)
                      : e
                  }
                  f = a[s - 1]
              }
              return void 0 === f ? "" : f
            })
          )
        }
      })
    },
    function (t, n, e) {
      "use strict"
      var r = e(241)(!0)
      t.exports = function (t, n, e) {
        return n + (e ? r(t, n).length : 1)
      }
    },
    function (t, n, e) {
      var r = e(29),
        i = e(22)
      t.exports = function (t) {
        return function (n, e) {
          var a,
            o,
            f = String(i(n)),
            c = r(e),
            u = f.length
          return c < 0 || c >= u
            ? t
              ? ""
              : void 0
            : (a = f.charCodeAt(c)) < 55296 ||
              a > 56319 ||
              c + 1 === u ||
              (o = f.charCodeAt(c + 1)) < 56320 ||
              o > 57343
            ? t
              ? f.charAt(c)
              : a
            : t
            ? f.slice(c, c + 2)
            : o - 56320 + ((a - 55296) << 10) + 65536
        }
      }
    },
    function (t, n, e) {
      "use strict"
      var r = e(243),
        i = RegExp.prototype.exec
      t.exports = function (t, n) {
        var e = t.exec
        if ("function" == typeof e) {
          var a = e.call(t, n)
          if ("object" != typeof a)
            throw new TypeError(
              "RegExp exec method returned something other than an Object or null"
            )
          return a
        }
        if ("RegExp" !== r(t))
          throw new TypeError("RegExp#exec called on incompatible receiver")
        return i.call(t, n)
      }
    },
    function (t, n, e) {
      var r = e(26),
        i = e(13)("toStringTag"),
        a =
          "Arguments" ==
          r(
            (function () {
              return arguments
            })()
          )
      t.exports = function (t) {
        var n, e, o
        return void 0 === t
          ? "Undefined"
          : null === t
          ? "Null"
          : "string" ==
            typeof (e = (function (t, n) {
              try {
                return t[n]
              } catch (t) {}
            })((n = Object(t)), i))
          ? e
          : a
          ? r(n)
          : "Object" == (o = r(n)) && "function" == typeof n.callee
          ? "Arguments"
          : o
      }
    },
    function (t, n, e) {
      "use strict"
      e(245)
      var r = e(21),
        i = e(15),
        a = e(10),
        o = e(22),
        f = e(13),
        c = e(123),
        u = f("species"),
        s = !a(function () {
          var t = /./
          return (
            (t.exec = function () {
              var t = []
              return (t.groups = { a: "7" }), t
            }),
            "7" !== "".replace(t, "$<a>")
          )
        }),
        h = (function () {
          var t = /(?:)/,
            n = t.exec
          t.exec = function () {
            return n.apply(this, arguments)
          }
          var e = "ab".split(t)
          return 2 === e.length && "a" === e[0] && "b" === e[1]
        })()
      t.exports = function (t, n, e) {
        var l = f(t),
          d = !a(function () {
            var n = {}
            return (
              (n[l] = function () {
                return 7
              }),
              7 != ""[t](n)
            )
          }),
          p = d
            ? !a(function () {
                var n = !1,
                  e = /a/
                return (
                  (e.exec = function () {
                    return (n = !0), null
                  }),
                  "split" === t &&
                    ((e.constructor = {}),
                    (e.constructor[u] = function () {
                      return e
                    })),
                  e[l](""),
                  !n
                )
              })
            : void 0
        if (!d || !p || ("replace" === t && !s) || ("split" === t && !h)) {
          var _ = /./[l],
            b = e(o, l, ""[t], function (t, n, e, r, i) {
              return n.exec === c
                ? d && !i
                  ? { done: !0, value: _.call(n, e, r) }
                  : { done: !0, value: t.call(e, n, r) }
                : { done: !1 }
            }),
            y = b[0],
            v = b[1]
          r(String.prototype, t, y),
            i(
              RegExp.prototype,
              l,
              2 == n
                ? function (t, n) {
                    return v.call(t, this, n)
                  }
                : function (t) {
                    return v.call(t, this)
                  }
            )
        }
      }
    },
    function (t, n, e) {
      "use strict"
      var r = e(123)
      e(17)(
        { target: "RegExp", proto: !0, forced: r !== /./.exec },
        { exec: r }
      )
    },
    function (t, n, e) {
      "use strict"
      var r = e(12)
      t.exports = function () {
        var t = r(this),
          n = ""
        return (
          t.global && (n += "g"),
          t.ignoreCase && (n += "i"),
          t.multiline && (n += "m"),
          t.unicode && (n += "u"),
          t.sticky && (n += "y"),
          n
        )
      }
    },
    function (t, n, e) {
      "use strict"
      var r = e(17),
        i = e(59)(!0)
      r(r.P, "Array", {
        includes: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        },
      }),
        e(116)("includes")
    },
    function (t, n, e) {
      "use strict"
      var r = e(17),
        i = e(249)
      r(r.P + r.F * e(251)("includes"), "String", {
        includes: function (t) {
          return !!~i(this, t, "includes").indexOf(
            t,
            arguments.length > 1 ? arguments[1] : void 0
          )
        },
      })
    },
    function (t, n, e) {
      var r = e(250),
        i = e(22)
      t.exports = function (t, n, e) {
        if (r(n)) throw TypeError("String#" + e + " doesn't accept regex!")
        return String(i(t))
      }
    },
    function (t, n, e) {
      var r = e(8),
        i = e(26),
        a = e(13)("match")
      t.exports = function (t) {
        var n
        return r(t) && (void 0 !== (n = t[a]) ? !!n : "RegExp" == i(t))
      }
    },
    function (t, n, e) {
      var r = e(13)("match")
      t.exports = function (t) {
        var n = /./
        try {
          "/./"[t](n)
        } catch (e) {
          try {
            return (n[r] = !1), !"/./"[t](n)
          } catch (t) {}
        }
        return !0
      }
    },
    function (t, n, e) {
      "use strict"
      e.d(n, "a", function () {
        return a
      })
      var r = e(118),
        i = e.n(r)
      function a(t, n, e) {
        return (
          n in t
            ? i()(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        )
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      "use strict"
      var r = function (t, n) {
          return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
        },
        i = function (t) {
          var n
          return (
            1 === t.length &&
              ((n = t),
              (t = function (t, e) {
                return r(n(t), e)
              })),
            {
              left: function (n, e, r, i) {
                for (
                  null == r && (r = 0), null == i && (i = n.length);
                  r < i;

                ) {
                  var a = (r + i) >>> 1
                  t(n[a], e) < 0 ? (r = a + 1) : (i = a)
                }
                return r
              },
              right: function (n, e, r, i) {
                for (
                  null == r && (r = 0), null == i && (i = n.length);
                  r < i;

                ) {
                  var a = (r + i) >>> 1
                  t(n[a], e) > 0 ? (i = a) : (r = a + 1)
                }
                return r
              },
            }
          )
        }
      var a = i(r)
      a.right, a.left
      var o = Array.prototype
      o.slice, o.map, Math.sqrt(50), Math.sqrt(10), Math.sqrt(2)
      var f = function (t) {
        for (var n, e, r, i = t.length, a = -1, o = 0; ++a < i; )
          o += t[a].length
        for (e = new Array(o); --i >= 0; )
          for (n = (r = t[i]).length; --n >= 0; ) e[--o] = r[n]
        return e
      }
      Array.prototype.slice
      var c = { value: function () {} }
      function u() {
        for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
          if (!(t = arguments[n] + "") || t in r)
            throw new Error("illegal type: " + t)
          r[t] = []
        }
        return new s(r)
      }
      function s(t) {
        this._ = t
      }
      function h(t, n) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var e = "",
              r = t.indexOf(".")
            if (
              (r >= 0 && ((e = t.slice(r + 1)), (t = t.slice(0, r))),
              t && !n.hasOwnProperty(t))
            )
              throw new Error("unknown type: " + t)
            return { type: t, name: e }
          })
      }
      function l(t, n) {
        for (var e, r = 0, i = t.length; r < i; ++r)
          if ((e = t[r]).name === n) return e.value
      }
      function d(t, n, e) {
        for (var r = 0, i = t.length; r < i; ++r)
          if (t[r].name === n) {
            ;(t[r] = c), (t = t.slice(0, r).concat(t.slice(r + 1)))
            break
          }
        return null != e && t.push({ name: n, value: e }), t
      }
      s.prototype = u.prototype = {
        constructor: s,
        on: function (t, n) {
          var e,
            r = this._,
            i = h(t + "", r),
            a = -1,
            o = i.length
          if (!(arguments.length < 2)) {
            if (null != n && "function" != typeof n)
              throw new Error("invalid callback: " + n)
            for (; ++a < o; )
              if ((e = (t = i[a]).type)) r[e] = d(r[e], t.name, n)
              else if (null == n) for (e in r) r[e] = d(r[e], t.name, null)
            return this
          }
          for (; ++a < o; )
            if ((e = (t = i[a]).type) && (e = l(r[e], t.name))) return e
        },
        copy: function () {
          var t = {},
            n = this._
          for (var e in n) t[e] = n[e].slice()
          return new s(t)
        },
        call: function (t, n) {
          if ((e = arguments.length - 2) > 0)
            for (var e, r, i = new Array(e), a = 0; a < e; ++a)
              i[a] = arguments[a + 2]
          if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t)
          for (a = 0, e = (r = this._[t]).length; a < e; ++a)
            r[a].value.apply(n, i)
        },
        apply: function (t, n, e) {
          if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t)
          for (var r = this._[t], i = 0, a = r.length; i < a; ++i)
            r[i].value.apply(n, e)
        },
      }
      var p = u,
        _ = "http://www.w3.org/1999/xhtml",
        b = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: _,
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        y = function (t) {
          var n = (t += ""),
            e = n.indexOf(":")
          return (
            e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
            b.hasOwnProperty(n) ? { space: b[n], local: t } : t
          )
        }
      var v = function (t) {
        var n = y(t)
        return (
          n.local
            ? function (t) {
                return function () {
                  return this.ownerDocument.createElementNS(t.space, t.local)
                }
              }
            : function (t) {
                return function () {
                  var n = this.ownerDocument,
                    e = this.namespaceURI
                  return e === _ && n.documentElement.namespaceURI === _
                    ? n.createElement(t)
                    : n.createElementNS(e, t)
                }
              }
        )(n)
      }
      function g() {}
      var x = function (t) {
        return null == t
          ? g
          : function () {
              return this.querySelector(t)
            }
      }
      function m() {
        return []
      }
      var w = function (t) {
          return null == t
            ? m
            : function () {
                return this.querySelectorAll(t)
              }
        },
        M = function (t) {
          return function () {
            return this.matches(t)
          }
        },
        S = function (t) {
          return new Array(t.length)
        }
      function N(t, n) {
        ;(this.ownerDocument = t.ownerDocument),
          (this.namespaceURI = t.namespaceURI),
          (this._next = null),
          (this._parent = t),
          (this.__data__ = n)
      }
      N.prototype = {
        constructor: N,
        appendChild: function (t) {
          return this._parent.insertBefore(t, this._next)
        },
        insertBefore: function (t, n) {
          return this._parent.insertBefore(t, n)
        },
        querySelector: function (t) {
          return this._parent.querySelector(t)
        },
        querySelectorAll: function (t) {
          return this._parent.querySelectorAll(t)
        },
      }
      var T = "$"
      function A(t, n, e, r, i, a) {
        for (var o, f = 0, c = n.length, u = a.length; f < u; ++f)
          (o = n[f])
            ? ((o.__data__ = a[f]), (r[f] = o))
            : (e[f] = new N(t, a[f]))
        for (; f < c; ++f) (o = n[f]) && (i[f] = o)
      }
      function C(t, n, e, r, i, a, o) {
        var f,
          c,
          u,
          s = {},
          h = n.length,
          l = a.length,
          d = new Array(h)
        for (f = 0; f < h; ++f)
          (c = n[f]) &&
            ((d[f] = u = T + o.call(c, c.__data__, f, n)),
            u in s ? (i[f] = c) : (s[u] = c))
        for (f = 0; f < l; ++f)
          (c = s[(u = T + o.call(t, a[f], f, a))])
            ? ((r[f] = c), (c.__data__ = a[f]), (s[u] = null))
            : (e[f] = new N(t, a[f]))
        for (f = 0; f < h; ++f) (c = n[f]) && s[d[f]] === c && (i[f] = c)
      }
      function E(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
      }
      function k(t) {
        return function () {
          this.removeAttribute(t)
        }
      }
      function P(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local)
        }
      }
      function U(t, n) {
        return function () {
          this.setAttribute(t, n)
        }
      }
      function L(t, n) {
        return function () {
          this.setAttributeNS(t.space, t.local, n)
        }
      }
      function O(t, n) {
        return function () {
          var e = n.apply(this, arguments)
          null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
        }
      }
      function j(t, n) {
        return function () {
          var e = n.apply(this, arguments)
          null == e
            ? this.removeAttributeNS(t.space, t.local)
            : this.setAttributeNS(t.space, t.local, e)
        }
      }
      var R = function (t) {
        return (
          (t.ownerDocument && t.ownerDocument.defaultView) ||
          (t.document && t) ||
          t.defaultView
        )
      }
      function D(t) {
        return function () {
          this.style.removeProperty(t)
        }
      }
      function F(t, n, e) {
        return function () {
          this.style.setProperty(t, n, e)
        }
      }
      function I(t, n, e) {
        return function () {
          var r = n.apply(this, arguments)
          null == r
            ? this.style.removeProperty(t)
            : this.style.setProperty(t, r, e)
        }
      }
      function Y(t, n) {
        return (
          t.style.getPropertyValue(n) ||
          R(t).getComputedStyle(t, null).getPropertyValue(n)
        )
      }
      function q(t) {
        return function () {
          delete this[t]
        }
      }
      function $(t, n) {
        return function () {
          this[t] = n
        }
      }
      function H(t, n) {
        return function () {
          var e = n.apply(this, arguments)
          null == e ? delete this[t] : (this[t] = e)
        }
      }
      function z(t) {
        return t.trim().split(/^|\s+/)
      }
      function X(t) {
        return t.classList || new V(t)
      }
      function V(t) {
        ;(this._node = t), (this._names = z(t.getAttribute("class") || ""))
      }
      function B(t, n) {
        for (var e = X(t), r = -1, i = n.length; ++r < i; ) e.add(n[r])
      }
      function Z(t, n) {
        for (var e = X(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r])
      }
      function W(t) {
        return function () {
          B(this, t)
        }
      }
      function G(t) {
        return function () {
          Z(this, t)
        }
      }
      function J(t, n) {
        return function () {
          ;(n.apply(this, arguments) ? B : Z)(this, t)
        }
      }
      V.prototype = {
        add: function (t) {
          this._names.indexOf(t) < 0 &&
            (this._names.push(t),
            this._node.setAttribute("class", this._names.join(" ")))
        },
        remove: function (t) {
          var n = this._names.indexOf(t)
          n >= 0 &&
            (this._names.splice(n, 1),
            this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function (t) {
          return this._names.indexOf(t) >= 0
        },
      }
      function Q() {
        this.textContent = ""
      }
      function K(t) {
        return function () {
          this.textContent = t
        }
      }
      function tt(t) {
        return function () {
          var n = t.apply(this, arguments)
          this.textContent = null == n ? "" : n
        }
      }
      function nt() {
        this.innerHTML = ""
      }
      function et(t) {
        return function () {
          this.innerHTML = t
        }
      }
      function rt(t) {
        return function () {
          var n = t.apply(this, arguments)
          this.innerHTML = null == n ? "" : n
        }
      }
      function it() {
        this.nextSibling && this.parentNode.appendChild(this)
      }
      function at() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild)
      }
      function ot() {
        return null
      }
      function ft() {
        var t = this.parentNode
        t && t.removeChild(this)
      }
      function ct() {
        return this.parentNode.insertBefore(
          this.cloneNode(!1),
          this.nextSibling
        )
      }
      function ut() {
        return this.parentNode.insertBefore(
          this.cloneNode(!0),
          this.nextSibling
        )
      }
      var st = {},
        ht = null
      "undefined" != typeof document &&
        ("onmouseenter" in document.documentElement ||
          (st = { mouseenter: "mouseover", mouseleave: "mouseout" }))
      function lt(t, n, e) {
        return (
          (t = dt(t, n, e)),
          function (n) {
            var e = n.relatedTarget
            ;(e && (e === this || 8 & e.compareDocumentPosition(this))) ||
              t.call(this, n)
          }
        )
      }
      function dt(t, n, e) {
        return function (r) {
          var i = ht
          ht = r
          try {
            t.call(this, this.__data__, n, e)
          } finally {
            ht = i
          }
        }
      }
      function pt(t) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var n = "",
              e = t.indexOf(".")
            return (
              e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
              { type: t, name: n }
            )
          })
      }
      function _t(t) {
        return function () {
          var n = this.__on
          if (n) {
            for (var e, r = 0, i = -1, a = n.length; r < a; ++r)
              (e = n[r]),
                (t.type && e.type !== t.type) || e.name !== t.name
                  ? (n[++i] = e)
                  : this.removeEventListener(e.type, e.listener, e.capture)
            ++i ? (n.length = i) : delete this.__on
          }
        }
      }
      function bt(t, n, e) {
        var r = st.hasOwnProperty(t.type) ? lt : dt
        return function (i, a, o) {
          var f,
            c = this.__on,
            u = r(n, a, o)
          if (c)
            for (var s = 0, h = c.length; s < h; ++s)
              if ((f = c[s]).type === t.type && f.name === t.name)
                return (
                  this.removeEventListener(f.type, f.listener, f.capture),
                  this.addEventListener(
                    f.type,
                    (f.listener = u),
                    (f.capture = e)
                  ),
                  void (f.value = n)
                )
          this.addEventListener(t.type, u, e),
            (f = {
              type: t.type,
              name: t.name,
              value: n,
              listener: u,
              capture: e,
            }),
            c ? c.push(f) : (this.__on = [f])
        }
      }
      function yt(t, n, e) {
        var r = R(t),
          i = r.CustomEvent
        "function" == typeof i
          ? (i = new i(n, e))
          : ((i = r.document.createEvent("Event")),
            e
              ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
              : i.initEvent(n, !1, !1)),
          t.dispatchEvent(i)
      }
      var vt = [null]
      function gt(t, n) {
        ;(this._groups = t), (this._parents = n)
      }
      function xt() {
        return new gt([[document.documentElement]], vt)
      }
      gt.prototype = xt.prototype = {
        constructor: gt,
        select: function (t) {
          "function" != typeof t && (t = x(t))
          for (
            var n = this._groups, e = n.length, r = new Array(e), i = 0;
            i < e;
            ++i
          )
            for (
              var a,
                o,
                f = n[i],
                c = f.length,
                u = (r[i] = new Array(c)),
                s = 0;
              s < c;
              ++s
            )
              (a = f[s]) &&
                (o = t.call(a, a.__data__, s, f)) &&
                ("__data__" in a && (o.__data__ = a.__data__), (u[s] = o))
          return new gt(r, this._parents)
        },
        selectAll: function (t) {
          "function" != typeof t && (t = w(t))
          for (
            var n = this._groups, e = n.length, r = [], i = [], a = 0;
            a < e;
            ++a
          )
            for (var o, f = n[a], c = f.length, u = 0; u < c; ++u)
              (o = f[u]) && (r.push(t.call(o, o.__data__, u, f)), i.push(o))
          return new gt(r, i)
        },
        filter: function (t) {
          "function" != typeof t && (t = M(t))
          for (
            var n = this._groups, e = n.length, r = new Array(e), i = 0;
            i < e;
            ++i
          )
            for (
              var a, o = n[i], f = o.length, c = (r[i] = []), u = 0;
              u < f;
              ++u
            )
              (a = o[u]) && t.call(a, a.__data__, u, o) && c.push(a)
          return new gt(r, this._parents)
        },
        data: function (t, n) {
          if (!t)
            return (
              (p = new Array(this.size())),
              (s = -1),
              this.each(function (t) {
                p[++s] = t
              }),
              p
            )
          var e,
            r = n ? C : A,
            i = this._parents,
            a = this._groups
          "function" != typeof t &&
            ((e = t),
            (t = function () {
              return e
            }))
          for (
            var o = a.length,
              f = new Array(o),
              c = new Array(o),
              u = new Array(o),
              s = 0;
            s < o;
            ++s
          ) {
            var h = i[s],
              l = a[s],
              d = l.length,
              p = t.call(h, h && h.__data__, s, i),
              _ = p.length,
              b = (c[s] = new Array(_)),
              y = (f[s] = new Array(_))
            r(h, l, b, y, (u[s] = new Array(d)), p, n)
            for (var v, g, x = 0, m = 0; x < _; ++x)
              if ((v = b[x])) {
                for (x >= m && (m = x + 1); !(g = y[m]) && ++m < _; );
                v._next = g || null
              }
          }
          return ((f = new gt(f, i))._enter = c), (f._exit = u), f
        },
        enter: function () {
          return new gt(this._enter || this._groups.map(S), this._parents)
        },
        exit: function () {
          return new gt(this._exit || this._groups.map(S), this._parents)
        },
        join: function (t, n, e) {
          var r = this.enter(),
            i = this,
            a = this.exit()
          return (
            (r = "function" == typeof t ? t(r) : r.append(t + "")),
            null != n && (i = n(i)),
            null == e ? a.remove() : e(a),
            r && i ? r.merge(i).order() : i
          )
        },
        merge: function (t) {
          for (
            var n = this._groups,
              e = t._groups,
              r = n.length,
              i = e.length,
              a = Math.min(r, i),
              o = new Array(r),
              f = 0;
            f < a;
            ++f
          )
            for (
              var c,
                u = n[f],
                s = e[f],
                h = u.length,
                l = (o[f] = new Array(h)),
                d = 0;
              d < h;
              ++d
            )
              (c = u[d] || s[d]) && (l[d] = c)
          for (; f < r; ++f) o[f] = n[f]
          return new gt(o, this._parents)
        },
        order: function () {
          for (var t = this._groups, n = -1, e = t.length; ++n < e; )
            for (var r, i = t[n], a = i.length - 1, o = i[a]; --a >= 0; )
              (r = i[a]) &&
                (o &&
                  4 ^ r.compareDocumentPosition(o) &&
                  o.parentNode.insertBefore(r, o),
                (o = r))
          return this
        },
        sort: function (t) {
          function n(n, e) {
            return n && e ? t(n.__data__, e.__data__) : !n - !e
          }
          t || (t = E)
          for (
            var e = this._groups, r = e.length, i = new Array(r), a = 0;
            a < r;
            ++a
          ) {
            for (
              var o, f = e[a], c = f.length, u = (i[a] = new Array(c)), s = 0;
              s < c;
              ++s
            )
              (o = f[s]) && (u[s] = o)
            u.sort(n)
          }
          return new gt(i, this._parents).order()
        },
        call: function () {
          var t = arguments[0]
          return (arguments[0] = this), t.apply(null, arguments), this
        },
        nodes: function () {
          var t = new Array(this.size()),
            n = -1
          return (
            this.each(function () {
              t[++n] = this
            }),
            t
          )
        },
        node: function () {
          for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
            for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
              var o = r[i]
              if (o) return o
            }
          return null
        },
        size: function () {
          var t = 0
          return (
            this.each(function () {
              ++t
            }),
            t
          )
        },
        empty: function () {
          return !this.node()
        },
        each: function (t) {
          for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
            for (var i, a = n[e], o = 0, f = a.length; o < f; ++o)
              (i = a[o]) && t.call(i, i.__data__, o, a)
          return this
        },
        attr: function (t, n) {
          var e = y(t)
          if (arguments.length < 2) {
            var r = this.node()
            return e.local
              ? r.getAttributeNS(e.space, e.local)
              : r.getAttribute(e)
          }
          return this.each(
            (null == n
              ? e.local
                ? P
                : k
              : "function" == typeof n
              ? e.local
                ? j
                : O
              : e.local
              ? L
              : U)(e, n)
          )
        },
        style: function (t, n, e) {
          return arguments.length > 1
            ? this.each(
                (null == n ? D : "function" == typeof n ? I : F)(
                  t,
                  n,
                  null == e ? "" : e
                )
              )
            : Y(this.node(), t)
        },
        property: function (t, n) {
          return arguments.length > 1
            ? this.each((null == n ? q : "function" == typeof n ? H : $)(t, n))
            : this.node()[t]
        },
        classed: function (t, n) {
          var e = z(t + "")
          if (arguments.length < 2) {
            for (var r = X(this.node()), i = -1, a = e.length; ++i < a; )
              if (!r.contains(e[i])) return !1
            return !0
          }
          return this.each(("function" == typeof n ? J : n ? W : G)(e, n))
        },
        text: function (t) {
          return arguments.length
            ? this.each(null == t ? Q : ("function" == typeof t ? tt : K)(t))
            : this.node().textContent
        },
        html: function (t) {
          return arguments.length
            ? this.each(null == t ? nt : ("function" == typeof t ? rt : et)(t))
            : this.node().innerHTML
        },
        raise: function () {
          return this.each(it)
        },
        lower: function () {
          return this.each(at)
        },
        append: function (t) {
          var n = "function" == typeof t ? t : v(t)
          return this.select(function () {
            return this.appendChild(n.apply(this, arguments))
          })
        },
        insert: function (t, n) {
          var e = "function" == typeof t ? t : v(t),
            r = null == n ? ot : "function" == typeof n ? n : x(n)
          return this.select(function () {
            return this.insertBefore(
              e.apply(this, arguments),
              r.apply(this, arguments) || null
            )
          })
        },
        remove: function () {
          return this.each(ft)
        },
        clone: function (t) {
          return this.select(t ? ut : ct)
        },
        datum: function (t) {
          return arguments.length
            ? this.property("__data__", t)
            : this.node().__data__
        },
        on: function (t, n, e) {
          var r,
            i,
            a = pt(t + ""),
            o = a.length
          if (!(arguments.length < 2)) {
            for (f = n ? bt : _t, null == e && (e = !1), r = 0; r < o; ++r)
              this.each(f(a[r], n, e))
            return this
          }
          var f = this.node().__on
          if (f)
            for (var c, u = 0, s = f.length; u < s; ++u)
              for (r = 0, c = f[u]; r < o; ++r)
                if ((i = a[r]).type === c.type && i.name === c.name)
                  return c.value
        },
        dispatch: function (t, n) {
          return this.each(
            ("function" == typeof n
              ? function (t, n) {
                  return function () {
                    return yt(this, t, n.apply(this, arguments))
                  }
                }
              : function (t, n) {
                  return function () {
                    return yt(this, t, n)
                  }
                })(t, n)
          )
        },
      }
      var mt = xt,
        wt = function (t) {
          return "string" == typeof t
            ? new gt([[document.querySelector(t)]], [document.documentElement])
            : new gt([[t]], vt)
        },
        Mt = 0
      function St() {
        this._ = "@" + (++Mt).toString(36)
      }
      St.prototype = function () {
        return new St()
      }.prototype = {
        constructor: St,
        get: function (t) {
          for (var n = this._; !(n in t); ) if (!(t = t.parentNode)) return
          return t[n]
        },
        set: function (t, n) {
          return (t[this._] = n)
        },
        remove: function (t) {
          return this._ in t && delete t[this._]
        },
        toString: function () {
          return this._
        },
      }
      function Nt(t, n, e, r, i, a, o, f, c, u) {
        ;(this.target = t),
          (this.type = n),
          (this.subject = e),
          (this.identifier = r),
          (this.active = i),
          (this.x = a),
          (this.y = o),
          (this.dx = f),
          (this.dy = c),
          (this._ = u)
      }
      Nt.prototype.on = function () {
        var t = this._.on.apply(this._, arguments)
        return t === this._ ? this : t
      }
      var Tt = function (t, n, e) {
        ;(t.prototype = n.prototype = e), (e.constructor = t)
      }
      function At(t, n) {
        var e = Object.create(t.prototype)
        for (var r in n) e[r] = n[r]
        return e
      }
      function Ct() {}
      var Et = "\\s*([+-]?\\d+)\\s*",
        kt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        Pt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        Ut = /^#([0-9a-f]{3})$/,
        Lt = /^#([0-9a-f]{6})$/,
        Ot = new RegExp("^rgb\\(" + [Et, Et, Et] + "\\)$"),
        jt = new RegExp("^rgb\\(" + [Pt, Pt, Pt] + "\\)$"),
        Rt = new RegExp("^rgba\\(" + [Et, Et, Et, kt] + "\\)$"),
        Dt = new RegExp("^rgba\\(" + [Pt, Pt, Pt, kt] + "\\)$"),
        Ft = new RegExp("^hsl\\(" + [kt, Pt, Pt] + "\\)$"),
        It = new RegExp("^hsla\\(" + [kt, Pt, Pt, kt] + "\\)$"),
        Yt = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        }
      function qt(t) {
        var n
        return (
          (t = (t + "").trim().toLowerCase()),
          (n = Ut.exec(t))
            ? new Vt(
                (((n = parseInt(n[1], 16)) >> 8) & 15) | ((n >> 4) & 240),
                ((n >> 4) & 15) | (240 & n),
                ((15 & n) << 4) | (15 & n),
                1
              )
            : (n = Lt.exec(t))
            ? $t(parseInt(n[1], 16))
            : (n = Ot.exec(t))
            ? new Vt(n[1], n[2], n[3], 1)
            : (n = jt.exec(t))
            ? new Vt(
                (255 * n[1]) / 100,
                (255 * n[2]) / 100,
                (255 * n[3]) / 100,
                1
              )
            : (n = Rt.exec(t))
            ? Ht(n[1], n[2], n[3], n[4])
            : (n = Dt.exec(t))
            ? Ht(
                (255 * n[1]) / 100,
                (255 * n[2]) / 100,
                (255 * n[3]) / 100,
                n[4]
              )
            : (n = Ft.exec(t))
            ? Zt(n[1], n[2] / 100, n[3] / 100, 1)
            : (n = It.exec(t))
            ? Zt(n[1], n[2] / 100, n[3] / 100, n[4])
            : Yt.hasOwnProperty(t)
            ? $t(Yt[t])
            : "transparent" === t
            ? new Vt(NaN, NaN, NaN, 0)
            : null
        )
      }
      function $t(t) {
        return new Vt((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1)
      }
      function Ht(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN), new Vt(t, n, e, r)
      }
      function zt(t) {
        return (
          t instanceof Ct || (t = qt(t)),
          t ? new Vt((t = t.rgb()).r, t.g, t.b, t.opacity) : new Vt()
        )
      }
      function Xt(t, n, e, r) {
        return 1 === arguments.length
          ? zt(t)
          : new Vt(t, n, e, null == r ? 1 : r)
      }
      function Vt(t, n, e, r) {
        ;(this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r)
      }
      function Bt(t) {
        return (
          ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16
            ? "0"
            : "") + t.toString(16)
        )
      }
      function Zt(t, n, e, r) {
        return (
          r <= 0
            ? (t = n = e = NaN)
            : e <= 0 || e >= 1
            ? (t = n = NaN)
            : n <= 0 && (t = NaN),
          new Gt(t, n, e, r)
        )
      }
      function Wt(t, n, e, r) {
        return 1 === arguments.length
          ? (function (t) {
              if (t instanceof Gt) return new Gt(t.h, t.s, t.l, t.opacity)
              if ((t instanceof Ct || (t = qt(t)), !t)) return new Gt()
              if (t instanceof Gt) return t
              var n = (t = t.rgb()).r / 255,
                e = t.g / 255,
                r = t.b / 255,
                i = Math.min(n, e, r),
                a = Math.max(n, e, r),
                o = NaN,
                f = a - i,
                c = (a + i) / 2
              return (
                f
                  ? ((o =
                      n === a
                        ? (e - r) / f + 6 * (e < r)
                        : e === a
                        ? (r - n) / f + 2
                        : (n - e) / f + 4),
                    (f /= c < 0.5 ? a + i : 2 - a - i),
                    (o *= 60))
                  : (f = c > 0 && c < 1 ? 0 : o),
                new Gt(o, f, c, t.opacity)
              )
            })(t)
          : new Gt(t, n, e, null == r ? 1 : r)
      }
      function Gt(t, n, e, r) {
        ;(this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r)
      }
      function Jt(t, n, e) {
        return (
          255 *
          (t < 60
            ? n + ((e - n) * t) / 60
            : t < 180
            ? e
            : t < 240
            ? n + ((e - n) * (240 - t)) / 60
            : n)
        )
      }
      Tt(Ct, qt, {
        displayable: function () {
          return this.rgb().displayable()
        },
        hex: function () {
          return this.rgb().hex()
        },
        toString: function () {
          return this.rgb() + ""
        },
      }),
        Tt(
          Vt,
          Xt,
          At(Ct, {
            brighter: function (t) {
              return (
                (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                new Vt(this.r * t, this.g * t, this.b * t, this.opacity)
              )
            },
            darker: function (t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new Vt(this.r * t, this.g * t, this.b * t, this.opacity)
              )
            },
            rgb: function () {
              return this
            },
            displayable: function () {
              return (
                0 <= this.r &&
                this.r <= 255 &&
                0 <= this.g &&
                this.g <= 255 &&
                0 <= this.b &&
                this.b <= 255 &&
                0 <= this.opacity &&
                this.opacity <= 1
              )
            },
            hex: function () {
              return "#" + Bt(this.r) + Bt(this.g) + Bt(this.b)
            },
            toString: function () {
              var t = this.opacity
              return (
                (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
                  ? "rgb("
                  : "rgba(") +
                Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
                ", " +
                Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
                ", " +
                Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
                (1 === t ? ")" : ", " + t + ")")
              )
            },
          })
        ),
        Tt(
          Gt,
          Wt,
          At(Ct, {
            brighter: function (t) {
              return (
                (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                new Gt(this.h, this.s, this.l * t, this.opacity)
              )
            },
            darker: function (t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new Gt(this.h, this.s, this.l * t, this.opacity)
              )
            },
            rgb: function () {
              var t = (this.h % 360) + 360 * (this.h < 0),
                n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                e = this.l,
                r = e + (e < 0.5 ? e : 1 - e) * n,
                i = 2 * e - r
              return new Vt(
                Jt(t >= 240 ? t - 240 : t + 120, i, r),
                Jt(t, i, r),
                Jt(t < 120 ? t + 240 : t - 120, i, r),
                this.opacity
              )
            },
            displayable: function () {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              )
            },
          })
        )
      var Qt = Math.PI / 180,
        Kt = 180 / Math.PI,
        tn = 0.96422,
        nn = 1,
        en = 0.82521,
        rn = 4 / 29,
        an = 6 / 29,
        on = 3 * an * an,
        fn = an * an * an
      function cn(t) {
        if (t instanceof sn) return new sn(t.l, t.a, t.b, t.opacity)
        if (t instanceof yn) {
          if (isNaN(t.h)) return new sn(t.l, 0, 0, t.opacity)
          var n = t.h * Qt
          return new sn(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
        }
        t instanceof Vt || (t = zt(t))
        var e,
          r,
          i = pn(t.r),
          a = pn(t.g),
          o = pn(t.b),
          f = hn((0.2225045 * i + 0.7168786 * a + 0.0606169 * o) / nn)
        return (
          i === a && a === o
            ? (e = r = f)
            : ((e = hn((0.4360747 * i + 0.3850649 * a + 0.1430804 * o) / tn)),
              (r = hn((0.0139322 * i + 0.0971045 * a + 0.7141733 * o) / en))),
          new sn(116 * f - 16, 500 * (e - f), 200 * (f - r), t.opacity)
        )
      }
      function un(t, n, e, r) {
        return 1 === arguments.length
          ? cn(t)
          : new sn(t, n, e, null == r ? 1 : r)
      }
      function sn(t, n, e, r) {
        ;(this.l = +t), (this.a = +n), (this.b = +e), (this.opacity = +r)
      }
      function hn(t) {
        return t > fn ? Math.pow(t, 1 / 3) : t / on + rn
      }
      function ln(t) {
        return t > an ? t * t * t : on * (t - rn)
      }
      function dn(t) {
        return (
          255 *
          (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
        )
      }
      function pn(t) {
        return (t /= 255) <= 0.04045
          ? t / 12.92
          : Math.pow((t + 0.055) / 1.055, 2.4)
      }
      function _n(t) {
        if (t instanceof yn) return new yn(t.h, t.c, t.l, t.opacity)
        if ((t instanceof sn || (t = cn(t)), 0 === t.a && 0 === t.b))
          return new yn(NaN, 0, t.l, t.opacity)
        var n = Math.atan2(t.b, t.a) * Kt
        return new yn(
          n < 0 ? n + 360 : n,
          Math.sqrt(t.a * t.a + t.b * t.b),
          t.l,
          t.opacity
        )
      }
      function bn(t, n, e, r) {
        return 1 === arguments.length
          ? _n(t)
          : new yn(t, n, e, null == r ? 1 : r)
      }
      function yn(t, n, e, r) {
        ;(this.h = +t), (this.c = +n), (this.l = +e), (this.opacity = +r)
      }
      Tt(
        sn,
        un,
        At(Ct, {
          brighter: function (t) {
            return new sn(
              this.l + 18 * (null == t ? 1 : t),
              this.a,
              this.b,
              this.opacity
            )
          },
          darker: function (t) {
            return new sn(
              this.l - 18 * (null == t ? 1 : t),
              this.a,
              this.b,
              this.opacity
            )
          },
          rgb: function () {
            var t = (this.l + 16) / 116,
              n = isNaN(this.a) ? t : t + this.a / 500,
              e = isNaN(this.b) ? t : t - this.b / 200
            return new Vt(
              dn(
                3.1338561 * (n = tn * ln(n)) -
                  1.6168667 * (t = nn * ln(t)) -
                  0.4906146 * (e = en * ln(e))
              ),
              dn(-0.9787684 * n + 1.9161415 * t + 0.033454 * e),
              dn(0.0719453 * n - 0.2289914 * t + 1.4052427 * e),
              this.opacity
            )
          },
        })
      ),
        Tt(
          yn,
          bn,
          At(Ct, {
            brighter: function (t) {
              return new yn(
                this.h,
                this.c,
                this.l + 18 * (null == t ? 1 : t),
                this.opacity
              )
            },
            darker: function (t) {
              return new yn(
                this.h,
                this.c,
                this.l - 18 * (null == t ? 1 : t),
                this.opacity
              )
            },
            rgb: function () {
              return cn(this).rgb()
            },
          })
        )
      var vn = -0.29227,
        gn = -0.90649,
        xn = 1.97294,
        mn = xn * gn,
        wn = 1.78277 * xn,
        Mn = 1.78277 * vn - -0.14861 * gn
      function Sn(t, n, e, r) {
        return 1 === arguments.length
          ? (function (t) {
              if (t instanceof Nn) return new Nn(t.h, t.s, t.l, t.opacity)
              t instanceof Vt || (t = zt(t))
              var n = t.r / 255,
                e = t.g / 255,
                r = t.b / 255,
                i = (Mn * r + mn * n - wn * e) / (Mn + mn - wn),
                a = r - i,
                o = (xn * (e - i) - vn * a) / gn,
                f = Math.sqrt(o * o + a * a) / (xn * i * (1 - i)),
                c = f ? Math.atan2(o, a) * Kt - 120 : NaN
              return new Nn(c < 0 ? c + 360 : c, f, i, t.opacity)
            })(t)
          : new Nn(t, n, e, null == r ? 1 : r)
      }
      function Nn(t, n, e, r) {
        ;(this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r)
      }
      function Tn(t, n, e, r, i) {
        var a = t * t,
          o = a * t
        return (
          ((1 - 3 * t + 3 * a - o) * n +
            (4 - 6 * a + 3 * o) * e +
            (1 + 3 * t + 3 * a - 3 * o) * r +
            o * i) /
          6
        )
      }
      Tt(
        Nn,
        Sn,
        At(Ct, {
          brighter: function (t) {
            return (
              (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
              new Nn(this.h, this.s, this.l * t, this.opacity)
            )
          },
          darker: function (t) {
            return (
              (t = null == t ? 0.7 : Math.pow(0.7, t)),
              new Nn(this.h, this.s, this.l * t, this.opacity)
            )
          },
          rgb: function () {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * Qt,
              n = +this.l,
              e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
              r = Math.cos(t),
              i = Math.sin(t)
            return new Vt(
              255 * (n + e * (-0.14861 * r + 1.78277 * i)),
              255 * (n + e * (vn * r + gn * i)),
              255 * (n + e * (xn * r)),
              this.opacity
            )
          },
        })
      )
      var An = function (t) {
        return function () {
          return t
        }
      }
      function Cn(t, n) {
        return function (e) {
          return t + e * n
        }
      }
      function En(t, n) {
        var e = n - t
        return e
          ? Cn(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e)
          : An(isNaN(t) ? n : t)
      }
      function kn(t) {
        return 1 == (t = +t)
          ? Pn
          : function (n, e) {
              return e - n
                ? (function (t, n, e) {
                    return (
                      (t = Math.pow(t, e)),
                      (n = Math.pow(n, e) - t),
                      (e = 1 / e),
                      function (r) {
                        return Math.pow(t + r * n, e)
                      }
                    )
                  })(n, e, t)
                : An(isNaN(n) ? e : n)
            }
      }
      function Pn(t, n) {
        var e = n - t
        return e ? Cn(t, e) : An(isNaN(t) ? n : t)
      }
      var Un = (function t(n) {
        var e = kn(n)
        function r(t, n) {
          var r = e((t = Xt(t)).r, (n = Xt(n)).r),
            i = e(t.g, n.g),
            a = e(t.b, n.b),
            o = Pn(t.opacity, n.opacity)
          return function (n) {
            return (
              (t.r = r(n)),
              (t.g = i(n)),
              (t.b = a(n)),
              (t.opacity = o(n)),
              t + ""
            )
          }
        }
        return (r.gamma = t), r
      })(1)
      function Ln(t) {
        return function (n) {
          var e,
            r,
            i = n.length,
            a = new Array(i),
            o = new Array(i),
            f = new Array(i)
          for (e = 0; e < i; ++e)
            (r = Xt(n[e])),
              (a[e] = r.r || 0),
              (o[e] = r.g || 0),
              (f[e] = r.b || 0)
          return (
            (a = t(a)),
            (o = t(o)),
            (f = t(f)),
            (r.opacity = 1),
            function (t) {
              return (r.r = a(t)), (r.g = o(t)), (r.b = f(t)), r + ""
            }
          )
        }
      }
      var On = Ln(function (t) {
          var n = t.length - 1
          return function (e) {
            var r =
                e <= 0
                  ? (e = 0)
                  : e >= 1
                  ? ((e = 1), n - 1)
                  : Math.floor(e * n),
              i = t[r],
              a = t[r + 1],
              o = r > 0 ? t[r - 1] : 2 * i - a,
              f = r < n - 1 ? t[r + 2] : 2 * a - i
            return Tn((e - r / n) * n, o, i, a, f)
          }
        }),
        jn =
          (Ln(function (t) {
            var n = t.length
            return function (e) {
              var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                i = t[(r + n - 1) % n],
                a = t[r % n],
                o = t[(r + 1) % n],
                f = t[(r + 2) % n]
              return Tn((e - r / n) * n, i, a, o, f)
            }
          }),
          function (t, n) {
            return (
              (n -= t = +t),
              function (e) {
                return t + n * e
              }
            )
          }),
        Rn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        Dn = new RegExp(Rn.source, "g")
      var Fn,
        In,
        Yn,
        qn,
        $n = function (t, n) {
          var e,
            r,
            i,
            a = (Rn.lastIndex = Dn.lastIndex = 0),
            o = -1,
            f = [],
            c = []
          for (t += "", n += ""; (e = Rn.exec(t)) && (r = Dn.exec(n)); )
            (i = r.index) > a &&
              ((i = n.slice(a, i)), f[o] ? (f[o] += i) : (f[++o] = i)),
              (e = e[0]) === (r = r[0])
                ? f[o]
                  ? (f[o] += r)
                  : (f[++o] = r)
                : ((f[++o] = null), c.push({ i: o, x: jn(e, r) })),
              (a = Dn.lastIndex)
          return (
            a < n.length &&
              ((i = n.slice(a)), f[o] ? (f[o] += i) : (f[++o] = i)),
            f.length < 2
              ? c[0]
                ? (function (t) {
                    return function (n) {
                      return t(n) + ""
                    }
                  })(c[0].x)
                : (function (t) {
                    return function () {
                      return t
                    }
                  })(n)
              : ((n = c.length),
                function (t) {
                  for (var e, r = 0; r < n; ++r) f[(e = c[r]).i] = e.x(t)
                  return f.join("")
                })
          )
        },
        Hn = 180 / Math.PI,
        zn = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1,
        },
        Xn = function (t, n, e, r, i, a) {
          var o, f, c
          return (
            (o = Math.sqrt(t * t + n * n)) && ((t /= o), (n /= o)),
            (c = t * e + n * r) && ((e -= t * c), (r -= n * c)),
            (f = Math.sqrt(e * e + r * r)) && ((e /= f), (r /= f), (c /= f)),
            t * r < n * e && ((t = -t), (n = -n), (c = -c), (o = -o)),
            {
              translateX: i,
              translateY: a,
              rotate: Math.atan2(n, t) * Hn,
              skewX: Math.atan(c) * Hn,
              scaleX: o,
              scaleY: f,
            }
          )
        }
      function Vn(t, n, e, r) {
        function i(t) {
          return t.length ? t.pop() + " " : ""
        }
        return function (a, o) {
          var f = [],
            c = []
          return (
            (a = t(a)),
            (o = t(o)),
            (function (t, r, i, a, o, f) {
              if (t !== i || r !== a) {
                var c = o.push("translate(", null, n, null, e)
                f.push({ i: c - 4, x: jn(t, i) }, { i: c - 2, x: jn(r, a) })
              } else (i || a) && o.push("translate(" + i + n + a + e)
            })(a.translateX, a.translateY, o.translateX, o.translateY, f, c),
            (function (t, n, e, a) {
              t !== n
                ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
                  a.push({
                    i: e.push(i(e) + "rotate(", null, r) - 2,
                    x: jn(t, n),
                  }))
                : n && e.push(i(e) + "rotate(" + n + r)
            })(a.rotate, o.rotate, f, c),
            (function (t, n, e, a) {
              t !== n
                ? a.push({
                    i: e.push(i(e) + "skewX(", null, r) - 2,
                    x: jn(t, n),
                  })
                : n && e.push(i(e) + "skewX(" + n + r)
            })(a.skewX, o.skewX, f, c),
            (function (t, n, e, r, a, o) {
              if (t !== e || n !== r) {
                var f = a.push(i(a) + "scale(", null, ",", null, ")")
                o.push({ i: f - 4, x: jn(t, e) }, { i: f - 2, x: jn(n, r) })
              } else
                (1 === e && 1 === r) ||
                  a.push(i(a) + "scale(" + e + "," + r + ")")
            })(a.scaleX, a.scaleY, o.scaleX, o.scaleY, f, c),
            (a = o = null),
            function (t) {
              for (var n, e = -1, r = c.length; ++e < r; )
                f[(n = c[e]).i] = n.x(t)
              return f.join("")
            }
          )
        }
      }
      var Bn = Vn(
          function (t) {
            return "none" === t
              ? zn
              : (Fn ||
                  ((Fn = document.createElement("DIV")),
                  (In = document.documentElement),
                  (Yn = document.defaultView)),
                (Fn.style.transform = t),
                (t = Yn.getComputedStyle(
                  In.appendChild(Fn),
                  null
                ).getPropertyValue("transform")),
                In.removeChild(Fn),
                (t = t.slice(7, -1).split(",")),
                Xn(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
          },
          "px, ",
          "px)",
          "deg)"
        ),
        Zn = Vn(
          function (t) {
            return null == t
              ? zn
              : (qn ||
                  (qn = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "g"
                  )),
                qn.setAttribute("transform", t),
                (t = qn.transform.baseVal.consolidate())
                  ? ((t = t.matrix), Xn(t.a, t.b, t.c, t.d, t.e, t.f))
                  : zn)
          },
          ", ",
          ")",
          ")"
        )
      Math.SQRT2
      function Wn(t) {
        return function (n, e) {
          var r = t((n = Wt(n)).h, (e = Wt(e)).h),
            i = Pn(n.s, e.s),
            a = Pn(n.l, e.l),
            o = Pn(n.opacity, e.opacity)
          return function (t) {
            return (
              (n.h = r(t)),
              (n.s = i(t)),
              (n.l = a(t)),
              (n.opacity = o(t)),
              n + ""
            )
          }
        }
      }
      Wn(En), Wn(Pn)
      function Gn(t) {
        return function (n, e) {
          var r = t((n = bn(n)).h, (e = bn(e)).h),
            i = Pn(n.c, e.c),
            a = Pn(n.l, e.l),
            o = Pn(n.opacity, e.opacity)
          return function (t) {
            return (
              (n.h = r(t)),
              (n.c = i(t)),
              (n.l = a(t)),
              (n.opacity = o(t)),
              n + ""
            )
          }
        }
      }
      Gn(En), Gn(Pn)
      function Jn(t) {
        return (function n(e) {
          function r(n, r) {
            var i = t((n = Sn(n)).h, (r = Sn(r)).h),
              a = Pn(n.s, r.s),
              o = Pn(n.l, r.l),
              f = Pn(n.opacity, r.opacity)
            return function (t) {
              return (
                (n.h = i(t)),
                (n.s = a(t)),
                (n.l = o(Math.pow(t, e))),
                (n.opacity = f(t)),
                n + ""
              )
            }
          }
          return (e = +e), (r.gamma = n), r
        })(1)
      }
      Jn(En)
      var Qn = Jn(Pn)
      var Kn,
        te,
        ne = 0,
        ee = 0,
        re = 0,
        ie = 1e3,
        ae = 0,
        oe = 0,
        fe = 0,
        ce =
          "object" == typeof performance && performance.now
            ? performance
            : Date,
        ue =
          "object" == typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (t) {
                setTimeout(t, 17)
              }
      function se() {
        return oe || (ue(he), (oe = ce.now() + fe))
      }
      function he() {
        oe = 0
      }
      function le() {
        this._call = this._time = this._next = null
      }
      function de(t, n, e) {
        var r = new le()
        return r.restart(t, n, e), r
      }
      function pe() {
        ;(oe = (ae = ce.now()) + fe), (ne = ee = 0)
        try {
          !(function () {
            se(), ++ne
            for (var t, n = Kn; n; )
              (t = oe - n._time) >= 0 && n._call.call(null, t), (n = n._next)
            --ne
          })()
        } finally {
          ;(ne = 0),
            (function () {
              var t,
                n,
                e = Kn,
                r = 1 / 0
              for (; e; )
                e._call
                  ? (r > e._time && (r = e._time), (t = e), (e = e._next))
                  : ((n = e._next),
                    (e._next = null),
                    (e = t ? (t._next = n) : (Kn = n)))
              ;(te = t), be(r)
            })(),
            (oe = 0)
        }
      }
      function _e() {
        var t = ce.now(),
          n = t - ae
        n > ie && ((fe -= n), (ae = t))
      }
      function be(t) {
        ne ||
          (ee && (ee = clearTimeout(ee)),
          t - oe > 24
            ? (t < 1 / 0 && (ee = setTimeout(pe, t - ce.now() - fe)),
              re && (re = clearInterval(re)))
            : (re || ((ae = ce.now()), (re = setInterval(_e, ie))),
              (ne = 1),
              ue(pe)))
      }
      le.prototype = de.prototype = {
        constructor: le,
        restart: function (t, n, e) {
          if ("function" != typeof t)
            throw new TypeError("callback is not a function")
          ;(e = (null == e ? se() : +e) + (null == n ? 0 : +n)),
            this._next ||
              te === this ||
              (te ? (te._next = this) : (Kn = this), (te = this)),
            (this._call = t),
            (this._time = e),
            be()
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), be())
        },
      }
      var ye = function (t, n, e) {
          var r = new le()
          return (
            (n = null == n ? 0 : +n),
            r.restart(
              function (e) {
                r.stop(), t(e + n)
              },
              n,
              e
            ),
            r
          )
        },
        ve = p("start", "end", "cancel", "interrupt"),
        ge = [],
        xe = 0,
        me = 1,
        we = 2,
        Me = 3,
        Se = 4,
        Ne = 5,
        Te = 6,
        Ae = function (t, n, e, r, i, a) {
          var o = t.__transition
          if (o) {
            if (e in o) return
          } else t.__transition = {}
          !(function (t, n, e) {
            var r,
              i = t.__transition
            function a(c) {
              var u, s, h, l
              if (e.state !== me) return f()
              for (u in i)
                if ((l = i[u]).name === e.name) {
                  if (l.state === Me) return ye(a)
                  l.state === Se
                    ? ((l.state = Te),
                      l.timer.stop(),
                      l.on.call("interrupt", t, t.__data__, l.index, l.group),
                      delete i[u])
                    : +u < n &&
                      ((l.state = Te),
                      l.timer.stop(),
                      l.on.call("cancel", t, t.__data__, l.index, l.group),
                      delete i[u])
                }
              if (
                (ye(function () {
                  e.state === Me &&
                    ((e.state = Se), e.timer.restart(o, e.delay, e.time), o(c))
                }),
                (e.state = we),
                e.on.call("start", t, t.__data__, e.index, e.group),
                e.state === we)
              ) {
                for (
                  e.state = Me,
                    r = new Array((h = e.tween.length)),
                    u = 0,
                    s = -1;
                  u < h;
                  ++u
                )
                  (l = e.tween[u].value.call(
                    t,
                    t.__data__,
                    e.index,
                    e.group
                  )) && (r[++s] = l)
                r.length = s + 1
              }
            }
            function o(n) {
              for (
                var i =
                    n < e.duration
                      ? e.ease.call(null, n / e.duration)
                      : (e.timer.restart(f), (e.state = Ne), 1),
                  a = -1,
                  o = r.length;
                ++a < o;

              )
                r[a].call(t, i)
              e.state === Ne &&
                (e.on.call("end", t, t.__data__, e.index, e.group), f())
            }
            function f() {
              for (var r in ((e.state = Te), e.timer.stop(), delete i[n], i))
                return
              delete t.__transition
            }
            ;(i[n] = e),
              (e.timer = de(
                function (t) {
                  ;(e.state = me),
                    e.timer.restart(a, e.delay, e.time),
                    e.delay <= t && a(t - e.delay)
                },
                0,
                e.time
              ))
          })(t, e, {
            name: n,
            index: r,
            group: i,
            on: ve,
            tween: ge,
            time: a.time,
            delay: a.delay,
            duration: a.duration,
            ease: a.ease,
            timer: null,
            state: xe,
          })
        }
      function Ce(t, n) {
        var e = ke(t, n)
        if (e.state > xe) throw new Error("too late; already scheduled")
        return e
      }
      function Ee(t, n) {
        var e = ke(t, n)
        if (e.state > Me) throw new Error("too late; already running")
        return e
      }
      function ke(t, n) {
        var e = t.__transition
        if (!e || !(e = e[n])) throw new Error("transition not found")
        return e
      }
      var Pe = function (t, n) {
        var e,
          r,
          i,
          a = t.__transition,
          o = !0
        if (a) {
          for (i in ((n = null == n ? null : n + ""), a))
            (e = a[i]).name === n
              ? ((r = e.state > we && e.state < Ne),
                (e.state = Te),
                e.timer.stop(),
                e.on.call(
                  r ? "interrupt" : "cancel",
                  t,
                  t.__data__,
                  e.index,
                  e.group
                ),
                delete a[i])
              : (o = !1)
          o && delete t.__transition
        }
      }
      function Ue(t, n) {
        var e, r
        return function () {
          var i = Ee(this, t),
            a = i.tween
          if (a !== e)
            for (var o = 0, f = (r = e = a).length; o < f; ++o)
              if (r[o].name === n) {
                ;(r = r.slice()).splice(o, 1)
                break
              }
          i.tween = r
        }
      }
      function Le(t, n, e) {
        var r, i
        if ("function" != typeof e) throw new Error()
        return function () {
          var a = Ee(this, t),
            o = a.tween
          if (o !== r) {
            i = (r = o).slice()
            for (var f = { name: n, value: e }, c = 0, u = i.length; c < u; ++c)
              if (i[c].name === n) {
                i[c] = f
                break
              }
            c === u && i.push(f)
          }
          a.tween = i
        }
      }
      function Oe(t, n, e) {
        var r = t._id
        return (
          t.each(function () {
            var t = Ee(this, r)
            ;(t.value || (t.value = {}))[n] = e.apply(this, arguments)
          }),
          function (t) {
            return ke(t, r).value[n]
          }
        )
      }
      var je = function (t, n) {
        var e
        return (
          "number" == typeof n
            ? jn
            : n instanceof qt
            ? Un
            : (e = qt(n))
            ? ((n = e), Un)
            : $n
        )(t, n)
      }
      function Re(t, n) {
        var e, r
        function i() {
          var i = n.apply(this, arguments)
          return (
            i !== r &&
              (e =
                (r = i) &&
                (function (t, n) {
                  return function (e) {
                    this.setAttributeNS(t.space, t.local, n(e))
                  }
                })(t, i)),
            e
          )
        }
        return (i._value = n), i
      }
      function De(t, n) {
        var e, r
        function i() {
          var i = n.apply(this, arguments)
          return (
            i !== r &&
              (e =
                (r = i) &&
                (function (t, n) {
                  return function (e) {
                    this.setAttribute(t, n(e))
                  }
                })(t, i)),
            e
          )
        }
        return (i._value = n), i
      }
      function Fe(t, n) {
        return function () {
          Ce(this, t).delay = +n.apply(this, arguments)
        }
      }
      function Ie(t, n) {
        return (
          (n = +n),
          function () {
            Ce(this, t).delay = n
          }
        )
      }
      function Ye(t, n) {
        return function () {
          Ee(this, t).duration = +n.apply(this, arguments)
        }
      }
      function qe(t, n) {
        return (
          (n = +n),
          function () {
            Ee(this, t).duration = n
          }
        )
      }
      function $e(t, n) {
        if ("function" != typeof n) throw new Error()
        return function () {
          Ee(this, t).ease = n
        }
      }
      function He(t, n, e) {
        var r,
          i,
          a = (function (t) {
            return (t + "")
              .trim()
              .split(/^|\s+/)
              .every(function (t) {
                var n = t.indexOf(".")
                return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
              })
          })(n)
            ? Ce
            : Ee
        return function () {
          var o = a(this, t),
            f = o.on
          f !== r && (i = (r = f).copy()).on(n, e), (o.on = i)
        }
      }
      var ze = mt.prototype.constructor
      function Xe(t) {
        return function () {
          this.style.removeProperty(t)
        }
      }
      function Ve(t, n, e) {
        var r, i
        function a() {
          var a = n.apply(this, arguments)
          return (
            a !== i &&
              (r =
                (i = a) &&
                (function (t, n, e) {
                  return function (r) {
                    this.style.setProperty(t, n(r), e)
                  }
                })(t, a, e)),
            r
          )
        }
        return (a._value = n), a
      }
      var Be = 0
      function Ze(t, n, e, r) {
        ;(this._groups = t),
          (this._parents = n),
          (this._name = e),
          (this._id = r)
      }
      function We(t) {
        return mt().transition(t)
      }
      function Ge() {
        return ++Be
      }
      var Je = mt.prototype
      Ze.prototype = We.prototype = {
        constructor: Ze,
        select: function (t) {
          var n = this._name,
            e = this._id
          "function" != typeof t && (t = x(t))
          for (
            var r = this._groups, i = r.length, a = new Array(i), o = 0;
            o < i;
            ++o
          )
            for (
              var f,
                c,
                u = r[o],
                s = u.length,
                h = (a[o] = new Array(s)),
                l = 0;
              l < s;
              ++l
            )
              (f = u[l]) &&
                (c = t.call(f, f.__data__, l, u)) &&
                ("__data__" in f && (c.__data__ = f.__data__),
                (h[l] = c),
                Ae(h[l], n, e, l, h, ke(f, e)))
          return new Ze(a, this._parents, n, e)
        },
        selectAll: function (t) {
          var n = this._name,
            e = this._id
          "function" != typeof t && (t = w(t))
          for (
            var r = this._groups, i = r.length, a = [], o = [], f = 0;
            f < i;
            ++f
          )
            for (var c, u = r[f], s = u.length, h = 0; h < s; ++h)
              if ((c = u[h])) {
                for (
                  var l,
                    d = t.call(c, c.__data__, h, u),
                    p = ke(c, e),
                    _ = 0,
                    b = d.length;
                  _ < b;
                  ++_
                )
                  (l = d[_]) && Ae(l, n, e, _, d, p)
                a.push(d), o.push(c)
              }
          return new Ze(a, o, n, e)
        },
        filter: function (t) {
          "function" != typeof t && (t = M(t))
          for (
            var n = this._groups, e = n.length, r = new Array(e), i = 0;
            i < e;
            ++i
          )
            for (
              var a, o = n[i], f = o.length, c = (r[i] = []), u = 0;
              u < f;
              ++u
            )
              (a = o[u]) && t.call(a, a.__data__, u, o) && c.push(a)
          return new Ze(r, this._parents, this._name, this._id)
        },
        merge: function (t) {
          if (t._id !== this._id) throw new Error()
          for (
            var n = this._groups,
              e = t._groups,
              r = n.length,
              i = e.length,
              a = Math.min(r, i),
              o = new Array(r),
              f = 0;
            f < a;
            ++f
          )
            for (
              var c,
                u = n[f],
                s = e[f],
                h = u.length,
                l = (o[f] = new Array(h)),
                d = 0;
              d < h;
              ++d
            )
              (c = u[d] || s[d]) && (l[d] = c)
          for (; f < r; ++f) o[f] = n[f]
          return new Ze(o, this._parents, this._name, this._id)
        },
        selection: function () {
          return new ze(this._groups, this._parents)
        },
        transition: function () {
          for (
            var t = this._name,
              n = this._id,
              e = Ge(),
              r = this._groups,
              i = r.length,
              a = 0;
            a < i;
            ++a
          )
            for (var o, f = r[a], c = f.length, u = 0; u < c; ++u)
              if ((o = f[u])) {
                var s = ke(o, n)
                Ae(o, t, e, u, f, {
                  time: s.time + s.delay + s.duration,
                  delay: 0,
                  duration: s.duration,
                  ease: s.ease,
                })
              }
          return new Ze(r, this._parents, t, e)
        },
        call: Je.call,
        nodes: Je.nodes,
        node: Je.node,
        size: Je.size,
        empty: Je.empty,
        each: Je.each,
        on: function (t, n) {
          var e = this._id
          return arguments.length < 2
            ? ke(this.node(), e).on.on(t)
            : this.each(He(e, t, n))
        },
        attr: function (t, n) {
          var e = y(t),
            r = "transform" === e ? Zn : je
          return this.attrTween(
            t,
            "function" == typeof n
              ? (e.local
                  ? function (t, n, e) {
                      var r, i, a
                      return function () {
                        var o,
                          f,
                          c = e(this)
                        if (null != c)
                          return (o = this.getAttributeNS(t.space, t.local)) ===
                            (f = c + "")
                            ? null
                            : o === r && f === i
                            ? a
                            : ((i = f), (a = n((r = o), c)))
                        this.removeAttributeNS(t.space, t.local)
                      }
                    }
                  : function (t, n, e) {
                      var r, i, a
                      return function () {
                        var o,
                          f,
                          c = e(this)
                        if (null != c)
                          return (o = this.getAttribute(t)) === (f = c + "")
                            ? null
                            : o === r && f === i
                            ? a
                            : ((i = f), (a = n((r = o), c)))
                        this.removeAttribute(t)
                      }
                    })(e, r, Oe(this, "attr." + t, n))
              : null == n
              ? (e.local
                  ? function (t) {
                      return function () {
                        this.removeAttributeNS(t.space, t.local)
                      }
                    }
                  : function (t) {
                      return function () {
                        this.removeAttribute(t)
                      }
                    })(e)
              : (e.local
                  ? function (t, n, e) {
                      var r,
                        i,
                        a = e + ""
                      return function () {
                        var o = this.getAttributeNS(t.space, t.local)
                        return o === a
                          ? null
                          : o === r
                          ? i
                          : (i = n((r = o), e))
                      }
                    }
                  : function (t, n, e) {
                      var r,
                        i,
                        a = e + ""
                      return function () {
                        var o = this.getAttribute(t)
                        return o === a
                          ? null
                          : o === r
                          ? i
                          : (i = n((r = o), e))
                      }
                    })(e, r, n)
          )
        },
        attrTween: function (t, n) {
          var e = "attr." + t
          if (arguments.length < 2) return (e = this.tween(e)) && e._value
          if (null == n) return this.tween(e, null)
          if ("function" != typeof n) throw new Error()
          var r = y(t)
          return this.tween(e, (r.local ? Re : De)(r, n))
        },
        style: function (t, n, e) {
          var r = "transform" == (t += "") ? Bn : je
          return null == n
            ? this.styleTween(
                t,
                (function (t, n) {
                  var e, r, i
                  return function () {
                    var a = Y(this, t),
                      o = (this.style.removeProperty(t), Y(this, t))
                    return a === o
                      ? null
                      : a === e && o === r
                      ? i
                      : (i = n((e = a), (r = o)))
                  }
                })(t, r)
              ).on("end.style." + t, Xe(t))
            : "function" == typeof n
            ? this.styleTween(
                t,
                (function (t, n, e) {
                  var r, i, a
                  return function () {
                    var o = Y(this, t),
                      f = e(this),
                      c = f + ""
                    return (
                      null == f &&
                        (this.style.removeProperty(t), (c = f = Y(this, t))),
                      o === c
                        ? null
                        : o === r && c === i
                        ? a
                        : ((i = c), (a = n((r = o), f)))
                    )
                  }
                })(t, r, Oe(this, "style." + t, n))
              ).each(
                (function (t, n) {
                  var e,
                    r,
                    i,
                    a,
                    o = "style." + n,
                    f = "end." + o
                  return function () {
                    var c = Ee(this, t),
                      u = c.on,
                      s = null == c.value[o] ? a || (a = Xe(n)) : void 0
                    ;(u === e && i === s) ||
                      (r = (e = u).copy()).on(f, (i = s)),
                      (c.on = r)
                  }
                })(this._id, t)
              )
            : this.styleTween(
                t,
                (function (t, n, e) {
                  var r,
                    i,
                    a = e + ""
                  return function () {
                    var o = Y(this, t)
                    return o === a ? null : o === r ? i : (i = n((r = o), e))
                  }
                })(t, r, n),
                e
              ).on("end.style." + t, null)
        },
        styleTween: function (t, n, e) {
          var r = "style." + (t += "")
          if (arguments.length < 2) return (r = this.tween(r)) && r._value
          if (null == n) return this.tween(r, null)
          if ("function" != typeof n) throw new Error()
          return this.tween(r, Ve(t, n, null == e ? "" : e))
        },
        text: function (t) {
          return this.tween(
            "text",
            "function" == typeof t
              ? (function (t) {
                  return function () {
                    var n = t(this)
                    this.textContent = null == n ? "" : n
                  }
                })(Oe(this, "text", t))
              : (function (t) {
                  return function () {
                    this.textContent = t
                  }
                })(null == t ? "" : t + "")
          )
        },
        remove: function () {
          return this.on(
            "end.remove",
            ((t = this._id),
            function () {
              var n = this.parentNode
              for (var e in this.__transition) if (+e !== t) return
              n && n.removeChild(this)
            })
          )
          var t
        },
        tween: function (t, n) {
          var e = this._id
          if (((t += ""), arguments.length < 2)) {
            for (
              var r, i = ke(this.node(), e).tween, a = 0, o = i.length;
              a < o;
              ++a
            )
              if ((r = i[a]).name === t) return r.value
            return null
          }
          return this.each((null == n ? Ue : Le)(e, t, n))
        },
        delay: function (t) {
          var n = this._id
          return arguments.length
            ? this.each(("function" == typeof t ? Fe : Ie)(n, t))
            : ke(this.node(), n).delay
        },
        duration: function (t) {
          var n = this._id
          return arguments.length
            ? this.each(("function" == typeof t ? Ye : qe)(n, t))
            : ke(this.node(), n).duration
        },
        ease: function (t) {
          var n = this._id
          return arguments.length
            ? this.each($e(n, t))
            : ke(this.node(), n).ease
        },
        end: function () {
          var t,
            n,
            e = this,
            r = e._id,
            i = e.size()
          return new Promise(function (a, o) {
            var f = { value: o },
              c = {
                value: function () {
                  0 == --i && a()
                },
              }
            e.each(function () {
              var e = Ee(this, r),
                i = e.on
              i !== t &&
                ((n = (t = i).copy())._.cancel.push(f),
                n._.interrupt.push(f),
                n._.end.push(c)),
                (e.on = n)
            })
          })
        },
      }
      ;(function t(n) {
        function e(t) {
          return Math.pow(t, n)
        }
        return (n = +n), (e.exponent = t), e
      })(3),
        (function t(n) {
          function e(t) {
            return 1 - Math.pow(1 - t, n)
          }
          return (n = +n), (e.exponent = t), e
        })(3),
        (function t(n) {
          function e(t) {
            return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
          }
          return (n = +n), (e.exponent = t), e
        })(3),
        Math.PI
      ;(function t(n) {
        function e(t) {
          return t * t * ((n + 1) * t - n)
        }
        return (n = +n), (e.overshoot = t), e
      })(1.70158),
        (function t(n) {
          function e(t) {
            return --t * t * ((n + 1) * t + n) + 1
          }
          return (n = +n), (e.overshoot = t), e
        })(1.70158),
        (function t(n) {
          function e(t) {
            return (
              ((t *= 2) < 1
                ? t * t * ((n + 1) * t - n)
                : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
            )
          }
          return (n = +n), (e.overshoot = t), e
        })(1.70158)
      var Qe = 2 * Math.PI,
        Ke =
          ((function t(n, e) {
            var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Qe)
            function i(t) {
              return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e)
            }
            return (
              (i.amplitude = function (n) {
                return t(n, e * Qe)
              }),
              (i.period = function (e) {
                return t(n, e)
              }),
              i
            )
          })(1, 0.3),
          (function t(n, e) {
            var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Qe)
            function i(t) {
              return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / e)
            }
            return (
              (i.amplitude = function (n) {
                return t(n, e * Qe)
              }),
              (i.period = function (e) {
                return t(n, e)
              }),
              i
            )
          })(1, 0.3),
          (function t(n, e) {
            var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Qe)
            function i(t) {
              return (
                ((t = 2 * t - 1) < 0
                  ? n * Math.pow(2, 10 * t) * Math.sin((r - t) / e)
                  : 2 - n * Math.pow(2, -10 * t) * Math.sin((r + t) / e)) / 2
              )
            }
            return (
              (i.amplitude = function (n) {
                return t(n, e * Qe)
              }),
              (i.period = function (e) {
                return t(n, e)
              }),
              i
            )
          })(1, 0.3),
          {
            time: null,
            delay: 0,
            duration: 250,
            ease: function (t) {
              return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
            },
          })
      function tr(t, n) {
        for (var e; !(e = t.__transition) || !(e = e[n]); )
          if (!(t = t.parentNode)) return (Ke.time = se()), Ke
        return e
      }
      ;(mt.prototype.interrupt = function (t) {
        return this.each(function () {
          Pe(this, t)
        })
      }),
        (mt.prototype.transition = function (t) {
          var n, e
          t instanceof Ze
            ? ((n = t._id), (t = t._name))
            : ((n = Ge()),
              ((e = Ke).time = se()),
              (t = null == t ? null : t + ""))
          for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
            for (var o, f = r[a], c = f.length, u = 0; u < c; ++u)
              (o = f[u]) && Ae(o, t, n, u, f, e || tr(o, n))
          return new Ze(r, this._parents, t, n)
        })
      ;["e", "w"].map(nr),
        ["n", "s"].map(nr),
        ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(nr)
      function nr(t) {
        return { type: t }
      }
      Math.cos, Math.sin, Math.PI, Math.max
      Array.prototype.slice
      var er = Math.PI,
        rr = 2 * er,
        ir = rr - 1e-6
      function ar() {
        ;(this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "")
      }
      function or() {
        return new ar()
      }
      ar.prototype = or.prototype = {
        constructor: ar,
        moveTo: function (t, n) {
          this._ +=
            "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
        },
        closePath: function () {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"))
        },
        lineTo: function (t, n) {
          this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
        },
        quadraticCurveTo: function (t, n, e, r) {
          this._ +=
            "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
        },
        bezierCurveTo: function (t, n, e, r, i, a) {
          this._ +=
            "C" +
            +t +
            "," +
            +n +
            "," +
            +e +
            "," +
            +r +
            "," +
            (this._x1 = +i) +
            "," +
            (this._y1 = +a)
        },
        arcTo: function (t, n, e, r, i) {
          ;(t = +t), (n = +n), (e = +e), (r = +r), (i = +i)
          var a = this._x1,
            o = this._y1,
            f = e - t,
            c = r - n,
            u = a - t,
            s = o - n,
            h = u * u + s * s
          if (i < 0) throw new Error("negative radius: " + i)
          if (null === this._x1)
            this._ += "M" + (this._x1 = t) + "," + (this._y1 = n)
          else if (h > 1e-6)
            if (Math.abs(s * f - c * u) > 1e-6 && i) {
              var l = e - a,
                d = r - o,
                p = f * f + c * c,
                _ = l * l + d * d,
                b = Math.sqrt(p),
                y = Math.sqrt(h),
                v =
                  i * Math.tan((er - Math.acos((p + h - _) / (2 * b * y))) / 2),
                g = v / y,
                x = v / b
              Math.abs(g - 1) > 1e-6 &&
                (this._ += "L" + (t + g * u) + "," + (n + g * s)),
                (this._ +=
                  "A" +
                  i +
                  "," +
                  i +
                  ",0,0," +
                  +(s * l > u * d) +
                  "," +
                  (this._x1 = t + x * f) +
                  "," +
                  (this._y1 = n + x * c))
            } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n)
          else;
        },
        arc: function (t, n, e, r, i, a) {
          ;(t = +t), (n = +n)
          var o = (e = +e) * Math.cos(r),
            f = e * Math.sin(r),
            c = t + o,
            u = n + f,
            s = 1 ^ a,
            h = a ? r - i : i - r
          if (e < 0) throw new Error("negative radius: " + e)
          null === this._x1
            ? (this._ += "M" + c + "," + u)
            : (Math.abs(this._x1 - c) > 1e-6 ||
                Math.abs(this._y1 - u) > 1e-6) &&
              (this._ += "L" + c + "," + u),
            e &&
              (h < 0 && (h = (h % rr) + rr),
              h > ir
                ? (this._ +=
                    "A" +
                    e +
                    "," +
                    e +
                    ",0,1," +
                    s +
                    "," +
                    (t - o) +
                    "," +
                    (n - f) +
                    "A" +
                    e +
                    "," +
                    e +
                    ",0,1," +
                    s +
                    "," +
                    (this._x1 = c) +
                    "," +
                    (this._y1 = u))
                : h > 1e-6 &&
                  (this._ +=
                    "A" +
                    e +
                    "," +
                    e +
                    ",0," +
                    +(h >= er) +
                    "," +
                    s +
                    "," +
                    (this._x1 = t + e * Math.cos(i)) +
                    "," +
                    (this._y1 = n + e * Math.sin(i))))
        },
        rect: function (t, n, e, r) {
          this._ +=
            "M" +
            (this._x0 = this._x1 = +t) +
            "," +
            (this._y0 = this._y1 = +n) +
            "h" +
            +e +
            "v" +
            +r +
            "h" +
            -e +
            "Z"
        },
        toString: function () {
          return this._
        },
      }
      function fr() {}
      function cr(t, n) {
        var e = new fr()
        if (t instanceof fr)
          t.each(function (t, n) {
            e.set(n, t)
          })
        else if (Array.isArray(t)) {
          var r,
            i = -1,
            a = t.length
          if (null == n) for (; ++i < a; ) e.set(i, t[i])
          else for (; ++i < a; ) e.set(n((r = t[i]), i, t), r)
        } else if (t) for (var o in t) e.set(o, t[o])
        return e
      }
      fr.prototype = cr.prototype = {
        constructor: fr,
        has: function (t) {
          return "$" + t in this
        },
        get: function (t) {
          return this["$" + t]
        },
        set: function (t, n) {
          return (this["$" + t] = n), this
        },
        remove: function (t) {
          var n = "$" + t
          return n in this && delete this[n]
        },
        clear: function () {
          for (var t in this) "$" === t[0] && delete this[t]
        },
        keys: function () {
          var t = []
          for (var n in this) "$" === n[0] && t.push(n.slice(1))
          return t
        },
        values: function () {
          var t = []
          for (var n in this) "$" === n[0] && t.push(this[n])
          return t
        },
        entries: function () {
          var t = []
          for (var n in this)
            "$" === n[0] && t.push({ key: n.slice(1), value: this[n] })
          return t
        },
        size: function () {
          var t = 0
          for (var n in this) "$" === n[0] && ++t
          return t
        },
        empty: function () {
          for (var t in this) if ("$" === t[0]) return !1
          return !0
        },
        each: function (t) {
          for (var n in this) "$" === n[0] && t(this[n], n.slice(1), this)
        },
      }
      var ur = cr
      function sr() {}
      var hr = ur.prototype
      function lr(t, n) {
        var e = new sr()
        if (t instanceof sr)
          t.each(function (t) {
            e.add(t)
          })
        else if (t) {
          var r = -1,
            i = t.length
          if (null == n) for (; ++r < i; ) e.add(t[r])
          else for (; ++r < i; ) e.add(n(t[r], r, t))
        }
        return e
      }
      sr.prototype = lr.prototype = {
        constructor: sr,
        has: hr.has,
        add: function (t) {
          return (this["$" + (t += "")] = t), this
        },
        remove: hr.remove,
        clear: hr.clear,
        values: hr.keys,
        size: hr.size,
        empty: hr.empty,
        each: hr.each,
      }
      Array.prototype.slice
      var dr = {},
        pr = {},
        _r = 34,
        br = 10,
        yr = 13
      function vr(t) {
        return new Function(
          "d",
          "return {" +
            t
              .map(function (t, n) {
                return JSON.stringify(t) + ": d[" + n + "]"
              })
              .join(",") +
            "}"
        )
      }
      function gr(t) {
        var n = Object.create(null),
          e = []
        return (
          t.forEach(function (t) {
            for (var r in t) r in n || e.push((n[r] = r))
          }),
          e
        )
      }
      function xr(t, n) {
        var e = t + "",
          r = e.length
        return r < n ? new Array(n - r + 1).join(0) + e : e
      }
      function mr(t) {
        var n,
          e = t.getUTCHours(),
          r = t.getUTCMinutes(),
          i = t.getUTCSeconds(),
          a = t.getUTCMilliseconds()
        return isNaN(t)
          ? "Invalid Date"
          : ((n = t.getUTCFullYear()) < 0
              ? "-" + xr(-n, 6)
              : n > 9999
              ? "+" + xr(n, 6)
              : xr(n, 4)) +
              "-" +
              xr(t.getUTCMonth() + 1, 2) +
              "-" +
              xr(t.getUTCDate(), 2) +
              (a
                ? "T" +
                  xr(e, 2) +
                  ":" +
                  xr(r, 2) +
                  ":" +
                  xr(i, 2) +
                  "." +
                  xr(a, 3) +
                  "Z"
                : i
                ? "T" + xr(e, 2) + ":" + xr(r, 2) + ":" + xr(i, 2) + "Z"
                : r || e
                ? "T" + xr(e, 2) + ":" + xr(r, 2) + "Z"
                : "")
      }
      var wr = function (t) {
          var n = new RegExp('["' + t + "\n\r]"),
            e = t.charCodeAt(0)
          function r(t, n) {
            var r,
              i = [],
              a = t.length,
              o = 0,
              f = 0,
              c = a <= 0,
              u = !1
            function s() {
              if (c) return pr
              if (u) return (u = !1), dr
              var n,
                r,
                i = o
              if (t.charCodeAt(i) === _r) {
                for (
                  ;
                  (o++ < a && t.charCodeAt(o) !== _r) ||
                  t.charCodeAt(++o) === _r;

                );
                return (
                  (n = o) >= a
                    ? (c = !0)
                    : (r = t.charCodeAt(o++)) === br
                    ? (u = !0)
                    : r === yr && ((u = !0), t.charCodeAt(o) === br && ++o),
                  t.slice(i + 1, n - 1).replace(/""/g, '"')
                )
              }
              for (; o < a; ) {
                if ((r = t.charCodeAt((n = o++))) === br) u = !0
                else if (r === yr) (u = !0), t.charCodeAt(o) === br && ++o
                else if (r !== e) continue
                return t.slice(i, n)
              }
              return (c = !0), t.slice(i, a)
            }
            for (
              t.charCodeAt(a - 1) === br && --a,
                t.charCodeAt(a - 1) === yr && --a;
              (r = s()) !== pr;

            ) {
              for (var h = []; r !== dr && r !== pr; ) h.push(r), (r = s())
              ;(n && null == (h = n(h, f++))) || i.push(h)
            }
            return i
          }
          function i(n, e) {
            return n.map(function (n) {
              return e
                .map(function (t) {
                  return o(n[t])
                })
                .join(t)
            })
          }
          function a(n) {
            return n.map(o).join(t)
          }
          function o(t) {
            return null == t
              ? ""
              : t instanceof Date
              ? mr(t)
              : n.test((t += ""))
              ? '"' + t.replace(/"/g, '""') + '"'
              : t
          }
          return {
            parse: function (t, n) {
              var e,
                i,
                a = r(t, function (t, r) {
                  if (e) return e(t, r - 1)
                  ;(i = t),
                    (e = n
                      ? (function (t, n) {
                          var e = vr(t)
                          return function (r, i) {
                            return n(e(r), i, t)
                          }
                        })(t, n)
                      : vr(t))
                })
              return (a.columns = i || []), a
            },
            parseRows: r,
            format: function (n, e) {
              return (
                null == e && (e = gr(n)),
                [e.map(o).join(t)].concat(i(n, e)).join("\n")
              )
            },
            formatBody: function (t, n) {
              return null == n && (n = gr(t)), i(t, n).join("\n")
            },
            formatRows: function (t) {
              return t.map(a).join("\n")
            },
          }
        },
        Mr = wr(","),
        Sr = Mr.parse,
        Nr = (Mr.parseRows, Mr.format, Mr.formatBody, Mr.formatRows, wr("\t")),
        Tr = Nr.parse
      Nr.parseRows, Nr.format, Nr.formatBody, Nr.formatRows
      function Ar(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText)
        return t.text()
      }
      var Cr = function (t, n) {
        return fetch(t, n).then(Ar)
      }
      function Er(t) {
        return function (n, e, r) {
          return (
            2 === arguments.length &&
              "function" == typeof e &&
              ((r = e), (e = void 0)),
            Cr(n, e).then(function (n) {
              return t(n, r)
            })
          )
        }
      }
      var kr = Er(Sr)
      Er(Tr)
      function Pr(t) {
        return function (n, e) {
          return Cr(n, e).then(function (n) {
            return new DOMParser().parseFromString(n, t)
          })
        }
      }
      Pr("application/xml"), Pr("text/html"), Pr("image/svg+xml")
      function Ur(t, n, e, r) {
        if (isNaN(n) || isNaN(e)) return t
        var i,
          a,
          o,
          f,
          c,
          u,
          s,
          h,
          l,
          d = t._root,
          p = { data: r },
          _ = t._x0,
          b = t._y0,
          y = t._x1,
          v = t._y1
        if (!d) return (t._root = p), t
        for (; d.length; )
          if (
            ((u = n >= (a = (_ + y) / 2)) ? (_ = a) : (y = a),
            (s = e >= (o = (b + v) / 2)) ? (b = o) : (v = o),
            (i = d),
            !(d = d[(h = (s << 1) | u)]))
          )
            return (i[h] = p), t
        if (
          ((f = +t._x.call(null, d.data)),
          (c = +t._y.call(null, d.data)),
          n === f && e === c)
        )
          return (p.next = d), i ? (i[h] = p) : (t._root = p), t
        do {
          ;(i = i ? (i[h] = new Array(4)) : (t._root = new Array(4))),
            (u = n >= (a = (_ + y) / 2)) ? (_ = a) : (y = a),
            (s = e >= (o = (b + v) / 2)) ? (b = o) : (v = o)
        } while ((h = (s << 1) | u) == (l = ((c >= o) << 1) | (f >= a)))
        return (i[l] = d), (i[h] = p), t
      }
      var Lr = function (t, n, e, r, i) {
        ;(this.node = t),
          (this.x0 = n),
          (this.y0 = e),
          (this.x1 = r),
          (this.y1 = i)
      }
      function Or(t) {
        return t[0]
      }
      function jr(t) {
        return t[1]
      }
      function Rr(t, n, e) {
        var r = new Dr(
          null == n ? Or : n,
          null == e ? jr : e,
          NaN,
          NaN,
          NaN,
          NaN
        )
        return null == t ? r : r.addAll(t)
      }
      function Dr(t, n, e, r, i, a) {
        ;(this._x = t),
          (this._y = n),
          (this._x0 = e),
          (this._y0 = r),
          (this._x1 = i),
          (this._y1 = a),
          (this._root = void 0)
      }
      function Fr(t) {
        for (var n = { data: t.data }, e = n; (t = t.next); )
          e = e.next = { data: t.data }
        return n
      }
      var Ir = (Rr.prototype = Dr.prototype)
      ;(Ir.copy = function () {
        var t,
          n,
          e = new Dr(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
          r = this._root
        if (!r) return e
        if (!r.length) return (e._root = Fr(r)), e
        for (
          t = [{ source: r, target: (e._root = new Array(4)) }];
          (r = t.pop());

        )
          for (var i = 0; i < 4; ++i)
            (n = r.source[i]) &&
              (n.length
                ? t.push({ source: n, target: (r.target[i] = new Array(4)) })
                : (r.target[i] = Fr(n)))
        return e
      }),
        (Ir.add = function (t) {
          var n = +this._x.call(null, t),
            e = +this._y.call(null, t)
          return Ur(this.cover(n, e), n, e, t)
        }),
        (Ir.addAll = function (t) {
          var n,
            e,
            r,
            i,
            a = t.length,
            o = new Array(a),
            f = new Array(a),
            c = 1 / 0,
            u = 1 / 0,
            s = -1 / 0,
            h = -1 / 0
          for (e = 0; e < a; ++e)
            isNaN((r = +this._x.call(null, (n = t[e])))) ||
              isNaN((i = +this._y.call(null, n))) ||
              ((o[e] = r),
              (f[e] = i),
              r < c && (c = r),
              r > s && (s = r),
              i < u && (u = i),
              i > h && (h = i))
          if (c > s || u > h) return this
          for (this.cover(c, u).cover(s, h), e = 0; e < a; ++e)
            Ur(this, o[e], f[e], t[e])
          return this
        }),
        (Ir.cover = function (t, n) {
          if (isNaN((t = +t)) || isNaN((n = +n))) return this
          var e = this._x0,
            r = this._y0,
            i = this._x1,
            a = this._y1
          if (isNaN(e))
            (i = (e = Math.floor(t)) + 1), (a = (r = Math.floor(n)) + 1)
          else {
            for (
              var o, f, c = i - e, u = this._root;
              e > t || t >= i || r > n || n >= a;

            )
              switch (
                ((f = ((n < r) << 1) | (t < e)),
                ((o = new Array(4))[f] = u),
                (u = o),
                (c *= 2),
                f)
              ) {
                case 0:
                  ;(i = e + c), (a = r + c)
                  break
                case 1:
                  ;(e = i - c), (a = r + c)
                  break
                case 2:
                  ;(i = e + c), (r = a - c)
                  break
                case 3:
                  ;(e = i - c), (r = a - c)
              }
            this._root && this._root.length && (this._root = u)
          }
          return (
            (this._x0 = e), (this._y0 = r), (this._x1 = i), (this._y1 = a), this
          )
        }),
        (Ir.data = function () {
          var t = []
          return (
            this.visit(function (n) {
              if (!n.length)
                do {
                  t.push(n.data)
                } while ((n = n.next))
            }),
            t
          )
        }),
        (Ir.extent = function (t) {
          return arguments.length
            ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
            : isNaN(this._x0)
            ? void 0
            : [
                [this._x0, this._y0],
                [this._x1, this._y1],
              ]
        }),
        (Ir.find = function (t, n, e) {
          var r,
            i,
            a,
            o,
            f,
            c,
            u,
            s = this._x0,
            h = this._y0,
            l = this._x1,
            d = this._y1,
            p = [],
            _ = this._root
          for (
            _ && p.push(new Lr(_, s, h, l, d)),
              null == e
                ? (e = 1 / 0)
                : ((s = t - e),
                  (h = n - e),
                  (l = t + e),
                  (d = n + e),
                  (e *= e));
            (c = p.pop());

          )
            if (
              !(
                !(_ = c.node) ||
                (i = c.x0) > l ||
                (a = c.y0) > d ||
                (o = c.x1) < s ||
                (f = c.y1) < h
              )
            )
              if (_.length) {
                var b = (i + o) / 2,
                  y = (a + f) / 2
                p.push(
                  new Lr(_[3], b, y, o, f),
                  new Lr(_[2], i, y, b, f),
                  new Lr(_[1], b, a, o, y),
                  new Lr(_[0], i, a, b, y)
                ),
                  (u = ((n >= y) << 1) | (t >= b)) &&
                    ((c = p[p.length - 1]),
                    (p[p.length - 1] = p[p.length - 1 - u]),
                    (p[p.length - 1 - u] = c))
              } else {
                var v = t - +this._x.call(null, _.data),
                  g = n - +this._y.call(null, _.data),
                  x = v * v + g * g
                if (x < e) {
                  var m = Math.sqrt((e = x))
                  ;(s = t - m),
                    (h = n - m),
                    (l = t + m),
                    (d = n + m),
                    (r = _.data)
                }
              }
          return r
        }),
        (Ir.remove = function (t) {
          if (
            isNaN((a = +this._x.call(null, t))) ||
            isNaN((o = +this._y.call(null, t)))
          )
            return this
          var n,
            e,
            r,
            i,
            a,
            o,
            f,
            c,
            u,
            s,
            h,
            l,
            d = this._root,
            p = this._x0,
            _ = this._y0,
            b = this._x1,
            y = this._y1
          if (!d) return this
          if (d.length)
            for (;;) {
              if (
                ((u = a >= (f = (p + b) / 2)) ? (p = f) : (b = f),
                (s = o >= (c = (_ + y) / 2)) ? (_ = c) : (y = c),
                (n = d),
                !(d = d[(h = (s << 1) | u)]))
              )
                return this
              if (!d.length) break
              ;(n[(h + 1) & 3] || n[(h + 2) & 3] || n[(h + 3) & 3]) &&
                ((e = n), (l = h))
            }
          for (; d.data !== t; ) if (((r = d), !(d = d.next))) return this
          return (
            (i = d.next) && delete d.next,
            r
              ? (i ? (r.next = i) : delete r.next, this)
              : n
              ? (i ? (n[h] = i) : delete n[h],
                (d = n[0] || n[1] || n[2] || n[3]) &&
                  d === (n[3] || n[2] || n[1] || n[0]) &&
                  !d.length &&
                  (e ? (e[l] = d) : (this._root = d)),
                this)
              : ((this._root = i), this)
          )
        }),
        (Ir.removeAll = function (t) {
          for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n])
          return this
        }),
        (Ir.root = function () {
          return this._root
        }),
        (Ir.size = function () {
          var t = 0
          return (
            this.visit(function (n) {
              if (!n.length)
                do {
                  ++t
                } while ((n = n.next))
            }),
            t
          )
        }),
        (Ir.visit = function (t) {
          var n,
            e,
            r,
            i,
            a,
            o,
            f = [],
            c = this._root
          for (
            c && f.push(new Lr(c, this._x0, this._y0, this._x1, this._y1));
            (n = f.pop());

          )
            if (
              !t(
                (c = n.node),
                (r = n.x0),
                (i = n.y0),
                (a = n.x1),
                (o = n.y1)
              ) &&
              c.length
            ) {
              var u = (r + a) / 2,
                s = (i + o) / 2
              ;(e = c[3]) && f.push(new Lr(e, u, s, a, o)),
                (e = c[2]) && f.push(new Lr(e, r, s, u, o)),
                (e = c[1]) && f.push(new Lr(e, u, i, a, s)),
                (e = c[0]) && f.push(new Lr(e, r, i, u, s))
            }
          return this
        }),
        (Ir.visitAfter = function (t) {
          var n,
            e = [],
            r = []
          for (
            this._root &&
            e.push(new Lr(this._root, this._x0, this._y0, this._x1, this._y1));
            (n = e.pop());

          ) {
            var i = n.node
            if (i.length) {
              var a,
                o = n.x0,
                f = n.y0,
                c = n.x1,
                u = n.y1,
                s = (o + c) / 2,
                h = (f + u) / 2
              ;(a = i[0]) && e.push(new Lr(a, o, f, s, h)),
                (a = i[1]) && e.push(new Lr(a, s, f, c, h)),
                (a = i[2]) && e.push(new Lr(a, o, h, s, u)),
                (a = i[3]) && e.push(new Lr(a, s, h, c, u))
            }
            r.push(n)
          }
          for (; (n = r.pop()); ) t(n.node, n.x0, n.y0, n.x1, n.y1)
          return this
        }),
        (Ir.x = function (t) {
          return arguments.length ? ((this._x = t), this) : this._x
        }),
        (Ir.y = function (t) {
          return arguments.length ? ((this._y = t), this) : this._y
        })
      Math.PI, Math.sqrt(5)
      var Yr = function (t, n) {
          if (
            (e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf(
              "e"
            )) < 0
          )
            return null
          var e,
            r = t.slice(0, e)
          return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
        },
        qr = function (t) {
          return (t = Yr(Math.abs(t))) ? t[1] : NaN
        },
        $r =
          /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
      function Hr(t) {
        return new zr(t)
      }
      function zr(t) {
        if (!(n = $r.exec(t))) throw new Error("invalid format: " + t)
        var n
        ;(this.fill = n[1] || " "),
          (this.align = n[2] || ">"),
          (this.sign = n[3] || "-"),
          (this.symbol = n[4] || ""),
          (this.zero = !!n[5]),
          (this.width = n[6] && +n[6]),
          (this.comma = !!n[7]),
          (this.precision = n[8] && +n[8].slice(1)),
          (this.trim = !!n[9]),
          (this.type = n[10] || "")
      }
      ;(Hr.prototype = zr.prototype),
        (zr.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (null == this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (null == this.precision
              ? ""
              : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
          )
        })
      var Xr,
        Vr,
        Br = function (t) {
          t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
            switch (t[r]) {
              case ".":
                i = n = r
                break
              case "0":
                0 === i && (i = r), (n = r)
                break
              default:
                if (i > 0) {
                  if (!+t[r]) break t
                  i = 0
                }
            }
          return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t
        },
        Zr = function (t, n) {
          var e = Yr(t, n)
          if (!e) return t + ""
          var r = e[0],
            i = e[1]
          return i < 0
            ? "0." + new Array(-i).join("0") + r
            : r.length > i + 1
            ? r.slice(0, i + 1) + "." + r.slice(i + 1)
            : r + new Array(i - r.length + 2).join("0")
        },
        Wr = {
          "%": function (t, n) {
            return (100 * t).toFixed(n)
          },
          b: function (t) {
            return Math.round(t).toString(2)
          },
          c: function (t) {
            return t + ""
          },
          d: function (t) {
            return Math.round(t).toString(10)
          },
          e: function (t, n) {
            return t.toExponential(n)
          },
          f: function (t, n) {
            return t.toFixed(n)
          },
          g: function (t, n) {
            return t.toPrecision(n)
          },
          o: function (t) {
            return Math.round(t).toString(8)
          },
          p: function (t, n) {
            return Zr(100 * t, n)
          },
          r: Zr,
          s: function (t, n) {
            var e = Yr(t, n)
            if (!e) return t + ""
            var r = e[0],
              i = e[1],
              a =
                i - (Xr = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
              o = r.length
            return a === o
              ? r
              : a > o
              ? r + new Array(a - o + 1).join("0")
              : a > 0
              ? r.slice(0, a) + "." + r.slice(a)
              : "0." +
                new Array(1 - a).join("0") +
                Yr(t, Math.max(0, n + a - 1))[0]
          },
          X: function (t) {
            return Math.round(t).toString(16).toUpperCase()
          },
          x: function (t) {
            return Math.round(t).toString(16)
          },
        },
        Gr = function (t) {
          return t
        },
        Jr = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "µ",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y",
        ]
      ;(Vr = (function (t) {
        var n,
          e,
          r =
            t.grouping && t.thousands
              ? ((n = t.grouping),
                (e = t.thousands),
                function (t, r) {
                  for (
                    var i = t.length, a = [], o = 0, f = n[0], c = 0;
                    i > 0 &&
                    f > 0 &&
                    (c + f + 1 > r && (f = Math.max(1, r - c)),
                    a.push(t.substring((i -= f), i + f)),
                    !((c += f + 1) > r));

                  )
                    f = n[(o = (o + 1) % n.length)]
                  return a.reverse().join(e)
                })
              : Gr,
          i = t.currency,
          a = t.decimal,
          o = t.numerals
            ? (function (t) {
                return function (n) {
                  return n.replace(/[0-9]/g, function (n) {
                    return t[+n]
                  })
                }
              })(t.numerals)
            : Gr,
          f = t.percent || "%"
        function c(t) {
          var n = (t = Hr(t)).fill,
            e = t.align,
            c = t.sign,
            u = t.symbol,
            s = t.zero,
            h = t.width,
            l = t.comma,
            d = t.precision,
            p = t.trim,
            _ = t.type
          "n" === _
            ? ((l = !0), (_ = "g"))
            : Wr[_] || (null == d && (d = 12), (p = !0), (_ = "g")),
            (s || ("0" === n && "=" === e)) && ((s = !0), (n = "0"), (e = "="))
          var b =
              "$" === u
                ? i[0]
                : "#" === u && /[boxX]/.test(_)
                ? "0" + _.toLowerCase()
                : "",
            y = "$" === u ? i[1] : /[%p]/.test(_) ? f : "",
            v = Wr[_],
            g = /[defgprs%]/.test(_)
          function x(t) {
            var i,
              f,
              u,
              x = b,
              m = y
            if ("c" === _) (m = v(t) + m), (t = "")
            else {
              var w = (t = +t) < 0
              if (
                ((t = v(Math.abs(t), d)),
                p && (t = Br(t)),
                w && 0 == +t && (w = !1),
                (x =
                  (w
                    ? "(" === c
                      ? c
                      : "-"
                    : "-" === c || "(" === c
                    ? ""
                    : c) + x),
                (m =
                  ("s" === _ ? Jr[8 + Xr / 3] : "") +
                  m +
                  (w && "(" === c ? ")" : "")),
                g)
              )
                for (i = -1, f = t.length; ++i < f; )
                  if (48 > (u = t.charCodeAt(i)) || u > 57) {
                    ;(m = (46 === u ? a + t.slice(i + 1) : t.slice(i)) + m),
                      (t = t.slice(0, i))
                    break
                  }
            }
            l && !s && (t = r(t, 1 / 0))
            var M = x.length + t.length + m.length,
              S = M < h ? new Array(h - M + 1).join(n) : ""
            switch (
              (l &&
                s &&
                ((t = r(S + t, S.length ? h - m.length : 1 / 0)), (S = "")),
              e)
            ) {
              case "<":
                t = x + t + m + S
                break
              case "=":
                t = x + S + t + m
                break
              case "^":
                t = S.slice(0, (M = S.length >> 1)) + x + t + m + S.slice(M)
                break
              default:
                t = S + x + t + m
            }
            return o(t)
          }
          return (
            (d =
              null == d
                ? 6
                : /[gprs]/.test(_)
                ? Math.max(1, Math.min(21, d))
                : Math.max(0, Math.min(20, d))),
            (x.toString = function () {
              return t + ""
            }),
            x
          )
        }
        return {
          format: c,
          formatPrefix: function (t, n) {
            var e = c((((t = Hr(t)).type = "f"), t)),
              r = 3 * Math.max(-8, Math.min(8, Math.floor(qr(n) / 3))),
              i = Math.pow(10, -r),
              a = Jr[8 + r / 3]
            return function (t) {
              return e(i * t) + a
            }
          },
        }
      })({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""] })),
        Vr.format,
        Vr.formatPrefix
      var Qr = function () {
        return new Kr()
      }
      function Kr() {
        this.reset()
      }
      Kr.prototype = {
        constructor: Kr,
        reset: function () {
          this.s = this.t = 0
        },
        add: function (t) {
          ni(ti, t, this.t),
            ni(this, ti.s, this.s),
            this.s ? (this.t += ti.t) : (this.s = ti.t)
        },
        valueOf: function () {
          return this.s
        },
      }
      var ti = new Kr()
      function ni(t, n, e) {
        var r = (t.s = n + e),
          i = r - n,
          a = r - i
        t.t = n - a + (e - i)
      }
      var ei = 1e-6,
        ri = 1e-12,
        ii = Math.PI,
        ai = ii / 2,
        oi = ii / 4,
        fi = 2 * ii,
        ci = ii / 180,
        ui = Math.abs,
        si = Math.atan,
        hi = Math.atan2,
        li = Math.cos,
        di = (Math.ceil, Math.exp),
        pi = (Math.floor, Math.log),
        _i = (Math.pow, Math.sin),
        bi =
          Math.sign ||
          function (t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0
          },
        yi = Math.sqrt,
        vi = Math.tan
      function gi(t) {
        return t > 1 ? 0 : t < -1 ? ii : Math.acos(t)
      }
      function xi(t) {
        return t > 1 ? ai : t < -1 ? -ai : Math.asin(t)
      }
      function mi() {}
      Qr(), Qr()
      function wi(t) {
        var n = t[0],
          e = t[1],
          r = li(e)
        return [r * li(n), r * _i(n), _i(e)]
      }
      function Mi(t, n) {
        return [
          t[1] * n[2] - t[2] * n[1],
          t[2] * n[0] - t[0] * n[2],
          t[0] * n[1] - t[1] * n[0],
        ]
      }
      function Si(t) {
        var n = yi(t[0] * t[0] + t[1] * t[1] + t[2] * t[2])
        ;(t[0] /= n), (t[1] /= n), (t[2] /= n)
      }
      Qr()
      function Ni(t, n) {
        return [ui(t) > ii ? t + Math.round(-t / fi) * fi : t, n]
      }
      Ni.invert = Ni
      var Ti = function () {
          var t,
            n = []
          return {
            point: function (n, e) {
              t.push([n, e])
            },
            lineStart: function () {
              n.push((t = []))
            },
            lineEnd: mi,
            rejoin: function () {
              n.length > 1 && n.push(n.pop().concat(n.shift()))
            },
            result: function () {
              var e = n
              return (n = []), (t = null), e
            },
          }
        },
        Ai = function (t, n) {
          return ui(t[0] - n[0]) < ei && ui(t[1] - n[1]) < ei
        }
      function Ci(t, n, e, r) {
        ;(this.x = t),
          (this.z = n),
          (this.o = e),
          (this.e = r),
          (this.v = !1),
          (this.n = this.p = null)
      }
      var Ei = function (t, n, e, r, i) {
        var a,
          o,
          f = [],
          c = []
        if (
          (t.forEach(function (t) {
            if (!((n = t.length - 1) <= 0)) {
              var n,
                e,
                r = t[0],
                o = t[n]
              if (Ai(r, o)) {
                for (i.lineStart(), a = 0; a < n; ++a)
                  i.point((r = t[a])[0], r[1])
                i.lineEnd()
              } else
                f.push((e = new Ci(r, t, null, !0))),
                  c.push((e.o = new Ci(r, null, e, !1))),
                  f.push((e = new Ci(o, t, null, !1))),
                  c.push((e.o = new Ci(o, null, e, !0)))
            }
          }),
          f.length)
        ) {
          for (c.sort(n), ki(f), ki(c), a = 0, o = c.length; a < o; ++a)
            c[a].e = e = !e
          for (var u, s, h = f[0]; ; ) {
            for (var l = h, d = !0; l.v; ) if ((l = l.n) === h) return
            ;(u = l.z), i.lineStart()
            do {
              if (((l.v = l.o.v = !0), l.e)) {
                if (d)
                  for (a = 0, o = u.length; a < o; ++a)
                    i.point((s = u[a])[0], s[1])
                else r(l.x, l.n.x, 1, i)
                l = l.n
              } else {
                if (d)
                  for (u = l.p.z, a = u.length - 1; a >= 0; --a)
                    i.point((s = u[a])[0], s[1])
                else r(l.x, l.p.x, -1, i)
                l = l.p
              }
              ;(u = (l = l.o).z), (d = !d)
            } while (!l.v)
            i.lineEnd()
          }
        }
      }
      function ki(t) {
        if ((n = t.length)) {
          for (var n, e, r = 0, i = t[0]; ++r < n; )
            (i.n = e = t[r]), (e.p = i), (i = e)
          ;(i.n = e = t[0]), (e.p = i)
        }
      }
      var Pi = Qr()
      function Ui(t) {
        return ui(t[0]) <= ii ? t[0] : bi(t[0]) * (((ui(t[0]) + ii) % fi) - ii)
      }
      var Li = function (t, n) {
          var e = Ui(n),
            r = n[1],
            i = _i(r),
            a = [_i(e), -li(e), 0],
            o = 0,
            f = 0
          Pi.reset(), 1 === i ? (r = ai + ei) : -1 === i && (r = -ai - ei)
          for (var c = 0, u = t.length; c < u; ++c)
            if ((h = (s = t[c]).length))
              for (
                var s,
                  h,
                  l = s[h - 1],
                  d = Ui(l),
                  p = l[1] / 2 + oi,
                  _ = _i(p),
                  b = li(p),
                  y = 0;
                y < h;
                ++y, d = g, _ = m, b = w, l = v
              ) {
                var v = s[y],
                  g = Ui(v),
                  x = v[1] / 2 + oi,
                  m = _i(x),
                  w = li(x),
                  M = g - d,
                  S = M >= 0 ? 1 : -1,
                  N = S * M,
                  T = N > ii,
                  A = _ * m
                if (
                  (Pi.add(hi(A * S * _i(N), b * w + A * li(N))),
                  (o += T ? M + S * fi : M),
                  T ^ (d >= e) ^ (g >= e))
                ) {
                  var C = Mi(wi(l), wi(v))
                  Si(C)
                  var E = Mi(a, C)
                  Si(E)
                  var k = (T ^ (M >= 0) ? -1 : 1) * xi(E[2])
                  ;(r > k || (r === k && (C[0] || C[1]))) &&
                    (f += T ^ (M >= 0) ? 1 : -1)
                }
              }
          return (o < -ei || (o < ei && Pi < -ei)) ^ (1 & f)
        },
        Oi = function (t, n, e, r) {
          return function (i) {
            var a,
              o,
              c,
              u = n(i),
              s = Ti(),
              h = n(s),
              l = !1,
              d = {
                point: p,
                lineStart: b,
                lineEnd: y,
                polygonStart: function () {
                  ;(d.point = v),
                    (d.lineStart = g),
                    (d.lineEnd = x),
                    (o = []),
                    (a = [])
                },
                polygonEnd: function () {
                  ;(d.point = p), (d.lineStart = b), (d.lineEnd = y), (o = f(o))
                  var t = Li(a, r)
                  o.length
                    ? (l || (i.polygonStart(), (l = !0)), Ei(o, Ri, t, e, i))
                    : t &&
                      (l || (i.polygonStart(), (l = !0)),
                      i.lineStart(),
                      e(null, null, 1, i),
                      i.lineEnd()),
                    l && (i.polygonEnd(), (l = !1)),
                    (o = a = null)
                },
                sphere: function () {
                  i.polygonStart(),
                    i.lineStart(),
                    e(null, null, 1, i),
                    i.lineEnd(),
                    i.polygonEnd()
                },
              }
            function p(n, e) {
              t(n, e) && i.point(n, e)
            }
            function _(t, n) {
              u.point(t, n)
            }
            function b() {
              ;(d.point = _), u.lineStart()
            }
            function y() {
              ;(d.point = p), u.lineEnd()
            }
            function v(t, n) {
              c.push([t, n]), h.point(t, n)
            }
            function g() {
              h.lineStart(), (c = [])
            }
            function x() {
              v(c[0][0], c[0][1]), h.lineEnd()
              var t,
                n,
                e,
                r,
                f = h.clean(),
                u = s.result(),
                d = u.length
              if ((c.pop(), a.push(c), (c = null), d))
                if (1 & f) {
                  if ((n = (e = u[0]).length - 1) > 0) {
                    for (
                      l || (i.polygonStart(), (l = !0)), i.lineStart(), t = 0;
                      t < n;
                      ++t
                    )
                      i.point((r = e[t])[0], r[1])
                    i.lineEnd()
                  }
                } else
                  d > 1 && 2 & f && u.push(u.pop().concat(u.shift())),
                    o.push(u.filter(ji))
            }
            return d
          }
        }
      function ji(t) {
        return t.length > 1
      }
      function Ri(t, n) {
        return (
          ((t = t.x)[0] < 0 ? t[1] - ai - ei : ai - t[1]) -
          ((n = n.x)[0] < 0 ? n[1] - ai - ei : ai - n[1])
        )
      }
      Oi(
        function () {
          return !0
        },
        function (t) {
          var n,
            e = NaN,
            r = NaN,
            i = NaN
          return {
            lineStart: function () {
              t.lineStart(), (n = 1)
            },
            point: function (a, o) {
              var f = a > 0 ? ii : -ii,
                c = ui(a - e)
              ui(c - ii) < ei
                ? (t.point(e, (r = (r + o) / 2 > 0 ? ai : -ai)),
                  t.point(i, r),
                  t.lineEnd(),
                  t.lineStart(),
                  t.point(f, r),
                  t.point(a, r),
                  (n = 0))
                : i !== f &&
                  c >= ii &&
                  (ui(e - i) < ei && (e -= i * ei),
                  ui(a - f) < ei && (a -= f * ei),
                  (r = (function (t, n, e, r) {
                    var i,
                      a,
                      o = _i(t - e)
                    return ui(o) > ei
                      ? si(
                          (_i(n) * (a = li(r)) * _i(e) -
                            _i(r) * (i = li(n)) * _i(t)) /
                            (i * a * o)
                        )
                      : (n + r) / 2
                  })(e, r, a, o)),
                  t.point(i, r),
                  t.lineEnd(),
                  t.lineStart(),
                  t.point(f, r),
                  (n = 0)),
                t.point((e = a), (r = o)),
                (i = f)
            },
            lineEnd: function () {
              t.lineEnd(), (e = r = NaN)
            },
            clean: function () {
              return 2 - n
            },
          }
        },
        function (t, n, e, r) {
          var i
          if (null == t)
            (i = e * ai),
              r.point(-ii, i),
              r.point(0, i),
              r.point(ii, i),
              r.point(ii, 0),
              r.point(ii, -i),
              r.point(0, -i),
              r.point(-ii, -i),
              r.point(-ii, 0),
              r.point(-ii, i)
          else if (ui(t[0] - n[0]) > ei) {
            var a = t[0] < n[0] ? ii : -ii
            ;(i = (e * a) / 2), r.point(-a, i), r.point(0, i), r.point(a, i)
          } else r.point(n[0], n[1])
        },
        [-ii, -ai]
      )
      Qr()
      Qr(), Qr()
      function Di(t) {
        this._context = t
      }
      Di.prototype = {
        _radius: 4.5,
        pointRadius: function (t) {
          return (this._radius = t), this
        },
        polygonStart: function () {
          this._line = 0
        },
        polygonEnd: function () {
          this._line = NaN
        },
        lineStart: function () {
          this._point = 0
        },
        lineEnd: function () {
          0 === this._line && this._context.closePath(), (this._point = NaN)
        },
        point: function (t, n) {
          switch (this._point) {
            case 0:
              this._context.moveTo(t, n), (this._point = 1)
              break
            case 1:
              this._context.lineTo(t, n)
              break
            default:
              this._context.moveTo(t + this._radius, n),
                this._context.arc(t, n, this._radius, 0, fi)
          }
        },
        result: mi,
      }
      Qr()
      function Fi() {
        this._string = []
      }
      function Ii(t) {
        return (
          "m0," +
          t +
          "a" +
          t +
          "," +
          t +
          " 0 1,1 0," +
          -2 * t +
          "a" +
          t +
          "," +
          t +
          " 0 1,1 0," +
          2 * t +
          "z"
        )
      }
      Fi.prototype = {
        _radius: 4.5,
        _circle: Ii(4.5),
        pointRadius: function (t) {
          return (
            (t = +t) !== this._radius &&
              ((this._radius = t), (this._circle = null)),
            this
          )
        },
        polygonStart: function () {
          this._line = 0
        },
        polygonEnd: function () {
          this._line = NaN
        },
        lineStart: function () {
          this._point = 0
        },
        lineEnd: function () {
          0 === this._line && this._string.push("Z"), (this._point = NaN)
        },
        point: function (t, n) {
          switch (this._point) {
            case 0:
              this._string.push("M", t, ",", n), (this._point = 1)
              break
            case 1:
              this._string.push("L", t, ",", n)
              break
            default:
              null == this._circle && (this._circle = Ii(this._radius)),
                this._string.push("M", t, ",", n, this._circle)
          }
        },
        result: function () {
          if (this._string.length) {
            var t = this._string.join("")
            return (this._string = []), t
          }
          return null
        },
      }
      function Yi(t) {
        return function (n) {
          var e = new qi()
          for (var r in t) e[r] = t[r]
          return (e.stream = n), e
        }
      }
      function qi() {}
      qi.prototype = {
        constructor: qi,
        point: function (t, n) {
          this.stream.point(t, n)
        },
        sphere: function () {
          this.stream.sphere()
        },
        lineStart: function () {
          this.stream.lineStart()
        },
        lineEnd: function () {
          this.stream.lineEnd()
        },
        polygonStart: function () {
          this.stream.polygonStart()
        },
        polygonEnd: function () {
          this.stream.polygonEnd()
        },
      }
      li(30 * ci)
      Yi({
        point: function (t, n) {
          this.stream.point(t * ci, n * ci)
        },
      })
      function $i(t) {
        return function (n, e) {
          var r = li(n),
            i = li(e),
            a = t(r * i)
          return [a * i * _i(n), a * _i(e)]
        }
      }
      function Hi(t) {
        return function (n, e) {
          var r = yi(n * n + e * e),
            i = t(r),
            a = _i(i),
            o = li(i)
          return [hi(n * a, r * o), xi(r && (e * a) / r)]
        }
      }
      var zi = $i(function (t) {
        return yi(2 / (1 + t))
      })
      zi.invert = Hi(function (t) {
        return 2 * xi(t / 2)
      })
      var Xi = $i(function (t) {
        return (t = gi(t)) && t / _i(t)
      })
      Xi.invert = Hi(function (t) {
        return t
      })
      function Vi(t, n) {
        return [t, pi(vi((ai + n) / 2))]
      }
      Vi.invert = function (t, n) {
        return [t, 2 * si(di(n)) - ai]
      }
      function Bi(t, n) {
        return [t, n]
      }
      Bi.invert = Bi
      var Zi = 1.340264,
        Wi = -0.081106,
        Gi = 893e-6,
        Ji = 0.003796,
        Qi = yi(3) / 2
      function Ki(t, n) {
        var e = xi(Qi * _i(n)),
          r = e * e,
          i = r * r * r
        return [
          (t * li(e)) / (Qi * (Zi + 3 * Wi * r + i * (7 * Gi + 9 * Ji * r))),
          e * (Zi + Wi * r + i * (Gi + Ji * r)),
        ]
      }
      Ki.invert = function (t, n) {
        for (
          var e, r = n, i = r * r, a = i * i * i, o = 0;
          o < 12 &&
          ((a =
            (i =
              (r -= e =
                (r * (Zi + Wi * i + a * (Gi + Ji * i)) - n) /
                (Zi + 3 * Wi * i + a * (7 * Gi + 9 * Ji * i))) * r) *
            i *
            i),
          !(ui(e) < ri));
          ++o
        );
        return [
          (Qi * t * (Zi + 3 * Wi * i + a * (7 * Gi + 9 * Ji * i))) / li(r),
          xi(_i(r) / Qi),
        ]
      }
      function ta(t, n) {
        var e = li(n),
          r = li(t) * e
        return [(e * _i(t)) / r, _i(n) / r]
      }
      ta.invert = Hi(si)
      function na(t, n) {
        var e = n * n,
          r = e * e
        return [
          t *
            (0.8707 -
              0.131979 * e +
              r * (r * (0.003971 * e - 0.001529 * r) - 0.013791)),
          n *
            (1.007226 +
              e * (0.015085 + r * (0.028874 * e - 0.044475 - 0.005916 * r))),
        ]
      }
      na.invert = function (t, n) {
        var e,
          r = n,
          i = 25
        do {
          var a = r * r,
            o = a * a
          r -= e =
            (r *
              (1.007226 +
                a * (0.015085 + o * (0.028874 * a - 0.044475 - 0.005916 * o))) -
              n) /
            (1.007226 +
              a *
                (0.045255 + o * (0.259866 * a - 0.311325 - 0.005916 * 11 * o)))
        } while (ui(e) > ei && --i > 0)
        return [
          t /
            (0.8707 +
              (a = r * r) *
                (a * (a * a * a * (0.003971 - 0.001529 * a) - 0.013791) -
                  0.131979)),
          r,
        ]
      }
      function ea(t, n) {
        return [li(n) * _i(t), _i(n)]
      }
      ea.invert = Hi(xi)
      function ra(t, n) {
        var e = li(n),
          r = 1 + li(t) * e
        return [(e * _i(t)) / r, _i(n) / r]
      }
      ra.invert = Hi(function (t) {
        return 2 * si(t)
      })
      function ia(t, n) {
        return [pi(vi((ai + n) / 2)), -t]
      }
      ia.invert = function (t, n) {
        return [-n, 2 * si(di(t)) - ai]
      }
      function aa(t) {
        var n = 0,
          e = t.children,
          r = e && e.length
        if (r) for (; --r >= 0; ) n += e[r].value
        else n = 1
        t.value = n
      }
      function oa(t, n) {
        var e,
          r,
          i,
          a,
          o,
          f = new sa(t),
          c = +t.value && (f.value = t.value),
          u = [f]
        for (null == n && (n = fa); (e = u.pop()); )
          if (
            (c && (e.value = +e.data.value), (i = n(e.data)) && (o = i.length))
          )
            for (e.children = new Array(o), a = o - 1; a >= 0; --a)
              u.push((r = e.children[a] = new sa(i[a]))),
                (r.parent = e),
                (r.depth = e.depth + 1)
        return f.eachBefore(ua)
      }
      function fa(t) {
        return t.children
      }
      function ca(t) {
        t.data = t.data.data
      }
      function ua(t) {
        var n = 0
        do {
          t.height = n
        } while ((t = t.parent) && t.height < ++n)
      }
      function sa(t) {
        ;(this.data = t), (this.depth = this.height = 0), (this.parent = null)
      }
      sa.prototype = oa.prototype = {
        constructor: sa,
        count: function () {
          return this.eachAfter(aa)
        },
        each: function (t) {
          var n,
            e,
            r,
            i,
            a = this,
            o = [a]
          do {
            for (n = o.reverse(), o = []; (a = n.pop()); )
              if ((t(a), (e = a.children)))
                for (r = 0, i = e.length; r < i; ++r) o.push(e[r])
          } while (o.length)
          return this
        },
        eachAfter: function (t) {
          for (var n, e, r, i = this, a = [i], o = []; (i = a.pop()); )
            if ((o.push(i), (n = i.children)))
              for (e = 0, r = n.length; e < r; ++e) a.push(n[e])
          for (; (i = o.pop()); ) t(i)
          return this
        },
        eachBefore: function (t) {
          for (var n, e, r = this, i = [r]; (r = i.pop()); )
            if ((t(r), (n = r.children)))
              for (e = n.length - 1; e >= 0; --e) i.push(n[e])
          return this
        },
        sum: function (t) {
          return this.eachAfter(function (n) {
            for (
              var e = +t(n.data) || 0, r = n.children, i = r && r.length;
              --i >= 0;

            )
              e += r[i].value
            n.value = e
          })
        },
        sort: function (t) {
          return this.eachBefore(function (n) {
            n.children && n.children.sort(t)
          })
        },
        path: function (t) {
          for (
            var n = this,
              e = (function (t, n) {
                if (t === n) return t
                var e = t.ancestors(),
                  r = n.ancestors(),
                  i = null
                for (t = e.pop(), n = r.pop(); t === n; )
                  (i = t), (t = e.pop()), (n = r.pop())
                return i
              })(n, t),
              r = [n];
            n !== e;

          )
            (n = n.parent), r.push(n)
          for (var i = r.length; t !== e; ) r.splice(i, 0, t), (t = t.parent)
          return r
        },
        ancestors: function () {
          for (var t = this, n = [t]; (t = t.parent); ) n.push(t)
          return n
        },
        descendants: function () {
          var t = []
          return (
            this.each(function (n) {
              t.push(n)
            }),
            t
          )
        },
        leaves: function () {
          var t = []
          return (
            this.eachBefore(function (n) {
              n.children || t.push(n)
            }),
            t
          )
        },
        links: function () {
          var t = this,
            n = []
          return (
            t.each(function (e) {
              e !== t && n.push({ source: e.parent, target: e })
            }),
            n
          )
        },
        copy: function () {
          return oa(this).eachBefore(ca)
        },
      }
      var ha = Array.prototype.slice
      var la = function (t) {
        for (
          var n,
            e,
            r = 0,
            i = (t = (function (t) {
              for (var n, e, r = t.length; r; )
                (e = (Math.random() * r--) | 0),
                  (n = t[r]),
                  (t[r] = t[e]),
                  (t[e] = n)
              return t
            })(ha.call(t))).length,
            a = [];
          r < i;

        )
          (n = t[r]), e && _a(e, n) ? ++r : ((e = ya((a = da(a, n)))), (r = 0))
        return e
      }
      function da(t, n) {
        var e, r
        if (ba(n, t)) return [n]
        for (e = 0; e < t.length; ++e)
          if (pa(n, t[e]) && ba(va(t[e], n), t)) return [t[e], n]
        for (e = 0; e < t.length - 1; ++e)
          for (r = e + 1; r < t.length; ++r)
            if (
              pa(va(t[e], t[r]), n) &&
              pa(va(t[e], n), t[r]) &&
              pa(va(t[r], n), t[e]) &&
              ba(ga(t[e], t[r], n), t)
            )
              return [t[e], t[r], n]
        throw new Error()
      }
      function pa(t, n) {
        var e = t.r - n.r,
          r = n.x - t.x,
          i = n.y - t.y
        return e < 0 || e * e < r * r + i * i
      }
      function _a(t, n) {
        var e = t.r - n.r + 1e-6,
          r = n.x - t.x,
          i = n.y - t.y
        return e > 0 && e * e > r * r + i * i
      }
      function ba(t, n) {
        for (var e = 0; e < n.length; ++e) if (!_a(t, n[e])) return !1
        return !0
      }
      function ya(t) {
        switch (t.length) {
          case 1:
            return { x: (n = t[0]).x, y: n.y, r: n.r }
          case 2:
            return va(t[0], t[1])
          case 3:
            return ga(t[0], t[1], t[2])
        }
        var n
      }
      function va(t, n) {
        var e = t.x,
          r = t.y,
          i = t.r,
          a = n.x,
          o = n.y,
          f = n.r,
          c = a - e,
          u = o - r,
          s = f - i,
          h = Math.sqrt(c * c + u * u)
        return {
          x: (e + a + (c / h) * s) / 2,
          y: (r + o + (u / h) * s) / 2,
          r: (h + i + f) / 2,
        }
      }
      function ga(t, n, e) {
        var r = t.x,
          i = t.y,
          a = t.r,
          o = n.x,
          f = n.y,
          c = n.r,
          u = e.x,
          s = e.y,
          h = e.r,
          l = r - o,
          d = r - u,
          p = i - f,
          _ = i - s,
          b = c - a,
          y = h - a,
          v = r * r + i * i - a * a,
          g = v - o * o - f * f + c * c,
          x = v - u * u - s * s + h * h,
          m = d * p - l * _,
          w = (p * x - _ * g) / (2 * m) - r,
          M = (_ * b - p * y) / m,
          S = (d * g - l * x) / (2 * m) - i,
          N = (l * y - d * b) / m,
          T = M * M + N * N - 1,
          A = 2 * (a + w * M + S * N),
          C = w * w + S * S - a * a,
          E = -(T ? (A + Math.sqrt(A * A - 4 * T * C)) / (2 * T) : C / A)
        return { x: r + w + M * E, y: i + S + N * E, r: E }
      }
      function xa(t, n, e) {
        var r,
          i,
          a,
          o,
          f = t.x - n.x,
          c = t.y - n.y,
          u = f * f + c * c
        u
          ? ((i = n.r + e.r),
            (i *= i),
            (o = t.r + e.r),
            i > (o *= o)
              ? ((r = (u + o - i) / (2 * u)),
                (a = Math.sqrt(Math.max(0, o / u - r * r))),
                (e.x = t.x - r * f - a * c),
                (e.y = t.y - r * c + a * f))
              : ((r = (u + i - o) / (2 * u)),
                (a = Math.sqrt(Math.max(0, i / u - r * r))),
                (e.x = n.x + r * f - a * c),
                (e.y = n.y + r * c + a * f)))
          : ((e.x = n.x + e.r), (e.y = n.y))
      }
      function ma(t, n) {
        var e = t.r + n.r - 1e-6,
          r = n.x - t.x,
          i = n.y - t.y
        return e > 0 && e * e > r * r + i * i
      }
      function wa(t) {
        var n = t._,
          e = t.next._,
          r = n.r + e.r,
          i = (n.x * e.r + e.x * n.r) / r,
          a = (n.y * e.r + e.y * n.r) / r
        return i * i + a * a
      }
      function Ma(t) {
        ;(this._ = t), (this.next = null), (this.previous = null)
      }
      function Sa(t) {
        if (!(i = t.length)) return 0
        var n, e, r, i, a, o, f, c, u, s, h
        if ((((n = t[0]).x = 0), (n.y = 0), !(i > 1))) return n.r
        if (((e = t[1]), (n.x = -e.r), (e.x = n.r), (e.y = 0), !(i > 2)))
          return n.r + e.r
        xa(e, n, (r = t[2])),
          (n = new Ma(n)),
          (e = new Ma(e)),
          (r = new Ma(r)),
          (n.next = r.previous = e),
          (e.next = n.previous = r),
          (r.next = e.previous = n)
        t: for (f = 3; f < i; ++f) {
          xa(n._, e._, (r = t[f])),
            (r = new Ma(r)),
            (c = e.next),
            (u = n.previous),
            (s = e._.r),
            (h = n._.r)
          do {
            if (s <= h) {
              if (ma(c._, r._)) {
                ;(e = c), (n.next = e), (e.previous = n), --f
                continue t
              }
              ;(s += c._.r), (c = c.next)
            } else {
              if (ma(u._, r._)) {
                ;((n = u).next = e), (e.previous = n), --f
                continue t
              }
              ;(h += u._.r), (u = u.previous)
            }
          } while (c !== u.next)
          for (
            r.previous = n, r.next = e, n.next = e.previous = e = r, a = wa(n);
            (r = r.next) !== e;

          )
            (o = wa(r)) < a && ((n = r), (a = o))
          e = n.next
        }
        for (n = [e._], r = e; (r = r.next) !== e; ) n.push(r._)
        for (r = la(n), f = 0; f < i; ++f) ((n = t[f]).x -= r.x), (n.y -= r.y)
        return r.r
      }
      function Na(t) {
        return null == t ? null : Ta(t)
      }
      function Ta(t) {
        if ("function" != typeof t) throw new Error()
        return t
      }
      function Aa() {
        return 0
      }
      var Ca = function (t) {
        return function () {
          return t
        }
      }
      function Ea(t) {
        return Math.sqrt(t.value)
      }
      var ka = function () {
        var t = null,
          n = 1,
          e = 1,
          r = Aa
        function i(i) {
          return (
            (i.x = n / 2),
            (i.y = e / 2),
            t
              ? i.eachBefore(Pa(t)).eachAfter(Ua(r, 0.5)).eachBefore(La(1))
              : i
                  .eachBefore(Pa(Ea))
                  .eachAfter(Ua(Aa, 1))
                  .eachAfter(Ua(r, i.r / Math.min(n, e)))
                  .eachBefore(La(Math.min(n, e) / (2 * i.r))),
            i
          )
        }
        return (
          (i.radius = function (n) {
            return arguments.length ? ((t = Na(n)), i) : t
          }),
          (i.size = function (t) {
            return arguments.length ? ((n = +t[0]), (e = +t[1]), i) : [n, e]
          }),
          (i.padding = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : Ca(+t)), i)
              : r
          }),
          i
        )
      }
      function Pa(t) {
        return function (n) {
          n.children || (n.r = Math.max(0, +t(n) || 0))
        }
      }
      function Ua(t, n) {
        return function (e) {
          if ((r = e.children)) {
            var r,
              i,
              a,
              o = r.length,
              f = t(e) * n || 0
            if (f) for (i = 0; i < o; ++i) r[i].r += f
            if (((a = Sa(r)), f)) for (i = 0; i < o; ++i) r[i].r -= f
            e.r = a + f
          }
        }
      }
      function La(t) {
        return function (n) {
          var e = n.parent
          ;(n.r *= t), e && ((n.x = e.x + t * n.x), (n.y = e.y + t * n.y))
        }
      }
      var Oa = function (t, n, e, r, i) {
        for (
          var a,
            o = t.children,
            f = -1,
            c = o.length,
            u = t.value && (r - n) / t.value;
          ++f < c;

        )
          ((a = o[f]).y0 = e), (a.y1 = i), (a.x0 = n), (a.x1 = n += a.value * u)
      }
      function ja(t, n) {
        ;(this._ = t),
          (this.parent = null),
          (this.children = null),
          (this.A = null),
          (this.a = this),
          (this.z = 0),
          (this.m = 0),
          (this.c = 0),
          (this.s = 0),
          (this.t = null),
          (this.i = n)
      }
      ja.prototype = Object.create(sa.prototype)
      var Ra = function (t, n, e, r, i) {
          for (
            var a,
              o = t.children,
              f = -1,
              c = o.length,
              u = t.value && (i - e) / t.value;
            ++f < c;

          )
            ((a = o[f]).x0 = n),
              (a.x1 = r),
              (a.y0 = e),
              (a.y1 = e += a.value * u)
        },
        Da = (1 + Math.sqrt(5)) / 2
      function Fa(t, n, e, r, i, a) {
        for (
          var o,
            f,
            c,
            u,
            s,
            h,
            l,
            d,
            p,
            _,
            b,
            y = [],
            v = n.children,
            g = 0,
            x = 0,
            m = v.length,
            w = n.value;
          g < m;

        ) {
          ;(c = i - e), (u = a - r)
          do {
            s = v[x++].value
          } while (!s && x < m)
          for (
            h = l = s,
              b = s * s * (_ = Math.max(u / c, c / u) / (w * t)),
              p = Math.max(l / b, b / h);
            x < m;
            ++x
          ) {
            if (
              ((s += f = v[x].value),
              f < h && (h = f),
              f > l && (l = f),
              (b = s * s * _),
              (d = Math.max(l / b, b / h)) > p)
            ) {
              s -= f
              break
            }
            p = d
          }
          y.push((o = { value: s, dice: c < u, children: v.slice(g, x) })),
            o.dice
              ? Oa(o, e, r, i, w ? (r += (u * s) / w) : a)
              : Ra(o, e, r, w ? (e += (c * s) / w) : i, a),
            (w -= s),
            (g = x)
        }
        return y
      }
      ;(function t(n) {
        function e(t, e, r, i, a) {
          Fa(n, t, e, r, i, a)
        }
        return (
          (e.ratio = function (n) {
            return t((n = +n) > 1 ? n : 1)
          }),
          e
        )
      })(Da),
        (function t(n) {
          function e(t, e, r, i, a) {
            if ((o = t._squarify) && o.ratio === n)
              for (
                var o, f, c, u, s, h = -1, l = o.length, d = t.value;
                ++h < l;

              ) {
                for (
                  c = (f = o[h]).children, u = f.value = 0, s = c.length;
                  u < s;
                  ++u
                )
                  f.value += c[u].value
                f.dice
                  ? Oa(f, e, r, i, (r += ((a - r) * f.value) / d))
                  : Ra(f, e, r, (e += ((i - e) * f.value) / d), a),
                  (d -= f.value)
              }
            else (t._squarify = o = Fa(n, t, e, r, i, a)), (o.ratio = n)
          }
          return (
            (e.ratio = function (n) {
              return t((n = +n) > 1 ? n : 1)
            }),
            e
          )
        })(Da)
      var Ia = function () {
          return Math.random()
        },
        Ya =
          ((function t(n) {
            function e(t, e) {
              return (
                (t = null == t ? 0 : +t),
                (e = null == e ? 1 : +e),
                1 === arguments.length ? ((e = t), (t = 0)) : (e -= t),
                function () {
                  return n() * e + t
                }
              )
            }
            return (e.source = t), e
          })(Ia),
          (function t(n) {
            function e(t, e) {
              var r, i
              return (
                (t = null == t ? 0 : +t),
                (e = null == e ? 1 : +e),
                function () {
                  var a
                  if (null != r) (a = r), (r = null)
                  else
                    do {
                      ;(r = 2 * n() - 1), (a = 2 * n() - 1), (i = r * r + a * a)
                    } while (!i || i > 1)
                  return t + e * a * Math.sqrt((-2 * Math.log(i)) / i)
                }
              )
            }
            return (e.source = t), e
          })(Ia)),
        qa =
          ((function t(n) {
            function e() {
              var t = Ya.source(n).apply(this, arguments)
              return function () {
                return Math.exp(t())
              }
            }
            return (e.source = t), e
          })(Ia),
          (function t(n) {
            function e(t) {
              return function () {
                for (var e = 0, r = 0; r < t; ++r) e += n()
                return e
              }
            }
            return (e.source = t), e
          })(Ia))
      ;(function t(n) {
        function e(t) {
          var e = qa.source(n)(t)
          return function () {
            return e() / t
          }
        }
        return (e.source = t), e
      })(Ia),
        (function t(n) {
          function e(t) {
            return function () {
              return -Math.log(1 - n()) / t
            }
          }
          return (e.source = t), e
        })(Ia)
      var $a = Array.prototype
      $a.map, $a.slice
      var Ha = new Date(),
        za = new Date()
      function Xa(t, n, e, r) {
        function i(n) {
          return t((n = new Date(+n))), n
        }
        return (
          (i.floor = i),
          (i.ceil = function (e) {
            return t((e = new Date(e - 1))), n(e, 1), t(e), e
          }),
          (i.round = function (t) {
            var n = i(t),
              e = i.ceil(t)
            return t - n < e - t ? n : e
          }),
          (i.offset = function (t, e) {
            return n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t
          }),
          (i.range = function (e, r, a) {
            var o,
              f = []
            if (
              ((e = i.ceil(e)),
              (a = null == a ? 1 : Math.floor(a)),
              !(e < r && a > 0))
            )
              return f
            do {
              f.push((o = new Date(+e))), n(e, a), t(e)
            } while (o < e && e < r)
            return f
          }),
          (i.filter = function (e) {
            return Xa(
              function (n) {
                if (n >= n) for (; t(n), !e(n); ) n.setTime(n - 1)
              },
              function (t, r) {
                if (t >= t)
                  if (r < 0) for (; ++r <= 0; ) for (; n(t, -1), !e(t); );
                  else for (; --r >= 0; ) for (; n(t, 1), !e(t); );
              }
            )
          }),
          e &&
            ((i.count = function (n, r) {
              return (
                Ha.setTime(+n),
                za.setTime(+r),
                t(Ha),
                t(za),
                Math.floor(e(Ha, za))
              )
            }),
            (i.every = function (t) {
              return (
                (t = Math.floor(t)),
                isFinite(t) && t > 0
                  ? t > 1
                    ? i.filter(
                        r
                          ? function (n) {
                              return r(n) % t == 0
                            }
                          : function (n) {
                              return i.count(0, n) % t == 0
                            }
                      )
                    : i
                  : null
              )
            })),
          i
        )
      }
      var Va = Xa(
        function () {},
        function (t, n) {
          t.setTime(+t + n)
        },
        function (t, n) {
          return n - t
        }
      )
      Va.every = function (t) {
        return (
          (t = Math.floor(t)),
          isFinite(t) && t > 0
            ? t > 1
              ? Xa(
                  function (n) {
                    n.setTime(Math.floor(n / t) * t)
                  },
                  function (n, e) {
                    n.setTime(+n + e * t)
                  },
                  function (n, e) {
                    return (e - n) / t
                  }
                )
              : Va
            : null
        )
      }
      Va.range
      var Ba = 6e4,
        Za = 6048e5,
        Wa = Xa(
          function (t) {
            t.setTime(t - t.getMilliseconds())
          },
          function (t, n) {
            t.setTime(+t + 1e3 * n)
          },
          function (t, n) {
            return (n - t) / 1e3
          },
          function (t) {
            return t.getUTCSeconds()
          }
        ),
        Ga =
          (Wa.range,
          Xa(
            function (t) {
              t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds())
            },
            function (t, n) {
              t.setTime(+t + n * Ba)
            },
            function (t, n) {
              return (n - t) / Ba
            },
            function (t) {
              return t.getMinutes()
            }
          )),
        Ja =
          (Ga.range,
          Xa(
            function (t) {
              t.setTime(
                t -
                  t.getMilliseconds() -
                  1e3 * t.getSeconds() -
                  t.getMinutes() * Ba
              )
            },
            function (t, n) {
              t.setTime(+t + 36e5 * n)
            },
            function (t, n) {
              return (n - t) / 36e5
            },
            function (t) {
              return t.getHours()
            }
          )),
        Qa =
          (Ja.range,
          Xa(
            function (t) {
              t.setHours(0, 0, 0, 0)
            },
            function (t, n) {
              t.setDate(t.getDate() + n)
            },
            function (t, n) {
              return (
                (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Ba) /
                864e5
              )
            },
            function (t) {
              return t.getDate() - 1
            }
          )),
        Ka = Qa
      Qa.range
      function to(t) {
        return Xa(
          function (n) {
            n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)),
              n.setHours(0, 0, 0, 0)
          },
          function (t, n) {
            t.setDate(t.getDate() + 7 * n)
          },
          function (t, n) {
            return (
              (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Ba) /
              Za
            )
          }
        )
      }
      var no = to(0),
        eo = to(1),
        ro = to(2),
        io = to(3),
        ao = to(4),
        oo = to(5),
        fo = to(6),
        co =
          (no.range,
          eo.range,
          ro.range,
          io.range,
          ao.range,
          oo.range,
          fo.range,
          Xa(
            function (t) {
              t.setDate(1), t.setHours(0, 0, 0, 0)
            },
            function (t, n) {
              t.setMonth(t.getMonth() + n)
            },
            function (t, n) {
              return (
                n.getMonth() -
                t.getMonth() +
                12 * (n.getFullYear() - t.getFullYear())
              )
            },
            function (t) {
              return t.getMonth()
            }
          )),
        uo =
          (co.range,
          Xa(
            function (t) {
              t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
            },
            function (t, n) {
              t.setFullYear(t.getFullYear() + n)
            },
            function (t, n) {
              return n.getFullYear() - t.getFullYear()
            },
            function (t) {
              return t.getFullYear()
            }
          ))
      uo.every = function (t) {
        return isFinite((t = Math.floor(t))) && t > 0
          ? Xa(
              function (n) {
                n.setFullYear(Math.floor(n.getFullYear() / t) * t),
                  n.setMonth(0, 1),
                  n.setHours(0, 0, 0, 0)
              },
              function (n, e) {
                n.setFullYear(n.getFullYear() + e * t)
              }
            )
          : null
      }
      var so = uo,
        ho =
          (uo.range,
          Xa(
            function (t) {
              t.setUTCSeconds(0, 0)
            },
            function (t, n) {
              t.setTime(+t + n * Ba)
            },
            function (t, n) {
              return (n - t) / Ba
            },
            function (t) {
              return t.getUTCMinutes()
            }
          )),
        lo =
          (ho.range,
          Xa(
            function (t) {
              t.setUTCMinutes(0, 0, 0)
            },
            function (t, n) {
              t.setTime(+t + 36e5 * n)
            },
            function (t, n) {
              return (n - t) / 36e5
            },
            function (t) {
              return t.getUTCHours()
            }
          )),
        po =
          (lo.range,
          Xa(
            function (t) {
              t.setUTCHours(0, 0, 0, 0)
            },
            function (t, n) {
              t.setUTCDate(t.getUTCDate() + n)
            },
            function (t, n) {
              return (n - t) / 864e5
            },
            function (t) {
              return t.getUTCDate() - 1
            }
          )),
        _o = po
      po.range
      function bo(t) {
        return Xa(
          function (n) {
            n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)),
              n.setUTCHours(0, 0, 0, 0)
          },
          function (t, n) {
            t.setUTCDate(t.getUTCDate() + 7 * n)
          },
          function (t, n) {
            return (n - t) / Za
          }
        )
      }
      var yo = bo(0),
        vo = bo(1),
        go = bo(2),
        xo = bo(3),
        mo = bo(4),
        wo = bo(5),
        Mo = bo(6),
        So =
          (yo.range,
          vo.range,
          go.range,
          xo.range,
          mo.range,
          wo.range,
          Mo.range,
          Xa(
            function (t) {
              t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
            },
            function (t, n) {
              t.setUTCMonth(t.getUTCMonth() + n)
            },
            function (t, n) {
              return (
                n.getUTCMonth() -
                t.getUTCMonth() +
                12 * (n.getUTCFullYear() - t.getUTCFullYear())
              )
            },
            function (t) {
              return t.getUTCMonth()
            }
          )),
        No =
          (So.range,
          Xa(
            function (t) {
              t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
            },
            function (t, n) {
              t.setUTCFullYear(t.getUTCFullYear() + n)
            },
            function (t, n) {
              return n.getUTCFullYear() - t.getUTCFullYear()
            },
            function (t) {
              return t.getUTCFullYear()
            }
          ))
      No.every = function (t) {
        return isFinite((t = Math.floor(t))) && t > 0
          ? Xa(
              function (n) {
                n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
                  n.setUTCMonth(0, 1),
                  n.setUTCHours(0, 0, 0, 0)
              },
              function (n, e) {
                n.setUTCFullYear(n.getUTCFullYear() + e * t)
              }
            )
          : null
      }
      var To = No
      No.range
      function Ao(t) {
        if (0 <= t.y && t.y < 100) {
          var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L)
          return n.setFullYear(t.y), n
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
      }
      function Co(t) {
        if (0 <= t.y && t.y < 100) {
          var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L))
          return n.setUTCFullYear(t.y), n
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
      }
      function Eo(t) {
        return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 }
      }
      var ko,
        Po,
        Uo,
        Lo = { "-": "", _: " ", 0: "0" },
        Oo = /^\s*\d+/,
        jo = /^%/,
        Ro = /[\\^$*+?|[\]().{}]/g
      function Do(t, n, e) {
        var r = t < 0 ? "-" : "",
          i = (r ? -t : t) + "",
          a = i.length
        return r + (a < e ? new Array(e - a + 1).join(n) + i : i)
      }
      function Fo(t) {
        return t.replace(Ro, "\\$&")
      }
      function Io(t) {
        return new RegExp("^(?:" + t.map(Fo).join("|") + ")", "i")
      }
      function Yo(t) {
        for (var n = {}, e = -1, r = t.length; ++e < r; )
          n[t[e].toLowerCase()] = e
        return n
      }
      function qo(t, n, e) {
        var r = Oo.exec(n.slice(e, e + 1))
        return r ? ((t.w = +r[0]), e + r[0].length) : -1
      }
      function $o(t, n, e) {
        var r = Oo.exec(n.slice(e, e + 1))
        return r ? ((t.u = +r[0]), e + r[0].length) : -1
      }
      function Ho(t, n, e) {
        var r = Oo.exec(n.slice(e, e + 2))
        return r ? ((t.U = +r[0]), e + r[0].length) : -1
      }
      function zo(t, n, e) {
        var r = Oo.exec(n.slice(e, e + 2))
        return r ? ((t.V = +r[0]), e + r[0].length) : -1
      }
      function Xo(t, n, e) {
        var r = Oo.exec(n.slice(e, e + 2))
        return r ? ((t.W = +r[0]), e + r[0].length) : -1
      }
      function Vo(t, n, e) {
        var r = Oo.exec(n.slice(e, e + 4))
        return r ? ((t.y = +r[0]), e + r[0].length) : -1
      }
      function Bo(t, n, e) {
        var r = Oo.exec(n.slice(e, e + 2))
        return r
          ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length)
          : -1
      }
      function Zo(t, n, e) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6))
        return r
          ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), e + r[0].length)
          : -1
      }
      function Wo(t, n, e) {
        var r = Oo.exec(n.slice(e, e + 2))
        return r ? ((t.m = r[0] - 1), e + r[0].length) : -1
      }
      function Go(t, n, e) {
        var r = Oo.exec(n.slice(e, e + 2))
        return r ? ((t.d = +r[0]), e + r[0].length) : -1
      }
      function Jo(t, n, e) {
        var r = Oo.exec(n.slice(e, e + 3))
        return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1
      }
      function Qo(t, n, e) {
        var r = Oo.exec(n.slice(e, e + 2))
        return r ? ((t.H = +r[0]), e + r[0].length) : -1
      }
      function Ko(t, n, e) {
        var r = Oo.exec(n.slice(e, e + 2))
        return r ? ((t.M = +r[0]), e + r[0].length) : -1
      }
      function tf(t, n, e) {
        var r = Oo.exec(n.slice(e, e + 2))
        return r ? ((t.S = +r[0]), e + r[0].length) : -1
      }
      function nf(t, n, e) {
        var r = Oo.exec(n.slice(e, e + 3))
        return r ? ((t.L = +r[0]), e + r[0].length) : -1
      }
      function ef(t, n, e) {
        var r = Oo.exec(n.slice(e, e + 6))
        return r ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1
      }
      function rf(t, n, e) {
        var r = jo.exec(n.slice(e, e + 1))
        return r ? e + r[0].length : -1
      }
      function af(t, n, e) {
        var r = Oo.exec(n.slice(e))
        return r ? ((t.Q = +r[0]), e + r[0].length) : -1
      }
      function of(t, n, e) {
        var r = Oo.exec(n.slice(e))
        return r ? ((t.Q = 1e3 * +r[0]), e + r[0].length) : -1
      }
      function ff(t, n) {
        return Do(t.getDate(), n, 2)
      }
      function cf(t, n) {
        return Do(t.getHours(), n, 2)
      }
      function uf(t, n) {
        return Do(t.getHours() % 12 || 12, n, 2)
      }
      function sf(t, n) {
        return Do(1 + Ka.count(so(t), t), n, 3)
      }
      function hf(t, n) {
        return Do(t.getMilliseconds(), n, 3)
      }
      function lf(t, n) {
        return hf(t, n) + "000"
      }
      function df(t, n) {
        return Do(t.getMonth() + 1, n, 2)
      }
      function pf(t, n) {
        return Do(t.getMinutes(), n, 2)
      }
      function _f(t, n) {
        return Do(t.getSeconds(), n, 2)
      }
      function bf(t) {
        var n = t.getDay()
        return 0 === n ? 7 : n
      }
      function yf(t, n) {
        return Do(no.count(so(t), t), n, 2)
      }
      function vf(t, n) {
        var e = t.getDay()
        return (
          (t = e >= 4 || 0 === e ? ao(t) : ao.ceil(t)),
          Do(ao.count(so(t), t) + (4 === so(t).getDay()), n, 2)
        )
      }
      function gf(t) {
        return t.getDay()
      }
      function xf(t, n) {
        return Do(eo.count(so(t), t), n, 2)
      }
      function mf(t, n) {
        return Do(t.getFullYear() % 100, n, 2)
      }
      function wf(t, n) {
        return Do(t.getFullYear() % 1e4, n, 4)
      }
      function Mf(t) {
        var n = t.getTimezoneOffset()
        return (
          (n > 0 ? "-" : ((n *= -1), "+")) +
          Do((n / 60) | 0, "0", 2) +
          Do(n % 60, "0", 2)
        )
      }
      function Sf(t, n) {
        return Do(t.getUTCDate(), n, 2)
      }
      function Nf(t, n) {
        return Do(t.getUTCHours(), n, 2)
      }
      function Tf(t, n) {
        return Do(t.getUTCHours() % 12 || 12, n, 2)
      }
      function Af(t, n) {
        return Do(1 + _o.count(To(t), t), n, 3)
      }
      function Cf(t, n) {
        return Do(t.getUTCMilliseconds(), n, 3)
      }
      function Ef(t, n) {
        return Cf(t, n) + "000"
      }
      function kf(t, n) {
        return Do(t.getUTCMonth() + 1, n, 2)
      }
      function Pf(t, n) {
        return Do(t.getUTCMinutes(), n, 2)
      }
      function Uf(t, n) {
        return Do(t.getUTCSeconds(), n, 2)
      }
      function Lf(t) {
        var n = t.getUTCDay()
        return 0 === n ? 7 : n
      }
      function Of(t, n) {
        return Do(yo.count(To(t), t), n, 2)
      }
      function jf(t, n) {
        var e = t.getUTCDay()
        return (
          (t = e >= 4 || 0 === e ? mo(t) : mo.ceil(t)),
          Do(mo.count(To(t), t) + (4 === To(t).getUTCDay()), n, 2)
        )
      }
      function Rf(t) {
        return t.getUTCDay()
      }
      function Df(t, n) {
        return Do(vo.count(To(t), t), n, 2)
      }
      function Ff(t, n) {
        return Do(t.getUTCFullYear() % 100, n, 2)
      }
      function If(t, n) {
        return Do(t.getUTCFullYear() % 1e4, n, 4)
      }
      function Yf() {
        return "+0000"
      }
      function qf() {
        return "%"
      }
      function $f(t) {
        return +t
      }
      function Hf(t) {
        return Math.floor(+t / 1e3)
      }
      !(function (t) {
        ;(ko = (function (t) {
          var n = t.dateTime,
            e = t.date,
            r = t.time,
            i = t.periods,
            a = t.days,
            o = t.shortDays,
            f = t.months,
            c = t.shortMonths,
            u = Io(i),
            s = Yo(i),
            h = Io(a),
            l = Yo(a),
            d = Io(o),
            p = Yo(o),
            _ = Io(f),
            b = Yo(f),
            y = Io(c),
            v = Yo(c),
            g = {
              a: function (t) {
                return o[t.getDay()]
              },
              A: function (t) {
                return a[t.getDay()]
              },
              b: function (t) {
                return c[t.getMonth()]
              },
              B: function (t) {
                return f[t.getMonth()]
              },
              c: null,
              d: ff,
              e: ff,
              f: lf,
              H: cf,
              I: uf,
              j: sf,
              L: hf,
              m: df,
              M: pf,
              p: function (t) {
                return i[+(t.getHours() >= 12)]
              },
              Q: $f,
              s: Hf,
              S: _f,
              u: bf,
              U: yf,
              V: vf,
              w: gf,
              W: xf,
              x: null,
              X: null,
              y: mf,
              Y: wf,
              Z: Mf,
              "%": qf,
            },
            x = {
              a: function (t) {
                return o[t.getUTCDay()]
              },
              A: function (t) {
                return a[t.getUTCDay()]
              },
              b: function (t) {
                return c[t.getUTCMonth()]
              },
              B: function (t) {
                return f[t.getUTCMonth()]
              },
              c: null,
              d: Sf,
              e: Sf,
              f: Ef,
              H: Nf,
              I: Tf,
              j: Af,
              L: Cf,
              m: kf,
              M: Pf,
              p: function (t) {
                return i[+(t.getUTCHours() >= 12)]
              },
              Q: $f,
              s: Hf,
              S: Uf,
              u: Lf,
              U: Of,
              V: jf,
              w: Rf,
              W: Df,
              x: null,
              X: null,
              y: Ff,
              Y: If,
              Z: Yf,
              "%": qf,
            },
            m = {
              a: function (t, n, e) {
                var r = d.exec(n.slice(e))
                return r ? ((t.w = p[r[0].toLowerCase()]), e + r[0].length) : -1
              },
              A: function (t, n, e) {
                var r = h.exec(n.slice(e))
                return r ? ((t.w = l[r[0].toLowerCase()]), e + r[0].length) : -1
              },
              b: function (t, n, e) {
                var r = y.exec(n.slice(e))
                return r ? ((t.m = v[r[0].toLowerCase()]), e + r[0].length) : -1
              },
              B: function (t, n, e) {
                var r = _.exec(n.slice(e))
                return r ? ((t.m = b[r[0].toLowerCase()]), e + r[0].length) : -1
              },
              c: function (t, e, r) {
                return S(t, n, e, r)
              },
              d: Go,
              e: Go,
              f: ef,
              H: Qo,
              I: Qo,
              j: Jo,
              L: nf,
              m: Wo,
              M: Ko,
              p: function (t, n, e) {
                var r = u.exec(n.slice(e))
                return r ? ((t.p = s[r[0].toLowerCase()]), e + r[0].length) : -1
              },
              Q: af,
              s: of,
              S: tf,
              u: $o,
              U: Ho,
              V: zo,
              w: qo,
              W: Xo,
              x: function (t, n, r) {
                return S(t, e, n, r)
              },
              X: function (t, n, e) {
                return S(t, r, n, e)
              },
              y: Bo,
              Y: Vo,
              Z: Zo,
              "%": rf,
            }
          function w(t, n) {
            return function (e) {
              var r,
                i,
                a,
                o = [],
                f = -1,
                c = 0,
                u = t.length
              for (e instanceof Date || (e = new Date(+e)); ++f < u; )
                37 === t.charCodeAt(f) &&
                  (o.push(t.slice(c, f)),
                  null != (i = Lo[(r = t.charAt(++f))])
                    ? (r = t.charAt(++f))
                    : (i = "e" === r ? " " : "0"),
                  (a = n[r]) && (r = a(e, i)),
                  o.push(r),
                  (c = f + 1))
              return o.push(t.slice(c, f)), o.join("")
            }
          }
          function M(t, n) {
            return function (e) {
              var r,
                i,
                a = Eo(1900)
              if (S(a, t, (e += ""), 0) != e.length) return null
              if ("Q" in a) return new Date(a.Q)
              if (("p" in a && (a.H = (a.H % 12) + 12 * a.p), "V" in a)) {
                if (a.V < 1 || a.V > 53) return null
                "w" in a || (a.w = 1),
                  "Z" in a
                    ? ((i = (r = Co(Eo(a.y))).getUTCDay()),
                      (r = i > 4 || 0 === i ? vo.ceil(r) : vo(r)),
                      (r = _o.offset(r, 7 * (a.V - 1))),
                      (a.y = r.getUTCFullYear()),
                      (a.m = r.getUTCMonth()),
                      (a.d = r.getUTCDate() + ((a.w + 6) % 7)))
                    : ((i = (r = n(Eo(a.y))).getDay()),
                      (r = i > 4 || 0 === i ? eo.ceil(r) : eo(r)),
                      (r = Ka.offset(r, 7 * (a.V - 1))),
                      (a.y = r.getFullYear()),
                      (a.m = r.getMonth()),
                      (a.d = r.getDate() + ((a.w + 6) % 7)))
              } else
                ("W" in a || "U" in a) &&
                  ("w" in a || (a.w = "u" in a ? a.u % 7 : "W" in a ? 1 : 0),
                  (i =
                    "Z" in a ? Co(Eo(a.y)).getUTCDay() : n(Eo(a.y)).getDay()),
                  (a.m = 0),
                  (a.d =
                    "W" in a
                      ? ((a.w + 6) % 7) + 7 * a.W - ((i + 5) % 7)
                      : a.w + 7 * a.U - ((i + 6) % 7)))
              return "Z" in a
                ? ((a.H += (a.Z / 100) | 0), (a.M += a.Z % 100), Co(a))
                : n(a)
            }
          }
          function S(t, n, e, r) {
            for (var i, a, o = 0, f = n.length, c = e.length; o < f; ) {
              if (r >= c) return -1
              if (37 === (i = n.charCodeAt(o++))) {
                if (
                  ((i = n.charAt(o++)),
                  !(a = m[i in Lo ? n.charAt(o++) : i]) || (r = a(t, e, r)) < 0)
                )
                  return -1
              } else if (i != e.charCodeAt(r++)) return -1
            }
            return r
          }
          return (
            (g.x = w(e, g)),
            (g.X = w(r, g)),
            (g.c = w(n, g)),
            (x.x = w(e, x)),
            (x.X = w(r, x)),
            (x.c = w(n, x)),
            {
              format: function (t) {
                var n = w((t += ""), g)
                return (
                  (n.toString = function () {
                    return t
                  }),
                  n
                )
              },
              parse: function (t) {
                var n = M((t += ""), Ao)
                return (
                  (n.toString = function () {
                    return t
                  }),
                  n
                )
              },
              utcFormat: function (t) {
                var n = w((t += ""), x)
                return (
                  (n.toString = function () {
                    return t
                  }),
                  n
                )
              },
              utcParse: function (t) {
                var n = M(t, Co)
                return (
                  (n.toString = function () {
                    return t
                  }),
                  n
                )
              },
            }
          )
        })(t)),
          ko.format,
          ko.parse,
          (Po = ko.utcFormat),
          (Uo = ko.utcParse)
      })({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        shortMonths: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      })
      Date.prototype.toISOString || Po("%Y-%m-%dT%H:%M:%S.%LZ")
      ;+new Date("2000-01-01T00:00:00.000Z") || Uo("%Y-%m-%dT%H:%M:%S.%LZ")
      var zf = function (t) {
          for (var n = (t.length / 6) | 0, e = new Array(n), r = 0; r < n; )
            e[r] = "#" + t.slice(6 * r, 6 * ++r)
          return e
        },
        Xf =
          (zf("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
          zf("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
          zf("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
          zf(
            "a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"
          ),
          zf("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
          zf("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
          zf("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
          zf("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
          zf(
            "8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"
          ),
          function (t) {
            return On(t[t.length - 1])
          })
      Xf(
        new Array(3)
          .concat(
            "d8b365f5f5f55ab4ac",
            "a6611adfc27d80cdc1018571",
            "a6611adfc27df5f5f580cdc1018571",
            "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
            "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
            "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
            "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
            "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
            "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
          )
          .map(zf)
      ),
        Xf(
          new Array(3)
            .concat(
              "af8dc3f7f7f77fbf7b",
              "7b3294c2a5cfa6dba0008837",
              "7b3294c2a5cff7f7f7a6dba0008837",
              "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
              "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
              "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
              "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
              "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
              "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "e9a3c9f7f7f7a1d76a",
              "d01c8bf1b6dab8e1864dac26",
              "d01c8bf1b6daf7f7f7b8e1864dac26",
              "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
              "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
              "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
              "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
              "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
              "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "998ec3f7f7f7f1a340",
              "5e3c99b2abd2fdb863e66101",
              "5e3c99b2abd2f7f7f7fdb863e66101",
              "542788998ec3d8daebfee0b6f1a340b35806",
              "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
              "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
              "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
              "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
              "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "ef8a62f7f7f767a9cf",
              "ca0020f4a58292c5de0571b0",
              "ca0020f4a582f7f7f792c5de0571b0",
              "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
              "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
              "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
              "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
              "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
              "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "ef8a62ffffff999999",
              "ca0020f4a582bababa404040",
              "ca0020f4a582ffffffbababa404040",
              "b2182bef8a62fddbc7e0e0e09999994d4d4d",
              "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
              "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
              "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
              "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
              "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "fc8d59ffffbf91bfdb",
              "d7191cfdae61abd9e92c7bb6",
              "d7191cfdae61ffffbfabd9e92c7bb6",
              "d73027fc8d59fee090e0f3f891bfdb4575b4",
              "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
              "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
              "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
              "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
              "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "fc8d59ffffbf91cf60",
              "d7191cfdae61a6d96a1a9641",
              "d7191cfdae61ffffbfa6d96a1a9641",
              "d73027fc8d59fee08bd9ef8b91cf601a9850",
              "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
              "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
              "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
              "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
              "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "fc8d59ffffbf99d594",
              "d7191cfdae61abdda42b83ba",
              "d7191cfdae61ffffbfabdda42b83ba",
              "d53e4ffc8d59fee08be6f59899d5943288bd",
              "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
              "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
              "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
              "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
              "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "e5f5f999d8c92ca25f",
              "edf8fbb2e2e266c2a4238b45",
              "edf8fbb2e2e266c2a42ca25f006d2c",
              "edf8fbccece699d8c966c2a42ca25f006d2c",
              "edf8fbccece699d8c966c2a441ae76238b45005824",
              "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
              "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "e0ecf49ebcda8856a7",
              "edf8fbb3cde38c96c688419d",
              "edf8fbb3cde38c96c68856a7810f7c",
              "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
              "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
              "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
              "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "e0f3dba8ddb543a2ca",
              "f0f9e8bae4bc7bccc42b8cbe",
              "f0f9e8bae4bc7bccc443a2ca0868ac",
              "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
              "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
              "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
              "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "fee8c8fdbb84e34a33",
              "fef0d9fdcc8afc8d59d7301f",
              "fef0d9fdcc8afc8d59e34a33b30000",
              "fef0d9fdd49efdbb84fc8d59e34a33b30000",
              "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
              "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
              "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "ece2f0a6bddb1c9099",
              "f6eff7bdc9e167a9cf02818a",
              "f6eff7bdc9e167a9cf1c9099016c59",
              "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
              "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
              "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
              "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "ece7f2a6bddb2b8cbe",
              "f1eef6bdc9e174a9cf0570b0",
              "f1eef6bdc9e174a9cf2b8cbe045a8d",
              "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
              "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
              "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
              "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "e7e1efc994c7dd1c77",
              "f1eef6d7b5d8df65b0ce1256",
              "f1eef6d7b5d8df65b0dd1c77980043",
              "f1eef6d4b9dac994c7df65b0dd1c77980043",
              "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
              "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
              "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "fde0ddfa9fb5c51b8a",
              "feebe2fbb4b9f768a1ae017e",
              "feebe2fbb4b9f768a1c51b8a7a0177",
              "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
              "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
              "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
              "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "edf8b17fcdbb2c7fb8",
              "ffffcca1dab441b6c4225ea8",
              "ffffcca1dab441b6c42c7fb8253494",
              "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
              "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
              "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
              "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "f7fcb9addd8e31a354",
              "ffffccc2e69978c679238443",
              "ffffccc2e69978c67931a354006837",
              "ffffccd9f0a3addd8e78c67931a354006837",
              "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
              "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
              "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "fff7bcfec44fd95f0e",
              "ffffd4fed98efe9929cc4c02",
              "ffffd4fed98efe9929d95f0e993404",
              "ffffd4fee391fec44ffe9929d95f0e993404",
              "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
              "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
              "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "ffeda0feb24cf03b20",
              "ffffb2fecc5cfd8d3ce31a1c",
              "ffffb2fecc5cfd8d3cf03b20bd0026",
              "ffffb2fed976feb24cfd8d3cf03b20bd0026",
              "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
              "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
              "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "deebf79ecae13182bd",
              "eff3ffbdd7e76baed62171b5",
              "eff3ffbdd7e76baed63182bd08519c",
              "eff3ffc6dbef9ecae16baed63182bd08519c",
              "eff3ffc6dbef9ecae16baed64292c62171b5084594",
              "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
              "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "e5f5e0a1d99b31a354",
              "edf8e9bae4b374c476238b45",
              "edf8e9bae4b374c47631a354006d2c",
              "edf8e9c7e9c0a1d99b74c47631a354006d2c",
              "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
              "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
              "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "f0f0f0bdbdbd636363",
              "f7f7f7cccccc969696525252",
              "f7f7f7cccccc969696636363252525",
              "f7f7f7d9d9d9bdbdbd969696636363252525",
              "f7f7f7d9d9d9bdbdbd969696737373525252252525",
              "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
              "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "efedf5bcbddc756bb1",
              "f2f0f7cbc9e29e9ac86a51a3",
              "f2f0f7cbc9e29e9ac8756bb154278f",
              "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
              "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
              "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
              "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "fee0d2fc9272de2d26",
              "fee5d9fcae91fb6a4acb181d",
              "fee5d9fcae91fb6a4ade2d26a50f15",
              "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
              "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
              "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
              "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
            )
            .map(zf)
        ),
        Xf(
          new Array(3)
            .concat(
              "fee6cefdae6be6550d",
              "feeddefdbe85fd8d3cd94701",
              "feeddefdbe85fd8d3ce6550da63603",
              "feeddefdd0a2fdae6bfd8d3ce6550da63603",
              "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
              "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
              "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
            )
            .map(zf)
        ),
        Qn(Sn(300, 0.5, 0), Sn(-240, 0.5, 1)),
        Qn(Sn(-100, 0.75, 0.35), Sn(80, 1.5, 0.8)),
        Qn(Sn(260, 0.75, 0.35), Sn(80, 1.5, 0.8)),
        Sn(),
        Xt(),
        Math.PI,
        Math.PI
      function Vf(t) {
        var n = t.length
        return function (e) {
          return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
        }
      }
      Vf(
        zf(
          "44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"
        )
      ),
        Vf(
          zf(
            "00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"
          )
        ),
        Vf(
          zf(
            "00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"
          )
        ),
        Vf(
          zf(
            "0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"
          )
        ),
        Math.abs,
        Math.atan2,
        Math.cos,
        Math.max,
        Math.min,
        Math.sin,
        Math.sqrt
      var Bf = 1e-12,
        Zf = Math.PI,
        Wf = 2 * Zf
      function Gf(t) {
        this._context = t
      }
      Gf.prototype = {
        areaStart: function () {
          this._line = 0
        },
        areaEnd: function () {
          this._line = NaN
        },
        lineStart: function () {
          this._point = 0
        },
        lineEnd: function () {
          ;(this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line)
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              ;(this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n)
              break
            case 1:
              this._point = 2
            default:
              this._context.lineTo(t, n)
          }
        },
      }
      var Jf = function (t) {
        return new Gf(t)
      }
      Kf(Jf)
      function Qf(t) {
        this._curve = t
      }
      function Kf(t) {
        function n(n) {
          return new Qf(t(n))
        }
        return (n._curve = t), n
      }
      Qf.prototype = {
        areaStart: function () {
          this._curve.areaStart()
        },
        areaEnd: function () {
          this._curve.areaEnd()
        },
        lineStart: function () {
          this._curve.lineStart()
        },
        lineEnd: function () {
          this._curve.lineEnd()
        },
        point: function (t, n) {
          this._curve.point(n * Math.sin(t), n * -Math.cos(t))
        },
      }
      Array.prototype.slice
      Math.sqrt(1 / 3)
      var tc = Math.sin(Zf / 10) / Math.sin((7 * Zf) / 10),
        nc =
          (Math.sin(Wf / 10),
          Math.cos(Wf / 10),
          Math.sqrt(3),
          Math.sqrt(3),
          Math.sqrt(12),
          function () {})
      function ec(t, n, e) {
        t._context.bezierCurveTo(
          (2 * t._x0 + t._x1) / 3,
          (2 * t._y0 + t._y1) / 3,
          (t._x0 + 2 * t._x1) / 3,
          (t._y0 + 2 * t._y1) / 3,
          (t._x0 + 4 * t._x1 + n) / 6,
          (t._y0 + 4 * t._y1 + e) / 6
        )
      }
      function rc(t) {
        this._context = t
      }
      rc.prototype = {
        areaStart: function () {
          this._line = 0
        },
        areaEnd: function () {
          this._line = NaN
        },
        lineStart: function () {
          ;(this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0)
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              ec(this, this._x1, this._y1)
            case 2:
              this._context.lineTo(this._x1, this._y1)
          }
          ;(this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line)
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              ;(this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n)
              break
            case 1:
              this._point = 2
              break
            case 2:
              ;(this._point = 3),
                this._context.lineTo(
                  (5 * this._x0 + this._x1) / 6,
                  (5 * this._y0 + this._y1) / 6
                )
            default:
              ec(this, t, n)
          }
          ;(this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = n)
        },
      }
      function ic(t) {
        this._context = t
      }
      ic.prototype = {
        areaStart: nc,
        areaEnd: nc,
        lineStart: function () {
          ;(this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
              NaN),
            (this._point = 0)
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x2, this._y2),
                this._context.closePath()
              break
            case 2:
              this._context.moveTo(
                (this._x2 + 2 * this._x3) / 3,
                (this._y2 + 2 * this._y3) / 3
              ),
                this._context.lineTo(
                  (this._x3 + 2 * this._x2) / 3,
                  (this._y3 + 2 * this._y2) / 3
                ),
                this._context.closePath()
              break
            case 3:
              this.point(this._x2, this._y2),
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4)
          }
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              ;(this._point = 1), (this._x2 = t), (this._y2 = n)
              break
            case 1:
              ;(this._point = 2), (this._x3 = t), (this._y3 = n)
              break
            case 2:
              ;(this._point = 3),
                (this._x4 = t),
                (this._y4 = n),
                this._context.moveTo(
                  (this._x0 + 4 * this._x1 + t) / 6,
                  (this._y0 + 4 * this._y1 + n) / 6
                )
              break
            default:
              ec(this, t, n)
          }
          ;(this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = n)
        },
      }
      function ac(t) {
        this._context = t
      }
      ac.prototype = {
        areaStart: function () {
          this._line = 0
        },
        areaEnd: function () {
          this._line = NaN
        },
        lineStart: function () {
          ;(this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0)
        },
        lineEnd: function () {
          ;(this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line)
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              this._point = 1
              break
            case 1:
              this._point = 2
              break
            case 2:
              this._point = 3
              var e = (this._x0 + 4 * this._x1 + t) / 6,
                r = (this._y0 + 4 * this._y1 + n) / 6
              this._line
                ? this._context.lineTo(e, r)
                : this._context.moveTo(e, r)
              break
            case 3:
              this._point = 4
            default:
              ec(this, t, n)
          }
          ;(this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = n)
        },
      }
      function oc(t, n) {
        ;(this._basis = new rc(t)), (this._beta = n)
      }
      oc.prototype = {
        lineStart: function () {
          ;(this._x = []), (this._y = []), this._basis.lineStart()
        },
        lineEnd: function () {
          var t = this._x,
            n = this._y,
            e = t.length - 1
          if (e > 0)
            for (
              var r, i = t[0], a = n[0], o = t[e] - i, f = n[e] - a, c = -1;
              ++c <= e;

            )
              (r = c / e),
                this._basis.point(
                  this._beta * t[c] + (1 - this._beta) * (i + r * o),
                  this._beta * n[c] + (1 - this._beta) * (a + r * f)
                )
          ;(this._x = this._y = null), this._basis.lineEnd()
        },
        point: function (t, n) {
          this._x.push(+t), this._y.push(+n)
        },
      }
      ;(function t(n) {
        function e(t) {
          return 1 === n ? new rc(t) : new oc(t, n)
        }
        return (
          (e.beta = function (n) {
            return t(+n)
          }),
          e
        )
      })(0.85)
      function fc(t, n, e) {
        t._context.bezierCurveTo(
          t._x1 + t._k * (t._x2 - t._x0),
          t._y1 + t._k * (t._y2 - t._y0),
          t._x2 + t._k * (t._x1 - n),
          t._y2 + t._k * (t._y1 - e),
          t._x2,
          t._y2
        )
      }
      function cc(t, n) {
        ;(this._context = t), (this._k = (1 - n) / 6)
      }
      cc.prototype = {
        areaStart: function () {
          this._line = 0
        },
        areaEnd: function () {
          this._line = NaN
        },
        lineStart: function () {
          ;(this._x0 =
            this._x1 =
            this._x2 =
            this._y0 =
            this._y1 =
            this._y2 =
              NaN),
            (this._point = 0)
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2)
              break
            case 3:
              fc(this, this._x1, this._y1)
          }
          ;(this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line)
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              ;(this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n)
              break
            case 1:
              ;(this._point = 2), (this._x1 = t), (this._y1 = n)
              break
            case 2:
              this._point = 3
            default:
              fc(this, t, n)
          }
          ;(this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n)
        },
      }
      ;(function t(n) {
        function e(t) {
          return new cc(t, n)
        }
        return (
          (e.tension = function (n) {
            return t(+n)
          }),
          e
        )
      })(0)
      function uc(t, n) {
        ;(this._context = t), (this._k = (1 - n) / 6)
      }
      uc.prototype = {
        areaStart: nc,
        areaEnd: nc,
        lineStart: function () {
          ;(this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._x5 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
            this._y5 =
              NaN),
            (this._point = 0)
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x3, this._y3),
                this._context.closePath()
              break
            case 2:
              this._context.lineTo(this._x3, this._y3),
                this._context.closePath()
              break
            case 3:
              this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5)
          }
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              ;(this._point = 1), (this._x3 = t), (this._y3 = n)
              break
            case 1:
              ;(this._point = 2),
                this._context.moveTo((this._x4 = t), (this._y4 = n))
              break
            case 2:
              ;(this._point = 3), (this._x5 = t), (this._y5 = n)
              break
            default:
              fc(this, t, n)
          }
          ;(this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n)
        },
      }
      ;(function t(n) {
        function e(t) {
          return new uc(t, n)
        }
        return (
          (e.tension = function (n) {
            return t(+n)
          }),
          e
        )
      })(0)
      function sc(t, n) {
        ;(this._context = t), (this._k = (1 - n) / 6)
      }
      sc.prototype = {
        areaStart: function () {
          this._line = 0
        },
        areaEnd: function () {
          this._line = NaN
        },
        lineStart: function () {
          ;(this._x0 =
            this._x1 =
            this._x2 =
            this._y0 =
            this._y1 =
            this._y2 =
              NaN),
            (this._point = 0)
        },
        lineEnd: function () {
          ;(this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line)
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              this._point = 1
              break
            case 1:
              this._point = 2
              break
            case 2:
              ;(this._point = 3),
                this._line
                  ? this._context.lineTo(this._x2, this._y2)
                  : this._context.moveTo(this._x2, this._y2)
              break
            case 3:
              this._point = 4
            default:
              fc(this, t, n)
          }
          ;(this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n)
        },
      }
      ;(function t(n) {
        function e(t) {
          return new sc(t, n)
        }
        return (
          (e.tension = function (n) {
            return t(+n)
          }),
          e
        )
      })(0)
      function hc(t, n, e) {
        var r = t._x1,
          i = t._y1,
          a = t._x2,
          o = t._y2
        if (t._l01_a > Bf) {
          var f = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
            c = 3 * t._l01_a * (t._l01_a + t._l12_a)
          ;(r = (r * f - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c),
            (i = (i * f - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c)
        }
        if (t._l23_a > Bf) {
          var u = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
            s = 3 * t._l23_a * (t._l23_a + t._l12_a)
          ;(a = (a * u + t._x1 * t._l23_2a - n * t._l12_2a) / s),
            (o = (o * u + t._y1 * t._l23_2a - e * t._l12_2a) / s)
        }
        t._context.bezierCurveTo(r, i, a, o, t._x2, t._y2)
      }
      function lc(t, n) {
        ;(this._context = t), (this._alpha = n)
      }
      lc.prototype = {
        areaStart: function () {
          this._line = 0
        },
        areaEnd: function () {
          this._line = NaN
        },
        lineStart: function () {
          ;(this._x0 =
            this._x1 =
            this._x2 =
            this._y0 =
            this._y1 =
            this._y2 =
              NaN),
            (this._l01_a =
              this._l12_a =
              this._l23_a =
              this._l01_2a =
              this._l12_2a =
              this._l23_2a =
              this._point =
                0)
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2)
              break
            case 3:
              this.point(this._x2, this._y2)
          }
          ;(this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line)
        },
        point: function (t, n) {
          if (((t = +t), (n = +n), this._point)) {
            var e = this._x2 - t,
              r = this._y2 - n
            this._l23_a = Math.sqrt(
              (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            )
          }
          switch (this._point) {
            case 0:
              ;(this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n)
              break
            case 1:
              this._point = 2
              break
            case 2:
              this._point = 3
            default:
              hc(this, t, n)
          }
          ;(this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n)
        },
      }
      ;(function t(n) {
        function e(t) {
          return n ? new lc(t, n) : new cc(t, 0)
        }
        return (
          (e.alpha = function (n) {
            return t(+n)
          }),
          e
        )
      })(0.5)
      function dc(t, n) {
        ;(this._context = t), (this._alpha = n)
      }
      dc.prototype = {
        areaStart: nc,
        areaEnd: nc,
        lineStart: function () {
          ;(this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._x5 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
            this._y5 =
              NaN),
            (this._l01_a =
              this._l12_a =
              this._l23_a =
              this._l01_2a =
              this._l12_2a =
              this._l23_2a =
              this._point =
                0)
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x3, this._y3),
                this._context.closePath()
              break
            case 2:
              this._context.lineTo(this._x3, this._y3),
                this._context.closePath()
              break
            case 3:
              this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5)
          }
        },
        point: function (t, n) {
          if (((t = +t), (n = +n), this._point)) {
            var e = this._x2 - t,
              r = this._y2 - n
            this._l23_a = Math.sqrt(
              (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            )
          }
          switch (this._point) {
            case 0:
              ;(this._point = 1), (this._x3 = t), (this._y3 = n)
              break
            case 1:
              ;(this._point = 2),
                this._context.moveTo((this._x4 = t), (this._y4 = n))
              break
            case 2:
              ;(this._point = 3), (this._x5 = t), (this._y5 = n)
              break
            default:
              hc(this, t, n)
          }
          ;(this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n)
        },
      }
      ;(function t(n) {
        function e(t) {
          return n ? new dc(t, n) : new uc(t, 0)
        }
        return (
          (e.alpha = function (n) {
            return t(+n)
          }),
          e
        )
      })(0.5)
      function pc(t, n) {
        ;(this._context = t), (this._alpha = n)
      }
      pc.prototype = {
        areaStart: function () {
          this._line = 0
        },
        areaEnd: function () {
          this._line = NaN
        },
        lineStart: function () {
          ;(this._x0 =
            this._x1 =
            this._x2 =
            this._y0 =
            this._y1 =
            this._y2 =
              NaN),
            (this._l01_a =
              this._l12_a =
              this._l23_a =
              this._l01_2a =
              this._l12_2a =
              this._l23_2a =
              this._point =
                0)
        },
        lineEnd: function () {
          ;(this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line)
        },
        point: function (t, n) {
          if (((t = +t), (n = +n), this._point)) {
            var e = this._x2 - t,
              r = this._y2 - n
            this._l23_a = Math.sqrt(
              (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            )
          }
          switch (this._point) {
            case 0:
              this._point = 1
              break
            case 1:
              this._point = 2
              break
            case 2:
              ;(this._point = 3),
                this._line
                  ? this._context.lineTo(this._x2, this._y2)
                  : this._context.moveTo(this._x2, this._y2)
              break
            case 3:
              this._point = 4
            default:
              hc(this, t, n)
          }
          ;(this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n)
        },
      }
      ;(function t(n) {
        function e(t) {
          return n ? new pc(t, n) : new sc(t, 0)
        }
        return (
          (e.alpha = function (n) {
            return t(+n)
          }),
          e
        )
      })(0.5)
      function _c(t) {
        this._context = t
      }
      _c.prototype = {
        areaStart: nc,
        areaEnd: nc,
        lineStart: function () {
          this._point = 0
        },
        lineEnd: function () {
          this._point && this._context.closePath()
        },
        point: function (t, n) {
          ;(t = +t),
            (n = +n),
            this._point
              ? this._context.lineTo(t, n)
              : ((this._point = 1), this._context.moveTo(t, n))
        },
      }
      function bc(t) {
        return t < 0 ? -1 : 1
      }
      function yc(t, n, e) {
        var r = t._x1 - t._x0,
          i = n - t._x1,
          a = (t._y1 - t._y0) / (r || (i < 0 && -0)),
          o = (e - t._y1) / (i || (r < 0 && -0)),
          f = (a * i + o * r) / (r + i)
        return (
          (bc(a) + bc(o)) *
            Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(f)) || 0
        )
      }
      function vc(t, n) {
        var e = t._x1 - t._x0
        return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n
      }
      function gc(t, n, e) {
        var r = t._x0,
          i = t._y0,
          a = t._x1,
          o = t._y1,
          f = (a - r) / 3
        t._context.bezierCurveTo(r + f, i + f * n, a - f, o - f * e, a, o)
      }
      function xc(t) {
        this._context = t
      }
      function mc(t) {
        this._context = new wc(t)
      }
      function wc(t) {
        this._context = t
      }
      function Mc(t) {
        this._context = t
      }
      function Sc(t) {
        var n,
          e,
          r = t.length - 1,
          i = new Array(r),
          a = new Array(r),
          o = new Array(r)
        for (i[0] = 0, a[0] = 2, o[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n)
          (i[n] = 1), (a[n] = 4), (o[n] = 4 * t[n] + 2 * t[n + 1])
        for (
          i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * t[r - 1] + t[r], n = 1;
          n < r;
          ++n
        )
          (e = i[n] / a[n - 1]), (a[n] -= e), (o[n] -= e * o[n - 1])
        for (i[r - 1] = o[r - 1] / a[r - 1], n = r - 2; n >= 0; --n)
          i[n] = (o[n] - i[n + 1]) / a[n]
        for (a[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n)
          a[n] = 2 * t[n + 1] - i[n + 1]
        return [i, a]
      }
      ;(xc.prototype = {
        areaStart: function () {
          this._line = 0
        },
        areaEnd: function () {
          this._line = NaN
        },
        lineStart: function () {
          ;(this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
            (this._point = 0)
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x1, this._y1)
              break
            case 3:
              gc(this, this._t0, vc(this, this._t0))
          }
          ;(this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line)
        },
        point: function (t, n) {
          var e = NaN
          if (((n = +n), (t = +t) !== this._x1 || n !== this._y1)) {
            switch (this._point) {
              case 0:
                ;(this._point = 1),
                  this._line
                    ? this._context.lineTo(t, n)
                    : this._context.moveTo(t, n)
                break
              case 1:
                this._point = 2
                break
              case 2:
                ;(this._point = 3), gc(this, vc(this, (e = yc(this, t, n))), e)
                break
              default:
                gc(this, this._t0, (e = yc(this, t, n)))
            }
            ;(this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = n),
              (this._t0 = e)
          }
        },
      }),
        ((mc.prototype = Object.create(xc.prototype)).point = function (t, n) {
          xc.prototype.point.call(this, n, t)
        }),
        (wc.prototype = {
          moveTo: function (t, n) {
            this._context.moveTo(n, t)
          },
          closePath: function () {
            this._context.closePath()
          },
          lineTo: function (t, n) {
            this._context.lineTo(n, t)
          },
          bezierCurveTo: function (t, n, e, r, i, a) {
            this._context.bezierCurveTo(n, t, r, e, a, i)
          },
        }),
        (Mc.prototype = {
          areaStart: function () {
            this._line = 0
          },
          areaEnd: function () {
            this._line = NaN
          },
          lineStart: function () {
            ;(this._x = []), (this._y = [])
          },
          lineEnd: function () {
            var t = this._x,
              n = this._y,
              e = t.length
            if (e)
              if (
                (this._line
                  ? this._context.lineTo(t[0], n[0])
                  : this._context.moveTo(t[0], n[0]),
                2 === e)
              )
                this._context.lineTo(t[1], n[1])
              else
                for (var r = Sc(t), i = Sc(n), a = 0, o = 1; o < e; ++a, ++o)
                  this._context.bezierCurveTo(
                    r[0][a],
                    i[0][a],
                    r[1][a],
                    i[1][a],
                    t[o],
                    n[o]
                  )
            ;(this._line || (0 !== this._line && 1 === e)) &&
              this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null)
          },
          point: function (t, n) {
            this._x.push(+t), this._y.push(+n)
          },
        })
      function Nc(t, n) {
        ;(this._context = t), (this._t = n)
      }
      Nc.prototype = {
        areaStart: function () {
          this._line = 0
        },
        areaEnd: function () {
          this._line = NaN
        },
        lineStart: function () {
          ;(this._x = this._y = NaN), (this._point = 0)
        },
        lineEnd: function () {
          0 < this._t &&
            this._t < 1 &&
            2 === this._point &&
            this._context.lineTo(this._x, this._y),
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
            this._line >= 0 &&
              ((this._t = 1 - this._t), (this._line = 1 - this._line))
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              ;(this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n)
              break
            case 1:
              this._point = 2
            default:
              if (this._t <= 0)
                this._context.lineTo(this._x, n), this._context.lineTo(t, n)
              else {
                var e = this._x * (1 - this._t) + t * this._t
                this._context.lineTo(e, this._y), this._context.lineTo(e, n)
              }
          }
          ;(this._x = t), (this._y = n)
        },
      }
      function Tc() {
        this._ = null
      }
      function Ac(t) {
        t.U = t.C = t.L = t.R = t.P = t.N = null
      }
      function Cc(t, n) {
        var e = n,
          r = n.R,
          i = e.U
        i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
          (r.U = i),
          (e.U = r),
          (e.R = r.L),
          e.R && (e.R.U = e),
          (r.L = e)
      }
      function Ec(t, n) {
        var e = n,
          r = n.L,
          i = e.U
        i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
          (r.U = i),
          (e.U = r),
          (e.L = r.R),
          e.L && (e.L.U = e),
          (r.R = e)
      }
      function kc(t) {
        for (; t.L; ) t = t.L
        return t
      }
      Tc.prototype = {
        constructor: Tc,
        insert: function (t, n) {
          var e, r, i
          if (t) {
            if (((n.P = t), (n.N = t.N), t.N && (t.N.P = n), (t.N = n), t.R)) {
              for (t = t.R; t.L; ) t = t.L
              t.L = n
            } else t.R = n
            e = t
          } else
            this._
              ? ((t = kc(this._)),
                (n.P = null),
                (n.N = t),
                (t.P = t.L = n),
                (e = t))
              : ((n.P = n.N = null), (this._ = n), (e = null))
          for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C; )
            e === (r = e.U).L
              ? (i = r.R) && i.C
                ? ((e.C = i.C = !1), (r.C = !0), (t = r))
                : (t === e.R && (Cc(this, e), (e = (t = e).U)),
                  (e.C = !1),
                  (r.C = !0),
                  Ec(this, r))
              : (i = r.L) && i.C
              ? ((e.C = i.C = !1), (r.C = !0), (t = r))
              : (t === e.L && (Ec(this, e), (e = (t = e).U)),
                (e.C = !1),
                (r.C = !0),
                Cc(this, r)),
              (e = t.U)
          this._.C = !1
        },
        remove: function (t) {
          t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), (t.N = t.P = null)
          var n,
            e,
            r,
            i = t.U,
            a = t.L,
            o = t.R
          if (
            ((e = a ? (o ? kc(o) : a) : o),
            i ? (i.L === t ? (i.L = e) : (i.R = e)) : (this._ = e),
            a && o
              ? ((r = e.C),
                (e.C = t.C),
                (e.L = a),
                (a.U = e),
                e !== o
                  ? ((i = e.U),
                    (e.U = t.U),
                    (t = e.R),
                    (i.L = t),
                    (e.R = o),
                    (o.U = e))
                  : ((e.U = i), (i = e), (t = e.R)))
              : ((r = t.C), (t = e)),
            t && (t.U = i),
            !r)
          )
            if (t && t.C) t.C = !1
            else {
              do {
                if (t === this._) break
                if (t === i.L) {
                  if (
                    ((n = i.R).C &&
                      ((n.C = !1), (i.C = !0), Cc(this, i), (n = i.R)),
                    (n.L && n.L.C) || (n.R && n.R.C))
                  ) {
                    ;(n.R && n.R.C) ||
                      ((n.L.C = !1), (n.C = !0), Ec(this, n), (n = i.R)),
                      (n.C = i.C),
                      (i.C = n.R.C = !1),
                      Cc(this, i),
                      (t = this._)
                    break
                  }
                } else if (
                  ((n = i.L).C &&
                    ((n.C = !1), (i.C = !0), Ec(this, i), (n = i.L)),
                  (n.L && n.L.C) || (n.R && n.R.C))
                ) {
                  ;(n.L && n.L.C) ||
                    ((n.R.C = !1), (n.C = !0), Cc(this, n), (n = i.L)),
                    (n.C = i.C),
                    (i.C = n.L.C = !1),
                    Ec(this, i),
                    (t = this._)
                  break
                }
                ;(n.C = !0), (t = i), (i = i.U)
              } while (!t.C)
              t && (t.C = !1)
            }
        },
      }
      var Pc = Tc
      function Uc(t, n, e, r) {
        var i = [null, null],
          a = eu.push(i) - 1
        return (
          (i.left = t),
          (i.right = n),
          e && Oc(i, t, n, e),
          r && Oc(i, n, t, r),
          tu[t.index].halfedges.push(a),
          tu[n.index].halfedges.push(a),
          i
        )
      }
      function Lc(t, n, e) {
        var r = [n, e]
        return (r.left = t), r
      }
      function Oc(t, n, e, r) {
        t[0] || t[1]
          ? t.left === e
            ? (t[1] = r)
            : (t[0] = r)
          : ((t[0] = r), (t.left = n), (t.right = e))
      }
      function jc(t, n, e, r, i) {
        var a,
          o = t[0],
          f = t[1],
          c = o[0],
          u = o[1],
          s = 0,
          h = 1,
          l = f[0] - c,
          d = f[1] - u
        if (((a = n - c), l || !(a > 0))) {
          if (((a /= l), l < 0)) {
            if (a < s) return
            a < h && (h = a)
          } else if (l > 0) {
            if (a > h) return
            a > s && (s = a)
          }
          if (((a = r - c), l || !(a < 0))) {
            if (((a /= l), l < 0)) {
              if (a > h) return
              a > s && (s = a)
            } else if (l > 0) {
              if (a < s) return
              a < h && (h = a)
            }
            if (((a = e - u), d || !(a > 0))) {
              if (((a /= d), d < 0)) {
                if (a < s) return
                a < h && (h = a)
              } else if (d > 0) {
                if (a > h) return
                a > s && (s = a)
              }
              if (((a = i - u), d || !(a < 0))) {
                if (((a /= d), d < 0)) {
                  if (a > h) return
                  a > s && (s = a)
                } else if (d > 0) {
                  if (a < s) return
                  a < h && (h = a)
                }
                return (
                  !(s > 0 || h < 1) ||
                  (s > 0 && (t[0] = [c + s * l, u + s * d]),
                  h < 1 && (t[1] = [c + h * l, u + h * d]),
                  !0)
                )
              }
            }
          }
        }
      }
      function Rc(t, n, e, r, i) {
        var a = t[1]
        if (a) return !0
        var o,
          f,
          c = t[0],
          u = t.left,
          s = t.right,
          h = u[0],
          l = u[1],
          d = s[0],
          p = s[1],
          _ = (h + d) / 2,
          b = (l + p) / 2
        if (p === l) {
          if (_ < n || _ >= r) return
          if (h > d) {
            if (c) {
              if (c[1] >= i) return
            } else c = [_, e]
            a = [_, i]
          } else {
            if (c) {
              if (c[1] < e) return
            } else c = [_, i]
            a = [_, e]
          }
        } else if (((f = b - (o = (h - d) / (p - l)) * _), o < -1 || o > 1))
          if (h > d) {
            if (c) {
              if (c[1] >= i) return
            } else c = [(e - f) / o, e]
            a = [(i - f) / o, i]
          } else {
            if (c) {
              if (c[1] < e) return
            } else c = [(i - f) / o, i]
            a = [(e - f) / o, e]
          }
        else if (l < p) {
          if (c) {
            if (c[0] >= r) return
          } else c = [n, o * n + f]
          a = [r, o * r + f]
        } else {
          if (c) {
            if (c[0] < n) return
          } else c = [r, o * r + f]
          a = [n, o * n + f]
        }
        return (t[0] = c), (t[1] = a), !0
      }
      function Dc(t, n) {
        var e = t.site,
          r = n.left,
          i = n.right
        return (
          e === i && ((i = r), (r = e)),
          i
            ? Math.atan2(i[1] - r[1], i[0] - r[0])
            : (e === r ? ((r = n[1]), (i = n[0])) : ((r = n[0]), (i = n[1])),
              Math.atan2(r[0] - i[0], i[1] - r[1]))
        )
      }
      function Fc(t, n) {
        return n[+(n.left !== t.site)]
      }
      function Ic(t, n) {
        return n[+(n.left === t.site)]
      }
      var Yc,
        qc = []
      function $c() {
        Ac(this), (this.x = this.y = this.arc = this.site = this.cy = null)
      }
      function Hc(t) {
        var n = t.P,
          e = t.N
        if (n && e) {
          var r = n.site,
            i = t.site,
            a = e.site
          if (r !== a) {
            var o = i[0],
              f = i[1],
              c = r[0] - o,
              u = r[1] - f,
              s = a[0] - o,
              h = a[1] - f,
              l = 2 * (c * h - u * s)
            if (!(l >= -iu)) {
              var d = c * c + u * u,
                p = s * s + h * h,
                _ = (h * d - u * p) / l,
                b = (c * p - s * d) / l,
                y = qc.pop() || new $c()
              ;(y.arc = t),
                (y.site = i),
                (y.x = _ + o),
                (y.y = (y.cy = b + f) + Math.sqrt(_ * _ + b * b)),
                (t.circle = y)
              for (var v = null, g = nu._; g; )
                if (y.y < g.y || (y.y === g.y && y.x <= g.x)) {
                  if (!g.L) {
                    v = g.P
                    break
                  }
                  g = g.L
                } else {
                  if (!g.R) {
                    v = g
                    break
                  }
                  g = g.R
                }
              nu.insert(v, y), v || (Yc = y)
            }
          }
        }
      }
      function zc(t) {
        var n = t.circle
        n &&
          (n.P || (Yc = n.N),
          nu.remove(n),
          qc.push(n),
          Ac(n),
          (t.circle = null))
      }
      var Xc = []
      function Vc() {
        Ac(this), (this.edge = this.site = this.circle = null)
      }
      function Bc(t) {
        var n = Xc.pop() || new Vc()
        return (n.site = t), n
      }
      function Zc(t) {
        zc(t), Kc.remove(t), Xc.push(t), Ac(t)
      }
      function Wc(t) {
        var n = t.circle,
          e = n.x,
          r = n.cy,
          i = [e, r],
          a = t.P,
          o = t.N,
          f = [t]
        Zc(t)
        for (
          var c = a;
          c.circle &&
          Math.abs(e - c.circle.x) < ru &&
          Math.abs(r - c.circle.cy) < ru;

        )
          (a = c.P), f.unshift(c), Zc(c), (c = a)
        f.unshift(c), zc(c)
        for (
          var u = o;
          u.circle &&
          Math.abs(e - u.circle.x) < ru &&
          Math.abs(r - u.circle.cy) < ru;

        )
          (o = u.N), f.push(u), Zc(u), (u = o)
        f.push(u), zc(u)
        var s,
          h = f.length
        for (s = 1; s < h; ++s)
          (u = f[s]), (c = f[s - 1]), Oc(u.edge, c.site, u.site, i)
        ;(c = f[0]),
          ((u = f[h - 1]).edge = Uc(c.site, u.site, null, i)),
          Hc(c),
          Hc(u)
      }
      function Gc(t) {
        for (var n, e, r, i, a = t[0], o = t[1], f = Kc._; f; )
          if ((r = Jc(f, o) - a) > ru) f = f.L
          else {
            if (!((i = a - Qc(f, o)) > ru)) {
              r > -ru
                ? ((n = f.P), (e = f))
                : i > -ru
                ? ((n = f), (e = f.N))
                : (n = e = f)
              break
            }
            if (!f.R) {
              n = f
              break
            }
            f = f.R
          }
        !(function (t) {
          tu[t.index] = { site: t, halfedges: [] }
        })(t)
        var c = Bc(t)
        if ((Kc.insert(n, c), n || e)) {
          if (n === e)
            return (
              zc(n),
              (e = Bc(n.site)),
              Kc.insert(c, e),
              (c.edge = e.edge = Uc(n.site, c.site)),
              Hc(n),
              void Hc(e)
            )
          if (e) {
            zc(n), zc(e)
            var u = n.site,
              s = u[0],
              h = u[1],
              l = t[0] - s,
              d = t[1] - h,
              p = e.site,
              _ = p[0] - s,
              b = p[1] - h,
              y = 2 * (l * b - d * _),
              v = l * l + d * d,
              g = _ * _ + b * b,
              x = [(b * v - d * g) / y + s, (l * g - _ * v) / y + h]
            Oc(e.edge, u, p, x),
              (c.edge = Uc(u, t, null, x)),
              (e.edge = Uc(t, p, null, x)),
              Hc(n),
              Hc(e)
          } else c.edge = Uc(n.site, c.site)
        }
      }
      function Jc(t, n) {
        var e = t.site,
          r = e[0],
          i = e[1],
          a = i - n
        if (!a) return r
        var o = t.P
        if (!o) return -1 / 0
        var f = (e = o.site)[0],
          c = e[1],
          u = c - n
        if (!u) return f
        var s = f - r,
          h = 1 / a - 1 / u,
          l = s / u
        return h
          ? (-l +
              Math.sqrt(
                l * l - 2 * h * ((s * s) / (-2 * u) - c + u / 2 + i - a / 2)
              )) /
              h +
              r
          : (r + f) / 2
      }
      function Qc(t, n) {
        var e = t.N
        if (e) return Jc(e, n)
        var r = t.site
        return r[1] === n ? r[0] : 1 / 0
      }
      var Kc,
        tu,
        nu,
        eu,
        ru = 1e-6,
        iu = 1e-12
      function au(t, n) {
        return n[1] - t[1] || n[0] - t[0]
      }
      function ou(t, n) {
        var e,
          r,
          i,
          a = t.sort(au).pop()
        for (
          eu = [], tu = new Array(t.length), Kc = new Pc(), nu = new Pc();
          ;

        )
          if (
            ((i = Yc), a && (!i || a[1] < i.y || (a[1] === i.y && a[0] < i.x)))
          )
            (a[0] === e && a[1] === r) || (Gc(a), (e = a[0]), (r = a[1])),
              (a = t.pop())
          else {
            if (!i) break
            Wc(i.arc)
          }
        if (
          ((function () {
            for (var t, n, e, r, i = 0, a = tu.length; i < a; ++i)
              if ((t = tu[i]) && (r = (n = t.halfedges).length)) {
                var o = new Array(r),
                  f = new Array(r)
                for (e = 0; e < r; ++e) (o[e] = e), (f[e] = Dc(t, eu[n[e]]))
                for (
                  o.sort(function (t, n) {
                    return f[n] - f[t]
                  }),
                    e = 0;
                  e < r;
                  ++e
                )
                  f[e] = n[o[e]]
                for (e = 0; e < r; ++e) n[e] = f[e]
              }
          })(),
          n)
        ) {
          var o = +n[0][0],
            f = +n[0][1],
            c = +n[1][0],
            u = +n[1][1]
          !(function (t, n, e, r) {
            for (var i, a = eu.length; a--; )
              (Rc((i = eu[a]), t, n, e, r) &&
                jc(i, t, n, e, r) &&
                (Math.abs(i[0][0] - i[1][0]) > ru ||
                  Math.abs(i[0][1] - i[1][1]) > ru)) ||
                delete eu[a]
          })(o, f, c, u),
            (function (t, n, e, r) {
              var i,
                a,
                o,
                f,
                c,
                u,
                s,
                h,
                l,
                d,
                p,
                _,
                b = tu.length,
                y = !0
              for (i = 0; i < b; ++i)
                if ((a = tu[i])) {
                  for (o = a.site, f = (c = a.halfedges).length; f--; )
                    eu[c[f]] || c.splice(f, 1)
                  for (f = 0, u = c.length; f < u; )
                    (p = (d = Ic(a, eu[c[f]]))[0]),
                      (_ = d[1]),
                      (h = (s = Fc(a, eu[c[++f % u]]))[0]),
                      (l = s[1]),
                      (Math.abs(p - h) > ru || Math.abs(_ - l) > ru) &&
                        (c.splice(
                          f,
                          0,
                          eu.push(
                            Lc(
                              o,
                              d,
                              Math.abs(p - t) < ru && r - _ > ru
                                ? [t, Math.abs(h - t) < ru ? l : r]
                                : Math.abs(_ - r) < ru && e - p > ru
                                ? [Math.abs(l - r) < ru ? h : e, r]
                                : Math.abs(p - e) < ru && _ - n > ru
                                ? [e, Math.abs(h - e) < ru ? l : n]
                                : Math.abs(_ - n) < ru && p - t > ru
                                ? [Math.abs(l - n) < ru ? h : t, n]
                                : null
                            )
                          ) - 1
                        ),
                        ++u)
                  u && (y = !1)
                }
              if (y) {
                var v,
                  g,
                  x,
                  m = 1 / 0
                for (i = 0, y = null; i < b; ++i)
                  (a = tu[i]) &&
                    (x = (v = (o = a.site)[0] - t) * v + (g = o[1] - n) * g) <
                      m &&
                    ((m = x), (y = a))
                if (y) {
                  var w = [t, n],
                    M = [t, r],
                    S = [e, r],
                    N = [e, n]
                  y.halfedges.push(
                    eu.push(Lc((o = y.site), w, M)) - 1,
                    eu.push(Lc(o, M, S)) - 1,
                    eu.push(Lc(o, S, N)) - 1,
                    eu.push(Lc(o, N, w)) - 1
                  )
                }
              }
              for (i = 0; i < b; ++i)
                (a = tu[i]) && (a.halfedges.length || delete tu[i])
            })(o, f, c, u)
        }
        ;(this.edges = eu), (this.cells = tu), (Kc = nu = eu = tu = null)
      }
      ou.prototype = {
        constructor: ou,
        polygons: function () {
          var t = this.edges
          return this.cells.map(function (n) {
            var e = n.halfedges.map(function (e) {
              return Fc(n, t[e])
            })
            return (e.data = n.site.data), e
          })
        },
        triangles: function () {
          var t = [],
            n = this.edges
          return (
            this.cells.forEach(function (e, r) {
              if ((a = (i = e.halfedges).length))
                for (
                  var i,
                    a,
                    o,
                    f,
                    c,
                    u,
                    s = e.site,
                    h = -1,
                    l = n[i[a - 1]],
                    d = l.left === s ? l.right : l.left;
                  ++h < a;

                )
                  (o = d),
                    (d = (l = n[i[h]]).left === s ? l.right : l.left),
                    o &&
                      d &&
                      r < o.index &&
                      r < d.index &&
                      ((c = o),
                      (u = d),
                      ((f = s)[0] - u[0]) * (c[1] - f[1]) -
                        (f[0] - c[0]) * (u[1] - f[1]) <
                        0) &&
                      t.push([s.data, o.data, d.data])
            }),
            t
          )
        },
        links: function () {
          return this.edges
            .filter(function (t) {
              return t.right
            })
            .map(function (t) {
              return { source: t.left.data, target: t.right.data }
            })
        },
        find: function (t, n, e) {
          for (
            var r, i, a = this, o = a._found || 0, f = a.cells.length;
            !(i = a.cells[o]);

          )
            if (++o >= f) return null
          var c = t - i.site[0],
            u = n - i.site[1],
            s = c * c + u * u
          do {
            ;(i = a.cells[(r = o)]),
              (o = null),
              i.halfedges.forEach(function (e) {
                var r = a.edges[e],
                  f = r.left
                if ((f !== i.site && f) || (f = r.right)) {
                  var c = t - f[0],
                    u = n - f[1],
                    h = c * c + u * u
                  h < s && ((s = h), (o = f.index))
                }
              })
          } while (null !== o)
          return (a._found = r), null == e || s <= e * e ? i.site : null
        },
      }
      function fu(t, n, e) {
        ;(this.k = t), (this.x = n), (this.y = e)
      }
      fu.prototype = {
        constructor: fu,
        scale: function (t) {
          return 1 === t ? this : new fu(this.k * t, this.x, this.y)
        },
        translate: function (t, n) {
          return (0 === t) & (0 === n)
            ? this
            : new fu(this.k, this.x + this.k * t, this.y + this.k * n)
        },
        apply: function (t) {
          return [t[0] * this.k + this.x, t[1] * this.k + this.y]
        },
        applyX: function (t) {
          return t * this.k + this.x
        },
        applyY: function (t) {
          return t * this.k + this.y
        },
        invert: function (t) {
          return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
        },
        invertX: function (t) {
          return (t - this.x) / this.k
        },
        invertY: function (t) {
          return (t - this.y) / this.k
        },
        rescaleX: function (t) {
          return t
            .copy()
            .domain(t.range().map(this.invertX, this).map(t.invert, t))
        },
        rescaleY: function (t) {
          return t
            .copy()
            .domain(t.range().map(this.invertY, this).map(t.invert, t))
        },
        toString: function () {
          return (
            "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
          )
        },
      }
      new fu(1, 0, 0)
      fu.prototype
      e.d(n, "a", function () {
        return kr
      }),
        e.d(n, "b", function () {
          return oa
        }),
        e.d(n, "c", function () {
          return ka
        }),
        e.d(n, "d", function () {
          return wt
        }),
        e.d(n, "e", function () {
          return We
        })
    },
  ],
])
