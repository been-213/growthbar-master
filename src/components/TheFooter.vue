<template>
  <footer>
    <div class="top">
      <div>{{name}}</div>
    </div>
    <div class="bottom">
      <ul>
        <li v-for="(item,index) in links"
        :key="index">{{item.name}}:{{item.content}}</li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'TheFooter',
  data () {
    return {
      name: '电子科技大学信息与软件工程学院心理辅导站成长吧',
      links: [{
        name: '官方QQ',
        content: '1958117153'
      },
      {
        name: '微信公众号',
        content: '软件成长吧'
      }]
    }
  }
}
</script>
<style lang="less" scoped>
footer{
text-align: center;
background-color: #8b8b8b;
padding:10px 0;
ul{
    list-style-type: none;
    margin:0;
    padding:0;
  }
}
</style>
