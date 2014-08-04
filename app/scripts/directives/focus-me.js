'use strict';

/**
 * @ngdoc directive
 * @name chessTourFrontApp.directive:focusMe
 * @description
 * # focusMe
 */
angular.module('chessTourFrontApp')
    .directive('focusMe', function ($parse) {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
                var model = $parse(attrs.focusMe);
                scope.$watch(model, function (value) {
                    if (value === true) {
                        element[0].focus();
                    }
                });
                element.bind('blur', function() {
                    scope.$apply(model.assign(scope, false));
                });
            }
        };
    });
