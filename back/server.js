const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req,res) => {
    if(req.method == "GET"){
        if(req.url.substring(1) == "categories"){
            fs.readFile(path.resolve(__dirname,'./data/categories.json'),(err,data) => {
                if(err) {throw err}
                // console.log(JSON.parse(data));
                res.writeHead(200,{'Access-Control-Allow-Origin':'*'})
                res.end(data)
            })
        }
        if(req.url.substring(1,9) == "products" && req.url.split('/')[2]) {
            const categoryId = req.url.split('/')[2]
            fs.readFile(path.resolve(__dirname,'./data/products.json'),(err,data) => {
                if(err) {throw err}
                const foundProducts = JSON.parse(data).filter(e=>e.categoryId == categoryId)
                // console.log(foundProducts);
                res.writeHead(200,{'Access-Control-Allow-Origin':'*'})
                res.end(JSON.stringify(foundProducts))
            })
        }
  }
  if(req.method == "POST") {
      if(req.url.substring(1) == 'order') {
          req.on('data',chunk=>{
            //   console.log(JSON.parse(data));
            fs.readFile(path.resolve(__dirname,"./data/order.json"),(err,data) =>{
                if(err) {throw err}
                const allOrders = JSON.parse(data)
                allOrders.push(JSON.parse(chunk))
                fs.writeFile(path.resolve(__dirname,'./data/order.json'),JSON.stringify(allOrders,null,4),(err)=> {
                    if(err) {throw err}
                    res.end(JSON.stringify('ok'))
                })
            })
          })
      }
  }
})
server.listen(9000,console.log('create server'))