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

bmiMark = calculateBMI(massMark, heightMark).toFixed(2);
bmiJohn = calculateBMI(massJohn, heightJohn).toFixed(2);

markHigherBMI = bmiMark > bmiJohn;

if (markHigherBMI) // If Mark's BMI is higher than John's
{
    console.log("Mark's BMI is higher than John's!");
}
else // If Mark's BMI is not higher than John's
{
    console.log("Mark's BMI is not higher than John's!");
}

if (markHigherBMI) // If Mark's BMI is higher than John's
{
    console.log("Mark's BMI ("+ bmiMark +") is higher than John's BMI ("+ bmiJohn +")!");
}