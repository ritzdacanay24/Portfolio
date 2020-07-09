let mySkills = [{
    name: 'Web Developer',
    icon: 'Web_Developer'
  },
  {
    name: 'Full Stack',
    icon: 'full_stack'
  },
  {
    name: 'Angular',
    icon: 'devicon-angularjs-plain'
  },
  {
    name: 'SQL/MYSQL',
    icon: 'devicon-mysql-plain'
  },
  {
    name: 'PHP',
    icon: 'devicon-php-plain'
  },
  {
    name: 'ubuntu',
    icon: 'devicon-ubuntu-plain'
  },
  {
    name: 'Javascript',
    icon: 'devicon-javascript-plain'
  },
  {
    name: 'Javascript',
    icon: 'devicon-javascript-plain'
  },
  {
    name: 'NPM',
    icon: 'devicon-npm-original-wordmark'
  },
  {
    name: 'HTML',
    icon: 'devicon-html5-plain'
  },
  {
    name: 'CSS',
    icon: 'devicon-css3-plain'
  },
  {
    name: 'Apache',
    icon: 'devicon-apache-plain'
  },
  {
    name: 'Bootstrap',
    icon: 'devicon-bootstrap-plain'
  },
  {
    name: 'Git Hub',
    icon: 'devicon-github-plain'
  }
]

function loopThroughSkills(mySkills) {
  for (let i = 0; i < mySkills.length; i++) {
    (function (i) {
      setTimeout(function () {
        document.getElementById('skills').innerHTML = `
          <p class="font-weight-bold mb-5" id="sillSet"> <i class="${mySkills[i].icon}"></i> ${mySkills[i].name}</p>
        `;
        if (i == mySkills.length - 1) {
          loopThroughSkills(mySkills)
        }
      }, 1000 * i);
    })(i);
  };
}
loopThroughSkills(mySkills);