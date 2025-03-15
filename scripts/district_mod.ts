import { Mod } from 'civ7-modding-tools/src';
import { scholareumUniqueQuarter } from './scholareum';

let mod = new Mod({
    id: 'district-mod',
    name: "Turnip Games' District Mod",
    description: "Bringing districts back.",
    authors: "by Turnip Games (Luke Escobar & David Wert)",
    version: '1',
});

mod.add([
    scholareumUniqueQuarter,
]);

mod.build('./dist');