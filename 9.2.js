//Модуль 9 Задание 2 Преобразование JSON в объект JS

const jsonString = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;
const jsonObj = JSON.parse(jsonString);

console.log(jsonObj)   //выводит объект
console.log(typeof(jsonObj ));   //object