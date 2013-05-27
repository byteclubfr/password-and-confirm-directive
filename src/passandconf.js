angular.module('passwordAndConfirm', [])

.run(function($templateCache) {
	$templateCache.put("passwordAndConfirm.tpl.html",
		"<p><label for=\"password\">Password : </label><input type=\"password\" name=\"password\" id=\"password\" ng-model=\"password\" /></p>\n" +
		"<p ng-class=\"{error: form.confirm.$error.password}\"><label for=\"confirm\">Verify : </label><input type=\"password\" name=\"confirm\" id=\"confirm\" ng-model=\"confirm\" /></p>\n"
	);
})

.directive('passwordAndConfirm', function() {
	return {
		restrict: 'E',
		templateUrl: function(element, attr) {
			return attr.template || 'passwordAndConfirm.tpl.html';
		},
		scope: {
			password: '=model',
			form: '=form'
		},
		link: function(scope, element, attrs, ctrl) {
			scope.$watch('password + confirm', function(value) {
				var p = scope.password || '';
				var v = value || '';
				scope.form.confirm.$setValidity('password', p+p == v);
			}, true);
		}
	};
});