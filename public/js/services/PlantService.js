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
      return $http.get('https://rocky-lake-25450.herokuapp.com/todos')
                  .then(function(response){
                    o.plants = response.data;
                  });
    };
    function updatePlant(){};
    function deletePlant(){};
  }
})()
