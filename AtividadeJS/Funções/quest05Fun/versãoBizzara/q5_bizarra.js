document.addEventListener('DOMContentLoaded', function() {
    const students = [];

    document.getElementById('addButton').addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const age = parseInt(document.getElementById('age').value);
        const skills = document.getElementById('skills').value.split(",").map(skill => skill.trim());

        students.push({ name, age, skills });
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('skills').value = '';

        console.log(students); 
    });

    document.getElementById('searchButton').addEventListener('click', function() {
        const searchSkill = document.getElementById('searchSkill').value;
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = ''; 

        const filteredStudents = students.filter(student => student.skills.includes(searchSkill));
        if (filteredStudents.length > 0) {
            filteredStudents.forEach(student => {
                resultsDiv.innerHTML += `<p>${student.name}, ${student.age}, [${student.skills.join(", ")}]</p>`;
            });
        } else {
            resultsDiv.innerHTML = `<p>Nenhum estudante encontrado com a habilidade '${searchSkill}'</p>`;
        }
    });
});

// Versão bem questionavél, sim, eu pedi meu tempo fazendo isso :)