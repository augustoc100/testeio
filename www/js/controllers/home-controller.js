angular.module('app')
  .controller('homeController', function($scope, $cordovaCamera){









    $scope.onclick= function(){
      alert("botão clicado")

      var options = {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
      correctOrientation:true
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
      console.log("sucesso");
      }, function(err) {
        console.log("erro");
      });

    }
})
