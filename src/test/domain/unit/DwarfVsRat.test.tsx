import { describe, expect, it } from '@jest/globals';
import { Dwarf } from '../../../main/domain/unit/Dwarf';
import { Rat } from '../../../main/domain/unit/monster/Rat';

describe('A fight between a Dwarf and a Rat', () => {
    it('should not take longer than rats maxHP', () => {
        const maxRatHp = 4;
        const rat = new Rat(maxRatHp);
        const gimli = new Dwarf('Gimli Gloinsohn', 42);

        let turns = 0;
        let ratIsAlive = true;
        while (ratIsAlive) {
            turns++;
            gimli.attack(rat);

            ratIsAlive = !rat.isDead();
        }


        expect(turns).toBeLessThanOrEqual(maxRatHp);
    });

    it('should result in a killed dwarf, when rat hits long enough', () => {
        const maxDwarfHp = 4;
        const gimli = new Dwarf('Gimli Gloinsohn', maxDwarfHp);
        const rat = new Rat(42);

        // TODO assumption: Rat always does 2 damage

        rat.attack(gimli);
        expect(gimli.isDead()).toBeFalsy();

        rat.attack(gimli);
        expect(gimli.isDead()).toBeTruthy();
    });

    it('should confirm that an unarmed dwarf deals 2 dmg', () => {
        const gimli = new Dwarf('Gimli Gloinsohn', 42);
        const rat = new Rat(42);

        gimli.attack(rat);
        rat.attack(gimli);

        expect(rat.hp).toEqual(40);
    });
});