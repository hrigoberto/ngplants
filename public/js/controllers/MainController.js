(function(){
  angular.module('ngplants')
         .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'PlantService'];

  function MainController($scope, PlantService){
    $scope.message = 'Hey hows it going'

    var plants = PlantService.plants;
    PlantService.readAll()
                .then(function(){
                  plants = PlantService.plants
                  console.log(plants);
                });

  PlantService.create();
  PlantService.delete();
  PlantService.update();              
  }
})();
