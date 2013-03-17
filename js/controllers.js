function NavCtrl($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'schedule';
        return page === currentRoute ? 'active' : '';
    };
}

function TalksCtrl($scope, Talk, TopTalk) {
    $scope.talks = Talk.all();
    $scope.topTalks = TopTalk.get({top : 3});

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

function TalkCtrl($scope, Talk, TalkPoll, TalkPollSize, $routeParams) {
    var id = $routeParams.talkId;
    $scope.talk = Talk.get({talkId: id});
    $scope.poll = TalkPollSize.get({talkId: id});

    $scope.vote = function () {
        $scope.poll = TalkPoll.get({talkId: id});
    }
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

function ScheduleCtrl($scope, Schedule, Room) {
    $scope.dayone = Schedule.get({day: 1});
    $scope.daytwo = Schedule.get({day: 2});
    $scope.daythree = Schedule.get({day: 3});
    $scope.rooms = Room.all();
}

function ScheduleRoomCtrl($scope, Room, ScheduleRoom, $routeParams) {
    $scope.room = Room.get({roomId: $routeParams.roomId});
    $scope.dayone = ScheduleRoom.get({day: 1, roomId: $routeParams.roomId});
    $scope.daytwo = ScheduleRoom.get({day: 2, roomId: $routeParams.roomId});
    $scope.daythree = ScheduleRoom.get({day: 3, roomId: $routeParams.roomId});
}