;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    257: function (e, t, a) {
      e.exports = a.p + "assets/img/95-96.97e7e570.png"
    },
    258: function (e, t, a) {
      e.exports = a.p + "assets/img/16-17.a4efcda9.png"
    },
    259: function (e, t, a) {
      e.exports = a.p + "assets/img/09-10.68f598c0.png"
    },
    260: function (e, t, a) {
      e.exports = a.p + "assets/img/18-19.39dd8369.png"
    },
    269: function (e, t, a) {
      "use strict"
      a.r(t)
      var s = a(6),
        n = Object(s.a)(
          {},
          function () {
            var e = this,
              t = e.$createElement,
              s = e._self._c || t
            return s(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": e.$parent.slotKey } },
              [
                s("h1", { attrs: { id: "methodology" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#methodology", "aria-hidden": "true" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" Methodology"),
                ]),
                e._v(" "),
                s("p", [
                  e._v(
                    "The season summary graphic is designed to show every NBA team's "
                  ),
                  s("em", [e._v("strength")]),
                  e._v(
                    " compared to all others\nfor a given season. Each team is represented by a circle, with the champion team being the largest one."
                  ),
                ]),
                e._v(" "),
                s("p", [
                  s("em", [e._v("Strength")]),
                  e._v(" in this case, is roughly defined as:"),
                ]),
                e._v(" "),
                s("blockquote", [
                  s("p", [
                    s("em", [
                      e._v(
                        "regular season win rate + playoff wins, compared to the season's champions"
                      ),
                    ]),
                  ]),
                ]),
                e._v(" "),
                s("p", [e._v("For the exact calculation in the code:")]),
                e._v(" "),
                s("div", { staticClass: "language- extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    s("code", [
                      e._v(
                        "// pWins is a ratio of playoff wins to max. possible playoff wins\n// wRate is the regular season win-rate (as a value between 0 and 1)\n// overallRtg is expected to be a float between 0 and 1, and is used like a percent value\n\nlet overallRtg = (wRate + wRate + pWins) / 3;\n\n// the championship team receives a 20% overallRtg boost, to\n// highlight them on the graphic\n\nif(rec.champion) {\n  overallRtg += 0.2;\n}\n"
                      ),
                    ]),
                  ]),
                ]),
                s("p", [
                  e._v(
                    "This kind of comparison easily shows the competitive balance between teams in a given season. At a glance, we can see how the 1995-1996 Chicago Bulls and the 2016-2017 Golden State Warriors simply dominated the league's landscape."
                  ),
                ]),
                e._v(" "),
                s("h2", { attrs: { id: "_1995-1996-nba-season" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#_1995-1996-nba-season",
                        "aria-hidden": "true",
                      },
                    },
                    [e._v("#")]
                  ),
                  e._v(" 1995-1996 NBA season"),
                ]),
                e._v(" "),
                s("p", [
                  s("img", {
                    attrs: {
                      src: a(257),
                      alt: "1995-1996 NBA season",
                      title: "1995-1996 NBA season",
                    },
                  }),
                ]),
                e._v(" "),
                s("h2", { attrs: { id: "_2016-2017-nba-season" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#_2016-2017-nba-season",
                        "aria-hidden": "true",
                      },
                    },
                    [e._v("#")]
                  ),
                  e._v(" 2016-2017 NBA season"),
                ]),
                e._v(" "),
                s("p", [
                  s("img", {
                    attrs: {
                      src: a(258),
                      alt: "2016-2017 NBA season",
                      title: "2016-2017 NBA season",
                    },
                  }),
                ]),
                e._v(" "),
                s("p", [
                  e._v(
                    "This can be contrasted with the 2009-2010 or 2018-2019 seasons, where the Lakers and Raptors (respectively) won their championship without that level of dominance, or were just competing in a relatively balanced league."
                  ),
                ]),
                e._v(" "),
                s("h2", { attrs: { id: "_2009-2010-nba-season" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#_2009-2010-nba-season",
                        "aria-hidden": "true",
                      },
                    },
                    [e._v("#")]
                  ),
                  e._v(" 2009-2010 NBA season"),
                ]),
                e._v(" "),
                s("p", [
                  s("img", {
                    attrs: {
                      src: a(259),
                      alt: "2009-2010 NBA season",
                      title: "2009-2010 NBA season",
                    },
                  }),
                ]),
                e._v(" "),
                s("h2", { attrs: { id: "_2018-2019-nba-season" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#_2018-2019-nba-season",
                        "aria-hidden": "true",
                      },
                    },
                    [e._v("#")]
                  ),
                  e._v(" 2018-2019 NBA season"),
                ]),
                e._v(" "),
                s("p", [
                  s("img", {
                    attrs: {
                      src: a(260),
                      alt: "2018-2019 NBA season",
                      title: "2018-2019 NBA season",
                    },
                  }),
                ]),
              ]
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      t.default = n.exports
    },
    6: function (e, t, a) {
      "use strict"
      function s(e, t, a, s, n, o, r, i) {
        var l,
          c = "function" == typeof e ? e.options : e
        if (
          (t && ((c.render = t), (c.staticRenderFns = a), (c._compiled = !0)),
          s && (c.functional = !0),
          o && (c._scopeId = "data-v-" + o),
          r
            ? ((l = function (e) {
                ;(e =
                  e ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  n && n.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(r)
              }),
              (c._ssrRegister = l))
            : n &&
              (l = i
                ? function () {
                    n.call(this, this.$root.$options.shadowRoot)
                  }
                : n),
          l)
        )
          if (c.functional) {
            c._injectStyles = l
            var h = c.render
            c.render = function (e, t) {
              return l.call(t), h(e, t)
            }
          } else {
            var d = c.beforeCreate
            c.beforeCreate = d ? [].concat(d, l) : [l]
          }
        return { exports: e, options: c }
      }
      a.d(t, "a", function () {
        return s
      })
    },
  },
])
