//$(document).ready(function(){
  // var i=0;
  // $("#add_row").click(function(){
  //   $('#addr'+i).html("<td>"+ (i+1) +"</td><td> 1231</td><td>142525</td><td>635645</td><td>6767</td><td>0909</td>");
  //
  //   $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
  //   i++;
  // });

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
  var obj = new Transaction()
}
