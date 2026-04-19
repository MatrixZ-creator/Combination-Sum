var combinationSum = function(candidates, target) {
    let result = [];
    function backtrack(start,current, total) {
        if (total === target) {
            result.push([...current]);
            return;
        }
        if (total > target) return;
        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            backtrack(i, current, total + candidates[i])
            current.pop();
        }
    }
    backtrack(0, [], 0);
    return result;
};
let candidates = [2,3,6,7], target = 7;
console.log(combinationSum(candidates,target));