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
                    "expired"     : false,
                    "completed"   : false
                });
            };

            TasksService.checkExpired = function (task)
            {
                var creationDate    = new Date(task.createdAt),
                    currentDate     = new Date(),
                    milisecondsDiff = currentDate - creationDate,
                    daysDiff        = milisecondsDiff / 604800000; // 7days in miliseconds
                    // minutesDiff     = milisecondsDiff/60000;
                    if (daysDiff > 7)
                    {
                        task.expired = false;
                        list.$save(task)
                    }
            }

            TasksService.toggleComplete = function (task)
            {
                list.$save(task);
            };

            TasksService.list = list;

            return TasksService;
        }
    ]);
