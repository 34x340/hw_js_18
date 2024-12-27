const students = [
    {
        "id": 1,
        "name": "Ivan Petrenko",
        "age": 15,
        "course": "Web Development",
        "skills": ["HTML", "CSS", "JavaScript"],
        "email": "ivan.petrenko@example.com",
        "isEnrolled": true
    },
    {
        "id": 2,
        "name": "Olha Kovalenko",
        "age": 16,
        "course": "Game Development",
        "skills": ["C#", "Unity"],
        "email": "olha.kovalenko@example.com",
        "isEnrolled": true
    },
    {
        "id": 3,
        "name": "Dmytro Shevchenko",
        "age": 14,
        "course": "Mobile App Development",
        "skills": ["Java", "Kotlin", "Android Studio"],
        "email": "dmytro.shevchenko@example.com",
        "isEnrolled": false
    },
    {
        "id": 4,
        "name": "Anastasia Ivanova",
        "age": 17,
        "course": "Data Science",
        "skills": ["Python", "Pandas", "Machine Learning"],
        "email": "anastasia.ivanova@example.com",
        "isEnrolled": true
    },
    {
        "id": 5,
        "name": "Mykola Bondarenko",
        "age": 15,
        "course": "Cybersecurity",
        "skills": ["Networking", "Ethical Hacking", "Linux"],
        "email": "mykola.bondarenko@example.com",
        "isEnrolled": true
    }
]
    

// 1. Реалізуйте функцію для отримання списку всіх студентів (HTTP GET /students)
function getStudents() {
    const studentsList = document.getElementById('students');
    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.name} ${student.age} ${student.course} ${student.skills} ${student.email}`;
        studentsList.appendChild(li);
    });
}

document.addEventListener('DomContent') = getStudents();

// 2. Реалізуйте функцію для додавання нового студента (HTTP POST /students)
function addStudent(newStudent) {
    students.push({
        id: students.length + 1,
        ...newStudent
    });
    getStudents();
}
const newStudent = {
    name: "Nazar",
    age: 16,
    course: "Design",
    skills: ["Figma"],
    email: "nazar@hmail.com",
};
// 3. Реалізуйте функцію для оновлення інформації про студента (HTTP PUT /students/{id})
function updateStudent(id, updatedInfo) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex === -1) {
        students[studentIndex] = {...students[studentIndex], ...updatedInfo};
        getStudents(); 
    } else {
        console.error;
    }
}