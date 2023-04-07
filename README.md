# API Specification for Traceability system

The API documentation is generated automatically on a Github Pages site. This site can be found here: [https://go.iov42.com/traceapi]. You will (currently) need to be logged into Github to see this site. If you cannot see it then you will need to be added to the repository users.

## Preparing to make changes

You will need nodejs and npm to be able to use all the tools available.

Install all dependencies

```
npm install
```

## Modify the spec.

All the spec pages are split out as much as possible. This is to make managing such a large API spec easier. Please make sure you follow the same approach.

## 'Lint' the spec

The project uses redocly to run a Lint check against the spec. There should be no errors if you have done the right thing.

```
npm run test
```

## Verify you haven't broken the site.

In order to verify the documentation you will need to run a local web host - it is setup to use nodejs. The documentation utilises [RapiDoc](https://rapidocweb.com/) which dynamically builds a page from the split yaml files.

### http-server

[http-server](https://www.npmjs.com/package/http-server)


1. Install http server from npm:

```
npm install http-server
```

2. Run http-server from the root of the repo.

```
http-server
```

3. Navigate to [http://localhost:8080](http://localhost:8080)

### Redoc

[Redoc](https://www.npmjs.com/package/redoc)

Two simple steps

1. Install npm dependencies

```
npm install
```

2. Start up the Redoc server

```
npm start
```

3. Navigate to [http://localhost:8080](http://localhost:8080)

## Bundling the spec into a single file.

If you want the YAMl as a single file then you can use Redoc to bundle into a single file.

1. Install the npm dependencies (Step 1 of the Redoc instruction above)

2. Run the build command.

```
npm run build
```

This will output a file in the root directory called 'bundled.yml"


## Generate Graphql Schema

This relies on the bundling of the spec into a single file.

1. Install [openapi-to-graphql CLI](https://github.com/IBM/openapi-to-graphql)

```
npm i -g openapi-to-graphql-cli
```

2. Run the following command to create the graphql spec

```
openapi-to-graphql bundled.yml --save schema.graphql
```

The graphql spec is also checked in.