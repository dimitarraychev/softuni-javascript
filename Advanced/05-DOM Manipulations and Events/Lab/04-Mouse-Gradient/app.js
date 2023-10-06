function attachGradientEvents() {

    const gradient = document.querySelector('#gradient');
    const resultArea = document.querySelector('#result');

    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        const gradientBoxWidth = event.target.clientWidth;
        const mousePosition = event.offsetX / (gradientBoxWidth - 1);
        const percentage = Math.trunc(mousePosition * 100);
        resultArea.textContent = percentage + '%';
    }

    function gradientOut(event) {
        resultArea.textContent = '';
    }
}