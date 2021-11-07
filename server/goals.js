
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
    },
    deleteGoal: (req,res) => {
        let index = goals.findIndex(element => element.id === +req.params.id);
        goals.splice(index,1);
        res.status(200).send(goals);
    },
    completeGoal: (req, res) => {
        let index = goals.findIndex(element => element.id === +req.params.id);
        goals[index].crossed = true;
        res.status(200).send(goals);
    }
}