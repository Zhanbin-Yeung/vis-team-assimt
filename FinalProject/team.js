import { teams } from "./data_team.js";

let color = d3.scale.category20();  
let fontSizeScale = d3.scale.pow()
                .exponent(0.8)
                .domain([d3.min(teams, function(d) { return d.size; }), 
                            d3.max(teams, function(d) { return d.size; })])
                .range([15, 75]); 

let svgWidth = 600; 
let svgHeight = 400; 

let layout = d3.layout.cloud()
    .size([svgWidth - 10 ,svgHeight - 10 ]) 
    .words(teams)
    .rotate(0)
    .fontSize(function(d) { return fontSizeScale(d.size); })
    .padding(5)
    .on("end", draw);

layout.start();

function draw(words) {
    let svg = d3.select("#teams").append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .attr("viewBox", "0 0 " + svgWidth + " " + svgHeight)
        .attr("style", "border: 1px solid black")
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("class", "wordcloud")
        .append("g")
        .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")");

    svg.selectAll("text")
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


