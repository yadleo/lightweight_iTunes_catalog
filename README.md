# lightweight_iTunes_catalog

This repo contains a Lightweight iTunes Catalog utilizing data from iTunes Search API.

## User Story

- As a user, I can search the iTunes Catalog
- As a user, I can view result by different sections, e.g., songs, feature-movies, ...etc.
- As a user, I can view basic information of the search results, i.e., name, artwork, genre, link to iTunes.
- As a user, I can favorite or unfavorite search items.
- As a user, I can view my list of favorited items.

## Build and Run

1. fork and clone the repo
2. cd into the directory

```shell
cd lightweight_iTunes_catalog
```

3. install node modules

```shell
npm install
```

4. install budo for LiveReload
```shell
npm install budo -g
```

5. run start script. (This would run the server and client start scripts in parallel. The client start script will run a build because bundle.js has been ignored to prevent injected environment variables from leaking when used in the future. A browser window/tab should open)

```shell
npm run start
```

## Demo Images
_Initial Page Load_
![Initial Page Load](https://res.cloudinary.com/dqhe5ks7u/image/upload/v1558345256/itunes%20catalog/Initial_Page_Load.png)

_After Successful Search Request_
![After Successful Search Request](https://res.cloudinary.com/dqhe5ks7u/image/upload/v1558345269/itunes%20catalog/After_Successful_Search_Request.png)

_After Favoriting Entries_
![After Favoriting Entries](https://res.cloudinary.com/dqhe5ks7u/image/upload/v1558345268/itunes%20catalog/After_Successful_Favoriting.png)

_Initial Page Load with persisted Favorited Entries_
![Initial Page Load with Favorites](https://res.cloudinary.com/dqhe5ks7u/image/upload/v1558345256/itunes%20catalog/Initial_Page_Load_with_Favorites.png)
