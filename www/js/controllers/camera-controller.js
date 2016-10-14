angular.module('app').controller('CameraController', function($scope,CameraService,NavService){
  $scope.teste="testando a camera";

  $scope.testeSelected= function(){
    console.log("batata");
  }

  $scope.selected= function(){
      pegaFoto();
  }

  $scope.tiraFoto= function(){
    pegaFoto();

  }


  function pegaFoto(){
    $scope.imageCamera = ""

    CameraService.getImage(CameraService.cameraOption.camera,function(imageData){
      console.log(imageData)
      $scope.imageCamera=imageData;
      console.log("sucesso");

    },
  function(error){
    console.log(error);
  });
  }


      $scope.onDireita = function(){
          NavService.direita();
        }

        $scope.onEsquerda= function(){

          NavService.esquerda();

        }

        




})
