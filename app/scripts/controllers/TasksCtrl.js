"use strict"

angular
    .module("blocitoff")
    .controller("TasksCtrl", ["$scope", "TasksService",
        function ($scope, TasksService)
        {
            this.tasksService = TasksService;
        }
    ]);
