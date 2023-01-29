import { Monster } from './Monster';

/**
 * An enemy of the dwarven-stronghold to be killed.
 */
export class Rat extends Monster {

    constructor(initialHp: number) {
        super('Rat', initialHp, 10);
    }
}