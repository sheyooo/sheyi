import React from 'react';

// BEGIN: TECHNOLOGIES

import js from './../assets/technologies/js.svg';
import nodejs from './../assets/technologies/nodejs.svg';
import mongodb from './../assets/technologies/mongodb.svg';
import mysql from './../assets/technologies/mysql.svg';
import angular from './../assets/technologies/angular.svg';
import rxjs from './../assets/technologies/rxjs.png';
import express from './../assets/technologies/express.svg';
import react from './../assets/technologies/react.svg';
import redux from './../assets/technologies/redux.svg';
import redis from './../assets/technologies/redis.svg';
import socketio from './../assets/technologies/socketio.svg';
import twilio from './../assets/technologies/twilio.svg';
import jira from './../assets/technologies/jira.svg';
import apollo from './../assets/technologies/apollo.svg';
import graphql from './../assets/technologies/graphql.svg';
import mocha from './../assets/technologies/mocha.svg';
import chai from './../assets/technologies/chai.svg';
import postgresql from './../assets/technologies/postgresql.svg';
import laravel from './../assets/technologies/laravel.svg';
import php from './../assets/technologies/php.svg';
import gcp from './../assets/technologies/gcp.svg';
import kubernetes from './../assets/technologies/kubernetes.svg';
import docker from './../assets/technologies/docker.svg';
import aws from './../assets/technologies/aws.svg';
import bootstrap from './../assets/technologies/bootstrap.svg';
import jasmine from './../assets/technologies/jasmine.svg';
import ionic from './../assets/technologies/ionic.svg';
import loopback from './../assets/technologies/loopback.svg';
import ruby from './../assets/technologies/ruby.svg';
import sinatra from './../assets/technologies/sinatra.svg';
import webpack from './../assets/technologies/webpack.svg';
import jest from './../assets/technologies/jest.svg';
import protactor from './../assets/technologies/protactor.svg';
import karma from './../assets/technologies/karma.svg';

// END: TECHNOLOGIES


// BEGIN: ICONS

import arrowDown from './../assets/icons/arrow-down.svg';
import minimize from './../assets/icons/minimize.svg';
import maximize from './../assets/icons/maximize.svg';
import cancel from './../assets/icons/cancel.svg';
import threeDotsHorizontal from './../assets/icons/three-dots-horizontal.svg';


// END: ICONS


const svgDict = {
  js,
  nodejs,
  mongodb,
  mysql,
  angular,
  rxjs,
  express,
  react,
  redux,
  redis,
  socketio,
  twilio,
  jira,
  apollo,
  graphql,
  mocha,
  chai,
  postgresql,
  laravel,
  php,
  gcp,
  kubernetes,
  docker,
  aws,
  bootstrap,
  jasmine,
  ionic,
  loopback,
  ruby,
  sinatra,
  webpack,
  jest,
  protactor,
  karma,

  arrowDown,
  minimize,
  maximize,
  cancel,
  threeDotsHorizontal
};

export default (props) => (
  <img style={{width: '100%'}} src={svgDict[props.icon]} alt={props.icon} />
);
