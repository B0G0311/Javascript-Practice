viewerAge = parseFloat(prompt("What is your age?"))

if (viewerAge < 21 && viewerAge >= 5) {
    window.location.replace('http://www.disney.com/')
}

else if (viewerAge >= 21 && viewerAge <= 95) {
    window.location.replace('http://www.espn.com/')
}

else if (viewerAge > 95) {
    alert("Congrats on still being alive!!!")
    document.write("Assignment only allows to go up to 95yrs of age")
}

else {
    alert("How are you operating a computer, where are your parents???")
    document.write("Assignment only allows for ages 5 to 95")
}