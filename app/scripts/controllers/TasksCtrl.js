"use strict"

angular
    .module("blocitoff")
    .controller("TasksCtrl", ["$firebaseArray",
        function ($firebaseArray)
        {
            var ref  = firebase.database().ref();
            var list = $firebaseArray(ref);

            this.addTask = function ()
            {
                list.$add(
                {
                    title : this.taskTitle
                });

                this.taskTitle = "";
            };

            this.list = list;
        }
    ]);
