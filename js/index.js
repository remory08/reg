var app = angular.module("my-app", ['ngRoute']);

app.factory('resumeFactory', function() {
    return {
    "resume": {
      "about": [
        "Hi! I'm Ryne and I love to code. I'm originally from the Midwest, near Chicago. I currently live in beautiful Colorado where I enjoy exploring the outdoors. I enjoy living through exploration, whether it be new technologies or summiting a fourteener I've never sumitted before.",
      ],
      "experience": [
        {
          "employer": "Bluetent",
          "employerLocation": "Carbondale, CO",
          "dateStarted": "October 2015",
          "dateEnded": "Present",
          "responsibilities": [
            "Bugs and New Features: Built custom features and wrote code to meet clients’ needs. Resolved bugs and troubleshot issues on enterprise level applications. Utilized advanced Github collaboration methods.",
            "Project Management: Effectively communicated with clients and teammates regarding requirements, scope and timelines.",
            "Sales"
          ],
          "title": "Support Engineer"
        },
        {
          "employer": "Bike Depot",
          "employerLocation": "Denver, CO",
          "dateStarted": "September 2011",
          "dateEnded": "April 2015",
          "responsibilities": [
            "IT Management: Coordinated IT Committee, managed skilled volunteers in hardware, software, security, infrastructure and website management projects.",
            "Salesforce Administrator: Developed Salesforce customized platform from basic CRM to a fully interactive and website-integrated utility."
          ],
          "title": "Operations Manager"
        },
        {
          "employer": "Peace Corps",
          "employerLocation": "Mali",
          "dateStarted": "July 2009",
          "dateEnded": "May 2011",
          "responsibilities": [
            "Balanced multiple projects by effectively managing time and setting short-term and long-term goals.",
            "Fostered community-driven development through innovation and collaboration."
          ],
          "title": "Environment Volunteer"
        }
      ],
      "projects": [
        {
          "title": "Fair Weather Trails",
          "screenshot": "http://i.imgur.com/0R8pQf3.jpg?1",
          "url": "https://fair-weather-trails.herokuapp.com",
          "description": "This app allows users to quickly find both trail and weather information in one easy search. Users can save trails to their account. When it's time to hit the trail, just log in and see which trail has the best weather forecast. ",
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
          "screenshot": "/public/ambient-audio.png",
          "url": "https://www.youtube.com/watch?v=FrODrl5FeUc&feature=youtu.be",
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
        },
        {
          "title": "Gross Wedding",
          "screenshot": "/public/gross_wedding.png",
          "url": "https://gross-wedding.herokuapp.com/",
          "description": "This was a fun project I worked on while planning my wedding. We used this to collect RSVPs and song requests as well as provide information.",
          "tech": [
            "MongoDB",
            "JQuery",
            "Spotify API",
            "Express",
            "Sass",
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
