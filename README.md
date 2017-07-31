[goto express](#result)

## Setting up proxy
**In package.json**,  
```json
// doesn't work..
"proxy":"http://localhost/3001/",  
"proxy":"http://localhost/3001",
```  

<strong>works:</strong>
```js
"proxy":{
  "/users": {
    "target": "http://localhost:3001",  
    "ws":true
  },
  // ↓ without the "/", it works as well.
  "trips": {
    "target": "http://localhost:3001",
    "ws":true
  }
},
```
<em>↑ works</em> bcos: ( exclude the last **/** from *url* )  

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
**frontend setup**:
```
"auth0": {
  "target": "http://localhost:3005",
  "ws":true
}
```
 **backend setup (express)**:
```js
// change listening port (3000 --> 3005)
app.set('port', process.env.PORT || 3005);

// set up route
app.get('/auth0', (req, res, next) => {
    res.json({
      msg: "received your request."
    });
  });
```
**frontend axios call**:
```js
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

### Result
![Result](design-log/express_call.png)
