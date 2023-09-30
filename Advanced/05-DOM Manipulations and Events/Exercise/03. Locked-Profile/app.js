function lockedProfile() {
    
    const showMoreBtns = Array.from(document.querySelectorAll('button'));
    showMoreBtns.forEach(button => button.addEventListener('click', showMore));

    function showMore(e) {
        const targetParent = e.target.parentNode;
        const hiddenInfo = targetParent.querySelector('div');
        const unlockRadio = targetParent.querySelector('input[value="unlock"]');
        
        if (unlockRadio.checked) {
            if (e.target.textContent === 'Show more') {
                hiddenInfo.style.display = 'inline';
                e.target.textContent = 'Hide it';
            } else {
                hiddenInfo.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    }
}