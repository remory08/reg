app.controller('AboutController', function($scope, resumeFactory){
  $scope.abouts = resumeFactory.resume.about;
});

app.controller('ExperienceController', function($scope, resumeFactory){
  $scope.experience = resumeFactory.resume.experience;
});

app.controller('SkillsController', function($scope, resumeFactory){
  $scope.skills = resumeFactory.resume.skills;
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
