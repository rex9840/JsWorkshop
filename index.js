
//functions 

function even(a){ 
    return Boolean(a%2==0)

}
inputs = [1,2,3,4,5,6,7]



console.log(inputs.filter(function(a){ return a%2===0})) //lambda

console.log(inputs.filter((a)=>{return a%2===0}))      //lambda

console.log(inputs.filter(even))

// destructuring 

function destructuring(){
    data = {"name":"Rupesh Nepal","faculty": "bsc csit"}
    
    
    let {name} = data 
    
    console.log(name)
    
    
    console.log(data.name)
    
} 


//async awiat


async function  fetch_data(){ 
    try {const response = await fetch("http://api.github.com")
    const data = await response.headers
    console.log(data)
    throw new Error("error")
}
catch(error){
    console.log(error)
}
}

fetch_data()



//async await with promise  handelling using then and catch method 


async function fetched_data(){

    const req = await fetch("https://api.github.com")
    const data = await req.json()
    return data 
}

fetched_data().then((data)=>console.log(data)).catch((error)=>console.log(error))



//spreading and resting 