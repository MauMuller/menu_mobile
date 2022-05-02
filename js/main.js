{
    "use strict";

    const menu = document.querySelector("div#menu-mobile");
    const spans_menu = document.querySelectorAll("div#menu-mobile span");
    let bool_menu=true; //CONDIÇÃO PARA ATIVAR OU DESATIVAR A ANIMAÇÃO

    menu.addEventListener('click',()=>{
        //OPERAÇÃO TERNÁRIA PARA EXECUTAR AS ANIMAÇÕES OU NÃO
        bool_menu ? enabled_animation() : disabled_animation();

        // CONTINUAR SEU CÓDIGO AQUI!
    });

    const enabled_animation = () => { //FUNÇÃO PARA ATIVAR AS ANIMAÇÕES
        let cont_span=0;
        spans_menu.forEach((span,ind_span)=>{
            if(cont_span===ind_span){
                span.classList.remove(`span${ind_span}_disabled`);
                span.classList.add(`span${ind_span}_enabled`);
                cont_span++;
            }
        });
        bool_menu=false;
    };

    const disabled_animation = () => { //FUNÇÃO PARA DESATIVAR AS ANIMAÇÕES
        let cont_span=0;
        spans_menu.forEach((span,ind_span)=>{
            if(cont_span===ind_span){
                span.classList.remove(`span${ind_span}_enabled`);
                span.classList.add(`span${ind_span}_disabled`);
                cont_span++;
            }
        });
        bool_menu=true;
    };
}