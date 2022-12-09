<template>
  <h1>Search Health.gov</h1>
  <div class="grid">
    <div class="col-6 col-offset-3">
      <div class="p-inputgroup">
        <PrimeButton label="Search" :loading="false" @click="runSearch" />
        <InputText v-model="query" placeholder="Keyword" />
      </div>

      <!-- Results here -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() { 
    return {
      query: '',
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

</style>
