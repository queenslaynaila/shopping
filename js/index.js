const itemList = document.querySelector("#item-list");

store.forEach((item, index) => {
  const imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "col");

  const img = document.createElement("img");
  img.setAttribute("src", `${item.image}`);
  imageContainer.appendChild(img);

  const h5 = document.createElement("h3");
  h5.textContent = item.item;

  const p = document.createElement("p");
  p.textContent = item.description;

  const qty = document.createElement("input");
  qty.setAttribute("value", "");
  qty.setAttribute("id", index);
  qty.setAttribute("placeholder", "QTY");
  qty.setAttribute("type", "number");

  const addToCart = document.createElement("button");
  addToCart.setAttribute("class", "btn btn-warning btn-sm m-4");
    addToCart.textContent = "Add to Cart";
    
  

  imageContainer.appendChild(h5);
  imageContainer.appendChild(p);
  imageContainer.appendChild(qty);
  imageContainer.appendChild(addToCart);
  itemList.appendChild(imageContainer);
});

