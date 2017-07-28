## Setting up proxy
**In package.json**,  
```js
"proxy":"http://localhost/3001/",  
"proxy":"http://localhost/3001",
// doesn't work..
```  
```js
"proxy":{
  "/users": {
    "target": "http://localhost:3001",  
          /* http://localhost:3001/ doesn't work */
    "ws":true
  },
  // ↓ without the "/", it works as well.
  "trips": {
    "target": "http://localhost:3001",
    "ws":true
  }
},
```
**↑ works** bcos: ( exclude the last **/** from *url* )  

**In axios call**,  
```js
componentWillMount(){  
  console.log('prior axios call');
  let self = this;
  // fat pipe below binds the state.
  // error using func(){} instead of (param)=>{}
  axios.get('/users/1').then(res => {        
    self.setState({
      user: res.data
    });        
  }).catch(function(err){
    console.log('Error in server call: ',err);
    if (err.response) {
      console.log('server responded with err: ', err.response);
    }
  })
}
```
## Proxy-ing to a 3rd server (express):
```
/*frontend setup*/
"auth0": {
  "target": "http://localhost:3005",
  "ws":true
}
```
```js
// backend setup (express)

// change listening port
app.set('port', process.env.PORT || 3005);

// set up route (3000 --> 3005)
app.get('/auth0', (req, res, next) => {
    res.json({
      msg: "received your request."
    });
  });
```
```js
// frontend axios call
componentWillMount(){      
  console.log('prior axios call to express');
  let self = this;
  axios.get('/auth0').then(res => {
    console.log(res);
  }).catch(function(err){
    console.log('Error in server call: ',err);
    if (err.response) {
      console.log('server responded with err: ', err.response);
    }
  })
}
```

### Result:
![Result](design-log/express_call.png)
