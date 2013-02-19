/* jasmine specs for controllers go here */
describe('Controllers', function() {

    beforeEach(function(){
        this.addMatchers({
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    describe("PresCtrl", function () {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.whenJSONP(presUrl+jsonpSuffix).respond([{"id": 2767,
                "speakerUri": "http://cfp.devoxx.com/rest/v1/events/speakers/2487",
                "title": "Faciliter le dÃ©veloppement d’applications Web hors-ligne en JAVA avec GWT"}]);

            scope = $rootScope.$new();
            ctrl = $controller(PresCtrl, {$scope: scope});
        }));

        it('should init presentations', function () {
            expect(scope.presentations).toEqual([]);
        });

        it('should fetch rest backend', function () {
            $httpBackend.flush();
            expect(scope.presentations).toEqualData([{"id": 2767,
                "speakerUri": "http://cfp.devoxx.com/rest/v1/events/speakers/2487",
                "title": "Faciliter le dÃ©veloppement d’applications Web hors-ligne en JAVA avec GWT"}]);
        });
    });
});