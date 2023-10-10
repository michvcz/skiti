
const showButton = document.getElementById('showButton');
const hiddenContent = document.querySelector('.hidden-content');


showButton.addEventListener('click', () => {
    
    if (hiddenContent.style.display === 'none') {
        hiddenContent.style.display = 'block';
    } else {
        hiddenContent.style.display = 'none';
    }
});
