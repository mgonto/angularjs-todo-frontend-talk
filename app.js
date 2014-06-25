angular.module('sample', []);
angular.module('sample').filter('prefix', function() {
  return function(str, prefix) {
    return (prefix || 'Tengo que') + ' ' + str;
  }
});
angular.module('sample').factory('Todos', function() {
  return [{
    name: 'Ir al shopping',
    completed: false
  }, {
    name: 'Ir al mercado',
    completed: true
  }];
});



angular.module('sample').directive('todoItem', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'todoItem.html',
    scope: {
      value: '='
    },
    controller: function($scope) {
      
    }
  }
});

angular.module('sample').controller('MainCtrl', function($scope, Todos) {
  $scope.todos = Todos;

  $scope.pepeTodo = {
    name: 'hola',
    completed: false
  }

  $scope.createTodo = function() {
    Todos.push({
      name: $scope.newTodoName,
      completed: $scope.newTodoCompleted
    });

    $scope.newTodoName = '';
    $scope.newTodoCompleted = false;
  }


});