const students = [
    {
        name: 'Rafael',
        testGrade1: 10,
        testGrade2: 7,
    },
    {
        name: 'João',
        testGrade1: 6,
        testGrade2: 7,
    }
]

for (const student of students) {
    const average = (student.testGrade1 + student.testGrade2) / 2
    if(average >= 7) {
        alert(`A média do aluno ${student.name} foi: ${average}\nAluno aprovado!`)
    } else {
        alert(`A média do aluno ${student.name} foi: ${average}\nAluno reprovado!`)
    }
}