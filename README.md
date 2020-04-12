## In this projcet, we are creating API endpoints with Nodejs and Express.

#### We are using Mongodb as our database to persist data.

The different end points include:
- POST 
- GET
- PUT 
- DELETE

### `ADD NEW ITEM`

Method Signature:

```js
app.post('/localhost/contact', (req,res) => {
    ///////
})
```

### `GET ALL ITEMS`

Method Signature:

```js
app.get('/localhost/contact', (req,res) => {
    //////
})
```

### `GET A SPECIFIC ITEM`

Method Signature:

```js
app.get('/contact/:contactID', (req,res) => {
    //////
})
```

### `UPDATE A SPECIFIC ITEM`

Method Signature:

```js
app.put('/contact/:contactId', (req,res) ={
    /////
})
```

### `DELETE A SPECIFIC ITEM`

Method Signature:

```js
app.delete('/contact/:contactId', (req,res) ={
    //////////
})
```