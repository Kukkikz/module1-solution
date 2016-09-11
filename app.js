(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.message = "";
  $scope.dishes = "";
  $scope.checkLunch = function () {
    var msg = "";
    var dishesString = $scope.dishes.trim();
    if(dishesString == ""){
      msg = "Please enter data first";
      $scope.color = "red";
    }else {
      var dishArray = dishesString.split(',');
      var countdishes = 0;
      for(var i = 0;i<dishArray.length;i++){
        if(dishArray[i].trim() != ""){
          countdishes++;
        }
      }
      if(countdishes <= 3){
        msg = "Enjoy!";
        $scope.color = "green";
      }else{
        msg = "Too much!";
        $scope.color = "green";
      }
    }
    $scope.message = msg;
  };
};


})();
