<template>
    <div ref="SummaryCloudChart" id="genre_summary" style="padding: 0%; margin: 0%;">
    </div>
  
</template>

<script setup lang="ts">
import {computed, onMounted, reactive, ref, watch} from 'vue'
import * as d3 from 'd3'
import cloud from 'd3-cloud';


const props = defineProps({
    cls: String
})

let cls = computed(()=>{
    return props.cls
})

const summary= reactive({
    "Visual Novel": [ { "text": "new", "size": 39 }, { "text": "series", "size": 29 }, { "text": "story", "size": 20 }, { "text": "character", "size": 18 }, { "text": "adventure", "size": 16 }, { "text": "time", "size": 16 }, { "text": "enemy", "size": 15 }, { "text": "phoenix", "size": 14 }, { "text": "wright", "size": 14 }, { "text": "visual", "size": 14 }, { "text": "use", "size": 13 }, { "text": "screen", "size": 13 }, { "text": "feature", "size": 12 }, { "text": "life", "size": 12 }, { "text": "original", "size": 12 }, { "text": "experience", "size": 12 }, { "text": "world", "size": 12 }, { "text": "sonic", "size": 12 }],
    "Pinball": [{ "text": "clank", "size": 5 }, { "text": "games", "size": 3 }, { "text": "know", "size": 2 }, { "text": "high", "size": 2 }, { "text": "impact", "size": 2 }, { "text": "playstation", "size": 2 }, { "text": "size", "size": 1 }, { "text": "matters", "size": 1 }, { "text": "japan", "size": 1 }, { "text": "platformer", "size": 1 }, { "text": "video", "size": 1 }, { "text": "develop", "size": 1 }, { "text": "publish", "size": 1 }, { "text": "sony", "size": 1 }, { "text": "computer", "size": 1 }, { "text": "entertainment", "size": 1 }, { "text": "portable", "size": 1 }, { "text": "title", "size": 1 }],
    "Tactical": [ { "text": "series", "size": 22 }, { "text": "story", "size": 21 }, { "text": "enemy", "size": 21 }, { "text": "new", "size": 21 }, { "text": "character", "size": 15 }, { "text": "use", "size": 14 }, { "text": "adventure", "size": 13 }, { "text": "gear", "size": 12 }, { "text": "time", "size": 12 }, { "text": "world", "size": 11 }, { "text": "battle", "size": 11 }, { "text": "metal", "size": 10 }, { "text": "feature", "size": 10 }, { "text": "weapon", "size": 10 }, { "text": "fire", "size": 9 }, { "text": "ability", "size": 9 }, { "text": "level", "size": 9 }, { "text": "gameplay", "size": 8 }],
    "Sport": [{ "text": "new", "size": 17 },  { "text": "release", "size": 12 }, { "text": "include", "size": 11 }, { "text": "world", "size": 11 }, { "text": "control", "size": 10 }, { "text": "feature", "size": 9 }, { "text": "like", "size": 9 }, { "text": "battle", "size": 9 }, { "text": "high", "size": 8 }, { "text": "pokemon", "size": 8 }, { "text": "power", "size": 7 }, { "text": "time", "size": 7 }, { "text": "story", "size": 7 }, { "text": "jam", "size": 7 }, { "text": "style", "size": 6 }, { "text": "experience", "size": 6 }, { "text": "sport", "size": 6 }],
    "Shooter": [{ "text": "new", "size": 207 },{ "text": "world", "size": 143 }, { "text": "action", "size": 105 }, { "text": "series", "size": 87 }, { "text": "adventure", "size": 84 }, { "text": "story", "size": 83 }, { "text": "gameplay", "size": 80 }, { "text": "time", "size": 80 }, { "text": "feature", "size": 80 }, { "text": "character", "size": 76 }, { "text": "evil", "size": 75 }, { "text": "weapon", "size": 74 }, { "text": "enemy", "size": 73 }, { "text": "person", "size": 66 }, { "text": "experience", "size": 64 }, { "text": "set", "size": 62 }, { "text": "battle", "size": 57 }],
    "Brawler": [{ "text": "new", "size": 91 }, { "text": "world", "size": 68 }, { "text": "action", "size": 57 }, { "text": "character", "size": 53 }, { "text": "series", "size": 49 }, { "text": "feature", "size": 39 }, { "text": "set", "size": 38 }, { "text": "experience", "size": 33 }, { "text": "battle", "size": 32 }, { "text": "combat", "size": 31 }, { "text": "story", "size": 30 }, { "text": "gameplay", "size": 29 }, { "text": "adventure", "size": 29 }, { "text": "enemy", "size": 29 }, { "text": "war", "size": 28 }, { "text": "god", "size": 27 }, { "text": "time", "size": 27 }],
    "Strategy": [{ "text": "new", "size": 86 }, { "text": "battle", "size": 42 }, { "text": "enemy", "size": 42 }, { "text": "world", "size": 41 }, { "text": "adventure", "size": 41 }, { "text": "story", "size": 39 },  { "text": "time", "size": 35 }, { "text": "character", "size": 35 }, { "text": "series", "size": 34 }, { "text": "action", "size": 31 }, { "text": "turn", "size": 29 }, { "text": "use", "size": 28 }, { "text": "feature", "size": 27 }, { "text": "weapon", "size": 24 }, { "text": "gear", "size": 23 }, { "text": "experience", "size": 23 }, { "text": "different", "size": 23 }],
    "Arcade": [{ "text": "new", "size": 39 },   { "text": "world", "size": 25 }, { "text": "battle", "size": 23 }, { "text": "action", "size": 17 }, { "text": "feature", "size": 17 }, { "text": "time", "size": 16 }, { "text": "character", "size": 16 }, { "text": "series", "size": 16 }, { "text": "adventure", "size": 15 }, { "text": "city", "size": 14 }, { "text": "story", "size": 14 }, { "text": "evil", "size": 13 }, { "text": "original", "size": 12 }, { "text": "way", "size": 12 }, { "text": "video", "size": 12 }, { "text": "version", "size": 11 }, { "text": "friend", "size": 11 }],
    "MOBA": [{ "text": "day", "size": 4 }, { "text": "island", "size": 3 }, { "text": "village", "size": 3 }, { "text": "goose", "size": 3 }, { "text": "league", "size": 2 }, { "text": "legends", "size": 2 }, { "text": "champion", "size": 2 }, { "text": "head", "size": 2 }, { "text": "create", "size": 2 }, { "text": "paradise", "size": 2 }, { "text": "new", "size": 2 }, { "text": "fast", "size": 1 }, { "text": "pace", "size": 1 }, { "text": "competitive", "size": 1 }, { "text": "online", "size": 1 }, { "text": "blend", "size": 1 }, { "text": "speed", "size": 1 }, { "text": "intensity", "size": 1 }, { "text": "rts", "size": 1 }],
    "Turn Based Strategy": [{ "text": "pok\u00e9mon", "size": 81 }, { "text": "new", "size": 63 }, { "text": "world", "size": 45 }, { "text": "series", "size": 36 }, { "text": "black", "size": 36 }, { "text": "version", "size": 35 }, { "text": "white", "size": 34 }, { "text": "time", "size": 27 }, { "text": "character", "size": 26 }, { "text": "feature", "size": 22 }, { "text": "adventure", "size": 22 }, { "text": "battle", "size": 21 }, { "text": "set", "size": 20 }, { "text": "system", "size": 19 }, { "text": "story", "size": 19 }, { "text": "experience", "size": 19 }, { "text": "base", "size": 18 }],
    "Platform": [{ "text": "new", "size": 227 }, { "text": "world", "size": 138 }, { "text": "mario", "size": 118 }, { "text": "super", "size": 99 }, { "text": "adventure", "size": 92 }, { "text": "character", "size": 89 }, { "text": "series", "size": 83 }, { "text": "action", "size": 83 }, { "text": "feature", "size": 77 }, { "text": "time", "size": 70 }, { "text": "sonic", "size": 66 }, { "text": "power", "size": 64 }, { "text": "fight", "size": 61 },  { "text": "battle", "size": 58 }, { "text": "story", "size": 55 }, { "text": "platformer", "size": 55 }, { "text": "life", "size": 55 }],
    "Card & Board Game": [{ "text": "new", "size": 12 }, { "text": "mario", "size": 9 }, { "text": "pok\u00e3", "size": 9 }, { "text": "time", "size": 9 }, { "text": "world", "size": 8 }, { "text": "mon", "size": 8 }, { "text": "puzzle", "size": 7 }, { "text": "pok\u00e9mon", "size": 7 }, { "text": "way", "size": 6 }, { "text": "nintendo", "size": 5 }, { "text": "release", "size": 5 }, { "text": "adventure", "size": 5 }, { "text": "card", "size": 4 }, { "text": "party", "size": 4 }, { "text": "open", "size": 4 }, { "text": "bring", "size": 4 }, { "text": "good", "size": 4 }, { "text": "toy", "size": 4 }],
    "Real Time Strategy": [{ "text": "new", "size": 7 },  { "text": "series", "size": 5 }, { "text": "level", "size": 5 }, { "text": "racing", "size": 5 }, { "text": "playstation", "size": 5 }, { "text": "crash", "size": 5 }, { "text": "enemy", "size": 4 }, { "text": "ridge", "size": 4 }, { "text": "racer", "size": 4 }, { "text": "use", "size": 4 }, { "text": "action", "size": 4 }, { "text": "cell", "size": 4 }, { "text": "zombie", "size": 3 }, { "text": "plant", "size": 3 }, { "text": "stop", "size": 3 }, { "text": "type", "size": 3 }, { "text": "river", "size": 3 }, { "text": "city", "size": 3 }],
    "Fighting": [ { "text": "new", "size": 54 },  { "text": "character", "size": 41 }, { "text": "world", "size": 37 }, { "text": "series", "size": 35 }, { "text": "super", "size": 28 }, { "text": "smash", "size": 28 }, { "text": "fight", "size": 26 }, { "text": "battle", "size": 22 }, { "text": "adventure", "size": 21 }, { "text": "time", "size": 20 }, { "text": "feature", "size": 18 }, { "text": "action", "size": 17 }, { "text": "style", "size": 15 }, { "text": "base", "size": 15 }, { "text": "story", "size": 15 }, { "text": "different", "size": 15 }, { "text": "mode", "size": 14 }],
    "Music": [{ "text": "battle", "size": 8 }, { "text": "character", "size": 8 }, { "text": "kirby", "size": 7 }, { "text": "level", "size": 7 }, { "text": "fight", "size": 6 }, { "text": "sonic", "size": 6 }, { "text": "rhythm", "size": 5 }, { "text": "combat", "size": 5 }, { "text": "music", "size": 5 }, { "text": "dream", "size": 5 }, { "text": "weapon", "size": 5 }, { "text": "set", "size": 5 }, { "text": "world", "size": 5 }, { "text": "control", "size": 5 }, { "text": "friend", "size": 5 }, { "text": "feature", "size": 5 }, { "text": "face", "size": 5 }],
    "Indie": [{ "text": "new", "size": 124 }, { "text": "world", "size": 99 },  { "text": "character", "size": 56 }, { "text": "battle", "size": 55 }, { "text": "feature", "size": 55 }, { "text": "story", "size": 54 }, { "text": "adventure", "size": 51 }, { "text": "time", "size": 48 }, { "text": "action", "size": 46 }, { "text": "series", "size": 46 }, { "text": "life", "size": 44 }, { "text": "experience", "size": 43 }, { "text": "explore", "size": 42 }, { "text": "fight", "size": 40 }, { "text": "system", "size": 40 }, { "text": "way", "size": 35 }, { "text": "turn", "size": 33 }],
    "RPG": [{ "text": "new", "size": 269 }, { "text": "world", "size": 261 },  { "text": "character", "size": 155 }, { "text": "series", "size": 138 }, { "text": "story", "size": 134 }, { "text": "feature", "size": 129 },{ "text": "time", "size": 124 }, { "text": "action", "size": 121 }, { "text": "adventure", "size": 118 }, { "text": "pok\u00e9mon", "size": 105 }, { "text": "set", "size": 101 }, { "text": "gameplay", "size": 100 }, { "text": "battle", "size": 95 }, { "text": "experience", "size": 95 }, { "text": "enemy", "size": 89 }, { "text": "fight", "size": 86 }, { "text": "life", "size": 80 }],
    "Quiz/Trivia": [{ "text": "guess", "size": 4 }, { "text": "letter", "size": 4 }, { "text": "word", "size": 4 }, { "text": "daily", "size": 2 }, { "text": "puzzle", "size": 2 }, { "text": "day", "size": 2 }, { "text": "attempt", "size": 2 }, { "text": "fail", "size": 2 }, { "text": "give", "size": 2 }, { "text": "information", "size": 2 }, { "text": "appear", "size": 2 }, { "text": "correct", "size": 2 }, { "text": "moon", "size": 2 }, { "text": "rediscover", "size": 1 }, { "text": "beloved", "size": 1 }, { "text": "arcade", "size": 1 }, { "text": "style", "size": 1 }, { "text": "beat", "size": 1 }],
    "Point-and-Click": [{ "text": "new", "size": 32 }, { "text": "find", "size": 14 }, { "text": "character", "size": 14 }, { "text": "story", "size": 14 }, { "text": "experience", "size": 10 }, { "text": "adventure", "size": 10 }, { "text": "series", "size": 9 }, { "text": "life", "size": 9 }, { "text": "include", "size": 9 }, { "text": "action", "size": 9 }, { "text": "use", "size": 8 }, { "text": "scene", "size": 8 }, { "text": "island", "size": 8 }, { "text": "release", "size": 8 }, { "text": "time", "size": 8 }, { "text": "follow", "size": 7 }, { "text": "main", "size": 7 }, { "text": "security", "size": 7 }],
    "Adventure": [ { "text": "new", "size": 544 }, { "text": "world", "size": 435 }, { "text": "character", "size": 324 }, { "text": "series", "size": 283 }, { "text": "story", "size": 251 }, { "text": "action", "size": 250 }, { "text": "feature", "size": 248 }, { "text": "adventure", "size": 248 }, { "text": "time", "size": 225 }, { "text": "gameplay", "size": 188 }, { "text": "experience", "size": 183 }, { "text": "set", "size": 173 }, { "text": "battle", "size": 167 }, { "text": "enemy", "size": 166 }, { "text": "pok\u00e9mon", "size": 153 }, { "text": "mario", "size": 144 }, { "text": "fight", "size": 141 }],
    "Puzzle": [{ "text": "new", "size": 94 }, { "text": "world", "size": 62 }, { "text": "story", "size": 54 }, { "text": "time", "size": 52 }, { "text": "feature", "size": 50 }, { "text": "puzzle", "size": 48 }, { "text": "character", "size": 46 }, { "text": "series", "size": 41 }, { "text": "adventure", "size": 37 }, { "text": "set", "size": 34 }, { "text": "action", "size": 32 }, { "text": "gameplay", "size": 30 }, { "text": "base", "size": 28 }, { "text": "system", "size": 28 }, { "text": "release", "size": 28 }, { "text": "original", "size": 27 }, { "text": "level", "size": 27 }],
    "Racing": [{ "text": "new", "size": 37 }, { "text": "world", "size": 23 }, { "text": "mario", "size": 22 }, { "text": "series", "size": 19 }, { "text": "kart", "size": 17 },{ "text": "feature", "size": 16 }, { "text": "wii", "size": 15 }, { "text": "battle", "size": 14 }, { "text": "control", "size": 12 }, { "text": "story", "size": 12 }, { "text": "character", "size": 12 }, { "text": "power", "size": 12 }, { "text": "mode", "size": 11 }, { "text": "include", "size": 11 }, { "text": "base", "size": 10 },  { "text": "action", "size": 10 }, { "text": "adventure", "size": 10 }],
    "Simulator": [ { "text": "new", "size": 60 }, { "text": "battle", "size": 39 }, { "text": "series", "size": 34 }, { "text": "feature", "size": 32 }, { "text": "character", "size": 30 }, { "text": "time", "size": 30 }, { "text": "world", "size": 29 }, { "text": "life", "size": 27 }, { "text": "story", "size": 26 }, { "text": "like", "size": 24 }, { "text": "experience", "size": 24 }, { "text": "adventure", "size": 23 }, { "text": "include", "size": 22 }, { "text": "fight", "size": 22 }, { "text": "mario", "size": 22 }, { "text": "puzzle", "size": 21 }, { "text": "allow", "size": 20 }]
})

