function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

function areaAndVolumeCalculator(area, vol, input) {

    const figuresArr = JSON.parse(input);
    let result = [];
    
    figuresArr.forEach(fig => {
        let figObj ={
            'area': area.apply(fig),
            'volume': vol.apply(fig)
        }
        result.push(figObj);
    });

    return result;
}

console.log(areaAndVolumeCalculator(area, vol, `[
    {"x":"1","y":"2","z":"10"},    
    {"x":"7","y":"7","z":"10"},    
    {"x":"5","y":"2","z":"10"}    
    ]`));