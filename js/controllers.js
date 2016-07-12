app.controller('AboutController', function($scope, $firebaseObject){
  $scope.about = "about";
  $scope.resumeRef = firebase.database().ref('resume/about').once('value').then(function(snapshot) {
    var data = snapshot.exportVal();
    $scope.about = data;
  });
  $scope.view = {};
  $scope.view.message = "All About Me!"
});

app.controller('ExperienceController', function($scope){
  $scope.view = {};
  $scope.view.message = "My Experience!"
});

app.controller('SkillsController', function($scope){
  $scope.view = {};
  $scope.view.message = "My Skills!"
});

app.controller('ProjectsController', function($scope){
  $scope.view = {};
  $scope.view.message = "My Projects!"
});
app.controller('EducationController', function($scope){
  $scope.view = {};
  $scope.view.message = "My Education!"
});

// app.controller("SampleController", ["$scope", "$firebaseArray",
//   function($scope, $firebaseArray) {
//     // ...
//   }
// ]);
