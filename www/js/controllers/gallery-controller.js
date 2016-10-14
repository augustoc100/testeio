angular.module('app').controller('GalleryController', function($scope,CameraService,NavService){

  $scope.teste="testando a galeria";

$scope.selected= function(){
  $scope.imageGallery = "";

  CameraService.getImage(CameraService.cameraOption.gallery, function(imageData){
      console.log(imageData)
    $scope.imageGallery = imageData;
  },
  function(error){
    console.log(error);
  })
}
     $scope.onDireita = function(){
        	NavService.direita();
        }

        $scope.onEsquerda= function(){
        	NavService.esquerda();

        }
})
