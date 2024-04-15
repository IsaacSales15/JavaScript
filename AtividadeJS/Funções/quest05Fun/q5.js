document.getElementById('button').addEventListener('click', function(){
    const students = [
        { name: "Pedro", age: 24, skills: ["JavaScript", "TypeScript", "React"] },
        { name: "Ana", age: 22, skills: ["JavaScript", "Python", "Django"] },
        { name: "Carlos", age: 23, skills: ["Java", "Spring Boot", "Hibernate"] },
        { name: "Julia", age: 21, skills: ["JavaScript", "React", "Node.js"] },
        { name: "Marcos", age: 25, skills: ["C#", ".NET", "Entity Framework"] }
    ];

    function searchBySkill() {
        const skill = document.getElementById('skillInput').value;
        const results = document.getElementById('results');
        results.innerHTML = ''; 

        const studentsWithSkill = students.filter(student => student.skills.includes(skill));
        if (studentsWithSkill.length > 0) {
            studentsWithSkill.forEach(student => {
                results.innerHTML += `<p>${student.name}, ${student.age}, [${student.skills.join(', ')}]</p>`;
            });
        } else {
            results.innerHTML = '<p>Nenhum aluno encontrado com essa skill.</p>';
        }
    }

    searchBySkill(); 
});
