<template>
  <div ref="chart" style="width: 60vw; height: 80vh;"></div>
</template>

<script>
import * as echarts from 'echarts';
const teamGenreCount = {
  "('RPG', 'Adventure')": 7,
  "('RPG', 'Brawler')": 5,
  "('RPG', 'Indie')": 6,
  "('Brawler', 'Indie')": 4,
  "('Brawler', 'Adventure')": 5,
  "('Indie', 'Adventure')": 7,
  "('RPG', 'Turn Based Strategy')": 2,
  "('Indie', 'Turn Based Strategy')": 2,
  "('Turn Based Strategy', 'Adventure')": 2,
  "('Indie', 'Platform')": 5,
  "('Platform', 'Adventure')": 6,
  "('Simulator', 'Adventure')": 6,
  "('Indie', 'Strategy')": 6,
  "('Shooter', 'Platform')": 5,
  "('Shooter', 'Puzzle')": 3,
  "('Shooter', 'Adventure')": 6,
  "('Platform', 'Puzzle')": 4,
  "('Puzzle', 'Adventure')": 5,
  "('RPG', 'Simulator')": 4,
  "('Brawler', 'Simulator')": 2,
  "('RPG', 'Shooter')": 4,
  "('Music', 'Brawler')": 1,
  "('Music', 'Platform')": 2,
  "('Music', 'Adventure')": 4,
  "('Brawler', 'Platform')": 4,
  "('Shooter', 'Brawler')": 4,
  "('Shooter', 'Strategy')": 4,
  "('Brawler', 'Strategy')": 3,
  "('Strategy', 'Adventure')": 6,
  "('Platform', 'Fighting')": 1,
  "('Shooter', 'Indie')": 4,
  "('Shooter', 'Arcade')": 4,
  "('Indie', 'Arcade')": 5,
  "('Arcade', 'Platform')": 5,
  "('RPG', 'Visual Novel')": 2,
  "('Visual Novel', 'Simulator')": 2,
  "('Visual Novel', 'Adventure')": 3,
  "('Simulator', 'Indie')": 4,
  "('Simulator', 'Puzzle')": 3,
  "('Indie', 'Puzzle')": 5,
  "('RPG', 'Strategy')": 5,
  "('Simulator', 'Strategy')": 5,
  "('Shooter', 'Visual Novel')": 2,
  "('Visual Novel', 'Indie')": 3,
  "('Visual Novel', 'Platform')": 1,
  "('Card & Board Game', 'Indie')": 1,
  "('Card & Board Game', 'Strategy')": 1,
  "('Card & Board Game', 'Puzzle')": 2,
  "('Card & Board Game', 'Adventure')": 1,
  "('Strategy', 'Puzzle')": 3,
  "('RPG', 'Puzzle')": 4,
  "('RPG', 'Platform')": 5,
  "('Strategy', 'Platform')": 4,
  "('Tactical', 'Shooter')": 3,
  "('Tactical', 'Adventure')": 3,
  "('Tactical', 'RPG')": 3,
  "('Tactical', 'Strategy')": 3,
  "('Tactical', 'Turn Based Strategy')": 2,
  "('Strategy', 'Turn Based Strategy')": 2,
  "('Shooter', 'Racing')": 3,
  "('Racing', 'Adventure')": 3,
  "('Tactical', 'Simulator')": 2,
  "('Arcade', 'Racing')": 2,
  "('Visual Novel', 'Point-and-Click')": 3,
  "('Point-and-Click', 'Adventure')": 4,
  "('MOBA', 'RPG')": 0,
  "('MOBA', 'Strategy')": 0,
  "('Visual Novel', 'Puzzle')": 2,
  "('Puzzle', 'Point-and-Click')": 2,
  "('Arcade', 'Strategy')": 2,
  "('Arcade', 'Adventure')": 5,
  "('Brawler', 'Arcade')": 1,
  "('Indie', 'Racing')": 1,
  "('Indie', 'Sport')": 2,
  "('Racing', 'Sport')": 1,
  "('Simulator', 'Sport')": 2,
  "('Simulator', 'Point-and-Click')": 2,
  "('Indie', 'Point-and-Click')": 3,
  "('Tactical', 'Indie')": 1,
  "('Tactical', 'Puzzle')": 1,
  "('Tactical', 'Fighting')": 1,
  "('Shooter', 'Fighting')": 2,
  "('Indie', 'Fighting')": 2,
  "('Puzzle', 'Fighting')": 1,
  "('Tactical', 'Real Time Strategy')": 1,
  "('Real Time Strategy', 'Simulator')": 2,
  "('Real Time Strategy', 'Strategy')": 2,
  "('Real Time Strategy', 'Puzzle')": 0,
  "('Arcade', 'Puzzle')": 3,
  "('Strategy', 'Point-and-Click')": 1,
  "('Quiz/Trivia', 'Puzzle')": 0,
  "('RPG', 'Point-and-Click')": 3,
  "('Music', 'Indie')": 3,
  "('Tactical', 'Brawler')": 1,
  "('Brawler', 'Puzzle')": 2,
  "('Simulator', 'Turn Based Strategy')": 2,
  "('Simulator', 'Platform')": 2,
  "('Music', 'Arcade')": 2,
  "('Visual Novel', 'Fighting')": 0,
  "('RPG', 'Arcade')": 4,
  "('Music', 'Shooter')": 1,
  "('Shooter', 'Simulator')": 3,
  "('Shooter', 'Sport')": 2,
  "('Sport', 'Adventure')": 3,
  "('Card & Board Game', 'Simulator')": 1,
  "('Fighting', 'Adventure')": 4,
  "('Arcade', 'Fighting')": 2,
  "('RPG', 'Card & Board Game')": 1,
  "('Card & Board Game', 'Turn Based Strategy')": 1,
  "('Turn Based Strategy', 'Puzzle')": 1,
  "('Visual Novel', 'Strategy')": 2,
  "('Music', 'Simulator')": 0,
  "('RPG', 'Music')": 2,
  "('Music', 'Puzzle')": 3,
  "('Brawler', 'Fighting')": 2,
  "('Real Time Strategy', 'Adventure')": 1,
  "('Card & Board Game', 'Platform')": 0,
  "('Tactical', 'Visual Novel')": 2,
  "('Music', 'Racing')": 0,
  "('Music', 'Sport')": 0,
  "('Racing', 'Platform')": 2,
  "('Platform', 'Sport')": 1,
  "('Simulator', 'Arcade')": 0,
  "('Brawler', 'Racing')": 2,
  "('Simulator', 'Fighting')": 2,
  "('Strategy', 'Fighting')": 2,
  "('Simulator', 'Racing')": 1,
  "('Tactical', 'Arcade')": 0,
  "('RPG', 'Real Time Strategy')": 1,
  "('Turn Based Strategy', 'Point-and-Click')": 2,
  "('Strategy', 'Racing')": 1,
  "('Racing', 'Fighting')": 1,
  "('RPG', 'Sport')": 2,
  "('Brawler', 'Sport')": 2,
  "('Real Time Strategy', 'Indie')": 0,
  "('RPG', 'Fighting')": 2,
  "('Shooter', 'Point-and-Click')": 1,
  "('Indie', 'Quiz/Trivia')": 0,
  "('Strategy', 'Quiz/Trivia')": 0,
  "('Arcade', 'Pinball')": 0,
  "('Pinball', 'Adventure')": 0,
  "('Sport', 'Fighting')": 0
}

