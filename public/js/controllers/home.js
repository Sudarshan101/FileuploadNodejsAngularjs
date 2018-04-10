angular.module('home.controllers', [])

.controller('HomeCtrl', function($scope, APIService, Upload) {
 	$scope.ImagePath = [];
    $scope.multipalupload = function(file) {
        file.upload = Upload.upload({
            url:  'http://localhost:9000/api/uploadPhotos',
            arrayKey: '',
            data: {
                file: file
            }
        });

        file.upload.then(function(response) {
            console.log(response);
            if (response.data) {
                angular.forEach(response.data, function(item) {
                	console.log(item);
                    $scope.ImagePath.push(item.path);
                    console.log($scope.ImagePath);
                });
            }
        }, function(response) {
            if (response.status > 0)
                $scope.errorMsg = response.status + ': ' + response.data;
        }, function(evt) {
            // Math.min is to fix IE which reports 200% sometimes
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });
    };
    $scope.image = '';
    $scope.uploadPhoto = function(file) {
        file.upload = Upload.upload({
            url:  'http://localhost:9000/api/uploadPhoto',
            data: {
                file: file[0]
            }
        });

        file.upload.then(function(response) {
            console.log(response);
            $scope.image = response.data.path;
        }, function(response) {
            if (response.status > 0)
                $scope.errorMsg = response.status + ': ' + response.data;
        }, function(evt) {
            // Math.min is to fix IE which reports 200% sometimes
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });
    };
})