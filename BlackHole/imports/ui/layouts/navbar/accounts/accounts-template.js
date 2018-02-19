import './accounts-template.html';

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Template } from 'meteor/templating';
import { check } from 'meteor/check';

Template.sign_in.helpers({
    showUsername() {
        return Meteor.user().profile.name;
    }
});



Template.sign_in.events({
   'submit #login-nav'(event, template) {
      event.preventDefault();

      let email = template.find('#email-login').value;
      let password = template.find('#password-login').value;

      Meteor.loginWithPassword(email, password, function(error){
         if(error) {
             alert(error.reason);
         }
      });
   },

    'submit #logout'(event) {
        event.preventDefault();

        Meteor.logout();
    }
});

Template.sign_up.events({
    'submit #sign-up'(event, template) {
        event.preventDefault();

        let name = template.find('#name').value;
        let email = template.find('#email').value;
        let username = template.find('#username').value;
        let password = template.find('#password').value;
        let password_verif = template.find('#confirm').value;

        //TODO:check the inserted values
         check(password, String);
         check(password_verif, String);
         check(name, String);
         check(username, String);
        if(password !== password_verif) {
            alert("Le mot de passe n'est pas le même, veuillez reconfirmer votre de mot de passe");
            return false;
        }


        Accounts.createUser({
            username: username,
            email: email,
            password: password,
            profile: {
                name,
            }
        }, function(error){
            if(error)
                console.log("Failed");
            else {
                //console.log("Success loged in");
                Router.go('Home');
            }
        });

    },
});
