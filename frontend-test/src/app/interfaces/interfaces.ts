
export interface Respuesta {
    ok: boolean,
    pagina: number,
    products: Product[],
    palindomo: boolean
}

export interface Product {
    id: number,
    brand: string,
    description: string,
    price: number,
    image?: string
}





