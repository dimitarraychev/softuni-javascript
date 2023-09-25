function colorize() {

    const evenChildren = document.querySelectorAll('table tr:nth-child(even)')
    
    for (const child of evenChildren) {
        child.style.background = 'teal';
    }
}