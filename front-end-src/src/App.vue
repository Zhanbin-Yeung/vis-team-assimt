
<script setup lang="ts">
import '@/assets/style.scss'

import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

</script>

<style>
:root {

  /* margin:0px;
  background: url('@/assets/bgimg.jpg') no-repeat;
  background-size: 100% 100%;
  background-attachment:fixed; */
  background-color: #121212;
  overflow-x: hidden;
}

p {
  color: azure;
}
</style>

<template>
  <el-container class="Container" width="100vw" height="100vh">
    <el-aside class="AsideContainer" width="20vw">
      <el-menu class="Menu" :collapse="true">

        <el-menu-item index="1" @click="() => { $router.push({ path: '/' }) }">
          <!-- <template #title> -->
          <el-icon>
            <cloudy color="white" />
          </el-icon>
          <!-- </template> -->

          <!-- <el-menu-item @click="()=>{textTip = '这里可能会展示不同类别游戏的评论的词云图'}">
              评论文本可视化
            </el-menu-item>

            <el-menu-item @click="()=>{textTip = '这里能会展示游戏不同类别游戏的简介的词云图'}">
              简介文本可视化
            </el-menu-item> -->

        </el-menu-item>

        <!-- <el-sub-menu index="2"> -->
        <!-- <template #title>
            <el-icon>
              <PieChart />
            </el-icon>
          </template> -->

        <el-menu-item index="2" @click="() => { $router.push({ path: '/classpre' }) }">
          <el-icon>
            <FullScreen color="white"/>
          </el-icon>
        </el-menu-item>

        <el-menu-item index="3" @click="() => { $router.push({ path: '/class' }) }">
          <!-- 游戏类别 -->
          <el-icon>
            <DataBoard color="white" />
          </el-icon>
        </el-menu-item>

        <el-menu-item index="4" @click="() => { $router.push({ path: '/publisher' }) }">
          <!-- 发布者 -->
          <el-icon>
            <Stopwatch color="white" />
          </el-icon>
        </el-menu-item>

        <el-menu-item index="5" @click="() => { $router.push({ path: '/indicator' }) }">
          <!-- 指标 -->
          <el-icon>
            <DataLine color="white" />
          </el-icon>
        </el-menu-item>

        <!-- </el-sub-menu> -->

        <el-menu-item index="6" @click="() => { $router.push({ path: '/about' }) }">
          <el-icon>
            <User color="white" />
          </el-icon>
        </el-menu-item>
      </el-menu>


    </el-aside>
    <el-main class="MainContainer">
      <el-card shadow="never" class="AppCard">
        <!-- {{ textTip }} -->

        <!-- <ClassSummaryCloud cls="Visual Novel"></ClassSummaryCloud> -->
        <RouterView>

        </RouterView>

        <!-- <ClassThemeRiver>  </ClassThemeRiver> -->

      </el-card>
    </el-main>
  </el-container>
</template>

<style scoped>
.Container {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
}

.AsideContainer {
  /* background-color: aqua; */
  position: fixed;
  top: 0%;
  left: 0;
  width: 5vw;
  height: 100vh;
}

.MainContainer {
  /* background-color: blue; */
  margin-left: 5vw;
  margin-top: 0%;
  width: 95vw;

}

.Menu {
  width: 100%;
  min-height: 100%;
  background: #58585836;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  /* border-radius: 25px; */
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
  border: none;
}

.AppCard {
  min-width: 80vw;
  min-height: 90vh;
  background-color: rgba(52, 52, 52, 0.6);
  border: none;
  box-shadow: inset 0 0 6px rgba(220, 220, 220, 0.2);
  padding: 0%;
}
</style>
