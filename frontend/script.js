fetch('http://localhost:4000/getuser')
.then((res)=>res.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(err, 'this is error'))