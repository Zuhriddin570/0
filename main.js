function Task() {
  let Add = document.getElementById("Add").value
  if (Add === "") {
    alert("Iltimos mashg'ulot kiriting!");
    return
  }

  let now = new Date();

  let date = now.getDate().toString().padStart(2, "0") + "." + 
             (now.getMonth() + 1).toString().padStart(2, "0") + "." + 
             now.getFullYear();

  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");

  let time = `${hours}:${minutes}:${seconds}`;
 

  

  let AppDiv = document.createElement("div");
  AppDiv.className = "Task"

  AppDiv.innerHTML = `
      
      <h4>study</h4>
      <p>${date}  ${time}</p>
      <span>${Add}</span>
        <div class="icon">
                <button onclick="editTask(this)">
                <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onclick="deleteTask(this)"><i class="fa-solid fa-trash-can"></i></button>
            </div>
      `;
  document.getElementById("tasks").appendChild(AppDiv);
  document.getElementById("Add").value = "";
}

function editTask(button) {
  let AppDiv = button.parentElement.parentElement;
  let Add = AppDiv.querySelector("span").innerText;
  let newText = prompt("Edit Task:", Add);
  if (newText !== null && newText.trim() !== "") {
    AppDiv.querySelector("span").innerText = newText;
  }
}

function deleteTask(button) {
  button.parentElement.parentElement.remove();
}
