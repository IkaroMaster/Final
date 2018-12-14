export class Cliente {
    constructor(
        public id: number,
        public nombre: string,
        public apellido: string
    ){}
}

export class Factura {
    constructor(
        public id: number,
        public cliente: number,
        public cantidad: number,
        public precio: number,
        // public total: number
    ){}
}
export class Productor {
    constructor(
        public id: number,
        public nombre: string,
        public apellido: string
    ){}
}

export class NotaEntrega {
    constructor(
        public id: number,
        public productor: number,
        public cantidad: number,
        public precio: number,
        // public total: number
    ){}
}

export class TotalLeche{
    constructor(
        public id: number,
        public totalLeche: number
    ){}
}