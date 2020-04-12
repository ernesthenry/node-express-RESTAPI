## In this projcet, we are creating API endpoints with Nodejs and Express.

#### We are using Mongodb as our database to persist data.

The different end points include:
- POST 
- GET
- PUT 
- DELETE

### `POST`

Method Signature:

```js
app.post('/localhost/contact', (req,res) => {
    ///////
})
```

### `GET`

Method Signature:

```js
app.get('/localhost/contact', (req,res) => {
    //////
})
```

### `PUT`

Method Signature:

```js
app.put('/localhost/contact/:contactId', (req,res) ={
    ................
})
```

### `DELETE`

Method Signature:

```js
app.delete('/localhost/contact/:contactId', (req,res) ={
    ................
})
```