import { describe, expect, it } from '@jest/globals';
import { Rat } from '../../../../main/domain/unit/monster/Rat';

describe('A Rat', () => {
    it('should have reasonable properties, when newly created', () => {
        const rat = new Rat(4);

        expect(rat.name).toBe('Rat');
        expect(rat.hp).toBe(4);
        expect(rat.xpValue).toBe(10);

        expect(rat.isDead()).toBe(false);
    });

    it('should be able to die', () => {
        const rat = new Rat(4);

        expect(rat.isDamaged()).toBeFalsy();

        rat.takeDamage(2);
        expect(rat.isDamaged()).toBeTruthy();
    });
});