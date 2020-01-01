(function () {
    'use strict';

    angular
        .module('app')
        .controller('adminCtrl', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
            $scope.doctors = [];
            $scope.patients = [];

            getDoctorData();
            getPatientData();

            function getDoctorData() {
                dataService.getDoctors().then(function (result) {
                    $scope.doctors = result;
                });
            }

            function getPatientData() {
                dataService.getPatients().then(function (result) {
                    $scope.patients = result;
                });
            }
        }]);
})();
