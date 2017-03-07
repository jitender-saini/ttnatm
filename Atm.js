function	Atm(){
	this.twoK=0;
	this.fiveHundred=0;
	this.oneHundred=0;
	this.currentAmount=0;

	this.add = function(obj)
	{
		if(obj.twoK>0)
		this.twoK=this.twoK+obj.twoK;
		if(obj.fiveHundred>0)
		this.fiveHundred=this.fiveHundred+obj.fiveHundred;
		if(obj.oneHundred>0)
		this.oneHundred=this.oneHundred+obj.oneHundred;

	}

	this.retss= function(){
		return this.currentAmount;
	}

	this.updates = function(){
		var ww=document.getElementById("usr").value;
		var ss=("<tr bgcolor='red'><td>"+ (i+1) +"</td><td>" + ww+"</td><td>"+ this.twoK+"</td><td>"+ this.fiveHundred+"</td><td>"+ this.oneHundred+"</td><td>"+ atmObj.retss()+"</td></tr>");

		$('#tab_logic').append(ss);
		i++;
	}




	this.disp = function(){
		this.currentAmount=this.twoK*(2000)+this.fiveHundred*(500)+this.oneHundred*(100);
		document.getElementById("curAmt").innerHTML="₹"+this.currentAmount;
	}

	this.withdraw = function(withdrawAmount)
	{
		var withdrawAmount2=withdrawAmount;
		var count= [this.twoK, this.fiveHundred,this.oneHundred];
		var denomination=[2000,500,100];
		if(withdrawAmount%100!=0)
		{
			alert("Please enter the amount which is multiple of 100");
			return;
		}

		if(this.currentAmount < withdrawAmount)
		{
			alert("Not enough money");
			return;
		}

		for (var i = 0; i < 3; i++)
		{
			console.log(withdrawAmount);
			if (denomination[i] <= withdrawAmount)
			{
				var noteCount = parseInt(withdrawAmount /denomination[i] );
				console.log(noteCount);
				if(count[i]>0)
				{
					if(noteCount<=count[i])
					{
						withdrawAmount-=noteCount*denomination[i];
						count[i] =  count[i]- noteCount;
					}

				}
			}
		}
		if(withdrawAmount!=0)
		{
			alert("Error");
		}
		else
		{
			this.currentAmount-=withdrawAmount2;
			this.twoK=count[0];
			this.fiveHundred=count[1];
			this.oneHundred=count[2];
			atmObj.updates();
		}
		console.log(this.twoK,this.fiveHundred,this.oneHundred);

	}

	var i = 1;

}
//module.export={Atm:Atm()};
var atmObj = new Atm();
