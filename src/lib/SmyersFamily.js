const defaultFullName = (fullName, {firstName, lastName}) => fullName || `${firstName} ${lastName}`

//region class Person
class Person {

    constructor({fullName, firstName, lastName, alias, strings, values}) {
        this.firstName = firstName;
        this.lastName = lastName || 'Smyers';
        this.fullName = defaultFullName(fullName, this);
        this.alias = alias;

        this.strings = strings || ['I have no strings.'];
        this.values = values || ['I have no values.'];
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
     * @param {{fullName?:string, lastName?:string, strings, values, alias}} [names]
     */
    addMemberByNames(firstName, names = {}) {
        const lastName = names?.lastName || this.lastName;
        const fullName = names?.fullName ||  `${firstName} ${lastName}`;

        const person = new Person({
            fullName,
            firstName,
            lastName,
            strings: names.strings,
            values: names.values,
            alias: names.alias,
        });
        this.people[fullName] = person;
        this.members.push(person);
        return this;
    }
}

//endregion

class SmyersFamily extends Family {

    lastName = 'Smyers'

    manifest = {
        'Cassandra': {},
        'Mike': {
            values: [
                "I know everything (worthwhile) knowing..."
            ],
            alias: 'mks4fun',
            strings: ['Michael', 'Michael K.', 'Mike'],
        },
        'Robin': {
            alias: 'rbsmyers',
            strings: ['Robin', 'Robin B.', 'Robin'],
        },
        'Michael': {
            alias: 'msmyers',
            strings: ['Michael', 'Michael A.', 'M'],
        },
        'Nikola': {
            alias: 'niko'
        },
    }

    constructor() {
        super({lastName: 'Smyers'});

        Object.keys(this.manifest).forEach(
            name => this.addMemberByNames(name, this.manifest[name]))
    }

    /**
     * @param {string} fullName
     * @return {Person}
     */
    findByFullName(fullName) {
        return this.people[fullName];
    }
}

export {Person}
export {Family}
export {SmyersFamily}
export default (new SmyersFamily());