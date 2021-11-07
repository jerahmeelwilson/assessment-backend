

console.log("test");

const fortuneButton = document.getElementById("fortuneButton");

fortuneButton.addEventListener("click", ()  => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res =>{
        alert(res.data);
    })
})

const addGoal = document.getElementById('addGoal');
const body = document.querySelector("body");

addGoal.addEventListener("click", (e) => {
    e.preventDefault();
    const goalInput = document.getElementById("goalInput");
    let goal = {
        "goal": goalInput.value,
    }
    axios.post("http://localhost:4000/api/goals/",goal)
    .then(res => {
        console.log(res.data)
        createNewGoal(res.data);             
    })
});

function createNewGoal(goalList){
    let newGoal = document.createElement("form");
    newGoal.classList.add("goal");
    let goalText = document.createElement('span');
    let deleteGoal = document.createElement("button");
    deleteGoal.innerText ="X";
    goalText.innerText = `${goalList[goalList.length-1].goalText}\t`;
    newGoal.appendChild(goalText);
    newGoal.appendChild(deleteGoal);
    body.appendChild(newGoal);
    newGoal.addEventListener('click',sayHello);
    deleteGoal.onclick = function (e) {
        e.preventDefault();
        console.log("delete");
    }
}

function sayHello(e){
    console.log(e);
}
function deleteGoal(e){
    e.preventDefault();
    console.log("delete");
}