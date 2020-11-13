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
          <canvas id="myCanvas" width="960" height="400"></canvas>
            222
          <transition name="fade" mode="out-in" @enter="afterLeave">
            <!-- <router-view/> -->
            
          </transition>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

// Draw a square on screen.
// import { Stage, Shape, createjs, Graphics } from "@createjs/easeljs";
import { Stage, Shape, createjs, Graphics, Container } from "@createjs/easeljs";

const colorp = [
  '#ffb997', 
  '#f67e7d', 
  '#843b62', 
  '#621940', 
  '#0b032d', 
];

export default {
  name: 'Home',
  created() {
    // this.stage = new Stage("myCanvas")
    
  },

  data () {
    return {
      h : 120, 
      transitionName: 'slide-left', 
      stage : null
    }
  },
  
  mounted() {
    if (this.stage == null) {
      this.stage = new Stage("myCanvas")
    }

    var container = new Container()

    var w = 100;
    var h = 35;

    var ca = Math.cos(30 * Math.PI / 180.0)
    var sa = Math.sin(30 * Math.PI / 180.0)

    // y = mx + b

    var pin = {x:11, y:135}
    
    var cq = new Shape()
    cq.graphics.beginFill(colorp[0])
    cq.graphics
    .moveTo(pin.x, pin.y)
      .lineTo(pin.x+(-1*w), pin.y+(-1*w*sa))
      .lineTo(pin.x+(-1*w), pin.y+(-1*w*sa)+(-1*h))
      .lineTo(pin.x, pin.y+(-1*h))
      .lineTo(pin.x, pin.y)

    container.addChild(cq)

    var ww = 30
    var hh = 70

    var ppin = {x:pin.x+(-1*w), y:pin.y+(-1*w*sa)+(-1*h)}

    cq = new Shape()
    cq.graphics.beginFill(colorp[0])
    cq.graphics
    .moveTo(ppin.x, ppin.y)
      .lineTo(ppin.x+(-1*ww), ppin.y+(-1*ww*sa))
      .lineTo(ppin.x+(-1*ww), ppin.y+(-1*ww*sa)+(-1*hh))
      .lineTo(ppin.x, ppin.y+(-1*hh))
      .lineTo(ppin.x, ppin.y)

    container.addChild(cq)

    this.stage.x = 250
    this.stage.y = 100
    
    this.stage.addChild(container)
    this.stage.update()
    console.log(this.stage)
  },

  components: {
    NavBar
  }, 
  methods: {
    convert (s, arrs) {

    },

    afterLeave () {
      console.log('????')
      this.$root.$emit('triggerScroll')
    }, 
  }, 
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f4f4f4;
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