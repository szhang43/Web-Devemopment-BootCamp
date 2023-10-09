/* ================== Color Class Definition ================== */

class Color {
    constructor(r, g, b, name = "defaultName") {
        // Constructor to create a Color object with RGB components and an optional name
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        // Calculate the HSL values when a Color object is created
        this.calcHSL();
    }

    // Method to return the inner RGB components as a string
    innerRGB() {
        const { r, g, b } = this;
        return `${r} ${g}, ${b}`;
    }

    // Method to calculate and return the brightness of the color
    brightness() {
        const { r, g, b } = this;
        // Calculate brightness using the weighted formula
        const bright = (0.299 * r) + (0.587 * g) + (0.114 * b);
        return bright;
    }

    // Method to return the color as a hexadecimal representation
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    // Method to return the color as an RGB representation
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

    // Method to return the color as an RGBA representation with an optional alpha value
    rgba(a = 1) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }

    // Method to return the color as an HSL representation
    hsl() {
        const { h, s, l } = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    // Method to calculate and return the opposite color (180 degrees hue shift)
    calcOpposite() {
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`;
    }

    // Method to return the color with full saturation
    fullSaturation() {
        const { h, l } = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }

    // Method to calculate the HSL values based on the RGB components
    calcHSL() {
        /* Source: stack overflow 
        https://stackoverflow.com/questions/67816284/converting-between-color-models
        */
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);

        // Set the calculated HSL values as properties of the Color object
		this.h = h;
		this.s = s;
		this.l = l;
	}
}

/* ================ Creating Color Objects ================== */

// Create a Color object with RGB components and an optional name
const color3 = new Color(34, 78, 202, "Ocean Blue");

// Create a Color object for white with RGB components and a name
const white = new Color(255, 255, 255, "white");
