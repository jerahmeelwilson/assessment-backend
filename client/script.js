

console.log("test");

const fortuneButton = document.getElementById("fortuneButton");


//Feature 1, GET Request to see fortunes
fortuneButton.addEventListener("click", ()  => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res =>{
        alert(res.data);
    })
})



const addGoal = document.getElementById('addGoal');
const todoList = document.querySelector("section");

//Feature 2: POST Request, adds a goal to goal tracker list
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
    goalInput.value = "";
});

function displayGoals(goalList){
    todoList.innerHTML ="";
    if(goalList.length>0){
        goalList.forEach(goal => {
            let newGoal = document.createElement("form");
            let goalText = document.createElement('span');
            let deleteGoal = document.createElement("button");
            deleteGoal.innerText ="X";
            goalText.innerText = `${goal.goalText}\t`;
            newGoal.appendChild(goalText);
            newGoal.appendChild(deleteGoal);
            todoList.appendChild(newGoal);
            goalText.onclick = function () {
                crossOut(goal.id);
            }
            deleteGoal.onclick = function (e) {
                e.preventDefault();
                removeGoal(goal.id);
            }
            if(goal.crossed){
                goalText.style.textDecoration ="line-through";
            }
        })
    }
}


//Feature 3: PUT request, marks a goal as completed 
function crossOut(goalId){
   axios.put(`http://localhost:4000/api/goals/${goalId}`)
   .then( res => {
       displayGoals(res.data);
   })
}

//Feature 4: DELETE request, removes a goal from the goal tracker.
function removeGoal(goalId){
    axios.delete(`http://localhost:4000/api/goals/${goalId}`)
    .then( res =>{
        displayGoals(res.data);
    }).catch(err => console.log(err));
}