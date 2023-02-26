
var cap;
var notAvailable=new Array();
let tablenumber= 0;


function validateForm(table,cap) {
  let numberOfGuests = document.forms["tableInfo"]["numberOfGuests"].value;
  let name = document.forms["customerInfo"]["name"].value;
  let phone = document.forms["customerInfo"]["phone"].value;
  
  //numberOfGuests
  if (numberOfGuests == "") {
    alert("Number Of Guests must be filled out");
    return false;
  }
  else if (numberOfGuests<1){
	  alert("Number Of Guests must be at least 1");
    return false;
  }
  else if ( numberOfGuests>6){
	 alert("Number Of Guests must be at most 6");
    return false; 
  }
  
  //Name
  if (name == "") {
    alert("Customer name must be filled out");
    return false;
  }
  else if (name[0]>0 ||name[0]<=0) {
    alert("Customer name must not start with a number");
    return false;
  }
  
  //phone
	if (phone == "") {
    alert("Phone number must be filled out");
    return false;
  }  
  else if(phone.length >10 || phone.length <10 ) {
    alert("Phone number must be 10 digit");
    return false;
  } 
  
    availablityArray();
for(var i=0;i<notAvailable.length;i++){
	if(table.src.match(notAvailable[i]))
		alert("Please choose another table this table is not available");	
}
   if(numberOfGuests>cap){
		alert("please choose another table you need "+numberOfGuests+" chairs." );
		return false;
	}
	if(table.src.match("img/table1-4.jpg")){
		tablenumber=1;
			  document.getElementById("table1").src="img/table111.png";
			  tableColor();
		
		}
		else
		if(table.src.match("img/table2-22.png")){
		tablenumber=2;
		document.getElementById("table2").src="img/table22.png";
		tableColor();
		}
		else
		if(table.src.match("img/table3.png")){
		tablenumber=3;	   
		document.getElementById("table3").src="img/table3222.jpeg";
		tableColor();
		}
		else
	    if(table.src.match("img/table4-5.png")){
		tablenumber=4;
		document.getElementById("table4").src="img/table4-5222.jpeg";
		tableColor();
		}
		else
		if(table.src.match("img/table5-2.png")){
		tablenumber=5; 
		document.getElementById("table5").src="img/table5-222.jpeg";
		tableColor();
		}
		else
		if(table.src.match("img/table6.png")){
		tablenumber=6;
		document.getElementById("table6").src="img/table66.png";
		tableColor();
		}
		else
		if(table.src.match("img/table7-2.png")){
		tablenumber=7;	   
		document.getElementById("table7").src="img/table7-222.jpeg";
		tableColor();
		}
		else
		if(table.src.match("img/table88.png")){
		tablenumber=8; 
		document.getElementById("table8").src="img/table8.png";
		tableColor();
		}

}


function info(){

var customerIfo = {name: document.forms["customerInfo"]["name"].value, 
				   phone: document.forms["customerInfo"]["phone"].value,
				   numberOfGuests: document.forms["tableInfo"]["numberOfGuests"].value,
				   tableNumber: tablenumber};
//عشان نتأكد ان الاراي تشتغل
var question = confirm ("Would you like to review the customer's information?");

if (question==true){
	let txt = "";
for(let prop in customerIfo){	
	 txt += prop +": "+ customerIfo[prop] + "\n";	
}
alert(txt);
}
}

function submit1(){
  if(tablenumber==0){
	alert("Please choose a table");
}else{
	alert("your reservation has been successfully made!");
		booked();
	 info();
	 tableColor();
numberOfGuests=name=phone=clear;

}
	
}

function availablityArray(){
	if(localStorage.getItem("Booked1")=="table1")
       notAvailable.push("img/table111.png");
if(localStorage.getItem("Booked2")=="table2")
		 notAvailable.push("img/table22.png");
if(localStorage.getItem("Booked3")=="table3")
		 notAvailable.push("img/table3222.jpeg");
if(localStorage.getItem("Booked4")=="table4")
		 notAvailable.push("img/table4-5222.jpeg");
if(localStorage.getItem("Booked5")=="table5")
		 notAvailable.push("img/table5-222.jpeg");
if(localStorage.getItem("Booked6")=="table6")
		 notAvailable.push("img/table66.png");
if(localStorage.getItem("Booked7")=="table7")
		 notAvailable.push("img/table7-222.jpeg");
if(localStorage.getItem("Booked8")=="table8")
		 notAvailable.push("img/table8.png");
}



function booked(){
	if (tablenumber==1){
	
			localStorage.setItem("Booked1","table1");
	}
	if (tablenumber==2){
		
		localStorage.setItem("Booked2","table2");
	}if (tablenumber==3){
		
		localStorage.setItem("Booked3","table3");
	}if (tablenumber==4){
		
		localStorage.setItem("Booked4","table4");
	}if (tablenumber==5){
		
		localStorage.setItem("Booked5","table5");
	}if (tablenumber==6){
		
		localStorage.setItem("Booked6","table6");
	}if (tablenumber==7){
		
		localStorage.setItem("Booked7","table7");
	}if (tablenumber==8){
		
	           localStorage.setItem("Booked8","table8");
	}
		
}

function tableColor(){
	if(localStorage.getItem("Booked1")!="table1" && tablenumber!=1)
       document.getElementById("table1").src=("img/table1-4.jpg");
if(localStorage.getItem("Booked2")!="table2" && tablenumber!=2)
		document.getElementById("table2").src=("img/table2-22.png");
if(localStorage.getItem("Booked3")!="table3"&& tablenumber!=3)
		document.getElementById("table3").src=("img/table3.png");
if(localStorage.getItem("Booked4")!="table4" && tablenumber!=4)
		document.getElementById("table4").src=("img/table4-5.png");
if(localStorage.getItem("Booked5")!="table5"&& tablenumber!=5)
		document.getElementById("table5").src=("img/table5-2.png");
if(localStorage.getItem("Booked6")!="table6" && tablenumber!=6)
		 document.getElementById("table6").src=("img/table6.png");
if(localStorage.getItem("Booked7")!="table7" && tablenumber!=7)
		 document.getElementById("table7").src=("img/table7-2.png");
if(localStorage.getItem("Booked8")!="table8"&& tablenumber!=8)
		 document.getElementById("table8").src=("img/table88.png");
}
