<template>
  <div class="MyCard">
    <Card style="display:flex; width:200px;height: 110px;" :padding="0">
      <div style="display:flex;justify-content:center;font-size:30px;color:#ffffff;align-items:center;width: 70px;height: 108px;" :style={backgroundColor:color}>
        <Icon type="md-person-add" />
      </div>
      <div style="flex: 1;display:flex;align-items: center;flex-direction: column">
        <div class="nums" style="font-size: 50px">{{myNums}}</div>
        <div class="title">{{title}}</div>
      </div>
    </Card>
  </div>
</template>

<script>
  export default {
    name: "MyCard",
    props:['title','nums','color'],
    data() {
      return {
        myNums:0
      }
    },
    mounted() {

        let timer =  setInterval(()=>{
          if (this.myNums < this.nums) return  this.myNums++
          clearInterval(timer)
        },1)

    }
  }
</script>

<style >
  .ivu-card-body{
    display: flex;
    width: 200px;
  }
</style>