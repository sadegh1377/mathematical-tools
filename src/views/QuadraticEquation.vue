<template>
  <div id="QuadraticEquation">
    <form>
      <input id="a" type="number" v-model="knownNumbersA">
      <label for="a">x^2</label>

      <input id="b" type="number" v-model="knownNumbersB">
      <label for="b">x</label>

      <input id="c" type="number" v-model="knownNumbersC">
      = 0
      <button class="btn btn-light btn-lg btn-outline-info "
              @click.prevent="computing(knownNumbersA,knownNumbersB,knownNumbersC)">submit
      </button>
    </form>
    <div v-for="root in answer" class="mt-2">
      <div v-if="root.realPart && root.imagPart">
        <p>real part = {{ root.realPart }}</p>
        <p>Imaginary part = {{ root.imagPart }}</p>
      </div>
      <div v-else-if="root.root2 === null || root.root2 === undefined">
        <p>root1 and root2 = {{ root.root1 }}</p>
      </div>
      <div v-else>
        <p>root1 = {{ root.root1 }}</p>
        <p>root2 = {{ root.root2 }}</p>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuadraticEquation",
  data() {
    return {
      knownNumbersA: '',
      knownNumbersB: '',
      knownNumbersC: '',
      answer: []
    }
  },
  methods: {
    computing(a, b, c) {
      if (this.knownNumbersA === '' || this.knownNumbersB === '' || this.knownNumbersC === '') {

      } else {
        a = parseFloat(a)
        b = parseFloat(b)
        c = parseFloat(c)
        let discriminant = b * b - 4 * a * c;

        if (discriminant > 0) {
          let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
          let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

          this.answer.push({
            root1: root1,
            root2: root2
          })

        } else if (discriminant === 0) {
          let root1 = -b / (2 * a);
          this.answer.push({
            root1: root1
          })
        } else {
          let realPart = (-b / (2 * a)).toFixed(2);
          let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
          this.answer.push({
            realPart: realPart,
            imagPart: imagPart
          })
        }
      }
    }
  }
}
</script>

<style scoped>

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  margin-left: 10px;
  width: 10%;
  -moz-appearance: none;
}
</style>