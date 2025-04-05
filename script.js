const obj={
    name:'jack',
    lastName:'dfsdfj'
}
// отдельные объекты можно объединять в массивы
const friends=[
   {  
    
    name:"jack",

    lastName:"dfsdfj"
},
{
    name:"hjfdhjf",
    lastName:"hfdrbuf"
}
]
// JSON.stringify(obj)- берет объект и преобразует его в строку.
// Полученная строка json называется JSON-форматированием или сериализованным объектом.
// мы можем отправить его по сети или поместить в обычное хранилище данных.

// stringify
console.log(obj)
 const jsonString= JSON.stringify(obj);
 console.log(jsonString)

//  JSON.parse - извлечение объекта из строки 
const stringJson = '{"name":"Ivan"}';
const objFromStr= JSON.parse(stringJson);
console.log(objFromStr);

// примеры 
//  можно комбинировать массивы и объекты в json в любом порядке
let json= '[1,2,3,4,5,6,,"a","b"]';


let json2 = `{
"a":"aaa",
"b":"bbb",
"1":"111",
"2":"222",
}`  
//  кроме чисел  и строк значениями могу быть  true ,false,null