let input;
let index;
let valid;
	
function submit()
{
    input = document.getElementById("input").value;
    index = 0;
    valid = true;
    start();
    if(valid == true){
        document.getElementById("output").innerHTML = input + " is valid";
		document.getElementById("output").style.color = "#00FFFF";
    }else{
        document.getElementById("output").innerHTML = input + " is invalid"
		document.getElementById("output").style.color = "#FF1493";
    }
}
	
function token(i)
{
    if(input.charAt(index)==i)
	{
        index++;
        return true;
    }else{
        return false;
    }
}
	
function start()
{
	EXP();
	if(!token('$'))
	{
		valid = false;
	}
}

function EXP()
{
    TERM();
    while(token('+')||token('-'))
	{
        TERM();
    }
}

function TERM(){
    FACTOR();
    while(token('*')||token('/'))
	{
        FACTOR();
    }
}

function FACTOR()
{
    if(token('('))
	{
        EXP();
		if(!(token(')')))
		{
			valid = false;
		}
    }else{
        DIGIT();
    }
}

function DIGIT()
{
    if(!(token('0')||token('1')||token('2')||token('3')))
	{
		valid = false;
	}
}