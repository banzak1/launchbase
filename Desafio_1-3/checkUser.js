const user = [
    {nome: "Banzak", tech: ['Cgfg', 'CSS']},
    {nome: "Mayk", tech: ["CSS", "Html"]    },
    {nome: "Rodrigo", tech: ["React", "Node"]}
]

function checkTechCSS(user){
    const tecnologia = user.tech
    for(let i = 0; i < tecnologia.length; i++){
        if (tecnologia[i] == 'CSS') {
            return true
        }
    }
    return false
}



for(let i= 0; i < user.length; i++){
    const usuerWorkWithCSS = checkTechCSS(user[i])

    if(usuerWorkWithCSS) {
        console.log(`O usuario  ${user[i].nome} trabalha com CSS`)
    }
}
