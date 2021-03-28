
const searchForm=document.querySelector('form')
const search = document.querySelector('input')

const errormessage= document.querySelector('#errormessage')

const cName= document.querySelector('#cName')
const cType= document.querySelector('#cType')
const cLevel= document.querySelector('#cLevel')
const cAtk= document.querySelector('#cAtk')
const cDef= document.querySelector('#cDef')
const cRce= document.querySelector('#cRce')
const image = document.querySelector('image')

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    cName.textContent='Loading...'
    const cardName = search.value
    cardName.replace( '%20', / /g,)

    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?name='+cardName).then((response) =>{
        response.json().then((data) => {
            if(data.error){
                cName.textContent=''
                errormessage.textContent = ('No card matching your query was found in the database.')
            }else{
                cName.textContent = ('Name: ')+data.data[0].name
                cType.textContent = ('Type: ')+data.data[0].type
                cLevel.textContent = ('Level: ')+data.data[0].level
                cAtk.textContent = ('Attack: ')+data.data[0].atk
                cDef.textContent = ('Defense: ')+data.data[0].def
                cRace.textContent = ('Race: ')+data.data[0].race
                
                imageUrl = data.data[0].card_images[0].image_url
                
                document.getElementById("image").src = imageUrl
                document.getElementById("image").style.display = 'block'
    
            }
        })
    })
})

