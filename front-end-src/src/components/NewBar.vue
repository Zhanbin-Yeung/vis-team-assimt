<template>
  <div id="myecharts" ref="demoh"></div>
</template>
  
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    let myChart = echarts.init(this.$refs.demoh);
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}'
      },
      color: [
        "#FDF0F0",
        "#F1B4BB",
        "#1F4172",
        "#132043",
        "#3F1D38",
        "#4D3C77",
        "#A2678A",
        "#E19898",
        "#4477CE",
        "#8CABFF",
        "#4682A9",
        "#749BC2",
        "#91C8E4"
      ],
      xAxis: [
        {
          type: 'category',
          axisLabel: {
            color: '#fff'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true
          },
          z: 10,
          data: ['Adventure', 'RPG', 'Platform', 'Shooter', 'Indie',
            'Puzzle', 'Strategy', 'Brawler', 'Simulator', 'Turn Based Strategy',
            'Visual Novel', 'Arcade', 'Tactical', 'Fighting', 'Point-and-Click',
            'Racing', 'Sport', 'Music', 'Card & Board Game', 'Real Time Strategy',
            'Quiz/Trivia', 'MOBA', 'Pinball', 'Strategy'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '每种类型的游戏数量',
          min: 0,
          max: 1010,
          interval: 50,
          axisLabel: {
            formatter: '{value}'
          }
        },

      ],
      series: [
        {
          name: '每种类型的游戏数量',
          type: 'bar',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#FFBABA' },
              { offset: 0.5, color: '#C85C8E' },
              { offset: 1, color: '#C85C8E' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#9D3C72' },
                { offset: 0.7, color: '#9D3C72' },
                { offset: 1, color: '#FFBABA' }
              ])
            }
          },
          data: [
            1005, 422, 282, 270, 229, 163, 141, 119, 109, 99, 69, 50, 50,
            46, 43, 25, 18, 17, 13, 7, 4, 3, 1, 1
          ]
        },
        {
          type: 'pie',
          radius: [20, 180],
          center: ['50%', '40%'],
          roseType: 'radius',
          itemStyle: {
            borderRadius: 5,
          },
          label: {
            show: false
          },
          emphasis: {
            label: {
              show: true
            }
          },

          data: [
            { value: 3.58, name: 'Advanture' },
            { value: 3.75, name: 'RPG' },
            { value: 3.53, name: 'Platform' },
            { value: 3.59, name: 'Shooter' },
            { value: 2.6, name: 'Indie' },
            { value: 3.58, name: 'Puzzle' },
            { value: 3.0, name: 'Strategy' },
            { value: 3.76, name: 'Brawler' },
            { value: 3.76, name: 'Simulator' },
            { value: 3.8, name: 'Turn Based Strategy' },
            { value: 3.0, name: 'Visual Novel' },
            { value: 3.46, name: 'Arcade' },
            { value: 3.8, name: 'Tactical' },
            { value: 3.55, name: 'Fighting' },
            { value: 3.9, name: 'Point-and-Click' },
            { value: 3.64, name: 'Racing' },
            { value: 3.45, name: 'Sport' },
            { value: 3.2, name: 'Music' },
            { value: 3.66, name: 'Card & Board Game' },
            { value: 3.4, name: 'Real Time Strategy' },
            { value: 3.2, name: 'Quiz/Trivia' },
            { value: 2.7, name: 'MOBA' },
            { value: 2.9, name: 'Pinball' },
            { value: 3.8, name: 'Strategy' },
          ]
        },
        /*{
          name:'每种类型的平均评分',
          type: 'line',
          itemStyle:{
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#FFE382' },
                  { offset: 0.5, color: '#FFC47E' },
                  { offset: 1, color: '#FFC47E' }
              ])
          },
          emphasis: {
              itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#FFAD84' },
                  { offset: 0.7, color: '#FFAD84' },
                  { offset: 1, color: '#FFE382' }
                  ])
              }
          },
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function(value) {
              return value;
            }
          },
          data: [
            3.58, 3.75, 3.53, 3.59, 2.6, 3.58, 3.0, 3.76, 3.76, 3.8, 
            3.0, 3.46, 3.8, 3.55, 3.9, 3.64, 3.45, 3.2, 3.66, 3.4, 
            3.2, 2.7, 2.9, 3.8
          ]
        }*/
      ]
    };
    myChart.setOption(option)
  }
}
</script>
  
<style>
#myecharts {
  width: 700px;
  height: 600px;
  border: 2px solid red;
}
</style>