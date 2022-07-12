async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    createBreedlist(data.message)
}

start()
 

function createBreedlist(breedlist) {
    document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)">
            <option>Breeds</option>
            ${Object.keys(breedlist).map(function(breed) {
                return `<option>${breed}</option>`

            }).join('')}
            </select>
    `
}


async function loadByBreed(breed) {   
    if (breed != "Breeds") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images `)
        const data = await response.json () 
        createSlideshow(data)
    }
    
}

// function createSlideshow(item) {
//     const dogImages = ` 
//         ${item?.map((breedList) => {
//             `<img src="${breedList}" alt="">`
//         })}
//     `;

//     document.getElementById('card').innerHTML = dogImages;
    
// }



function createSlideshow(images) {
  document.getElementById("card").innerHTML = `
  <div class="card_content">
     <img src="('${images [1 ]}')" alt="">
  
  
  `
}






    