// let genreSelector = d3.select("#genre-selector");

// Object.keys(summary).forEach(function (genre) {
//     genreSelector.append("option")
//         .text(genre)
//         .attr("value", genre);
// });

function updateWordCloud(genre) {

    if(!summary[genre])
        return ;
    d3.select("#genre_summary").selectAll("svg").remove();

    let words = summary[genre];

    let color = d3.scaleOrdinal(d3.schemeCategory10);

    let fontSizeScale = d3.scalePow()
        .exponent(0.5)
        .domain([d3.min(words, d => d.size), d3.max(words, d => d.size)])
        .range([20, 80]);

    let svgWidth = 600;
    let svgHeight = 500;

    let layout = cloud()
        .size([svgWidth - 10, svgHeight - 10])
        .words(words)
        .rotate(0)
        .fontSize(d => fontSizeScale(d.size))
        .padding(5)
        .on("end", draw);

    layout.start();

    function draw(words) {
        let svg = d3.select("#genre_summary").append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            // .attr("viewBox", "0 0 " + svgWidth - 10 + " " + svgHeight - 10)
            // .attr("style", "border: 1px solid black")
            .attr("preserveAspectRatio", "xMidYMid meet")
            .attr("class", "wordcloud");

        let wordcloudGroup = svg.append("g")
            .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")"); // 将词云居中

        wordcloudGroup.selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function (d) { return d.size + "px"; })
            .style("fill", function (d, i) { return color(i); })
            .attr("text-anchor", "middle")
            .attr("transform", function (d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function (d) { return d.text; });
    }
}

// watch(cls, (oldValue, newValue)=>{
//     console.log(newValue)
//     updateWordCloud(newValue)
// })

onMounted(()=>{
    updateWordCloud(cls.value)
})

</script>
