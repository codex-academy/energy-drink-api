
let score_count = 0;
let mofaya_count = 0;

let scoreElement = document.querySelector('.score_count');
let mofayaElement = document.querySelector('.mofaya_count');

scoreElement.innerText = score_count;
mofayaElement.innerText = mofaya_count;

const drinks = document.querySelector(".drinks");

init().then(() => {
    drinks.classList.remove("hidden");
} )



// axios
//     .get('/api/energy_drinks')
//     .then((result) => {
//         // console.log(result.data);
//         result.data.forEach(drink => {
//             drinks.innerHTML += `<li>${drink.drink_name}</li>`
//         });


//     })


