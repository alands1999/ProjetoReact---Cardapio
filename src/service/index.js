import { produtos } from "../data/data-produtos";

export const listaDeProdutos = () => {
    return produtos
}

export const filtroLista = (texto, lista, mudaLista, mudaTexto) => {
     let produtosFiltrados = lista.filter((produto) => (
        produto.categoria === texto))
        mudaLista(produtosFiltrados)
        mudaTexto("")
}

export const filtroBusca = (mudaTexto, textoDigitado, mudaLista, ListaDados) => {
    mudaTexto(textoDigitado)
    if (textoDigitado.length >= 3) {
        mudaLista(ListaDados.filter((produto) =>
    produto.nome.toLowerCase().includes(textoDigitado.toLowerCase(),) ||
    produto.categoria.toLowerCase().includes(textoDigitado.toLowerCase()) ||
    produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
  ))} else {}
  }
