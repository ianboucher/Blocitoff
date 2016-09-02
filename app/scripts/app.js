"use strict";

angular
    .module("blocitoff", ["firebase", "ui.router", "ui.bootstrap"])
    .config(function($stateProvider, $locationProvider)
    {
        $locationProvider
            .html5Mode
            ({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state
            (
                "landing",
                {
                    url         : "/",
                    controller  : "LandingCtrl as landing",
                    templateUrl : "/templates/landing.html"
                }
            )
            .state
            (
                "tasks",
                {
                    url         : "/tasks",
                    controller  : "CurrentTasksCtrl as tasks",
                    templateUrl : "/templates/tasks.html"
                }
            )
            .state
            (
                "archive",
                {
                    url         : "/archive",
                    controller  : "ArchiveTasksCtrl as archive",
                    templateUrl : "/templates/archive.html"
                }
            );
    });
