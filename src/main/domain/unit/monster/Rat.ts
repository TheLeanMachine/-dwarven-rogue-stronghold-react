import { Dwarf } from '../Dwarf';
import { Monster } from './Monster';

/**
 * An enemy of the dwarven-stronghold to be killed.
 */
export class Rat extends Monster {

    constructor(initialHp: number) {
        super('Rat', initialHp, 10);
    }

    public attack(dwarf: Dwarf): void {
        // TODO impletement AND TEST(!) a dice-role 1-2

        dwarf.takeDamage(2);
    }
}