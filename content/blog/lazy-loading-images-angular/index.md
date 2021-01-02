---
title: Lazy Loading de Imagens com Angular
date: "2020-09-16T10:31:03.284Z"
description: "Lazy Loading de Imagens com Angular"
---

Todos nós adoramos ver imagens e gifs na internet, certo? E estamos usando a internet cada vez mais para nos conectarmos com pessoas e conhecimentos. Pra garantir que a experiência de seu/sua cliente seja boa, uma ótima coisa é usar estratégia de Lazy Loading nas suas imagens.

Basicamente, é você dizer ao navegador para baixar a imagem somente quando ela estiver <b>visível</b>, e isso pode otimizar MUITO o carregamento da sua página.

Observe o que acontece ao acessar o Pinterest monitorando o tráfego de rede:

<video autoplay loop style="width:100%">
  <source src="./pinterest-image-lazy-loading.mov" type="video/mp4">
</video>
<br>
<br>
Conforme navegamos na página e passamos a ver mais imagens, elas são transferidas dos servidores da rede social da Califórnia para a máquina.

Isso ajuda muito para que o carregamento inicial do seu site seja mais rápido, já que só é necessário que seja baixado aquilo que é visível no início. 

Existem duas boas formas de aplicar essa estratégia, uma é através do atributo loading disponível dede o ano passado para Chrome, Edge e Firefox: 

```html
<img loading="lazy" src="https://placekitten.com/400/400">
```

Outra abordagem é a Intersection Observer API, que eatá disponível para tds navegadores e, no momento desse post, mais otimizada do que o atributo nativo. Em termos gerais, essa API dos navegadores possibilita que nossa Web App seja notificada quando um elemento em específico adentrar a visão da pessoa, sendo possível assim tomar ações como efetuar o carregamento da imagem. Para isso, basta fazer o seguinte: 

Trocamos o atributo src para data-src, evitando que a imagem seja baixada assim que o html é renderizado pela página:

```html
<img data-src="'https://placekitten.com/400/400'">
```

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

Pronto! Assim, a imagem somente será carregada quando entrar no viewport do dispositivo, tornando o carregamento da imagem mais inteligente.


Mas tem um ponto com essa abordagem, ela aplica a mesma estratégia pra todas imagens, e isso não deveria ser feito. Existem imagens que você sabe que serão visíveis inicialmente, como o cabeçalho da página. Estas não precisam ser carregadas com Lazy Loading. Também se seu produto se preocupa com SEO, deve disponibilizar as imagens para os bots dos buscadores para que suas imagens sejam indexadas. Assim, podemos usar o poder do Angular pra nos ajudar com essas tarefas:

```html
<img [appLazyLoad]="'https://placekitten.com/400/400'">
```

```js
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class ImageLazyLoadingDirective implements OnInit {
  @Input() appLazyLoad: string;

  private nativeElement: HTMLImageElement;

  constructor(
    private elementRef: ElementRef<HTMLImageElement>,
  ) {
    this.nativeElement = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.setIntersectionObserver();
  }

  setIntersectionObserver() {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.nativeElement.setAttribute('src', this.appLazyLoad);
          observer.disconnect();
        }
      });
    });

    io.observe(this.nativeElement);
  }
}
```

Com essa diretiva, é possível escolher quais imagens você quer aplicar Lazy Loading, e também é possível desligar o lazy por alguma condição da necessidade do seu produto.

Vejam um exemplo funcionando no [Stackblitz](https://stackblitz.com/edit/image-lazy-load?file=src/app/app.component.ts)!

É legal ver a web cada vez mais moderna e eficiente. 😀

Por hoje era isso, valeu!