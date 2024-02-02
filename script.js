async function fetchData(){

    // await must be called in a line that is inside a function
const response = await fetch("data.txt");
const text = await response.text();
console.log(text);
document.querySelector("#output").innerHTML = text;
}

async function fetchWithAxios(){
    const response = await axios.get("data.txt");
    const text = response.data;
    console.log("fetchWithAxios is done!")
    document.querySelector("#output").innerHTML = text;
}

fetchData();
fetchWithAxios();
console.log("after fetchData is called()")

setInterval(function(){
    console.log("Hello world");
},1000)

