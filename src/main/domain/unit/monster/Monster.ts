import { Creature } from '../Creature';

/**
 * A member of the dwarven stronghold that is being defended.
 */
export abstract class Monster extends Creature {    

    private _xpValue = 0;

    constructor(name: string, initialHp: number, xpValue: number) {
        super(name, initialHp);

        this._xpValue = xpValue;
    }

    /**
     * @returns the XP a dwarf gains by killing this monster
     */
    get xpValue(): number {
        return this._xpValue;
    }
}