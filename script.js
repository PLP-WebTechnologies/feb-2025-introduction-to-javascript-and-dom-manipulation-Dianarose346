// Change text content and style
function changeText() {
    const description = document.getElementById("description");
    description.textContent = "The text has been changed dynamically!";
    description.style.color = "green";
    description.style.fontWeight = "bold";
  }
  
  // Add a new list item
  function addItem() {
    const ul = document.getElementById("item-list");
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${ul.children.length + 1}`;
    ul.appendChild(newItem);
  }
  
  // Remove the last list item
  function removeItem() {
    const ul = document.getElementById("item-list");
    if (ul.children.length > 0) {
      ul.removeChild(ul.lastChild);
    }
  }
  