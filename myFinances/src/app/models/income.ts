export class Income{
    name: string;
    value: number;
    createdAt: number;

    constructor(name: string, value: number, createdAt: number){
        this.name = name;
        this.value = value;
        this.createdAt = createdAt;
    }
}
