# Unmind Mood Tracker

<a href="https://ibb.co/frFBygK"><img width="400" src="https://i.ibb.co/F83Nyrf/Screenshot-2020-05-27-at-20-33-29.png" alt="Screenshot-2020-05-27-at-20-33-29" border="0"></a>
<a href="https://ibb.co/VpjVrJK"><img width="400" src="https://i.ibb.co/dJWB1jh/Screenshot-2020-05-27-at-20-34-00.png" alt="Screenshot-2020-05-27-at-20-34-00" border="0"></a>

#### What is this?

A simple React web app with a Node/ExpressJS backend. Both written in TypeScript.

There are two pages, *Check In* and *Mood Insights*.

On the 'Check In' page, the user is able to log their mood. They're able to view a history of their checkins on the *Mood Insights* page.

#### How do I run it?

To run it locally, the quickest way to do this will be to `git clone` the repo.

Then run the following commands:

1. `yarn install`
2. `yarn start`

This project is not currently optimised for a production employment.

#### What tools were chosen, and why?

- **Create-React-App** has been chosen as a starter kit. It allowed me to get up and running quickly without having to deal with webpack for hot-reloading etc.
- **TypeScript** been used instead of Vanilla JavaScript. Listing the benefits of TypeScript and typed languages, in general, is beyond the scope of this project. I've used FlowJS extensively for a couple of years now but I've only recently began learning the nuances of TypeScript.
- **React Bootstrap and Material UI** have been used as UI libraries. Typically I'd rely on these much less and certainly would try to avoid using both. For the purposes of this project it was a quick way of using some controlled components so that I could get them to work well with React Hooks.

Several other packages have been used such as **rc-slider** and **react-accessible-accordion** for UI components and **react-router-dom** for routing.

#### What assumptions were made?

Several assumptions were made to speed up development such as:

1. There'd be no authorization or authentication for this application. User sessions will also not be tracked.
2. Users are allowed to submit more than one entry per day.

#### How could this be improved? What trade-offs were made?

##### Client: #####

1. Add Unmind's logo, fonts, and generally improve UI.
2. Improve the types. As mentioned below, this is my first time using TypeScript with React. I've needed to declare a few types as `any`. This needs to be improved.
3. Many style best-practices have been ignored for speed, whether using in-line styles or repeating code. Ideally I'd use something like *styled-components* in production.
4. As mentioned, an overreliance of tools such as *material-ui* and *react-bootstrap*.
5. UI has not written to follow accesibility guidelines, for responsiveness or particularly for performance.

##### Server: #####

1. The biggest tradeoff in this project is the lack of a persistent data store. Currently for mood insights page, it is simply reading off of an array of objects. When a user logs a new check-in, it just adds to the list. In production I'd use a persistent database such as PostgreSQL. Redis could be used as an in-house caching layer for repeat requests.
2. As mentioned above, no auth or user session tracking has been added.
3. Though the server structure is incredibly basic, due to the simple functionality of this app, this made the most sense.
4. There's currently no data validation for when users are posting new checkins. This is of course unacceptable for a production applicatoin.

##### Both: #####

1. Improve error handling. Right now, there is no error handling for the client or server. If the API requests fail, the error is neither caught nor handled. Either a fail whale or at least an alert bar should flash to the user, asking them to 'pull to refresh' or similar.
2. Add a suite of tests using something such as ***Jest*** or ***Mocha***. For the backend, I'd want to test the routes, at an application level, with a tool such as **supertest**. I'd want to check that the right responses are coming back for the main request types. Due to the simple nature of the API, it's unlikely that anything more comprehensive would be particularly valuable. As the server grows in size and functionality, I'd want to break things down, layer by layer and write various unit and integration tests. By breaking things up, I'd be able to write tests in isolation by simply mocking out modules using a tool such as ***Sinon***.
3. For the front-end, I'd want to definitely test the Hooks and api layer. Tests could also be written for each component to ensure they receive the correct propers and that their clickHandlers function correectly etc. This could also test the integration of the React Hooks.
4. Wire up to a CI pipeline such as CircleCI for linting, type checking, automated test suites and deployment to staging/production environments.
5. Optimising the build for production and deploying to a service such as AWS or Heroku. I would have liked to have done this but ran out of time.


#### What were some challenges?

- Though I've used FlowJS heavily for a couple of years. TypeScript is something I've recently started using due to Flock (my current company) decided to migrate to it. It's been a great decision, but this is the first time I've used it with React Native. Up until now, I'd only used FlowJS on RN and TypeScript on the backend. It took me a while to brush up on the syntax.
- This is my first time writing React Hooks. I've long been a fan and heavy user of Redux. This is my first time playing with hooks. I very much enjoyed this. Powerful stuff.
