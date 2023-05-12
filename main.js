let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let boxs = document.querySelectorAll('.box');
data = null;

btn.onclick = function(){

    if(inp.value != ''){
        boxs[0].innerHTML += `
        <p class="item" draggable="true" >${inp.value} <p/>
        `
        inp.value = '';
    }

    dragItem()

}

function dragItem() {
    let item = document.querySelectorAll('.item');
    item.forEach(item=>{
        item.addEventListener('dragstart', function(){
            data = item;
            item.style.opacity = '0.5';
        })
        
        item.addEventListener('dragend', function(){
            data = null;
            item.style.opacity = '1';
        })

        boxs.forEach(box=>{

            box.addEventListener('dragover', function(x){
                x.preventDefault()
                box.style.background = '#090';
                box.style.color = '#fff';

            })

            box.addEventListener('dragleave', function(){
                box.style.background = '#fff';
                box.style.color = '#000';
            })

            box.addEventListener('drop', function(){
                box.append(data);
                box.style.background = '#fff';
                box.style.color = '#000';
            })

        })


    })


}









