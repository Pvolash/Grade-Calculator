

function a () {
var grade1 = document.getElementById("grade1").value;
var grade2 = document.getElementById("grade2").value;
var grade3 = document.getElementById("grade3").value;
var grade4 = document.getElementById("grade4").value;
var grade5 = document.getElementById("grade5").value;
var grade6 = document.getElementById("grade6").value;
var grade7 = document.getElementById("grade7").value;

var credit1 = Number(document.getElementById("credit1").value);
var credit2 = Number(document.getElementById("credit2").value);
var credit3 =Number(document.getElementById("credit3").value);
var credit4 = Number(document.getElementById("credit4").value);
var credit5 = Number(document.getElementById("credit5").value);
var credit6 = Number(document.getElementById("credit6").value);
var credit7 = Number(document.getElementById("credit7").value);




switch (grade1) {
    case "AA":
        grade1=4
        break;
    case "BA":
        grade1=3.5
        break;
    case "BB":
        grade1=3
        break;
    case "CB":
        grade1=2.5
        break;
    case "CC":
        grade1=2
        break;
    case "DC":
        grade1=1.5
        break;
    case "DD":
        grade1=1
        break;
    case "FD":
        grade1=0.5
        break;
    case "FF":
        grade1=0
        break;
};
switch (grade2) {
    case "AA":
        grade2=4
        break;
    case "BA":
        grade2=3.5
        break;
    case "BB":
        grade2=3
        break;
    case "CB":
        grade2=2.5
        break;
    case "CC":
        grade2=2
        break;
    case "DC":
        grade2=1.5
        break;
    case "DD":
        grade2=1
        break;
    case "FD":
        grade2=0.5
        break;
    case "FF":
        grade2=0
        break;
};
switch (grade3) {
    case "AA":
        grade3=4
        break;
    case "BA":
         grade3=3.5
        break;
    case "BB":
         grade3=3
        break;
    case "CB":
         grade3=2.5
        break;
    case "CC":
         grade3=2
        break;
    case "DC":
         grade3=1.5
        break;
    case "DD":
         grade3=1
        break;
    case "FD":
         grade3=0.5
        break;
    case "FF":
         grade3=0
        break;
};
switch (grade4) {
    case "AA":
        grade4=4
        break;
    case "BA":
        grade4=3.5
        break;
    case "BB":
        grade4=3
        break;
    case "CB":
        grade4=2.5
        break;
    case "CC":
        grade4=2
        break;
    case "DC":
        grade4=1.5
        break;
    case "DD":
        grade4=1
        break;
    case "FD":
        grade4=0.5
        break;
    case "FF":
        grade4=0
        break;
};
switch (grade5) {
    case "AA":
        grade5=4
        break;
    case "BA":
        grade5=3.5
        break;
    case "BB":
        grade5=3
        break;
    case "CB":
        grade5=2.5
        break;
    case "CC":
        grade5=2
        break;
    case "DC":
        grade5=1.5
        break;
    case "DD":
        grade5=1
        break;
    case "FD":
        grade5=0.5
        break;
    case "FF":
        grade5=0
        break;
};
switch (grade6) {
    case "AA":
        grade6=4
        break;
    case "BA":
        grade6=3.5
        break;
    case "BB":
        grade6=3
        break;
    case "CB":
        grade6=2.5
        break;
    case "CC":
        grade6=2
        break;
    case "DC":
        grade6=1.5
        break;
    case "DD":
        grade6=1
        break;
    case "FD":
        grade6=0.5
        break;
    case "FF":
        grade6=0
        break;
};
switch (grade7) {
    case "AA":
        grade7=4
        break;
    case "BA":
        grade7=3.5
        break;
    case "BB":
        grade7=3
        break;
    case "CB":
        grade7=2.5
        break;
    case "CC":
        grade7=2
        break;
    case "DC":
        grade7=1.5
        break;
    case "DD":
        grade7=1
        break;
    case "FD":
        grade7=0.5
        break;
    case "FF":
        grade7=0
        break;
};

    function topCredit () {
       let firstClass = Number(grade1*credit1) ;
       let secondClass = Number(grade2*credit2);
       let thirdClass= Number(grade3*credit3);
       let fourthClass = Number(grade4*credit4);
       let fifthClass = Number(grade5*credit5);
       let sixthClass = Number(grade6*credit6);
       let seventhClass = Number(grade7*credit7);
       let top= firstClass + secondClass + thirdClass + fourthClass + fifthClass + sixthClass + seventhClass;;
       let toplamKredi= credit1 + credit2 + credit3 + credit4 + credit5 + credit6 + credit7;
       let anan= top/toplamKredi;
       
       
       console.log(anan);
       document.getElementById("output").innerHTML = anan
        return anan;
    };
    



    topCredit();
    
   


    

};
