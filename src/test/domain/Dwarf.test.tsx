import { describe, expect, it } from '@jest/globals';
import { Dwarf } from '../../main/domain/Dwarf';

describe('A Dwarf', () => {
    it('should have reasonable properties, when newly created', () => {
        const gimli = new Dwarf('Gimli Gloinsohn', 42);

        expect(gimli.name).toBe('Gimli Gloinsohn');
        expect(gimli.hp).toBe(42);

        expect(gimli.isDead()).toBe(false);
    });
});