var backendUrl = "https://devoxxmirror-laps33.rhcloud.com/rest";

var devoxxMirror = angular.module('devoxxMirror', ['ngResource']);

devoxxMirror.factory('Talk', function($resource){
    return $resource(backendUrl + '/talks/:talkId', {callback:'JSON_CALLBACK'}, {
        all : {method:'JSONP', isArray:true},
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