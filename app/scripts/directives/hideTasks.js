"use strict"

angular
    .module("blocitoff")
    .directive("hideTasks", function ()
        {
            console.log("hello")
            return {
                // "restrict": "E",
                // "scope": {},

                link: function (scope, element, attributes)
                {
                    element[0].hidden = true
                    console.log(element)
                }
            };
        });
