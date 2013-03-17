var backendUrl = "https://devoxxmirror-laps33.rhcloud.com/rest";

var devoxxMirror = angular.module('devoxxMirror', ['ngResource']);

devoxxMirror.factory('Talk', function($resource){
    return $resource(backendUrl + '/talks/:talkId', {callback:'JSON_CALLBACK'}, {
        all : {method:'JSONP', isArray:true},
        get : {method:'JSONP', params:{talkId:'talkId'}}
    });
});

devoxxMirror.factory('TopTalk', function($resource){
    return $resource(backendUrl + '/talks/top/:top', {callback:'JSON_CALLBACK'}, {
        get : {method:'JSONP', params:{top:'top'}, isArray:true}
    });
});

devoxxMirror.factory('TalkPoll', function($resource){
    return $resource(backendUrl + '/talks/:talkId/poll', {callback:'JSON_CALLBACK'}, {
        get : {method:'JSONP', params:{talkId:'talkId'}}
    });
});

devoxxMirror.factory('TalkPollSize', function($resource){
    return $resource(backendUrl + '/talks/:talkId/pollsize', {callback:'JSON_CALLBACK'}, {
        get : {method:'JSONP', params:{talkId:'talkId'}}
    });
});

devoxxMirror.factory('Speaker', function($resource){
    return $resource(backendUrl + '/speakers/:speakerId', {callback:'JSON_CALLBACK'}, {
        all : {method:'JSONP', isArray:true},
        get : {method:'JSONP', params:{speakerId:'speakerId'}}
    });
});

devoxxMirror.factory('Schedule', function($resource){
    return $resource(backendUrl + '/schedule/day/:day', {callback:'JSON_CALLBACK'}, {
        all : {method:'JSONP', isArray:true},
        get : {method:'JSONP', params:{day:'day'}, isArray:true}
    });
});

devoxxMirror.factory('ScheduleRoom', function($resource){
    return $resource(backendUrl + '/schedule/day/:day/room/:roomId', {callback:'JSON_CALLBACK'}, {
        get : {method:'JSONP', params:{day:'day',roomId:'roomId'}, isArray:true}
    });
});

devoxxMirror.factory('Room', function($resource){
    return $resource(backendUrl + '/schedule/rooms/:roomId', {callback:'JSON_CALLBACK'}, {
        all : {method:'JSONP', isArray:true},
        get : {method:'JSONP', params:{roomId:'roomId'}}
    });
});