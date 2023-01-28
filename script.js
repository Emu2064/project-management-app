function findItem(currentId) {
  const singleItem = item.find(function (idx) {
    return idx.pid === currentId;
  });
  return singleItem;
  console.log(singleItem.productName);
}

// edit item
function editItem() {
  //   console.log("it's working");
  document.getElementById("edit-btn").style.display = "block";
  const table = document.getElementById("product-data");
  table.addEventListener("click", function (event) {
    if (event.target.classList.contains("edit-item")) {
      const currentItem = event.target.parentNode.parentNode;

      const currentId = currentItem.childNodes[0].innerHTML;
      const currentProduct = findItem(currentId);

      document.getElementById("id").value = currentId;
      document.getElementById("product-name").value =
        currentProduct.productName;
      document.getElementById("price").value = currentProduct.price;

      document
        .getElementById("edit-btn")
        .addEventListener("click", function () {
          currentItem.childNodes[0].innerHTML =
            document.getElementById("id").value;
          currentItem.childNodes[1].innerHTML =
            document.getElementById("product-name").value;
          currentItem.childNodes[2].innerHTML =
            document.getElementById("price").value;
          document.getElementById("edit-btn").style.display = "none";
        });
    }
  });
}

function deleteItem() {
  const table = document.getElementById("product-data");
  const deleteItem = document.getElementById("confirmDeleteBtn");
  const cancelDelete = document.getElementById("cancelDeleteBtn");

  table.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      rowDelete = event.target.parentNode.parentNode;
      document.querySelector(".delete-modal").style.display = "block";
    }
    // if (event.target.classList.contains("edit-item")) {
    //   rowDelete = event.target.parentNode.parentNode;
    //   // document.querySelector('.delete-modal').style.display = 'block';
    //   console.log(rowDelete);
    // }
  });

  deleteItem.addEventListener("click", function () {
    rowDelete.remove();
    document.querySelector(".delete-modal").style.display = "none";
  });

  cancelDelete.addEventListener("click", function () {
    document.querySelector(".delete-modal").style.display = "none";
  });
}

const item = [];

function addItem(id, name, price) {
  const singleItem = document.getElementById("product-item");
  const child = document.createElement("tr");
  child.innerHTML =
    "<td>" +
    id +
    "</td><td>" +
    name +
    "</td><td>" +
    price +
    "</td><td>" +
    '<button class = "edit-item" onclick = "editItem()">Edit</button>' +
    "</td><td>" +
    '<button class = "delete-btn" onclick="deleteItem()">Delete</button>' +
    "</td>";
  singleItem.appendChild(child);
  item.push({
    pid: id,
    productName: name,
    price: price,
  });
  // console.log(item);
}

const productId = [];
function getInputValue() {
  const id = document.getElementById("id").value;
  const productName = document.getElementById("product-name").value;
  const price = document.getElementById("price").value;
  productName.trim();

  if (id === "" || productName === "" || price === "") {
    alert("Input field can't be empty");
    return;
  }
  // validation for duplicate product id
  if (productId.includes(id)) {
    document.getElementById("id").setAttribute("style", "border:3px solid red");
    alert("Duplicate entry!!!!");
    return;
  }
  // validation for product name constraint
  if (productName.length > 60) {
    document
      .getElementById("product-name")
      .setAttribute("style", "border:3px solid red");
    alert("To long product Name!!! Change it");
    return;
  }

  // validation for price
  if (parseInt(price) >= 0) {
    if (parseInt(price) > 100000) {
      document
        .getElementById("price")
        .setAttribute("style", "border:3px solid red");
      alert("To high price");
      return;
    }
  } else {
    document
      .getElementById("price")
      .setAttribute("style", "border:3px solid red");
    alert("Invalid price!!!");
    return;
  }

  addItem(id, productName, price);
  productId.push(id);
}
