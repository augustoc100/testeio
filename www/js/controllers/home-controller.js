angular.module('app')
  .controller('HomeController', function($scope, CameraService, NavService){

    $scope.onclick= function(){
        CameraService.teste();    }

        $scope.batata = function(){
          alert('batata');
        }

        $scope.teste="testando a home";

        $scope.onDireita = function(){
        	NavService.direita();
        }

        $scope.onEsquerda= function(){
        	NavService.esquerda();

        }

       
    
})
