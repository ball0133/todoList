'use strict';


myApp.controller('SecondController', function ($scope) {

    if (!window.localStorage) {
        alert("Your web browser needs updating.");
    } else {
        loadToDo();
    }

    function loadToDo() {
        $scope.saveTask2 = localStorage.getItem("ball0133-2");

        if (localStorage.getItem("ball0133-2") !== null) {
            //if there's something in local storage, get the value
            $scope.tasks2 = JSON.parse($scope.saveTask2);
        } else {
            //if there's not something in local storage, set these values
            $scope.tasks2 = [
                {
                    taskName: "Dishes",

                    },
                {
                    taskName: "Go Shopping",

                    }
    ];
        }
        localStorage.setItem("ball0133-2", JSON.stringify($scope.tasks2));


        $scope.submitForm = function () {

            if ($scope.userInput.$valid) {
                $scope.tasks2.push({
                    taskName: $scope.newTask
                });
                $scope.newTask = "";
                localStorage.setItem("ball0133-2", JSON.stringify($scope.tasks2));
            };
        };

        $scope.deleteTask = function (index) {
            $scope.tasks2.splice(index, 1);
            localStorage.removeItem("ball0133-2", JSON.stringify($scope.tasks2));
        };

        $scope.$watch('tasks2', function (newValue, oldValue) {
            localStorage.setItem("ball0133-2", JSON.stringify(newValue))
        }, true)
    }

});