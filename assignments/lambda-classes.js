// CODE here for your Lambda Classes
class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
    correctAssignment(student){
        student.grade = student.grad + Math.random * 10
    }
}

class Student extends Person {
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
        this.grade = attr.grade;
    }
    listSubjects(){
         return this.favSubjects.map(subject=> subject );
        };

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student,subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}
// Persons
const billy = new Person({
    name: 'Billy Bob',
    age: 65,
    location: 'Tennesee'
});

const sue = new Person({
    name: 'Sue',
    age: 46,
    location: 'Chicago'
})

// InStructors
const dan = new Instructor({
    name: 'Dan',
    location: 'Denver',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Meow, lets do some Javascript!`
  });

  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });


//   Students

const jimmy = new Student({
    name: 'Jimmy',
    age: '28',
    location: 'Missoula',
    previousBackground: 'Barista',
    className: 'Web75',
    favSubjects: ['Node.js', 'Javascript'],
    grade: 80
});

const susan = new Student({
    name: 'Susan',
    age: '23',
    location: 'New York',
    previousBackground: 'Florist',
    className: 'DS4',
    favSubjects: ['Python', 'Machine Learning'],
    grade: 76
});

// Project Managers

const josh = new ProjectManager({
    name: 'Josh',
    location: 'Flagstaff',
    age: 27,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `TERIYAKI!!!`,
    gradClassName: "Web15",
    favInstructor: "Josh Knell"
});
const sam = new ProjectManager({
    name: 'Sam',
    location: 'Atlanta',
    age: 25,
    favLanguage: 'C#',
    specialty: 'Game-Dev',
    catchPhrase: `Let's Get it!`,
    gradClassName: "Web17",
    favInstructor: "Bill Nye"
});

// console.log(billy.speak());
// console.log(sue.location);
// console.log(fred.favLanguage);
// console.log(dan.grade(jimmy, "hopscotch"));
// console.log(fred.demo("kayaking"));
// console.log(susan.listSubjects())
// console.log(susan.PRAssignment('cheese'));
// console.log(susan.sprintChallenge('math'));
// console.log(josh.standUp("PMGROUP"));
// console.log(josh.debugsCode(jimmy, 'javascript'));