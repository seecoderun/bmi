# BMI Calculator

This small React app calculates a Body Mass Index value based on height and weight.

## Installing
To install the project, clone or download the source code from GitHub, and then run `npm install`.

## package.json Scripts
The app was created using Vite, so there are four `package.json` scripts you can run:
* `npm run dev` - run a local server and view the development version of the app in a browser.
* `npm run build` - build a production version of the app to deploy to a website.
* 'npm run lint' - lint the project source files using `eslint`.
* 'npm run preview' - serve the production version of the app locally.

## Deploying to a Website
If you plan on deploying the app to a website, you must first edit the `base` property in `vite.config.js` to point to the path on your server where the app will be deployed. After doing this, you can run `npm run build`. The property is also automatically used by `npm run dev`.

## License
This project is released under the terms of the [MIT license](./LICENSE).