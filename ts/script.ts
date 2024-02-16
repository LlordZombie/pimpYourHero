document.addEventListener("DOMContentLoaded", main);

function main(): void {
    const x: NodeListOf<HTMLElement> | null = document.querySelectorAll(".armor_picker");
    x.forEach(x1 => {
        x1.addEventListener("click", addArmor);
    })
}

function addArmor(event: MouseEvent): void {
    let img: Node = (event!.target as HTMLElement).cloneNode(true);
    let target: HTMLElement | null = document.getElementById("picked");
    let existingTargetKids: NodeListOf<ChildNode> = target!.childNodes;
    let exists: boolean = false;
    let id: string = ((event.target as HTMLElement)!.parentNode as HTMLElement).id + "target";
    let order: string = "hakb";
    (img as HTMLElement).id = id;
    img.addEventListener("click", function (): void {
        if ((img.parentNode as HTMLElement).id === "picked") {
            target!.removeChild(img);
        }
    });
    for (let i: number = 0; i < existingTargetKids.length; i++) {
        if ((existingTargetKids.item(i) as Element)?.id === id) {
            exists = true;
        }
    }
    (img as HTMLElement).removeAttribute("class");
    let orderNum = (order.indexOf((img as HTMLElement).id.substring(0, 1)));
    (img as HTMLElement).setAttribute("order", orderNum.toString());
    orderNum++;
    let followingElement = document.querySelector(`[order="${orderNum.toString()}"]`)
    if (!exists) {
        if (typeof followingElement != null) {
            target!.insertBefore(img, (followingElement as Node))
        } else {
            target!.appendChild(img);
        }
    } else {
        target!.replaceChild(img, (document.getElementById(id) as Node));
    }

}

