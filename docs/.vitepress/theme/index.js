import DefaultTheme from 'vitepress/theme'

import Footer from '../components/Footer.vue'
import RelatedPosts from '../components/RelatedPosts.vue'
import SocialButtons from '../components/SocialButtons.vue'

import './custom.css'

export default {
  ...DefaultTheme,

  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('Footer', Footer)
    ctx.app.component('RelatedPosts', RelatedPosts)
    ctx.app.component('SocialButtons', SocialButtons)
  }
}
