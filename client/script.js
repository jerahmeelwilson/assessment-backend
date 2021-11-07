

console.log("test");

const fortuneButton = document.getElementById("fortuneButton");

fortuneButton.addEventListener("click", ()  => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res =>{
        alert(res.data);
    })
})

const addGoal = document.getElementById('addGoal');
const todoList = document.querySelector("section");

addGoal.addEventListener("click", (e) => {
    e.preventDefault();
    const goalInput = document.getElementById("goalInput");
    let goal = {
        "goal": goalInput.value,
    }
    axios.post("http://localhost:4000/api/goals/",goal)
    .then(res => {
        displayGoals(res.data);             
    })
});

function displayGoals(goalList){
    todoList.innerHTML ="";
    if(goalList.length>0){
        goalList.forEach(goal => {
            let newGoal = document.createElement("form");
            newGoal.classList.add("goal");
            let goalText = document.createElement('span');
            let deleteGoal = document.createElement("button");
            deleteGoal.innerText ="X";
            goalText.innerText = `${goal.goalText}\t`;
            newGoal.appendChild(goalText);
            newGoal.appendChild(deleteGoal);
            todoList.appendChild(newGoal);
            goalText.addEventListener('click',crossOut);
            deleteGoal.onclick = function (e) {
                e.preventDefault();
                removeGoal(goal.id);
            }
        })
    }
}

function sayHello(e){
    console.log(e);
}
function removeGoal(goalId){
    todoList.innerHTML ="";
    axios.delete(`http://localhost:4000/api/goals/${goalId}`)
    .then( res =>{
        console.log(res.data);
        displayGoals(res.data);
    }).catch(err => console.log(err));
}