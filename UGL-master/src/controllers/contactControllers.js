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
        $scope.createContact = function(contact){
            var stop = 'stop';
        }

})
.controller('ContactInfoController', function (){});