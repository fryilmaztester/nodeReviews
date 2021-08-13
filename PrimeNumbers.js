// 1 e ve kendisine bölünecek, 1 den büyük ve pozitif tam sayı oalcak

const argumenents = process.argv.slice(2);
function showPrimeNumbers(lowNumber, highNumber){
    
    for(let i = lowNumber; i<=highNumber; i++){
        let isPrime = true;
        for(let j = 2; j<=i; j++){
            if(i%j===0 & j !==i ){
                isPrime = false;
            }
        }
        
        if(isPrime){
            console.log(i);
        }
    }
}

//showPrimeNumbers(7,22);
console.log(process); // node.js çalışma ortamında o an yapılan iş ile ilgili bilgi verir.
//console.log(process.argv); // bize array gönderir ve programı çalıştırıken kullandığımız parametreler
//console.log(process.argv.slice(2)); // girmiş olduğumuz ucuncu paremetreyi gösterir. ,ilk 2 paraöeteryi göstermez

showPrimeNumbers(argumenents[0] * 1, argumenents[1] * 1); // arrayi number a çevirmek için *1 yaptık. 


