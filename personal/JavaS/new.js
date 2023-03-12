let studentName = document.getElementById('student-name');
let studentAge = document.getElementById('student-age');
const student = () => {
    const studentDetails = {
        studentName: studentName.value,
        studentAge: studentAge.value,
    };
    let displayAll = document.getElementById('display-all');
    displayAll.textContent = studentDetails.studentName + " " + studentDetails.studentAge;
}
const refresh = () => {
    studentName.value = "";
    studentAge.value = "";
    let displayAll = document.getElementById('display-all');
    displayAll.textContent = "";
}

