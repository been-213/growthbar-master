<template>
  <main>
    <turnpic>
    </turnpic>

    <Forum>
    </Forum>
  </main>
</template>

<script>
import TurnPic from '@/components/TurnPic'
import Forum from '@/components/Forum'
export default {
  name: 'TheForum',
  components: {
    'turnpic': TurnPic,
    'Forum': Forum
  }
}
</script>
