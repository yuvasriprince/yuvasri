let lists = document.querySelectorAll('.list');
let rightBox = document.getElementById('right');
let leftbox = document.getElementById('left');

lists.forEach(list => {
    list.addEventListener('dragstart', function(e){
        let selected = e.target;

        rightBox.addEventListener('dragover', function(e){
            e.preventDefault();
        });
        rightBox.addEventListener('drop', function(e){
            rightBox.appendChild(selected);
            selected = null;
        });
        
        leftBox.addEventListener('dragover', function(e){
            e.preventDefault();
        });
        leftBox.addEventListener('drop', function(e){
            rightBox.appendChild(selected);
            selected = null;
        });
    })
})
