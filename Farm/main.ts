namespace Farm {
    const animalIntervalMS: number = 2 * 1000;
    let currentAnimal: number = 0;


    const cow: Farm.Cow = new Farm.Cow();
    const chicken: Farm.Chicken = new Farm.Chicken();
    const pig: Farm.Pig = new Farm.Pig();

    const farmManager: FarmManager = new FarmManager();

    document.addEventListener("DOMContentLoaded", hndlLoad);

    function hndlLoad(_event: Event): void {
        update();
    }

    window.setInterval(changeAnimal, animalIntervalMS);

    function changeAnimal(): void {
        update();
        currentAnimal++;
        if (currentAnimal > 3) {
            currentAnimal = 0;
            farmManager.day++;
        }
    }

    function update(): void {
        const canvas = document.querySelector("canvas") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.clearRect(0, 0, canvas.width, canvas.height);


        Background.draw(ctx, canvas);


        const moneyString: string = "Money: " + farmManager.money + "$";
        ctx.font = "30px Arial";
        ctx.strokeStyle = "black";
        ctx.strokeText(moneyString, 50, 50, 300);

        const dayString: string = "Day: " + farmManager.day;
        ctx.strokeText(dayString, 400, 50);


        const v1: Vector2 = { x: 200, y: 350 };
        const foodVec: Vector2 = { x: 500, y: 450 };
        let foodCost: number = 0;

        switch (currentAnimal) {
            case 0:
                cow.setName("Cow");
                cow.draw(ctx, v1);
                cow.singSong(ctx, v1);
                foodCost = farmManager.showFood(ctx, foodVec, FOODTYPE.HAY);
                farmManager.hay -= 15;
                break;
            case 1:
                chicken.setName("Chicken");
                chicken.draw(ctx, v1);
                chicken.singSong(ctx, v1);
                foodCost = farmManager.showFood(ctx, foodVec, FOODTYPE.GRAIN);
                farmManager.grain -= 14;
                break;
            case 2:
                pig.setName("Pig");
                pig.draw(ctx, v1);
                pig.singSong(ctx, v1);
                foodCost = farmManager.showFood(ctx, foodVec, FOODTYPE.CARROT);
                farmManager.carrots -= 13;
                break;
            case 3:
                farmManager.day++;
                currentAnimal = 0;
        }

        const costString: string = "Cost: " + foodCost + "$";
        ctx.font = "30px Arial";
        ctx.strokeText(costString, 900, 50);
        farmManager.money -= foodCost;
    }
}
