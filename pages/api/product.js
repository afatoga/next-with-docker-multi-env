export async function getProductData() {
  const response = await fetch("https://dummyjson.com/products/1");
  const data = await response.json();
  return data;
}
