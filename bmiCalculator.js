//create a BMI (Body Mass Index) calculator 
//formula: BMI = weight / height

function bmiCalculator(weight, height){
      var bmi = weight /(height * height);
    //var bmi = weight/Math.pow(height * 2);
      return bmi;
    //return Math.round(bmi);
}
var bmi = bmiCalculator(60, 1.7)
console.log(bmi);
