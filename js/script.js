"use strict";
document.addEventListener("DOMContentLoaded", main);
function main() {
    let x = document.getElementsByClassName("armor_picker");
    for (let x1 of x) {
        try {
            x1.addEventListener("click", addArmor);
            alert(x1.getAttributeNames());
        }
        catch (e) {
            alert("du cock");
        }
    }
}
function addArmor() { }
//# sourceMappingURL=script.js.map