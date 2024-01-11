let dimensions = 16;
let gridElement = document.querySelector(".grid-item");
let reset = document.querySelector("#button");
let gridCont = document.querySelector(".grid")
createGrid(dimensions);


reset.addEventListener('click', () => {
    let size = prompt("Please Enter the New Dimension");
    if (size != null && size > 0 && size < 101) {
        dimensions = size;
        createGrid(dimensions);
    }
    else {
        console.log("Improper size");
    }
})

function createGrid(dimension) {
    gridCont.innerHTML = '';
    sizePerElement = 100/dimension;
    for (let i = 0; i < dimension * dimension; i++) {
        let gridItem = document.createElement('div');
        gridItem.className = "grid-item";
        gridItem.style.flex = '0 0 ' + sizePerElement + '%';
        gridItem.addEventListener('mouseout', () => {
            gridItem.style.backgroundColor = "black";
        })
        gridCont.appendChild(gridItem)
    }
}
