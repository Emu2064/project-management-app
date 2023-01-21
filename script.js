function addItem(id,name,price) {
    const singleItem = document.getElementById('product-item');
    const child = document.createElement('tr');
    child.innerHTML = '<td>'+id+'</td><td>'+name+'</td><td>'+price+'</td>'
    singleItem.appendChild(child);
}


function getInputValue(){
    const id = document.getElementById('id').value;
    const productName = document.getElementById('product-name').value;
    const price =  document.getElementById('price').value;
    // console.log(id,productName,price);
    addItem(id,productName,price);
}