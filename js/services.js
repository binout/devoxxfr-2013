var backendUrl = "https://devoxxmirror-laps33.rhcloud.com/rest";

angular.module('devoxxMirrorServices', ['ngResource']).
    factory('Talk', function($resource){
        return $resource(backendUrl + '/talks/:talkId', {callback:'JSON_CALLBACK'}, {
            all : {method:'JSONP', isArray:true},
            get : {method:'JSONP', params:{talkId:'talkId'}}
        });
    }

);