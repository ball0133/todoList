'use strict';


myApp.controller('ThirdController', function ($scope) {

    if (!window.localStorage) {
        alert("Your web browser needs updating.");
    } else {
        loadToDo();
    }

    function loadToDo() {
        $scope.saveTask3 = localStorage.getItem("ball0133-3");

        if (localStorage.getItem("ball0133-3") !== null) {
            //if there's something in local storage, get the value
            $scope.tasks3 = JSON.parse($scope.saveTask3);
        } else {
            //if there's not something in local storage, set these values
            $scope.tasks3 = [
                {
                    taskName: "Groceries"

                    },
                {
                    taskName: "Bake cookies"
                }
    ];
        }
        localStorage.setItem("ball0133-3", JSON.stringify($scope.tasks3));


        $scope.submitForm = function () {

            if ($scope.userInput.$valid) {
                $scope.tasks3.push({
                    taskName: $scope.newTask
                });
                $scope.newTask = "";
                localStorage.setItem("ball0133-3", JSON.stringify($scope.tasks3));
            };
        };

        $scope.deleteTask = function (index) {
            $scope.tasks3.splice(index, 1);
            localStorage.removeItem("ball0133-3", JSON.stringify($scope.tasks3));
        };

        $scope.$watch('tasks3', function (newValue, oldValue) {
            localStorage.setItem("ball0133-3", JSON.stringify(newValue))
        }, true)
    }

});