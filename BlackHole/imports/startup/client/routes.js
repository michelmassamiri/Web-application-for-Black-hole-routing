// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/sign-up/sign-up.js';
// Set up all routes in the app

//Home root
Router.route('/', {
    name: 'Home',
    template: 'App_home'
});

//Authentication page
Router.route('/sign-up', {
   name: 'SignUp',
   template: 'Auth_page',
});

Router.configure({
    layoutTemplate: 'App_body',
    notFoundTemplate: 'App_notFound',
});