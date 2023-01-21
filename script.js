
function deleteItem() {
    // document.getElementById('product-data').deleteRow(0);
    let td = event.target.parentNode; 
    let tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}


function addItem(id,name,price) {
    const singleItem = document.getElementById('product-item');
    const child = document.createElement('tr');
    child.innerHTML = '<td>'+id+'</td><td>'+name+'</td><td>'+price+'</td><td>'+'<button>Edit</button>'+'</td><td>'+'<button onclick="deleteItem()">Delete</button>'+'</td>';
    singleItem.appendChild(child);
}


const productId = [];
function getInputValue(){
    const id = document.getElementById('id').value;
    const productName = document.getElementById('product-name').value;
    const price =  document.getElementById('price').value;
    productName.trim();

    // console.log(id,productName,price);
    if(productId.includes(id)){
        alert('Duplicate entry!!!!');
        return;
    }
    addItem(id,productName,price);
    productId.push(id);
}