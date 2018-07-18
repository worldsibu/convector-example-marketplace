Reference to https://github.com/worldsibu/convector-example-marketplace

# About the example

This is a simple marketplace example using the Convector Framework to create a smart contract definition that can be span across your whole fullstack project to create a Enterprise DApp.

# First time setup

For this tutorial, we call the Smart Contracts Chaincodes as well, since well... it's technically code in the chain. The concept comes from Hyperledger Fabric, so it is good to be familiar with it.

We really recommend using Lerna to speed up the development of your project. We use it for this example here. It helps you to manage multiple projects on the same folder structure while handling all the dependencies for you.

First thing is to init Lerna in the root of your project.

`npm i --save lerna`

Then, init lerna `lerna init`

By default Lerna expects you to store your projects at `./packages` we don't like that, so we create a folder with our namespace `@worldsibu` and store there the projects, then you only to redirect lerna to that root in `lerna.json`.

Change:

``` json
"packages": [
    "packages/*"
  ],
  ```

For:

``` json
"packages": [
    "@worldsibu/*"
  ],
  ```

Then, where you created your Smart Contract project, install the dependencies.

- `lerna add @worldsibu/convector-core-controller --save`
- `lerna add @worldsibu/convector-core-model --save`

Aside from Convector Framework packages, the peer dependency `reflect-metadata` is required in the chaincode project.

Voilà! Now your project is Enterprise Blockchain enabled!

Inside your smart contracts project you will need one `chaincode.config.json` file per organization, like the one in this project in the root directory. This files contains the settings for you to install to the blockchain through [Convector Tools Chaincode Manager](), that way you only configure what packages (models, controllers) you would like to include during the installation of the chaincode in the blockchain, and that's all.

The structure is simple, you have the `controllers` section that only need you to include the packages you are developing. In some cases you have a single project with all the models and controllers, but in some more advances scenarios you may need to have multiple packages there.

This is all you need to start developing. The next steps may contain:

* Running tests to your logic.
* Deploy it to a blockchain (we provide you a tool for that! To provision a dev environment and to deploy it easily with the `chaincode.config.json` file).

To start testing and building your code, we have created a set of usefull npm scripts, you can find them [here](https://github.com/worldsibu/convector-example-marketplace/blob/master/package.json) and [here](https://github.com/worldsibu/convector-example-marketplace/blob/master/%40worldsibu/product/package.json)

## Testing

To test the project you need to install `lerna add @worldsibu/convector-adapter-mock --save-dev`

Testing a Convector Smart Contract works is through the generation of a `client` that is a facade of the functions that can be used in multiple layers of your application. The test file injects an adapter to call the blockchain. In reallife scenarios you may include that `client` at all the layers of your software and use an existing adapter (e.g.: the one calling the blockchain) or a custom one.

To compile your chaincode run `npm run lerna:build`.

Create a test folder at the root of your chaincode folder and run it with
`npm run lerna:test`.

## Blockchain installation

To install the blockchain, the tool `@worldsibu/convector-tool-dev-env` and `@worldsibu/convector-tool-chaincode-manager` is required. Install it in the root of your chaincodes folder, this can be installed with plain npm, so `npm i -D @worldsibu/convector-tool-{dev-env,chaincode-manager}` will do the work.

This will download all the components needed to install a full Hyperledger Fabric implementation without noticing it.

Now run `npm run start` or `npm run restart` if already started, and watch the blockchain start in front of your eyes.