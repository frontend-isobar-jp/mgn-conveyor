import mgnConveyor from './mgn-conveyor';

let conveyor = new mgnConveyor(".j-conveyor");

let btn = document.getElementById('btn');

btn.onclick = () => {
    conveyor.flag ? conveyor.Stop() : conveyor.Start();
}

//

new mgnConveyor(
    ".j-conveyor2",
    {
        speed: 100
    }
);
