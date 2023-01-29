/**
 * A dice to roll, for example, like a d20/W20.
 */
export class Dice {  
    
    private _highestNumber: number;

    constructor(highestNumber: number) {
        this._highestNumber = highestNumber;
    }

    /**
     * Returns the result of rolling the dice.
     * @returns 
     */
    public roll(): number {
        return Math.floor(Math.random() * this._highestNumber);
    }
}