# 可视化19号小组团队作业

## 揭秘热门游戏成功密码：1980-2023热门电子游戏综合分析

### 项目总括

本项目对1980-2023热门的 *电子游戏(video games)* 的简介信息、游玩指标（下载量、活跃用户数、收藏等）、开发商等多项信息进行评价，通过分析电子游戏及开发厂商时序特征及相关关系等，解读用户偏好、游戏厂商的一些潜在信息，从而揭秘热门游戏的成功密码，为游戏相关工作者提供方向。

## 在线演示地址

[在线演示](https://vis.kirakira.today/)

## 团队分工

开源仓库隐私问题，见**在线演示**页面内

## 操作方式说明

![image](https://github.com/ASingleDog/vis-team-assimt/assets/151437767/6c8ff75b-48b1-4a76-a827-7cd1c38744e0)

通过左侧菜单栏切换不同显示对象，默认为类型词云图。

### 菜单首项 - 类型词云

![image](https://github.com/ASingleDog/vis-team-assimt/assets/151437767/2c28a11e-936a-4443-8a10-d6593397d73f)
三维的词云图，注重视觉直观体验，**文本字体大小**表示该类别游戏数量。

### 菜单第2项 - 类型动态图&热力图
![image](https://github.com/ASingleDog/vis-team-assimt/assets/151437767/5551ce09-2951-4d31-985a-7c46f5080109)

左侧动态图显示不同游戏类别数量随时间变化（取前十名）

![image](https://github.com/ASingleDog/vis-team-assimt/assets/151437767/077d9f64-d223-4002-9f4a-a0f51737f447)

右侧热力图显示同时属于两种游戏类型的游戏数量。鼠标触碰可显示详细信息。

### 菜单第3项 - 游戏类型主题河流图 & 饼图 & 简介词云图

显示不同时间各游戏类型的数量和占比。

1. **拖拉左侧缩放框**，可以缩放查看的时间范围，两图表均会做出相应改变。
![image](https://github.com/ASingleDog/vis-team-assimt/assets/151437767/31a7229a-58ec-46ae-8d72-d93e72cffdc3)
![image](https://github.com/ASingleDog/vis-team-assimt/assets/151437767/959d2a29-f11c-40a7-aa73-ba2d10902e8f)

2. **点击右侧饼图的某段**，可以显示该类别**游戏简介**的**文本词云分析**，词云停用某些无义词（如game、player等）。
![image](https://github.com/ASingleDog/vis-team-assimt/assets/151437767/a6ec536d-fa1d-4d3d-98e8-d46e428611b2)
![image](https://github.com/ASingleDog/vis-team-assimt/assets/151437767/5b172f63-8e51-468b-b1b1-4dfd43adae8e)

3. **鼠标触碰**，显示详细信息。
![image](https://github.com/ASingleDog/vis-team-assimt/assets/151437767/291dd9f5-5436-4530-8522-4c1743944555)

### 菜单第4项 - 游戏发布者网格图

众多**游戏发行厂商**的相关关系。

点的大小表示发行游戏数量。

定义边权：

$$ W_{i, j} = \log ( \frac{i,j团队合作的游戏数量}{团队i制作的游戏数量 + 团队j制作的游戏数量 - i,j团队合作的游戏数量} ) $$

**点击节点**可以进行快速必应搜索。
![image](https://github.com/ASingleDog/vis-team-assimt/assets/151437767/0d4b62ec-7915-46d6-8a21-216bb23fca07)
![image](https://github.com/ASingleDog/vis-team-assimt/assets/151437767/e6f29957-7f57-44b9-9412-2e600bb4dcfe)
![image](https://github.com/ASingleDog/vis-team-assimt/assets/151437767/7a1d5473-a9f9-4ef4-a138-bbd88e1d8fdb)

### 菜单第5项 - 游戏指标折线&雷达图

除Rating外，数量单位均为 千(k)。

1. **点选上方标签** 可以取消查看某一指标。
![image](https://github.com/ASingleDog/vis-team-assimt/assets/151437767/9a97e900-158e-4a13-8ba0-4bbcab57c276)
![image](https://github.com/ASingleDog/vis-team-assimt/assets/151437767/e726f928-3be9-4f1f-b4ea-ad4bdaf229f3)

2. **触碰左侧节点** 右侧雷达图会显示相关信息
![image](https://github.com/ASingleDog/vis-team-assimt/assets/151437767/53fb282c-f56a-4a46-b229-4e8c9eb906c4)
   
3. **上方按钮** 可以切换时间尺度
![image](https://github.com/ASingleDog/vis-team-assimt/assets/151437767/474c2d48-1b3f-4cc1-8ef3-b1bdcd345c2f)

### 菜单第6项 - 总体文档

即本文档

## 图表简介

### 发布者网络图

创作思路来源于力的导向图。若能将发布者之间的关系可视化，那么对于揭示游戏团队经久不衰的原因也会有一定的启发。同时，我们还能根据大量游戏团队的结果推测行业总体的情况。由于原数据中无法直接得到发布者之间的关系，因此首先对原数据进行了处理：将原数据中出现的所有团队进行组合，通过定义权重

$$W_{i, j}= \frac{i,j团队合作的游戏数量}{团队i制作的游戏数量 + 团队j制作的游戏数量 - i,j团队合作的游戏数量} $$

来构建团队间关系，同时记录团队上榜的次数，由于该数据差异较大，因此对其进行了**对数优化**。

即 $$ W_{i, j} = \log ( \frac {i,j团队合作的游戏数量}{团队i制作的游戏数量 + 团队j制作的游戏数量 - i,j团队合作的游戏数量} ) $$

最终，以节点大小反映团队上榜次数，边的权重反映团队间关系。

### 游戏类型主题河流图-饼图

主题河流图是堆积面积图的一种变形，通过“流动”的形状来展示不同类别的数据随时间的变化情况。由于游戏类型较多，展示所有年份的各游戏类型的数量信息若采用传统的面积图等将会十分密集、难以阅读，而主题河流图则提供了一种美观且实用的解决办法。

由于主题河流图仅能直观展示某一时刻地数量信息，而很多时候我们往往关注*某一时间段的数量及其占比*，使用主题河流图就不能很方便地展示，因此引入饼图作为辅助，便可以轻松弥补这些问题。

同时，游戏简介的文本可视化可以与该图表做衔接，因而做交互补充，更加丰富其功能。

同时，通过缩放时间轴，图表能够做出变化，便于关注某一时间段的信息。

数据使用Python Pandas处理后，通过JSON格式保存至前端JS中。

### 词云

利用词云可视化游戏的 简介、类别、制作团队(已弃用)这几个数值属性的统计频率的相对大小。

- 将各个游戏类型的总结分词后，利用d3-cloud.js按照游戏类型进行可视化，统计出现的高频词
- 将各个1980年-2030年发行的游戏的团队进行统计，利用d3-cloud.js可视化成为词云，可视化呈现统计各个团队发行游戏数量的多少
- 统计1980-2030年出现的游戏类型的总计，利用3D旋转词云呈现各个游戏类型发行数量的相对大小

去除含有空值的数据，按照游戏类型筛选得到对应的游戏总结，拼接成一个长文本序列，进行分词，统计，去除无意义停用词后选取高频词前20个。保存为json文件，再转为js数据存放。对于游戏团队使用同样的处理方法。使用D3、D3-Cloud实现。

### 游戏指标折线图-雷达图

可视化游戏的Number of Reviews，Plays，Playing，Backlogs，Wishlist，Rating这几个数值属性随发布时间的变化情况。
利用vue组件框架，借助echarts图表，实现了一个堆叠式的折线图，横轴代表游戏发布时间，纵轴表示各个属性的数值大小，并绘制了雷达图可以展示每款游戏的各个属性。
用户可以通过下拉选择框选择按日期或按年份展示数据，鼠标移动到折线图上时，组件会根据当前所在的数据点更新雷达图的数据。

数据处理：去除含有空值的数据以及重复的数据，然后将Number of Reviews，Plays，Playing，Backlogs，Wishlist这些属性的值改为以K为单位，接着修改release time列，将该列改为时间的格式，接着对数据按release time进行排序，之后将csv文件改为json文件的格式。

### 游戏类型热力图

创作思路来源于热力图。虽然热力图主要反映的是两个因素之间的相关程度，但是将不同的游戏类型组合，观察不同类型组合的团队数量，同样是值得研究的问题。在图中，我们可以看到哪些组合比较受欢迎；同时也能观察哪些组合具有广阔的探索区域。进而贯穿游戏行业的过去与未来。在对原数据进行处理时，首先将游戏类型提取出来，进行两两组合，对于每个组合，再统计哪些团队做的游戏涉及到这些类型，并最终决定是否将其纳入该组合，由于数据普遍较大，因此将其除以100取整，得到10以内的整数，再进行颜色映射，最终将值转化为图。由于对pair的前后作了区分，因此得到的是非对称图形。

### 游戏类型动态图

排序动态柱状图。每种类型的游戏数量随时间变化的情况来描述的。数据是从1980到2023之间的游戏数据组成，总共是23个游戏类型，可视化结果显示的是前十个最高数据量的游戏类型。数据rawData数组包含的是图表的数值数据，labels数组包含类别的标签。结果可以看得出，Advanture类型的游戏数量占比最大，接下来是RPG、Shooter等游戏类型占比最大。因为是动态排序柱状图，数据是随时间变的，所以实现的过程中，跑数据的时候有些迷惑。动态排序柱状图的主要目的就是为了观察时间上的变化，时间过去每个游戏的类型增多，游戏两也增多，通过可视化的图里就可以看得到。

### 数据来源

[backloggd.com](https://backloggd.com/)
