export async function getCategories() {
  const url = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const result = await url.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
// Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const url = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const result = await url.json();
  return result;
}

export async function getProductById(id) {
  const url = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const result = await url.json();
  console.log(result);
  // 'https://api.mercadolibre.com/items/MLB1405519561';
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
