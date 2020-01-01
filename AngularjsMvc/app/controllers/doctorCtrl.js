(function () {
    'use strict';

    angular
        .module('app')
        //.controller('doctorCtrl', doctorCtrl)
        .controller('doctorAddCtrl', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
            $scope.createDoctor = function (doctor) {
                dataService.addDoctor(doctor).then(function () {
                    toastr.success('Doctor created successfully');
                    $location.path('/');
                }, function () {
                    toastr.error('Error in creating doctor');
                });
            };
        }]);
})();
