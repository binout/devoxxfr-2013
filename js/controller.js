var jsonpSuffix = "?callback=JSON_CALLBACK";

//var presUrl = "http://cfp.devoxx.com/rest/v1/events/8/presentations";
var presUrl = "https://devoxxmirror-laps33.rhcloud.com/rest/talks";

function PresCtrl($scope, $http) {
    $scope.presentations = [];
    $http.jsonp(presUrl+jsonpSuffix).
        success(function(data) {
            $scope.presentations = data;
        }).
        error(function(data) {
            $scope.presentations = data || "Request failed";
        });
}

//var speakersUrl = "https://cfp.devoxx.com/rest/v1/events/8/speakers";
var speakersUrl = "https://devoxxmirror-laps33.rhcloud.com/rest/speakers";
function SpeakersCtrl($scope, $http) {
    $scope.speakers = [];
    $http.jsonp(speakersUrl+jsonpSuffix).
        success(function(data) {
            $scope.speakers = data;
        }).
        error(function(data) {
            $scope.speakers = data || "Request failed";
        });
}

//var speakerUrl = "http://cfp.devoxx.com/rest/v1/events/speakers/";
var speakerUrl = "https://devoxxmirror-laps33.rhcloud.com/rest/speakers/";

function SpeakerCtrl($scope, $http, $location) {
    var speakerId = $location.search()['id'];
    var jsonpUrl = speakerUrl + speakerId + jsonpSuffix;
    $http.jsonp(jsonpUrl).
        success(function(data) {
            $scope.speaker = data;
        }).
        error(function(data) {
            $scope.speaker = data || "Request failed";
        });
}

//var prezUrl = "https://cfp.devoxx.com/rest/v1/events/presentations/";
var prezUrl = "https://devoxxmirror-laps33.rhcloud.com/rest/talks/";

function TalkCtrl($scope, $http, $location) {
    var prezId = $location.search()['talkId'];
    var prezJsonpUrl = prezUrl + prezId + jsonpSuffix;

    $http.jsonp(prezJsonpUrl).
        success(function(data) {
            $scope.talk = data;
        }).
        error(function(data) {
            $scope.talk = data || "Request failed";
        });

}