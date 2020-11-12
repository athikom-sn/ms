<template>
  <div id="app">
    <NavBar />
    
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>

    <b-container class="mb-4">
      <b-row>
        <!-- <b-col id="timeline" class="d-block d-sm-none" cols="2">
          <ul id="nav">
            <li><router-link to="/">/</router-link></li>
            <li><router-link to="/about">/about</router-link></li>
            <li><router-link to="/bar">/bar</router-link></li>
            <li><router-link to="/bar#anchor">/bar#anchor</router-link></li>
            <li><router-link to="/bar#anchor2">/bar#anchor2</router-link></li>
            <li><router-link to="/bar#1number">/bar#1number</router-link></li>
          </ul>
        </b-col> -->
        <b-col id="main">
          <transition name="fade" mode="out-in" @enter="afterLeave">
            <router-view/>
          </transition>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Home',
  data () {
    return {
      transitionName: 'slide-left'
    }
  }, 
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  },

  components: {
    NavBar
  }, 
  methods: {
    afterLeave () {
      console.log('????')
      this.$root.$emit('triggerScroll')
    }
  }, 
  // watch: {
  //   '$route' (to, from) {
  //     console.log('router ????')
  //     const toDepth = to.path.split('/').length
  //     const fromDepth = from.path.split('/').length
  //     this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  //   }
  // }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.timeline {
  // background : #fbfbfb;
}
</style>

<style scoped>
  #timeline {
    /* height: 250vh; */
    background : #fbfbfb;
  }

  #main {
    margin-top: 1em !important;
    max-width: 620px;
    margin : 0 auto;
  }
</style>