import { Mod } from 'civ7-modding-tools/src';
import { scholareumUniqueQuarter } from './scholareum';

let mod = new Mod({
    id: 'district-mod',
    version: '1',
});

mod.add([
    scholareumUniqueQuarter,
]);

mod.build('./dist');