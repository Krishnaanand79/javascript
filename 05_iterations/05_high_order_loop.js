const coding = ["js", "ruby","java" , "python", "cpp"]

coding.forEach(function (val){
    // console.log(val)
})

coding.forEach( (item) => {  // using arrow keywords 

    // console.log(item);
})


function printMe(item){   // printME is a function that what we deliver that we print 
    // console.log(item);
}
// coding.forEach(printMe)

coding.forEach( ( item , index , arr) =>{
    // console.log(item,index , arr);
})

const mycoding = [
    {
        languageName : "javascript",
        langauageFileName : "js"
    },
    {
        languageName : "java",
        langauageFileName : "java"
    },
    {
        languageName : "python",
        langauageFileName : "py"
    },
]

mycoding.forEach(  (item) => {
    console.log(item.langauageFileName);
})


