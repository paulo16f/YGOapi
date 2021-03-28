const request = require('request')

const Search=(name,callback)=>{

    const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name='+name

    request({url, json:true}, (error,{body})=>{
        if(error){
            callback('Uneable to connect to YGO services!', undefined)
        }else if(body.data === undefined){
            callback('Uneable to generate card. Try another one.',undefined)
        }else{
             callback(undefined, {
                name:body.data[0].name,
                type:body.data[0].type,
                level:body.data[0].level,
                atk:body.data[0].atk,
                def:body.data[0].def,
                race:body.data[0].race
            })    
        }
    })
}


module.exports = Search
