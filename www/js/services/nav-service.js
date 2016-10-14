angular.module('app').factory('NavService',function($ionicTabsDelegate){

	var options = {}

options.esquerda = function(){
     var index = pegaIndice()
     console.log("esquerda");
		if(index<2)
			$ionicTabsDelegate.select(index+1)};

options.direita = function(){
		var index = pegaIndice()
     console.log("direita");

		if(index>0)
			$ionicTabsDelegate.select(index-1)

};


	function pegaIndice(){
		return $ionicTabsDelegate.selectedIndex()




	}
options.pegarIndice = function(){
	return pegaIndice();
}

	return options

	
})