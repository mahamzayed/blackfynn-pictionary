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
        <button @click="selectEraser">
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
        <button @click="selectPaintbucket">
          <svgicon
            name="paintbucket-icon"
            width="20"
            height="30"
            color="#0D4872"
            weight="300"
          />
        </button>
      </div>
    </div>
    <div class="dashboard-divider" />
    <div class="dashboard-colors">
      <div class="column">
        <div class="row">
          <button class="red-color" @click="selectColor('red')" />
          <button class="blue-color" @click="selectColor('blue')" />
        </div>
        <div class="row">
          <button class="green-color" @click="selectColor('green')" />
          <button class="orange-color" @click="selectColor('orange')" />
        </div>
        <div class="row">
          <button class="purple-color" @click="selectColor('purple')" />
          <button class="yellow-color" @click="selectColor('yellow')" />
        </div>
        <div class="row">
          <button class="black-color" @click="selectColor('black')" />
          <button class="brown-color" @click="selectColor('brown')" />
        </div>
        <div class="row">
          <button class="gray-color" @click="selectColor('gray')" />
          <button class="white-color" @click="selectColor('white')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DashboardButtons",

  data() {
    return {
      pencilButton: false,
      paintbrushButton: false
    };
  },

  computed: {
    ...mapState(["canvas", "canvasCtx"])
  },

  methods: {
    selectClear: function() {
      this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    selectColor: function(color) {
      this.$emit("select-color", color);
    },

    /**
     * Select the eraser button
     */
    selectEraser: function() {
      this.$emit("erase-button");
    },

    /**
     * Select the pencil button
     */
    selectPencil: function() {
      this.$emit("pencil-button")
    },

    /**
     * Select the paintbrush button
     */
    selectPaintbrush: function() {
      this.$emit("paintbrush-button")
    },

    /**
     * Select the shape button
     */
    selectShape: function() {
      this.$emit("shape-button", true);
    },

    /**
     * Select the paintbucket button
     */
    selectPaintbucket: function() {
      this.$emit("paintbucket-button");
    },

    selectUndo: function() {
      // logic goes here
    },

    selectMove: function() {
      // logic goes here
    }
  }
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

.dashboard-divider {
  border-bottom: solid 1px black;
  margin-bottom: 1rem;
}

/** TODO: change to one class later */
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

.green-color {
  background-color: green;
  border: none;
  cursor: pointer;
  border-radius: 0;
  width: 30px;
  height: 30px;
}

.orange-color {
  background-color: orange;
  border: none;
  cursor: pointer;
  border-radius: 0;
  width: 30px;
  height: 30px;
}

.purple-color {
  background-color: purple;
  border: none;
  cursor: pointer;
  border-radius: 0;
  width: 30px;
  height: 30px;
}

.white-color {
  background-color: white;
  border: none;
  cursor: pointer;
  border-radius: 0;
  width: 30px;
  height: 30px;
}

.black-color {
  background-color: black;
  border: none;
  cursor: pointer;
  border-radius: 0;
  width: 30px;
  height: 30px;
}

.brown-color {
  background-color: brown;
  border: none;
  cursor: pointer;
  border-radius: 0;
  width: 30px;
  height: 30px;
}

.gray-color {
  background-color: darkgray;
  border: none;
  cursor: pointer;
  border-radius: 0;
  width: 30px;
  height: 30px;
}

.yellow-color {
  background-color: yellow;
  border: none;
  cursor: pointer;
  border-radius: 0;
  width: 30px;
  height: 30px;
}
</style>
