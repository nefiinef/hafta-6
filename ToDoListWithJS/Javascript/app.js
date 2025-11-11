// List & input
const list = document.getElementById("list");
const input = document.getElementById("task");

// Toasts
const successToastEl = document.querySelector(".toast.success");
const errorToastEl = document.querySelector(".toast.error");

// Bootstrap toasts
const successToast = new bootstrap.Toast(successToastEl, { delay: 4000 });
const errorToast = new bootstrap.Toast(errorToastEl, { delay: 4000 });

// Show Toast
function showToast(type) {
  if (type === "success") {
    successToast.show();
  } else {
    errorToast.show();
  }
}

// New li
function newElement() {
  const taskText = input.value.trim();

  if (taskText === "") {
    showToast("error");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Close button
  const closeButton = document.createElement("span");
  closeButton.className = "close";
  closeButton.innerHTML = "&times;";
  closeButton.onclick = () => li.remove();
  li.appendChild(closeButton);

  // Checked toggle
  li.addEventListener("click", function (e) {
    if (!e.target.classList.contains("close")) {
      li.classList.toggle("checked");
    }
  });

  list.appendChild(li);
  input.value = "";
  showToast("success");
}

// Mevcut liste elemanlarına close button ekle
document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll("#list li");
  listItems.forEach((li) => {
    const closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.innerHTML = "&times;";
    li.appendChild(closeButton);
    closeButton.onclick = () => li.remove();
  });
});

// Listeye tıklayınca checked toggle
list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI" && !e.target.classList.contains("close")) {
    e.target.classList.toggle("checked");
  }
});
