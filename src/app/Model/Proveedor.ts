export class Proveedor {
    constructor(
            public CodigoUbicacion: string,
            public Codigo_Caja: string,
            public Reconteo: string,
            public cantidad_tomadaErronea: number,
            public cantidad_tomadaTOTAL: number,
            public cantidad_tomadaok: number,
            public fechaRegistro: string,
            public nombre: string,
            ) {}
    }
