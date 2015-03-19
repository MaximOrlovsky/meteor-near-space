/**
 *
 */

;(function(window, document, undefined){

    'use strict';

    var startStarField = function(){

        var container, stats;
        var camera, scene, renderer, group, particle;
        var mouseX = 0, mouseY = 0;

        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;

        var StarField = {
            countStars : 750,

            init: function() {
                container = document.createElement( 'div' );
                container.id = 'container-div'
                document.body.appendChild( container );

                camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 3000 );
                camera.position.z = 1000;

                scene = new THREE.Scene();

                var PI2 = Math.PI * 2;
                var program = function ( context ) {

                    context.beginPath();
                    context.arc( 0, 0, 0.5, 0, PI2, true );
                    context.fill();

                }

                group = new THREE.Group();
                scene.add( group );

                for ( var i = 0; i < this.countStars; i++ ) {

                    var material = new THREE.SpriteCanvasMaterial( {
                        color: 0xffffff - (Math.random()*0x010101)/3,
                        program: program
                    } );

                    particle = new THREE.Sprite( material );
                    particle.position.x = Math.random() * 2000 - 1000;
                    particle.position.y = Math.random() * 2000 - 1000;
                    particle.position.z = Math.random() * 2000 - 1000;
                    particle.scale.x = particle.scale.y = Math.random() * 5 + 1;
                    group.add( particle );
                }


                renderer = new THREE.CanvasRenderer();
                renderer.setClearColor( 0x112233, 1 );
                renderer.setPixelRatio( window.devicePixelRatio );
                renderer.setSize( window.innerWidth, window.innerHeight );
                container.appendChild( renderer.domElement );

                document.addEventListener( 'mousemove', this.events.onDocumentMouseMove, false );
                document.addEventListener( 'touchstart', this.events.onDocumentTouchStart, false );
                document.addEventListener( 'touchmove', this.events.onDocumentTouchMove, false );

                window.addEventListener( 'resize', this.events.onWindowResize, false );

            },
            animate: function() {
                requestAnimationFrame( StarField.animate );
                StarField.render();
            },
            render: function() {
                camera.position.x += ( mouseX - camera.position.x ) * 0.05;
                camera.position.y += ( - mouseY - camera.position.y ) * 0.05;

                camera.lookAt( scene.position );

                if ( typeof clickPlanet !== 'undefined' && clickPlanet ) {
                    group.rotation.x -= 0.005;
//                    group.rotation.y -= 0.005;
                }
                else {
                    group.rotation.x += 0.00025;
                    group.rotation.y += 0.0005;
                }
                renderer.render( scene, camera );

            },


            events : {
                onWindowResize: function () {
                    windowHalfX = window.innerWidth / 2;
                    windowHalfY = window.innerHeight / 2;

                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();

                    renderer.setSize( window.innerWidth, window.innerHeight );
                },

                 onDocumentMouseMove: function( event ) {
                    mouseX = (event.clientX - windowHalfX)/10;
                    mouseY = (event.clientY - windowHalfY)/10;
                },

                 onDocumentTouchStart: function ( event ) {
                    if ( event.touches.length === 1 ) {

                        event.preventDefault();

                        mouseX = event.touches[ 0 ].pageX - windowHalfX;
                        mouseY = event.touches[ 0 ].pageY - windowHalfY;

                    }
                },

                onDocumentTouchMove: function( event ) {
                    if ( event.touches.length === 1 ) {
                        event.preventDefault();

                        mouseX = event.touches[ 0 ].pageX - windowHalfX;
                        mouseY = event.touches[ 0 ].pageY - windowHalfY;
                    }
                }

            } // /events
        };


        // ----------------

        StarField.init();
        StarField.animate();
}

    if (document.readyState != 'loading') {
        startStarField();
    } else {
        document.addEventListener('DOMContentLoaded', startStarField);
    }


})(window, document);

/*
var customThreeJsIsReady = function(){

var clickIndirection = false;
var clickIndirectionInterval, clickPlanetInterval;

function onLinkMenuClick(event){
    clickIndirection = true;
    clickIndirectionInterval = setInterval(function(){
        clickIndirection = false;
        clearInterval(clickIndirectionInterval);
    }, 750);
}

function onPlanetClick(event){
    console.log('planet-click');
    clickPlanet = true;

    addClass(document.querySelector('h1'), 'animated');
    addClass(document.querySelector('h1'), 'fadeOutUp');

    console.log(event.target.innerHTML);

    clickPlanetInterval = setInterval(function(){
        clickPlanet = false;
        clearInterval(clickPlanetInterval);
    }, 750);
}

function onPlanetCloseClick(event){
    clickPlanet = false;
}

/* **************************** */
/*
function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    }
    else {
        el.className += ' ' + className;
    }
}

function removeClass(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    }
    else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}

*/

//} // customThreeJsIsReady


/* ------------------------ */
// Run when document is ready

//if (document.readyState != 'loading') {
//    customThreeJsIsReady();
//} else {
//    document.addEventListener('DOMContentLoaded', customThreeJsIsReady);
//}

