'use strict';

describe('Directive: playersList', function () {

  // load the directive's module
  beforeEach(module('chessTourFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<players-list></players-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the playersList directive');
  }));
});
