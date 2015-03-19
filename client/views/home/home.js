/*****************************************************************************/
/* Home: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Home.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Home.helpers({
    planets: [
        {
            title: 'Mercury',
            slug: 'mercury',
            bg: 'red',
            map: '/img/planets-bg/mercurymap.jpg',
            description: 'This is the Mercury'
        },
        {
            title: 'Venus',
            slug: 'venus',
            bg: 'yellow',
            map: '/img/planets-bg/venusmap.jpg',
            description: 'This is the Venus'
        },
        {
            title: 'Earth',
            slug: 'earth',
            bg: 'blue',
            map: '/img/planets-bg/earthmap1k.jpg',
            description: 'This is the Earth'
        }
    ]
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {
};

Template.Home.destroyed = function () {
};
