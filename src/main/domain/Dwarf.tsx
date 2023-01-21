/**
 * A member of the dwarven stronghold that is being defended.
 */
export class Dwarf {
    private _name: string;
    private _initialHp: number;
    private _hp: number;

    constructor(name: string, initialHp: number) {
        this._name = name;
        this._initialHp = initialHp;
        this._hp = this._initialHp;
    }

    isDead(): boolean {
        return true;
    }

    takeDamage(damage: number): void {
        this._hp += damage;
    }


    get name(): string {
        return this._name;
    }

    get hp(): string {
        return this.hp;
    }
}