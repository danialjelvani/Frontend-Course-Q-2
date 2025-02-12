
// Get the modal
var modal = document.getElementById("bookingModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// product photo gallery
function changeImage(src) {
    document.querySelector('.main-image img').src = src;
};


// Filter by Brand 1st display:

document.addEventListener("DOMContentLoaded", function () {
    const filterContainer = document.querySelector('.checkboxes'); // ✅ Corrected Selector
    const checkboxes = document.querySelectorAll('.checkbox-label input[type="checkbox"]');
    const productCards = document.querySelectorAll('.product-card');

    function filterProducts() {
        const selectedBrands = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value.trim().toLowerCase());

        productCards.forEach(card => {
            const cardBrand = (card.getAttribute('data-brand') || "").trim().toLowerCase(); // ✅ Handle null case

            card.style.display = (selectedBrands.length === 0 || selectedBrands.includes(cardBrand)) ? '' : 'none';
        });
    }

    // ✅ Event Delegation for Efficiency
    if (filterContainer) {
        filterContainer.addEventListener('change', filterProducts);
    }

    // ✅ Apply filter on page load (for pre-checked checkboxes)
    filterProducts();
});


// Filter by Brand 2nd display:

document.addEventListener("DOMContentLoaded", function () {
    const filterContainer = document.querySelector('.checkboxes2'); // ✅ Corrected Selector
    const checkboxes = document.querySelectorAll('.checkbox-label2 input[type="checkbox"]');
    const productCards = document.querySelectorAll('.product-card2');

    function filterProducts() {
        const selectedBrands = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value.trim().toLowerCase());

        productCards.forEach(card => {
            const cardBrand = (card.getAttribute('data-brand') || "").trim().toLowerCase(); // ✅ Handle null case

            card.style.display = (selectedBrands.length === 0 || selectedBrands.includes(cardBrand)) ? '' : 'none';
        });
    }

    // ✅ Event Delegation for Efficiency
    if (filterContainer) {
        filterContainer.addEventListener('change', filterProducts);
    }

    // ✅ Apply filter on page load (for pre-checked checkboxes)
    filterProducts();
});


