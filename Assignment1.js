function calculateBMI() {
    var age = document.getElementById("ageNumber").value;
    var gender = document.getElementById("genderOpt");
    var genderValue = gender.options[gender.selectedIndex].value;
    var heightFeet = document.getElementById("feetMeasurement").value;
    var heightInches = document.getElementById("inchesMeasurement").value;
    var weightStones = document.getElementById("stonesMeasurement").value;
    var weightPounds = document.getElementById("poundsMeasurement").value;
    

    var radioButtons = document.getElementsByName("radioButtons");
    var radioValue;

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            radioValue = radioButtons[i].value;
        }
    }


    //(Male) BMR = 66 + ( 6.2 × weight in pounds ) + ( 12.7 × height in inches ) – ( 6.76 × age in years )
    //(Female) BMR = 655.1 + ( 4.35 × weight in pounds ) + ( 4.7 × height in inches ) - ( 4.7 × age in years )


    //Calculations
    var stonesToPound = 14 * weightStones
    weightPounds = parseFloat(weightPounds) + parseFloat(stonesToPound);

    var feetToInches = 12 * heightFeet;
    heightInches = parseFloat(heightInches) + parseFloat(feetToInches);

    var BMR;

    if (genderValue == "male") {

        var val1, val2, val3;
        val1 = 6.2 * weightPounds;
        val2 = 12.7 * heightInches ;
        val3 = 6.76 * age;
        //alert(val1);
        BMR = 66 + parseFloat(val1) + parseFloat(val2) - parseFloat(val3);

    } else if (genderValue == "female") {

        var val1, val2, val3;
        val1 = 4.35 * weightPounds;
        val2 = 4.7 * heightInches;
        val3 = 4.7 * age;
       // alert(val1);
        BMR = 655.1 + parseFloat(val1) + parseFloat(val2) - parseFloat(val3);
    }

    var onlyBmr = BMR;

    switch (radioValue) {
        case "1":
            BMR = BMR * 1.2;
            break;
        case "2":
            BMR = BMR * 1.375;
            break;
        case "3":
            BMR = BMR * 1.55;
            break;
        case "4":
            BMR = BMR * 1.725;
            break;
        case "5":
            BMR = BMR * 1.9;
            break;
        
    }

    alert("BMR: "+onlyBmr +"\nKiloCalories(Per Day): "+BMR);

    
    

}