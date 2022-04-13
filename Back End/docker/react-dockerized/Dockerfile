# FROM ubuntu:latest
# A partir do FROM , é possível usar qualquer comando em qualquer ordem, porém, dependendo do funcionamento do seu aplicativo, etapas bem posicionadas podem otimizar o processo de build (que é a construção da imagem) , rebuild (reconstrução da imagem) ou mesmo na distribuição. Isso porque quanto menos etapas para aplicação rodar, menos camadas a imagem vai gerar, diminuindo seu peso.
# Isso é importante, principalmente quando estamos trabalhando em uma imagem que recebe atualizações regulares.


# WORKDIR /App
# Com o comando WORKDIR , podemos definir um "diretório de trabalho", que será utilizado como base para a execução dos comandos. Sua estrutura é a seguinte:
# Copiar
# WORKDIR /diretorio/que/sera/utilizado

# COPY ["./package*.json", "/App"]
# COPY
# Vimos que conseguimos preparar nossa imagem para executar por exemplo, uma aplicação dentro do container, porém, precisamos do código fonte para rodá-lo.
# Para isso utilizamos o COPY (Copiar em português) , com ele conseguimos copiar diretórios e arquivos para dentro da nossa imagem:
# Imagine que estamos em um diretório que possui uma pasta app com o código fonte de uma aplicação, para copiá-la para dentro da imagem e conseguirmos executá-la, basta aplicar:
# Vale ressaltar que no COPY tanto a sintaxe na forma exec ( COPY ["arquivo1", "arquivo2", "./destino"] ) como na shell ( COPY arquivo1 arquivo2 ./destino ) são aceitas*.
# * O modo shell é como se você rodasse o comando em um terminal.
# No Dockerfile do nosso mini-projeto, vamos copiar todos os arquivos que começam com "package" ( package.json e package-lock.json ), para nosso diretório atual, a pasta /app , usando a forma exec :


# RUN ["npm", "install"]
# O RUN é comum para prepararmos a imagem para rodar nossos apps, instalando as dependências de uma aplicação. Note que o RUN também aceita as formas shell e exec , assim como o COPY .
# No Dockerfile do nosso mini-projeto, vamos rodar o comando de instalação da nossa aplicação, passando um parâmetro para suprimir mensagens de aviso e facilitar a visualização do processo, quando ele ocorrer :



# Passos intermediários
# Antes de passar para os próximos comandos, alguns passos intermediários são necessários, como por exemplo, fazer a cópia dos demais arquivos para dentro do container, porém, como já rodamos um npm install , é interessante criarmos um arquivo chamado dockerignore para adicionarmos lá a node_modules, de modo que ela não seja copiada.
# touch .dockerignore
# node_modules
# Agora, no Dockerfile do nosso mini-projeto, podemos definir a cópia de todos os arquivos apenas com o comando:

# Também devemos adicionar um comando para executar o processo de build * da nossa aplicação, no Dockerfile :
# * Esses comandos podem variar dependendo da aplicação que você for rodar.
# No nosso exemplo, uma aplicação em React possui um script para gerar uma versão otimizada da página criada, por faremos esse processo aqui.

# RUN ["npm" , "run" , "build"]



# NGINX
# Aqui faremos um negócio chamado multi-stage build *, que nada mais é que dividir o script do Dockerfile em mais de uma parte.
# * Para saber mais sobre o multi-stage build , acesse o link oficial da documentação
# Então nessa segunda parte, passaremos a definir no Dockerfile do nosso mini-projeto os comandos do ambiente de produção, no qual utilizaremos um servidor HTTP NGINX .
# Como foi dito anteriormente, há uma diversidade de servidores http no mercado. Utilizamos o Apache no exemplo passado e agora utilizaremos o Servidor Nginx (pronunciado "engine-ex"). O Nginx é um software de código aberto para servidores web, originalmente utilizado para navegação HTTP, mas que atualmente também tem outras funcionalidades mais avançadas.
# Agora, vamos definir a imagem de origem do Nginx , com o alias "prod". Em seguida, iremos copiar as informações da imagem que apelidamos de "build" e sua respectiva pasta para o diretório do servidor, como a seguir:

# FROM nginx:1.16.0-alpine AS prod
# COPY  --from=build ["/app/build /usr", "/share/nginx/html"]
# Outra característica que é necessária nos atentarmos, é a porta que será utilizada por nossa aplicação dentro do container .
# Aqui não será diferente, o container possui toda uma rede interna para o container que veremos mais adiante.
# Aqui é necessário sabermos que grande parte dos serviços (sobretudo os da web) disponibilizam uma porta de acesso externo, portanto, precisamos especificá-la com o comando EXPOSE :
# EXPOSE 3000
# Uma vez "exposta", configuramos nossa imagem para utilizar esta porta.
# Por padrão, o Nginx usa a porta 80 para executar as aplicações, então, podemos expor esta porta no nosso Dockerfile :
# EXPOSE 80
# Aqui, vale ressaltar que quando formos rodar um container utilizando uma imagem que expõe uma porta, precisamos atribuir uma porta do nosso sistema hospedeiro ( host ) que direcionará para a porta do sistema convidado ( guest ) .
# Fazemos isso com o parâmetro -p :


# CMD ["/bin/echo", "Hello World"]
# CMD
# O comando CMD (Que vem de C o m man d Prompt, ou Prompt de comando em português) , sempre é executado quando o container é iniciado .
# É interessante ressaltar que pode acontecer de mais de um CMD ser definido em um mesmo Dockerfile e, neste caso, apenas o último terá efeito.
# O CMD possui 2 formas: a que vimos até aqui para a execução de comandos shell e as para executáveis. Vamos ver um exemplo:
# Copiar
# CMD ["/bin/echo", "Hello World"]
# Nesse forma, o primeiro argumento é o executável e os demais são seus parâmetros.
# Normalmente utilizamos o CMD para executar o comando que irá rodar com o container, poderíamos usar como exemplo o start de um app , por exemplo:
# Copiar
# CMD npm start




# ENTRYPOINT
# Vimos que podemos utilizar o CMD para iniciarmos um comando ao executarmos nossos containers , como por exemplo para iniciarmos um app .
# Porém, para esse fim recomendamos utilizar ENTRYPOINT (Ponto de entrada em português) , pois, diferentemente do CMD , o comando não será sobrescrito pelo passado no run ao executarmos o container .
# Por exemplo:
# ENTRYPOINT ["/bin/echo", "Hello World"]

FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]


# Mas para que a gente consiga de fato consolidar essas instruções em uma imagem, precisamos rodar o comando docker image build -t <name:tag> <origem_docker_file> !
# Copiar
# docker image build -t react-dockerized:v1 .
# Aqui temos o comando docker , acompanhado da instância image , e do subcomando build . Isso deve retornar o log do processo de build , algo como:
# docker image build -t react-dockerized:v1 .