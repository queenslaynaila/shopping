const itemList = document.querySelector("#item-list");
store.forEach((item) => {
  const imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "col");
  itemList.appendChild(imageContainer);

  const img = document.createElement("img");
  img.setAttribute("src", item.image);
  imageContainer.appendChild(img);

  const h5 = document.createElement("h5");
  h5.textContent = item.item;
  imageContainer.appendChild(h5);

  const p = document.createElement("p");
  p.textContent = item.description;
  imageContainer.appendChild(p);

  const inputField = document.createElement("input");
  inputField.setAttribute("value", " ");
  inputField.setAttribute("id", "index");
  inputField.setAttribute("placeholder", "QTY");
  inputField.setAttribute("type", "number");
  imageContainer.appendChild(inputField);

  const addToCartbutton = document.createElement("button");
  addToCartbutton.setAttribute("class", "btn btn-warning btn-sm m-4");
  addToCartbutton.textContent = "Add to Cart";
  imageContainer.appendChild(addToCartbutton);

  addToCartbutton.addEventListener("click", () => {
    summaryParagraph = document.createElement("p");
    div.appendChild(summaryParagraph);
    summaryParagraph.textContent = `${inputField.value} ${item.item} bought`;
  });
});

const div = document.createElement("div");
document.body.appendChild(div);
const h4 = document.createElement("h4");
h4.textContent = "CART SUMMARY";
div.appendChild(h4);
