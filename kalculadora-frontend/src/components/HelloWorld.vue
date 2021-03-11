<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <input id="op1" type="number" v-model.number="op1" data-test="op1" />
    <input id="op2" type="number" v-model.number="op2" data-test="op2" />
    <button id="soma" v-on:click="somar" data-test="soma">+</button>

    <br/><br/>

    <span v-if="resultado > 0" data-test="resultado"><strong>Resultado:</strong> {{resultado}}</span>
  </div>
</template>

<script>
export default {
  name: 'Kalculadora',
  props: {
    msg: String
  },
  data() {
    return {
      op1: null, 
      op2: null,
      resultado: null
    }
  }, 
  methods: {
    somar() {
      // this.resultado = this.op1 + this.op2;

      const baseUrl = process.env.VUE_APP_BASE_URL;

      this.axios
        .get(`${baseUrl}/resultados/soma?op1=${this.op1}&op2=${this.op2}`)
        .then(response => {
          this.resultado = response.data.resultado
        })
        .catch(error => {
          console.log(error)
        });
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
