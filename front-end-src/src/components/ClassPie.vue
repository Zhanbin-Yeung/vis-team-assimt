<script setup lang="ts">

import * as echarts from 'echarts';
import { ref, onMounted, watch, computed } from 'vue'

const refChart = ref(null)

const props = defineProps({
    L: Number,
    R: Number
})

const emit = defineEmits(['clickCls'])


const pieRange = computed(() => {
    return [props.L, props.R]
})

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
]

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
]

interface PieData {
    name: string,
    value: number
}

function processData(l: number, r: number) {
    let data: Array<PieData> = []
    rawData.forEach((item, id) => {
        let len = item.length
        let content = item.slice(Math.floor(len * 0.01 * l), Math.ceil(len * 0.01 * r))
        let value = 0
        for (let val of content) {
            value += val
        }
        data.push({
            value,
            name: labels[id]
        })
    })
    return data
}

let option: echarts.EChartsOption = {
    backgroundColor: '',
    tooltip: {
        trigger: 'item'
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 0,
        top: 0,
        bottom: 0,
        textStyle:{
            fontSize: 10
        }
    },
    series: [
        {
            name: '游戏类别',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['36%', '50%'],
            avoidLabelOverlap: false,
            
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold',
                    shadowBlur: true
                },
                itemStyle: {
					shadowBlur: 20,
					shadowColor: 'rgba(0, 0, 0, 0.8)'
				}
            },
            labelLine: {
                show: false
            },
            data: processData(0, 100)
        }
    ]
};

let myChart: echarts.ECharts

function myChartInit() {
    // 在这里初始化echarts
    myChart = echarts.init(refChart.value, 'dark');
    option && myChart.setOption(option);

    myChart.on('click', (params: {name: string}) => {
        console.log(params.name)
        emit('clickCls', params.name)
    })
}


watch(pieRange, (oldValue, newValue) => {
    let optionSeries = option.series as echarts.SeriesOption[]
    optionSeries[0].data = processData(newValue[0]!, newValue[1]!)
    myChart.setOption(option)

    
})

onMounted(() => {
    myChartInit()
})


</script>


<template>
    <div id="ClassPieChart" ref="refChart">

    </div>
</template>

<style scoped>
#ClassPieChart {
    width: 40vw;
    min-height: 80vh;
    margin: 0%;
}

</style>
