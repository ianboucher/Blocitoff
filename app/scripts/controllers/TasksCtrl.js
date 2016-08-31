"use strict"

angular
    .module("blocitoff")
    .controller("TasksCtrl", ["$scope", "TasksService",
        function ($scope, TasksService)
        {
            this.options = [ "1. High", "2. Medium", "3. Low"]; // There must be a better way...

            this.list = TasksService.list;

            TasksService.checkExpired();

            this.addTask = function (taskData)
            {
                TasksService.addTask (taskData);
            };

            this.toggleComplete = function (task)
            {
                TasksService.toggleComplete (task)
            }
        }
    ]);
