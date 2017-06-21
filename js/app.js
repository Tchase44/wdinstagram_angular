"use strict";

(function(){
	let gramsData = [{
		photo_url: "http://placecage.com/100/100",
		author: "Nic Cage",
		body: "Filler test that is filler"
	},{
		photo_url: "http://placecage.com/200/200",
		author: "Nicolas Cage",
		body: "sflk adsfj aflakdfdfjf ffj"
	},{
		photo_url: "http://placecage.com/300/300",
		author: "N C",
		body: "ksjksfiaf fafkafa fa faf fdfsdf"
	}]
  angular.module("wdinstagram", ["ui.router"])
  .config([
  	'$stateProvider',
  	"$locationProvider",
  	Router
  	])
  // .controller("InstaIndexController", [InstaIndexCtrlFun])
  .controller('InstaIndexController', [function(){
  	this.posts = gramsData
  }])
  .controller('InstaShowController', [
  	'$state',
  	'$stateParams',
  	 InstaShowCtrlFun
  ])
  .controller('InstaNewController', [InstaNewCtrlFun])

function Router($stateProvider,$locationProvider){
	$locationProvider.html5Mode(true)
	$stateProvider
	.state("instaIndex",{
		url: "/",
		controller: "InstaIndexController",
		controllerAs: "vm",
		templateUrl: "js/ng-views/index.html"
	})
	.state("instaNew",{
		url: "/new",
		controller: "InstaNewController",
		controllerAs: "VMnew",
		templateUrl: "js/ng-views/new.html"
	})
	.state("instaShow",{
		url: "/:id",
		controller: "InstaShowController",
		controllerAs: "VMshow",
		templateUrl: "js/ng-views/show.html"
	})
}
	function InstaShowCtrlFun($state,$stateParams){
		this.post = gramsData[$stateParams.id]
	}

	function InstaNewCtrlFun() {
		// body...
	}
	
})();
