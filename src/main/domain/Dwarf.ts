import { Creature } from './Creature';

/**
 * A member of the dwarven stronghold that is being defended.
 */
export class Dwarf extends Creature {    

    constructor(name: string, initialHp: number) {
        super(name, initialHp);
    }
}