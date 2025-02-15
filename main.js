// 1. Element yaratish
const container = document.querySelector(".container");
document.getElementById("addBox").addEventListener("click", () => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("new-box");
    newDiv.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    newDiv.textContent = container.children.length + 1;
    container.appendChild(newDiv);
});

// 2. Matnni real vaqtda chiqarish
document.getElementById("textInput").addEventListener("input", (e) => {
    document.getElementById("outputText").textContent = e.target.value;
});

// 3. Slayder
const images = ["https://picsum.photos/200/300", "https://picsum.photos/200/301", "https://picsum.photos/200/302"];
let index = 0;
document.getElementById("nextBtn").addEventListener("click", () => {
    index = (index + 1) % images.length;
    document.getElementById("sliderImg").src = images[index];
});
document.getElementById("prevBtn").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("sliderImg").src = images[index];
});

// 4. Timer
let timer = 0, interval;
document.getElementById("startTimer").addEventListener("click", () => {
    if (!interval) {
        interval = setInterval(() => {
            timer++;
            document.getElementById("timerDisplay").textContent = `${timer}s`;
        }, 1000);
    }
});
document.getElementById("stopTimer").addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});
document.getElementById("resetTimer").addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    timer = 0;
    document.getElementById("timerDisplay").textContent = "0s";
});

// 5. Todo List
document.getElementById("addTodo").addEventListener("click", () => {
    const input = document.getElementById("todoInput");
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        const delBtn = document.createElement("button");
        delBtn.textContent = "🗑";
        delBtn.style.marginLeft = "10px";
        delBtn.addEventListener("click", () => li.remove());
        li.appendChild(delBtn);
        document.getElementById("todoList").appendChild(li);
        input.value = "";
    }
});
