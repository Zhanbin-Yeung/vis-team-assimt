import { summary } from "./data_summary.js";

let genreSelector = d3.select("#genre-selector");

Object.keys(summary).forEach(function(genre) {
    genreSelector.append("option")
                 .text(genre)
                 .attr("value", genre);
});

function updateWordCloud(genre) {
    d3.select("#genre_summary").selectAll("svg").remove();

    let words = summary[genre];

    let color = d3.scale.category20();  
    let fontSizeScale = d3.scale.pow()
                      .exponent(0.5)
                      .domain([d3.min(words, function(d) { return d.size; }), 
                               d3.max(words, function(d) { return d.size; })])
                      .range([20, 80]); // 最小字体和最大字体大小

    let svgWidth = 600; 
    let svgHeight = 400; 

    let layout = d3.layout.cloud()
        .size([svgWidth - 10 ,svgHeight - 10 ]) 
        .words(words)
        .rotate(0)
        .fontSize(function(d) { return fontSizeScale(d.size); })
        .padding(5)
        .on("end", draw);

    layout.start();

    function draw(words) {
        let svg = d3.select("#genre_summary").append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .attr("viewBox", "0 0 " + svgWidth - 10 + " " + svgHeight - 10)
            .attr("style", "border: 1px solid black")
            .attr("preserveAspectRatio", "xMidYMid meet")
            .attr("class", "wordcloud");

        let wordcloudGroup = svg.append("g")
            .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")"); // 将词云居中

        wordcloudGroup.selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            .style("fill", function(d, i) { return color(i); })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x , d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });
    }
}

document.getElementById('genre-selector').addEventListener('change', function(e) {
    updateWordCloud(e.target.value);
});

updateWordCloud(document.getElementById('genre-selector').value);
