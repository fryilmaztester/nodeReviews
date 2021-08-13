/*

Bizler callback fonk. ile ilgili fonks. tamamlandığında bize fonk. 
döndürüyor. 

Fakat bizlerin amaçlarından biri ise; bir birleri ile bağlantılı olarak 
çalışan işlemlerin sıkıntısız bir şekilde çalışmadır. 

callback() yardımıyla bizler sonuçları beklemek zorunda kalmıypruz 
fakat şöyle bir şey olmasını isteriz ki 
istediğgimiz sonucu aldığımız da devam edelim ve gereksiz bekleme operasyonundan kurtulalım.
Tam bu noktada ortaya promise yapısı çıkar. 


Promise: 
Promise bir işlemin sonucunu temsil eden bir JS nesnesidir. 
İki farklı parametre alarak çalışır. (Resolve, Reject)

Olumlu durumlarda ----> Resolve
Olumsuz durumlarda ---> Reject 

ile belirtilen işlemler yapılır. 
Burada şunu göz önüne getirebilirsiniz; Hatırlayacağınız üzere try catch yapılarında 
try bloğu false dönerse catch() bloğunda hata alınır ve catch()
 içinde tanımlanmış işlemler yürütülür fakat try {...} true dönerse try içinde ki 
 işlemler yürütülecektir. 
 
 Promise yapısı yine aynı mantıkta çalışmakla birlikte  
 olumlu yani Resolve dönerse .then() yapısı 
 olumsuz yani Reject dönerse .catch() yapısı çalışır. 

 Örn: 

 const promise1 = new Promise((resolve, reject) => {
  //reject('BAĞLANTI HATASI');
  resolve("VERILER ALINDI");
});

promise1
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });


 */


 // const promiseOne = new Promise((resolve, reject)=>{
  //  resolve("Veriler alındı....");
    //reject("Bağlantı Hatası...");
 // });

  //console.log(promiseOne);

  /*
  promiseOne.then(value =>{
      console.log(value);
  });

  promiseOne.catch(err =>{
      console.log(err);
  });
  */

/*
  promiseOne.
    then(value =>{
        console.log(value);
    }).catch(err =>{
        console.log(err);
    });

    */


    const book = [
        {name : "Book1", author: "Yazar2"},
        {name : "Book2", author: "Yazar2"},
        {name : "Book3", author: "Yazar3"}
    ];
    
    const listBokk = ()=> {
        book.map(book=>{
            console.log(book.name);
        })
    }
    
    
    
    const addBook = (newBook) =>{

        const promiseOne = new Promise((resolve,reject) => {
            book.push(newBook);
            //resolve(book);
            reject("Bir hata olustu...")
        });
        
      return promiseOne;
    };
    
    //listBokk();
    addBook({name : "Book4", author: "Yazar4"})
            .then(() => {
                console.log("Yeni liste: ");
                listBokk();
            }).catch((err) => {
                console.log(err);
            });

