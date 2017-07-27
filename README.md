## Setting up proxy
**In package.json**,  

doesn't work
```
"proxy":"http://localhost/3001/",  
"proxy":"http://localhost/3001",
```
---  
**↓ works** bcos: ( exclude the last **/** from *url* )
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
