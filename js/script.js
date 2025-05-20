document.addEventListener('DOMContentLoaded', () => { //Função em seta: Nova maneira de programar, se acostume
    const nav_menuBtn = document.querySelector('.btn_burgerMenu'); //Atribui na variávelo valor da classe
    const nav_sideMenu = document.querySelector('.nav_sideMenu');
    const overlay = document.querySelector('.overlay');

    const toggleMenu = () => {  //Atribuindo uma função a uma variável
        nav_menuBtn.classList.toggle('ativo'); //Método .classList.toggle() serve para mudar a classe no CSS
        nav_sideMenu.classList.toggle('ativo');  
        //.toggle() Verifica se tem a classe, se não adiciona, se sim, remove
        overlay.classList.toggle('ativo');
    };

    nav_menuBtn.addEventListener('click', toggleMenu);//Agora se apertar no botão, vai levar até a função de adicionar/remover a classe 'ativo'

    document.addEventListener('click', (e) => {
        if(!nav_menuBtn.contains(e.target)  //Verifica se o botão NÃO recebeu uma ação(click) do mouse pelo variável 'e'. Vê se ele não foi alvejado
        && !nav_sideMenu.contains(e.target)) {
            nav_menuBtn.classList.remove('ativo');
            nav_sideMenu.classList.remove('ativo');
            overlay.classList.remove('ativo');
        }
    });
});
