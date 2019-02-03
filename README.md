# Cifra de César

## Prefácio

O aniversário da sua mãe está se aproximando e você está organizando uma festa
surpresa. Para manter a festa em segredo foi criado um grupo de Whatsapp com
amigxs e familiares. O problema é que as vezes sua mãe utiliza o seu celular
e pode ser que ela veja as suas mensagens. Como a festa é surpresa, você
decide criar uma aplicação que permita enviar mensagens criptografadas e depois
descriptografar. Então agora é a hora de aplicar os seus super poderes 😎

## Introdução

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos
primeiros tipos de criptografias conhecidos na história. É um tipo de cifra por
substituição, em que uma letra no texto original é substituída por outra,
seguindo um número fixo para essa subtituição.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

O imperador Júlio César usou essa cifra para enviar ordens aos seus generais no
campo de batalha. Essa é uma das técnicas mais simples e mais usadas para
cifrar mensagens.

Por exemplo se usarmos o deslocamento de 3:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Atualmente todas as cifras de substituição alfabética simples, são descifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de
César muitas vezes pode fazer parte de um sistema mais complexo de
criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13.

## Objetivos

O objetivo principal foi criar um produto que seja de fácil utilização, com interface amigável e intuitiva no qual o usuário, que pode ser pessoas de qualquer faixa etária, que tenham por objetivo cifrar e decifrar mensagens, possa realizar a atividade com sucesso.


## Considerações técnicas

O projeto "caeser cipher" foi inteiramente desenvolvido em javascript, roda em apenas uma página html, a index, possui uma pequena estrutura css que define questões como fonte utilizada e estilos dos botões.
A página roda em todos os navegadores. 

## Estrutura da aplicação

Página web que roda em div única para melhor experiencia do usuario composto por:
>> breve descrição do página
>> campo alfanumérico para inserir texto a ser processado
>> campo numérico para inserir deslocamento escolhido, por se tratar de campo numérico o mesmo não aceita demais tipos de entrada a não ser números.
>> três botões (cifrar, decifrar e copiar texto)
>> campo no qual mostra o resultado do processamento escolhido

![caeser-cipher](https://github.com/marquelly/caesar-cipher/blob/master/Estrutura%20da%20pagina%20em%20diagrama%20de%20blocos.jpeg)

## Experiência do usuário

Página intuitiva na qual consiste em div única na qual o usuário insere a mensagem, o deslocamento e escolhe entre cifrar ou decifrar a mensagem em questão, logo em seguida é possível copiar a mensagem resultante através de botão "copiar texto".

## Considerações gerais

- O programa em questão cifra apenas letras do alfabeto comum, ou seja, de A a Z
- A entrada poderá ser realizada por letras maiúsculas ou minúsculas
- O valor do deslocamento deverá ser sempre positivo
- Caso seja inserido o valor 0, não haverá alteração na frase em questão uma vez que não ocorre o deslocamento do alfabeto
- Necessário que seja sempre informada a chave de deslocamento, ainda que passe a mensagem para uma outra pessoa, pois caso seja inserido um valor de deslocamento incorreto, a mensagem final não será correta
