export class Customer {
    constructor(
            public id: number,
            public firstName: string,
            public lastName: string,
            public isActive: boolean,
            public bankAccountsDto: string,
            ) {}
    }
