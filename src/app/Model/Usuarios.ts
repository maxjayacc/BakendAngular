import { ValueConverter } from '@angular/compiler/src/render3/view/template';

export class Usuarios {
    constructor(
            public id: number,
            public name: string,
            public password: string,
            public claims: []
            
            ) {}
    }




