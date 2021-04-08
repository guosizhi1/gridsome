<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">Simplicity. Aesthetics. Value.</h1>
        <h2 class="hero-subtitle">
          Hi there, I'm an independent Digital Designer &amp; Art Director
          focused on digital design for brands that like to have fun.
        </h2>
      </div>
      <div class="projects">
        <div class="project" v-for="item in $page.posts.edges" :key="item.node.id">
          <g-link :to="'/project/'+item.node.id" class="project-link"
            ><img
              alt="Banana"
              width="2560"
              :src="GRIDSOME_API+item.node.image.url"
             class="thumbnail g-image g-image--lazy g-image--loaded"
            />
            <h3 class="project-title">{{item.node.title}}</h3>
            <div class="categories">
              <span class="category">{{item.node.subtitle}}</span>
            </div>
          </g-link >
        </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query{
 posts:allStrapiPosts{
	edges{
    node{
      id,
      title,
      color,
     	subtitle,
     	image{
        url
      }
    }
  }
}
}
</page-query>
<script>
export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  created(){
    console.log(this.$page.posts.edges)
  },
  
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
