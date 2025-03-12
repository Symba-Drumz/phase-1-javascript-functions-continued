function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
  
}
saturdayFun('This Saturday, I want to bathe my dog!');


(function(baseNumber) {
    return baseNumber + 3;
})(2);

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork());
console.log(mondayWork('work from home.'));

function wrapAdjective(wrapper = "*") {
    return function(adjective = "special") {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }
