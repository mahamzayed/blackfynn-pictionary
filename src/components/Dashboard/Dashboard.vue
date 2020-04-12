<template>
  <div class="dashboard">
    <h2>Blackfynn Pictionary</h2>
    <div class="dashboard-components">
      <dashboard-buttons 
        v-if="toggle"
        @erase-button="eraseButton" 
        @pencil-button="pencilButton"
        @paintbrush-button="paintbrushButton"
        @shape-button="shapeButton"
      />
      <dashboard-canvas />
    </div>
    <label class="switch">
      <input type="checkbox" v-model="toggle" />
      <span class="slider round"></span>
    </label>
    <div class="input" v-if="!toggle">
      <input type="text" />
      <button @click="submitGuess">Submit</button>
    </div>
  </div>
</template>

<script>
import DashboardCanvas from "../Dashboard/DashboardCanvas.vue"
import DashboardButtons from "../Dashboard/DashboardButtons.vue"
import { mapState } from 'vuex'
export default {
  name: "Dashboard",
  components: {
    DashboardCanvas,
    DashboardButtons
  },

  data() {
    return {
      toggle: false
    }
  },

  computed: {
    ...mapState(['canvas', 'canvasCtx']),

    dashboardView: function() {
      return this.toggle ? "Player" : "Viewer";
    },
  },

  methods: {
    eraseButton: function() {
      this.canvasCtx.globalCompositeOperation = 'destination-out';
      this.canvasCtx.lineWidth = 10;
    },

    shapeButton: function() {
      // logic goes here
      
    }
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  h2 {
    margin-left: 2rem;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}

.dashboard-components {
  display: flex;
  justify-content: center;
}

.input {
  margin-left: 2rem;
}

input {
  width: 14rem;
  height: 2rem;
  border: solid 1px #0d4872;
  margin-top: 2rem;
}
</style>
