export namespace Droid {

    interface Command {
        module: string,
        method: string,
        data: string,
    }

    // let number: number = 0
    let random: number = 0



    export function getCommand(): Command {

        const command: Command = {
            module: "Chassis",
            method: "move",
            data: "stop",
        }
        random = Math.floor(Math.random() * 5)

        switch (random) {
            case 0:
                command.data = "forward"
                break;

            case 1:
                command.data = "back"
                break;

            case 2:
                command.data = "left"
                break;

            case 3:
                command.data = "right"
                break;

            case 4:
                command.data = "stop"
                break;
        }


        // if (number % 2 === 0) {
        //     command.data = "forward";
        //     number++;
        // } else {
        //     command.data = "left";
        //     number++;
        // }


        console.log(command);
        return command;

    }



}