<template>
  <div class="chart-container">
    <div>

      <!-- <select id="selectData" v-model="selectedData" @change="handleDataChange">
        <option value="data1">按日期</option>
        <option value="data2">按年份</option>

      </select> -->

      <el-switch v-model="isYear" size="large" active-text="年份" inactive-text="日期" @change="handleDataChange" />

    </div>


    <div id="IndicatorContainer">

      <div ref="chart" style="height: 80vh; width: 60vw;"></div>

      <div ref="radarChart" style="height: 80vh; width: 30vw;"></div>

    </div>

  </div>
</template>
  
<script>


import * as echarts from 'echarts';

// import {parse} from 'date-fns';
import Data from './static/IndicatorData0.json'
import Data1 from './static/IndicatorData1.json'

function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return `${year}-${month}-${day}`;
}

export default {
  data() {
    return {
      radarData: {
        indicator: [
          { name: 'Number of Reviews', max: 4.5 },
          { name: 'Plays', max: 35 },
          { name: 'Playing', max: 4 },
          { name: 'Backlogs', max: 9 },
          { name: 'Wishlist', max: 4.8 },
          { name: 'Rating', max: 5 }
        ],
        value: [0, 0, 0, 0, 0, 0]
      },
      isYear: false, // 存储选中的数据
      myChart: null // 定义 myChart 变量
    };
  },
  mounted() {
    this.loadCSVAndInitChart(); // 加载 json 文件并初始化图表
    this.renderRadarChart();


    // 监听折线图的鼠标移动事件
    this.myChart.on('mousemove', (params) => {
      if (params.componentType === 'series') {
        // 获取鼠标所在的数据索引
        let dataIndex = params.dataIndex;
        // 根据索引获取相应的数据
        let selectedData = this.selectedData[dataIndex];
        // 更新雷达图的数据
        this.updateRadarChartData(selectedData);
      }
    });
  },
  methods: {

    renderRadarChart() {
      console.log(this.radarData.value)
      const chartDom = this.$refs.radarChart;
      const myChart = echarts.init(chartDom, 'dark');
      const option = {

        tooltip: {},
        backgroundColor: '',
        radar: {
          indicator: this.radarData.indicator
        },
        series: [{
          type: 'radar',
          data: [
            {
              value: this.radarData.value,

            }
          ]
        }]

      };

      myChart.setOption(option);
    },
    handleDataChange() {
      this.loadCSVAndInitChart();
    },
    updateRadarChartData(selectedData) {
      // 更新雷达图的数据
      this.radarData.value = [
        selectedData.y,
        selectedData.z,
        selectedData.w,
        selectedData.u,
        selectedData.v,
        selectedData.i
      ];
      // 重新渲染雷达图
      this.renderRadarChart();
    },
    loadCSVAndInitChart() {

      var chartDom = this.$refs.chart;

      var myChart = echarts.init(chartDom, 'dark');
      this.myChart = myChart

      let rawData = []
      if (this.isYear === false) {
        rawData = Data;
      } else {
        rawData = Data1;
      }


      // 处理解析后的数据，转换成 echarts 所需的格式
      let data = this.formatDataForECharts(rawData).flat();
      let data1 = this.formatDataForECharts1(rawData).flat();
      let data2 = this.formatDataForECharts2(rawData).flat();
      let data3 = this.formatDataForECharts3(rawData).flat();
      let data4 = this.formatDataForECharts4(rawData).flat();
      let data5 = this.formatDataForECharts5(rawData).flat();
      let data6 = this.formatDataForECharts6(rawData).flat();
      let data7 = this.formatDataForECharts7(rawData);
      if (this.selectedData === 'data1') {
        data7 = this.formatDataForECharts7(rawData);
      } else if (this.selectedData === 'data2') {
        data7 = this.formatDataForECharts8(rawData);
      }

      this.selectedData = rawData;

      let option = {
        // title: {
        //   text: 'Stacked Line'
        // },
        backgroundColor: '',
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Number of Reviews', 'Plays', 'Playing', 'Backlogs', 'Wishlist', 'Rating']
        },
        // grid: {
        //   left: '3%',
        //   right: '4%',
        //   // bottom: '3%',
        //   top: '45%',
        //   containLabel: true
        // },

        xAxis: {


          boundaryGap: false,
          data: data7, // 使用 data7 作为 x 轴数据
          // axisLabel: {
          //   formatter: function (value, index) {
          //     // 将日期字符串和 data 数组中的数据对应起来
          //     return value + '\n' + data[index]; // 修改这里，根据实际需求拼接 x 轴显示的内容
          //   }
          // }
        },
        yAxis: {
          type: 'value'
        },
        toolbox: {
          right: 10,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: [
          {
            startValue: '2003-1-1',
            end: 3
          },
          {
            type: 'inside'
          }
        ],


        series: [
          {
            name: 'Number of Reviews',
            type: 'bar',
            stack: 'Total',
            data: data1
          },
          {
            name: 'Plays',
            type: 'line',
            stack: 'Total',
            data: data2
          },
          {
            name: 'Playing',
            type: 'line',
            stack: 'Total',
            data: data3
          },
          {
            name: 'Backlogs',
            type: 'line',
            stack: 'Total',
            data: data4
          },
          {
            name: 'Wishlist',
            type: 'line',
            stack: 'Total',
            data: data5
          },
          {
            name: 'Rating',
            type: 'line',
            stack: 'Total',
            data: data6
          },

        ]
      };


      option && myChart.setOption(option); // 设置图表配置并渲染图表


    },

    formatDataForECharts(rawData) {
      let Data2 = rawData.map(row => [(row.x)]);
      return Data2;
    },
    formatDataForECharts1(rawData) {
      let Data2 = rawData.map(row => [parseFloat(row.y)]);
      return Data2;
    },
    formatDataForECharts2(rawData) {
      let Data2 = rawData.map(row => [parseFloat(row.z)]);
      return Data2;
    },
    formatDataForECharts3(rawData) {
      let Data2 = rawData.map(row => [parseFloat(row.w)]);
      return Data2;
    },
    formatDataForECharts4(rawData) {
      let Data2 = rawData.map(row => [parseFloat(row.u)]);
      return Data2;
    },
    formatDataForECharts5(rawData) {
      let Data2 = rawData.map(row => [parseFloat(row.v)]);
      return Data2;
    },
    formatDataForECharts6(rawData) {
      let Data2 = rawData.map(row => [parseFloat(row.i)]);
      return Data2;
    },

    formatDataForECharts7(rawData) {
      let Data2 = rawData.map(row => {
        let dateStr = row.t;
        // let dateObj = parse(dateStr, 'yyyy/M/d', new Date());
        let dateObj = new Date(dateStr)
        console.log(dateObj)
        return formatDate(dateObj); // 返回格式化后的日期字符串
      });
      return Data2;
    },
    formatDataForECharts8(rawData) {
      let Data2 = rawData.map(row => [parseFloat(row.t)]);
      return Data2;
    },
  }
}
</script>
  
<style scoped>
.chart-container {
  position: relative;
}

#chart {
  position: absolute;
  top: 0;
  left: 0;
}

#IndicatorContainer {
  display: flex;
}
</style>
  