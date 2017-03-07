//var transact = require("./transaction")

function	Atm(){
  this.twoK=0;
  this.fiveHundred=0;
  this.oneHundred=0;
  this.currentAmount=0;

  this.add = function(noOf2kNotes,noOf500Notes,noOf100Notes)
  {
    if(noOf2kNotes>0)
    this.twoK=this.twoK+noOf2kNotes;
    if(noOf500Notes>0)
    this.fiveHundred=this.fiveHundred+noOf500Notes;
    if(noOf100Notes>0)
    this.oneHundred=this.oneHundred+noOf100Notes;
  }

  this.disp = function (){
    this.currentAmount=this.twoK*(2000)+this.fiveHundred*(500)+this.oneHundred*(100);
    document.getElementById("curAmt").innerHTML="₹"+this.currentAmount;
  }

  

}
// function util() {
//   var first = new Atm();
//   var two=parseInt(document.getElementById("two-thousand").value);
//   var five=parseInt(document.getElementById("five-hundred").value);
//   var one=parseInt(document.getElementById("one-hundred").value);
//   first.add(two,five,one);
//   first.disp();
//   transact.transact();
//
//
//   console.log(two,five,one);
//   console.log(first.twoK  );
// }


function Transaction(two,five,one) {
  this.twoK = two;
  this.fiveHundred = five;
  this.oneHundred = one;

  this.computeTotalAmt = function(){
    var totAmt = (this.twoK)*2000+(this.fiveHundred)*500+(this.oneHundred)*100;
    return totAmt;
  }

}

function transact() {
  var two=parseInt(document.getElementById("two-thousand").value);
  var five=parseInt(document.getElementById("five-hundred").value);
  var one=parseInt(document.getElementById("one-hundred").value);
  var obj = new Transaction();
  //console.log(obj);
  atmObj
}
