"use strict";

angular
    .module("blocitoff")
    .controller("CurrentTasksCtrl", ["$scope", "TasksService",
        function CurrentTasksCtrl($scope, TasksService)
        {
            this.priorityOptions = [
                {"value" : 1, "name" : "High"},
                {"value" : 2, "name" : "Medium"},
                {"value" : 3, "name" : "Low"}
            ]; // Why do these "values" get stored as strings?

            this.list = TasksService.list;

            TasksService.checkExpired();

            this.addTask = function(taskData)
            {
                TasksService.addTask(taskData);
                $scope.taskData = {}; // Reset form. Do I need a Promise/callback here?
            };

            this.toggleComplete = function(task)
            {
                TasksService.toggleComplete(task);
            };
        }
    ]);
