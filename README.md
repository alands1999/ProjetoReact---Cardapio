# Cardápio

Este projeto é uma página desenvolvida utilizando React com Next.js, destinada a exibir o cardápio de um restaurante. Possui uma variedade de pratos organizados em categorias e oferece recursos de busca e filtragem.

## Características
- Coleção de Dados: Apresenta uma coleção de pratos disponíveis no restaurante.
  - Componentes:
    - Campo de Busca: Permite buscar pratos na coleção através de um input. A função de busca é passada via props.
    - Cards: Exibe os detalhes de cada prato em um formato estruturado. Os dados são passados via props.
    - Categorias: Oferece 6 botões para filtrar os pratos por categoria: Entradas, Massas, Carnes, Bebidas, Saladas e Sobremesas. Cada botão recebe uma função para realizar a pesquisa na lista de dados, passada via props.

## Funcionalidades
O arquivo serviços.js contém as seguintes funções utilizadas para manipular os dados:

- listaDeProdutos: Retorna a lista completa de produtos.
- filtroLista: Filtra a lista de produtos por categoria.
- filtroBusca: Realiza uma busca na lista de produtos com base em um texto digitado.

Na página principal index.js, as funções são importadas e utilizadas em conjunto com o useState para gerenciar a mudança de informações nos botões de categoria e no campo de busca.

## Estilo e Responsividade

A página foi totalmente estilizada para proporcionar uma experiência visual agradável. É responsiva e se adapta a diferentes tamanhos de tela, garantindo uma boa experiência de usuário em dispositivos móveis e desktops.

## Executando o Projeto
- Clone o repositório
- Certifique-se de ter o node.js instalado em sua máquina.
- Abra um editor de código, e abra a pasta do projeto.
- instale as depências:
```bash
npm install
# or
yarn install
```
- Execute o projeto:
```bash
npm run dev
# or
yarn dev
```
- Visualização no navegador: Abra o seu navegador web e acesse http://localhost:3000 para visualizar a aplicação.

## Projeto: 

![1](https://github.com/alands1999/ProjetoReact---Cardapio/assets/150439841/d8345fad-e6f7-43d7-b0bb-d5401de26722)
![2](https://github.com/alands1999/ProjetoReact---Cardapio/assets/150439841/3274449f-f226-41a9-8b8a-e175847713c8)
![3](https://github.com/alands1999/ProjetoReact---Cardapio/assets/150439841/39fe957b-1cac-4a30-9ac6-527afed17260)
![4](https://github.com/alands1999/ProjetoReact---Cardapio/assets/150439841/db8baba3-366e-4357-8029-6684548129b9)
![5](https://github.com/alands1999/ProjetoReact---Cardapio/assets/150439841/bfd525cc-005c-4ded-8dcf-8eda7943f84f)
![6](https://github.com/alands1999/ProjetoReact---Cardapio/assets/150439841/58238d15-dc91-4843-b0ba-522e29ec0aaa)
![7](https://github.com/alands1999/ProjetoReact---Cardapio/assets/150439841/36caec56-acd4-44ce-b807-49777d8e67c0)
![8](https://github.com/alands1999/ProjetoReact---Cardapio/assets/150439841/4188d26d-07ef-42eb-93cc-6b5f2165631e)
