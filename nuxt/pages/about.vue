<template>
  <b-container class="mt-4 mb-4">
    <b-row>
      <b-col sm>
        <h3 class="mb-4">
          Creative Director | Adjunct Professor
        </h3>
        <p>
          Creative Director specializing in delivering rich, user-friendly
          digital experiences that enable brands to elevate market positioning
          and increase product interest. Highly conceptual as well as hands-on;
          skilled in strategic development; known for being a stong
          customer-focused project manager, and an inclusive, encouraging team
          leader. Work includes branding, marketing and advertising campaigns,
          digital media (UX/UI, information architecture), print, logo and
          package design, typography, photography. Excellent presentation,
          written, and oral communication skills. Bilingual (German)
        </p>
        <a :href="`mailto:${email}`">Contact Me</a>
      </b-col>
      <b-col sm>
        <b-img
          alt="Annette von Brandis"
          :src="require('~/assets/img/AvB.jpg')"
          class="me"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
const seo = JSON.parse(process.env.seoconfig)
export default Vue.extend({
  name: 'About',
  // @ts-ignore
  head() {
    const title = 'About'
    const description = 'description of this website'
    const image = `${seo.url}/icon.jpg`
    return {
      title: title,
      meta: [
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        {
          property: 'og:image',
          content: image
        },
        { name: 'twitter:title', content: title },
        {
          name: 'twitter:description',
          content: description
        },
        {
          name: 'twitter:image',
          content: image
        },
        { hid: 'description', name: 'description', content: description }
      ]
    }
  },
  data() {
    return {
      email: seo.email
    }
  }
})
</script>

<style lang="scss">
.me {
  max-width: 10rem;
  display: block;
  margin: auto;
}
</style>
