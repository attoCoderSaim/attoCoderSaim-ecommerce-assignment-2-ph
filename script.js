document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var emailField = document.querySelector('.newsletter-entry');
    if (emailField.checkValidity()) {
        var successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const popularItems = document.querySelectorAll('.popular-grid-item');

    const itemsToHide = Array.from(popularItems).slice(-3);
    itemsToHide.forEach(item => item.classList.add('hide'));

    toggleButton.addEventListener('click', function() {
        if (itemsToHide[0].classList.contains('hide')) {
            itemsToHide.forEach(item => item.classList.remove('hide'));
            toggleButton.querySelector('.view-more').textContent = 'See Less Products';
        } else {
            itemsToHide.forEach(item => item.classList.add('hide'));
            toggleButton.querySelector('.view-more').textContent = 'See More Products';
        }
    });
});

