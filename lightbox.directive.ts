import {Directive} from '@angular/core';

@Directive({
    selector: '[lightbox]'
})
export class LightboxDirective {
    constructor() {
        console.log("Hello, light box.");
    }
}