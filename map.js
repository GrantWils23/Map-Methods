  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results);

// Using map()
const multiplyByTwo = function(num) {
  return num * 2;
}
const mapResults = nums.map(multiplyByTwo);
console.log(mapResults);

// Simplified w/ map()
const simplified = nums.map(function (num) {return num * 2});
console.log(simplified)


// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2);
console.log(arrow);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

// const nameAndId = []
// for (let student of students) {
//   console.log(student)
//   // nameAndId.push(student.id)
//   let {id, name} = student;
//   nameAndId.push({id: id, name: name})
// }
// console.log(nameAndId)

function sortList(arr) {
  // let nameAndId = [];
  // let {id, name} = arr;
  // nameAndId.push({id: id, name: name})
  // return nameAndId;
  let {id, name} = arr;
  return {id, name}
};

// const studentsWithIds2 = students.map(student => [{id: student.id, name: student.name}]);
const studentsWithIds3 = students.map(student => sortList(student));
// const studentsWithIds4 = students.map(student => {[{id: student.id, name: student.name}]});

// console.log(studentsWithIds2);
console.log(studentsWithIds3);
// console.log(studentsWithIds4);

const ages = [32, 26, 28];
// var ages = [
//   {
//     age: 32,
//   },
//   {
//     age: 26,
//   },
//   {
//     age: 28,
//   }
// ]



// let agesIncluded = students.map(item => [{...item, age:ages[]}])

// let agesIncluded = students.map(item, index => {
//   for (let i in ages) {
//     console.log(i)
//   return {...item, age: ages[i]};
//     }
//   }
// );


let agesIncluded = students.map((array, index, age) => { 
  
  return {...array, age: age[index]};
});

console.log(ages);
// console.log(students);
console.log(agesIncluded);
