$(document).ready(function() {
    $('#fullpage').fullpage({
    menu: '.navbar',
    verticalCentered: true,
    resize : false,
    anchors:['firstPage', 'secondPage'],
    css3: true
  });

    $('#line_items').dataTable({
    	responsive: true
    });
    var ctx = $("#myChart").get(0).getContext("2d");
    var myDoughnutChart = new Chart(ctx).Doughnut(chartData);


		$("#myChart").mouseup( 
      function(evt){
        var activePoints = myDoughnutChart.getSegmentsAtEvent(evt);
        var category = activePoints[0].label;
        $.get("/category/"+category, function(data){
        	$('.modal-body-item').html(data);
        	$('#modal-item').modal();
        });
      }
    );

    $('#additem').click(
    	function(evt){
    	$.get("/items", function(data){
    		$('.modal-body-add-item').html(data);
    		$('#modal-add').modal();
    	});
    	}
    )  

});

var chartData = [
    {
        value: '$',
        color: "#28FFBD",
        highlight: "#0C9ECC",
        label: "Housing"
    },
    {
        value: '$',
        color:"#083628",
        highlight: "#558999",
        label: "Transportation"
    },
    {
        value: '$',
        color:"#20CE99",
        highlight: "#0C9ECC",
        label: "Bills"
    },
    {
        value: '$',
        color: "#74FFD5",
        highlight: "#558999",
        label: "Entertainment"
    },
    {
        value: '$',
        color: "#3A7F6A",
        highlight: "#28FFBD",
        label: "Education"
    },
    {
        value: '$',
        color: "#20CC98",
        highlight: "#558999",
        label: "Food"
    },
    {
        value: '$',
        color: "#000000",
        highlight: "#28FFBD",
        label: "Miscellaneous"
    }
]
