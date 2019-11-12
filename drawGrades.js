var penguinPromise = d3.json("penguins/classData.json")

penguinPromise.then(function(penguins)
{                  
    console.log("works", penguins)                
},
                        
function(error)
{   
console.log("error", error)   
})


var getGrade = function(quiz)
{
    return quiz.grade;
}

var getDay = function(data)
{
    return data[0].quizes.map(days)
}

