<template>
  <Layout ref="layout">
    <div class="container">
      <div class="project-header">
        <h1 class="project-title-p">{{ $page.post.title }}</h1>
        <div class="project-info">
          <div class="categories-container">
            <div class="categories">
              <span class="label">{{ $page.post.subtitle }}</span
              ><span class="category">photography</span
              ><span class="category">blue</span>
            </div>
          </div>
          <div class="year-container">
            <span class="label">Year</span>
            <div>{{ $page.post.created_at | date('YYYY') }}</div>
          </div>
        </div>
      </div>
      <div class="content">
        <p>
          <img
            class="g-image g-image--lazy g-image--loaded"
            :src="GRIDSOME_API + $page.post.image.url"
          />
        </p>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query($id: ID!){
  post:strapiPosts(id:$id){
    title,
    subtitle,
    color,
    image{
      url
    },
    created_at
  }
}
</page-query>
<script>
export default {
  created() {
    // document
    // .querySelector('body')
    // .setAttribute('style', `color:${this.$page.post.color};`)
  },
  destroyed() {
    // document.querySelector('body').setAttribute('style', `color:"";`)
  },
}
</script>

<style></style>
