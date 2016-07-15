(function(){
  angular.module('ngplants')
         .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'PlantService'];

  function MainController($scope, PlantService){
    $scope.plants = PlantService.plants;
    $scope.create = createPlant;
    $scope.delete = deletePlant;
    $scope.edit = editPlant;
    $scope.update = updatePlant;
    getPlants();


    function editPlant(plant){
      plant.editing = true;
    }

    function updatePlant(plant){
      plant.editing = false;
      PlantService.update(plant.id, plant)
                  .then(function(){
                    getPlants();
                  })
    }

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
