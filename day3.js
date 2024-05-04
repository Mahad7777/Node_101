const express = require('express')
const app = express()

app.get('/currentweather',(req,res)=>{
    const jsonweather = {
        location: 'islamabad',
        weather: 'cloudy',
        winds: 'north-east'
    }
    res.send(jsonweather)
})

app.listen(3001,()=>{
    console.log('port is running')
})


// // json -> obj
// const jsondata = '{"product": "Laptop", "price": 999.99}'
// const obj = JSON.parse(jsondata)
// console.log(obj.price)

// // obj -> json
// const objdata = {namee: 'Mahd',age: 30}
// const json = JSON.stringify(objdata)
// console.log(json)