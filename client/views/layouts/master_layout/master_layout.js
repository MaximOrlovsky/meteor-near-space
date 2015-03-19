/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.MasterLayout.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
    'click a.planet' : function (e, tmpl) {

        var headerTitle = document.querySelector('.content header h1'),
            headerContainer = document.querySelector('.content header'),
            activeBg = e.target.getAttribute('data-map');
            headerBgDefault = 'transparent',
            headerBg = '';

        clickPlanet = true;

        console.log(activeBg);
        console.log(e.target);

        classie.add(headerTitle, 'animated');
        classie.add(headerTitle, 'fadeOutUp');

        if ( activeBg ) {
            headerContainer.style.backgroundImage = 'url('+activeBg+')';
        }

        clickPlanetInterval = setInterval(function(){
            clickPlanet = false;

            //headerContainer.style.backgroundImage = 'none';
            clearInterval(clickPlanetInterval);

        }, 750);

    }
});

Template.MasterLayout.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* MasterLayout: Lifecycle Hooks */
/*****************************************************************************/
Template.MasterLayout.created = function () {


};

Template.MasterLayout.rendered = function () {


    var clickIndirection = false;
    var clickPlanet = false;
    var clickIndirectionInterval, clickPlanetInterval;
/*
    console.log( document.querySelector('a.planet'));

//    document.querySelectorAll('a.menu').addEventListener( 'click', onLinkMenuClick, false );
    document.querySelectorAll('a.planet').addEventListener( 'click', onPlanetClick, false );
    //document.querySelector('a.planet-close').addEventListener( 'click', onPlanetCloseClick, false );

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
*/

};

Template.MasterLayout.destroyed = function () {
};