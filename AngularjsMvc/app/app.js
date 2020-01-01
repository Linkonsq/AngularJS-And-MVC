(function () {
    'use strict';

    angular
        .module('app', [
            'ngRoute'
        ])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');

            $routeProvider
                .when('/', {
                    controller: 'userCtrl',
                    templateUrl: '/app/templates/user.html'
                })
                .when('/editUser/:id', {
                    controller: 'userEditCtrl',
                    templateUrl: '/app/templates/userEdit.html'
                })
                .when('/addUser', {
                    controller: 'userAddCtrl',
                    templateUrl: '/app/templates/userAdd.html'
                })
                .when('/addDoctor', {
                    controller: 'doctorAddCtrl',
                    templateUrl: '/app/templates/doctor.html'
                })
                .when('/addPatient', {
                    controller: 'patientAddCtrl',
                    templateUrl: '/app/templates/patient.html'
                })
                .when('/editPatient/:id', {
                    controller: 'patientEditCtrl',
                    templateUrl: '/app/templates/patientEdit.html'
                })
                .when('/admin', {
                    controller: 'adminCtrl',
                    templateUrl: '/app/templates/admin.html'
                })
                .otherwise({ redirectTo: '/' });
        }]);
})();