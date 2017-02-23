import { StartService } from '../services/start';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'start-container',
    template: `
<div class="start-container">
    <h1>Start page for {{ getName() }}</h1>
</div>
`
})
export class Start {

    constructor(private startService: StartService) {}

    public getName(): string {
        return this.startService.getName();
    }

}
