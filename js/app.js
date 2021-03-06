angular.module('devoxxfr-2013', ['devoxxMirror']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/speakers', {templateUrl: 'partials/speakers.html',   controller: SpeakersCtrl}).
            when('/speakers/:speakerId', {templateUrl: 'partials/speaker.html',   controller: SpeakerCtrl}).

            when('/talks', {templateUrl: 'partials/talks.html',   controller: TalksCtrl}).
            when('/talks/top', {templateUrl: 'partials/topTalks.html',   controller: TopTalksCtrl}).
            when('/talks/:talkId', {templateUrl: 'partials/talk.html',   controller: TalkCtrl}).

            when('/schedule', {templateUrl: 'partials/schedule.html',   controller: ScheduleCtrl}).
            when('/schedule/rooms/:roomId', {templateUrl: 'partials/room.html',   controller: ScheduleRoomCtrl}).

            otherwise({redirectTo: '/schedule'});
    }]);