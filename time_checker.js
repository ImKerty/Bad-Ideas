document.getElementById('time-checker-btn').addEventListener('click', function() {
    const images = document.querySelectorAll('.hidden-images img');
    images.forEach(img => {
        img.classList.toggle('visible');
    });
});