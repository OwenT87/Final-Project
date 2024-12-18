console.log(products)
let filteredProducts = [...products]
console.log(filteredProducts)

// SELECTORS
const productsContainer = document.querySelector(".not-sidebar")
const searchForm = document.querySelector(".input-form")
const searchInput = document.querySelector(".search-input")
const shpCrt = document.querySelector("shpCrt")
 const shpCrtCnt = document.querySelector("#cartCnt")


searchForm.addEventListener("keyup", () => {
    let searchTerm = searchInput.value.toLowerCase();
   console.log(searchTerm)
   filteredProducts = products.filter(product => {
    return product.title.includes(searchTerm)
   })
   displayProducts()
})

// Loop and Display each product
function displayProducts() {
    // A map allows you to acses which can be put into the DOM
    //.map returns an array which can be put into the DOM
    // .forEach doesn't return ANYTHING, so it all gets discarded
    productsContainer.innerHTML = filteredProducts.map(product => {
        //return the HTML for each product 
       return `<article class="products">
                    <img src="${product.image}" alt="">
                    <footer>
                        <p class="product-name"> ${product.title}</p>
                        <p class="product-price"> ${product.price}</p>
                        <button id="addCrt" onclick="addItm()"> Add to Cart </button>
                    </footer>
                </article>`
    }).join("")
}
displayProducts()

function view() {

}

function addItm() {
   console.log ("Item Added")
    shpCrtCnt.innerText  ++
}


