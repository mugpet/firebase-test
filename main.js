/*jshint -W117*/

var app = angular.module("angularApp", ['ngMaterial', 'firebase', 'ngRoute']);


app.run(["$rootScope", "$location", function($rootScope, $location) {
$rootScope.$on("$routeChangeError", function(event, next, previous, error) {
  // We can catch the error thrown when the $requireAuth promise is rejected
  // and redirect the user back to the home page
  if (error === "AUTH_REQUIRED") {
    $location.path("views/home");
  }
});
}]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
$routeProvider.when("/home", {
  // the rest is the same for ui-router and ngRoute...
  controller: "HomeCtrl",
    controllerAs: "home",
  templateUrl: "views/home.html",
  resolve: {
    // controller will not be loaded until $waitForAuth resolves
    // Auth refers to our $firebaseAuth wrapper in the example above
    "currentAuth": ["Auth", function(Auth) {
      // $waitForAuth returns a promise so the resolve waits for it to complete
      return Auth.$waitForAuth();
    }]
  }
}).when("/account", {
  // the rest is the same for ui-router and ngRoute...
  controller: "AccountCtrl",
    controllerAs: "controller",
  templateUrl: "views/account.html",
  resolve: {
    // controller will not be loaded until $requireAuth resolves
    // Auth refers to our $firebaseAuth wrapper in the example above
    "currentAuth": ["Auth", function(Auth) {
      // $requireAuth returns a promise so the resolve waits for it to complete
      // If the promise is rejected, it will throw a $stateChangeError (see above)
      return Auth.$requireAuth();
    }]
  }
}).when("/about", {
  // the rest is the same for ui-router and ngRoute...
  controller: "AboutCtrl",
    controllerAs: "about",
  templateUrl: "views/about.html",
      resolve: {
    // controller will not be loaded until $requireAuth resolves
    // Auth refers to our $firebaseAuth wrapper in the example above
    "currentAuth": ["F", function(Auth) {
      // $requireAuth returns a promise so the resolve waits for it to complete
      // If the promise is rejected, it will throw a $stateChangeError (see above)
      return Auth.$requireAuth();
    }]}
});
    
    
    
      //  $locationProvider.html5Mode(true);
}]);


app.controller("HomeCtrl", ["currentAuth", function(currentAuth) {
  // currentAuth (provided by resolve) will contain the
  // authenticated user or null if not logged in
    console.log("Home controller active");
}]);
app.controller("AccountCtrl", ["currentAuth", function(currentAuth) {
  // currentAuth (provided by resolve) will contain the
  // authenticated user or null if not logged in
    console.log("Account controller active");
}]);

app.controller("AboutCtrl", ["currentAuth", function(currentAuth) {
  // currentAuth (provided by resolve) will contain the
  // authenticated user or null if not logged in
    console.log("Aabout controller active");
}]);


app.controller("mainCtrl", ['$scope', '$firebaseArray', '$firebaseAuth',
                            function ($scope, $firebaseArray, $firebaseAuth) {

        $scope.welcome = "Angular is in the house!";

        var ref = new Firebase("https://mpe-firebase-test.firebaseio.com");
        $scope.messages = $firebaseArray(ref);

        $scope.authObj = $firebaseAuth(ref);

        console.log("start");
        // https://mpe-firebase-test.firebaseio.com/

        // Facebook authentication:
        // more info: https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-users-and-authentication-authwithoauthpopupprovider-options
        // more on $firebaseAuth directive/service/provider : https://www.firebase.com/docs/web/libraries/angular/guide/user-auth.html

        // https://auth.firebase.com/v2/mpe-firebase-test/auth/facebook/callback
        // app id: 1600944563506157
        // app secret: fa4f85f57a613e259304296f30ba1355
        /*
        $scope.authObj.$authWithOAuthPopup("facebook").then(function(authData) {
          console.log("Logged in as:", authData.uid);
        }).catch(function(error) {
          console.error("Authentication failed:", error);
});*/

                                
                                
                                /*
        $scope.authObj.$authWithOAuthPopup("facebook").then(function (authData) {
            console.log("Logged in as:", authData.uid);
        }).catch(function (error) {
            console.log("Authentication failed:", error);
        });*/

}]);