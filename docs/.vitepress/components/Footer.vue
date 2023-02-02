<template>
  <div class="footer f-left w-100 pb-5 mt-7" v-if="base">
    <div class="copyright-section w-85 f-left">
      <a :href="base('/')" class="mb-3">
        <span>{{ title }}</span>
        <img :src="base(logo)">
      </a>

      <div class="f-left w-100">
        <p class="copyright">{{ copyrightMessages.m1 }}</p>
        <p class="copyright mb-1">{{ copyrightMessages.m2 }}</p>
        <p class="copyright">{{ copyrightMessages.m3 }}</p>
      </div>
    </div>

    <nav class="footer-nav w-15 f-left">
      <a
        v-for="nav in navItems" :key="nav.text"
        :href="base(nav.link)"
        :target="nav.link.includes('https://') ? '_blank' : ''"
        :rel="nav.link.includes('https://') ? 'noreferrer' : ''"
        class="footer-link"
      >
        {{ nav.text }}
      </a>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue'
import { withBase } from 'vitepress'

export default {
  data () {
    return {
      base: null,
      logo: '',
      title: '',
      navItems: [],
      copyrightMessages: []
    }
  },

  mounted () {
    this.base = withBase

    import('../config').then(config => {
      this.logo = ref(config.default.themeConfig.logo)
      this.title = config.default.title

      this.navItems = config.default.footerConfig.nav
      this.copyrightMessages = config.default.footerConfig.copyrightMessages
    })
  }
}
</script>
