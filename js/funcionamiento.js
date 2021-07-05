window.addEventListener('camera-init', (data) => {
    console.log('camera-init', data);
})

window.addEventListener('camera-error', (error) => {
    console.log('camera-error', error);
})

AFRAME.registerComponent('registerevents', {
    init: function () {
        var marker = this.el;
        var info = document.getElementById('info-button');
        let infoV = document.getElementById('infoV');
        var myAdd;
        var myImg;
        var mySound;

        marker.addEventListener('markerFound', function() {

            var markerId = marker.id;

            myAdd = info.getElementsByTagName('a')[0]; //dirección de nueva pagina.
            myImg = myAdd.getElementsByTagName('input')[0]; // imagen de info.

            if(markerId === "3000" || markerId === "4000")
            {
                mySound = marker.object3D.children[0].el.components.sound;
                marker.addEventListener('click',  function(){
                    if(marker.object3D.visible)
                    {
                        mySound.stopSound();
                        mySound.playSound();
                    }
                })
            }

            switch(markerId)
            {
                case '3000':
                case '4000':
                    infoV.innerHTML = 'KULTRUN';
                    myAdd.setAttribute("href","https://norbertolarrosa.github.io/app/kultrum");
                    break;
                case '3100':
                case '4100':
                    infoV.innerHTML = 'VASIJA';
                    myAdd.setAttribute("href","https://norbertolarrosa.github.io/app/vasija");
                    break;
                case '3200':
                case '4200':
                    infoV.innerHTML = 'HACHA';
                    myAdd.setAttribute("href","https://norbertolarrosa.github.io/app/hacha");
                    break;
                case '3300':
                case '4300':
                    infoV.innerHTML = 'MOLINO';
                    myAdd.setAttribute("href","https://norbertolarrosa.github.io/app/molino");
                    break;
                case '3400':
                case '4400':
                    infoV.innerHTML = 'PINTURA';
                    myAdd.setAttribute("href","https://norbertolarrosa.github.io/app/pintura");
                    break;
                case '3500':
                case '4500':
                    infoV.innerHTML = 'PIPA';
                    myAdd.setAttribute("href","https://norbertolarrosa.github.io/app/pipa");
                    break;
                case '3600':
                case '4600':
                    infoV.innerHTML = 'PUNTAS DE FLECHA';
                    myAdd.setAttribute("href","https://norbertolarrosa.github.io/app/puntas");
                    break;
                case '3700':
                case '4700':
                    infoV.innerHTML = 'TAPAHUE';
                    myAdd.setAttribute("href","https://norbertolarrosa.github.io/app/tapahue");
                    break;

            }
            
            myImg.setAttribute("src","/imagenes/info.png");
            
            console.log('Marcador Encontrado');
            // TODO: Add your own code here to react to the marker being found.
        });

        marker.addEventListener('markerLost', function() {
            var markerId = marker.id;
            console.log('Marcador perdido', markerId);

            myAdd.setAttribute("href","#");
            myImg.setAttribute("src","/imagenes/logo2.png");

            infoV.innerHTML = '----------';
        });
    }
});
