const divItem= document.querySelectorAll(".panel")
//console.log('div',divItem)
divItem.forEach ((i) => {
console.log(i);
i.addEventListener('mouseover', () => {
    console.log("mouseover");
    i.classList.add("active")
    //i.style.flex = 5;
}
);
//console.log(divItem);
i.addEventListener('mouseout', () => {
    console.log("mouseout");
    i.classList.add("active")
    //i.style.flex = 0.5;
}
);
});

console.log(divItem)



