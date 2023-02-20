# Criado utilizando Vite

O vite suporta a criação da aplicação sem utilizar bundlers, ao invés de ES Modules e dispensa o uso do babel.
Isso deixa a aplicação mais rápida e com menos código _boiler plate_ além de outra vantagens. Hoje o vite possui bastante suporte da comunidade, sendo uma ótima ferramenta para criação de aplicações.

# O app

Antes de mais nada, certifique-se de adicionar o usar o arquivo `.env` com as variáveis de ambiente necessárias. Use o arquivo `sample.env` como base. As variáveis `VITE_FAKE_EMAIL` e `VITE_FAKE_PASSWORD` devem ser configuradas para o usuário que terá login na aplicação.

## Roteamento

Feito utilizando o [React Router V6](https://reactrouter.com/en/main). Uma das bibliotecas mais utilizadas no react em geral, cria roteamento e navegação em apps react de forma simples e legível. É sempre a minha primeira solução de roteamento

## Ícones

Foi utilizada a a biblioteca [Phosphor Icons](https://phosphoricons.com/) para adicionar ícones à aplicação.

## Simulações de request

No início, utilizei o json-server para gerar uma api fake com o retorno dos departamentos, porém no desafio é pedido que eu mesmo desenvolva a pesquisa, então removi o servidor falso e adicionei um simples delay às requisições que simula o request à uma API

## Tela de login

O comportamento dos componentes de input na tela de login foi feito de forma não controlada (uncontrolled component). Como não precisamos de uma resposta imediata da aplicação durante a digitação do usuário, escolhi a forma mais performática, evitando renderizações desnecessárias nessa tela.

A tela de login foi desenvolvida para só estar disponível caso ela seja necessária. Se o usuário já estiver logado, o fluxo de login não está disponível.

## Departamentos

Como pedido, a rota de departamentos redireciona qualquer tentativa não logada para a tela de login.

### Pesquisa de departamentos

Para a pesquisa de departamentos foi utilizado um comportamento controlado no componente de input de texto (controlled component). Isso gera mais fluidez no funcionamento da página, dispensando o uso de um botão para que a pesquisa seja feita, porém também gera mais renderizações em tela devido ao fato de o estado do componente mudar à cada letra digitada.

Para contornar o problema de muitas renderizações acontecerem e gerarem uma possível lentidão, um delay foi adicionado à escrita no input de pesquisa. Dessa forma, a busca por departamentos só ocorrerá após meio segundo desde a parada de digitação no input, evitando que o estado da página mude a cada tecla digitada.

Também foi adicionado um limite de resultados à pesquisa. Como não se espera muitos dados semelhantes (cada departamento tem um nome único, por exemplo) não foi implementado uma paginação. Dessa forma, o usuário é induzido a refinar sua pesquisa, caso ela seja muito generalizada.

## Docker

Foi adicionada uma configuração de docker que sobe a aplicação em um container e expõe a porta da aplicação.

<strong style="color: red;">A porta deve ser configurada tanto no arquivo .env como no campo `expose` do dockerfile</strong>

## Rodando o app

Foi adicionado o comando `docker:build` que constrói o container com o app. Após esse comando, o comando `docker run -p [HOST_PORT]:[EXPOSED_DOCKER_PORT] -d solides` pode ser usado para rodar o container construído
