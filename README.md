🛒 Dashboard de Produtos

Aplicação web que consome uma API REST para exibir produtos de forma dinâmica em um dashboard, utilizando JavaScript moderno e organização de código baseada no padrão MVC.

🧠 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de:

Praticar consumo de API REST

Aplicar JavaScript assíncrono (async/await)

Manipular o DOM de forma organizada

Implementar arquitetura baseada em MVC

Criar um projeto consistente para portfólio profissional

🧩 Arquitetura MVC

O projeto segue uma estrutura inspirada no padrão MVC (Model–View–Controller), separando responsabilidades de forma clara:

Model: responsável pela comunicação com a API e regras de negócio

View: responsável pela renderização e manipulação do DOM

Controller: responsável por intermediar Model e View

Essa abordagem melhora a manutenção, escalabilidade e legibilidade do código.

🚀 Funcionalidades

✅ Consumo de dados da Fake Store API

✅ Listagem dinâmica de produtos

✅ Renderização de cards de produtos

✅ Separação clara entre lógica, visual e controle

✅ Tratamento de erros em requisições assíncronas

✅ Interface organizada em formato de dashboard

🛠️ Tecnologias Utilizadas

HTML5

CSS3

JavaScript (ES6+)

Fetch API

API REST

Conceitos aplicados:

async / await

try / catch

MVC (Model–View–Controller)

Manipulação do DOM

Modularização

📂 Estrutura de Pastas (MVC)
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

🔌 API Utilizada

Nome: Fake Store API

URL: https://fakestoreapi.com

Descrição: API pública que simula produtos de um e-commerce para fins educacionais.

▶️ Como Executar o Projeto
# Clone o repositório
git clone https://github.com/seu-usuario/dashboard-produtos

# Acesse a pasta
cd dashboard-produtos

# Execute
Abra o arquivo index.html


Para melhor experiência, utilize o Live Server.

⚠️ Tratamento de Erros

Uso de try/catch no Model para requisições HTTP

Prevenção de falhas quando a API estiver indisponível

Possibilidade de feedback visual ao usuário

📈 Possíveis Melhorias Futuras

🔹 Implementar filtros por categoria (Controller)

🔹 Campo de busca dinâmica (View + Controller)

🔹 Paginação

🔹 Migração para React mantendo o conceito MVC

🔹 Testes unitários nos Models

👤 Autor

Joab Coelho
Estudante de Engenharia de Software | Desenvolvedor Front-end

GitHub: https://github.com/seu-usuario

LinkedIn: https://linkedin.com/in/seu-perfil

📝 Licença

Este projeto está sob a licença MIT.

Observação técnica (importante para avaliador)

Embora o MVC seja mais comum no back-end, este projeto aplica o conceito de separação de responsabilidades no front-end, o que demonstra maturidade arquitetural e preocupação com escalabilidade.
