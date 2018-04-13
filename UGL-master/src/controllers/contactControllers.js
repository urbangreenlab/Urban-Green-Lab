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
        $routeParams, ContactFactory) {
        //Need to replace the arrays below with filtered results from the REST object
        $scope.programFilter = [{ Name: 'PR-One', Value: 'Hey 1' }, { Name: 'PR-two', Value: 'Hey 2' }, { Name: 'PR-three', Value: 'Hey 3' }];
        $scope.orgFilter = ['ORG-One', 'ORG-Two', 'ORG-Three'];
        $scope.typeFilter = ['Type-One', 'Type-Two', 'Type-Three'];
        $scope.volunteerFilter = ['Yes', 'No'];


        $scope.contacts = [];//createContacts();
        ContactFactory.getContacts()
            .then(data => {
                $scope.contacts = data.ContactPeson;
                console.log($scope.contacts);

            });
        $scope.getContacts = function (allContacts) {
            if (!!allContacts) {
                $.each(allContacts, function (a) { allContacts[a].fullName = allContacts[a].First_Name + " " + allContacts[a].Last_Name });
                // currentContacts = [];
                // lastContacts = $filter('filter')(allContacts,( { Last_Name: (!!$scope.search || undefined) && $scope.search }));
                // firstContacts = $filter('filter')(allContacts, { First_Name: (!!$scope.search || undefined) && $scope.search });
                // currentContacts.push(lastContacts);
                // currentContacts.push(firstContacts);
                // contacts = $filter('filter')(contacts, (!!$scope.search || undefined) && $scope.search);

                contacts = $filter('filter')(allContacts, (!!$scope.selection.type || undefined) && $scope.selection.type);
                contacts = $filter('filter')(contacts, { fullName: (!!$scope.search || undefined) && $scope.search });
                contacts = $filter('filter')(contacts, (!!$scope.selection.org || undefined) && $scope.selection.org);
                contacts = $filter('filter')(contacts, (!!$scope.selection.volunteer || undefined) && $scope.selection.volunteer);
                contacts = $filter('filter')(contacts, (!!$scope.selection.program || undefined) && $scope.selection.program);
                return contacts;
            }
        }
        console.log($scope.contacts);

        $scope.contactInfo = function (selection) {
            $scope.thisContact = selection;
        }
        $scope.contactType = "Contact";
        $scope.openModal = function (param, contact) {
            var page = "";
            switch (param) {
                case 'New':
                    page = 'newContact.html';
                    break;
                case 'Edit':
                    page = 'editContact.html';
                    $scope.thisContact = contact;
                    break;
            }
            $uibModal.open({
                scope: $scope,
                templateUrl: '../src/templates/' + page,
                windowClass: 'app-modal-window'
            });
        }

    })