# Tripplo Dashboard Case Study

This is a Dashboard made in React for case study for Tripplo. This project forms part of their interview process.

Most of the components are hand made besides the Table and Dropdown components respectively. 
Since Only one page was required no routing is integrated in the app.

## Technologies used

* [Create React App](https://github.com/facebook/create-react-app)
* [TailwindCSS](https://tailwindcss.com/)
* [PostCSS](https://postcss.org/) - to transform our styles for modern browsers
* [Bootstrap](https://react-bootstrap.github.io/) (for two components)
* [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
* [Yarn](https://yarnpkg.com/)



## Available Scripts


After cloning the repo and cd'ing into the project directory, you can run:

```
$ yarn install 
```
Which will install all the dependancies. 

Then you can run:

```
$ yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Things to consider:

* approah for different browsers - Weird beahviour in chrome and needs more testing with actual devices. I would use AWS Device farm to achieve a sustainable solution. 
* advanced components: `<ClientDropdown/> && <StatusDropdown/> ` Need a bit more adavanced logic incorporated into them. 

`<ClientDropdown/>` -  should be a button with a native HTML `<select/>` to select options with an image. 

`<StatusDropdown/>` - The background colour needs to relfect the status of the truck

* how would this fit into the container/pages type pattern?

* Images are loaded locally and not from a CDN. Would also need to implement a stratgey to lazy load them or use a placeholder image.
* No Testing coverage, The components that would need tests are: `<ClientDropdown/> && <StatusDropdown/> && <App/>` - these components need to be able to accept props that is coupled with dynamic business logic.  

### Browser Related Issues

Each of these three browsers has an issue with the `<TopNav/>` at a 320px viewport width. So that means a collapsable Nav drawer needs to be made to  store at least two out of the four objects in the Nav.  

*Firefox* 


*Chrome*

*Edge*


