;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    14: function (e, t, n) {},
    254: function (e, t, n) {
      "use strict"
      var a = n(83)
      n.n(a).a
    },
    255: function (e, t, n) {
      "use strict"
      var a = n(84)
      n.n(a).a
    },
    265: function (e, t, n) {
      "use strict"
      n.r(t)
      n(127), n(128)
      var a = n(62),
        r = n(124),
        s = {
          name: "Layout",
          data: function () {
            return { debugPanelEnabled: !1 }
          },
          methods: {
            getContentClasses: function (e) {
              var t = "content-wrapper content-wrapper--".concat(
                e.frontmatter.category
              )
              return (
                "post" === e.frontmatter.type
                  ? (t += " content-wrapper--post")
                  : "category" === e.frontmatter.type &&
                    (t += " content-wrapper--category"),
                t
              )
            },
            toggleDebugPanel: function () {
              this.debugPanelEnabled = !this.debugPanelEnabled
            },
          },
          components: {
            DebugPanel: a.default,
            Graphic: r.default,
            MainText: r.default,
          },
        },
        o = (n(254), n(255), n(6)),
        i = Object(o.a)(
          s,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n(
              "div",
              {
                class:
                  "theme-container theme-container--" +
                  e.$page.frontmatter.category,
                on: {
                  keyup: function (t) {
                    return !t.type.indexOf("key") &&
                      e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"])
                      ? null
                      : e.toggleDebugPanel()
                  },
                },
              },
              [
                n("div", { staticClass: "theme-content" }, [
                  n(
                    "div",
                    { class: e.getContentClasses(e.$page) },
                    [
                      e._t("default"),
                      e._v(" "),
                      n(
                        "div",
                        { staticClass: "text-wrapper" },
                        [n("Content")],
                        1
                      ),
                    ],
                    2
                  ),
                ]),
                e._v(" "),
                n("DebugPanel", {
                  attrs: {
                    enabled: e.debugPanelEnabled,
                    siteData: e.$site,
                    pageData: e.$page,
                  },
                }),
              ],
              1
            )
          },
          [],
          !1,
          null,
          "4b228620",
          null
        )
      t.default = i.exports
    },
    41: function (e, t, n) {
      "use strict"
      var a = n(14)
      n.n(a).a
    },
    62: function (e, t, n) {
      "use strict"
      n.r(t)
      var a = {
          name: "DebugPanel",
          props: { enabled: Boolean, siteData: Object, pageData: Object },
        },
        r = (n(41), n(6)),
        s = Object(r.a)(
          a,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return e.enabled
              ? n("div", { staticClass: "debug-data" }, [
                  n("h1", [e._v("debug-data")]),
                  e._v(" "),
                  e._m(0),
                  e._v(" "),
                  n("hr"),
                  e._v(" "),
                  n("h2", [e._v("$site")]),
                  e._v(" "),
                  n("code", [e._v(e._s(e.siteData))]),
                  e._v(" "),
                  n("hr"),
                  e._v(" "),
                  n("h2", [e._v("$page")]),
                  e._v(" "),
                  n("code", [e._v(e._s(e.pageData))]),
                ])
              : e._e()
          },
          [
            function () {
              var e = this.$createElement,
                t = this._self._c || e
              return t("p", [
                this._v(
                  "\n      You're seeing a debugging tool for the site author.\n      If you need to leave this view, hit ESC again.\n      "
                ),
                t("br"),
                this._v(
                  "\n      Wanna be a nice person? Email the site author, and tell them to\n      disable the debugview on the live site.\n    "
                ),
              ])
            },
          ],
          !1,
          null,
          "5859e73b",
          null
        )
      t.default = s.exports
    },
    83: function (e, t, n) {},
    84: function (e, t, n) {},
  },
])
