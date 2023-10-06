/* ================ Classes Functions ===========*/

class Color {
    constructor(r, g, b, name){
        this.r = r; 
        this.g = g; 
        this.b = b;
        this.name = name;
    }

    innerRGB(){
        const {r, g, b} = this;
        return `${r} ${g}, ${b}`;

    }
    brightness(){
        const {r, g, b} = this;
        const bright = (0.299 * r) + (0.587 * g) + (0.114 * b);
        return bright;
    }

    hex(){
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    rgb(){
        return `rgb(${this.innerRGB()})`;
    }

    rgba(a = 1){
        return `rgba(${this.innerRGB()}, ${a})`;
    }

}

const color3 = new Color(34, 78, 202, "Ocean Blue");
