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
                    "priority"    : taskData.priority,
                    "createdAt"   : new Date().toString(),
                    "expired"     : false,
                    "completed"   : false
                });
            };

            // Is calling on entire list in one hit an improvement?

            TasksService.checkExpired = function ()
            {
                var currentDate = new Date();

                list.$loaded().then(function()
                {
                    angular.forEach(list, function(task)
                    {
                        var creationDate    = new Date(task.createdAt),
                            milisecondsDiff = currentDate - creationDate,
                            daysDiff        = milisecondsDiff / 604800000; // 7days in miliseconds

                            if (daysDiff > 7)
                            {
                                task.expired = true;
                                list.$save(task)
                            }
                    });
                });
            };


            TasksService.toggleComplete = function (task)
            {
                list.$save(task);
            };

            TasksService.list = list;

            return TasksService;
        }
    ]);
