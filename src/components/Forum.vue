<template>
  <section>
    <ul v-for="(item,index) in links"
    :key="index">
      <h1>{{item.title}}<small>{{item.smallertitle}}</small></h1>
      <h3>{{item.Content}}</h3>
      <li><div class="pic"><img :src="item.src_one"></div></li>
      <li><div class="pic"><img :src="item.src_two"></div></li>
      <li><div class="pic"><img :src="item.src_three"></div></li>
      <li><div class="pic" ><img :src="item.src_four" ></div></li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'Forum',
  data () {
    return {
      links: [{
        title: '每周日常活动',
        smallertitle: '例会介绍',
        Content: '我们会顶起组织活动，活动形式不唯一，多以演讲形式进行，我们讲你关心的事，讲你困惑的问题，讲任何能帮助你的话题，活动中，我们可以敞开心扉，自由谈论，在同龄人的你我他中，把压力释放，将烦恼清空。',
        src_one: '/static/images/1101.jpg',
        src_two: '/static/images/1102.jpg',
        src_three: '/static/images/1103.jpg',
        src_four: '/static/images/1104.jpg'
      },
      {
        title: '大型活动',
        smallertitle: '活动介绍',
        Content: '525心理健康节以及银杏节，我们作为学院心理辅导站会承办一次校级活动，旨在让大家在忙碌的校园生活中停下来，与我们一起完成一些小游戏，小活动，放松心情，舒缓压力。',
        src_one: '/static/images/2201.jpg',
        src_two: '/static/images/2202.jpg',
        src_three: '/static/images/2203.jpg',
        src_four: '/static/images/2204.jpg'
      },
      {
        title: '团队氛围建设',
        smallertitle: '活动介绍',
        Content: '团队氛围建设中，我们有两周一次的两人啥等桌游活动，同时每学期会不定期的进行聚餐，以此利用各种活动，增强小伙伴们的归属感，让大家在成长吧中找寻到自己的挚友',
        src_one: '/static/images/3301.jpg',
        src_two: '/static/images/3302.jpg',
        src_three: '/static/images/3303.jpg',
        src_four: '/static/images/3304.jpg'
      }]
    }
  }
}
</script>
<style lang="less" scoped>
h1{
  margin:20px;
  font-size: 200%;
  width: 1050px;
}
h3{
  width:1050px;
  margin: 20px;
}
small{
  color: grey;
  border-left: 2px solid #cccccc;
  margin-left:10px;
}
ul{
  list-style-type: none;
  padding: 0;
  margin-left:15%;
  li{
    display: inline-block;
    padding:5px;
    border: 1px double gray;
    border-radius: 10px;
    margin: 10px;
  }
}
img{
height: 100%;
width: auto;
left:50%;
position: relative;
-webkit-transform: translateX(-50%);
-ms-transform: translateX(-50%);
-moz-transform: translateX(-50%);
}
.pic{
width: 500px;
height: 350px;
overflow: hidden;
position: relative;
opacity: .35;
}
.pic:hover{
  opacity: 1;
  transition: .5s;
}
</style>
