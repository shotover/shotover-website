<template>
  <div class="landing w-100 f-left" v-if="config.title && base" @wheel="onScroll($event)">
    <div class="w-100 f-left mb-18 landing-main-title">
      <div class="w-55 f-left mt-5 pl-130">
        <h1 class="shotover-title w-100 f-left">{{ config.title }}</h1>
        <h2 class="shotover-subtitle w-100 f-left">
          <span style="color: #91AAE5">{{ config.subtitle1 }}</span> <span style="color: #AADEF6">{{ config.subtitle2 }}</span>
        </h2>

        <h3 class="shotover-motto w-100 f-left">{{ config.motto }}</h3>
        
        <a class="landing-action-btn" :href="base(config.actionBtnLink)">
          <span class="landing-action-btn-text">{{ config.actionBtnText }}</span>
        </a>
      </div>

      <div class="w-45 f-left landing-title-img">
        <img class="w-80 ml-20" :src="base(config.titleImg)">
      </div>
    </div>

    <div class="w-100 f-left p-130 mb-24">
      <div class="w-43 f-left pr-2">
        <h2 class="landing-description-title mb-sm-1">
          {{ config.description.title }}
        </h2>
      </div>

      <div class="w-57 f-left">
        <p class="landing-description mt-1">
          {{ config.description.text }}
        </p>
      </div>
    </div>

    <div class="w-100 f-left mb-22">
      <h2 class="landing-docs-title pl-130" v-html="config.documentation.title"></h2>

      <div class="docs-container w-100 f-left p-105">
        <a v-for="doc in config.documentation.items" :key="doc.link" :href="base(doc.link)" class="docs-block">
          <h3 class="w-100 f-left doc-name mb-2">{{ doc.name }}</h3>
          <p class="text-left doc-desc">{{ doc.description }}</p>

          <div class="f-left doc-action-btn mb-2">
            <p class="f-left">Learn more</p>
            <img class="f-left doc-arrow" :src="base('/landing/arrow_right.png')">
          </div>
        </a>
      </div>
    </div>

    <div class="w-100 f-left p-130 landing-problems">
      <h2 class="landing-problems-title mb-6" v-html="config.problemsSection.title"></h2>

      <p class="w-65 mb-8 problems-description">
        {{ config.problemsSection.description1 }}
      </p>

      <div class="w-100 f-left p-90 mb-2">
        <div
          v-for="(problem, id) in config.problemsSection.items" :key="id"
          class="f-left problem-card"
          :class="{'mt-15': id === 1}"
          :style="`background-color: ${problem.color}; ${id === 2 ? 'margin-top: -150px' : ''}`"
        >
          <span class="f-left w-80">{{ problem.description }}</span>
          <img class="f-right problem-img" v-if="problem.image" :src="base(problem.image)">
        </div>
      </div>

      <p class="w-50 problems-description">
        {{ config.problemsSection.description2 }}
      </p>
    </div>

    <div class="w-100 f-left mb-8 p-130 landing-proxy">
      <h2 class="landing-proxy-title">
        Shotover Proxy
      </h2>

      <div class="proxy-item" style="top: 280px; left: -109px">pscale connect</div>
      <div class="proxy-item" style="top: 280px; left: 160px">pscale disconnect</div>
      <div class="proxy-item" style="top: 375px; left: -7px">pscale service token</div>
      <div class="proxy-item" style="top: 460px; left: -7px">pscale connect</div>
      <div class="proxy-item" style="top: 555px; left: -109px">pscale connect</div>
      <div class="proxy-item" style="top: 555px; left: 155px">pscale connect</div>

      <div class="proxy-item" style="top: 260px; right: 140px">pscale disconnect</div>
      <div class="proxy-item" style="top: 260px; right: -120px">pscale connect</div>
      <div class="proxy-item" style="top: 355px; right: -17px">pscale service token</div>
      <div class="proxy-item" style="top: 440px; right: -17px">pscale connect</div>
      <div class="proxy-item" style="top: 535px; right: 150px">pscale connect</div>
      <div class="proxy-item" style="top: 535px; right: -120px">pscale connect</div>
    </div>

    <div class="w-100 f-left mb-24 p-130 landing-deploy">
      <div class="w-40 f-left">
        <h2 class="landing-title mb-4">
          {{ config.deploying.title }}
        </h2>

        <p class="landing-description mb-11">
          {{ config.deploying.description }}
        </p>
      </div>

      <div class="w-100 f-left">
        <div class="w-45 f-left">
          <p class="deploy-counter mb-8">
            {{
              `${selectedDeployOption < 9 ? `0${selectedDeployOption + 1}` : selectedDeployOption + 1}
              —
              ${config.deploying.steps.length < 10 ? `0${config.deploying.steps.length}` : config.deploying.steps.length}`
            }}
          </p>

          <h3
            v-for="(step, id) in config.deploying.steps" :key="id"
            @mouseover="selectedDeployOption = id"
            :class="{'active': selectedDeployOption === id}"
            class="deploy-step mb-3"
          >
            {{ step.name }}
            <img v-if="selectedDeployOption === id" class="f-right deploy-arrow" :src="base('/landing/arrow_right_black.png')">
          </h3>
        </div>

        <div class="w-55 f-left p-50">
          <div class="step-img-container mb-4">
            <img class="step-img" :src="base(config.deploying.steps[selectedDeployOption].image)">
          </div>

          <p class="landing-description w-80">
            {{ config.deploying.steps[selectedDeployOption].description }}
          </p>
        </div>
      </div>
    </div>

    <div class="w-100 f-left mb-18">
      <div class="p-130">
        <h2 id="roadmap" ref="roadmap" class="landing-title w-100 f-left mb-2">
          {{ config.roadmap.title }}
        </h2>
      </div>

      <div class="w-100 f-left roadmap-container" ref="roadmapContainer">
        <div class="roadmap">
          <img :src="base('/landing/roadmap.png')">

          <div
            v-for="step, id in config.roadmap.items" :key="id"
            class="roadmap-step"
            :style="`top: ${step.top}px; left: ${step.left}px;`"
          >
            <div v-if="step.linePosition === 'top'" class="roadmap-step-pointer-line" :style="`height: ${step.height}px;`"></div>
            <div class="roadmap-step-pointer">{{ id < 9 ? `0${id + 1}` : id + 1 }}</div>
            <div v-if="step.linePosition === 'bottom'" class="roadmap-step-pointer-line" :style="`height: ${step.height}px;`"></div>

            <p class="landing-description pointer-text" :style="step.linePosition === 'top' ? `margin-top:${step.height}px` : ''">
              {{ step.text }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="name-description w-100 f-left">
      <div class="p-130">
        <h2 class="landing-title w-50 f-left">
          {{ config.name.title }}
        </h2>

        <p class="landing-description w-50 mt-1 mb-1 f-left">
          {{ config.name.description }}
        </p>
      </div>

      <img :src="base(config.name.image)">
    </div>
  </div>
</template>

<script>
import { withBase } from 'vitepress'

export default {
  data () {
    return {
      config: {},
      selectedDeployOption: 0,
      base: null
    }
  },

  mounted () {
    this.base = withBase

    import('../config').then(config => {
      this.config = config.default.pagesConfig.landing
    })

    if (window.location.hash) {
      setTimeout(() => {
        window.scrollTo(0, this.$refs.roadmap.offsetTop)
      }, 100)
    }
  },

  methods : {
    onScroll (event) {
      const c = this.$refs.roadmapContainer
      const offsetTop = c.getBoundingClientRect().top

      if (offsetTop >= 80 && offsetTop <= 160) {
        document.getElementsByTagName('body')[0].classList.add("no-scroll-y")

        if (event.deltaY > 0 ? c.scrollLeft + window.innerWidth >= 2890 : c.scrollLeft === 0) {
          document.getElementsByTagName('body')[0].classList.remove("no-scroll-y")
        } else {
          c.scrollLeft += event.deltaY
        }
      } else {
        document.getElementsByTagName('body')[0].classList.remove("no-scroll-y")
      }
    }
  }
}
</script>
