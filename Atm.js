function	Atm(){
	this.twoK;
	this.fiveHundred;
	this.oneHundred;
	this.currentAmount;

	function add(noOf2kNotes,noOf500Notes,noOf100Notes)
	{
		if(noOf2kNotes>0)
			this.twoK=this.twoK+noOf2kNotes;
		if(noOf500Notes>0)
		this.fiveHundred=this.fiveHundred+noOf500Notes;
		if(noOf100Notes>0)
		this.oneHundred=this.oneHundred+noOf100Notes;
		disp();

	}

	function disp(){
		this.currentAmount=this.twoK*(2000)+this.fiveHundred*(500)+this.oneHundred*(100);
		document.getElementById("curAmt").innerHTML="₹"+this.currentAmount;
	}

	function withdraw(withdrawAmount)
	{
		var withdrawAmount2=withdrawAmount;
		var count[this.twoK, this.fiveHundred,this.oneHundred];
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
			currentAmount-=withdrawAmount2;
			this.twoK=count[0];
			this.fiveHundred=count[1];
			this.oneHundred=count[2];
		}
		console.log(this.twoK);
	}
}
module.export.Atm=Atm;
