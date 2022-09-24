// function for fetching data

// async function start() {
//     const response = await fetch("https://dog.ceo/api/breeds/list/all")
//     const data = await response.json()
//     createBreedlist(data.message)
// }

// start()
 
// // function for createing the select drop dawn
// function createBreedlist(breedlist) {
//     document.getElementById("breed").innerHTML = `
//     <select onchange="loadByBreed(this.value)">
//             <option>Breeds</option>
//             ${Object.keys(breedlist).map(function(breed) {
//                 return `<option>${breed}</option>`
  
//             }).join('')}
//             </select>   
//     `
// }
  

// async function loadByBreed(breed) {   
//     if (breed != "Breeds") {
//         const response = await fetch(`https://dog.ceo/api/breeds/list/all`)
//         const data = await response.json(); 
//         // return data;      
//         console.log(data)
        
        
//     }
    
// }



// function createBreed(images) {
//     document.getElementById('card').innerHTML =html;
   

// }

// function for date*************
const date = new Date;
document.getElementById('date').innerHTML= date.toDateString()


// function for  fetching data

const baseUrl = `https://dog.ceo/api/breeds/list`;
const selectBreed = document.querySelector('.text');
const Breed = document.querySelector('.Breed');
const  africa = 'affenpinscher';
const randomize = document.querySelector('.btn1')
const selectNumber = document.querySelector('.select_button2')





let numbers = []
for(let i = 1; i <= 100; i++)numbers.push(i)


selectNum = `
${numbers.map(number => (`<option value=${number}>${number}</option>`))}`
selectNumber.innerHTML = selectNum





selectBreed.addEventListener('click', async () => {
    document.getElementById('hound').innerHTML = selectBreed.value;
})



// function for randomize image

const hound = 'affenpinscher'

randomize.addEventListener('click', async () => {
    try{
        const data = await fetch(`https://dog.ceo/api/breed/${hound}/images/random/10`)
        const defaultData = await data.json()
        randomImages(defaultData.message)

    }
    catch (error) {
        console.log(error.message, 'check again')
    }
});




// fu
const getBreedName = (e) => {
    const value = e.target.value;
    getBreedByName(value)
} 

// function for Displaying the image

selectBreed.addEventListener('click',getBreedName);


const getBreedByName = async (name, num = 15) => {
    try{
        const data = await fetch(`https://dog.ceo/api/breed/${name}/images/random/${num}`) 
        const image  = await data.json()
        // console.log(image)
        randomImages(image?.message)
   } catch (error) {
    console.log(error.message, 'check again')
   }
}

// get dog image
const randomImages = (data) => {
    const dogImage = `
    ${data?.map((url) => (`<img src=${url} alt="dog_image">` ))}`
    Breed.innerHTML = dogImage;  
}

// function for the default Displaying*****************


const getNumberOfImages = async (e) => {

    totalNumberImages =  e.target.value;
    
    try{
        const data = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random/${totalNumberImages}`)
        const defaultData = await data.json()
        console.log(defaultData.message)
        randomImages(defaultData.message)

    }catch (error) {
       console.log(error.message, 'try again')
    }
}


// function for displaying names of dogs breeds****************

 
const defaultDogList = async () => {
    try{
        const data = await fetch(`https://dog.ceo/api/breed/${africa}/images/random/20`)
        const defaultData = await data.json()
        // console.log(defaultData.message)
        randomImages(defaultData.message)

    } catch (error) {
        console.error(error.message, 'try again')
    }
}

defaultDogList()




//  function for creating select drop dawn
const getListOfBreeds = async() =>{
    try {
        const data = await fetch(baseUrl);
        const res = await data.json()
        console.log(res.message)
        selectCategory ( res.message)
        
    } catch (error) {
        console.error(error.message, 'not found.')

    }
};

const selectCategory = (data)  => {
    const breedoption = `
    ${data?.map((el) => (`<option value=${el}>${el}</option>4`))}`
    selectBreed.innerHTML = breedoption;
}

getListOfBreeds()


 









    