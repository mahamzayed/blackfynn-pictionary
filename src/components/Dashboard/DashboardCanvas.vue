<template>
  <div class="dashboard-canvas">
    <canvas
      id="canvas"
      ref="canvasElement"
      @mousedown="startPosition"
      @mouseup="stopPosition"
      @mousemove="draw"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "DashboardCanvas",

  data() {
    return {
      isDrawing: false,
    };
  },

  computed: {
    ...mapState(['canvas', 'canvasCtx'])
  },

  mounted() {
    this.setCanvas(this.$refs.canvasElement);
    this.setCanvasCtx(this.canvas.getContext('2d'))

    // resizing for now, will adjust later
    this.canvas.height = "500"
    this.canvas.width = "500"
  },

  methods: {
    ...mapActions(['setCanvas', 'setCanvasCtx']),

    startPosition: function(evt) {
      this.isDrawing = true;
      this.canvasCtx.beginPath()
      this.draw(evt)
    },

    stopPosition: function() {
      this.isDrawing = false
    },

    draw: function(evt) {
      if (!this.isDrawing) return;

      this.canvasCtx.lineWidth = 10;
      this.canvasCtx.lineCap = "round";
      this.canvasCtx.lineTo(
        evt.pageX - this.canvas.offsetLeft,
        evt.pageY - this.canvas.offsetTop
      )
      this.canvasCtx.stroke()
      this.canvasCtx.moveTo(
        evt.pageX - this.canvas.offsetLeft,
        evt.pageY - this.canvas.offsetTop
      )
    }
  }
};
</script>

<style lang="scss" scoped>
#canvas {
  border: 2px solid black;
}
</style>
