App.controller('DetailsController', function($scope, $http, $routeParams, $location, $sce, $filter, $uibModal, $rootScope){
    if(!!$routeParams.id){
        $scope.route.id = $routeParams.id;
    }
    $scope.thisProject = $filter('filter')($scope.projects,{Dept: (!!$routeParams.id || undefined) && $routeParams.id});

});