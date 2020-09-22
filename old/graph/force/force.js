//var w = 600,
//    h = 600,

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var fill = d3.scale.linear()
        .domain([0, 1, 10])
        .range(["#8080FF", "#135FA7", "#ffffff"]);
          //.range(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2"])
          //.range(["#000000","#ffffff"])
          //.domain(d3.range(0,1,2,3,4,5,6,7,8,9,10));
    //fill = d3.scale.category20();

var vis = d3.select("#chart")
  .append("svg:svg")
    .attr("width", w)
    .attr("height", h);

d3.json("force/force.json", function(json) {
  var force = d3.layout.force()
      //.charge(-120)
      //.linkDistance(30)
      .charge(-120)
	  //sets the link distance as a function of the weight, yeet
	  .linkDistance(function(d) { return d.weight*10; })
      .linkStrength(function(d) { return d.weight/1; })//30
	  .gravity(0.01)
	  //.linkStrength(10)
      .nodes(json.nodes)
      .links(json.links)
      .size([w, h])
      .start();
	  
	  
var link = vis.selectAll(".link")
    .data(json.links)
    .enter()
    .append("g")
    .attr("class", "link")
    .append("line")
    .attr("class", "link-line")
    .style("stroke-width", function (d) {
        return 10;//return Math.sqrt(d.weight);
    })
	.on("mouseover", mouseOverEdge());
	
linky = vis.selectAll("text").data(json.links).enter()
   .append("text")
   .attr("x", function(d) { return d.source.x + (d.target.x - d.source.x)/2; })
   .attr("y", function(d) { return d.source.y + (d.target.y - d.source.y)/2; })
   .text(function(d) { return d.desc; })
   .style("opacity", 1);
   
var node = vis.selectAll(".node")
    .data(force.nodes())
  .enter().append("g")
    .attr("class", "node")
    .call(force.drag);
	//.style("fill", function(d) { return fill(d.group); });

node.append("circle")
    .attr("class", "node")
    .attr("x", function(d) { return d.x; })
    .attr("y", function(d) { return d.y; })
    .attr("r", function(d) { if (d.group == 0) return 20; return 15-d.group; })
    //.style("fill", function(d) { return fill(d.group); })
    //.style("fill", function(d) { return fill(d.colour); })
    .style("fill", function(d) { return d3.hsl(d.colour).brighter(d.group/3); })
    //.attr("r", 5)
    .style("stroke-width", function(d) { if (d.group === 0) return 5; return 1; })
    //.on("mouseover", function(d){
	//alert(d.name);return d.name;})
	;

node.append("text")
    .attr("x", -10)
    .style("font-size", "15")
    //.attr("dy", ".35em")
    .text(function(d) { return d.name; });

  node.append("svg:title")
      .text(function(d) { return d.name; });

  vis.style("opacity", 1e-6)
    .transition()
      .duration(1000)
      .style("opacity", 1);

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
		
	
    linky
        .attr("x", function(d) {
            return ((d.source.x + d.target.x)/2);
        })
        .attr("y", function(d) {
            return ((d.source.y + d.target.y)/2);
        });
    //node.attr("cx", function(d) { return d.x; })
    //    .attr("cy", function(d) { return d.y; });
    node
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  });


});
function mouseOverEdge() {
	return function(d) {
		
		//lol makes the edge disappear
		d3.select(this).style("opacity", 0);
		         
	};
}