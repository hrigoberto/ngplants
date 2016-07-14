(function(){
  angular.module('ngplants')
         .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'PlantService'];

  function MainController($scope, PlantService){
    $scope.plants = PlantService.plants;
    getPlants();


  function getPlants(){
    PlantService.readAll()
                .then(function(){
                  plants = PlantService.plants
                  console.log(plants);
                });
    }

  }
})();
