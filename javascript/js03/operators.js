const maas =70000
const izinGunu= 30
console.log(`MAAS=${maas} + SIGORTA, IZIN SURESI: ${izinGunu} gun`)


//! const firstName= prompt("Please enter your name:")
//! const dob= prompt("Enter your day of birth:")
//! console.log(`${firstName} is ${2023-dob} years old`);


//! const firstName= prompt("Please enter your name:")
//! const dob= prompt("Enter your day of birth:")
//! console.log(`${firstName} is ${new Date().getFullYear() -dob} years old`);

// new Date ile hangi yılda olursak ona göre hesaplama yapmasını sağlarız. hazır bir fonksiyondur. sistem saatini almak için date classı çalıştırılır.//

//promp komutu default olarak verileri hep string olarak alır. doğum tarihini de string olarak alır number olarak değil. bu veriyi number a Number() fonksiyonu ile çevirebiliriz//

//! console.log(dob, typeof dob);

//! const r = +prompt("Please enter the radius:")  
// burada promptan gelen değer  string olduğu için değeri numberlaştırmak gerekir.
//1. yöntem: promptun önne + koymak
//2.yöntem: Number(prompt("Please enter the radius"))
//! console.log(r);
//! const PI = 3.14  
// burdaki gibi pi de tanımlayabiliriz ya da kütüphaneden hazır pi sayısını da alabiliriz Math.PI diyerek

//! const square= (Math.PI*r**2).toFixed(2)  
//burada yapılan işlem sonucu çıkan sayıda virgülden sonra 2 basamak almasını sağlıyoruz toFixed la
//! console.log(`SQUARE=${square}`)


//?  YUVARLAMA FONKSİYONLARI

console.log(Math.round(123.556)); //!yakın tam sayıya yuvarlar
console.log(Math.ceil(123.26));  //! tavana yuvarlar
console.log(Math.floor(123.998));  //! tabana yuvarlar

console.log(Math.trunc(123.99)); //! her zmn tam kısmı alır
console.log((123.567).toFixed(2));  //! virgülden sonra 2 bas alır.(string olarak)

console.log((123.567).toExponential(3)); //!üstel gösterim(string olarak)


//? Math.random()


// Math.floor();  //* her zaman en yakin alt tamsayiya yuvarlar
// Math.ceil();  //* her zaman en yakin ust tam tamsayiya yuvarlar
// Math.round(); //* en yakin tam sayiya yuvarlar.
// Math.trunc(); //* sayinin tam kismini alir.
// Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.

//? ARTTIRMA VE AZALTMA (Inc, Dec)
//?--------------------------------------


let number1= 55

/*--------BİR ARTIRMA YÖNTEMLERİ-------------*/
number1+=1
number1++
++number1
number1= number1+1
console.log("NUMBER1:", number1);
console.log({number1}); //burada number1 i obje olarak yazdırdık yukardaki ya da alttaki şekilde yazarak gösterebiliriz

console.log("NUMBER1:", number1++); //burada number1 önce yaz sonra artır yapıyoruz sonuna++ koyarak. yazdırırken aynı yazdırıyor ama sonrasında 1 artırıyor. şimsdi number1 i tekrar yazdırırsak sayıyı 1 artırdığını görürüz. aslında sayı şu an 60 oldu. ama önce yazdır sonra artır olduğu için artırılmış sayıyı burda görmüyoruz.
console.log(number1);

console.log("NUMBER1:", ++number1);  //burada önüne ++ koyarak sayıyı önce artır sonra yazdır yaptık. bu nedenle artırılmış sayı yazıldığı için 61 görüyoruz (1 artırılmış hali)


/*--------EKSİLTME---------------*/

console.log(number1--); //önce yazdırıyor sonra 1 eksiltiyor. yazdırdığı için eksiltilmiş sayıyı görmüyoruz ama değeri 1 azlatmış oluyoruz. şimdi number1 e bakarsak 60 a düştüğünü görürüz
console.log(number1);

number1-=5
console.log(number1);

number1*=2
console.log(number1);


//*--------------MOD-------------*//

const number2=10%2
console.log({number2});  //kalan 0

//? -----ODEV: Girilen 3 basamakli sayinin basamak degerlerini bularak ayrı ayrı yazdiran kod

// const number3= prompt("Lutfen 3 basamakli bir syi giriniz:")
const number3 = 457
const birler= number3 % 10
console.log({birler});

const onlar = Math.floor(number3 / 10) % 10
console.log({ onlar })
const yuzler = Math.trunc(number3 / 100)
console.log({ yuzler })


// * ================================================
// *          KARSILASTIRMA OPERATORLERI
// * ================================================


console.log(5=="5");
console.log(5==="5");

console.log(4 != 5);  //4 5e eşit değil mi---> evet değil true  çıkar
console.log(4 != "4");  //hayır eşit false çıkar
console.log(4 !== "4");

// * ================================================
// *            MANTIKSAL OPERATORLER
// * ================================================

const d1 = true
const d2 = false

console.log(d1 && d2); //d1 ve d2  false
console.log(d1 || d2); //d1 veya d2  true

console.log(!d2); //? false un değili true

const yas= 18
const cinsiyet= "E"
if(yas >=18 && cinsiyet==="E") {
    console.log("Askere gitmeli")
} else{
    console.log("Gerek yok");
}

//! Javascripte surekli falsy olan 6 deger bulunmaktadir.
const nal = null
const tanimsiz = undefined
const bos = ""
const sayiDegil = NaN
const sifir = 0
const falsy = false

const number5= -100
console.log(Boolean(number5));  //boolean a çevirme
// * =============================================
// *            TIP DONUSUMLERI
// * =============================================

const kimlikNo= "12345678956"
const numberKimlikNo = Number(kimlikNo)
console.log(numberKimlikNo);

const parite ="1.2"
const tl="1200"
const total= Number(parite) + Number(tl)  //bu bir yöntem
const total1= parseFloat(parite) + parseFloat(tl) // bu da str bir ifadeyi numberlaştırmak için diğer bir yöntem. bu yöntemi kullanırken virgüllü sayılar olacaksa parseFloat kullanmak mantıklı hep tam sayılar varsa parseInt kullanılabilir. fakat virgüllü olacaksa integar kullanmak yanlış sonuç buldurur. Number() da böyle bir şeye gerek yok

console.log(total1)


console.log(String(123));  //stringleştirme
