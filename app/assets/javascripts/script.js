$(function(){
	var circle = d3.selectAll("circle");
	circle.style("fill", "steelblue");
	circle.data([1000, 1507, 2120]);
	circle.attr("r", function(d) { return Math.sqrt(d); });
})

