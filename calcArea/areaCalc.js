function calculateArea(myArea)  {
    var myArea = Math.PI * myRadius**2

    return "A circle with a " + myRadius + " centimeter radius has an area of " + myArea.toFixed(1) + " square centimeters."
}


myRadius = parseFloat(prompt("Enter the Radius of the Circle."))
alert(calculateArea(myRadius))

