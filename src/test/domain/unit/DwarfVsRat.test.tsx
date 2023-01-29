import { describe, expect, it } from '@jest/globals';
import { Dwarf } from '../../../main/domain/unit/Dwarf';
import { Rat } from '../../../main/domain/unit/monster/Rat';

describe('A fight between a Dwarf and a Rat', () => {
    it('should not take longer than rats maxHP', () => {
        const maxHp = 4;        
        const rat = new Rat(maxHp);
        const gimli = new Dwarf('Gimli Gloinsohn', 42);

        let turns = 0;
        let ratIsAlive = true;        
        while (ratIsAlive) {
            turns++;
            gimli.attack(rat);

            ratIsAlive = !rat.isDead();
        }


        expect(turns).toBeLessThanOrEqual(maxHp);
    });
});