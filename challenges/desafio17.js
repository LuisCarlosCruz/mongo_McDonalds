db.createCollection("resumoProdutos");
db.resumoProdutos.insertOne(
  {
    franquia: "McDonalds",
    totalProdutos: db.produtos.count(),
  },
);
db.resumoProdutos.find(
  { franquia: "McDonalds" },
  { franquia: 1, _id: 0, totalProdutos: 1 },
);