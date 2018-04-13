var list = "";
var App = angular.module('Urban',
    ['ngRoute', 'ui.bootstrap', 'chart.js', 'ngSanitize', 'ui.calendar'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/', {
                redirectTo: '/allOrganizations',
            })
            .when('/landing', {
                redirectTo: '/allContacts'
            })
            // .when('/landing', {
            //     templateUrl: '../src/templates/landing.html',
            //     controller: 'LandingController'
            // })
            .when('/allOrganizations', {
                templateUrl: '../src/templates/allOrganizations.html',
                controller: 'OrganizationsController'
            })
            .when('/editor', {
                templateUrl: '../src/templates/editor.html',
                controller: 'EditorController'
            })
            .when('/events', {
                templateUrl: '../src/templates/events.html',
                controller: 'EventController'
            })
            .when('/newContact', {
                //create new contact, ditto on Organization
                templateUrl: '../src/templates/newContact.html',
                controller: "NewContactController"
            })
            .when('/contactInfo/:id',{
                //view contact with edit option
                templateUrl: '../src/templates/contactInfo.html',
                controller: 'ContactInfoController'
            })
            .when('/newOrganization', {
                templateUrl: '../src/templates/newOrganization.html',
                controller: 'NewOrganizationController'
            })
            .when('/organizationInfo/:id',{
                templateUrl: '../src/templates/organizationInfo.html',
                controller: 'OrganizationInfoController'
            })
            
            .when('/allContacts',{
                templateUrl: '../src/templates/allContacts.html',
                controller: 'ContactsController'
            })
            .when('/allOrganizations',{
                templateUrl: '../src/templates/allOrganizations.html',
                controller: 'AllOrganizations'
            })
            .otherwise({
                redirectTo: '/landing'
            });
    })
    .directive('info', function () {
        return {
            // restrict: 'EA',
            // scope: {
            //     thisContact: '=data',
            //     //maybe use ng-switch based on mode edit/read/detailed/summary....???
            // },
            // transclude: true,
            // link: function (scope, element, attrs, ctrl, transclude) {
            //     transclude(scope, function (clone, scope) {
            //         element.append(clone);
            //     });
            // },
            templateUrl: '../src/templates/dispContact.html'
        }
    })
    .directive('project', function () {
        return {
            restrict: 'EA',
            scope: {
                data: '=data',
                //maybe use ng-switch based on mode edit/read/detailed/summary....???
                // mode: '=mode'
            },
            transclude: true,
            link: function (scope, element, attrs, ctrl, transclude) {
                transclude(scope, function (clone, scope) {
                    element.append(clone);
                });
            },
            templateUrl: '../src/templates/project.html'
        }
    })

    .run(['$route', '$location', function ($route, $location) {
        $route.reload();
    }]);
