
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

        <button 
        class="remove" 
        onmouseover="toggleColor(this)" 
        onmouseout="defaultColor(this)"
        onclick="participatorRemove(this)"
        >
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 2.5H9V2C9 1.60218 8.84197 1.22064 8.56066 0.93934C8.27936 0.658035 7.89783 0.5 7.5 0.5H4.5C4.10218 0.5 3.72064 0.658035 3.43934 0.93934C3.15804 1.22064 3 1.60218 3 2V2.5H0.5C0.367392 2.5 0.240215 2.55268 0.146447 2.64645C0.0526785 2.74021 0 2.86739 0 3C0 3.13261 0.0526785 3.25979 0.146447 3.35355C0.240215 3.44732 0.367392 3.5 0.5 3.5H1V12.5C1 12.7652 1.10536 13.0196 1.29289 13.2071C1.48043 13.3946 1.73478 13.5 2 13.5H10C10.2652 13.5 10.5196 13.3946 10.7071 13.2071C10.8946 13.0196 11 12.7652 11 12.5V3.5H11.5C11.6326 3.5 11.7598 3.44732 11.8536 3.35355C11.9473 3.25979 12 3.13261 12 3C12 2.86739 11.9473 2.74021 11.8536 2.64645C11.7598 2.55268 11.6326 2.5 11.5 2.5ZM4 2C4 1.86739 4.05268 1.74021 4.14645 1.64645C4.24022 1.55268 4.36739 1.5 4.5 1.5H7.5C7.63261 1.5 7.75979 1.55268 7.85355 1.64645C7.94732 1.74021 8 1.86739 8 2V2.5H4V2ZM10 12.5H2V3.5H10V12.5ZM5 6V10C5 10.1326 4.94732 10.2598 4.85355 10.3536C4.75979 10.4473 4.63261 10.5 4.5 10.5C4.36739 10.5 4.24022 10.4473 4.14645 10.3536C4.05268 10.2598 4 10.1326 4 10V6C4 5.86739 4.05268 5.74021 4.14645 5.64645C4.24022 5.55268 4.36739 5.5 4.5 5.5C4.63261 5.5 4.75979 5.55268 4.85355 5.64645C4.94732 5.74021 5 5.86739 5 6ZM8 6V10C8 10.1326 7.94732 10.2598 7.85355 10.3536C7.75979 10.4473 7.63261 10.5 7.5 10.5C7.36739 10.5 7.24021 10.4473 7.14645 10.3536C7.05268 10.2598 7 10.1326 7 10V6C7 5.86739 7.05268 5.74021 7.14645 5.64645C7.24021 5.55268 7.36739 5.5 7.5 5.5C7.63261 5.5 7.75979 5.55268 7.85355 5.64645C7.94732 5.74021 8 5.86739 8 6Z" fill="#C4C4CC"/>
        </svg>
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


const participatorRemove = (button) => {
    const messageConfirmation = "Tem certeza que deseja remover o participante?"
    if (!confirm(messageConfirmation)) {
        return
    }

    const participator = button.parentNode.parentNode
    participator.parentNode.removeChild(participator)
    
    const participatorSelect = participator.dataset.participatorSelect
    const index = participators.findIndex(p => p.id === participatorSelect)
    if (index !== -1) {
        participators.splice(index, 1)
    }
}

const updateList = (participators) =>{
    let output = ""
    for(let participator of participators){
        output = output + newParticipator(participator)
    }
    document.querySelector('tbody')
    .innerHTML = output
}


const toggleColor = (button) => {
    const removeButton = button
    const svgElement = removeButton.querySelector("svg")
    const pathElement = svgElement.querySelector("path")
    let fillValue = pathElement.getAttribute('fill')

    if (fillValue === "#C4C4CC") {
        pathElement.setAttribute('fill', 'red')
    } 
}

const defaultColor = (button) => {
    const removeButton = button
    const svgElement = removeButton.querySelector("svg")
    const pathElement = svgElement.querySelector("path")
    let fillValue = pathElement.getAttribute('fill')
    
    if (fillValue === "red") {
        pathElement.setAttribute('fill', '#C4C4CC')
    }
}



updateList(participators)

