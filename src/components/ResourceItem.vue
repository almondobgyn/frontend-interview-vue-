<template>
  <div class="flex resource-item-container justify-content-start align-items-center p-2">
    <PrimeAvatar shape="circle" size="xlarge" :image="resource.ImageUrl" />
    <div class="flex justify-content-evenly align-items-start flex-column ml-4">
      <div class="text-xl">{{resource.Title}}</div>
      <div>
        {{resource.Categories}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ResourceItem',
  props: {
    resource: {
      default: null,
      type: Object
    }
  }
}
</script>

<style>
.resource-item-container {
  height: 120px;
}
</style>
