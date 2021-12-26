//to read history innerText /

function gethistory(){
    return document.getElementById("history-value").innerText;
}

//to Show history innerText //
function printhistory(num){
    return document.getElementById("history-value").innerText=num;
}
//example to see output//
//printhistory("2525252")


//same do output
function getoutput(){
    return document.getElementById("output-value").innerText;
}
function printoutput(num){
    //when output is empty than this function use
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}
//getformatted formated the number e.g 56,556
///printoutput("56556");
//formatted ka function
function getFormattedNumber(num){
    if(num=="-"){//when - value assing
        return "-";
    }
    var n=Number(num);
    var value = n.toLocaleString("en");
    return value;

}
// printoutput("56556");
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

//to see out put
// alert(reverseNumberFormat(gethistory()));
// alert(reverseNumberFormat(getoutput()));

//operator click
var operator=document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        //alert("this is operator clicked:"+ this.id)//to check click the  operator when click the button to inducated the opertor which are click

        //claer the button 
        if(this.id=="clear"){//clear is id name of button
            printhistory("");
            printoutput("");
        }

        //back space function CE
        else if(this.id=="backspace"){
            var output=reverseNumberFormat(getoutput()).toString();
            if(output){//if output has value     
                output=output.substr(0,output.length-1);//substr(from: number, length?: number)
                printoutput(output);
            }
        }

        //operatorto joint the operator
        else{
            var output=getoutput();
            var history=gethistory();
            if(output!==""){
                output=reverseNumberFormat(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printoutput(result);
                    printhistory("");

                }
                else{
                    history=history+this.id;
                    printhistory(history);
                    printoutput("");

                }
            }
        }



    });
}
//same as number click
var number=document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
    number[i].addEventListener('click',function(){
       //alert("this is number clicked:"+ this.id)// to check click the  operator when click the button to inducated the opertor which are click
       
       //click kar na per output mai dekha
       var output=reverseNumberFormat(getoutput());
       if(output!=NaN){
        output=output+this.id;
        printoutput(output);
       }
    });
}


