"use strict";
document.addEventListener("DOMContentLoaded", main);
function main() {
    const x = document.querySelectorAll(".armor_picker");
    x.forEach(x1 => {
        x1.addEventListener("click", addArmor);
    });
}
function addArmor(event) {
    let img = event.target.cloneNode(true);
    let target = document.getElementById("picked");
    let existingTargetKids = target.childNodes;
    let exists = false;
    let id = "target" + event.target.parentNode.id;
    img.id = id;
    img.addEventListener("click", function () {
        if (img.parentNode.id === "picked") {
            target.removeChild(img);
        }
    });
    for (let i = 0; i < existingTargetKids.length; i++) {
        if (existingTargetKids.item(i)?.id === id) {
            exists = true;
        }
    }
    if (!exists) {
        alert(exists);
        target.appendChild(img);
    }
    else {
        alert(exists);
        target.replaceChild(img, document.getElementById(id));
    }
}
//# sourceMappingURL=script.js.map