import { Creature } from './Creature';

/**
 * A member of the dwarven stronghold that is being defended.
 */
export class Dwarf extends Creature {
    private _name: string;

    constructor(name: string, initialHp: number) {
        super(initialHp);
        this._name = name;
    }

    get name(): string {
        return this._name;
    }
}