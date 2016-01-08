
var num1 = 0;
var num2 = 0;
var operator ='';
var resultTotal =0;
var startFlag = true;



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


  console.log(output);
     
      
     switch(input) {
      case '+':
       
         num1 = parseFloat(output.innerHTML);
         
         output.innerHTML = '';
        
         operator = input;
        break;
      case '-':
       
        num1 = parseFloat(output.innerHTML);
         
         output.innerHTML = '';
         console.log("this is our operator input", input);
         operator = input;
        break;
      case 'X':
    
        num1 = parseFloat(output.innerHTML);
       
         output.innerHTML = '';
        
         operator = input;
        break;
     case '/':
       
       num1 = parseFloat(output.innerHTML);
      
         output.innerHTML = '';
        
         operator = input;
        break;
     case ' % ':
      
       output.innerHTML = (parseFloat(output.innerHTML)/100).toString();
        break;
     case '+/-':
   
         num1 = -parseFloat(output.innerHTML);   
         output.innerHTML = -output.innerHTML;         
        break;
     case ' = ':
      
       num2 = parseFloat(output.innerHTML);
       
       resultTotal = compute(num1,num2,operator);
       
       output.innerHTML = resultTotal;
       

       num1 = 0;
       num2 = 0;
       startFlag = true;

        break;
      case '.':
       //console.log('decimal')
       
         
         if(output.innerHTML.indexOf('.') === -1 ){
          output.innerHTML = output.innerHTML + '.';
         }


        break;
      case 'AC':
       //console.log('erase')
       num1 = 0;
       num2 = 0;
       resultTotal = 0;
       output.innerHTML = '';
       input.innerHTML = '';
        break;
        default:
        //console.log("its a number");

         if(startFlag === true){
           output.innerHTML = button.innerHTML;
           startFlag = false;
        }
         else{
           output.innerHTML = output.innerHTML + button.innerHTML;
        }

         break;

    
 }
    
}

function compute(number1,number2,operator){

  var result = 0;

switch(operator) {
      case '+':
       //console.log("its a addition!");
       num1 + num2;
       result = num1 + num2;
    return result;      
      case '-':
       // console.log('subtract')
        result = num1 - num2;
        return result;
        break;

      case 'X':
      // console.log('multiply')
       result = num1 * num2;
        return result;
        break;

      case '/':
       //console.log('divide')
        result = num1 / num2;
        return result;
        break;
      case ' % ':
       //console.log('percent')
        break;
      case '+/-':
      
        break;
      case ' = ':
       //console.log('equals')
       num2 = output.innerHTML;
       

        break;
      case '.':
      // console.log('decimal')
        break;
      case 'AC':
       //console.log('erase')
        break;
        default:
       // console.log("its a number");
        output.innerHTML = output.innerHTML + button.innerHTML;
        break;

    
 }
  

}
     
 



