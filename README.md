# Boas-vindas ao repositório do projeto MongoDonalds!
**#VAMOQUEVAMO** 🚀

Aqui você vai encontrar em detalhes uma estrutura desenvolvida em **MongoDB**.


<details>
  <summary>
    <strong>👨‍💻 O que foi desenvolvido</strong>
  </summary><br>

  - Nesse projeto, você vai encontrar um banco de dados `commerce`, que contém dados do cardápio do **McDonald's**, como ingredientes, valores nutricionais e dados fictícios de vendas.

  - Para cada query foi criado um arquivo JS dentro de uma pasta na raiz do seu projeto chamada **`challenges`** seguindo a seguinte estrutura:

    - desafio1.js, desafio2.js, ..., desafioN.js
</details>

<details>
  <summary>
    <strong>🐳 Foi ultilizado o Docker para este projeto</strong>
  </summary><br>

  - Para utilizar o banco através docker, é necessário executar os comando localmente usando os seguintes passos:

  1. Acesse o terminal na raiz da pasta do projeto;
  2. Crie um container com um volume apontando para a pasta do projeto `docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo`;
  3. Com o container em execução, acesse o terminal do container `docker exec -it nomeDoContainer bash`;
  4. No terminal do container acesse o diretório mapeado no volume (no exemplo acima `/app`);
  5. Por fim, execute o script de testes do projeto: `./scripts/evaluate.sh`.
  Se por algum motivo a execução do container for finalizada, basta iniciá-lo novamente com o comando `docker start nomeDoContainer` e seguir a partir do passo 3.

</details>

<details>
  <summary>
    <strong>♻️ Restaurando o banco de dados</strong>
  </summary><br>

  - Na raiz do diretório do projeto, execute o seguinte comando para restaurar a base de dados `commerce`:
    
  ```bash
    DBNAME=commerce ./scripts/resetdb.sh assets/produtos
  ```

  - A execução desse script criará um banco de dados chamado `commerce` e importará os dados para a coleção `produtos`.

</details>
