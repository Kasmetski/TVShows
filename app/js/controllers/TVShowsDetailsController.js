'use strict';

TVShowsApp.controller('TVShowsDetailsController',
    function TVShowsDetailsController($scope) {
        {
            var tvshows = {
                id: 1,
                name: "The Big bang Theory",
                image: "/images/Big_Bang_Theory_1.jpg",
                additionalinformation: {
                    seasons: 7,
                    location: "USA",
                    actiors: [ "actior1", "actior2", "actior3"]
                },
                season = [{
                    id: 1,
                    name: "season 1",
                    image: "/images/Big_Bang_Theory_1.jpg",
                    additionalinformation: {
                        episodes: "23",
                        location: "USA",
                        actiors: [ "actior1", "actior2", "actior3"]
                    }
                }],
            }
        }
    }
);