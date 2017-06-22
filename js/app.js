"use strict";

(function(){
	// let gramsData = [{
	// 	photo_url: "http://placecage.com/100/100",
	// 	author: "Nic Cage",
	// 	body: "Filler test that is filler"
	// },{
	// 	photo_url: "http://placecage.com/200/200",
	// 	author: "Nicolas Cage",
	// 	body: "sflk adsfj aflakdfdfjf ffj"
	// },{
	// 	photo_url: "http://placecage.com/300/300",
	// 	author: "N C",
	// 	body: "ksjksfiaf fafkafa fa faf fdfsdf"
// }];
  angular.module("wdinstagram", ["ui.router","ngResource"])
  .config([
  		"$stateProvider",
  		"$locationProvider",
  		Router
  	])
  .controller("InstaIndexController", [
  		"InstaFactory",
  		InstaIndexCtrlFun
  	])
  .controller("InstaShowController", [
  		"$state",
  		"$stateParams",
  		"InstaFactory",
  		 InstaShowCtrlFun
  ])
  .controller("InstaNewController", [
  		"InstaFactory",
  		"$state",
  		InstaNewCtrlFun
  	])
  .factory("InstaFactory", [
  		"$resource",
  		InstaFactoryFun
  	])

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
		controllerAs: "vmNew",
		templateUrl: "js/ng-views/new.html"
	})
	.state("instaShow",{
		url: "/:id",
		controller: "InstaShowController",
		controllerAs: "vmShow",
		templateUrl: "js/ng-views/show.html"
	})
}
	function InstaIndexCtrlFun(InstaFactory){
  		this.posts = InstaFactory.query()
  		// console.log(this.posts)
  	}

  	function InstaNewCtrlFun(InstaFactory,$state){
  		this.post = new InstaFactory();

  		this.create = function(){
  			// console.log("function fired")
  			this.post.$save().then(function(){
  				$state.go("instaIndex")
  			})
  		}
  	}

	function InstaShowCtrlFun($state,$stateParams,InstaFactory){
		this.post = InstaFactory.get({id: $stateParams.id})

		this.editPost = function(){
			this.post.$update({id: $stateParams.id}).then(function(){
				$state.go("instaIndex")
			})
		}
		this.deletePost = function(){
			this.post.$delete({id: $stateParams.id}).then(function(){
				$state.go("instaIndex")
			})
		}
	}

	function InstaFactoryFun($resource){
		return $resource("http://localhost:3000/entries/:id",{},{
			update: {method: 'PUT'}
		})
	}
})();
