var tip, bill, total;

function calculateTip(bill) {
    var tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    total = bill + tip;
    console.log("The bill was " +bill + ", the tip was " + tip + ", and the total value was " + total);
}

bill1 = 275;
bill2 = 40;
bill3 = 430;

calculateTip(bill1);
calculateTip(bill2);
calculateTip(bill3);