import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import * as tiled from '@excaliburjs/plugin-tiled'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Path: new tiled.TiledResource('map.tmx')

}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }