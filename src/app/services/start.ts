import { Injectable } from '@angular/core';

@Injectable()
export class StartService {

    private name: string = "SomeSuperHero";

    constructor() {
    }

    public getName(): string {
        return this.name;
    }

}
