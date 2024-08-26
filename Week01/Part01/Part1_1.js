var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn;
var markHigherBMI;

function calculateBMI(mass, height)
{
    return mass / (height * height);
}

massMark = 78;
massJohn = 92;
heightMark = 1.69;
heightJohn = 1.95;

bmiMark = calculateBMI(massMark, heightMark);
bmiJohn = calculateBMI(massJohn, heightJohn);

markHigherBMI = bmiMark > bmiJohn;

console.log("Is Mark's BMI higher than John's? " + markHigherBMI);

markHigherBMI = calculateBMI(95, 1.88) > calculateBMI(85, 1.76);

console.log("Is Mark's BMI higher than John's? " + markHigherBMI);