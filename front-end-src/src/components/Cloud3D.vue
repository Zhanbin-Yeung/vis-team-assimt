<template>
    <canvas id="canvas" :width="1000" :height="800"></canvas>
</template>


<script setup>
import {onMounted} from 'vue'

let color_palette = ['rgb(151,227,254', 'rgb(243,148,248', 'rgb(129,141,224', 'rgb(154,83,208', 'rgb(40,67,173', 'rgb(15,21,70']


// const genres =
//     [
//         { "text": "\u5192\u9669", "size": 1005, "color": [0.7372549019607844, 0.7411764705882353, 0.13333333333333333] },
//         { "text": "RPG", "size": 514, "color": [0.6823529411764706, 0.7803921568627451, 0.9098039215686274] },
//         { "text": "\u683c\u6597", "size": 157, "color": [1.0, 0.4980392156862745, 0.054901960784313725] },
//         { "text": "\u72ec\u7acb\u6e38\u620f", "size": 282, "color": [1.0, 0.7333333333333333, 0.47058823529411764] },
//         { "text": "\u56de\u5408\u5236\u7b56\u7565", "size": 99, "color": [0.17254901960784313, 0.6274509803921569, 0.17254901960784313] },
//         { "text": "\u5e73\u53f0", "size": 329, "color": [0.596078431372549, 0.8745098039215686, 0.5411764705882353] },
//         { "text": "\u6a21\u62df", "size": 125, "color": [0.8392156862745098, 0.15294117647058825, 0.1568627450980392] },
//         { "text": "\u7b56\u7565", "size": 142, "color": [1.0, 0.596078431372549, 0.5882352941176471] },
//         { "text": "\u76ca\u667a", "size": 174, "color": [0.5803921568627451, 0.403921568627451, 0.7411764705882353] },
//         { "text": "\u5c04\u51fb", "size": 351, "color": [0.7725490196078432, 0.6901960784313725, 0.8352941176470589] },
//         { "text": "\u97f3\u4e50", "size": 24, "color": [0.5490196078431373, 0.33725490196078434, 0.29411764705882354] },
//         { "text": "\u6218\u6597", "size": 72, "color": [0.7686274509803922, 0.611764705882353, 0.5803921568627451] },
//         { "text": "\u8857\u673a", "size": 72, "color": [0.8901960784313725, 0.4666666666666667, 0.7607843137254902] },
//         { "text": "\u89c6\u89c9\u5c0f\u8bf4", "size": 70, "color": [0.9686274509803922, 0.7137254901960784, 0.8235294117647058] },
//         { "text": "\u5361\u724c\u4e0e\u68cb\u76d8\u6e38\u620f", "size": 16, "color": [0.4980392156862745, 0.4980392156862745, 0.4980392156862745] },
//         { "text": "\u6218\u672f", "size": 50, "color": [0.7803921568627451, 0.7803921568627451, 0.7803921568627451] },
//         { "text": "\u8d5b\u8f66", "size": 42, "color":  [0.12156862745098039, 0.4666666666666667, 0.7058823529411765]},
//         { "text": "\u70b9\u51fb", "size": 46, "color": [0.8588235294117647, 0.8588235294117647, 0.5529411764705883] },
//         { "text": "MOBA", "size": 3, "color": [0.09019607843137255, 0.7450980392156863, 0.8117647058823529] },
//         { "text": "\u4f53\u80b2", "size": 25, "color": [0.6196078431372549, 0.8549019607843137, 0.8980392156862745] },
//         { "text": "\u5b9e\u65f6\u7b56\u7565", "size": 10, "color": [0.12156862745098039, 0.4666666666666667, 0.7058823529411765] },
//         { "text": "\u95ee\u7b54/\u5c0f\u77e5\u8bc6", "size": 4, "color": [0.6823529411764706, 0.7803921568627451, 0.9098039215686274] },
//         { "text": "\u5f39\u7403", "size": 1, "color": [1.0, 0.4980392156862745, 0.054901960784313725] }
//     ]


