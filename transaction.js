

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
  console.log(obj);

//s  console.log(obj)
}
module.export.transact = transaction
