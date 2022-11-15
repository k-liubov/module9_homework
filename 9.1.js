//Модуль 9 Задание 1 //Преобразование XML в объект JS
const parser = new DOMParser(); //создаём класс с интерфейсом парсинга
const xmlString = ` 
<list> 
  <student> 
    <name lang="en"> 
      <first>Ivan </first> 
      <second>Ivanov</second> 
    </name> 
    <age>35</age> 
    <prof>teacher</prof> 
  </student> 
  <student> 
    <name lang="ru"> 
      <first>Петр </first> 
      <second>Петров</second> 
    </name> 
    <age>58</age> 
    <prof>driver</prof> 
  </student> 
</list> 
`; 
 
const xmlDom = parser.parseFromString(xmlString, "text/xml"); // метод, с помощью которого преобразуем XML строку в  JS объект в виде DOM.
 
const listNode = xmlDom.querySelector('list'); 
const studentNode = [...listNode.querySelectorAll('student')]; //создаём массив для каждого студента
const list = []
//перебираем массив с помощью forEach
studentNode.forEach( students => {
  const peopleNode = students.querySelector('name'); 
const peopleAge = students.querySelector('age'); 
const firstName = peopleNode.querySelector('first'); 
const secName = peopleNode.querySelector('second'); 
const peopleProf = listNode.querySelector('prof'); 
const langP = peopleNode.getAttribute('lang'); 
  list.push({
  name: firstName.textContent + secName.textContent, 
  age: peopleAge.textContent, 
  prof: peopleProf.textContent, 
  lang: langP, 
  });
});

const result = {
  list: list
}
console.log(result);
