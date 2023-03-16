let arr=["",
    "Andhra Pradesh" ,
"Arunachal Pradesh" ,
    "Assam" ,
   "Bihar ",
   " Chhattishgarh" ,
   " Goa ",
   " Gujarat" ,
    "Haryana" ,
   " HimachalPradesh" ,
  "  Jammu & Kashmir ",
   " Jharkhand" ,
   " Karnataka" ,
    "Kerala" ,
   " Madhya Pradesh" ,
    "Maharashtra ",
    "Manipur" ,
    "Meghalaya" ,
   " Mizoram" ,
    "Nagaland" ,
   " Odisha ",
   " Punjab",
   " Rajasthan" ,
  "  Sikkim ",
   " Tamil Nadu ",
   " Telangana ",
   " Tripura" ,
   " Uttar Pradesh" ,
   " Uttarakhand" ,
   " West Bengal "];



 //filling the state field   
let sel=document.getElementById("state");   
let fin="";
 for(value of arr)
 {
    fin +=`<option value='${value}'>${value}</option>` 
 }
 sel.getElementsByTagName("select")[0].innerHTML=fin;

 //clear all the errors after correcting it
 function clearerrors()
 {
     let errors=document.getElementsByClassName("formerror");
     for (item of errors){
         item.innerHTML="";
     }
 }
// set the error
 function seterror(id,error)  
 {
 document.getElementById(id).getElementsByClassName("formerror")[0].innerHTML=error;
 }
//validating the form
function myfun(){
let food=document.getElementsByName("choice")
    var newvar=0;
  for(var count=0;count<food.length;count++){   
if(food[count].checked==true){
    newvar++;
}
}
if(newvar>=3)  {
seterror("food","*please select only two options")
        return false;
}   
  }

 function validation(){
    let row=1;
            let returnvalue=true;
            clearerrors();       
            var check=/[A-Za-z]+$/;
            let pincheck=/^[0-9]{6}$/;
            
    let firstname=document.forms['myform']['ffname'].value;
    let lastname=document.forms['myform']['flname'].value;
    let gender=document.forms['myform']['fgender'].value;
   let food= document.forms['myform']['choice'];
    let address=document.forms['myform']['fadd'].value;
    let pincode=document.forms['myform']['fpc'].value;
    let state=document.forms['myform']['fstate'].value;
    let country=document.forms['myform']['fcountry'].value;
    //firstname    
        if(firstname=="" ){
            seterror('fname',"*please this field");
            returnvalue=false;
            }
        else if(firstname.length<2 && firstname.length>20){
            seterror("fname","**length of the name should be less than 20 character and greater than 2")
            returnvalue=false;
            }
        else if(firstname.match(check))
            returnvalue=true;
            else
            {
            seterror('fname',"*username should not contain any special charcters like .,&,$... and numbers");
            returnvalue=false;
            }
    //last name
        if(lastname=="" ){
        seterror('lname',"*please this field");
        returnvalue=false;
        }
        else  if(lastname.match(check))
        returnvalue=true;
        else
        {
        seterror('lname',"*username should not contain any special charcters like .,&,$... and numbers");
        returnvalue=false;
        }

    //gender
        if(gender=="")
        {
            seterror('gender',"*please this field");
            returnvalue=false;  
        }
    
    
    
    //pincode     
        if(pincode=="")
        {
            seterror('pincode',"*please this field");
            returnvalue=false;  
        }else
        if(pincode.match(pincheck))
            returnvalue=true;
            else
            {
            seterror('pincode',"*pincode should be of length 6");
            returnvalue=false;
            }
        
     //choice of food
            let str="",count=0;
            for(let i=0;i<food.length;i++){
                if(food[i].checked==true)
                {
                    str+=food[i].value+",";
                   count++;
             }
            }
            if(count>=2)
           returnvalue=true;
           else
   {
    seterror("food","*pls select atleast two options")
    returnvalue=false;
   }
    food=str;
    
    //address
        if(address==""){
            seterror('address',"*please this field");
            returnvalue=false;  
        }
     

    //state
        if(state=="")
        {
            seterror('state',"*please this field");
            returnvalue=false;  
        }
    //country
        if(country=="")
        {
            seterror('country',"*please this field");
            returnvalue=false;  
        }
 
 
 
 let display=document.getElementById("display");
 let newRow=display.insertRow(row);
  let cell1=newRow.insertCell(0);
  let cell2=newRow.insertCell(1);
  let cell3=newRow.insertCell(2);
  let cell4=newRow.insertCell(3);
  let cell5=newRow.insertCell(4);
  let cell6=newRow.insertCell(5);
  let cell7=newRow.insertCell(6);
  let cell8=newRow.insertCell(7);

  cell1.innerHTML=firstname.toUpperCase();
  cell2.innerHTML=lastname.toUpperCase();
  cell3.innerHTML=gender.toUpperCase();
  cell4.innerHTML=str.toUpperCase();
  cell5.innerHTML=address.toUpperCase();
  cell6.innerHTML=pincode;
  cell7.innerHTML=state.toUpperCase();
  cell8.innerHTML=country.toUpperCase();
  
 row++;
}
 

