(function () {
    'use strict';

    angular
        .module('app')
        //.controller('patient', patient)
        .controller('patientAddCtrl', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
            $scope.createPatient = function (patient) {
                dataService.addPatient(patient).then(function () {
                    toastr.success('Patient created successfully');
                    $location.path('/');
                }, function () {
                    toastr.error('Error in creating patient');
                });
            };
        }])
        .controller('patientEditCtrl', ['$scope', '$routeParams', '$location', 'dataService', function ($scope, $routeParams, $location, dataService) {
            $scope.patient = {};

            dataService.getPatientById($routeParams.id).then(function (result) {
                $scope.patient = result;
            }, function () {
                toastr.error('Error in fetching patient with Id: ' + $routeParams.id);
            });
        }]);
})();
