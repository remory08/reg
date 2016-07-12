var app = angular.module("my-app", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/about.html',
        controller: 'AboutController'
      })
      .when('/education', {
        templateUrl: 'partials/education.html',
        controller: 'EducationController'
      })
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController'
      })
      .when('/experience', {
        templateUrl: 'partials/experience.html',
        controller: 'ExperienceController'
      })
      .when('/skills', {
        templateUrl: 'partials/skills.html',
        controller: 'SkillsController'
      })
});
