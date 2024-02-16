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
    let id = event.target.parentNode.id + "target";
    let order = "hakb";
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
    img.removeAttribute("class");
    let orderNum = (order.indexOf(img.id.substring(0, 1)));
    img.setAttribute("order", orderNum.toString());
    orderNum++;
    let followingElement = document.querySelector(`[order="${orderNum.toString()}"]`);
    if (!exists) {
        if (typeof followingElement != null) {
            target.insertBefore(img, followingElement);
        } else {
            target.appendChild(img);
        }
    } else {
        target.replaceChild(img, document.getElementById(id));
    }
}

//# sourceMappingURL=script.js.map