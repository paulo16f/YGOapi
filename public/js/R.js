
const randomForm=document.querySelector('form')

const errormessage= document.querySelector('#errormessage')

const cName= document.querySelector('#cName')
const cType= document.querySelector('#cType')
const cLevel= document.querySelector('#cLevel')
const cAtk= document.querySelector('#cAtk')
const cDef= document.querySelector('#cDef')
const cRce= document.querySelector('#cRce')


randomForm.addEventListener('submit', (e) => {
    e.preventDefault()

    cName.textContent='Loading...'

    fetch('https://db.ygoprodeck.com/api/v7/randomcard.php').then((response) =>{
        response.json().then((data) => {
            if(data.error){
                errormessage.textContent = data.error
            }else{
                cName.textContent = ('Name: ')+data.name
                cType.textContent = ('Type: ')+data.type
                cLevel.textContent = ('Level: ')+data.level
                cAtk.textContent = ('Attack: ')+data.atk
                cDef.textContent = ('Defense: ')+data.def
                cRace.textContent = ('Race: ')+data.race 

                imageUrl = data.card_images[0].image_url
                
                document.getElementById("image").src = imageUrl
                document.getElementById("image").style.display = 'block'
            }
        })
    })
}) 