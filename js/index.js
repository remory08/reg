var app = angular.module("my-app", ['ngRoute']);

app.factory('resumeFactory', function() {
    return {
    "resume": {
      "about": [
        "This is the about me section. It will just be a long string that I format. Well,maybe each item of the array is a paragraph and then i will do fancy css ok sounds great.",
        "another paragraph yo"
      ],
      "experience": [
        {
          "employer": "Bluetent",
          "employerLocation": "Carbondale, CO",
          "Date Started": "October 2015",
          "Date Ended": "Present",
          "Responsibilities": [
            "Bugs and New Features: Built custom features and wrote code to meet clients’ needs. Resolved bugs and troubleshot issues on enterprise level applications. Utilized advanced Github collaboration methods.",
            "Project Management: Effectively communicated with clients and teammates regarding requirements, scope and timelines.",
            "Sales"
          ],
          "Title": "Support Engineer"
        },
        {
          "employer": "Bike Depot",
          "employerLocation": "Denver, CO",
          "Date Started": "September 2011",
          "Date Ended": "April 2015",
          "Responsibilities": [
            "IT Management: Coordinated IT Committee, managed skilled volunteers in hardware, software, security, infrastructure and website management projects.",
            "Salesforce Administrator: Developed Salesforce customized platform from basic CRM to a fully interactive and website-integrated utility."
          ],
          "Title": "Operations Manager"
        },
        {
          "employer": "Peace Corps",
          "employerLocation": "Mali (West Africa)",
          "Date Started": "July 2009",
          "Date Ended": "May 2011",
          "Responsibilities": [
            "Balanced multiple projects by effectively managing time and setting short-term and long-term goals.",
            "Fostered community-driven development through innovation and collaboration."
          ],
          "Title": "Environment Volunteer"
        }
      ],
      "projects": [
        {
          "title": "Fair Weather Trails",
          "screenshot": "http://i.imgur.com/0R8pQf3.jpg?1",
          "url": "https://fair-weather-trails.herokuapp.com",
          "description": "This app allows users to quickly find both trail and weather information in one easy search. ",
          "tech": [
            "Express",
            "Node.js",
            "HTML",
            "CSS",
            "Sass",
            "Trails API",
            "Weather Underground API",
            "Pivotal Tracker",
            "Git",
            "GitHub",
            "MongoDB"
          ]
        },
        {
          "title": "Ambient Audio",
          "url": "",
          "description": "AT&T Hackathon - Winner of best use of AT&T’s M2X Database Ambient audio is an IoT app that collects data from a Tessel light sensor and then selects a song based on the time of day and plays it through Harman speakers.",
          "tech": [
            "Tessel light sensor",
            "M2X database",
            "Express server",
            "custom graphics",
            "Harman Audio integration",
            "Node.js",
            "HTML",
            "CSS",
            "Git",
            "GitHub"
          ]
        }
      ],
      "skills": [
        "JavaScript",
        "Express",
        "Node.js",
        "Angular",
        "MongoDB",
        "HTML",
        "CSS",
        "Sass",
        "Bootstrap",
        "Clojure",
        "Swift",
        "Ruby",
        "Rails",
        "UNIX",
        "Git & GitHub",
        "Application Security",
        "Test Driven Development",
        "API Development",
        "PHP",
        "MySQL",
        "Drupal",
        "WordPress"
      ],
      "education": [
        {
          "where": "Galvanize: Full Stack",
          "degree": "24-Week Web Development Intensive Program",
          "location": "Boulder, CO",
          "honors": ["Certificate of Completion"]
        },
        {
          "where": "DePauw University",
          "degree": "B.A. Conflict Studies (International Relations)",
          "location": "Greencastle, IN",
          "honors": ["Member of Iota Rho Honor Society"]
        }
      ]
    }
  }
})

app.config(function($routeProvider, $locationProvider) {
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
      $locationProvider.html5Mode(true);
});
