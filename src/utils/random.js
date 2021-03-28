const request = require('request')

const Random=(callback)=>{
    const url = 'https://db.ygoprodeck.com/api/v7/randomcard.php'

    request({url, json:true}, (error,{body})=>{
        if(error){
            callback('Uneable to connect to YGO services!', undefined)
        }else{
             callback(undefined, {
                name:body.name,
                type:body.type,
                level:body.level,
                atk:body.atk,
                def:body.def,
                race:body.race,
            })    
        }
    })
}

module.exports = Random