var entry = prompt("Enter Class Info in AAA.111#2222_aa-1234 format");

/// searches entry for matching AAA.111#2222_aa-1234 format
function isValidEntry(entry)  {
    var RegExp = /[A-Z]{3}.\d{3}#\d{4}_\D{2}-\d{4}/;

    return RegExp.test(entry);
}

if (isValidEntry(entry))  {
    document.getElementById("publish").innerHTML = "Correct Format"
}  else {
    document.getElementById("publish").innerHTML = "Incorrect Format"
}
