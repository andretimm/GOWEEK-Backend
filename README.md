# [GOWEEK]
Backend desenvolvido para o GOWEEK, onde será desenvolvido uma cópia simples do Twitter
### Dependências
* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/)

### Como Executar

``` shell
$ git clone https://github.com/andretimm/GOWEEK-Backend.git
$ cd GOWEEK-Backend
$ yarn install
$ yarn start
```
Após iniciar o server, o mesmo irá em `http://localhost:3000`

### Rotas
* `GET /tweets`: Retornar todos os tweets
* `POST /tweets`: Cria um novo tweet
```json
{
	"author" : "Andre Timm",
	"content" : "Meu primeiro tweet. #GOWEEK"
}
```
* `POST /likes/:id`: Da like no tweet