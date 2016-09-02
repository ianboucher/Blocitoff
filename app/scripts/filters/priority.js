"use strict";

angular
    .module("blocitoff")
    .filter("formatPriority", function formatPriority ()
        {
            return function (priorityValue)
            {
                var priorityName = "";

                if (priorityValue === "1")
                {
                    priorityName = "High";
                }
                else if (priorityValue === "2")
                {
                    priorityName = "Medium";
                }
                else if (priorityValue === "3")
                {
                    priorityName = "Low";
                }

                return priorityName;
            };
        }
    );
