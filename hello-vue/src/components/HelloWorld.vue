<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Here is a random cat fact: {{ catFact }}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      helloMessage: '',
      catFact: 'Please wait for cat fact'
    }
  },
  props: {
    msg: String,
  },
  mounted() {
    this.$hello_api.getHelloMessage().then(resp => {
      this.helloMessage = resp.message
    })

    this.$hello_api.getCatFact().then(resp => {
      this.catFact = resp.fact
    })
    .catch(err => {
      console.log(err)
      this.catFact = 'Sorry, could not fetch cat fact'
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
