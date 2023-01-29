import { Creature } from './Creature';
import { Monster } from './monster/Monster';
import { Dice } from '../Dice';

/**
 * A member of the dwarven stronghold that is being defended.
 */
export class Dwarf extends Creature {    

    private _xp = 0;

    constructor(name: string, initialHp: number) {
        super(name, initialHp);
    }

    public attack(monster: Monster): void {
        // TODO implement to-hit-mechanic
        

        // TODO deal 1d8 damage        
        monster.takeDamage(new Dice(8).roll());

        if (monster.isDead()) {
            this._xp += monster.xpValue;
        }

        // TODO implement updating kill-record
    }

    public gainXp(gainedXp: number): void {
        // TODO input validation
        this._xp = this._xp + gainedXp;
    }

    /**
     * @returns the XP gained by this dwarf
     */
    get xp(): number {
        return this._xp;
    }
}