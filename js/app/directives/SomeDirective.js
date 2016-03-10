function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ counter }}</h3>',
			'</div>'
		].join(''),
		controller: function($scope) {
			$scope.counter = 0;
		},
		controllerAs: 'some',
		link: function (scope, elem, attrs) {

		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);