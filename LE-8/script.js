let products = [];

function fetchProducts() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "products.json", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            products = JSON.parse(xhr.responseText); // Store products
            displayProducts(products);
        } else {
            console.error("Failed to fetch products.");
        }
    };

    xhr.onerror = function () {
        console.error("Error occurred while making the request.");
    };

    xhr.send();
}

function displayProducts(productsToDisplay) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = ""; // Clear previous content

    productsToDisplay.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productName = document.createElement("h2");
        productName.textContent = product.name;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        const productPrice = document.createElement("p");
        productPrice.textContent = "Price: $" + product.price.toFixed(2);

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;

        productDiv.appendChild(productName);
        productDiv.appendChild(productDescription);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productImage);
        productContainer.appendChild(productDiv);
        });
}

fetchProducts();

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const sortSelect = document.getElementById("sort-select");

searchButton.addEventListener("click", function () {
    const searchKeyword = searchInput.value.trim().toLowerCase();
    const filteredProducts = filterProducts(searchKeyword);
    displayProducts(filteredProducts);
});

sortSelect.addEventListener("change", function () {
    const sortBy = sortSelect.value;
    sortProducts(sortBy);
});

function filterProducts(keyword) {
    return products.filter(product => {
        const productName = product.name.toLowerCase();
        return productName.includes(keyword);
    });
}

function sortProducts(sortBy) {
    const sortedProducts = [...products];
    if (sortBy === "name") {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "price") {
        sortedProducts.sort((a, b) => a.price - b.price);
    }
    displayProducts(sortedProducts);
}