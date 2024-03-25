# Calculadora Simples em React

Este é um projeto de uma calculadora simples desenvolvida em React. A calculadora permite realizar operações básicas de adição, subtração, multiplicação e divisão, além de lidar com casos de erro, como divisão por zero e operações inválidas.

## Funcionalidades

- Adição
- Subtração
- Multiplicação
- Divisão
- Tratamento de erros (divisão por zero e operações inválidas)
- Limpar (Clear)

## Como Utilizar

1. Clone este repositório:

git clone https://github.com/seu-usuario/calculadora-react.git

2. Instale as dependências:

cd calculadora-react
npm install

3. Execute o projeto:

npm start

4. Acesse a calculadora em seu navegador em [http://localhost:3000](http://localhost:3000)

## Testes

Este projeto inclui testes automatizados usando Jest e React Testing Library para garantir o funcionamento correto da calculadora. Os seguintes casos de teste foram implementados:

1. Realiza cálculos corretamente:
   - Testa se a adição funciona corretamente.
   - Testa se a subtração funciona corretamente.
   - Testa se a multiplicação funciona corretamente.
   - Testa se a divisão funciona corretamente.
   - Testa se a função de limpar funciona corretamente.

2. Lida com divisão por zero corretamente:
   - Testa se a calculadora exibe corretamente a mensagem de erro ao tentar dividir por zero.

3. Lida com operações inválidas corretamente:
   - Testa se a calculadora exibe corretamente a mensagem de erro ao realizar operações inválidas.

## Como Executar os Testes

Para executar os testes, você pode usar o seguinte comando:

npm test

Isso iniciará o Jest e executará todos os testes automatizados.