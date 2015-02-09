angular.module('todo',[]).
controller('todoController', ['$scope',function($scope){
	$scope.todos = [
		{'title':'Learn angular','done':true},
		{'title':'Build a todo app','done':false}
	];
	$scope.addTodo = function(){
		$scope.todos.push({'title':$scope.newTodo,'done':false})
		$scope.newTodo = ''
	}
	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todos, function(todo) {
			count += todo.done ? 0 : 1;
		});
		return count;
	};
	$scope.clearCompleted = function(){
		$scope.todos = $scope.todos.filter(function(item){
			return !item.done
		})
	}
}])