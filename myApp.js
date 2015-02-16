angular.module('myApp', [])


    .controller('MyCtrl', function($scope) {
        $scope.femaleName='Female Name';
        $scope.jobTitle='Job Title';
        $scope.tediousTask='Tedious Task';
        $scope.dirtyTask='Dirty Task';
        $scope.celebrity='Celebrity';
        $scope.uselessSkill='Useless Skill';
        $scope.adjective='adjective';
        $scope.obnoxiuousCelbertity='Obnoxiuous Celbertity';
        $scope.hugeNumber='Huge Number';

        $scope.genders = [{
            label: 'Female'
        }, {
            label: 'Male'
        }];

        $scope.changed = function() {
            if ($scope.gender.label === 'Female') {
                $scope.firstPersion = 'her';
                $scope.secondPerson = 'she';
            } else {
                $scope.firstPersion = 'him';
                $scope.secondPerson = 'he';
            }
        }

    });