const genres =
    [
        { "text": "\u5192\u9669", "size": 1005, "color": "rgba(95,158,160" },
        { "text": "RPG", "size": 514, "color": "rgba(72,209, 204" },
        { "text": "\u683c\u6597", "size": 157, "color": "rgba(0 ,191 ,255" },
        { "text": "\u72ec\u7acb\u6e38\u620f", "size": 282, "color": "rgba(70, 130 ,180" },
        { "text": "\u56de\u5408\u5236\u7b56\u7565", "size": 99, "color": "rgba(72, 209 ,204" },
        { "text": "\u5e73\u53f0", "size": 329, "color": "rgba(0, 139, 139" },
        { "text": "\u6a21\u62df", "size": 125, "color": "rgba(65 ,105, 225" },
        { "text": "\u7b56\u7565", "size": 142, "color": "rgba(175, 238 ,238" },

        { "text": "\u76ca\u667a", "size": 174, "color": "rgba(135, 206 ,235" },
        { "text": "\u5c04\u51fb", "size": 351, "color": "rgba(100 ,149 ,237"},
        { "text": "\u97f3\u4e50", "size": 24, "color": "rgba(72 ,209 ,204" },
        { "text": "\u6218\u6597", "size": 72, "color": "rgba(0 ,139 ,139" },
        { "text": "\u8857\u673a", "size": 72, "color": "rgba(0 ,191, 255" },
        { "text": "\u89c6\u89c9\u5c0f\u8bf4", "size": 70, "color": "rgba(0, 139, 139" },
        { "text": "\u5361\u724c\u4e0e\u68cb\u76d8\u6e38\u620f", "size": 16, "color": "rgba(135, 206 ,235" },
        { "text": "\u6218\u672f", "size": 50, "color": "rgba(65, 105, 225" },
        { "text": "\u8d5b\u8f66", "size": 42, "color":  "rgba(70, 130, 180"},
        { "text": "\u70b9\u51fb", "size": 46, "color": "rgba(135, 206 ,235" },
        { "text": "MOBA", "size": 3, "color": "rgba(135 ,206, 250" },
        { "text": "\u4f53\u80b2", "size": 25, "color": "rgba(176, 196, 222" },
        { "text": "\u5b9e\u65f6\u7b56\u7565", "size": 10, "color":"rgba(135, 206, 235"},
        { "text": "\u95ee\u7b54/\u5c0f\u77e5\u8bc6", "size": 4, "color": "rgba(135, 206, 235" },
        { "text": "\u5f39\u7403", "size": 1, "color": "rgba(70, 130, 18" }
    ]

let maxWeight = Math.max(...genres.map(item => item.size));
let minWeight = Math.min(...genres.map(item => item.size));

const minFontSize = 10;
const maxFontSize = 26;
const sphereRad = 800; // 词云半径
const sphereCenterX = 0; // 词云中心点x坐标
const sphereCenterY = 0; // 词云中心点y坐标
const sphereCenterZ = -3 - sphereRad; // 词云中心点z坐标
const radiusSp = 1;
const optDisplayDots = false; // 是否显示圆点
const particleRad = 20; // 圆点半径
// const rgbString = 'rgba(70, 255, 140, ';
let timer; // 计时器
let count = 0; // 粒子总数
const numToAddEachFrame = 1; // 每一帧添加数量
let particleList = {}; // 粒子列表
let recycleBin = {}; // 回收粒子列表
const zeroAlphaDepth = -750; // rgba中a值为0时的深度
const particleAlpha = 1; // 最大rgba中a值
let fLen = 400; // 观察者到z = 0的距离
let zMax = fLen - 2;
let m;
let turnAngle = 0; // 旋转角度
const turnSpeed = 2 * Math.PI / 1500; // 词云旋转速度（1600毫秒旋转一圈）

