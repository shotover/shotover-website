<template>
  <div class="related-posts f-left w-100" v-if="base">
    <h2 style="margin-bottom: 40px">{{ config.title }}</h2>

    <div
      v-for="post in relatedPosts" :key="post.path"
      class="px-2 f-left mb-4 related-post-container" :style="`width: calc(100% / ${relatedPosts.length})`"
    >
      <div class="related-post f-left w-100">
        <h3 style="color: var(--vp-c-text-1) !important">{{ post.title }}</h3>

        <span class="read-more-container">
          <a :href="base(post.path)" class="read-more">Read more</a>
        </span>
      </div>
    </div>

    <a class="all-blogs" :href="base(config.allBlogsLink)">View all blogs</a>
  </div>
</template>

<script>
import { withBase } from 'vitepress'

export default {
  data () {
    return {
      base: null,
      config: {},
      currentPost: {},
      relatedPosts: []
    }
  },

  mounted () {
    this.base = withBase

    import('../config').then(config => {
      this.config = config.default.themeConfig.relatedPosts

      this.currentPost = config.default.themeConfig.blog.posts.find(p => window.location.pathname.includes(`${p.path.split('.md')[0]}.html`))

      for (const post of config.default.themeConfig.blog.posts) {
        if (this.relatedPosts.length === this.config.postsCount) break

        if (!this.currentPost.categories.length && !post.categories.length && this.currentPost.path !== post.path) {
          this.relatedPosts.push(post)
          continue
        }

        if (this.currentPost.categories.some(c => post.categories.includes(c)) && this.currentPost.path !== post.path) {
          this.relatedPosts.push(post)
          continue
        }
      }
    })
  }
}
</script>
