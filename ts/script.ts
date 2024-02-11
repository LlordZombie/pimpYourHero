document.addEventListener("DOMContentLoaded", main);

function main() {
    const x: NodeListOf<HTMLElement> | null = document.querySelectorAll(".armor_picker");
    x.forEach(x1=>{
        x1.addEventListener("click",addArmor)
    })
}

function addArmor(event:MouseEvent) {
    let img = (event!.target as HTMLElement).cloneNode(true);
    let target = document.getElementById("picked")
    let existingTargetKids = target!.childNodes;
    let exists = false;
    let id = "target"+((event.target as HTMLElement)!.parentNode as HTMLElement).id;
    (img as HTMLElement).id = id;
    img.addEventListener("click",function (){
        if ((img.parentNode as HTMLElement).id==="picked"){
            target!.removeChild(img);
        }
    })
    for (let i = 0; i < existingTargetKids.length; i++) {
        if ((existingTargetKids.item(i) as Element)?.id === id){
            exists=true;
        }
    }
    if (!exists){
        alert(exists);
        target!.appendChild(img);
    }else{
        alert(exists)
        target!.replaceChild(img,(document.getElementById(id) as Node))
    }

}

