var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
var pieChart = new Chart(pieChartCanvas);
var PieData = [
  {
    value: 700,
    color: "#f56954",
    highlight: "#f56954",
    label: "Red"
  },
  {
    value: 500,
    color: "#00a65a",
    highlight: "#00a65a",
    label: "Green"
  },
  {
    value: 400,
    color: "#f39c12",
    highlight: "#f39c12",
    label: "Yellow"
  },
  {
    value: 600,
    color: "#00c0ef",
    highlight: "#00c0ef",
    label: "Blue"
  }
];
var pieOptions = {
  //Boolean - Whether we should show a stroke on each segment
  segmentShowStroke: true,
  //String - The colour of each segment stroke
  segmentStrokeColor: "#fff",
  //Number - The width of each segment stroke
  segmentStrokeWidth: 2,
  //Number - The percentage of the chart that we cut out of the middle
  percentageInnerCutout: 50, // This is 0 for Pie charts
  //Number - Amount of animation steps
  animationSteps: 200,
  //String - Animation easing effect
  animationEasing: "easeOutBounce",
  //Boolean - Whether we animate the rotation of the Doughnut
  animateRotate: true,
  //Boolean - Whether we animate scaling the Doughnut from the centre
  animateScale: false,
  //Boolean - whether to make the chart responsive to window resizing
  responsive: true,
  // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
  maintainAspectRatio: true,
  //String - A legend template
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};

pieChart.Doughnut(PieData, pieOptions);