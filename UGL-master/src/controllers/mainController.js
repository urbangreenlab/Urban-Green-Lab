App.controller('MainController', function ($scope, $http, $routeParams, $location, $sce, $filter, $uibModal, $rootScope) {
    var project = {
        Name: "",
        Dept: "",
        OpEx: 0,
        CapEx: 0
    }
    $scope.progRelations = ['Sponsor', 'Donor', 'Other'];
    $scope.projects = [];
    $scope.prefixes = ['Mr.', 'Mrs.', 'Miss', 'Dr.'];

    var numProjects = 10;
    for (var p = 0; p < numProjects; p++) {
        var thisProject = angular.copy(project);
        thisProject.Name = "Project " + p;
        thisProject.Dept = p;
        thisProject.OpEx = (842 * p);
        thisProject.CapEx = (435 * p);

        $scope.projects.push(thisProject);
    };
    //        $scope.thisProject = $filter('filter')($scope.projects,{Dept: (!!$routeParams.id || undefined) && $routeParams.id});

    //getProjectByID($scope.projects, $routeParams.id);
    $scope.ready = true;
})
