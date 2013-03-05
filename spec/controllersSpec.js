/* jasmine specs for controllers go here */
describe('Controllers', function() {

    beforeEach(module('devoxxMirror'));

    beforeEach(function(){
        this.addMatchers({
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    describe("TalksCtrl", function () {
        var scope, ctrl, $httpBackend;
        var jsonpUrl = backendUrl + "/talks" + "?callback=JSON_CALLBACK";

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.whenJSONP(jsonpUrl).respond([{"id": 2767,
                "speakerUri": "http://cfp.devoxx.com/rest/v1/events/speakers/2487",
                "title": "Faciliter le dÃ©veloppement d’applications Web hors-ligne en JAVA avec GWT"}]);

            scope = $rootScope.$new();
            ctrl = $controller(TalksCtrl, {$scope: scope});
        }));

        it('should init presentations', function () {
            expect(scope.talks).toEqual([]);
        });

        it('should fetch rest backend', function () {
            $httpBackend.flush();
            expect(scope.talks).toEqualData([{"id": 2767,
                "speakerUri": "http://cfp.devoxx.com/rest/v1/events/speakers/2487",
                "title": "Faciliter le dÃ©veloppement d’applications Web hors-ligne en JAVA avec GWT"}]);
        });
    });
});