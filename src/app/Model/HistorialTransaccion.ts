
export class HistorialTransaccion {
    constructor(
            public id: number,
            public create_time: string,
            public originAccountNumber: string,
            public destinationAccountNumber: boolean,
            public amount: number,
            ) {}
    }
