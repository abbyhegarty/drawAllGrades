var penguinPromise = d3.json("penguins/classData.json")

penguinPromise.then(function(data)
{                  
   getGrade(data);
    console.log("works", data)                
},
                        
function(error)
{   
console.log("error", error)   
})


var getGrade = function(quiz)
{
   console.log(quiz.grade);
    return quiz.grade;
}

var getDay = function(data)
{
    return data[0].quizes.map(days);
}
