function deleteItem() {
    const table = document.getElementById('product-data');
    const deleteItem = document.getElementById('confirmDeleteBtn');
    const cancelDelete = document.getElementById('cancelDeleteBtn');

    table.addEventListener('click',function (event) {
       if (event.target.classList.contains('delete-btn')) {
            rowDelete = event.target.parentNode.parentNode;
            document.querySelector('.delete-modal').style.display = 'block';
       } 
    });

    deleteItem.addEventListener('click',function () {
        rowDelete.remove();
        document.querySelector('.delete-modal').style.display = 'none';
    });

    cancelDelete.addEventListener('click',function () {
        document.querySelector('.delete-modal').style.display = 'none';
    });
}


function addItem(id,name,price) {
    const singleItem = document.getElementById('product-item');
    const child = document.createElement('tr');
    child.innerHTML = '<td>'+id+'</td><td>'+name+'</td><td>'+price+'</td><td>'+'<button>Edit</button>'+'</td><td>'+'<button class = "delete-btn" onclick="deleteItem()">Delete</button>'+'</td>';
    singleItem.appendChild(child);
}


const productId = [];
function getInputValue(){
    const id = document.getElementById('id').value;
    const productName = document.getElementById('product-name').value;
    const price =  document.getElementById('price').value;
    productName.trim();

    // validation for duplicate product id
    if(productId.includes(id)){
        alert('Duplicate entry!!!!');
        return;
    }
    // validation for product name constraint
    if (productName.length >60) {
        alert('To long product Name!!! Change it');
        return;
    }

    // validation for price
    if (parseInt(price)>=0) {
        if(parseInt(price)>100000){
            alert('To high price');
            return;
        }
    } else {
        alert('Invalid price!!!');
        return;
    }
    
    addItem(id,productName,price);
    productId.push(id);
}