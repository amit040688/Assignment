
function toggleBox(selectedIndex) {
    let boxes = document.querySelectorAll ('.box');
    let contents = document.querySelectorAll('.hidden-content');
    let radios = document.querySelectorAll('input[type="radio"]');
    let priceDisplay = document.getElementById('price'); // Element to display price

    boxes.forEach((box, index) => {
        let price = box.getAttribute('data-price'); // Get price from data attribute

        if (index + 1 === selectedIndex) {
            box.classList.add('active');
            contents[index].style.display = "block";
            radios[index].checked = true;
            priceDisplay.textContent = `Total: $${price}`; // Update price display
        } else {
            box.classList.remove('active');
            contents[index].style.display = "none";
        }
    });
}
