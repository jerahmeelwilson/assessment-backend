
const goals = [];

let globalId = 0;

module.exports = {
    createGoal: (req, res) => {
        let goal = {
            id: globalId,
            goalText:req.body.goal,
        }
        goals.push(goal);
        res.status(200).send(goals);
        globalId++;
    }
}