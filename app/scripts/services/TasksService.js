"use strict"

angular
    .module("blocitoff")
    .service("TasksService", ["$firebaseArray",
        function ($firebaseArray, $filter)
        {
            var TasksService = {},
                ref         = firebase.database().ref(),
                list        = $firebaseArray(ref);

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

            TasksService.expireTask = function (taskRecord)
            {
                console.log(taskRecord)

                var currentDate = new Date(),
                    milisecondsDiff = currentDate - new Date(taskRecord.createdAt),
                    daysDiff        = milisecondsDiff/604800000;
                    // minutesDiff     = milisecondsDiff/60000;

                    if (daysDiff > 7)
                    {
                        taskRecord.expired = true;
                        list.$save(taskRecord);
                    }
            }

            TasksService.list = list;

            return TasksService;
        }
    ]);
