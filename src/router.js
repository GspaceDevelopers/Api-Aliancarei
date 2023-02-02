import { Router } from "express";
import ProdutosController from './Controllers/ProdutosController'


const routes = new Router();

//rotas principais
routes.get("/subcategoria/subcategoria", ProdutosController.indexSubcategoria);
routes.get("/tamanhos", ProdutosController.indexTamanhos);

routes.post("/produtos", ProdutosController.store);
routes.get("/produtos", ProdutosController.index);
routes.put("/produtos", ProdutosController.update);
routes.put("/produtos:/_id", ProdutosController.update);
routes.get("/_id", ProdutosController.index4);
// routes.get("/tipo/produto", ProdutosController.index3);
// routes.delete("/produtos/:_id", ProdutosController.delete);
// routes.put("/produtos/:_id", ProdutosController.update);

// //rota queryes
// routes.get("/produto", QueryesController.getproduto);

// //mateus - category
// routes.get("/categoria", QueryCategory.getCategoryProduct);
// routes.get("/produtos/cor", Querycoritem.getmodelo);

export default routes;

//routes.get('/produtos', QueryesController.getallcolors)
