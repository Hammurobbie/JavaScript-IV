// CODE here for your Lambda Classes

class Person {
    constructor(info) {
        this.name = info.name,
        this.age = info.age,
        this.location = info.location
    }
    speak(){
        return `Hello, my name is ${this.name}, and I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(info){
        super(info);
        this.specialty = info.speciality,
        this.favLanguage = info.favLanguage,
        this.catchPhrase = info.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}.`
    };
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`
    };
    chaosGrade(student){
        let randoGrade = Math.random() < 0.5 ? -1 : 1;
        return Student.grade * randoGrade;
    }
}

class Student extends Instructor {
    constructor(info){
        super(info);
        this.previousBackground = info.previousBackground,
        this.className = info.className,
        this.favSubjects = [info.favSubjects],
        this.grade = Math.min(Math.max(parseInt(this.grade), 0),100)
    }
    listsSubjects(){
        return this.favSubjects.toString();
    };
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    };
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

class ProjectManager extends Instructor {
    constructor(info){
        super(info);
        this.gradClassName = info.gradClassName,
        this.favInstructor = info.FavInstructor
    }
    standup(slackChannel){
        return `${this.name} announes to ${slackChannel} @channel standy times!`
    };
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}


const MrsRobinson = new Instructor({
    name: "Mrs. Robinson",
    age: 47,
    location: "Beverly Hills", 
    specialty: "Influence",
    favLanguage: "D",
    catchPhrase: "Oh, come on now"
})

const Ed = new Student({
    name: "Edward Snowden",
    age: 36,
    location: "Moscow", 
    previousBackground: "classified",
    className: "class X",
    favSubjects: ["Whistleblowing 101", "Russian", "Deep American Studies"]
})


const Dwight = new ProjectManager({
    name: "Dwight",
    age: 35,
    location: "Scranton", 
    gradClassName: "Web 2",
    favInstructor: "Michael Scott"
})


console.log(MrsRobinson.name);
console.log(MrsRobinson.speak());
console.log(MrsRobinson.grade(Dwight, "Redux"));
console.log(MrsRobinson.demo("React"));
console.log(Dwight.gradClassName); 
console.log(Dwight.age); 
console.log(Dwight.standup("help")); 
console.log(Dwight.debugsCode(Ed, "Redux")); 
console.log(Ed.className);
console.log(Ed.favSubjects);
console.log(Ed.listsSubjects());   
console.log(Ed.PRAssignment("Redux"));
console.log(Ed.sprintChallenge("React")); 
console.log(MrsRobinson.chaosGrade(Ed));


