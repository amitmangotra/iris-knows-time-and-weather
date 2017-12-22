# Iris-Knows-Time&Weather

**This is basically a fun and learning project.** <br/><br/>

* In this project, I have implemented a resilient, natural language aware Slack Bot as a micro-service using Node.js, Wit.ai (for
natural language processing), Real Time Messaging (RTM) API of Slack, Google’s Geocode and Time-Zone API and Open Weather Map API.
* This Slack Bot provides features of giving date and time of user given location and weather condition of the same.
* __*Time*__ and __*Weather*__ are two different microservices (*iris-time* and *iris-weather*, here) which are independent of each other as well as of the main application (*iris*, here).
* This concept of microservices provides resilience to the built system and helps in tackling problems of service failures, e.g. if iris-time is down for some reason, the main application will remain intact and running.<br/><br/><br/><br/>



## Installation instructions:<br/>
* Clone the repo using git clone command as `git clone https://github.com/amitmangotra/iris-knows-time-and-weather.git`
* Make sure you have Slack, Google, Wit.ai and Openweathermap accounts.
* You need to have api keys of Google Geocode and TimeZone, Wit.ai, RTM(Real Time Messaging) service of Slack.
* Put the api keys to their respective places in code.
* Create a user-defined bot in Slack and name it `iris` and connect it to your slack workspace.
* In Wit.ai, configure time and weather intents for training `iris`.
* Open the folder where you cloned the repo and open iris, iris-time and iris-weather in three separate windows of your favorite IDE.
* Run `npm install` on each window in the respective integrated terminals.
* In integrated terminal of iris folder, run `npm start`
* Similarly, for iris-time and iris-weather folders, run `node bin/run.js` in their respective integrated terminals.
* Open #general channel of your slack workspace and test iris-time and iris-weather services using queries like, "How's the weather in Boston, Iris?" or "What's the time in Sydney, Iris?".Make sure each query must contain the word __*"iris"*__.
