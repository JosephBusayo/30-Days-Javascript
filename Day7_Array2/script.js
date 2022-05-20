const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];


// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some(person => {
    const currentYear = (new Date()).getFullYear(); //gets current year
    return (currentYear - person.year >=19)
})
console.log(isAdult)

// Array.prototype.every() // is everyone 19 or older?
const isEveryAdult = people.every(person => {
    const currentYear = (new Date()).getFullYear();
    return (currentYear - person.year >=19)
})
console.log(isEveryAdult)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
const comment = comments.find(comment => 
    (comment.id === 823423) //remove the return and curly bracket this is known as implicit return. This is not always possible
)
console.log(comment)

// Array.prototype.findIndex()
// Find the comment with this ID
const index = comments.findIndex(comment => 
    (comment.id === 823423)
)
console.log(index)

// delete the comment with the ID of 823423
comments.splice(index, 1) //slice the array from index to 1
//OR
const newComments = [ //deletes the first two elements
    ...comments.slice(0, index), //... is to avoid nested array
    ...comments.slice(index +1,)
]
console.log(newComments)