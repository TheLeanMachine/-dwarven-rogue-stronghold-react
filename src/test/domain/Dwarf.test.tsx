import { describe, expect, it } from '@jest/globals';
import { Dwarf } from '../../main/domain/Dwarf';

describe('A Dwarf', () => {
    it('should have reasonable properties, when newly created', () => {
        const gimli = new Dwarf('Gimli Gloinsohn', 42);

        expect(gimli.name).toBe('Gimli Gloinsohn');
        expect(gimli.hp).toBe(42);

        expect(gimli.isDead()).toBe(false);
    });

    it('should be able to die', () => {
        const gimli = new Dwarf('Gimli Gloinsohn', 42);

        gimli.takeDamage(12);
        expect(gimli.isDead()).toBe(false);
        gimli.takeDamage(30);
        expect(gimli.isDead()).toBe(true);
    });
});