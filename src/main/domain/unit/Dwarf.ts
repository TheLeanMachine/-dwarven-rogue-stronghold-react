import { Creature } from './Creature';
import { Monster } from './monster/Monster';
import { Weapon } from '../weapon/Weapon';
import { Fists } from '../weapon/Fists';

/**
 * A member of the dwarven stronghold that is being defended.
 */
export class Dwarf extends Creature {    

    private _xp = 0;
    private _weapon: Weapon;

    constructor(name: string, initialHp: number) {
        super(name, initialHp);

        this._weapon = new Fists();
    }

    public attack(monster: Monster): void {

        // TODO implement to-hit-mechanic; ATM: 100% to-hit chance...
        
        monster.takeDamage(this._weapon.damagePerTurn());

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