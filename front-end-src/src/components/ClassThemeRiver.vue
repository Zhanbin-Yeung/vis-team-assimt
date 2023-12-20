

<template>
	<div class="charts">
		<div id="ThemeRiverChart" ref="refChart"></div>

		<ClassPie :L="brushL" :R="brushR"  @clickCls="(name)=>{clickedCls=name, showDialog=true}"></ClassPie>
	</div>

	<el-dialog v-model="showDialog" style="padding: 0%; background-color: rgba(52, 52, 52, 0.1)" draggable :shadow="false" center>
		<ClassSummaryCloud :cls="clickedCls" v-if="showDialog"></ClassSummaryCloud>
	</el-dialog>
</template>

<style scoped>
#ThemeRiverChart {
	width: 60vw;
	min-height: 80vh;
	margin: 0%;
	/* display: inline-block; */
}

.charts {
	display: flex;
}
</style>

<script setup lang="ts">

import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
import ClassPie from './ClassPie.vue';

import ClassSummaryCloud from './ClassSummaryCloud.vue';

// 这个ref与上方html中同名，会被自动地指向
const refChart = ref(null);

const clickedCls = ref("Adventure")

const showDialog = ref(false)

let brushL = ref(0)
let brushR = ref(100)

var option: echarts.EChartsOption;

// From https://github.com/jsundram/streamgraph.js/blob/master/examples/data/lastfm.js
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

let data: [number, number, string][] = [];

for (let i = 0; i < rawData.length; i++) {
	for (let j = 0; j < rawData[i].length; j++) {
		let label = labels[i];
		data.push([j + 1980, rawData[i][j], label]);
	}
}

option = {
	backgroundColor: '',
	tooltip: {

		trigger: 'axis',
		textStyle: {
			fontSize: 10 // 字体大小
		},
		axisPointer: {
			type: 'line',
			lineStyle: {
				color: 'rgba(0,0,0,0.2)',
				width: 1,
				type: 'solid'
			}
		}
	},

	singleAxis: {
		max: 'dataMax',
		min: 'dataMin'
	},

	series: [
		{
			type: 'themeRiver',
			data: data,
			emphasis: {
				itemStyle: {
					shadowBlur: 20,
					shadowColor: 'rgba(0, 0, 0, 0.8)'
				}
			},
			label: {
				show: false,
			},
		}
	],
	dataZoom: {
		type: 'slider',
		// zoomLock: true,
		// zoomOnMouseWheel: true,
		// selectedDataBackground: '#fff'
	}
};

interface ZoomParams {
	start: number,
	end: number,
}

function myChartInit() {
	// 在这里初始化echarts
	var myChart = echarts.init(refChart.value, 'dark');
	option && myChart.setOption(option);
	myChart.on('dataZoom', (param) => {
		console.log(param)
		let range = param as ZoomParams
		brushL.value = range.start
		brushR.value = range.end
	})
}

onMounted(
	() => {
		myChartInit()
	}
)


</script>
