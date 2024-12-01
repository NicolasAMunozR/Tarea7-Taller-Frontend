const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
  ];
  
// 1. Filtrar Productos con descuento
const prodcutosConDescuento = products.filter(producto => producto.discount > 0);
console.log("1. Filtrar Productos con descuento")
console.log("Productos con descuento:", prodcutosConDescuento);

// 2. Calcular el precio final con descuento
const precioFinalConDescuento = prodcutosConDescuento.map(producto => ({
    ...producto,
    priceAfterDiscount: producto.price * (1 - producto.discount / 100),
}));
console.log("2. Calcular el precio final con descuento")
console.log("Productos con precio final:", precioFinalConDescuento);

// 3. Identificar productos con stock menor a 5
const productosConBajoStock = [];
for (const producto of products) {
  if (producto.stock < 5) {
    productosConBajoStock.push(producto);
  }
}
console.log("3. Identificar productos con stock menor a 5")
console.log("Productos con stock bajo:", productosConBajoStock);

// 4. Actualizar el stock de un producto
const actualizarStock = (nombreProducto, cantidad) => {
    try {
      const producto = products.find(producto => producto.name === nombreProducto);
      if (!producto) {
        throw new Error("Producto no encontrado");
      }
      producto.stock += cantidad;
      console.log("Stock actualizado:", producto);
      console.log("Stock actualizado de", producto.stock - cantidad, "a", producto.stock);
    } catch (error) {
      console.error("Error al actualizar el stock:", error.message);
    }
};

console.log("4. Actualizar el stock de un producto")
actualizarStock("Pan", 10); // ejemplo para usar el try
actualizarStock("Cama", 10);

// 5. Resumen de productos por categoría
const resumenCategoria = {};
for (const producto of products) {
  if (!resumenCategoria[producto.category]) {
    resumenCategoria[producto.category] = 0;
  }
  resumenCategoria[producto.category]++;
}
console.log("5. Resumen de productos por categoría")
console.log("Resumen por categorías:", resumenCategoria);

//ejecutar en consola con node Tarea7.js
