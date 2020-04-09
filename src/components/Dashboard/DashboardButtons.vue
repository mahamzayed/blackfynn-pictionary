<template>
  <div class="dashboard-buttons">
    <div class="dashboard-buttons-header">
      Canvas Tools
    </div>
    <div class="column">
      <div class="row">
        <button @click="selectUndo">
          <svgicon name="undo-icon" width="20" height="30" color="#0D4872" />
        </button>
        <button @click="selectClear">
          <svgicon name="clear-icon" width="20" height="30" color="#0D4872" />
        </button>
      </div>
    </div>
    <div class="column">
      <div class="row">
        <button @click="selectPencil">
          <svgicon name="pencil-icon" width="20" height="30" color="#0D4872" />
        </button>
        <button @click="selectPaintbrush">
          <svgicon
            name="paintbrush-icon"
            width="20"
            height="30"
            color="#0D4872"
          />
        </button>
      </div>
    </div>
    <div class="column">
      <div class="row">
        <button @click="selectErase">
          <svgicon name="eraser-icon" width="20" height="30" color="#0D4872" />
        </button>
        <button @click="selectShape">
          <svgicon name="shape-icon" width="20" height="30" color="#0D4872" />
        </button>
      </div>
    </div>
    <div class="column">
      <div class="row">
        <button @click="selectMove">
          <svgicon name="move-icon" width="20" height="30" color="#0D4872" />
        </button>
      <button @click="selectColor">
        <svgicon
          name="color-picker-icon"
          width="20"
          height="30"
          color="#0D4872"
          weight="300"
        />
      </button>
    </div>
    </div>
    <div class="dashboard-colors">
      <div class="column">
        <div class="row">
           <button class="red-color" @click="selectColor(red)"/>
           <button class="blue-color" @click="selectColor(blue)"/>
        </div>
      </div>
     
   </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DashboardButtons",

  computed: {
    ...mapState(["canvas", "canvasCtx"]),
  },

  methods: {
    selectClear: function() {
      this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard-buttons {
  margin-right: 1rem;
  border: solid 1px black;
  background-color: lightgray;
 
}

.dashboard-buttons-header {
  border-bottom: solid 1px black;
  background-color: darkgray;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  margin-bottom: 1rem;
}

.column {
  display: flex;
  flex-direction: column;
   padding-left: 0.5rem;
}

button {
  background-color: #79bff2;
  border: solid 1px #0d4872;
  border-radius: 2px;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
}

.red-color {
  background-color: red;
  border: none;
  cursor: pointer;
  border-radius: 0;
  width: 30px;
  height: 30px;
}

.blue-color {
  background-color: blue;
  border: none;
  cursor: pointer;
  border-radius: 0;
  width: 30px;
  height: 30px;
}
</style>
