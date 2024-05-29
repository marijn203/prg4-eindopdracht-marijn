import { Actor, Engine, Vector, DisplayMode, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Wolf extends Actor{
    onInitialize(){
        this.graphics.use(Resources.Wolf.toSprite())
        this.pos = new Vector(0,100)
        this.vel = new Vector(50,0)
        console.log('hello');
    }
}