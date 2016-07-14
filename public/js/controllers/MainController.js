(function(){
  angular.module('ngplants')
         .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'PlantService'];

  function MainController($scope, PlantService){
    $scope.plants = PlantService.plants;
    $scope.create = createPlant;
    $scope.delete = deletePlant;
    getPlants();


    function getPlants(){
      PlantService.readAll()
                  .then(function(){
                    $scope.plants = PlantService.plants
                    console.log($scope.plants);
                  });
      }

    function createPlant(commonName,scientificName,layerType,use){
      PlantService.create(commonName,scientificName,layerType,use)
                  .then(function(){
                    $scope.commonName = '',
                    $scope.scientificName = '',
                    $scope.layerType = '',
                    $scope.use = '',
                    getPlants();
                  });
    }

    function deletePlant(id){
      console.log(id);
      PlantService.delete(id)
                  .then(function(){
                    getPlants();
                  });
    }

  }
})();
