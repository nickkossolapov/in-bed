# in-bed

A remake of a site for a [friend](https://www.instagram.com/in__bed/). 

To add a bit of functionality to an otherwise static website, I remade it using React. This is that remake.


### Dependencies

* npm 5.6+
* Python 3.6+

### Setup

First install the project.

```
npm install
```

Then start up the dev server.

```
npm run
```

### Add Galleries
Adding a gallery involves a couple of steps.

1. Add the images to folder in `./scripts/originals/{folder_name}`.

2. Install the Python dependencies from inside the `scripts` directory.

```
pip install -r requirements.txt
```

3. Run the `generate_images.py` script.

```
python generate_images.py
```

4. Add a new `Route` into the `App.js` file.

```
<Switch>
  ...
  <Route path="/{url_path}" component={imageGallery('{folder_name}', {number_of_images}, '{page_title}')}/>
  <Redirect to="/"/>
</Switch>
```

|Variable          | Description                                                                  |
|------------------|------------------------------------------------------------------------------|
|`url_path`        | The desired route, i.e. `https://nickkossolapov.github.io/in-bed/{url_path}`.|
|`folder_name`     | The same as when generating the images.                                      |
|`page_title`      | The text that will appear above the gallery.                                 |
|`number_of_images`| The total number of images in the gallery.                                   |


5. Lastly, add the link to the gallery to `works.jsx`:

```
<article>
  <ul>
    ...
    <li>
      <Link to="/{url_path}">page_title</Link>
    </li>
    <li className="back">
      <Link to="/">back </Link>
    </li>
  </ul>
</article>
```

To add images to a gallery, simply add them to the gallery folder in `./scripts/originals/{folder_name}`, run the Python script, and then change the `number_of_images` in the `Route` in `App.js`.

### Deployment

To deploy the website to [GitHub Pages](https://pages.github.com/), first fork the repo to your GitHub profile. Download the repo, and modify `homepage` in `package.json` with your own GitHub username: `"homepage": "http://{username}.github.io/in-bed",`.

Then just deploy the site.

```
npm run deploy
```

## Built With

* [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