let randAccelX, randAccelY, randAccelZ;
const gravity = 0; // -1 向上、0 四周、1向下
let particle;
let outsideFlag; // 飞出标识
let nextParticle;
let sinAngle;
let cosAngle;
let depthAlphaFactor;
let i;
let theta, phi;
let x0, y0, z0;

function wordCloud() {
    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;
    const ctx = canvas.getContext('2d');

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;

    // 粒子消失因子
    randAccelX = 0.4;
    randAccelY = 0.4;
    randAccelZ = 0.4;
    // requestAnimationFrame
    onTimer()
    // 控制速度
    // timer = setInterval(onTimer, 1000);

    function onTimer() {
        timer = window.requestAnimationFrame(onTimer);
        count++;
        if (count >= 1) {
            count = 0;
            for (i = 0; i < numToAddEachFrame; i++) {
                // 设置粒子的位置及速度分量，粒子从球心向外飞出
                theta = Math.random() * 2 * Math.PI;
                phi = Math.acos(Math.random() * 2 - 1);
                x0 = sphereRad * Math.sin(phi) * Math.cos(theta);
                y0 = sphereRad * Math.sin(phi) * Math.sin(theta);
                z0 = sphereRad * Math.cos(phi);

                let p = addParticle(x0, sphereCenterY + y0, sphereCenterZ + z0, 0.002 * x0, 0.002 * y0, 0.002 * z0);

                // 粒子控制
                p.attack = 50;
                p.hold = 50;
                p.decay = 100;
                p.initValue = 0;
                p.holdValue = particleAlpha;
                p.lastValue = 0;

                // 消失
                p.stuckTime = 90 + Math.random() * 20;

                p.accelX = 0;
                p.accelY = gravity;
                p.accelZ = 0;
            }
        }

        // 更新可视角度
        turnAngle = (turnAngle + turnSpeed) % (2 * Math.PI);
        sinAngle = Math.sin(turnAngle);
        cosAngle = Math.cos(turnAngle);

        // 准备绘制
        ctx.fillStyle = '#121212';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        // 更新或向粒子列表中添加数据
        particle = particleList.first;
        while (particle !== null) {
            // 在更新之前先记录一下
            nextParticle = particle.next;
            particle.age++;

            // 标签开始移动
            if (particle.age > particle.stuckTime) {
                particle.velX += particle.accelX + randAccelX * (Math.random() * 2 - 1);
                particle.velY += particle.accelY + randAccelY * (Math.random() * 2 - 1);
                particle.velZ += particle.accelZ + randAccelZ * (Math.random() * 2 - 1);

                particle.x += particle.velX;
                particle.y += particle.velY;
                particle.z += particle.velZ;
            }

            /*
             * 计算显示坐标
             * 计算旋转坐标
             * x和z（但y坐标不会改变）
             * 生成新坐标（rotX，y，rotZ），并将它们投影到2D视图平面上。
            */
            let rotX = cosAngle * particle.x + sinAngle * (particle.z - sphereCenterZ);
            let rotZ = -sinAngle * particle.x + cosAngle * (particle.z - sphereCenterZ) + sphereCenterZ;
            m = radiusSp * fLen / (fLen - rotZ);
            particle.projX = rotX * m + centerX;
            particle.projY = particle.y * m + centerY;

            // 更新a值
            if (particle.age < particle.attack + particle.hold + particle.decay) {
                if (particle.age < particle.attack) {
                    particle.alpha = (particle.holdValue - particle.initValue) / particle.attack * particle.age + particle.initValue;
                }
                else if (particle.age < particle.attack + particle.hold) {
                    particle.alpha = particle.holdValue;
                }
                else if (particle.age < particle.attack + particle.hold + particle.decay) {
                    particle.alpha = (particle.lastValue - particle.holdValue) / particle.decay * (particle.age - particle.attack - particle.hold) + particle.holdValue;
                }
            }
            else {
                particle.dead = true;
            }

            // 粒子在可视范围内
            if ((particle.projX > canvasWidth) || (particle.projX < 0) || (particle.projY < 0) || (particle.projY > canvasHeight) || (rotZ > zMax)) {
                outsideFlag = true;
            }
            else {
                outsideFlag = false;
            }

            if (outsideFlag || particle.dead) {

                recycle(particle); // 回收粒子
            }

            else {
                // 消失
                depthAlphaFactor = (1 - rotZ / zeroAlphaDepth);
                depthAlphaFactor = (depthAlphaFactor > 1) ? 1 : ((depthAlphaFactor < 0) ? 0 : depthAlphaFactor);
                //ctx.font = '16px';
                ctx.font = `${particle.fontSize}px 微软雅黑`;
                //ctx.fillStyle = rgbString + depthAlphaFactor * particle.alpha + ')';
                ctx.fillStyle = particle.color + (depthAlphaFactor * particle.alpha) + ')';
                ctx.fillText(particle.flake, particle.projX, particle.projY);
                ctx.beginPath();
                // 显示圆点
                if (optDisplayDots) ctx.arc(particle.projX, particle.projY, m * particleRad, 0, 2 * Math.PI, false);
                ctx.closePath();
                ctx.fill();
            }

            particle = nextParticle;
        }
    }

    function addParticle(x0, y0, z0, vx0, vy0, vz0) {
        let newParticle;
        let color;

        // 检查粒子回收
        if (recycleBin.first != null) {
            newParticle = recycleBin.first;
            // 回收粒子
            if (newParticle.next != null) {
                recycleBin.first = newParticle.next;
                newParticle.next.prev = null;
            } else {
                recycleBin.first = null;
            }
        } else {
            // 回收站为空时创建新的粒子
            newParticle = {};
        }

        if (particleList.first == null) {
            particleList.first = newParticle;
            newParticle.prev = null;
            newParticle.next = null;
        }
        else {
            newParticle.next = particleList.first;
            particleList.first.prev = newParticle;
            particleList.first = newParticle;
            newParticle.prev = null;
        }

        // 初始化
        newParticle.x = x0;
        newParticle.y = y0;
        newParticle.z = z0;
        newParticle.velX = vx0;
        newParticle.velY = vy0;
        newParticle.velZ = vz0;
        newParticle.age = 0;
        newParticle.dead = false;

        let wordgenres = genres[Math.floor(Math.random() * genres.length)];

        newParticle.flake = wordgenres.text;
        let normalizedWeight = (wordgenres.size - minWeight) / (maxWeight - minWeight);
        newParticle.fontSize = minFontSize + normalizedWeight * (maxFontSize - minFontSize);
        // function rgbToCssColor(rgbArray) {
        //     let r = Math.round(rgbArray[0] * 255);
        //     let g = Math.round(rgbArray[1] * 255);
        //     let b = Math.round(rgbArray[2] * 255);
        //     return `rgb(${r}, ${g}, ${b}`;
        // }
        // newParticle.color = rgbToCssColor(wordgenres.color);

        newParticle.color = wordgenres.color
        // newParticle.color = color_palette[Math.floor(Math.random() * color_palette.length)]
        //newParticle.color = `rgba(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, `;
        if (Math.random() < 0.5) {
            newParticle.right = true;
        }
        else {
            newParticle.right = false;
        }

        return newParticle;
    }
    // 回收
    function recycle(p) {
        if (particleList.first === p) {
            if (p.next !== null) {
                p.next.prev = null;
                particleList.first = p.next;
            }
            else {
                particleList.first = null;
            }
        }
        else {
            if (p.next == null) {
                p.prev.next = null;
            }
            else {
                p.prev.next = p.next;
                p.next.prev = p.prev;
            }
        }

        if (recycleBin.first == null) {
            recycleBin.first = p;
            p.prev = null;
            p.next = null;
        }
        else {
            p.next = recycleBin.first;
            recycleBin.first.prev = p;
            recycleBin.first = p;
            p.prev = null;
        }
    }
}

onMounted(()=>{
    wordCloud()
})

</script>