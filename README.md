<h1 align="center">
    Desafio Stefanini
</h1>

## :rocket: Sobre

Aqui esta o desafio porposto pela Stefanini, criado pelo Cirineu Simião Lemos. Tentei fazer o máximo possível pois o tempo foi curto rsrs, espero que vocês consigão ver com muito carinho o ReadMe abaixo, que na minha opinião o autor "Uma imagem vale mais que mil palavras", está completamente certo, por isso criei alguns gifs mostrando alguns dos processos que fiz na plataforma da AWS.
<br/><br/>
Confesso que não sou especialista com as ferramentas propostas, pois onde atuo utiliza outra features do Node.js, mas sempre estou disposto a aprender novos assuntos para sempre crescer minhas skills. :grin:
<br/><br/>

## :memo: Check-List

- [X] **`Utilizar Clean Architectute.`**

<img alt="Clean" src="https://github.com/cirineulemos/desafio-stefanini/blob/master/readMeFiles/arquitetura.gif" />
<br/><br/>
A arquitetura foi feita da forma mais simples possível, espero que gostem!

<br/><br/>

- [X] **`Salvar as informações necessárias em um banco de dados relacional ou não relacional de sua escolha dentro de uma infraestrutura AWS`**

<img alt="DB" src="https://github.com/cirineulemos/desafio-stefanini/blob/master/readMeFiles/banco.gif" />
<br/><br/>
Aqui criei o banco de dados na AWS com sucesso! Utilizei o Banco MySQL por ter mais familiaridade. Mas relacional ou não também daria certo... :grin:

<br/><br/>

- [X] **`Será necessário que a Lambda consiga consultar, deletar e atualizar um funcionário e que ele esteja acessível via internet`**

<img alt="Lambda" src="https://github.com/cirineulemos/desafio-stefanini/blob/master/readMeFiles/lambda%20apis.gif" />
<br/><br/>
Aqui está na estrutura Lambda as API's para serem consumidas e logo abaixo os links dos EndPoints gerados:
<br/><br/>
    API para Listar todos os Funcionários: GET - https://5zxj3vpzs4.execute-api.sa-east-1.amazonaws.com/dev/listFunc
    <br/><br/>
    API para Selecionar um Funcionários: GET - https://5zxj3vpzs4.execute-api.sa-east-1.amazonaws.com/dev/selectFunc
    <br/><br/>
    API para Adicionar um Funcionários: POST - https://5zxj3vpzs4.execute-api.sa-east-1.amazonaws.com/dev/addFunc
    <br/><br/>
    API para Editar um Funcionários: PUT - https://5zxj3vpzs4.execute-api.sa-east-1.amazonaws.com/dev/editFunc
    <br/><br/>
    API para Deletar um Funcionários:DELETE - https://5zxj3vpzs4.execute-api.sa-east-1.amazonaws.com/dev/deleteFunc
<br/><br/>

- [X] **`Os recuros podem ser provisionados por serveless framework ou terraform.`**

<img alt="serveless" src="https://github.com/cirineulemos/desafio-stefanini/blob/master/readMeFiles/deploy%20serverless.gif" />
<br/><br/>
No gif acima mostro como fiz deploy utilizando o ServerLess na AWS...
<br/><br/>


- [ ] **`Um funcionário deve possuir como atributos : Id , Idade , Nome e Cargo.`**
<br/><br/>
Este item não deu para mostrar como ficou na AWS pois tive alguns problemas com o Servidor de MySQL, iria até abrir um chamado na AWS, mas pelo prazo do desafio vi que não daria tempo habil para entregar este conteúdo para vocês, por isso no font vocês conseguiram visualizar as Querys de SQL para manipulação do Banco de Dados, com os respectivos campos solicitados.
<br/><br/>

<img alt="atributos" src="https://github.com/cirineulemos/desafio-stefanini/blob/master/readMeFiles/erro%20404.jpg" />

<br/><br/>
Aqui está o erro que deparei com a AWS :point_up_2:
<br/><br/>

- [ ] **`Realizar testes unitário com JEST.`**
<br/><br/>
Por conta também do erro acima não consegui concluir o projeto para utilizar o JEST, pois não fazia sentido eu fazer o ciclo de testes sem a conclusão do desafio.
<br/><br/>


## :eyes: Observação

Aguardo ansiosamente pelo retorno do desafio!!! Quero muito integrar essa equipe! :crossed_fingers: :grin:

