<template>
  <div class="MiniCharts">
    <ve-line :yAxis="yAxis" height="34px" width="358px" :legend-visible="false" :data="chartData" :settings="chartSettings"></ve-line>
  </div>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        area: true
      }
      return {
        chartData: {
          columns: ['日期', '销量'],
          rows: [
            { '日期': 'Mon', '销量': 40},
            { '日期': 'Tue', '销量': 50},
            { '日期': 'Wed', '销量': 80},
            { '日期': 'Thu', '销量': 100},
            { '日期': 'Fri', '销量': 70},
            { '日期': 'Sat', '销量': 30},
            { '日期': 'sun', '销量': 30}
          ]
        },
        yAxis:[
          { // 纵轴标尺固定
            type : 'value',
            scale : true,
            max : 200,
            min : -1,
            splitNumber : 1,
            // boundaryGap : [ 0.2, 0.2 ]
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>