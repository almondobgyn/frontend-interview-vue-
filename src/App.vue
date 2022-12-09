<template>
  <h1>Search Health.gov</h1>
  <div class="container">
    <div class="p-inputgroup">
      <PrimeButton label="Search" :loading="loading" @click="runSearch" />
      <InputText v-model="query" placeholder="Keyword" />
    </div>
    <!-- Results here -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() { 
    return {
      query: '',
      loading: false,
      data: []
    }
  },
  methods: {
    runSearch() {}
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

.container {
  width: 60%;
  margin: 0 auto;
}
</style>
