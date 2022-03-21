---
title: Controlando o carregamento de imagens com Lazy Loading
date: "2020-09-16T10:31:03.284Z"
description: "Pensando em como as imagens são entregues as pessoas acessando seu site"
---

Todas nós adoramos ver imagens e gifs na internet. E estamos cada vez mais nos conectando com coisas e pessoas que amamos através da internet. Então para garantir que a experiência das pessoas ao acessarem seu site será agradável, você precisa pensar sobre como esse conteúdo será entregue. Para tornar a experiência inicial suave, deve-se considerar a estratégia de carregamento lento, do inglês lazy loading strategy.

Com essa estratégia, nós iremos fazer com que o navegador da pessoa utilizando seu site apenas baixe a imagem quando a mesma adentrar o campo de visão, otimizando assim o tempo inicial de carregamento.

Observe o que acontece à rede do navegador ao acessar o Pinterest, a rede social de imagens:

<video autoplay loop style="width:100%">
  <source src="./pinterest-image-lazy-loading.mov" type="video/mp4">
</video>
<br>
<br>
Conforme navegamos e mais imagens adentram o campo de visão, estas são baixadas dos servidores da rede social na California (ou um servidor próximo a você, se uma CDN for utilizada para uma entrega inteligente) à sua maquina.
As we navigate and see more images, they are downloaded from the social network servers in California (or a server close to you, if they use a CDN to have a smart delivery) to our machine.

Isso ajuda grandemente a tornar o carregamento inicial mais rápido, pois apenas imagens visíveis serão baixadas a cada momento.

Existem duas boas formas de aplicar essa estratégia. Uma é através do atributo `loading` disponível desde 2019 (apenas para Chrome, Firefox e Edge):

```html
<img loading="lazy" src="https://placekitten.com/400/400">
```

Outra forma de se habilitar a estratégia de Lazy Loading é através da Intersection Observer API (disponível para os principais navegadores). Esta API (Interface de Aplicação Programável) dispara eventos JavaScript sempre que um elemento observado entra na tela da pessoa, e através destes eventos você pode criar uma reação em sua App como animá-la, a tornando mais responsiva às ações. Vejamos como utilizar esta API para sermos notificados quando a imagem adentrar o campo de visão.

Nós podemos alterar o atributo `src`, o modificando para `data-src` (mais sobre atributos data [aqui](https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Howto/Use_data_attributes)), assim mantemos o valor do endereço da imagem porém não passamos este como instrução ao navegador para que baixe a imagem.

E então nós definimos o atributo `src` quando a imagem adentrar ao compo de visão:

```js
const images = document.querySelectorAll('img');

const lazyLoad = target => {
  console.log(target);
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const src = target.dataset.src;
        target.setAttribute('src', src);
      }
    });
    observer.disconnect();
  });
  io.observe(target);
};

images.forEach(lazyLoad);
```

Pronto! Agora as pessoas que você atende com seu site não baixarão todas imagens que não conseguem visualizar, melhorando assim o tempo de carregamento inicial.

Para deixar a experiência mais agradável, pode-se aplicar uma animação para evitar que a imagem pisque e apareça repentinamente, preferindo uma atualização mais suave.