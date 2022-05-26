const defaultFullName = (fullName, {firstName, lastName}) => fullName || `${firstName} ${lastName}`
//region class Person
class Person {

    constructor({fullName, firstName, lastName}) {
        this.firstName = firstName;
        this.lastName = lastName || 'Smyers';
        this.fullName = defaultFullName(fullName, this);
    }

}

//endregion

//region class Family
class Family {

    people;
    members;

    constructor({lastName}) {
        this.lastName = lastName || 'Smyers';
        this.members = [];
        this.people = {};
    }

    /**
     * @param {string} firstName
     * @param {{lastName?:string}} [names]
     */
    addMemberByNames(firstName, names = {}) {
        const lastName = (names || {}).lastName || this.lastName;
        const fullName = defaultFullName(null, {firstName, lastName})

        const person = new Person({
            fullName,
            firstName,
            lastName,
        });
        this.people[fullName] = person;
        this.members.push(person);
    }
}

//endregion

class SmyersFamily extends Family {
    constructor() {
        super({lastName: 'Smyers'});
        [
            'Cassandra', 'Mike', 'Michael', 'Robin'
        ].map(firstName => this.addMemberByNames(firstName))
    }

    /**
     * @param {string} fullName
     * @return {Person}
     */
    findByFullName(fullName) {
        return this.members[fullName];
    }
}

export {Person}
export {Family}
export {SmyersFamily}
export default (new SmyersFamily());