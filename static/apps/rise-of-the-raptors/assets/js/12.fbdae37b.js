;(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    262: function (t, e, n) {
      "use strict"
      var s = n(86)
      n.n(s).a
    },
    267: function (t, e, n) {
      "use strict"
      n.r(e)
      n(60)
      var s = n(261),
        a = {
          name: "MainText",
          props: { slide: Number },
          components: { PerfectScrollbar: s.PerfectScrollbar },
          computed: {
            mainClass: function () {
              return "main-text main-text--".concat(this.slide)
            },
          },
        },
        i = (n(262), n(263), n(6)),
        r = Object(i.a)(
          a,
          function () {
            var t = this.$createElement,
              e = this._self._c || t
            return e(
              "div",
              { class: this.mainClass, attrs: { "data-slide": this.slide } },
              [e("perfect-scrollbar", [this._t("default")], 2)],
              1
            )
          },
          [],
          !1,
          null,
          "f5340a7e",
          null
        )
      e.default = r.exports
    },
    86: function (t, e, n) {},
  },
])
