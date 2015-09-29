'use strict';


myApp.controller('MainController', function ($scope) {

    if (!window.localStorage) {
        alert("Your web browser needs updating.");
    } else {
        loadToDo();
    }

    function loadToDo() {
        $scope.saveTask = localStorage.getItem("ball0133");

        if (localStorage.getItem("ball0133") !== null) {
            //if there's something in local storage, get the value
            $scope.tasks = JSON.parse($scope.saveTask);
        } else {
            //if there's not something in local storage, set these values
            $scope.tasks = [
                {
                    taskName: "Learn Angular JS",

                    },
                {
                    taskName: "Get an A+",

                    },
                {
                    taskName: "Find a Job",

                    }
    ];
        }
        localStorage.setItem("ball0133", JSON.stringify($scope.tasks));


        $scope.submitForm = function () {

            if ($scope.userInput.$valid) {
                $scope.tasks.push({
                    taskName: $scope.newTask
                });
                $scope.newTask = "";
                localStorage.setItem("ball0133", JSON.stringify($scope.tasks));
            };
        };

        $scope.deleteTask = function (index) {
            $scope.tasks.splice(index, 1);
            localStorage.removeItem("ball0133", JSON.stringify($scope.tasks));
        };



        $scope.$watch('tasks', function (newValue, oldValue) {
            localStorage.setItem("ball0133", JSON.stringify(newValue))
        }, true)
    }

});