<template>
  <div>
    <ul class="teacher">
      <h1>{{teacher}}</h1>
      <li v-for="(item,index) in linkTeas"
    :key="index" >
        <div class="person">
          <div class="pic">
            <img :src="item.personPic">
          </div>
          <div class="name">
            <p>{{item.name}}</p>
          </div>
        </div>
      </li>
    </ul>
    <ul class="student">
      <h1>{{student}}</h1>
      <li v-for="(item,index) in linkStus"
    :key="index" >
        <div class="person">
          <div class="pic">
            <img :src="item.personPic">
          </div>
          <div class="name">
            <p>{{item.name}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Information',
  data () {
    return {
      teacher: '指 导 老 师',
      student: '学 生 成 员',
      linkTeas: [{
        personPic: '/static/images/一寸.jpg',
        name: '张三'
      },
      {
        personPic: '/static/images/一寸.jpg',
        name: '张三'
      }],
      linkStus: [{
        personPic: '/static/images/一寸.jpg',
        name: '张三'
      },
      {
        personPic: '/static/images/一寸.jpg',
        name: '张三'
      },
      {
        personPic: '/static/images/一寸.jpg',
        name: '张三'
      },
      {
        personPic: '/static/images/一寸.jpg',
        name: '张三'
      }]
    }
  }
}
</script>
<style lang="less" scoped>
  img{
        width: 295*.5px;
        height: 413*.5px;
      }
  h1{
    text-align: center;
  }
  .teacher{
    list-style-type: none;
    margin: 0 12%;
    padding: 0;
    li{
      width: 200px;
      display: inline-block;
      margin-left: 22%;
    }
    .pic{
      width: 295*0.5px;
      height: 413*0.5px;
    }
    .name{
      width: 295*.5px;
      font-size: 120%;
      font-weight: bold;
      text-align: center;
      p{
        margin: 0;
      }
    }
  }
  .student{
    list-style-type: none;
    margin: 0 12%;
    margin-bottom: 5%;
    padding: 0;
    li{
      width: 200px;
      display: inline-block;
      margin-left:7%;
    }
    .pic{
      width: 295*0.5px;
      height: 413*0.5px;
    }
    .name{
      width: 295*.5px;
      font-size: 120%;
      font-weight: bold;
      text-align: center;
      p{
        margin: 0;
      }
    }
  }
</style>
