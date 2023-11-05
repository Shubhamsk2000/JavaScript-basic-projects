let lists = document.getElementsByClassName('list');
let leftBox = document.getElementById('left');
let rightBox = document.getElementById('right');

for (element of lists) {
    element.addEventListener('dragstart', (e) => {
        let selected = e.target;

        rightBox.addEventListener('dragover', (e) => {
            e.preventDefault();
        })

        rightBox.addEventListener('drop', (e) => {
            rightBox.appendChild(selected)
            selected = null
        })

        leftBox.addEventListener('dragover', (e) => {
            e.preventDefault();
        })
        leftBox.addEventListener('drop', (e) => {
            leftBox.appendChild(selected)
            selected = null

        })
    });

}



