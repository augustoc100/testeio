angular.module('app').factory('CameraService', function($cordovaCamera){
  var camera = {};


camera.cameraOption = {
  camera : 1,
  gallery : 2
}

function option (type){
  return  {
    quality: 100,
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType:type,
    allowEdit: false,
    encodingType: Camera.EncodingType.JPEG,
    targetWidth: 610,
    targetHeight: 400,
    popoverOptions: CameraPopoverOptions,
    saveToPhotoAlbum: true,
    correctOrientation:true
  };
}

  camera.getImage = function(type,success, error){
    var options = option(type);

    $cordovaCamera.getPicture(options).then(function(imageData) {

      success(imageData);
    }, function(err) {
      error(err);
    });

  }


  return camera;
})
