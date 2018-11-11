import React from 'react';
import WOW from 'wow.js';

import Layout from './../layouts/Layout';
import ShCard from './../components/ShCard';

// import './../styles/projects.scss';

const projects = [{
  companyName: 'MindRight',
  companyLocation: 'DC, USA',
  role: 'Lead Developer',
  timeline: 'Jan/2017 - Present',
  description: 'MindRight is personalized, live coaching over text message for teens who want to talk. It\'s a service/company that focuses on mental health and wellbeing of teens (youth) in the underserved parts of USA.',
  technologies: ['js', 'mongodb', 'express', 'nodejs', 'loopback', 'mysql', 'angular', 'rxjs', 'react', 'redux', 'protactor', 'karma', 'jest', 'webpack', 'mocha', 'redis', 'socketio', 'twilio', 'jira', 'graphql', 'apollo', 'gcp', 'kubernetes']
}, {
  companyName: 'Andela',
  companyLocation: 'NYC, USA',
  role: 'Full Stack Developer',
  timeline: 'Mar/2016 - Present',
  description: 'Andela is a tech company that recruits top 1% smart young developers in Africa for top IT firms like Microsoft and Google. In my time here, I worked on an internal project during training which was a Yelp clone using PEAN stack (Postgres, Express.js Angular, and Node) and a document management System using MERN stack (MongoDB, Express.js React, Node)',
  technologies: ['js', 'postgresql', 'mongodb', 'express', 'react', 'nodejs', 'angular', 'mocha', 'chai', 'jasmine', 'ruby', 'sinatra', 'jest', 'webpack']
}, {
  companyName: 'Testify',
  companyLocation: 'LOS, NG',
  role: 'Full Stack Developer and Co-Founder',
  timeline: 'Sep/2015 - Feb/2016',
  description: 'Testify is a Christian social network where people can come and post their testimonies and others can interact with the posters and also relate with their testimonies.',
  technologies: ['laravel', 'angular', 'js', 'ionic', 'php', 'mysql', 'socketio']
}, {
  companyName: 'GradeAccess',
  companyLocation: 'LOS, NG',
  role: 'Full Stack Developer and Founder',
  timeline: 'Feb/2014 - Feb/2015',
  description: 'GradeAccess is a service that helps parents to stay up to date with their child\'s academic performance in school, knowing how difficult it is to keep an eye on their children. This is done by gathering data from the class teachers of the students.',
  technologies: ['php', 'mysql', 'js', 'aws', 'bootstrap']
}];

export default class ProjectsPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFullScreen: false
    }
  }

  componentDidMount() {
    // console.log(WOW);
    const wow = new WOW();
    wow.init();
  }

  render() {
    return (
      <Layout pageHead="Work and Projects 👨‍💻">
        <div className="flex flex-wrap -mx-4">
          {
            projects.map(project => (
              <div key={project.companyName} style={{height: 410}} className="p-4 w-full sm:w-1/2 lg:w-1/3">
                <ShCard {...project} />
              </div>
            ))
          }
        </div>
      </Layout>
    )
  }
}