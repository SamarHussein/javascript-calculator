$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
	var number = "";
    var newnumber = "";
    var operator = "";
    var temp = "";
    var equal = "";
    var totaldiv = $("#total");
    var current = $("#history");
    totaldiv.text("0");
    current.text("");
   
    $("#numbers > a").not("#clear,#clearall").click(function(){
       number += $(this).text();
       totaldiv.text(number);
       testNumLength(number);

    }); 
    $("#operators > a").click(function(){
    	check();
    	if(equal == ""){
    		current.append(number);
    	}
    	else {
    		current.text(number);
    		equal = "";
    	}
        operator = $(this).text();
        current.append(operator);
        if(temp == ""){
           if(newnumber == ""){
            newnumber = number;  
            number = "";  
          }
        }
        else{
          newnumber = temp;
        }
        totaldiv.text(newnumber);
    });

    function check(){

	  if(number != "" && newnumber != ""){
	    if (operator == "+") {
	      temp = (parseFloat(number, 10) + parseFloat(newnumber,10)).toFixed(2).toString(10).replace(/(\.0+|0+)$/, '');
	    }
	    else if(operator == "-"){
	      temp = (parseFloat(newnumber, 10) - parseFloat(number,10)).toFixed(2).toString(10).replace(/(\.0+|0+)$/, '');
	    }
	    else if(operator == "/"){
	      temp = (parseFloat(newnumber, 10) / parseFloat(number,10)).toFixed(2).toString(10).replace(/(\.0+|0+)$/, '');
	    }
	    else {
	      temp = (parseFloat(newnumber, 10) * parseFloat(number,10)).toFixed(2).toString(10).replace(/(\.0+|0+)$/, '');
	    }
	    newnumber = temp;
	    number = "";
	    current.text(temp);
	  }
	}

    $("#decimal").click(function(){
       var numOfDecs = 0;
       for(i=0; i < number.length; i++){
           if(number[i] == ".")
           numOfDecs++;
       }
       if(numOfDecs === 0){
           number += $(this).text();
           totaldiv.text(number);
		   testNumLength(number);
       }
    });
    $("#equals").click(function(){
    	if(equal == ""){
	    	current.append(number);
	    	equal = "=";
	    	if (operator === "+"){
				number = (parseFloat(number, 10) + parseFloat(newnumber,10)).toFixed(2).toString(10).replace(/(\.0+|0+)$/, '');
			} else if (operator === "-"){
				number = (parseFloat(newnumber, 10) - parseFloat(number,10)).toFixed(2).toString(10).replace(/(\.0+|0+)$/, '');
			} else if (operator === "/"){
				number = (parseFloat(newnumber, 10) / parseFloat(number,10)).toFixed(2).toString(10).replace(/(\.0+|0+)$/, '');
			} else if (operator === "*"){
				number = (parseFloat(newnumber, 10) * parseFloat(number,10)).toFixed(2).toString(10).replace(/(\.0+|0+)$/, '');
			}
			current.append(equal + number);
			newnumber = "";
			temp = "";
			totaldiv.text(number);
			testNumLength(number);
		}

    });
    $("#clear,#clearall").click(function(){
        number = "";
        totaldiv.text("0");
        if($(this).attr("id") === "clearall"){
        	newnumber = "";
  			current.text("");
  			operator = "";
  			temp = "";
  			number = "";
  			equal = "";
        }
    });

});