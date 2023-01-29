import { Creature } from '../Creature';

/**
 * An enemy of the dwarven-stronghold to be killed.
 */
export class Rat extends Creature {

    constructor(initialHp: number) {
        super('Rat', initialHp);
    }
}