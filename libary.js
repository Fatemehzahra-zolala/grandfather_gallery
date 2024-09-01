function openModal(bookId) {
    var modal = document.getElementById(bookId);
    modal.style.display = "block";
}

function closeModal(bookId) {
    var modal = document.getElementById(bookId);
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

function updateQuantity(bookId, change) {
    var quantitySpan = document.getElementById('quantity-' + bookId);
    var currentQuantity = parseInt(quantitySpan.innerText);
    var newQuantity = currentQuantity + change;
    if (newQuantity < 1) newQuantity = 1; // Minimum quantity is 1
    quantitySpan.innerText = newQuantity;
}

function addToCart(bookId) {
    var quantitySpan = document.getElementById('quantity-' + bookId);
    var quantity = quantitySpan.innerText;
    alert('کتاب با شناسه ' + bookId + ' به سبد خرید اضافه شد. تعداد: ' + quantity);
}
