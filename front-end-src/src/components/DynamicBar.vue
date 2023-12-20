<template>
  <div id="myecharts" ref="demoh"></div>
</template>
  
<script>
import * as echarts from "echarts";

export default {
  mounted() {
    let myChart = echarts.init(this.$refs.demoh, 'dark');
    let rawData = [
      [0, 0, 1, 3, 3, 1, 2, 5, 5, 4, 3, 7, 6, 9, 9, 10, 9, 9, 18, 17, 14, 27, 27, 19, 24, 23, 20, 41, 40, 33, 59, 41, 48, 52, 54, 57, 73, 56, 68, 83, 29, 1, 1],
      [1, 1, 0, 1, 0, 0, 2, 0, 2, 1, 1, 0, 0, 1, 1, 1, 2, 0, 2, 1, 2, 0, 0, 0, 1, 0, 0, 3, 0, 3, 1, 7, 3, 6, 4, 4, 8, 1, 5, 7, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 7, 2, 6, 7, 6, 5, 6, 9, 12, 4, 8, 3, 5, 8, 16, 10, 11, 22, 6, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 0, 0, 2, 0, 0, 4, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 2, 0, 2, 2, 4, 0, 1, 0, 0, 1, 3, 1, 3, 3, 0, 1, 3, 4, 2, 5, 5, 4, 3, 5, 3, 2, 7, 4, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 5, 0, 0, 2, 3, 2, 6, 3, 11, 11, 16, 19, 20, 23, 35, 26, 19, 30, 44, 4, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 2, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 2, 1, 5, 2, 3, 6, 3, 6, 7, 6, 9, 4, 2, 5, 4, 8, 6, 6, 8, 10, 5, 22, 11, 7, 12, 11, 12, 13, 11, 6, 6, 24, 19, 12, 12, 14, 21, 7, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 1, 2, 2, 3, 2, 3, 4, 3, 3, 2, 0, 1, 2, 5, 6, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 3, 2, 3, 0, 0, 0, 0, 2, 1, 1, 3, 2, 8, 2, 1, 3, 7, 3, 7, 5, 4, 6, 8, 3, 12, 7, 6, 10, 6, 14, 11, 4, 16, 11, 3, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 3, 2, 1, 4, 3, 6, 8, 5, 9, 7, 4, 8, 7, 12, 5, 9, 11, 12, 13, 23, 18, 20, 13, 18, 36, 34, 23, 27, 32, 33, 40, 52, 21, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 0, 3, 2, 2, 1, 1, 1, 0, 5, 0, 3, 2, 0, 0, 2, 3, 0, 1, 0, 3, 0, 3, 3, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 5, 2, 3, 2, 5, 3, 4, 4, 5, 5, 5, 10, 12, 9, 19, 9, 11, 22, 14, 15, 18, 21, 12, 21, 19, 9, 15, 19, 19, 24, 7, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 4, 0, 0, 2, 0, 5, 2, 4, 3, 5, 4, 8, 6, 9, 10, 13, 1, 11, 7, 5, 7, 17, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 5, 1, 1, 0, 2, 0, 2, 1, 0, 3, 0, 0, 0, 1, 2, 0, 3, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 4, 0, 1, 1, 3, 1, 2, 0, 1, 3, 6, 7, 5, 6, 10, 10, 11, 16, 6, 8, 9, 3, 8, 13, 4, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 1, 0, 2, 5, 2, 0, 1, 2, 2, 0, 3, 0, 1, 2, 3, 3, 1, 3, 2, 3, 2, 5, 3, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 3, 4, 1, 2, 1, 1, 1, 0, 7, 2, 2, 1, 2, 2, 6, 2, 3, 1, 3, 7, 7, 0, 4, 9, 7, 8, 9, 3, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 3, 2, 3, 4, 9, 2, 1, 7, 1, 2, 2, 8, 5, 2, 0, 2, 2, 10, 1, 0, 0],
    ];

    let labels = [
      "Adventure",
      "Arcade",
      "Brawler",
      "Card&BoardGame",
      "Fighting",
      "Indie",
      "MOBA",
      "Music",
      "Pinball",
      "Platform",
      "Point-and-Click",
      "Puzzle",
      "Quiz/Trivia",
      "RPG",
      "Racing",
      "RealTimeStrategy",
      "Shooter",
      "Simulator",
      "Sport",
      "Strategy",
      "Tactical",
      "TurnBasedStrategy",
      "VisualNovel",
    ];
    /*const years = Array.from({ length: rawData[0].length }, (_, i) => i + 1980);
    let startIndex = 0;
      let startYear = years[startIndex];*/
    let colors = labels.map(() => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`);
    // Initial data for the chart
    let data = rawData.map(row => row[0]); // Take the data for the initial year

    let option = {
      backgroundColor: '',
      xAxis: {
        max: "dataMax",
      },
      yAxis: {
        type: "category",
        data: labels,
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 9,
      },
      series: [
        {
          realtimeSort: true,
          name: "X",
          type: "bar",
          data: data,
          label: {
            show: true,
            position: "right",
            valueAnimation: true
          },
          //
          itemStyle: {
            color: function (params) {
              return colors[params.dataIndex];
            }
          }
        },
      ],
      animationDuration: 3000,
      animationDurationUpdate: 5000,
      animationEasing: "linear",
      animationEasingUpdate: "linear",
      /*graphic: {
          elements:[
              {
                  type: 'text',
                  right: 160,
                  bottom: 60,
                  style:{
                      text:startYear
                  },
                  z: 100
              }
          ]
      }*/
    };

    myChart.setOption(option);

    function run() {
      // Update data for the next year
      for (var i = 0; i < data.length; ++i) {
        data[i] = rawData[i].reduce((acc, value) => acc + value, 0);
      }

      myChart.setOption({
        series: [
          {
            type: "bar",
            data,
          },
        ],
      });
    }

    setTimeout(function () {
      run();
    }, 0);

    setInterval(function () {
      run();
    }, 5000);
  },
};
</script>
  
<style>
#myecharts {
  width: 60vw;
  height: 80vh;
}
</style>
  