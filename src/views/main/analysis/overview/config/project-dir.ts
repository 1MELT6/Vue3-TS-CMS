export const projectDir = `
vue3-project-chaeng
└─ vue3-ts-cms
   ├─ .browserslistrc
   ├─ .editorconfig
   ├─ .env.development
   ├─ .env.production
   ├─ .env.test
   ├─ .eslintrc.js
   ├─ .husky
   │  ├─ .browserslistrc
   │  ├─ .editorconfig
   │  ├─ .eslintrc.js
   │  ├─ .prettierignore
   │  ├─ .prettierrc
   │  ├─ babel.config.js
   │  ├─ build
   │  │  ├─ css
   │  │  ├─ favicon.ico
   │  │  ├─ index.html
   │  │  └─ js
   │  ├─ commit-msg
   │  ├─ commitlint.config.js
   │  ├─ errorlog.md
   │  ├─ package-lock.json
   │  ├─ package.json
   │  ├─ pre-commit
   │  ├─ public
   │  │  ├─ favicon.ico
   │  │  └─ index.html
   │  ├─ README.md
   │  ├─ src
   │  │  ├─ App.vue
   │  │  ├─ assets
   │  │  │  └─ logo.png
   │  │  ├─ components
   │  │  ├─ global
   │  │  │  ├─ index.ts
   │  │  │  └─ register-element.ts
   │  │  ├─ global copy
   │  │  │  ├─ index.ts
   │  │  │  └─ register-element.ts
   │  │  ├─ main.ts
   │  │  ├─ router
   │  │  │  └─ index.ts
   │  │  ├─ shims-vue.d.ts
   │  │  ├─ store
   │  │  │  └─ index.ts
   │  │  └─ views
   │  │     ├─ login
   │  │     │  └─ login.vue
   │  │     └─ main
   │  │        └─ main.vue
   │  ├─ tsconfig.json
   │  ├─ vue.config.js
   │  ├─ yarn.lock
   ├─ .prettierignore
   ├─ .prettierrc
   ├─ babel.config.js
   ├─ commitlint.config.js
   ├─ errorlog.md
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  ├─ favicon.ico
   │  └─ index.html
   ├─ README.md
   ├─ src
   │  ├─ App.vue
   │  ├─ assets
   │  │  ├─ css
   │  │  │  ├─ base.less
   │  │  │  └─ index.less
   │  │  └─ img
   │  │     ├─ login-bg.svg
   │  │     └─ logo.svg
   │  ├─ base-ui
   │  │  ├─ breadcrumb
   │  │  │  ├─ index.ts
   │  │  │  ├─ src
   │  │  │  │  └─ breadcrumb.vue
   │  │  │  └─ types
   │  │  │     └─ index.ts
   │  │  ├─ card
   │  │  │  ├─ index.ts
   │  │  │  └─ src
   │  │  │     └─ card.vue
   │  │  ├─ code
   │  │  │  ├─ index.ts
   │  │  │  └─ src
   │  │  │     └─ code.vue
   │  │  ├─ echart
   │  │  │  ├─ index.ts
   │  │  │  └─ src
   │  │  │     └─ base-echart.vue
   │  │  ├─ form
   │  │  │  ├─ index.ts
   │  │  │  ├─ src
   │  │  │  │  └─ form.vue
   │  │  │  └─ types
   │  │  │     └─ index.ts
   │  │  ├─ table
   │  │  │  ├─ index.ts
   │  │  │  └─ src
   │  │  │     └─ table.vue
   │  │  └─ text-link
   │  │     ├─ index.ts
   │  │     └─ src
   │  │        └─ textlink.vue
   │  ├─ components
   │  │  ├─ nav-header
   │  │  │  ├─ index.ts
   │  │  │  └─ src
   │  │  │     └─ nav-header.vue
   │  │  ├─ nav-menu
   │  │  │  ├─ index.ts
   │  │  │  └─ src
   │  │  │     └─ nav-menu.vue
   │  │  ├─ page-content
   │  │  │  ├─ index.ts
   │  │  │  └─ src
   │  │  │     └─ page-content.vue
   │  │  ├─ page-echarts
   │  │  │  ├─ index.ts
   │  │  │  ├─ src
   │  │  │  │  ├─ line-echart.vue
   │  │  │  │  ├─ pie-echart.vue
   │  │  │  │  └─ rose-echart.vue
   │  │  │  └─ types
   │  │  │     └─ index.ts
   │  │  ├─ page-modal
   │  │  │  ├─ index.ts
   │  │  │  └─ src
   │  │  │     └─ page-modal.vue
   │  │  └─ page-search
   │  │     ├─ index.ts
   │  │     └─ src
   │  │        └─ page-search.vue
   │  ├─ global
   │  │  ├─ index.ts
   │  │  ├─ register-element.ts
   │  │  └─ register-properties.ts
   │  ├─ main.ts
   │  ├─ router
   │  │  └─ index.ts
   │  ├─ service
   │  │  ├─ axios.demo.ts
   │  │  ├─ index.ts
   │  │  ├─ login
   │  │  │  ├─ login.ts
   │  │  │  └─ type.ts
   │  │  ├─ main
   │  │  │  ├─ analysis
   │  │  │  │  └─ dashboard.ts
   │  │  │  └─ user
   │  │  │     └─ user.ts
   │  │  └─ request
   │  │     ├─ config.ts
   │  │     ├─ index.ts
   │  │     └─ type.ts
   │  ├─ shims-vue.d.ts
   │  ├─ store
   │  │  ├─ index.ts
   │  │  ├─ login
   │  │  │  ├─ login.ts
   │  │  │  └─ types.ts
   │  │  ├─ main
   │  │  │  ├─ analysis
   │  │  │  │  ├─ dashboard.ts
   │  │  │  │  └─ type.ts
   │  │  │  └─ user
   │  │  │     ├─ type.ts
   │  │  │     └─ user.ts
   │  │  └─ types.ts
   │  ├─ utils
   │  │  ├─ cache.ts
   │  │  ├─ data-format.ts
   │  │  └─ map-menus.ts
   │  └─ views
   │     ├─ login
   │     │  ├─ config
   │     │  │  └─ account-config.ts
   │     │  ├─ cpns
   │     │  │  ├─ login-accout.vue
   │     │  │  ├─ login-panel.vue
   │     │  │  └─ login-phone.vue
   │     │  └─ login.vue
   │     ├─ main
   │     │  ├─ analysis
   │     │  │  ├─ dashboard
   │     │  │  │  └─ dashboard.vue
   │     │  │  └─ overview
   │     │  │     ├─ config
   │     │  │     │  ├─ index.ts
   │     │  │     │  ├─ project-dir.ts
   │     │  │     │  └─ technology-stacks.ts
   │     │  │     └─ overview.vue
   │     │  ├─ center
   │     │  │  ├─ label
   │     │  │  │  ├─ config
   │     │  │  │  │  ├─ content.config.ts
   │     │  │  │  │  ├─ modal.config.ts
   │     │  │  │  │  └─ search.config.ts
   │     │  │  │  └─ label.vue
   │     │  │  ├─ nutrition
   │     │  │  │  ├─ config
   │     │  │  │  │  ├─ content.config.ts
   │     │  │  │  │  ├─ modal.config.ts
   │     │  │  │  │  └─ search.config.ts
   │     │  │  │  └─ nutrition.vue
   │     │  │  ├─ recipe
   │     │  │  │  ├─ config
   │     │  │  │  │  ├─ content.config.ts
   │     │  │  │  │  ├─ modal.config.ts
   │     │  │  │  │  └─ search.config.ts
   │     │  │  │  └─ recipe.vue
   │     │  │  └─ time
   │     │  │     ├─ config
   │     │  │     │  ├─ content.config.ts
   │     │  │     │  ├─ modal.config.ts
   │     │  │     │  └─ search.config.ts
   │     │  │     └─ time.vue
   │     │  ├─ comment
   │     │  │  ├─ comment.vue
   │     │  │  └─ config
   │     │  │     ├─ content.config.ts
   │     │  │     ├─ modal.config.ts
   │     │  │     └─ search.config.ts
   │     │  ├─ main.vue
   │     │  └─ user
   │     │     ├─ config
   │     │     │  ├─ content.config.ts
   │     │     │  ├─ modal.config.ts
   │     │     │  └─ search.config.ts
   │     │     └─ user.vue
   │     └─ not-found
   │        └─ not-found.vue
   ├─ tsconfig.json
   ├─ vue.config.js
   └─ yarn.lock

`
