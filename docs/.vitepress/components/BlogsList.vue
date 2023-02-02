<template>
  <div class="blog w-100 pt-3 f-left">
    <div class="w-100 f-left">
      <h1 class="blog-title mb-8">{{ config.title }}</h1>

      <div v-for="post in postsToShow" :key="post.path" class="w-100 f-left mb-6">
        <div class="post-img-sm f-left" :style="`background-image: url('${post.pathToImage}')`"></div>

        <div class="post-info f-left pl-6">
          <h2 class="post-title" style="color: var(--vp-c-text-1) !important">{{ post.title }}</h2>

          <p class="post-description">{{ post.description }}</p>

          <p class="post-date">{{ processData(post.dateAdded) }}</p>

          <a class="post-btn" :href="base(`${post.path.split('.md')[0]}`)">
            Read more
          </a>
        </div>
      </div>

      <Pagination
        :page="currentPage"
        :perPage="postsCountOnPage"
        :totalItems="filteredPosts.length"
        :images="config.images"
        @updatePage="updatePage($event)"
        v-if="filteredPosts.length"
      />
    </div>
  </div>

  <div class="blog-filters">
    <h3 class="f-left w-100">Categories</h3>
    <p
      @click="applyCategory(c)"
      v-for="c in config.categories" :key="c"
      :class="{'active': selectedCategory === c}"
      class="post-category f-left w-100"
    >{{ c }}</p>

    <h3 class="f-left w-100">Archive</h3>
    <input
      :value="selectedDate || new Date().toISOString().slice(0, 7)"
      @input="applyDate($event.target.value)"
      type="month"
      class="archive-input"
    />
  </div>
</template>

<script>
import { withBase } from 'vitepress'
import Pagination from './Pagination.vue'

export default {
  components: { Pagination },

  data () {
    return {
      config: {},
      base: null,

      postsToShow: [],
      filteredPosts: [],

      currentPage: 1,
      postsCountOnPage: 10,

      selectedDate: '',
      selectedCategory: ''
    }
  },

  mounted () {
    document.getElementById('VPSidebarNav').style.display = 'none'
    this.base = withBase

    this.processSearchString()

    import('../config').then(config => {
      this.config = config.default.themeConfig.blog

      this.filterPosts()
    })
  },

  beforeUnmount () {
    const sidebar = document.getElementById('VPSidebarNav')
    if (sidebar) sidebar.style.display = 'block'
  },

  methods: {
    async filterPosts () {
      this.filteredPosts = this.config.posts.filter(post => {
        return (
          (
            this.selectedCategory === '' && this.selectedDate === ''
          ) ||
          (
            this.selectedCategory !== '' &&
            this.selectedDate === '' &&
            (post.categories.includes(this.selectedCategory) || (this.selectedCategory === 'uncategorized' && post.categories.length === 0))
          ) ||
          (
            this.selectedCategory === '' &&
            this.selectedDate !== '' &&
            post.dateAdded.includes(this.selectedDate)
          ) ||
          (
            this.selectedCategory !== '' &&
            this.selectedDate !== '' &&
            post.dateAdded.includes(this.selectedDate) &&
            (post.categories.includes(this.selectedCategory) || (this.selectedCategory === 'uncategorized' && post.categories.length === 0))
          )
        )
      })

      this.setPostsToShow()
    },

    setPostsToShow () {
      const postsToShow = []

      for (let i = (this.currentPage - 1) * this.postsCountOnPage; postsToShow.length !== this.postsCountOnPage && i < this.filteredPosts.length; i++) {
        postsToShow.push(this.filteredPosts[i])
      }

      this.postsToShow = postsToShow
    },

    applyCategory (category) {
      this.selectedCategory === category ? this.selectedCategory = '' : this.selectedCategory = category
      this.currentPage = 1
      this.setSearchString()

      this.filterPosts()
    },

    applyDate (date) {
      this.selectedDate === date ? this.selectedDate = '' : this.selectedDate = date
      this.currentPage = 1
      this.setSearchString()

      this.filterPosts()
    },

    updatePage(page) {
      if (this.currentPage === page) return
      this.currentPage = page
      this.setSearchString()

      this.setPostsToShow()
    },

    setSearchString () {
      let search = `?p=${this.currentPage}`
      if (this.selectedDate) search += `&d=${this.selectedDate}`
      if (this.selectedCategory) search += `&c=${this.selectedCategory}`

      history.pushState(null, '', window.location.href.split('?')[0] + search)
    },

    processSearchString () {
      if (window.location.search) {
        window.location.search.split('&').forEach(filter => {
          if (filter.includes('?p=')) this.currentPage = +filter.split('=')[1]
          if (filter.includes('d=')) this.selectedDate = filter.split('=')[1]
          if (filter.includes('c=')) this.selectedCategory = filter.split('=')[1]
        })
      }
    },

    processData (data) {
      const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.']
      const dataParts = data.split('-')

      return `${months[+dataParts[1]]} ${dataParts[2]}, ${dataParts[0]}`
    }
  }
}
</script>
