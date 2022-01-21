const database = {
  users: [
    {
      id: 0,
      firstName: 'Alice',
      favPet: 'cat',
      state: 'NY',
      collegeId: 2,
    },
    {
      id: 1,
      firstName: 'Bob',
      favPet: 'cat',
      state: 'MA',
      collegeId: 0,
    },
    {
      id: 2,
      firstName: 'Charles',
      favPet: 'dog',
      state: 'NY',
      collegeId: 0,
    },
    {
      id: 3,
      firstName: 'Daniela',
      favPet: 'dog',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 4,
      firstName: 'Edward',
      favPet: 'cat',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 5,
      firstName: 'Fatima',
      favPet: 'dog',
      state: 'NJ',
      collegeId: 0,
    },
  ],
  friends: [
    {
      id1: 0,
      id2: 2,
    },
    {
      id1: 1,
      id2: 0,
    },
    {
      id1: 2,
      id2: 3,
    },
    {
      id1: 2,
      id2: 1,
    },
    {
      id1: 3,
      id2: 4,
    },
    {
      id1: 2,
      id2: 4,
    },
    {
      id1: 0,
      id2: 5,
    },
  ],
  college: [
    {
      id: 0,
      name: 'Harvard',
      state: 'MA',
      color: 'crimson',
    },
    {
      id: 1,
      name: 'Yale',
      state: 'CT',
      color: 'blue',
    },
    {
      id: 2,
      name: 'Columbia',
      state: 'NY',
      color: 'light blue',
    },
  ],
}

/* using the js object and array methods, query the database defined above.
Assume that the data in the database is dynamic and changes every day so
dont hard code solutions. */

// Implement the function usersByPet to return a list of user objects filtered by cat or dog.
const usersByPet = pet => {
  let users = database['users']
  let temp = users.filter((x) => {return x['favPet'] === pet;})
  return temp
}
console.log(usersByPet('dog'))
console.log(usersByPet('cat'))

// Implement the function collegeLookup to return the name and color of a user's college.
const collegeLookup = user => {
  let users = database['users']
  let student = users.filter((x) => {return x['firstName'] === user;})[0]
  let college = database['college'].filter((x) => {return x['id'] === student['collegeId'] })[0]
  return [college['name'], college['color']]
}
console.log(collegeLookup('Charles'))
console.log(collegeLookup('Daniela'))

// define oppositesAttract as a list of friend objects whose favorite pets are different.
let opp = []
let users = database['users']
let friends = database['friends']
friends.forEach(function (pair)
{
  var p1 = users.filter((x) => x['id'] === pair['id1'])[0];
  var p2 = users.filter((x) => x['id'] === pair['id2'])[0];
  if(p1['favPet'] !== p2['favPet'])
    opp.push(pair) 
});
const oppositesAttract = opp
console.log(oppositesAttract)

// define local as a list of users who live in the same state as they go to school.
let ans = []
users.forEach(function (x) {
  var college = database['college'].filter((c) => {return c['id'] === x['collegeId']})[0]
  if(x['state'] === college['state'])
    ans.push(x)
})
const local = ans
console.log(local)

// define collegeFriends as a list of friend objects that go to the same college
let matches = []
friends.forEach(function (pair) {
  var p1 = users.filter((x) => x['id'] === pair['id1'])[0];
  var p2 = users.filter((x) => x['id'] === pair['id2'])[0];
  if(p1['collegeId'] === p2['collegeId'])
    matches.push(pair)
});
const collegeFriends = matches;
console.log(collegeFriends)
