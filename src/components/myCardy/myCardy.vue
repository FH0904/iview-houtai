<template>
  <div class="myCardy">
    <Card>
      <p slot="title">{{title}}</p>
      <div class="tag">
        <Tag :color="tagColor">{{tagName}}</Tag>
      </div>

      <div style="width: 100%;">
        <slot name="content"></slot>
        <Divider style="margin: 8px 0;"/>
        <Row>
          <Col span="12">{{decTitle}}</Col>
          <Col span="12" style="text-align: right">{{nums}}</Col>
        </Row>
      </div>
    </Card>
  </div>
</template>

<script>
  export default {
    name: "myCardy",
    props:['title','tagColor', 'tagName','decTitle','nums'],
    data() {
      return {}
    }
  }
</script>

<style>
  .tag {
    position: absolute;
    right: 16px;
    top: 14px;
  }

  .ivu-card-body {
    padding: 12px !important;
    box-sizing: border-box;
    width: 100%;
  }
</style>