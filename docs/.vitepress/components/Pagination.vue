<template>
  <div v-if="totalPages > 1 && base" class="pagination-container">
    <div class="pagination">
      <button
        @click="$emit('updatePage', page - 1)"
        :disabled="page === 1"
        :class="{ 'disabled': page === 1 }"
        class="pagination-nav-btn"
        style="margin-right: 12px"
      >
        <img :src="base(images.arrowLeft)" style="width: 17px">
      </button>
      
      <button
        v-for="p in pagesArr" :key="p"
        @click="$emit('updatePage', p)"
        :disabled="page === p"
        :class="{ 'disabled': page === p }"
        class="pagination-nav-btn-page"
      >{{ p }}</button>

      <button
        @click="$emit('updatePage', page + 1)"
        :disabled="page === totalPages"
        :class="{ 'disabled': page === totalPages }"
        class="pagination-nav-btn"
        style="margin-left: 12px"
      >
        <img :src="base(images.arrowRight)" style="width: 17px">
      </button>
    </div>
  </div>
</template>

<script>
import { withBase } from 'vitepress'

export default {
  props: {
    page: {
      type: Number,
      default: 1
    },

    perPage: {
      type: Number,
      default: 1
    },

    totalItems: {
      type: Number,
      default: 1
    },

    images: {
      type: Object
    }
  },

  data () {
    return {
      base: null,
      pagesToShow: 6
    }
  },

  mounted () {
    this.base = withBase
  },

  computed: {
    totalPages () {
      return Math.ceil(this.totalItems / this.perPage)
    },

    pagesArr () {
      const pages = []
      const start = this.totalPages - this.pagesToShow >= this.page ? this.page : this.totalPages - this.pagesToShow < 1 ? 1 : this.totalPages - this.pagesToShow
      const end = start + this.pagesToShow > this.totalPages ? this.totalPages : start + this.pagesToShow

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      return pages
    }
  }
}
</script>
