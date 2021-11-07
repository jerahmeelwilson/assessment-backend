
const goals = [];

let globalId = 0;

module.exports = {
    createGoal: (req, res) => {
        let goal = {
            id: globalId,
            goalText:req.body.goal,
            crossed: false,
        }
        goals.push(goal);
        res.status(200).send(goals);
        globalId++;
        console.log(goals);
    },
    deleteGoal: (req,res) => {
        let index = goals.findIndex(element => element.id === +req.params.id);
        goals.splice(index,1);
        res.status(200).send(goals);
        console.log(goals);
    },
}