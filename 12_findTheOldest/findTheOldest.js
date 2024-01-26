const findTheOldest = function(people) {

    console.table(people.map(person => ({ ...person })));

    people.forEach(person => {
        if (!person.yearOfDeath) {
            const currentYear = new Date().getFullYear();
            person.yearOfDeath = currentYear;
        }
    });
    console.table(people.map(person => ({ ...person })));

    people.sort((a, b) => {
        let aAge = a.yearOfDeath - a.yearOfBirth;
        let bAge = b.yearOfDeath - b.yearOfBirth;
        return aAge > bAge ? -1 : 1;
    });
    console.table(people.map(person => ({ ...person })));
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
