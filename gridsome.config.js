// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: "http://106.75.47.105:1336",
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['posts'],
        //  singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  //路由模板
  templates: {
    StrapiPosts: [
      {
        path: "/project/:id",
        component: "./src/templates/project.vue"
      }
    ]
  }
}
