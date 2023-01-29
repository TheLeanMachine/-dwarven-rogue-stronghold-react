/**
 * A dice to roll, for example, like a d20/W20.
 */
export class Dice {  
    
    private _highestNumber: number;

    constructor(highestNumber: number) {
        this._highestNumber = highestNumber;
    }

    /**
     * @returns the result of rolling the dice 
     */
    public roll(): number {
        return 1 + Math.floor(Math.random() * this._highestNumber);
    }
}