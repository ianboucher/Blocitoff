"use strict"

angular
    .module("blocitoff")
    .service("TasksService", ["$firebaseArray",
        function ($firebaseArray, $filter)
        {
            var TasksService = {},
                ref          = firebase.database().ref(),
                list         = $firebaseArray(ref);

            TasksService.addTask = function (taskData)
            {
                list.$add(
                {
                    "title"       : taskData.title,
                    "description" : taskData.description,
                    "createdAt"   : new Date().toString(),
                    "expired"     : false
                });
            };

            TasksService.list = list;

            return TasksService;
        }
    ]);
