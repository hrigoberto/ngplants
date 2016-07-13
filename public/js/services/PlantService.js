(function(){
  angular.module('ngplants')
         .factory('PlantService', PlantService);

  PlantService.$inject = ['$http'];

  function PlantService($http){

    var baseUrl = 'https://plants-api1.herokuapp.com/'
    var o = {
      create: createPlant,
      readAll: getAll,
      update: updatePlant,
      delete: deletePlant,
      plants: []
    };
    return o;

    function createPlant(common, scientific, layer, use){
      var info = {
        commonName: common,
        scientificName: scientific,
        layerType: layer,
        use: use
      };
      return $http.post(baseUrl + 'plants/', info)
                  .then(function(response){
                    console.log('create', response);
                    getAll();
                  });
    };
    function getAll(){
      return $http.get(baseUrl + 'plants')
                  .then(function(response){
                    o.plants = response.data;
                  });
    };
    function updatePlant(id, newPlant){
      return $http.put(baseUrl + 'plants/' + id, newPlant)
                  .then(function(response){
                    console.log('update', response);
                    getAll();
                  });
    };
    function deletePlant(id){
      return $http.delete(baseUrl + 'plants/' + id)
                  .then(function(response){
                    console.log('delete', response);
                    getAll();
                  });
    };
  }
})()
