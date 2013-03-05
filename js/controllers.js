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

function TalkCtrl($scope, Talk, $routeParams) {
    $scope.talk = Talk.get({talkId: $routeParams.talkId});
}

function SpeakersCtrl($scope, Speaker) {
    $scope.speakers = Speaker.all();

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

function SpeakerCtrl($scope, Speaker, $routeParams) {
    $scope.speaker = Speaker.get({speakerId: $routeParams.speakerId});
}

function ScheduleCtrl($scope, Schedule) {
    $scope.dayone = Schedule.get({day: 1});
    $scope.daytwo = Schedule.get({day: 2});
    $scope.daythree = Schedule.get({day: 3});
}