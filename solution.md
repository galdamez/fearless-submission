# Solution

## Changing the port number

1. Open /counter-app/package.json
2. Navigate to the property `scripts.start`
3. It should read `PORT=3000 react-scripts start`. Change the port number, shut down the app server if it is running, and run `yarn start` from the terminal to boot it up again.

## Running Docker

* Navigate to /counter-app via the terminal
* Run `docker build -t fearless:dev .` and wait for the Docker build to complete.
* To start the server, run `docker-compose up -d --build`
* To stop the server, run `docker-compose stop`

## Future updates, changes, or oustanding code

1. Add a state management library like Context API, MobX, or Redux
2. Add Styled Components library to make CSS management easier
3. Apply a UI library like Tailwind in the event the app's needs grow
4. Add Font Awesome library in case we need icons
5. Obtain any necessary branding related the customer's needs, such as colors, logos, etc.
6. Add polyphills for support of Internet Explorer 11 and below
7. Be prepared to break the app into chunks if several parts grow in file size or they negatively affect the initial load of the application
8. The user might want to be able to decrease or reset the number of hits

## Assumptions, changes, or details of the implementation

1. The app will need a router once we start adding views
2. With a router, we will need to ensure the server can properly route the requests to the respective views.
3. Assumption: SEO is not a priority at this stage. If it ever is, we would have to consider a server-side rendering solution like Next.js.
4. The user is not using Internet Explorer
5. The API key is checked into the code for now because it is not a sensitive piece of information. If we would need to protect a secret key, that means we would store that value in a file that isn't checked into Git.
6. Assumpton: The user does not want to know the current number of hits when the app loads.
7. The app will need responsive styling to be user-friendly on mobile devices
8. The API for counting could change. In that case, it is best to have the client-side code for calling that endpoint in one place to make maintenance easier.