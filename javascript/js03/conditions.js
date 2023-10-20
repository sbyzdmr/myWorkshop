

const grade =120
let sonuc= ""
if(grade < 0 || grade > 100){
   sonuc="Hatali not girisi"
}else if(grade<40){
    sonuc= "FF"
} else if (grade<55){
    sonuc="DD"
}else if (grade<70){
    sonuc="CC"
}else if (grade<85){
    sonuc="BB"
} else{
    sonuc="AA"
}

console.log({sonuc});


//!BU ŞEKİLDE DE YAPILABİLİR//
const grade2 =50
let sonuc2= ""
if(grade2 < 0 || grade2 > 100){
   console.log("Hatali not girisi");
}else if(grade2<40){
    sonuc2= "FF"
} else if (grade2<55){
    sonuc2="DD"
}else if (grade2<70){
    sonuc2="CC"
}else if (grade2<85){
    sonuc2="BB"
} else{
    sonuc2="AA"
}
 if(sonuc2){  //* bunun uzun hali sonuc2===true   //sonuc2 truty bir değer ise yazdır demek yani ilk koşulumuza takılmazsa yazdırılır(0 dan küçük veya 100 den büyük değilse)
console.log({sonuc2})
}

//? ODEV: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.

const n1= 6
const n2= 7
const n3= 7

//? 1. YONTEM
if(n1>=n2 && n1>=n3){
    console.log("En Büyük:", n1)
}else if(n2>=n1 && n2>=n3){
    console.log("En Büyük:", n2)
}else if(n3>=n1  && n3>=n2){
    console.log("En Büyük:", n3);
}

//? 2. YONTEM
//? nested if
if (n1 >= n2) {
    if (n1 >= n3) {
      console.log("2-En büyük:", n1)
    }
  }
  if (n2 >= n1) {
    if (n2 >= n3) {
      console.log("2-En büyük:", n2)
    }
  }
  if (n3 >= n1) {
    if (n3 >= n2) {
      console.log("2-En büyük:", n3)
    }
  }