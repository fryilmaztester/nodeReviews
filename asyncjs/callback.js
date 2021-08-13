/*
console.log("Birinci görev");
console.log("İkinci görev");
console.log("Üçüncü görev");

*/

/*
const func1 = ()=>{
    console.log("Fucn 1 tamamlandı...");
}
const func2 = ()=>{
    console.log("Fucn 2 tamamlandı...");
}

func2();
func1();

*/

/*
const func1 = ()=>{
    console.log("Fucn 1 tamamlandı...");
    func2();
}

const func2 = ()=>{
    console.log("Fucn 2 tamamlandı...");
    func3();
}

const func3 = ()=>{
    console.log("Fucn 3 tamamlandı...");
}

func1();
*/


/* 
const func1 = ()=>{
    console.log("Fucn 1 tamamlandı...");
    func3();
}

const func2 = ()=>{
    console.log("Fucn 2 tamamlandı...");
    
}

const func3 = ()=>{
    console.log("Fucn 3 tamamlandı...");
    func2();
}

func1();

*/


//Js senkron çalışır. Single Thread oalrka çalışır. Aynı anda Tek bir işlem yapıliyordur.  
// Js kodunu manipule ederek asenkron hale getirmeye çalışırız. 

/*
let x = 5;
console.log("1.Gelen veri", x);

setTimeout(()=>{
    x +=5;
    console.log("2.Gelen veri", x); 
    // Bir fonk. başka bir fonk. olarak koyulur ve bu işleme callback denir. console.log(),
    //setTimeout(()=>{ fonk içinde  callback olarak çalışır. Bu arada Js 3. fonk çalıştırır ve 5 sn sonra bu fonk çalıştırır. 
},5000);


x +=5;
console.log("3.Gelen veri", x);
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



const addBook = (newBook, callBack) =>{
    book.push(newBook);
    callBack();
};

//listBokk();
addBook({name : "Book4", author: "Yazar4"},listBokk);
