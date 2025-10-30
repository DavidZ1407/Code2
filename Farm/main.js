"use strict";
var Farm;
(function (Farm) {
    const animalIntervalMS = 2 * 1000;
    let currentAnimal = 0;
    const cow = new Farm.Cow();
    const chicken = new Farm.Chicken();
    const pig = new Farm.Pig();
    const farmManager = new Farm.FarmManager();
    document.addEventListener("DOMContentLoaded", hndlLoad);
    function hndlLoad(_event) {
        update();
    }
    window.setInterval(changeAnimal, animalIntervalMS);
    function changeAnimal() {
        update();
        currentAnimal++;
        if (currentAnimal > 3) {
            currentAnimal = 0;
            farmManager.day++;
        }
    }
    function update() {
        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        Farm.Background.draw(ctx, canvas);
        const moneyString = "Money: " + farmManager.money + "$";
        ctx.font = "30px Arial";
        ctx.strokeStyle = "black";
        ctx.strokeText(moneyString, 50, 50, 300);
        const dayString = "Day: " + farmManager.day;
        ctx.strokeText(dayString, 400, 50);
        const v1 = { x: 200, y: 350 };
        const foodVec = { x: 500, y: 450 };
        let foodCost = 0;
        switch (currentAnimal) {
            case 0:
                cow.setName("Cow");
                cow.draw(ctx, v1);
                cow.singSong(ctx, v1);
                foodCost = farmManager.showFood(ctx, foodVec, Farm.FOODTYPE.HAY);
                farmManager.hay -= 15;
                break;
            case 1:
                chicken.setName("Chicken");
                chicken.draw(ctx, v1);
                chicken.singSong(ctx, v1);
                foodCost = farmManager.showFood(ctx, foodVec, Farm.FOODTYPE.GRAIN);
                farmManager.grain -= 14;
                break;
            case 2:
                pig.setName("Pig");
                pig.draw(ctx, v1);
                pig.singSong(ctx, v1);
                foodCost = farmManager.showFood(ctx, foodVec, Farm.FOODTYPE.CARROT);
                farmManager.carrots -= 13;
                break;
            case 3:
                farmManager.day++;
                currentAnimal = 0;
        }
        const costString = "Cost: " + foodCost + "$";
        ctx.font = "30px Arial";
        ctx.strokeText(costString, 900, 50);
        farmManager.money -= foodCost;
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=main.js.map