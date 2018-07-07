<template>
<div>
  <div class="NavButton">
    <button @click="click_show" v-show="!showQ">新 生 问 答</button>
    <button @click="click_show" v-show="showQ">人 员 信 息</button>
  </div>
  <transition name="fade">
    <component :is="componentW">
    </component>
  </transition>
</div>
</template>
<script>

import Information from '@/components/Information'
import QandA from '@/components/QandA'

export default {
  name: 'AboutUs',
  data () {
    return {
      showQ: false,
      componentW: Information
    }
  },
  components: {
    'Information': Information,
    'QandA': QandA
  },
  methods: {
    click_show () {
      this.showQ = !this.showQ
      if (this.showQ) {
        this.componentW = QandA
      } else {
        this.componentW = Information
      }
    }
  }
}
</script>
<style lang="less" scoped>
.fade-enter-active, .fade-leave {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.NavButton{
  margin-top: 3%;
  text-align: center;
  button{
    width: 175px;
    height: 53px;
    margin: 0 auto;
    font-size: 200%;
    font-weight: bold;
    background-color:white;
    border: 1px solid #cccccc;
    cursor: pointer;
    outline: none;
    border-radius: 20px;
    float: top;
  }
  button:hover{
    background-color: #66cdaa;
  }
}
</style>
