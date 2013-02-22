var backendUrl = "https://devoxxmirror-laps33.rhcloud.com/rest";
var jsonpSuffix = "?callback=JSON_CALLBACK";

function TalksCtrl($scope, $http) {
    $scope.talks = [];
    var jsonpUrl = backendUrl + "/talks" + jsonpSuffix;

    $http.jsonp(jsonpUrl).
        success(function(data) {
            $scope.talks = data;
        }).
        error(function(data) {
            $scope.talks = data || "Request failed";
        });
}

function SpeakersCtrl($scope, $http) {
    $scope.speakers = [];
    var jsonpUrl = backendUrl + "/speakers" + jsonpSuffix;

    $http.jsonp(jsonpUrl).
        success(function(data) {
            $scope.speakers = data;
        }).
        error(function(data) {
            $scope.speakers = data || "Request failed";
        });
}

function SpeakerCtrl($scope, $http, $location) {
    var speakerId = $location.search()['id'];
    var jsonpUrl = backendUrl + "/speakers/" + speakerId + jsonpSuffix;

    $http.jsonp(jsonpUrl).
        success(function(data) {
            $scope.speaker = data;
        }).
        error(function(data) {
            $scope.speaker = data || "Request failed";
        });
}

function TalkCtrl($scope, $http, $location) {
    var prezId = $location.search()['id'];
    var jsonpUrl = backendUrl + "/talks/" + prezId + jsonpSuffix;

    $http.jsonp(jsonpUrl).
        success(function(data) {
            $scope.talk = data;
        }).
        error(function(data) {
            $scope.talk = data || "Request failed";
        });

}