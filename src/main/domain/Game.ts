import { Dwarf } from './unit/Dwarf';

/**
 * The game instance / the root-entity of the "game tree".
 */
export class Game {  
    
    private _turns = 0;    
    private _dwarfsInStronghold: Set<Dwarf> = new Set<Dwarf>();

    private _dwarfsInCombat: Set<Dwarf>;

    constructor() {
        this._dwarfsInCombat = this.initDwarfsInCombat();
    }

    private initDwarfsInCombat(): Set<Dwarf> {
        const result = new Set<Dwarf>();
        
        result.add(new Dwarf('Gimli Gloinsohn', 42));
        result.add(new Dwarf('Bofur Bak', 36));
        result.add(new Dwarf('Thorin Eisenfaust', 666));
        return result;
    }

    /**
     * Calculates one game turn.
     */
    public calculateTurn(): void {
        this.fight();
    }

    /**
     * Calculate the result of all fights going on.
     */
    private fight(): void {
        // TODO do ballte-calculations for
    }

    get turns(): number {
        return this._turns;
    }

    get dwarfsInCombat(): Set<Dwarf> {
        return this._dwarfsInCombat;
    }
}