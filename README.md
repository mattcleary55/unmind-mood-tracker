# Unmind Mood Tracker

<a href="https://ibb.co/frFBygK"><img width="200" src="https://i.ibb.co/F83Nyrf/Screenshot-2020-05-27-at-20-33-29.png" alt="Screenshot-2020-05-27-at-20-33-29" border="0"></a>
<a href="https://ibb.co/mX8CWtf"><img width="200" src="https://i.ibb.co/xfHSTGx/Screenshot-2020-05-27-at-20-34-00.png" alt="Screenshot-2020-05-27-at-20-34-00" border="0"></a>

#### What is this?

A simple React web app with a Node/ExpressJS backend. Both written in TypeScript.

There are two pages, 'Check In' and 'Check-in History'.

On the 'Check In' page, the user is able to log their mood. They're able to view a history of their checkins on the 'Check-In History' page.

#### How do I run it?

To run it locally, the quickest way to do this will be to `git clone` the repo.

Then run the following commands:

1. `yarn install`
2. `yarn start`

This project is not currently optimised for a production employment.

#### What tools were chosen, and why?

- **Expo** has been chosen to build the app. It's incredibly quick to get up and going and manages all the plumbing of React Native behind the scenes. It's a good choice for a lot of production applications as long as they don't rely on cutting edge device-specific hardware.
- **TypeScript** been used instead of Vanilla JavaScript. Listing the benefits of TypeScript and typed languages, in general, is beyond the scope of this project.
- **React Native Paper** has been used as a UI library. This was done to save time for a quick project like this, but ultimately, due to the simple nature of the UI I went with, it probably slowed me down. In production, I'd rely on libraries such as this much less.
- **React Navigation** has been used as the navigation library. It's widely respected, is well maintained and supported. Relatively easy to work with and enables a lot of customization.

#### What assumptions were made?

Several assumptions were made to speed up development such as:

1. The `test-recipes` would always return a list of recipes.
2. Other developers are happy to work with Expo...though ejecting is always an option.

#### How could this be improved?

1. Add SecondNature's logo, fonts, and generally improve UI.
2. Wire up to a CI pipeline such as CircleCI.
3. Add unit tests. This is unlikely to be necessary due to the simplicity of this application, but down the line, Jest and Enzyme may be good options. The React Hooks should be tested at least.
4. Improve error handling. Right now, if the `test-recipes` API request, fails, the error is neither caught nor handled. Either a fail whale or at least an alert bar should flash to the user, asking them to 'pull to refresh' or similar.
5. Improve the types. As mentioned below, this is my first time using TypeScript with React Native and React Navigation. I've had to declare the navigation types as `any`. This needs to be improved.

#### What were some challenges?

- Though I've used FlowJS heavily for a couple of years. TypeScript is something I've recently started using due to Flock (my current company) decided to migrate to it. It's been a great decision, but this is the first time I've used it with React Native. Up until now, I'd only used FlowJS on RN and TypeScript on the backend. It took me a while to brush up on the syntax.
- This is my first time writing React Hooks. I've long been a fan and heavy user of Redux. This is my first time playing with hooks. I very much enjoyed this. Powerful stuff.
- React Navigation has also changed _a lot_ since I last used it. So it took me a little while to get the hang of the new API.
