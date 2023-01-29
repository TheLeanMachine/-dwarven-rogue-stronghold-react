import { Creature } from './Creature';

/**
 * A member of the dwarven stronghold that is being defended.
 */
export class Dwarf extends Creature {    

    private _xp = 0;

    constructor(name: string, initialHp: number) {
        super(name, initialHp);
    }

    public gainXp(gainedXp: number): void {
        // TODO input validation
        this._xp = this._xp + gainedXp;
    }

    get xp(): number {
        return this._xp;
    }
}