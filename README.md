# Convector Example - Marketplace

This is a [Convector](http://worldsibu.com/convector/) example implementing a marketplace contract.

If you're looking for a tutorial on how to set up your own project, **refer to the [tutorial](https://github.com/worldsibu/convector-example-marketplace/blob/master/TUTORIAL.md)** in this repository.

## Getting started

Run `npm i` to install all the neccesary dependencies.

Run `npm run test` to run the unit tests.

Run `npm run restart` to start a dev environment and install the chaincode in the blockchain.

Run `npm run cc:invoke -- org1 -u user1 product init '{"id":"1","name":"Bananas","pictureUrl":"http://example.com/bananas.jpg","description":"Bananas","price":100}'` with the environment running to create a product and assign it to the Org1@user1

Run `npm run cc:invoke -- org2 -u user2 product transfer 1 100` with the environment running to transfer the product to Org2@user2