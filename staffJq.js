var count1;
var sum1;

var count2;
var sum2;

var count3;
var sum3;

var count4;
var sum4;

var count5;
var sum5;


$(document).ready(function() {

count1=0;
sum1 =0;
          $("#st1").click(function() {
              $(".fa-star").css("color", "black");
              $("#st1").css("color", "yellow");
               count1++;
               sum1 += 1;
          });
          $("#st2").click(function() {
              $(".fa-star").css("color", "black");
              $("#st1, #st2").css("color", "yellow");
               count1++;
               sum1 += 2;
          });
          $("#st3").click(function() {
              $(".fa-star").css("color", "black")
              $("#st1, #st2, #st3").css("color", "yellow");
               count1++;
               sum1 += 3;
          });
          $("#st4").click(function() {
              $(".fa-star").css("color", "black");
              $("#st1, #st2, #st3, #st4").css("color", "yellow");
               count1++;
                sum1 += 4;
          });
          $("#st5").click(function() {
              $(".fa-star").css("color", "black");
              $("#st1, #st2, #st3, #st4, #st5").css("color", "yellow");
               count1++;
               sum1 += 5;
          });
        });
          /*----------------------------------------------------------*/
$(document).ready(function() {
 
count2=0;
sum2 =0;
 
          $("#st6").click(function() {
              $(".fa-star").css("color", "black");
              $("#st6").css("color", "yellow");
               count2++;
               sum2 += 1;
          });
          $("#st7").click(function() {
              $(".fa-star").css("color", "black");
              $("#st6, #st7").css("color", "yellow");
               count2++;
               sum2 += 2;
          });
          $("#st8").click(function() {
              $(".fa-star").css("color", "black")
              $("#st6, #st7, #st8").css("color", "yellow");
               count2++;
               sum2 += 3;
          });
          $("#st9").click(function() {
              $(".fa-star").css("color", "black");
              $("#st6, #st7, #st8, #st9").css("color", "yellow");
               count2++;
                sum2 += 4;
          });
          $("#st10").click(function() {
              $(".fa-star").css("color", "black");
              $("#st6, #st7, #st8, #st9,#st10").css("color", "yellow");
               count2++;
               sum2 += 5;
          });
         });
          /*----------------------------------------------------------*/
$(document).ready(function() {
count3=0;
sum3 =0;

          $("#st11").click(function() {
              $(".fa-star").css("color", "black");
              $("#st11").css("color", "yellow");
               count3++;
               sum3 += 1;
          });
          $("#st12").click(function() {
              $(".fa-star").css("color", "black");
              $("#st11, #st12").css("color", "yellow");
               count3++;
               sum3 += 2;
          });
          $("#st13").click(function() {
              $(".fa-star").css("color", "black")
              $("#st11, #st12, #st13").css("color", "yellow");
               count3++;
               sum3 += 3;
          });
          $("#st14").click(function() {
              $(".fa-star").css("color", "black");
              $("#st11, #st12, #st13, #st14").css("color", "yellow");
               count3++;
                sum3 += 4;
          });
          $("#st15").click(function() {
              $(".fa-star").css("color", "black");
              $("#st11, #st12, #st13, #st14, #st15").css("color", "yellow");
               count3++;
               sum3 += 5;
          });
           });
        /*----------------------------------------------------------*/
$(document).ready(function() {
count4=0;
sum4 =0;

          $("#st16").click(function() {
              $(".fa-star").css("color", "black");
              $("#st16").css("color", "yellow");
               count4++;
               sum4 += 1;
          });
          $("#st17").click(function() {
              $(".fa-star").css("color", "black");
              $("#st16, #st17").css("color", "yellow");
               count4++;
               sum4 += 2;
          });
          $("#st18").click(function() {
              $(".fa-star").css("color", "black")
              $("#st16, #st17, #st18").css("color", "yellow");
               count4++;
               sum4 += 3;
          });
          $("#st19").click(function() {
              $(".fa-star").css("color", "black");
              $("#st16, #st17, #st18, #st19").css("color", "yellow");
               count4++;
                sum4 += 4;
          });
          $("#st20").click(function() {
              $(".fa-star").css("color", "black");
              $("#st16, #st17, #st18, #st19, #st20").css("color", "yellow");
               count4++;
               sum4 += 5;
          });
           });
          /*----------------------------------------------------------*/
$(document).ready(function() {
count5=0;
sum5 =0;

          $("#st21").click(function() {
              $(".fa-star").css("color", "black");
              $("#st21").css("color", "yellow");
               count5++;
               sum5 += 1;
          });
          $("#st22").click(function() {
              $(".fa-star").css("color", "black");
              $("#st21, #st22").css("color", "yellow");
               count5++;
               sum5 += 2;
          });
          $("#st23").click(function() {
              $(".fa-star").css("color", "black")
              $("#st21, #st22, #st23").css("color", "yellow");
               count5++;
               sum5 += 3;
          });
          $("#st24").click(function() {
              $(".fa-star").css("color", "black");
              $("#st21, #st22, #st23, #st24").css("color", "yellow");
               count5++;
                sum5 += 4;
          });
          $("#st25").click(function() {
              $(".fa-star").css("color", "black");
              $("#st21, #st22, #st23, #st24, #st25").css("color", "yellow");
               count5++;
               sum5 += 5;
          });
        });
  
function averaga(d,st){

var avg;

 if(st == 1)
 avg = sum1 / count1;
 else if(st == 2 )
 avg = sum2 / count2;
 else if(st == 3 )
 avg = sum3 / count3;
 else if(st == 4 )
 avg = sum4 / count4;
 else if(st == 5 )
 avg = sum5 / count5;


document.getElementById(d).innerHTML = avg;

}      
        