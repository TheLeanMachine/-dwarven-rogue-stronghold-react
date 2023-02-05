import { describe, expect, it } from '@jest/globals';
import { Dwarf } from '../../../main/domain/unit/Dwarf';

describe('A Dwarf', () => {
    it('should have reasonable properties, when newly created', () => {
        const gimli = new Dwarf('Gimli Gloinsohn', 42);

        expect(gimli.name).toBe('Gimli Gloinsohn');
        expect(gimli.hp).toBe(42);
        expect(gimli.xp).toBe(0);

        expect(gimli.isDead()).toBe(false);
    });

    it('should be able to die', () => {
        const gimli = new Dwarf('Gimli Gloinsohn', 42);

        gimli.takeDamage(12);
        expect(gimli.isDead()).toBe(false);
        gimli.takeDamage(30);
        expect(gimli.isDead()).toBe(true);
    });

    it('should gain XP', () => {
        const gimli = new Dwarf('Gimli Gloinsohn', 42);

        gimli.gainXp(100);
        expect(gimli.xp).toBe(100);

        gimli.gainXp(200);
        expect(gimli.xp).toBe(300);
    });

    it('should take damage', () => {
        const gimli = new Dwarf('Gimli Gloinsohn', 42);

        expect(gimli.isDamaged()).toBeFalsy();

        gimli.takeDamage(2);
        expect(gimli.isDamaged()).toBeTruthy();
    });
});