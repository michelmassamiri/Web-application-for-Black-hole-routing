// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app

//Home root
Router.route('/', {
    name: 'Home',
    template: 'App_home'
});

Router.configure({
    layoutTemplate: 'App_body',
    notFoundTemplate: 'App_notFound',
});