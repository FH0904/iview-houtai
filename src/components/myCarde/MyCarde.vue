<template>
  <div class="MyCarde">
    <Card>
      <div style="text-align:center">
        <Icon :type="type" size="32" :color="color"/>
        <div style="margin-top: 8px;">{{title}}</div>
      </div>
    </Card>
  </div>
</template>

<script>
  export default {
    name: "MyCarde",
    props:['type','color','title'],
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .ivu-card-body {
    padding: 12px !important;
    box-sizing: border-box;
    width: 100%;
  }
</style>