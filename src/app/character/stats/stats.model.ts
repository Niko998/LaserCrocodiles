export class Stats {
    public name: string;
    public health: number;
    public exp: number;
    public str: number;
    public int: number;
    public power: number;

    constructor(name: string, hp: number, exp: number, str: number, int: number, power: number) {
        this.name = name;
        this.health = hp;
        this.exp = exp;
        this.str = str;
        this.int = int;
        this.power = power;
    }
}