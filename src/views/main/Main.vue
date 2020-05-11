<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu :active-name="activeName" theme="dark" width="auto"
              :class="menuitemClasses" :accordion="true" @on-select="onSelect"
              :open-names="open_names" ref="menu"
              @on-open-change="isCollapsed=false">
          <div class="layout-logo-left">
            <img src="../../assets/img/icon.svg" style="width: 32px;height: 32px;">
            <span style="font-size:20px;color:#ffffff; width: 100px;font-weight: 600;">vue</span>
          </div>
          <MenuItem name="0" to="/main/home">
            <Icon type="ios-navigate"></Icon>
            <span>后台管理</span>
          </MenuItem>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <span>用户管理</span>
            </template>
            <MenuItem name="1-1" to="/main/userList">用户信息</MenuItem>
            <MenuItem name="1-2">Option 2</MenuItem>
            <MenuItem name="1-3">Option 3</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              <span>Item 2</span>
            </template>
            <MenuItem name="2-1">Option 1</MenuItem>
            <MenuItem name="2-2">Option 2</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu"
                size="24"></Icon>
          <div>
            <Menu mode="horizontal" theme="light" active-name="1">
              <Submenu name="3">
                <template slot="title">
                  <Avatar>USER</Avatar>
                  哈哈哈
                </template>
                <MenuItem name="3-1">修改个人信息</MenuItem>
                <MenuItem name="3-4" @click.native="toExit">退出</MenuItem>
              </Submenu>
              <Submenu name="4">
                <template slot="title">
                  <Icon type="ios-globe-outline" size="20"/>
                  语言
                </template>
                <MenuItem name="4-1">简体中文</MenuItem>
                <MenuItem name="4-2">English</MenuItem>
              </Submenu>
            </Menu>
          </div>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        isCollapsed: false,
        default_collapsed: false,
        open_names: [],
        activeName: ''
      }
    },
    watch: {
      isCollapsed() {

        if (this.isCollapsed) {
          this.open_names = []
          this.$nextTick(() => {
            this.$refs.menu.updateOpened()
          })
        }
      }
    },
    computed: {
      menuitemClasses() {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      },
      rotateIcon() {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
    },
    methods: {
      collapsedSider() {
        this.$refs.side1.toggleCollapse();
      },
      onSelect(name) {
        this.isCollapsed = false
        if (name == 0) {
          this.open_names = []
          this.$nextTick(() => {
            this.$refs.menu.updateOpened()
          })
        }
      },
      toExit() {
        console.log(1);
        this.$Modal.confirm({
          title: '确定',
          content: '<p>确定退出？</p>',
          onOk: () => {
            sessionStorage.removeItem('token')
            this.$Message.info('退出成功！');
            this.$router.replace('/login')
          },
          onCancel: () => {
            this.$Message.info('已取消');
          }
        });
      }
    },
    created() {
      this.activeName = this.$route.meta.activeName
      this.open_names.push(this.$route.meta.activeName.split('-')[0])
    }
  }
</script>

<style>
  .layout {
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .ivu-layout-has-sider {
    height: 100vh;
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ivu-layout-sider {
    width: 256px !important;
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    border-radius: 3px;
    margin: 15px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu-icon {
    transition: all .3s;
  }

  .rotate-icon {
    transform: rotate(-90deg);
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px !important;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }

  .collapsed-menu .ivu-icon-ios-arrow-down {
    display: none;
  }

  .top, .bottom {
    text-align: center;
  }

  .center {
    width: 300px;
    margin: 10px auto;
    overflow: hidden;
  }

  .center-left {
    float: left;
  }

  .center-right {
    float: right;
  }
</style>