"use strict"

angular
    .module("blocitoff")
    .controller("TasksCtrl", ["$scope", "TasksService",
        function ($scope, TasksService)
        {
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
