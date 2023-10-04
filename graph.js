const d3 = require('d3');

function createChart() {
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, 960, 600]);

  svg.append("path")
      .datum(topojson.mesh(us, us.objects.usSimplified))
      .attr("fill", "none")
      .attr("stroke", "#bbb")
      .attr("stroke-width", 2)
      .attr("d", d3.geoPath());
      
  return svg.node();
}
createChart()