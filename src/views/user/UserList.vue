<template>
  <div class="userList">
    <Breadcrumb style="margin-bottom: 20px;">
      <BreadcrumbItem>后台管理</BreadcrumbItem>
      <BreadcrumbItem>用户列表</BreadcrumbItem>
    </Breadcrumb>
    <Table border ref="selection" :columns="columns4" :data="data1" :loading="isLoading"></Table>
    <div style="display:flex;justify-content: center;margin-top: 30px">
      <Page :total="100" @on-change="onChange"/>
    </div>
  </div>
</template>

<script>
  import { getGoods } from "network/homerequest"
    export default {
      data () {
        return {
          columns4: [
            {
              type: 'selection',
              width: 60,
              align: 'center',

            },
            {
              title: 'id',
              key: 'id',
              width: 60,
            },
            {
              title: 'Action',
              key: 'action',
              width: 150,
              align: 'center',
              render: (h, params) => {
                console.log(params);
                return h('div', [
                  h('img', {
                    attrs: {
                      src: params.row.picture
                    },
                    'class': {
                      img: true,
                    },
                  }, )
                ]);
              }
            },
            {
              title: '价格',
              key: 'price',
              width: 150,
            },
            {
              title: '原价',
              key: 'original_price',
              width: 150,
            },
            {
              title: '标题',
              key: 'title'
            },
            {
              title: 'Action',
              key: 'action',
              width: 150,
              align: 'center',
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        this.remove(params.index)
                        console.log(params);
                      }
                    }
                  }, 'Delete')
                ]);
              }
            }
          ],
          data1: [],
          isLoading:false
        }
      },
      methods: {
        async getGoods(page){
         let data = await getGoods(page)
          console.log(data);
          // this.data1 = data.data.data
          setTimeout(()=>{
            this.isLoading = false
          },500)
        },
        onChange(page){
          this.isLoading = true
          this.getGoods(page)
        },
        remove (index) {
          this.data1.splice(index, 1);
        }
      },
      created() {
        this.getGoods()
      }
    }
</script>

<style >
  .userList{
    box-sizing: border-box;
    padding: 20px;
  }
  .img{
    width: 50px;
    height: 50px;
  }
</style>