;(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    268: function (e, t, r) {
      "use strict"
      r.r(t)
      var a = r(6),
        s = Object(a.a)(
          {},
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t
            return r(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": e.$parent.slotKey } },
              [
                r("h1", { attrs: { id: "vuepress-quick-start" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#vuepress-quick-start",
                        "aria-hidden": "true",
                      },
                    },
                    [e._v("#")]
                  ),
                  e._v(" Vuepress quick start"),
                ]),
                e._v(" "),
                r("h2", { attrs: { id: "overview" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#overview", "aria-hidden": "true" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" Overview"),
                ]),
                e._v(" "),
                r("p", [
                  e._v(
                    "Designed for getting a blog-style project off the ground quickly, this project starts with\na basic blog-style page, with content sorted in different categories."
                  ),
                ]),
                e._v(" "),
                r("p", [
                  e._v("For more info, check out the "),
                  r(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/rjsalvadorr/vuepress-starter",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [e._v("GitHub repo"), r("OutboundLink")],
                    1
                  ),
                ]),
                e._v(" "),
                r("h2", { attrs: { id: "usage" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#usage", "aria-hidden": "true" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" Usage"),
                ]),
                e._v(" "),
                r("h4", { attrs: { id: "_1-install" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#_1-install", "aria-hidden": "true" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" 1. Install"),
                ]),
                e._v(" "),
                r("p", [
                  r("code", [e._v("npm i -g vuepress")]),
                  r("br"),
                  e._v("\nor"),
                  r("br"),
                  e._v(" "),
                  r("code", [e._v("yarn global add vuepress")]),
                ]),
                e._v(" "),
                r("h4", { attrs: { id: "_2-dev" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#_2-dev", "aria-hidden": "true" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" 2. Dev"),
                ]),
                e._v(" "),
                r("p", [
                  r("code", [e._v("npm start")]),
                  r("br"),
                  e._v("\nor"),
                  r("br"),
                  e._v(" "),
                  r("code", [e._v("yarn start")]),
                ]),
                e._v(" "),
                r("h4", { attrs: { id: "_3-deploy" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#_3-deploy", "aria-hidden": "true" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" 3. Deploy"),
                ]),
                e._v(" "),
                r("p", [
                  r("code", [e._v("npm run build")]),
                  r("br"),
                  e._v("\nor"),
                  r("br"),
                  e._v(" "),
                  r("code", [e._v("yarn build")]),
                ]),
                e._v(" "),
                r("p", [
                  e._v(
                    "Read more about Vuepress here: https://vuepress.vuejs.org/guide/"
                  ),
                ]),
                e._v(" "),
                r("h2", { attrs: { id: "post-thumbnails" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#post-thumbnails",
                        "aria-hidden": "true",
                      },
                    },
                    [e._v("#")]
                  ),
                  e._v(" Post Thumbnails"),
                ]),
                e._v(" "),
                r("p", [
                  e._v("In order to work, these have to go in "),
                  r("code", [e._v(".vuepress/public/images")]),
                  e._v(".There's a\nnaming convention in place: "),
                  r("code", [e._v("thumb-<page-name>.jpg")]),
                  e._v(". So a page with content\nin "),
                  r("code", [e._v("/category1/sample-title/README.md")]),
                  e._v(" would have a corresponding image in\n"),
                  r("code", [
                    e._v("/.vuepress/public/images/thumb-sample-title.jpg"),
                  ]),
                ]),
                e._v(" "),
                r("h2", { attrs: { id: "page-excerpts" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#page-excerpts", "aria-hidden": "true" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" Page excerpts"),
                ]),
                e._v(" "),
                r("p", [
                  e._v("See the "),
                  r(
                    "a",
                    {
                      attrs: {
                        href: "https://vuepress.vuejs.org/guide/custom-themes.html#content-excerpt",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [e._v("VuePress docs"), r("OutboundLink")],
                    1
                  ),
                  e._v(" for more info."),
                ]),
                e._v(" "),
                r("h2", { attrs: { id: "fonts" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#fonts", "aria-hidden": "true" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" Fonts"),
                ]),
                e._v(" "),
                r("p", [
                  e._v("The site uses "),
                  r(
                    "a",
                    {
                      attrs: {
                        href: "https://fonts.google.com/about",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [e._v("Google Fonts"), r("OutboundLink")],
                    1
                  ),
                  e._v(
                    " to load fonts. See the stylesheet reference in the theme config ("
                  ),
                  r("code", [e._v(".vuepress/config.js")]),
                  e._v(")"),
                ]),
                e._v(" "),
                r("h2", { attrs: { id: "front-matter-data" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#front-matter-data",
                        "aria-hidden": "true",
                      },
                    },
                    [e._v("#")]
                  ),
                  e._v(" Front-matter data"),
                ]),
                e._v(" "),
                r("p", [
                  e._v(
                    "Added on top of every markdown document in the site. Looks like this:"
                  ),
                ]),
                e._v(" "),
                r("div", { staticClass: "language- extra-class" }, [
                  r("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    r("code", [
                      e._v(
                        "---\ntitle: Writing words is neat\nsubtitle:\ndate: 2019-03-24 13:35:57\ntemplate: post\ncategory: deep-thoughts\n---\n\n# Words words words\n\nBacon ipsum dolor amet in est pork belly ex excepteur.\nIpsum cow leberkas adipisicing, in picanha strip steak\nburgdoggen commodo ullamco et sausage brisket nulla cupim.\n"
                      ),
                    ]),
                  ]),
                ]),
                r("p", [
                  e._v(
                    "This site has been configured to use these settings to build the page flow\nfor various categories and pages."
                  ),
                ]),
                e._v(" "),
                r("h4", { attrs: { id: "title" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#title", "aria-hidden": "true" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" title"),
                ]),
                e._v(" "),
                r("p", [e._v("Title of the post/category")]),
                e._v(" "),
                r("h4", { attrs: { id: "subtitle" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#subtitle", "aria-hidden": "true" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" subtitle"),
                ]),
                e._v(" "),
                r("p", [
                  e._v(
                    "Subtitle of post. Appears in the post list of its category page."
                  ),
                ]),
                e._v(" "),
                r("h4", { attrs: { id: "date" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#date", "aria-hidden": "true" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" date"),
                ]),
                e._v(" "),
                r("p", [
                  e._v(
                    "Date for post/category. Appears in the post list of its category page.\nAlso used for sorting."
                  ),
                  r("br"),
                  e._v("\nExpected values: date/time, formatted like "),
                  r("code", [e._v("2019-03-26 13:35:57")]),
                  e._v(" or simply "),
                  r("code", [e._v("2019-04-23")]),
                  e._v(" (YYYY-MM-DD)"),
                ]),
                e._v(" "),
                r("h4", { attrs: { id: "type" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#type", "aria-hidden": "true" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" type"),
                ]),
                e._v(" "),
                r("p", [
                  e._v("Type of the object."),
                  r("br"),
                  e._v("\nExpected values: "),
                  r("code", [e._v("post | category | link")]),
                ]),
                e._v(" "),
                r("h4", { attrs: { id: "category" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#category", "aria-hidden": "true" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" category"),
                ]),
                e._v(" "),
                r("p", [
                  e._v(
                    "Category of this object. This can be customized for the categories in the page.\nFor example, a portfolio page could have categories like:"
                  ),
                  r("br"),
                  e._v(" "),
                  r("code", [e._v("software | art | contact")]),
                  e._v("."),
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
      t.default = s.exports
    },
    6: function (e, t, r) {
      "use strict"
      function a(e, t, r, a, s, o, n, i) {
        var d,
          v = "function" == typeof e ? e.options : e
        if (
          (t && ((v.render = t), (v.staticRenderFns = r), (v._compiled = !0)),
          a && (v.functional = !0),
          o && (v._scopeId = "data-v-" + o),
          n
            ? ((d = function (e) {
                ;(e =
                  e ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  s && s.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(n)
              }),
              (v._ssrRegister = d))
            : s &&
              (d = i
                ? function () {
                    s.call(this, this.$root.$options.shadowRoot)
                  }
                : s),
          d)
        )
          if (v.functional) {
            v._injectStyles = d
            var _ = v.render
            v.render = function (e, t) {
              return d.call(t), _(e, t)
            }
          } else {
            var c = v.beforeCreate
            v.beforeCreate = c ? [].concat(c, d) : [d]
          }
        return { exports: e, options: v }
      }
      r.d(t, "a", function () {
        return a
      })
    },
  },
])
