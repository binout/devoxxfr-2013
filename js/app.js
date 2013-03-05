angular.module('devoxxfr-2013', ['devoxxMirrorServices']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/speakers', {templateUrl: 'partials/speakers.html',   controller: SpeakersCtrl}).
            when('/speakers/:speakerId', {templateUrl: 'partials/speaker.html',   controller: SpeakerCtrl}).

            when('/talks', {templateUrl: 'partials/talks.html',   controller: TalksCtrl}).
            when('/talks/:talkId', {templateUrl: 'partials/talk.html',   controller: TalkCtrl}).

            when('/schedule', {templateUrl: 'partials/schedule.html',   controller: ScheduleCtrl}).

            otherwise({redirectTo: '/schedule'});
    }]);