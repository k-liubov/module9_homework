//������ 9 ������� 2 �������������� JSON � ������ JS

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

console.log(jsonObj)   //������� ������
console.log(typeof(jsonObj ));   //object