export default {
  data() {
    return {
      G1: [
       'Puzzle', 'Card & Board Game', 'Shooter', 'Simulator', 'Sport', 'Strategy', 'Quiz/Trivia', 'Turn Based Strategy', 'Brawler', 'Visual Novel', 'Fighting', 'Real Time Strategy', 'MOBA', 'Indie', 'Racing', 'Platform', 'Pick', 'Music', 'Adventuck', 'Adventure', 'Arcade', 'RPG', 'Tactical'
      ],
      G2: [
       'Puzzle', 'Card & Board Game', 'Shooter', 'Simulator', 'Sport', 'Strategy', 'Quiz/Trivia', 'Turn Based Strategy', 'Brawler', 'Visual Novel', 'Fighting', 'Real Time Strategy', 'MOBA', 'Indie', 'Racing', 'Platform', 'Pick', 'Music', 'Adventuck', 'Adventure', 'Arcade', 'RPG', 'Tactical'
      ],
    }
  },
  mounted() {
    this.prepareData();
    this.renderChart();
  },
  methods: {
    prepareData() {
      // 将team_genre_count.json的数据转换为热力图需要的格式
      this.chartData = Object.keys(teamGenreCount).map((key) => {
        const [genre1, genre2] = key.replace(/['()]/g, '').split(', ');
        return [genre1, genre2, teamGenreCount[key]];
      });
    },
    renderChart() {
      const chartDom = this.$refs.chart;
      const myChart = echarts.init(chartDom, 'dark');
      const option = {
        backgroundColor: '',
        tooltip: {
          position: 'top',
          formatter: function (params) {
            const xAxis = '"' + params.value[0] + '"';
            const yAxis = '"' + params.value[1] + '"';
            return xAxis + ' ' + yAxis + ': ' + params.value[2];
          }
        },
        grid: {
          height: '50%',
          top: '20%'
        },
        xAxis: {
          type: 'category',
          data: this.G1,
          splitArea: {
            show: true
          },
          axisLabel: {
            interval: 0,//如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推。
            rotate: '315',// 刻度标签旋转的角度,在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。
          },
        },
        yAxis: {
          type: 'category',
          data: this.G2,
          splitArea: {
            show: true
          }
        },
        visualMap: {
          min: 0,
          max: Math.max(...Object.values(teamGenreCount)),
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '15%',
          inRange: {
            color: ['#00FFFF', '#0000FF'] // 青色到蓝色的渐变
          }
        },
        series: [
          {
            name: 'Team Num',
            type: 'heatmap',
            data: this.chartData,
            label: {
              show: true,
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 1)'
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>
