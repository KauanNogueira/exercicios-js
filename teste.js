const lista = [
    { jobTitle: 'board', name: 'Kauan' },
    { jobTitle: 'board', name: 'Jackeline' },
    { jobTitle: 'employer', name: 'Nicolas' }
]

const acess = (name) => `${name} logged with succes!`

const authentication = (jobTitle) => {
    let array = []
    for (i = 0; i < jobTitle; i++) {
        array.push(i)
    }
}

const login = (person, authentication) => {
    if (person.jobTitle === 'board') {
        authentication(95000)
    } else if (person.jobTitle === 'employer') {
        authentication(9000)
    }

    return acess(person.name)
}