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

    function createPlant(){};
    function getAll(){
      return $http.get('plants')
                  .then(function(response){
                    o.plants = response.data;
                  });
    };
    function updatePlant(){};
    function deletePlant(id){
      return $http.delete(baseUrl + 'plants/' + id)
                  .then(function(response){
                    console.log('delete', response);
                    getAll();
                  })
    };
  }
})()
