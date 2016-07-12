app.controller('AboutController', function($scope, resumeFactory){
  $scope.view = {};
  $scope.view.message = "All About Me!"
});

app.controller('ExperienceController', function($scope, resumeFactory){
  $scope.view = {};
  $scope.view.message = "My Experience!"
});

app.controller('SkillsController', function($scope, resumeFactory){
  $scope.view = {};
  $scope.view.message = "My Skills!"
});

app.controller('ProjectsController', function($scope, resumeFactory){
  $scope.projects = resumeFactory.resume.projects;
});
app.controller('EducationController', function($scope, resumeFactory){
  $scope.education = resumeFactory.resume.education;
});

// app.controller("SampleController", ["$scope", "$firebaseArray",
//   function($scope, $firebaseArray) {
//     // ...
//   }
// ]);
