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
    this.currentAmount=this.twoK*(2000)+this.fiveHundred*(500)+this.oneHundred*(100);alert(this.currentAmount)
    document.getElementById("curAmt").innerHTML="₹"+this.currentAmount;
  }

  var i = 1;
  this.update = function(){
    $('#addr0'+i).html("<td>"+ (i+1) +"</td><td>" + 0 +"</td><td>"+ this.twoK+"</td><td>635645</td><td>6767</td><td>0909</td>");

    $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
    i++;
  }

}
function util() {
  var first = new Atm();
  var two=parseInt(document.getElementById("two-thousand").value);
  var five=parseInt(document.getElementById("five-hundred").value);
  var one=parseInt(document.getElementById("one-hundred").value);
  first.add(two,five,one);
  first.disp();

  console.log(two,five,one);
  console.log(first.twoK  );
}
