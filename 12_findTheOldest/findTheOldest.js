const findTheOldest = function(people) {
  return people.reduce((oldestPerson, person) => {
    let today = new Date();
    let age = (person.yearOfDeath ?? today.getFullYear()) - person.yearOfBirth;
    let oldestAge = (oldestPerson.yearOfDeath ?? today.getFullYear()) - oldestPerson.yearOfBirth;

    if (age > oldestAge) {
      return person;
    } else {
      return oldestPerson;
    }
  }, {yearOfBirth: (new Date()).getFullYear()});
};

// Do not edit below this line
module.exports = findTheOldest;
