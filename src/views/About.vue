<template>
  <div class="about">
    <h1>This is an about page z</h1>
    <b-img-lazy v-bind="mainProps" :src="require('@/assets/health-care.png')" alt="Image 1"></b-img-lazy>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb',
        width: 600,
        height: 400,
        class: 'my-5'
      }
    }
  },
}
</script>
