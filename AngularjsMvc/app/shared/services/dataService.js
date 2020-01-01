(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataService', ['$http', '$q', function ($http, $q) {
            var service = {};

            service.getUsers = function () {
                var deferred = $q.defer();
                $http.get('/User/Index').then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.getUserById = function (id) {
                var deferred = $q.defer();
                $http.get('/User/Details/' + id).then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.editUser = function (user) {
                var deferred = $q.defer();

                $http.post('/User/Edit', user).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.addUser = function (user) {
                var deferred = $q.defer();

                $http.post('/User/Create', user).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.deleteUser = function (id) {
                var deferred = $q.defer();

                $http.post('/User/Delete', { id: id }).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            //Doctor Services
            service.getDoctors = function () {
                var deferred = $q.defer();
                $http.get('/Doctor/Index').then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.addDoctor = function (doctor) {
                var deferred = $q.defer();

                $http.post('/Doctor/Create', doctor).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;

                //var fd = new FormData();

                //for (var key in doctor)
                //    fd.append(key, doctor[key]);

                //$http.post('/Doctor/Create', fd, {
                //    transformRequest: angular.identity,
                //    headers: {'Content-Type': undefined}
                //});
            };

            //Patient Services
            service.getPatients = function () {
                var deferred = $q.defer();
                $http.get('/Patient/Index').then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.getPatientById = function (id) {
                var deferred = $q.defer();
                $http.get('/Patient/Details/' + id).then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.getPatientDocById = function (id) {
                var deferred = $q.defer();
                $http.get('/Patient/Edit/' + id).then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.addPatient = function (patient) {
                var deferred = $q.defer();

                $http.post('/Patient/Create', patient).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            //Admin Services

            return service;
        }]);
})();