let score = 0;
let result= document.querySelector("#result");
let button= document.querySelectorAll(".btn1");
let bttn= document.querySelectorAll(".btn2");
button.forEach((btn1) => {
    btn1.addEventListener("click", () => {
        btn1.classList.remove("bg-blue-300");
        btn1.classList.add("bg-green-300");
        score++;
        result.innerText = "Result: " + score;
    }, {once: true});
});

bttn.forEach((btn2) =>{
    btn2.addEventListener("click", () => {
        btn2.classList.remove("bg-blue-300");
        btn2.classList.add("bg-red-300");
        alert('Wrong! Try Again.')
        score--;
        result.innerText = "Result: " + score;
    }, {once: true});
});
