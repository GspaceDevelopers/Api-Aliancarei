import { Schema, model } from "mongoose";

const Produtos = new Schema({
  site: String,
  tamanho: String,
  comprimento: String,
  codigo: String,
  categoria: String,
  subcategoria: String,
  fabricacao: String,
  pesomediodopar: String,
  material: String,
  garantia: String,
  acompanha: String,
  produto: String,
  modelo: String,
  tipo: String,
  preco: String,
  largura: String,
  altura: String,
  descricao: String,
  modo: String,
  urlFoto: String,
  urlFoto2: String,
  urlFoto5: String,
  urlFoto6: String,
  urlFoto7: String,
  urlFoto8: String,
  data: Date,
});

export default model("Produtos", Produtos);
