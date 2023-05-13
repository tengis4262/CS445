const Student = (() => {
    let grades = [];
    let fName = "";
    let lName = "";

    function student(first, last) {
        fName = first;
        lName = last;
    }
    function studentInfo() {
        return `${fName} ${lName}`
    }
    function getStuInfo() {
        return `${studentInfo()} : ${getAvgGrade()}`
    }
    function getAvgGrade() {
        const total = grades.reduce((acc, curr) => acc + curr , 0);
        return (grades.length == 0) ? 0 : total / grades.length;
    }
    function enterGrade(grade) {
        grades.push(grade);
    }
    return {
        student,
        getStuInfo,
        getAvgGrade,
        enterGrade
    }
})();

Student.student("Tengis", "Erdene") // nothing returned
Student.getAvgGrade(); //returns 0 
Student.enterGrade(80);
Student.enterGrade(70);
Student.enterGrade(60);
Student.getAvgGrade(); // returns 70
console.log(Student.getStuInfo()) // Output : Tengis Erdene : 70