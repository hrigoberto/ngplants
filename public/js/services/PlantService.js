(function(){
  angular.module('ngplants')
         .factory('PlantService', PlantService);

  PlantService.$inject = ['$http'];

  function PlantService($http){
    var o = {
      create: createPlant,
      readAll: getAll,
      update: updatePlant,
      delete: deletePlant,
      plants: []
    };
    return o;

    function createPlant(){};
    function getAll(){
      return $http.get('https://plants-api1.herokuapp.com/plants')
                  .then(function(response){
                    o.plants = response.data;
                  });
    };
    function updatePlant(){};
    function deletePlant(){};
  }
})()
