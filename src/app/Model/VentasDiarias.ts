export class VentasDiarias {
    constructor(
            public NumTienda: string,
            public NombreTienda: string,
            public CantProductos: number,
            public CostoPromedio: number,
            public PrecioVentaOriginalSinIGV: number,
            public PrecioVentaSinIGV: number,
            public MontoDescontadoSinIGV: number,
            public ExtMargin: number,
            public CantTickets: number,
            public VentaPromXTicket: number,
            public visitas: number,
            public meta: number,
            public GradoConversion: number,
            public POrcentajeMeta: number
            ) {}
        }
