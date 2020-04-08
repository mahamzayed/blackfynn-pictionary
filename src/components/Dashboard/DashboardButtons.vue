<template>
  <div class="dashboard-buttons">
    <div class="column">
      <button @click="selectUndo">
        <svgicon name="undo-icon" width="20" height="30" color="#0D4872" />
      </button>
      <button @click="selectPencil">
        <svgicon name="pencil-icon" width="20" height="30" color="#0D4872" />
      </button>
      <button @click="selectShape">
        <svgicon name="shape-icon" width="20" height="30" color="#0D4872" />
      </button>
      <button @click="selectMove">
        <svgicon name="move-icon" width="20" height="30" color="#0D4872" />
      </button>

      <button @click="selectClear">
        <svgicon name="clear-icon" width="20" height="30" color="#0D4872" />
      </button>
      <button @click="selectPaintbrush">
        <svgicon
          name="paintbrush-icon"
          width="20"
          height="30"
          color="#0D4872"
        />
      </button>
      <button @click="selectErase">
        <svgicon name="eraser-icon" width="20" height="30" color="#0D4872" />
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
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DashboardButtons",

  computed: {
    ...mapState(['canvas', 'canvasCtx']),
  },

  methods: {
    selectClear: function() {
      this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard-buttons {
  margin-right: 1rem;
}

.column {
  display: flex;
  flex-direction: column;
}

button {
  background-color: #79bff2;
  border: solid 1px #0d4872;
  border-radius: 2px;
  margin-bottom: 5px;
  cursor: pointer;
}
</style>
