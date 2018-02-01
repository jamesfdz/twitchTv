var myApp = angular.module("myApp", [])
						.controller("myController", function($scope, $http){
							var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
							$scope.results_streams = [];
							$scope.results_channel = [];
							channels.forEach(function(channel){
								function makeURL(type, name) {
      								return 'https://wind-bow.glitch.me/twitch-api/' + type + '/' + name;
								};
								
								
								$http.get(makeURL("streams", channel)).then(function(response){
									var resultsStreams = response.data;
									$scope.results_streams.push(resultsStreams);
									
									// var game,
							  //         status;
							  //     if (data.stream === null) {
							  //       game = "Offline";
							  //       status = "offline";
							  //     } else if (data.stream === undefined) {
							  //       game = "Account Closed";
							  //       status = "offline";
							  //     } else {
							  //       game = data.stream.game;
							  //       status = "online";
							  //     }
									// var results = response.channels;
									// 	if (response.stream === null) {
        	// 						$scope.game = "Offline";
        	// 						$scope.status = "offline";
      			// 				} else if (response.stream === undefined) {
        	// 						$scope.game = "Account Closed";
        	// 						$scope.status = "offline";
      			// 				} else {
        	// 					angular.forEach(results, function(v,k){
									// 		$scope.results.push({display_name: v.display_name,
									// 												 game: v.game,
									// 												 logo: v.logo,
									// 												 url: v.url,
									// 												 views: v.views,
									// 												 followers: v.followers,
									// 												 status: "online" });
									// 	});
      			// 				};
      							console.log(resultsStreams);
								});

								$http.get(makeURL("channels", channel)).then(function(response){
									var resultsChannels = response.data;
									$scope.results_channel.push(resultsChannels);
								});
						});
					
					console.log($scope.results_streams);
					console.log($scope.results_channel);	
				});
						
// var myStringArray = ["Hello","World"];
// var arrayLength = myStringArray.length;
// var api = "https://wind-bow.glitch.me/twitch-api/streams/"
// for (var i = 0; i < arrayLength; i++) {
//     var url = api + myStringArray[i];
//     document.getElementById("demo").innerHTML = url;
//     //Do something
// }

