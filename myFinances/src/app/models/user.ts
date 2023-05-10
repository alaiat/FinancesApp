import { Cost } from "./cost";
import { Income } from "./income";

export class User{
    name: string;
    email: string;
    password: string;
    createdAt: number;
    costs: Cost[] = [];
    incomes: Income[] = [];

    constructor(name: string, email: string, password: string, createdAt: number){
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
    }

    addCost(cost: Cost){
        this.costs.push(cost);
    }
    addIncome(income: Income){
        this.incomes.push(income);
    }
}
