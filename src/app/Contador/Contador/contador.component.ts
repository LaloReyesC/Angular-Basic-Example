import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <div>
        <h3>El valor del contador es</h3>
        <p>{{ counter }}</p>
    </div>
    <div>
        <button (click)="handleSubstract()">-1</button>
        <button (click)="handleReset()">Reset</button>
        <button (click)="handleAdd()">+1</button>
    </div>
    `,
})

export class ContadorComponent implements OnInit {

    counter: number = 0;

    constructor() { }

    ngOnInit(): void { }

    handleAdd() {
        this.counter += 1;
    }

    handleSubstract() {
        this.counter -= 1;
    }

    handleReset() {
        this.counter = 0;
    }
}