
function Transaction(two,five,one) {
  this.twoK = two;
  this.fiveHundred = five;
  this.oneHundred = one;
  this.amount = 0;

  this.computeTotalAmt = function(){
    var totAmt = (this.twoK)*2000+(this.fiveHundred)*500+(this.oneHundred)*100;
    return totAmt;
  }

  var i = 0;
	this.update = function(){
		var ss=("<tr bgcolor='green'><td>"+ (i+1) +"</td><td>" + atmObj.retss() +"</td><td>"+ this.twoK+"</td><td>"+ this.fiveHundred+"</td><td>"+ this.oneHundred+"</td><td>"+ atmObj.retss()+"</td></tr>");

		$('#tab_logic').append(ss);
		i++;
	}
  this.hhh=function(){
    return withd;
  }

}
var max=0;
function transact() {
  $('#money').attr('disabled', true);
  var two=document.getElementById("two-thousand").value;
  //alert(two);
  if(two=='')
    two=0;
  else {
    parseInt(two);
  }
  var five=document.getElementById("five-hundred").value;
  if(five=='')
    five=0;
  else {
    parseInt(five);
  }
  var one=document.getElementById("one-hundred").value;
  if(one=='')
    one=0;
  else {
    parseInt(one);
  }
  max=parseInt(document.getElementById("max").value);
  var obj = new Transaction(two,five,one);
  this.amount = obj.computeTotalAmt();
//  console.log(obj);
  atmObj.add(obj)
  atmObj.disp();
  obj.update();
}
//module.export.transact = transaction
var withd=0;




function withdrawMoney(){
    withd=parseInt(document.getElementById("usr").value);
    if(max >= withd)
     atmObj.withdraw(withd);
  else {
    alert("Withdrawl Amount is greater than limit defined")
  }
}
