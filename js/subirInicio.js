function subir(y){
    if(y<=0) return;
    window.scroll(0,0);
    //k = y-100;
    //setInterval("subir(k)",10);
}

window.onscroll = function () {
    if (pageYOffset >= 500) {
        document.getElementById('botonSubida').style.visibility = "visible";
        document.getElementById('botonSubida').style.opacity = 1;
    } else {
        document.getElementById('botonSubida').style.visibility = "hidden";
        document.getElementById('botonSubida').style.opacity = 0;
    }
};