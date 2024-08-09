let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let textbox = document.getElementById("text-box").value;
  let parent = document.getElementById("items");
  let child = document.createElement("li");
  child.append(document.createTextNode(textbox));
  child.className = "border-2 py-2 px-4 mb-3 relative list-item";
  parent.appendChild(child);
  let button = document.createElement("button");
  button.append(document.createTextNode("x"));
  button.className =
    "px-2 py-[1px] rounded text-white absolute right-4 top-1 bg-red-700 cancel";
  child.append(button);
});

let itemList = document.getElementById("items");

itemList.addEventListener("click", (e) => {
  if (e.target.classList.contains("cancel")) {
    let li = e.target.parentElement;
    itemList.removeChild(li);
  }
});

let searchBox = document.getElementById("search-input");

searchBox.addEventListener("keyup", (e) => {
  let toSearch = e.target.value.toLowerCase();
  let items = itemList.querySelectorAll("li");
  Array.from(items).forEach((item) => {
    let name = item.firstChild.textContent.toLowerCase();

    if (name.indexOf(toSearch) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
