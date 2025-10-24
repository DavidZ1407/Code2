export var Droid;
(function (Droid) {
    function getCommand() {
        const command = {
            module: "Chassis",
            method: "move",
            data: "left",
        };
        console.log(command);
        return command;
    }
    Droid.getCommand = getCommand;
})(Droid || (Droid = {}));
//# sourceMappingURL=droid.js.map