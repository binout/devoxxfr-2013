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

    $scope.sort = {
        column: 'title',
        descending: false
    }

    $scope.selectedCls = function (column) {
        return column === $scope.sort.column && 'sort-' + $scope.sort.descending;
    }

    $scope.changeSorting = function (column) {
        var sort = $scope.sort;
        if (sort.column === column) {
            sort.descending = !sort.descending;
        } else {
            sort.column = column;
            sort.descending = false;
        }
    }
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

    $scope.sort = {
        column: 'lastName',
        descending: false
    }

    $scope.selectedCls = function (column) {
        return column === $scope.sort.column && 'sort-' + $scope.sort.descending;
    }

    $scope.changeSorting = function (column) {
        var sort = $scope.sort;
        if (sort.column === column) {
            sort.descending = !sort.descending;
        } else {
            sort.column = column;
            sort.descending = false;
        }
    }
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