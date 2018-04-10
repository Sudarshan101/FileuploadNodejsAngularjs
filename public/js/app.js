var app = angular.module('UiRouting', ['ui.router', 'ngFileUpload', 'APIModule', 'home.controllers', 'About.controllers', 'Contact.controllers']);


app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/header/home');
    $stateProvider
 	.state('header', {
	    url: '/header',
	    abstract: true,
	    templateUrl: 'pages/header.html'
    })
	.state('header.home', {
	    url: '/home',
	    views: {
	      'container': {
	        templateUrl: 'pages/home.html',
	        controller: 'HomeCtrl'
	      }
	    }
	})
	.state('header.about', {
	    url: '/about',
	    views: {
	      'container': {
	        templateUrl: 'pages/about.html',
	        controller: 'AboutCtrl'
	      }
	    }
	})
	.state('header.contact', {
	    url: '/contact',
	    views: {
	      'container': {
	        templateUrl: 'pages/contact.html',
	        controller: 'ContactCtrl'
	      }
	    }
	});
});
