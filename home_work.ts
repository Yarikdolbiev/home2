enum DirectionType{
  JS = 'JavaScript',
  TS= 'TypeScript',

}
class School {
  directions: (string | number)[] = [];

addDirection(direction : DirectionType) {
  this.directions.push(direction);
  
  
  
}

}

class Direction {
levels: (string | number)[] = [];
_name: string;

get name() :string {
  return this._name;
}

constructor(name: string) {
  this._name = name;
}

addLevel(level: string | number) {
  this.levels.push(level);
}
}


class Level {
groups: number[] = [];
 _name: string;
 _program: string;
 

constructor(name: string, program: string) {
  this._name = name;
  this._program = program;
}

get name() :string {
  return this._name;
}

get program():string{
  return this._program;
}


addGroup(group: number) {
  this.groups.push(group);
}
}

class Group {
_students: Student[] = [];
directionName: string;
levelName: string;

get students() : Student[] {
  return this._students;
}

constructor(directionName: string, levelName: string) {
  this.directionName = directionName;
  this.levelName = levelName;
}

addStudent(student : Student) {
  this._students.push(student);
}

showPerformance() {
  const sortedStudents = this.students.sort(
    (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
  );

  return sortedStudents;
}
}

class Student {
grades: { [subject : string]: number } = {};
attendance: boolean[] = [];
firstName: string;
lastName: string;
birthYear: number;


constructor(firstName: string, lastName: string, birthYear: number) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
}

get fullName() :string {
  return `${this.lastName} ${this.firstName}`;
}

set fullName(value: string) {
  [this.lastName, this.firstName] = value.split(" ");
}

get age() :number {
  return new Date().getFullYear() - this.birthYear;
}

setGrade(subject: string , grade: number) {
  this.grades[subject] = grade;
}

markAttendance(present: boolean) {
  this.attendance.push(present);
}

getPerformanceRating() :number {
  const gradeValues = Object.values(this.grades);

  if (gradeValues.length === 0) return 0;

  const averageGrade =
    gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;

  const attendancePercentage =
    (this.attendance.filter((present) => present).length /
      this.attendance.length) *
    100;

  return (averageGrade + attendancePercentage) / 2;
}
}