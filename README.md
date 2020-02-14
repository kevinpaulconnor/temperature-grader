Get started
git@github.com:kevinpaulconnor/temperature-grader.git

Overview: 
This dockerized React application is continously deployed through Github to AWS Fargate. When you push to the staging branch, Circle CI will run unit tests and UI smoke tests. If the build succeeds, open a pull request from staging to master: this is the opportunity for code review. After merge into master, a Github Action will deploy to a load balanced AWS Fargate cluster. The production url is:

http://react-temperature-grader-634439755.us-east-2.elb.amazonaws.com/

Production builds use the npm package serve for http.

Local Development Options:

Running a local docker Dev Server with hot reloading:
$ docker-compose build dev
$ docker-compose run dev

This will run npm run start inside the container and the react app will be available at the usual create-react-app spot, localhost:3000

Running a local docker test server for watching tests:
$ docker-compose build watch-test
$ docker-compose run watch-test

Test a production build (non watch mode):
$ docker-compose build test
$ docker-compose run test

Build and serve a production build locally:
$ docker-compose build prod
You'll then want to expose port 80 on a local port with something like:
$ docker-compose run prod -p 8080:80
and then you can run locally on localhost:8080

CI/CD Notes on decision-making:

create-react-app and Github are some of my daily tools, so it was natural to begin thinking about this project with them as the backbone.

In my day-to-day, I'm usually just deploying PaaS that isn't containerized. I run Docker, but I'm usually just using docker images for local databases and not trying to use them as a deployment solution. I know that you guys use Docker extensively, so I wanted to give that a try to demonstrate my interest in continuing to hone my DevOps skills and demonstrate my ability to pick things up and run with them quickly. I have some things to learn about working with Docker as a deployment tool for sure, and it took me basically as long to get the local Docker environment right as did to do anything else.

I wanted to get these containers on AWS, as I know that you guys use AWS and I wanted to display my ability to get things running over there. For Docker containers on AWS, Fargate seemed like the easiest solution with the least necessary configuration. As usual with AWS, there was some messy IAM puzzles, but on the whole it wasn't too bad.

But, I didn't want to be completely tied into the AWS ecosystem, so I wanted to avoid something like AWS CodePipeline for CI/CD. With CircleCi and Github Actions controlling the integration and deployment, it would be relatively easy to move this container to a different provider.

I really enjoyed working on this project; there are a lot of subtleties with working with the floating point conversions that are tricky, and I look forward to discussing it with you tomorrow. I hate whiteboard programming, so I'm excited that you guys are using this process for judging technical ability, and I don't mind making the extra time commitment. I think it's a great way to let candidates show you what we can do! Looking forward to tomorrow.

Version 0.1.0 (versioning to retest Fargate deploy)
