1、两个分支
PS H:\vue3-project-chaeng\vue3-ts-cms> git branch -D master
Deleted branch master (was fd4af07).
PS H:\vue3-project-chaeng\vue3-ts-cms> git push origin --delete master
To github.com:1MELT6/Vue3-TS-CMS.git

- [deleted] master
2、editorconfig保证格式
2、prettier和eslint格式统一
3、husky保证提交前格式化代码
4、提交信息规范：commitizen
5、提交限制/代码提交验证 commitlint


  1、想要修改vuecli的webpack配置、可以通过vue.config.js
  2、封装axios，因为每次用axios.get/post 多次用就会导致和axios很耦合，到时候如果axios换成别的就会很麻烦
  所以单独封装成一个axios、request 到时候直接修改封装后的就可以
  
  3、拦截器是因为有token、loading