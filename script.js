const eleGrid = document.querySelector(".grid");
const eleButton = document.querySelector("button");

eleButton.addEventListener("click", function(){
    
        for (let i = 1; i <= 100; i++) {
            
            console.log("non premere troppe volte che si rompe")
            const eleCell = document.createElement("div");
            eleCell.classList.add("cell");
            eleCell.innerHTML = i
            eleGrid.append(eleCell)
            
            
             
             
    
            eleCell.addEventListener('click', function () {
                this.classList.toggle('active')
                console.log("hai selezionato la cella: " + i)
            });
        }
    

})
    