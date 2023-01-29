/**
 * Anything that moves around the map and can be killed (uncluding undead ;-).
 */
export abstract class Creature {
    private _initialHp: number;
    private _hp: number;

    constructor(initialHp: number) {
        this._initialHp = initialHp;
        this._hp = this._initialHp;
    }

    isDead(): boolean {
        return this._hp <= 0;
    }

    takeDamage(damage: number): void {
        this._hp -= damage;
    }

    get hp(): number {
        return this._hp;
    }
}