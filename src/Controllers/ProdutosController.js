import Produtos from "../schemas/Produtos";

class ProdutoController {
  async index(req, res) {
    const Produtolist = await Produtos.find();

    return res.json(Produtolist);
  }
  async indexSubcategoria(req, res) {
    const { subcategoria } = req.query;
    const Produtolist = await Produtos.find({ subcategoria: subcategoria });
    return res.json(Produtolist);
  }

  async index2(req, res) {
    const { produto } = req.query;
    const Produtolist = await Produtos.find({ produto: produto });
    return res.json(Produtolist);
  }
  async index3(req, res) {
    const { produto, tipo } = req.query;
    const Produtolist = await Produtos.find({ produto: produto, tipo: tipo });
    return res.json(Produtolist);
  }
  async index4(req, res) {
    const { _id } = req.query;
    const Produtolist = await Produtos.find({ _id: _id });
    return res.json(Produtolist);
  }
  async store(req, res) {
    const {
      tamanho,

      site,
      comprimento,
      codigo,
      categoria,
      subcategoria,
      fabricacao,
      pesomediodopar,
      material,
      garantia,
      acompanha,
      produto,
      modelo,
      tipo,
      preco,
      largura,
      altura,
      descricao,
      modo,
      urlFoto,
      urlFoto2,
      urlFoto5,
      urlFoto6,
      urlFoto7,
      urlFoto8,
    } = req.body;

    const Produtolist = await Produtos.create({
      comprimento,
      site,
      tamanho,
      codigo,
      categoria,
      subcategoria,
      fabricacao,
      pesomediodopar,
      material,
      garantia,
      acompanha,
      produto,
      modelo,
      tipo,
      preco,
      largura,
      altura,
      descricao,
      modo,
      urlFoto,
      urlFoto2,
      urlFoto5,
      urlFoto6,
      urlFoto7,
      urlFoto8,
    });

    return res.json(Produtolist);
  }
  async indexTamanhos(req, res) {
    const { tamanho } = req.body;

    const Produtolist = await Produtos.create({
      tamanho,
    });

    return res.json(Produtolist);
  }
  async delete(req, res) {
    const { _id } = req.params;
    const Produtolist = await Produtos.deleteOne({ _id: _id });
    return res.json(Produtolist);
  }

  async update(req, res) {
    const { _id } = req.params;

    const {
      site,
      tamanho,
      comprimento,
      codigo,
      categoria,
      subcategoria,
      fabricacao,
      pesomediodopar,
      material,
      garantia,
      acompanha,
      produto,
      modelo,
      tipo,
      preco,
      largura,
      altura,
      descricao,
      modo,
      urlFoto,
      urlFoto2,
      urlFoto5,
      urlFoto6,
      urlFoto7,
      urlFoto8,
    } = req.body;
    const Produtolist = await Produtos.updateOne(
      { _id: _id },
      {
        site,
        tamanho,
        material,
        tipodoproduto,
        descricao,
        subcategoria,
        codedecomprovante,
        tempodefabricacao,
        garantia,
        acabamento,
        nome,
        pedras,
        imagem1,
        imagem2,
        imagem5,
        imagem6,
        modelo,
        preco,
      }
    );
    return res.json(Produtolist);
  }
}

export default new ProdutoController();
