<template>
  <div class="social-buttons" v-if="base">
    <h2 class="f-left w-100" style="color: var(--vp-c-text-1) !important">
      {{ config.title }}
    </h2>

    <a v-for="(link, id) in config.links" :key="id" :href="link.url" target="_blank" class="social-link">
      <img :src="base(link.img)" style="width: 100%">
    </a>

    <a class="social-link" @click="copy()">
      <img :src="base(config.copyImg)" style="width: 100%">
    </a>
  </div>
</template>

<script>
import { withBase } from 'vitepress'

export default {
  data () {
    return {
      config: {},
      base: null
    }
  },

  mounted () {
    this.base = withBase

    document.getElementsByClassName('VPContent')[0].classList.remove("has-sidebar")
    document.getElementsByClassName('VPNavBarTitle')[0].classList.remove("has-sidebar")
    document.getElementsByClassName('VPNavBar')[0].classList.remove("has-sidebar")
    document.getElementsByClassName('VPNav')[0].classList.add("no-sidebar")

    document.getElementsByClassName('VPSidebar')[0].style.display = 'none'
    document.getElementsByClassName('VPDocAsideOutline')[0].style.display = 'none'
    document.getElementsByClassName('content-container')[0].style.maxWidth = '1000px'

    import('../config').then(config => {
      this.config = config.default.themeConfig.social
    })
  },

  beforeUnmount () {
    document.getElementsByClassName('VPContent')[0].classList.add("has-sidebar")
    document.getElementsByClassName('VPNavBarTitle')[0].classList.add("has-sidebar")
    document.getElementsByClassName('VPNavBar')[0].classList.add("has-sidebar")
    document.getElementsByClassName('VPNav')[0].classList.remove("no-sidebar")

    const sidebar = document.getElementsByClassName('VPSidebar')[0]
    if (sidebar) sidebar.style.display = 'block'

    const aside = document.getElementsByClassName('VPDocAsideOutline')[0]
    if (aside) aside.style.display = 'block'

    const content = document.getElementsByClassName('content-container')[0]
    if (content) content.style.maxWidth = ''
  },

  methods: {
    copy () {
      navigator.clipboard.writeText(window.location.href)
    }
  }
}
</script>
