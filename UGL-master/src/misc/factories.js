App.factory('dataFactory', function ($http) {
    var service = {};
    // var list = "ScoreCardPOCList";
    var baseUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getByTitle('";
    baseUrl += list + "')/items?$top=5000";
    var headers = { "Accept": "application/json;odata=verbose" };
    return $http({
        method: 'GET',
        url: baseUrl,
        headers: headers
    });

})

    .factory('portOpen', function () {
        return function (project) {
            $scope.projectESR = getGraphData([project]);
            $scope.$parent.project = project;
            $uibModal.open({
                scope: $scope,
                templateUrl: '../siteassets/ESR-Suite/h-esrSlide.html'
            });
        }
    })
    .factory('landingFactory', function ($http) {
        var service = {};
        var list = "esrLanding";
        var baseUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getByTitle('";
        baseUrl += list + "')/items?$top=5000";
        var headers = { "Accept": "application/json;odata=verbose" };
        return $http({
            method: 'GET',
            url: baseUrl,
            headers: headers
        });
    })
    .factory('test', function ($http) {
        var baseUrl = "https://parashare.app.parallon.com/_api/web/lists/getByTitle('ItemRequests')/items(9)";
        var headers = { "Accept": "application/json;odata=verbose" };
        return $http({
            method: 'GET',
            url: baseUrl,
            headers: headers
        });
    })

    .factory('contactFunctions', function($http){
        return;
    })