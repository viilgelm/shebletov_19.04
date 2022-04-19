const closeM = () => {
    const populClose = document.querySelector('.popup-call');

    populClose.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains("popup-call") || e.target.classList.contains('popup-close')){
            populClose.style.display = 'none';
        }
    })
}

export default closeM;