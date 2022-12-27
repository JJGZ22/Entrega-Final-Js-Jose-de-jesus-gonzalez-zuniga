function suma3ordenes(valor1,valor2,valor3)
{
    let resultado
    resultado = valor1 + valor2 + valor3
    return resultado
}

let orden
orden=parseInt(orden)
let hamburprecio = 50
hamburprecio=parseInt(hamburprecio)
let papaprecio = 20
papaprecio=parseInt(papaprecio)
let bebidaprecio= 15
bebidaprecio=parseInt(bebidaprecio)
let ordentotal = hamburprecio+papaprecio+bebidaprecio
ordentotal=parseInt(ordentotal)
do{
    orden=prompt("Bienvenido a WcDonalds! Que vas a ordenar?\n1-hamburguesa\n2-Papas\n3-Bebida\n4-Orden Completa\n5-Salir")
    orden=parseInt(orden)
    switch (orden) {
        case 1:alert("Una Deliciosa Hamburguesa ala Orden! El Total es "+ hamburprecio)
        break
        case 2:alert("Unas Papas ala Francesa Saliendo! El Total es "+ papaprecio)
        break
        case 3:alert("Unas Bebida Gaseosa ala orden! El Total es "+ bebidaprecio)
        break
        case 4:alert("Orden Completa En Camino! El Total es "+ suma3ordenes(hamburprecio,papaprecio,bebidaprecio))
        break
        case 5:alert("Saliendo...Gracias! Vuelva Pronto")
        break
     default:alert("Esa opcion no existe")
            break;
    }
}while(orden !=5)
    
