# Criado utilizando Vite

O vite suporta a criação da aplicação sem utilizar bundlers, ao invés de ES Modules e dispensa o uso do babel.
Isso deixa a aplicação mais rápida e com menos código _boiler plate_ além de outra vantagens. Hoje o vite possui bastante suporte da comunidade, sendo uma ótima ferramenta para criação de aplicações.

# Tela de login

O comportamento dos componentes de input na tela de login foi feito de forma não controlada (uncontrolled component). Como não precisamos de uma resposta imediata da aplicação durante a digitação do usuário, escolhi a forma mais performática, evitando renderizações desnecessárias nessa tela.

# Pesquisa de departamentos

Para a pesquisa de departamentos foi utilizado um comportamento controlado no componente de input de texto (controlled component). Isso gera mais fluidez no funcionamento da página, dispensando o uso de um botão para que a pesquisa seja feita, porém também gera mais renderizações em tela devido ao fato de o estado do componente mudar à cada letra digitada.

Para contornar o problema de muitas renderizações acontecerem e gerarem uma possível lentidão, um delay foi adicionado à escrita no input de pesquisa. Dessa forma, a busca por departamentos só ocorrerá após meio segundo desde a parada de digitação no input.
