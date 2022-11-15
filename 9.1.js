//������ 9 ������� 1 //�������������� XML � ������ JS
const parser = new DOMParser(); //������ ����� � ����������� ��������
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
      <first>���� </first> 
      <second>������</second> 
    </name> 
    <age>58</age> 
    <prof>driver</prof> 
  </student> 
</list> 
`; 
 
const xmlDom = parser.parseFromString(xmlString, "text/xml"); // �����, � ������� �������� ����������� XML ������ �  JS ������ � ���� DOM.
 
const listNode = xmlDom.querySelector('list'); 
const studentNode = [...listNode.querySelectorAll('student')]; //������ ������ ��� ������� ��������
const list = []
//���������� ������ � ������� forEach
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
