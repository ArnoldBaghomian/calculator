
var num1 = 0;
var num2 = 0;
var operator ='';
var resultTotal =0;



document.addEventListener('DOMContentLoaded', function(){
	var x = document.getElementsByClassName('button');

	for(var i = 0; i < x.length; i++) {
		x[i].addEventListener('click', boxClicked);
	}

});


function boxClicked(event){

	console.log(event)

	var button = event.target;
	

	var input = button.innerHTML;

	var output = document.getElementById('results');

     //console.log("type of results", typeof results.innerHTML);
     //console.log("type of input", typeof button.innerHTML);

     console.log(output);



     

    

     var hasNumber = /\d/;

     
     
     	
     switch(input) {
       case '+':
       console.log("its a addition!");
         num1 = parseInt(output.innerHTML);
         console.log("this is number 1", num1);
         output.innerHTML = '';
         console.log("this is our operator input", input);
         operator = input;
        break;
       case '-':
        console.log('subtract')
        num1 = parseInt(output.innerHTML);
         console.log("this is number 1", num1);
         output.innerHTML = '';
         console.log("this is our operator input", input);
         operator = input;
        break;
       case 'X':
       console.log('multiply')
        num1 = parseInt(output.innerHTML);
         console.log("this is number 1", num1);
         output.innerHTML = '';
         console.log("this is our operator input", input);
         operator = input;
        break;
       case '/':
       console.log('divide')
       num1 = parseInt(output.innerHTML);
         console.log("this is number 1", num1);
         output.innerHTML = '';
         console.log("this is our operator input", input);
         operator = input;
        break;
       case ' % ':
       console.log('percent')
        break;
       case '+/-':
       console.log('flip')
         num1 = -parseInt(output.innerHTML);
         //resultTotal = compute(num1,num2,operator); 
         output.innerHTML = num1;
         //operator = resultTotal;
         
        
        break;
        case ' = ':
       console.log('equals')
       num2 = parseInt(output.innerHTML);
       console.log('this is num2',num2);
       console.log('this is num1', num1);
       console.log('this is our operator', operator)
       resultTotal = compute(num1,num2,operator);
       console.log("result from compute:",resultTotal);  
       output.innerHTML = resultTotal;
       console.log("output.innerHTML",output.innerHTML);
        break;
       case '.':
       console.log('decimal')
        break;
       case 'AC':
       console.log('erase')
       num1 = 0;
       num2 = 0;
       resultTotal = 0;
       output.innerHTML = '';
       input.innerHTML = '';
        break;
        default:
        console.log("its a number");
        output.innerHTML = output.innerHTML + button.innerHTML;
        break;

    
 }
    
}

function compute(number1,number2,operator){

	var result = 0;

switch(operator) {
       case '+':
       console.log("its a addition!");
       num1 + num2;
       result = num1 + num2;
 		return result;      
       case '-':
        console.log('subtract')
        result = num1 - num2;
        return result;
        break;

       case 'X':
       console.log('multiply')
       result = num1 * num2;
        return result;
        break;

       case '/':
       console.log('divide')
        result = num1 / num2;
        return result;
        break;
       case ' % ':
       console.log('percent')
        break;
       case '+/-':
      // console.log('flip')
       //result = -num1;
        break;
        case ' = ':
       console.log('equals')
       num2 = output.innerHTML;
       console.log('this is num2',num2);
       console.log('this is num1', num1);
       console.log('this is our operator', operator)

        break;
       case '.':
       console.log('decimal')
        break;
       case 'AC':
       console.log('erase')
        break;
        default:
        console.log("its a number");
        output.innerHTML = output.innerHTML + button.innerHTML;
        break;

    
 }
  



}
     
 






