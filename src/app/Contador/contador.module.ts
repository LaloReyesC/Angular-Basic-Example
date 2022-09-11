import { CommonModule } from '@angular/common'
import { NgModule } from "@angular/core";
import { ContadorComponent } from './Contador/contador.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ContadorComponent
    ],
    declarations: [
        ContadorComponent
    ]
})

export class ContadorModule { }