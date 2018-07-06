<template>
  <div id="app">
    <TheHeader>
    </TheHeader>

    <router-view name="Content">
    </router-view>

    <TheFooter>
    </TheFooter>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
export default {
  name: 'App',
  components: {
    'TheHeader': TheHeader,
    'TheFooter': TheFooter
  }
}
</script>

<style>
</style>
