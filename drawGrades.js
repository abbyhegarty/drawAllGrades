var penguinPromise = d3.json("penguins/classData.json")

penguinPromise.then(function(data)
{                  
   setup(data);
    console.log("works", data)                
},
                        
function(error)
{   
console.log("error", error)  
    
})

var screen = {width: 800, height: 800}
var margins = {top:50, right:50, bottom:50, left:30}

var setup = function(data)
{
    d3.select("svg")
    .attr("width",screen.width)
    .attr("height",screen.height)
    .append("g")
    .attr("id","graph")
    .attr("transform","translate("+margins.left+","+margins.top+")");
    
    
    var width = screen.width - margins.left - margins.right;
    var height = screen.height - margins.top - margins.bottom;
    
    var xScale = d3.scaleLinear()
                    .domain([37,0])
                    .range([height,0])
    var yScale = d3.scaleLinear()
                    .domain([0,10])
                    .range([height,0])
    
    var xAxis = d3.axisBottom(xScale)
    var yAxis = d3.axisLeft(yScale)
    d3.select("svg")
        .append("g")
        .classed("axis",true);
    
    d3.select(".axis")
        .append("g")
        .attr("id","xAxis")
        .attr("transform","translate("+margins.left+","+(margins.top+height) +")")
        .call(xAxis)
    
    d3.select(".axis")
        .append("g")
        .attr("id","yAxis")
        .attr("transform","translate(25,"+margins.top+")")
        .call(yAxis)
    
    //drawLegend(data,cScale);
    drawArray(data,xScale,yScale);

}

var drawArray = function(data,xScale,yScale,cScale)
{
    var arrays = d3.select("#graph")
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("fill", "none")
    .attr("stroke", "black")      
    .attr("stroke-width", 1.5)
    .on("mouseover", function(d)

        {d3.select("body").append("img").attr("src", "penguins/" + data.picture);
         console.log(data.picture)
})
    
    .on("mouseout", function()
    {
        d3.select("body").selectAll("img").remove();
    })
    
var lineGenerator = d3.line()
    .x(function(num,index){return xScale(index)})
    .y(function(num){return yScale(num)})
   // .curve(d3.curveNatural)
arrays.datum(function(obj)

{
    return obj.quizes.map(function(d){return d.grade;});
})
    .append("path")  
    .attr("d", lineGenerator);
}
