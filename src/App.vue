<template>
  <div id="app">
    <NavBar />
    
    <div id="nav"></div>

    <b-container class="mb-4">
      <b-row>
        <b-col id="main">
          <canvas id="myCanvas" width="960" height="400"></canvas>
          
          <transition name="fade" mode="out-in">
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

import { Stage, Shape, createjs, Graphics, Container } from "@createjs/easeljs";

const cos = Math.cos(30 * Math.PI / 180.0)
const sin = Math.sin(30 * Math.PI / 180.0)

const colorp = [
  '#ffb997', 
  '#f67e7d', 
  '#843b62', 
  '#621940', 
  '#0b032d', 
];

export default {
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

    // this.stage.addChild(
    //   this.makeBox(
    //   {x : -30*cos +235*cos , y : 150*sin +70*sin ,}, 
    //   {
    //     w : 135,
    //     h : 60,
    //     l : 15,
    //   }
    // ))

    // this.stage.addChild(
    //   this.makeBox(
    //   {x : -30*cos, y : 150*sin,}, 
    //   {
    //     w : 15,
    //     h : 60,
    //     l : 100,
    //   }
    // ))

    // this.stage.addChild(
    //   this.makeBox(
    //   {x :  -30*cos + 120*cos, y : 150*sin + 120*sin,}, 
    //   {
    //     w : 120,
    //     h : 15,
    //     l : 100,
    //   }
    // ))

    this.stage.addChild(
      this.makeBox(
      {x : -100, y : 125,}, 
      {
        w : 130,
        h : 70,
        l : 150,
      }
    ))

    this.stage.x = 250
    this.stage.y = 200
    
    this.stage.update()
    console.log(this.stage)
  },

  components: {
    NavBar
  }, 
  methods: {
    makeBox(pin, box) {
      const container = new Container()

      let shape = new Shape()

      shape.graphics.beginFill(colorp[0])
        .moveTo(pin.x,            pin.y)
        .lineTo(pin.x-box.w*cos,  pin.y-(box.w*sin))
        .lineTo(pin.x-box.w*cos,  pin.y-(box.w*sin)-box.h)
        .lineTo(pin.x,            pin.y-box.h)
        .lineTo(pin.x,            pin.y)


      container.addChild(shape)

      // @ move pin of box
      box.x = pin.x-box.w*cos
      box.y = pin.y-(box.w*sin) - box.h

      shape = new Shape()

      shape.graphics.beginFill(colorp[1])
        .moveTo(box.x,                      box.y)
        .lineTo(box.x + box.l,              box.y - (box.l*sin*sin))
        .lineTo(box.x + box.l + box.w*cos,  box.y - (box.l*sin*sin) + box.w/2 )
        .lineTo(box.x + box.w*cos,          box.y - (box.w*sin) + box.w)
        .lineTo(box.x,                      box.y)

      container.addChild(shape)

       // @ move pin of box
      box.x = pin.x
      box.y = pin.y

      // @ โค้ง
      shape = new Shape()
      shape.graphics.beginFill(colorp[2])
        .moveTo(box.x,                   box.y)
        .bezierCurveTo(
                box.x,                   box.y-(box.l/2*sin), 
                box.x + box.h,           box.y,
                box.x + box.l,           box.y-(sin*box.l/2)-box.h)
        .lineTo(box.x,                   box.y-box.h)
        .lineTo(box.x,                    box.y)
      

      // @ กล่อง
      // shape = new Shape()
      // shape.graphics.beginFill(colorp[2])
      //   .moveTo(box.x,                  box.y)
      //   .lineTo(box.x + box.l,          box.y-(box.l/2*sin))
      //   .lineTo(box.x + box.l,          box.y-(box.l/2*sin)-box.h)
      //   .lineTo(box.x,                  box.y-box.h)
      //   .lineTo(box.x,                  box.y)

      container.addChild(shape)
        
      return container
    }, 
  }, 
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sinns-serif;
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
</style>