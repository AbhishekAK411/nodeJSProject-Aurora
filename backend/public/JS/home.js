window.onload = async() =>{
   let data = await fetch('http://localhost:3002/aurora/getJSON');
   let response = await data.json();
   // console.log(response);

   localStorage.setItem("currentUserAurora", JSON.stringify(response));

   
}
