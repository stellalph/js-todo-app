// 1. User clicks on the button
// 2. We capture the text in the input field
// 3. Display that text on the screen
// create the element
// add the userTEXT to the element
// ADD the element as a child to UL
// 4. When delete is clicked, the item is deleted
// add a delete button
// delete button on click, should remove the item
//   add an eventListener
//   delete the parent
// 5. After Item is added, clear the text field
// 6. Auto focus after add.
// 7. Enable Enter-to-submit functionality

document.addEventListener('DOMContentLoaded',init);
function init(){
    const form = document.querySelector('form.add');
    const addButton = document.querySelector('#addButton');
    const itemToAdd = document.querySelector('#itemToAdd');
    const ul = document.querySelector('.todo');
    const body = document.querySelector('body');
    const app = document.querySelector('.app');
    
    app.addEventListener('click', function(event){
        event.stopPropagation();
       
    })
    body.addEventListener('click', function(event){
        ul.innerHTML = '';  
    })
    
    
    form.addEventListener('submit', function(event){
        event.preventDefault();
        if(itemToAdd.value){
            const newItem = createItem(itemToAdd.value);
            ul.appendChild(newItem);
            itemToAdd.value = '';
            itemToAdd.focus()
        }
       
      
    });
    
    function createItem(val) {
        const item = document.createElement('li');
        const span = document.createElement('span');
        const delBtn = document.createElement('button');
    
        span.textContent = val;
        delBtn.textContent = 'Delete';
        delBtn.classList.add('btn-link');
    
        item.appendChild(span);
        item.appendChild(delBtn);
    
        delBtn.addEventListener('click', function () {
            item.parentNode.removeChild(item);
        })
    
        return item;
    }
}



