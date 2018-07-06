<template>
  <div class="nav">
      <div class="TheNav" >
        <button v-for="(item,index) in links"
          :key="index"
          :item="item"
          @click="goto(item.rout)">{{item.name}}</button>
      </div>
  </div>
</template>
<script>
export default {
  name: 'TheNav',
  data () {
    return {
      links: [{
        name: '关于我们',
        rout: 'Aboutus'
      },
      {
        name: '日常例会',
        rout: 'Daily'
      },
      {
        name: '大型活动',
        rout: 'Activity'
      },
      {
        name: '加入我们',
        rout: 'JoinUs'
      }]
    }
  },
  methods: {
    goto (rout) {
      this.$router.push(`/${rout}`)
    }
  }
}
</script>
<style lang="less" scoped>
.TheNav{
  display: flex;
  justify-content: space-between;
}
button{
    padding: 0 10px;
  margin: 10px 0;
  border: none;
  outline: 0;
  font-size: 20px;
  background-color: white;
  width:200px;
  height:40px;
  cursor: pointer;
}
button:hover{
  background-color:#66cdaa;
}
.nav{
  width:900px;
  margin: 0 auto;
}
</style>
