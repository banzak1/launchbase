const users = [
    {nome: "Banzak", tech: ["Javascript", "Html"]},
    {nome: "Mayk", tech: ["CSS", "Javascript"]},
    {nome: "Rodrigo", tech: ["React", "Node"]}
]

function showUsers(usuarios) {
    for(let i = 0; i < usuarios.length; i++){
        console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tech[0]}, ${usuarios[i].tech[1]}`)
    }
}

const showUser = showUsers(users);