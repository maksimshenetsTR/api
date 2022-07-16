"use strict";

const PRODUCTS = [
  {
    id: '1',
    name: "Product 1",
  },
  {
    id: '2',
    name: "Product 2",
  },
  {
    id: '3',
    name: "Product 3",
  },
  {
    id: '4',
    name: "Product 4",
  },
  {
    id: '5',
    name: "Product 5",
  },
  {
    id: '6',
    name: "Product 6",
  },
];

module.exports.getProductList = async () => ({
  statusCode: 200,
  body: JSON.stringify(PRODUCTS),
});

module.exports.getProductById = async event => ({
  statusCode: 200,
  body: JSON.stringify(PRODUCTS.find(product => product.id === event.pathParameters?.productId)),
});
