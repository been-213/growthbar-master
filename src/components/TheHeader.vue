<template>
  <header>
      <img  alt="picture"
        align="left"
        :src="logo">

    <nav>
      <span class="left">
        <button class="navbutton"
        v-for="(item,index) in items"
        :key="index"
        @click="backtohome">{{item.title}}</button>
      </span>
      <div>
        <button class="navbutton"
        @click="click_SignIn">登陆</button>
        <button class="navbutton"
        @click="click_SignUp">注册</button>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      logo: '/static/images/logo.jpg',
      items: [{
        title: '成长吧'
      },
      {
        title: '信软心理辅导站'
      }]
    }
  },
  methods: {
    backtohome () {
      this.$router.push('/')
    },
    click_SignIn () {
      this.$router.push('/SignIn')
    },
    click_SignUp () {
      this.$router.push('/SignUp')
    }
  }
}
</script>
<style lang="less" scoped>
header{
  margin: 0;
  padding: 10px 5%;
  box-shadow: 5px 5px 5px #cccccc;
  img{
  width: 50px;
  height:50px;
  border-radius: 25px;
  }
}
.navbutton {
  padding: 0 10px;
  margin: 10px 0;
  border: none;
  border-right: 1px solid #cccccc;
  outline: 0;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
  &:last-child{
    border-right: none;
  }
}
nav{
    display: flex;
    justify-content: space-between;
}
</style>
