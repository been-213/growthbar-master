<template>
  <div>
    <img :src="background">
  </div>
</template>
<script>
export default {
  name: 'TurnPic',
  data () {
    return {
      background: '/static/images/header.jpg'
    }
  }
}
</script>
<style scoped>
div{
  text-align: center;
}
</style>
