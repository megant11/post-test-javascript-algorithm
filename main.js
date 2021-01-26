//Conditional

function ifElse () {
    let hariIni = prompt('Sekarang hari apa nih?');

if (hariIni == "senin") {
    alert("Jadi besok hari selasa!");
}else if (hariIni =="selasa") {
    alert("Jadi besok hari rabuu!");
}else if (hariIni == "rabu") {
    alert("Jadi besok hari kamis!");
}else if (hariIni =="kamis") {
    alert("Jadi besok hari jum'at!");
}else if (hariIni == "jum'at") {
    alert("Jadi besok hari sabtu!");
}else if (hariIni =="sabtu") {
    alert("Jadi besok hari minggu!");
}else if (hariIni == "minggu") {
    alert("Jadi besok hari senin!");
}else{
    alert("hari aja gatau, kebanyakan libur ya");
}

i++;
}

ifElse();

//Loop

function switchCase () {
    let todayIs = prompt("Today is?");

    switch (todayIs) {
        case "monday" :
         alert("so tomorrow is tuesday");
         break;
        case "tuesday" :
         alert("so tomorrow is wednesday");
         break;
        case "wednesday" :
         alert("so tomorrow is thursday");
         break;
        case "thursday" :
         alert("so tomorrow is friday");
         break;
        case "friday" :
         alert("so tomorrow is saturday");
         break;
        case "saturday" :
         alert("so tomorrow is sunday");
         break;
        case "sunday" :
         alert("so tomorrow is monday");
         break;
        default:
            alert ("hah u forget it?!-_-");
    }
}
switchCase();
