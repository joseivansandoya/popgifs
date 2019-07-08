###### PopGifs! code challenge

![Cover image](https://github.com/joseivansandoya/popgifs/blob/master/assets/cover.jpg)

PopGifs! is a React application that shows a set of gifs retrieved from [Giphy](https://developers.giphy.com/). The page allows you to filter by keywords.
Once you click on a specific gif the page will expand that image and in addition to that it will show you another set of random gifs.

## Available Script

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Development procedure

The procedured I followed for coding this challenge was:

### 1. Create new React application
By using the CRA tool I get a fresh instance of a single page React application. This is really usefull if you want to avoid all the webpack configuration boilerplate.
In addition to this, I installed all required dependencies (Redux and React Router).

### 2. Identify React components and design Redux store
Nothing better than a sketch to figure out what the components and also Redux store will be

![Diagram](https://github.com/joseivansandoya/popgifs/blob/master/assets/diagram.jpg)

Main components:
- ImagesListScreen
- ImageDetailScreen

Redux store:
- List data (loading and error flags)
- Image detail data (loading and error flags)

### 3. Project structure (src)
Keeping in mind mainatinability purposes, the *src* directory was structures as follows:
- **actions**: repository for all Redux actions
- **components**: in addition to the main screen components, this directory contains all **ui** ones (Header, SearchPanel, ImageItem, etc.)
- **reducers**: repository for all Redux reducers
- **styles**: normalize and vendor styles
- **App.js**: main component that calls React routes
- **giphy-config.js**: initial configuration for making use of Giphy API
- **index.js**: entrypoint component (this one initialize Redux store)
- **Router.js**: React routes configuration
