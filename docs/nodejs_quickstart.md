---
id: nodejs_quickstart
title: Node.JS Quickstart Guide
sidebar_label: Node.JS
---

## Sign in to Paynow and get integration details

> Before you can start making requests to Paynow's API, you need to get an integration ID and integration Key from Paynow. Details about how you can retrieve the ID and key are explained in detail on [this page](generation.md)

## Prerequisites

In order to make use of this project, the following prerequisites must be met for it to work.

1.  Node version 0.6.0 and above
1.  NPM (node's package manager, used to install the node library)

## Installation

Install the library using NPM or yarn

### npm

```sh
$ npm install --save paynow
```

### yarn

```sh
$ yarn add paynow
```

## Getting started

Import the library into your project/application.

```javascript
const { Paynow } = require("paynow");
```

Create an instance of the `Paynow` class using your integration ID and integration key as supplied by Paynow.

```javascript
let paynow = new Paynow("INTEGRATION_ID", "INTEGRATION_KEY");
```

## Initiating a web based transaction

A web based transaction is made over the web, via the Paynow website.

You can optionally set the result and return URLs.

- Result URL is the URL on the merchant website where Paynow will post transaction results to.
- Return URL is the URL where the customer will be redirected to after the transaction has been processed. If you do not specify a return URL, you will have to rely solely on polling status updates to determine if the transaction has been paid.


```javascript
paynow.resultUrl = "http://example.com/gateways/paynow/update";
paynow.returnUrl = "http://example.com/return?gateway=paynow&merchantReference=1234";
// The return url can be set at later stages. You might want to do this if you want to pass data to the return url (like the reference of the transaction)
```

Create a new payment using any of the `createPayment(...)` methods, ensuring you pass your own unique reference for that payment (e.g invoice id). If you also pass in the email address, Paynow will attempt to auto login the customer at the Paynow website using this email address if it is associated with a registered account.

```javascript
let payment = paynow.createPayment("Invoice 35");
```

You can then start adding items to the payment

```javascript
// Passing in the name of the item and the price of the item
payment.add("Bananas", 2.5);
payment.add("Apples", 3.4);
```

Once you're done building up your cart and you're finally ready to send your payment to Paynow, you can use the `send` method in the `paynow` object.

```javascript
// Save the response from paynow in a variable
paynow.send(payment);
```

The send method will return a `Promise<InitResponse>`, the InitResponse object being the response from Paynow and it will contain some useful information like whether the request was successful or not. If it was, for example, it contains the url to redirect the user so they can make the payment. You can view the full list of data contained in the response in our wiki

If request was successful, you should consider saving the poll url sent from Paynow in your database

```javascript
paynow.send(payment).then(response => {
  // Check if request was successful
  if (response.success) {
    // Get the link to redirect the user to, then use it as you see fit
    let link = response.redirectUrl;
  }
});
```

## Initiating a mobile based transaction
A mobile transaction is a transaction made using mobile money e.g. using Ecocash

> Note: Mobile based transactions currently only work for Ecocash with Econet numbers

Create a new payment using the `createPayment(...)` method that requires a unique merchant reference and the email address of the user making the payment.

```javascript
let payment = paynow.createPayment("Invoice 37", "user@example.com");
```

Adding items to the cart is the same as in web based transactions.

```javascript
// Passing in the name of the item and the price of the item
payment.add("Bananas", 2.5);
payment.add("Apples", 1.0);
```

When you are ready to submit the payment request, initiate the transaction by calling the sendMobile(...) method. The `sendMobile` method unlike the `send` method takes in two additional arguments i.e. The phone number to send the payment request to and the mobile money method to use for the request. **Note that currently only ecocash is supported**

```javascript
paynow.sendMobile(payment, '0777000000', 'ecocash').then(response => {
  // Handle response
});
```

The response object is almost identical to the one you get if you send a normal request. With a few differences, firstly, you don't get a url to redirect to. Instead you instructions (which ideally should be shown to the user instructing them how to make payment on their mobile phone)

```javascript
paynow.sendMobile(
    
    // The payment to send to Paynow
    payment, 

    // The phone number making payment
    '0777000000',
    
    // The mobile money method to use. 
    'ecocash' 

).then(function(response) {
    if(response.success) {
        // These are the instructions to show the user. 
        // Instruction for how the user can make payment
        let instructions = response.instructions // Get Payment instructions for the selected mobile money method

        // Get poll url for the transaction. This is the url used to check the status of the transaction. 
        // You might want to save this, we recommend you do it
        let pollUrl = response.pollUrl; 

        console.log(instructions)

    } else {
        console.log(response.error)
    }
}).catch(ex => {
    // Ahhhhhhhhhhhhhhh
    // *freak out*
    console.log('Your application has broken an axle', ex)
});
```

## Poll the transaction to check for the payment status

It is possible to check the status of a transaction i.e. if the payment has been paid. To do this, make sure after initiating the transaction, you take note of the poll URL in the response. With this URL, call the `pollTransaction(...)` method of the `paynow` object you created as follows. Note that checking transaction status is the same for web and mobile based transasctions.

```javascript
// Check the status of the transaction with the specified pollUrl
// Now you see why you need to save that url ;-)
let status = paynow.pollTransaction(pollUrl);

if (status.paid()) {
  // Yay! Transaction was paid for
} else {
  console.log("Why you no pay?");
}
```

## Full Usage Example

```javascript
// Require in the Paynow class
const { Paynow } = require("paynow");

// Create instance of Paynow class
let paynow = new Paynow("INTEGRATION_ID", "INTEGRATION_KEY");

// Set return and result urls
paynow.resultUrl = "http://example.com/gateways/paynow/update";
paynow.returnUrl = "http://example.com/return?gateway=paynow&merchantReference=1234";

// Create a new payment
let payment = paynow.createPayment("Invoice 35");

// Add items to the payment list passing in the name of the item and it's price
payment.add("Bananas", 2.5);
payment.add("Apples", 3.4);

// Send off the payment to Paynow
paynow.send(payment).then( (response) => {

    // Check if request was successful
    if(response.success) {
        // Get the link to redirect the user to, then use it as you see fit
        let link = response.redirectUrl;

        // Save poll url, maybe (recommended)?
        let pollUrl = response.pollUrl;
    }

});
```
