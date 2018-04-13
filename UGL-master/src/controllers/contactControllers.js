App.controller('NewContactController', function ($scope, $http, $route, $location, $sce, $filter, $uibModal, $rootScope, $routeParams) {
    $scope.showDeets = false;
    //$scope.projectDetails = function () {
    if (!!$routeParams.id) {
        $scope.$parent.route = {};
        $scope.$parent.route.id = $routeParams.id;
        $scope.$parent.thisProject = $filter('filter')($scope.projects, { Dept: (!!$routeParams.id || undefined) && $routeParams.id });
        $scope.$parent.showDeets = true;
    }
    //}

    $scope.contacts = createContacts();
    $scope.orgs = createContacts();
    console.log($scope.contacts);
    $scope.createContact = function (contact) {
        var stop = 'stop';
    }

})
    .controller('OrganizationsController', function ($scope, $http, $route, $location, $sce, $filter, $uibModal, $rootScope,
        $routeParams) {
        $scope.orgs = createContacts();
        $scope.contactInfo = function (selection) {
            $scope.thisContact = selection;
        }
        $scope.contactType = "Org";
        $scope.openModal = function () {
            $uibModal.open({
                scope: $scope,
                templateUrl: '../src/templates/newContact.html',
                windowClass: 'app-modal-window'
            });
        }
    })
    .controller('ContactsController', function ($scope, $http, $route, $location, $sce, $filter, $uibModal, $rootScope,
        $routeParams) {
        $scope.contacts = createContacts();
        console.log($scope.contacts);

        $scope.contactInfo = function (selection) {
            $scope.thisContact = selection;
        }
        $scope.contactType = "Contact";
        $scope.openModal = function () {
            $uibModal.open({
                scope: $scope,
                templateUrl: '../src/templates/dispContact.html',
                windowClass: 'app-modal-window'
            });
        }

    })