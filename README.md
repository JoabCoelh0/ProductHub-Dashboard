# Dashboard de Produtos

Aplicação web que consome uma API REST para exibir produtos em um dashboard, desenvolvida com JavaScript moderno e organizada segundo um padrão inspirado em MVC (Model–View–Controller).

---

## Objetivo do Projeto

Este projeto tem como objetivos principais:

- Praticar o consumo de APIs REST
- Aplicar JavaScript assíncrono com `async/await`
- Organizar a manipulação do DOM de forma estruturada
- Utilizar separação de responsabilidades baseada no padrão MVC
- Desenvolver um projeto adequado para portfólio profissional

---

## Arquitetura (MVC)

O projeto utiliza uma organização inspirada no padrão MVC, separando claramente as responsabilidades:

- **Model**  
  Responsável pela comunicação com a API e pelas regras de negócio.

- **View**  
  Responsável pela renderização dos dados na interface e manipulação do DOM.

- **Controller**  
  Responsável por intermediar a comunicação entre Model e View.

Essa abordagem melhora a legibilidade, manutenção e escalabilidade do código.

---

## Funcionalidades

- Consumo de dados da Fake Store API  
- Listagem dinâmica de produtos  
- Exibição de informações como imagem, título, preço e descrição  
- Organização do código em camadas (Model, View e Controller)  
- Tratamento de erros em requisições assíncronas  
- Interface organizada em formato de dashboard  

---

## Tecnologias Utilizadas

- HTML5  
- CSS3  
- JavaScript (ES6+)  
- Fetch API  
- API REST  

### Conceitos aplicados
- `async / await`  
- `try / catch`  
- MVC (Model–View–Controller)  
- Manipulação do DOM  
- Modularização de código  

---

## Estrutura de Pastas

```bash
📁 dashboard-produtos
 ┣ 📁 assets
 ┃ ┗ imagens e ícones
 ┣ 📁 css
 ┃ ┗ style.css
 ┣ 📁 js
 ┃ ┣ 📁 models
 ┃ ┃ ┗ productModel.js
 ┃ ┣ 📁 views
 ┃ ┃ ┗ productView.js
 ┃ ┣ 📁 controllers
 ┃ ┃ ┗ productController.js
 ┃ ┗ main.js
 ┣ index.html
 ┗ README.md
````
 ## API Utilizada

- **Nome:** Fake Store API  
- **URL:** https://fakestoreapi.com  
- **Descrição:** API pública que simula dados de produtos de um e-commerce para fins educacionais.

---

## Como Executar o Projeto

```bash
git clone https://github.com/seu-usuario/dashboard-produtos
cd dashboard-produtos

