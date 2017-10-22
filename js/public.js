function rem(win, doc){
    function setFontSize() {
        var winWidth =  window.innerWidth;
        var size = (winWidth / 640) * 100;
        doc.documentElement.style.fontSize = (size < 100 ? 45 : 45) + 'px' ;
    }

    var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';

    var timer = null;

    win.addEventListener(evt, function () {
        clearTimeout(timer);

        timer = setTimeout(setFontSize, 300);
    }, false);

    win.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(timer);

            timer = setTimeout(setFontSize, 300);
        }
    }, false);
    setFontSize();
};
function idcard15to18(value)
{
	var year=(new Date()).getFullYear().toString().match(/\d{2}/g)[1];
	if(value.length==15)
	{
		var theyear=value[6]+value[7];
		if(parseInt(theyear)>=parseInt(year))
		{
			var result=value.substring(0,6)+"19"+value.substring(6,15);
		}
		else
		{
			var result=value.substring(0,6)+"20"+value.substring(6,15);
		}
		return check18idcard(result,false);;
	}
	else
	{
		return false;
	}
}
function check18idcard(value,ischeck)
{
	var sum=[
		value[0]*7,
		value[1]*9,
		value[2]*10,
		value[3]*5,
		value[4]*8,
		value[5]*4,
		value[6]*2,
		value[7]*1,
		value[8]*6,
		value[9]*3,
		value[10]*7,
		value[11]*9,
		value[12]*10,
		value[13]*5,
		value[14]*8,
		value[15]*4,
		value[16]*2,
		];
		var result=0;
		for(var i=0;i<sum.length;i++)
		{
			result=result+sum[i];
		}
	if(ischeck)
	{
		switch(result%11)
		{
			case 0:if(value[value.length-1]!=="1"){return false;}else{return true;};
			case 1:if(value[value.length-1]!=="0"){return false;}else{return true;};
			case 2:if(value[value.length-1].toUpperCase()!=="X"){return false;}else{return true;};
			case 3:if(value[value.length-1]!=="9"){return false;}else{return true;};
			case 4:if(value[value.length-1]!=="8"){return false;}else{return true;};
			case 5:if(value[value.length-1]!=="7"){return false;}else{return true;};
			case 6:if(value[value.length-1]!=="6"){return false;}else{return true;};
			case 7:if(value[value.length-1]!=="5"){return false;}else{return true;};
			case 8:if(value[value.length-1]!=="4"){return false;}else{return true;};
			case 9:if(value[value.length-1]!=="3"){return false;}else{return true;};
			case 10:if(value[value.length-1]!=="2"){return false;}else{return true;};
			default:return false;
		}
	}
	else if(!ischeck)
	{
		switch(result%11)
		{
			case 0:return value+"1";
			case 1:return value+"0";
			case 2:return value+"x";
			case 3:return value+"9";
			case 4:return value+"8";
			case 5:return value+"7";
			case 6:return value+"6";
			case 7:return value+"5";
			case 8:return value+"4";
			case 9:return value+"3";
			case 10:return value+"2";
			default:return value;
		}
	}
}