"use strict"

angular
    .module("blocitoff")
    .directive("hideExpired", ["TasksService",
        function (TasksService)
        {
            return {
                link: function (scope, element, attributes)
                {
                    var creationDate    = new Date(scope.item.createdAt),
                        currentDate     = new Date(),
                        milisecondsDiff = currentDate - creationDate,
                        daysDiff        = milisecondsDiff / 604800000; // 7days in miliseconds
                        // minutesDiff     = milisecondsDiff/60000;

                        if (daysDiff > 7)
                        {
                            element[0].hidden  = true;
                            scope.item.expired = true;
                            TasksService.list.$save(scope.item)
                        }
                }
            };
        }
    ]);
