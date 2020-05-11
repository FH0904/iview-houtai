<template>
  <div class="Home">
    <Breadcrumb style="margin-bottom: 20px;">
      <BreadcrumbItem>后台管理</BreadcrumbItem>
      <BreadcrumbItem>主页</BreadcrumbItem>
    </Breadcrumb>
    <Row>
      <Col :xs="24" :sm="12" :md="12" :lg="12" :xl="6" style="padding-left: 12px; padding-right: 12px;margin-bottom: 16px;">
        <my-cardy tag-color="green" nums="280万" title="访问量" tag-name="日" dec-title="总访问量">
          <div slot="content">
          <span style="font-size: 30px">25,848</span>
          <div  style="display:flex;flex-wrap: wrap; width: 100%; height: 42px;padding-top: 8px;">
            <div style="margin-right: 16px">
              <span>日同比12.5%</span>
              <Icon type="md-arrow-dropup" color="#ed4014"/>
            </div>
            <div>
              <span>日同比12.5%</span>
              <Icon type="md-arrow-dropup" color="#ed4014"/>
            </div>
          </div>
          </div>
        </my-cardy>
      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12" :xl="6" style="padding-left: 12px; padding-right: 12px;margin-bottom: 16px;">
        <my-cardy tag-color="blue" nums="68万" title="销售额" tag-name="月" dec-title="总销售额">
          <div slot="content">
            <span style="font-size: 30px">¥12,000</span>
            <div  style=" width: 100%; height: 42px;padding-top: 8px;">
              <Progress :percent="25" :hide-info="true"/>
            </div>
          </div>
        </my-cardy>
      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12" :xl="6" style="padding-left: 12px; padding-right: 12px;margin-bottom: 16px;">
        <my-cardy tag-color="red" nums="60%" title="订单量" tag-name="周" dec-title="转化率">
          <div slot="content">
            <span style="font-size: 30px">25,848</span>
            <div style="padding-top: 8px;display: flex;justify-content: center;align-items: center">
              <mini-charts></mini-charts>
            </div>
          </div>
        </my-cardy>
      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12" :xl="6" style="padding-left: 12px; padding-right: 12px;margin-bottom: 16px;">
        <my-cardy tag-color="red" nums="10800" title="新增用户" tag-name="增" dec-title="总用户">
          <div slot="content">
            <span style="font-size: 30px">25,848</span>
            <div style="padding-top: 8px">
              <Avatar style="background-color: #87d068" icon="ios-person" />
              <Avatar style="background-color: #87d068;margin-left: -8px;" icon="ios-person" />
              <Avatar style="background-color: #87d068;margin-left: -8px;" icon="ios-person" />
              <Avatar style="background-color: #87d068;margin-left: -8px;" icon="ios-person" />
              <Avatar style="background-color: #87d068;margin-left: -8px;" icon="ios-person" />
            </div>
          </div>
        </my-cardy>
      </Col>
    </Row>
    <Row>
      <Col :xs="8" :sm="8" :md="8" :lg="4" :xl="3" style="padding-left: 12px;padding-right: 12px;margin-bottom: 16px;">
        <my-carde color="rgb(105, 192, 255)" type="md-people" title="用户"></my-carde>
      </Col>
      <Col :xs="8" :sm="8" :md="8" :lg="4" :xl="3" style="padding-left: 12px;padding-right: 12px;margin-bottom: 16px;">
        <my-carde color="rgb(149, 222, 100)" type="md-podium" title="分析"></my-carde>
      </Col>
      <Col :xs="8" :sm="8" :md="8" :lg="4" :xl="3" style="padding-left: 12px;padding-right: 12px;margin-bottom: 16px;">
        <my-carde color="rgb(255, 156, 110)" type="md-cart" title="商品"></my-carde>
      </Col>
      <Col :xs="8" :sm="8" :md="8" :lg="4" :xl="3" style="padding-left: 12px;padding-right: 12px;margin-bottom: 16px;">
        <my-carde color="rgb(179, 127, 235)" type="md-clipboard" title="订单"></my-carde>
      </Col>
      <Col :xs="8" :sm="8" :md="8" :lg="4" :xl="3" style="padding-left: 12px;padding-right: 12px;margin-bottom: 16px;">
        <my-carde color="rgb(255, 214, 102)" type="md-card" title="票据"></my-carde>
      </Col>
      <Col :xs="8" :sm="8" :md="8" :lg="4" :xl="3" style="padding-left: 12px;padding-right: 12px;margin-bottom: 16px;">
        <my-carde color="rgb(92, 219, 211)" type="md-mail" title="消息"></my-carde>
      </Col>
      <Col :xs="8" :sm="8" :md="8" :lg="4" :xl="3" style="padding-left: 12px;padding-right: 12px;margin-bottom: 16px;">
        <my-carde color="rgb(255, 133, 192)" type="md-pricetags" title="标签"></my-carde>
      </Col>
      <Col :xs="8" :sm="8" :md="8" :lg="4" :xl="3" style="padding-left: 12px;padding-right: 12px;margin-bottom: 16px;">
        <my-carde color="rgb(255, 192, 105)" type="md-switch" title="配置"></my-carde>
      </Col>
    </Row>
  </div>
</template>

<script>

import MiniCharts from '../../components/miniCharts/MiniCharts'
  import MyCardy from "../../components/myCardy/myCardy";
import MyCarde from "../../components/myCarde/MyCarde";
  export default {
    name: "Home",
    components: {MyCarde, MyCardy,MiniCharts},
    data() {
      return {}
    },
    created() {

    }
  }
</script>

<style>
  .Home {
    padding: 20px;
  }
  .ivu-menu-submenu:hover{
    border-color: #ffffff !important;
  }
  .ivu-menu-submenu{
    border-color: #ffffff !important;
  }
</style>