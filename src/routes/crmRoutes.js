import { request } from "express"

const routes = (app) =>  {
    app.route('/contact')
        .get((req,res,next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next()
        }, (req,res) => {
            res.send('GET request successfully')
        })

     
        .post((req,res) =>
            res.send('POST request successfully'))

    app.route('/contact/:contactID')
        .put((req,res) =>
            res.send('PUT request successfully'))

        .delete((req,res) =>
            res.send('DELETE request successfully'))
}

export default routes;