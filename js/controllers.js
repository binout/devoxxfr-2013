var backendUrl = "https://devoxxmirror-laps33.rhcloud.com/rest";
var jsonpSuffix = "?callback=JSON_CALLBACK";

function NavCtrl($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'schedule';
        return page === currentRoute ? 'active' : '';
    };
}

function TalksCtrl($scope, Talk) {
    $scope.talks = Talk.all();

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

function SpeakerCtrl($scope, $http, $routeParams) {
    $scope.speakerId = $routeParams.speakerId;
    var jsonpUrl = backendUrl + "/speakers/" + $scope.speakerId + jsonpSuffix;

    $http.jsonp(jsonpUrl).
        success(function(data) {
            $scope.speaker = data;
        }).
        error(function(data) {
            $scope.speaker = data || "Request failed";
        });
}

function TalkCtrl($scope, Talk, $routeParams) {
    $scope.talk = Talk.get({talkId: $routeParams.talkId});
}

function ScheduleCtrl($scope, $http) {
    var dayOneUrl = backendUrl + "/schedule/day/1" + jsonpSuffix;
    $http.jsonp(dayOneUrl).
        success(function(data) {
            $scope.dayone = data;
        }).
        error(function(data) {
            $scope.dayone = data || "Request failed";
        });
    var dayTwoUrl = backendUrl + "/schedule/day/2" + jsonpSuffix;
    $http.jsonp(dayTwoUrl).
        success(function(data) {
            $scope.daytwo = data;
        }).
        error(function(data) {
            $scope.daytwo = data || "Request failed";
        });
    var dayThreeUrl = backendUrl + "/schedule/day/3" + jsonpSuffix;
    $http.jsonp(dayThreeUrl).
        success(function(data) {
            $scope.daythree = data;
        }).
        error(function(data) {
            $scope.daythree = data || "Request failed";
        });

}