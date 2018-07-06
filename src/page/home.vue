<template>
    <main>
      <TheNav>
      </TheNav>

      <TheForum>
      </TheForum>
    </main>
</template>
<script>
import TheNav from '@/components/TheNav'
import TheForum from '@/components/TheForum'
export default {
  name: 'home',
  components: {
    'TheNav': TheNav,
    'TheForum': TheForum
  }
}
</script>
