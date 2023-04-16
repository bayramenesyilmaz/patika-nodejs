const fs = require('fs');

fs.writeFile("employees.json", '{"name":"Employee 1 Name", "salary":2000}', "utf-8", (err, data) => {
    console.log("JSON DOSYASI BAŞARIYLA EKLENDİ.");
})

fs.readFile("employees.json", "utf-8", (err, data) => {
    if (err) console.log(err);
    console.log("Okunan veri : ", data);
})

fs.appendFile("employees.json",'\n{"name":"Employee 2 Name", "salary":3000}',(err)=>{
    if(err) console.log(err)
    console.log("dosya güncellendi!");
})

fs.unlink("employees.json",(err)=>{
    if(err) console.log(err)
    console.log("dosya silindi!");
})