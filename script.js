

// const participator = {
//     name:"Ramon Gomes",
//     email:"ramon@mail.com",
//     dateInscription: new Date(2020,2,22),
//     dateCheckIn: new Date(2024,2,23),
// }

let participators = [
    {
        name: "Ramon Gomes",
        email: "ramon@mail.com",
        dateInscription: new Date(2020, 2, 22),
        dateCheckIn:null,
    },
    {
        name: "Juliana Oliveira",
        email: "juliana@mail.com",
        dateInscription: new Date(2021, 5, 10),
        dateCheckIn: new Date(2024, 1, 12)
    },
    {
        name: "Lucas Pereira",
        email: "lucas@mail.com",
        dateInscription: new Date(2022, 8, 15),
        dateCheckIn: null
    },
    {
        name: "Fernanda Santos",
        email: "fernanda@mail.com",
        dateInscription: new Date(2023, 0, 25),
        dateCheckIn: new Date(2024, 2, 10)
    },
    {
        name: "Pedro Alves",
        email: "pedro@mail.com",
        dateInscription: new Date(2021, 3, 8),
        dateCheckIn: new Date(2024, 0, 5)
    },
    {
        name: "Carla Lima",
        email: "carla@mail.com",
        dateInscription: new Date(2020, 7, 12),
        dateCheckIn: null
    },
    {
        name: "Marcos Costa",
        email: "marcos@mail.com",
        dateInscription: new Date(2022, 10, 30),
        dateCheckIn: new Date(2024, 3, 25)
    },
    {
        name: "Amanda Vieira",
        email: "amanda@mail.com",
        dateInscription: new Date(2023, 2, 3),
        dateCheckIn: new Date(2024, 0, 30)
    },
    {
        name: "Gustavo Ferreira",
        email: "gustavo@mail.com",
        dateInscription: new Date(2021, 6, 20),
        dateCheckIn: new Date(2024, 1, 22)
    },
    {
        name: "Camila Martins",
        email: "camila@mail.com",
        dateInscription: new Date(2022, 4, 17),
        dateCheckIn: new Date(2024, 0, 15)
    }
]


const addParticipator = (event) =>{
    event.preventDefault()

    const formData = new FormData(event.target)

    const participator = {
        name: formData.get("name"),
        email: formData.get("email"),
        dateInscription: new Date(),
        dateCheckIn: null
    }

    const participatorExist = participators.find((p) => {
        return p.email == participator.email
    })

    if(participatorExist){
        alert("Email. já cadastrado!")
        return
}

    participators = [participator, ...participators]
    updateList(participators)

    event.target.querySelector('[name="name"]').value = ""
    event.target.querySelector('[name="email"]').value = ""
}


const newParticipator = (participator)=> {
    const dateInscription = dayjs(Date.now())
    .to(participator.dateInscription)

    let dateCheckIn = dayjs(Date.now())
    .to(participator.dateCheckIn)

    if(participator.dateCheckIn == null){
        dateCheckIn = `
        <button
            data-email="${participator.email}"
            onclick="doCheckIn(event)"
        >
        Confirmar check-in
        </button>
        `
    }
    return`

    <tr>
        <td>
            ${participator.name}     
            </br> 
            <small>
            ${participator.email}
            </small>
        </td>
        <td> ${dateInscription}</td>
        <td> ${dateCheckIn}</td>
    </tr>
`
}


const doCheckIn = (event) =>{
    const mesageconfirmation = "Tem certeza que deseja fazer o check-in?"
    if(confirm(mesageconfirmation) == false){
        return
    }

    const participator = participators.find((p)=>{
        return p.email == event.target.dataset.email
    })

    participator.dateCheckIn =  new Date()

    updateList(participators)
}


const updateList = (participators) =>{
    let output = ""
    for(let participator of participators){
        output = output + newParticipator(participator)
    }
    document.querySelector('tbody')
    .innerHTML = output
}


updateList(participators)

