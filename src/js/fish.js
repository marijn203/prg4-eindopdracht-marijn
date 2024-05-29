import { Actor, Engine, Vector, DisplayMode, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Fish extends Actor{
    onInitialize(){
        this.graphics.use(Resources.Fish.toSprite())
    }
}