//Coding chalenge 1
var infoMark1={
    mass: 78,
    height:1.69
}
var infoJohn1={
    mass:  92,
    height:1.95
}
var infoMark2={
    mass: 95 ,
    height:1.88
}
var infoJohn2={
    mass: 85,
    height:1.76
}

var calBMI=(inf)=>{
    return inf.mass/inf.height**2;
}
//data1
var check1=calBMI(infoMark1)>calBMI(infoJohn1)
console.log(check1)
//data2
var check2=calBMI(infoMark2)>calBMI(infoJohn2)
console.log(check2)
//Coding Challenge #2
//data 1
var bmiHigher1=()=>{
    return check1?'Mark\'s BMI is higher than John\'s':'John\'s BMI is higher than Mark\'s'
}
console.log(bmiHigher1())
//data 2
var bmiHigher2=()=>{
    return check2?'Mark\'s BMI is higher than John\'s':'John\'s BMI is higher than Mark\'s'
}
console.log(bmiHigher2())
//Coding Challenge #3
//§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
var Dolphins1={
    one:96,
    two:108,
    three:89
}
var Koalas1={
    one:88,
    two:91,
    three:110
}
var avg=(inf)=>{
    return (one+two+three)/3;
}


//§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
//§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
