const user = [
    {
    nome: "Banzak", 
    tech : ["Cgfg", "CSS"]
    },
    {
    nome: "Mayk", 
    tech : ["CSS", "Html"]
    },
    {
    nome: "Rodrigo", 
    tech : ["React", "Node"]
    }
]

function checkTechCSS(user){
    for(let i = 0; i < user['tech'].length; i++){
        if (user.tech[i] == "CSS") {
            return true
        } else {
            return false
        }
    }
}



for(let i= 0; i < user.tech.length; i++){
    const usuerWorkWithCSS = checkTechCSS(user[i])

    if(usuerWorkWithCSS) {
        console.log(`O usuario  ${user[i].nome} trabalha com CSS`)
    }
}
