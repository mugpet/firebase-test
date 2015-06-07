/*jshint -W117*/

var app = angular.module("angularApp", ['ngMaterial', 'firebase']);

app.controller("mainCtrl", ['$scope', '$firebaseArray', '$firebaseAuth',
                            function ($scope, $firebaseArray, $firebaseAuth) {

        $scope.welcome = "Angular is in the house!";

        var ref = new Firebase("https://mpe-firebase-test.firebaseio.com");
        $scope.messages = $firebaseArray(ref);

        $scope.authObj = $firebaseAuth(ref);

        // https://mpe-firebase-test.firebaseio.com/

        // Facebook authentication:
        // more info: https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-users-and-authentication-authwithoauthpopupprovider-options

        // https://auth.firebase.com/v2/mpe-firebase-test/auth/facebook/callback
        // app id: 1600944563506157
        // app secret: fa4f85f57a613e259304296f30ba1355
        /*
        $scope.authObj.$authWithOAuthPopup("facebook").then(function(authData) {
          console.log("Logged in as:", authData.uid);
        }).catch(function(error) {
          console.error("Authentication failed:", error);
});*/

        $scope.authObj.$authWithOAuthPopup("facebook").then(function (authData) {
            console.log("Logged in as:", authData.uid);
        }).catch(function (error) {
            console.error("Authentication failed:", error);
        });

}]);