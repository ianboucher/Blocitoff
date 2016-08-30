"use strict"

angular
    .module("blocitoff", ["firebase", "ui.router"])
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
                    controller  : "TasksCtrl as tasks",
                    templateUrl : "/templates/tasks.html"
                }
            );
    });
