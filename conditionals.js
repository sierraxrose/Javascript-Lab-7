$(document).ready(function () {
    $("#clickForm").submit(countClick);
    $("#ageForm").submit(checkAge);
    $("#taxForm").submit(calcSalesTax);
    $("#catForm").submit(recommendFood);
    $("#cardForm").submit(drawCard);


    var click = 0;


	function countClick(event) {
	    event.preventDefault();

	    document.getElementById("clickCountButton").value = click++;


        $("p#clickCountOutput").text(click);



        if (click > 9) {
            click = 0;
        }
	}


    function checkAge(event) {
        event.preventDefault();


        let birthYear = $("input#birthYear").val();

        let age = "";



        if (birthYear > 2003) {
            age = "Child";
        }
        else {
            age = "Adult";
        }


        $("p#birthYearOutput").text(age);

    }

    function calcSalesTax(event) {
        event.preventDefault();


        let amount = $("input#purchaseAmount").val();


        let state = $("input#state").val();


        let tax


        if (state=="WI") {
            tax = .05;
        }

        else if (state=="IL") {
            tax = .08;
        }

        else if (state=="MN") {
            tax = .075;
        }

        else if (state=="MI") {
            tax = .055;
        }

        let total = amount * tax;

        $("p#salesTaxOutput").text(total);
    }





    function recommendFood(event) {
        event.preventDefault();


        let catAge = $("input#catAge").val();

        let catFood = "";


        if (2 <= catAge) {
            catFood = "Adult Chow";
        }
        if (catAge < 2) {
            catFood = "Kitten Chow";
        }
        if (catAge >= 10) {
            catFood = "Senior Chow";
        }


        $("p#catAgeOutput").text(catFood);

    }

    function drawCard(event) {
        event.preventDefault();

        // Generate a random card face value (1 - 13)
        let faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        let suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        let description;
        let description1;

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"
        if (faceValue == 1) {
            let description = "Ace";
        }
        if (faceValue == 2) {
            let description = "2";
        }
        if (faceValue == 3) {
            let description = "3";
        }
        if (facevalue == 4) {
            let description = "4";
        }
        if (facevalue == 5) {
            let description = "5";
        }
        if (facevalue == 6) {
            let description = "6";
        }
        if (facevalue == 7) {
            let description = "7";
        }
        if (facevalue == 8) {
            let description = "8";
        }
        if (facevalue == 9) {
            let description = "9";
        }
        if (facevalue == 10) {
            let description = "10";
        }
        if (facevalue == 11) {
            let description = "Jack";
        }
        if (facevalue == 12) {
            let description = "Queen";
        }
        if (facevalue == 13) {
            let description = "King";
        }
        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"

        if (suit == 1) {
            description1 = "Clubs";
        }
        if (suit == 2) {
            description1 = "Spades";
        }
        if (suit == 3) {
            description1 = "Hearts";
        }
        if (suit == 4) {
            description1 = "Diamonds";
        }

        // Print the card's description to the <p> with
        // ID of "drawCardOutput"
        let descriptions = ` ${description} of ${description1}`;

        $("p#drawCardOutput").text(descriptions);

    }

});