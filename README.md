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
