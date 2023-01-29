import { describe, expect, it } from '@jest/globals';
import { Dice } from '../../../main/domain/Dice';

describe('A Dice (very naive testing!)', () => {
    it('shoud roll each of its possilble numbers, if rolled long enough', () => {
        const highestNumber = 6;
        const dice = new Dice(highestNumber);
        const numberOfRolls = 1000;        
        let rolledAOne = false;
        let rolledATwo = false;
        let rolledAThree = false;
        let rolledAFour = false;
        let rolledAFive = false;
        let rolledASix = false;

        let diceRoll = 0;
        for (let i=0; i<numberOfRolls; i++) {
            diceRoll = dice.roll();

            switch (diceRoll) {
                case 1:
                    rolledAOne = true;
                    break;
                case 2:
                    rolledATwo = true;
                    break;
                case 3:
                    rolledAThree = true;
                    break;
                case 4:
                    rolledAFour = true;
                    break;
                case 5:
                    rolledAFive = true;
                    break;
                case 6:
                    rolledASix = true;
                    break;
                default:
                    throw new Error(`WTF?! Six-sided dice rolled "${diceRoll}" - a number not between 1 and 6!`);
                    break;
            }
        }

        expect(rolledAOne).toBe(true);
        expect(rolledATwo).toBe(true);
        expect(rolledAThree).toBe(true);
        expect(rolledAFour).toBe(true);
        expect(rolledAFive).toBe(true);
        expect(rolledASix).toBe(true);
    });
});