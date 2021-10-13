<template>
  <div id="Shapes">
    <div v-if="shapeName === 'square'" class="shape">
      <svg :width="edge1*10" :height="edge1*10" class="svg">
        <rect :width="edge1*10" :height="edge1*10"
              style="fill:#f8f9fa;stroke-width:3;stroke:black"></rect>
        Sorry, your browser does not support inline SVG.
      </svg>

    </div>
    <div v-if="shapeName === 'rectangle'" class="shape">
      <svg :width="edge1*10" :height="edge2*10" class="svg">
        <rect :width="edge1*10" :height="edge2*10"
              style="fill:#f8f9fa;stroke-width:3;stroke:black"></rect>
        Sorry, your browser does not support inline SVG.
      </svg>

    </div>
    <div v-if="shapeName === 'triangle'" class="shape">
      <svg height="90" width="340">
        <polygon points="280,10 30,70 300,70"
                 style="fill:#f8f9fa;stroke-width:2;stroke:black"></polygon>
        Sorry, your browser does not support inline SVG.
      </svg>
      <span class="triangleEdge1">{{ edge1 }}</span>
      <span class="triangleEdge2">{{ edge2 }}</span>
      <span class="triangleEdge3">{{ edge3 }}</span>

    </div>

    <div v-if="shapeName === 'circle'" class="shape">
      <svg width="340" height="90" class="circle">
        <circle cx="170" cy="45" :r="radius*10"
                style="fill:#f8f9fa;stroke-width:2;stroke:black"></circle>
      </svg>

    </div>

  </div>
</template>

<script>
export default {
  name: "Shapes",
  props: {
    shapeName: '',
    edge1: '',
    edge2: '',
    edge3: '',
    edge4: '',
    radius: ''
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
#Shapes {
  max-width: 400px;
  max-height: 400px;
  height: 100px;
  overflow: auto;
  border: 1px solid black;
  background-color: #158900;
}

.shape {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.svg {
  display: block;
  margin: auto;
}

span {
  font-weight: bold;
}

.triangleEdge1 {
  position: absolute;
  top: 110px;
  left: 145px;
}

.triangleEdge2 {
  position: absolute;
  top: 120px;
  right: 55px;
}

.triangleEdge3 {
  position: absolute;
  top: 168px;
  right: 170px;
}

.circle {
  max-height: 100px;
  overflow: scroll;
}
</style>