<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      title: 'Hey! I\'m Karim :)'
    }
  },
  // this is how we add methods to a compoenent
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      // classList is JS property, add will add a class in JS
      this.$refs.name.classList.add('active')
      // focus method will focus() on DOM field
      this.$refs.name.focus()
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid gray;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
