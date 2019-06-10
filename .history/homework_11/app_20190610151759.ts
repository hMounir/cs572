import addAvailablity from ("./available");

@addAvailablity(true)
class Course{}

console.log(new Course());