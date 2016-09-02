"use strict";

angular
    .module("blocitoff")
    .controller("ArchiveTasksCtrl", ["$scope", "TasksService",
        function ArchiveTasksCtrl($scope, TasksService)
        {
            this.list = TasksService.list;

            TasksService.checkExpired();

            this.toggleComplete = function(task)
            {
                TasksService.toggleComplete(task);
            };
        }
    ]);
