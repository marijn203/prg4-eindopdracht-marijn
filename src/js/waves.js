import { Actor, Engine, Vector, DisplayMode, Keys, Timer } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from "./fish.js"

export class waves extends Engine{
    wavecounter = 0
    
    if (wavecounter = 1) {   
    
        this.timer = new Timer({
            fcn: () => this.spawn(),
            interval: 800,
            repeats: true,
            numberOfRepeats: 5
        })
        this.add(this.timer)
        this.timer.start()
    }

    spawn() {
        const fish = new Fish
        this.add(fish)
        fish.pos = new Vector(50, 50)
        fish.vel = new Vector(0, 10)
        
    }
    
}