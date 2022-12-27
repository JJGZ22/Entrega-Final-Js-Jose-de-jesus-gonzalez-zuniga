function suma3ordenes(valor1,valor2,valor3)
{
    let resultado
    resultado = valor1 + valor2 + valor3
    return resultado
}
function suma2ordenes(orden1,orden2)
{
    let resultado
    resultado = orden1 + orden2
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
do{
    orden=prompt("Bienvenido a WcDonalds! Que vas a ordenar?\n1-Hamburguesa\n2-Papas\n3-Bebida\n4-Combo hamburguesa y bebida \n5-combo hamburguesa y papas\n6-Combo Bebida y papas\n7-Combo Completo\n8-Salir")
    orden=parseInt(orden)
    switch (orden) {
        case 1:alert("Una Deliciosa Hamburguesa ala Orden! El Total es "+ hamburprecio)
        break
        case 2:alert("Unas Papas ala Francesa Saliendo! El Total es "+ papaprecio)
        break
        case 3:alert("Unas Bebida Gaseosa ala orden! El Total es "+ bebidaprecio)
        break
        case 4:alert("Una Hamburguesa y Bebida ala Orden! El Total es "+ suma2ordenes(hamburprecio,bebidaprecio))
        break
        case 5:alert("Una Hamburguesa Y Papas ala francesa en camino! El Total es "+ suma2ordenes(hamburprecio,papaprecio))
        break
        case 6:alert("Una Bebida y Unas Papas ala francesa! El Total es "+ suma2ordenes(bebidaprecio,papaprecio))
        break
        case 7:alert("Combo Completo En Camino! El Total es "+ suma3ordenes(hamburprecio,papaprecio,bebidaprecio))
        break
        case 8:alert("Saliendo...Gracias! Vuelva Pronto")
        break
     default:alert("Esa opcion no existe")
            break;
    }
}while(orden !=8)
    
