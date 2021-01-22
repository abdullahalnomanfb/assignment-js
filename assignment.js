//    kilometerToMeter Part 

function kilometerToMeter(kilometer) {


  var meter = kilometer * 1000;

  return meter;


}

// var value = kilometerToMeter(7);
// console.log(value);



// budgetCalculator part

function budgetCalculator(watch, phone, laptop) {


  var watchPrice = watch * 50;
  var phonePrice = phone * 100;
  var laptopPrice = laptop * 500;
  var total = watchPrice + phonePrice + laptopPrice;

  return total;

}

// var value2 = budgetCalculator(4, 6, 2);
// console.log(value2);



// hotelCost Part

function hotelCost(days) {

  if (days <= 10) {

    var totalAmount = 100 * days;

  }
  else if (days <= 20) {

    var firstitem = 10 * 100;
    var remaing = days - 10;
    var seconditem = remaing * 80;
    totalAmount = firstitem + seconditem;

  }
  else {

    var firstitem = 10 * 100;
    var seconditem = 10 * 80;
    var remaing = days - 20;
    var thirditem = remaing * 50;

    totalAmount = firstitem + seconditem + thirditem;

  }
  return totalAmount;

}

// var value3 = hotelCost(28);
// console.log(value3)



// megaFriend Part

var friends = ["shakib", "tamim", "mushfiqur", "hasan", "mustafizur"];

function megaFriend(names) {

  var longestWord = "";

  for (i = 0; i < names.length; i++) {

    var element = names[i];

    if (longestWord.length < element.length) {

      longestWord = element;
    }

  }
  return longestWord;

}

// var result = megaFriend(["noman", "esha", "rakib", "abdullah", "shakib", "nasir"]);
// console.log(result);
