"use strict"

angular
    .module("blocitoff")
    .directive("hideExpired", ["TasksService",
        function (TasksService)
        {
            return {
                link: function (scope, element, attributes)
                {
                    TasksService.checkExpired(scope.item)

                        if (scope.item.expired)
                        {
                            element[0].hidden = true;
                        }

                        // if (scope.item.completed)
                        // {
                        //     To-do: consider using 'strikethrough' for completed
                        //     tasks rather than hiding them...
                        // }
                }
            };
        }
    ]);
