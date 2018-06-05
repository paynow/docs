---
id: csharp_quickstart
title: C# / .NET Quickstart Guide
sidebar_label: C# Quickstart Guide
---

## Sign in to Paynow and get integration details

> Before you can start making requests to Paynow's API, you need to get an integration ID and integration Key from Paynow. Details about how you can retrieve the ID and key are explained in detail on [this page](generation.md)

## Prerequisites

This library has a set of prerequisites that must be met for it to work

1.  .NET 4.0 or later

## Installation

There are two ways to install the Paynow .NET SDK. The first method uses the NuGet Package Manager, which comes preconfigured with Visual Studio 2013 and later. 

If you prefer to not use NuGet, you can also download the SDK directly from this repository.


### Installing using Nuget

From the Nuget package manager console, enter the follwing command

```sh
PM> Install-Package PaynowZW
```

### Downloading the SDK directly

1. Navigate to the Paynow [.NET SDK Releases page](https://github.com/PaynowZW/Paynow-DotNet-SDK/releases)
2. Click the appropriate link to download a ZIP file containing the SDK files


## Usage example

### Importing library

```javascript
const Paynow = require("paynow");
```

Create an instance of the Paynow class optionally setting the result and return url(s)

```javascript
let paynow = new Paynow("INTEGRATION_ID", "INTEGRATION_KEY");

paynow.resultUrl = "http://example.com/gateways/paynow/update";
paynow.returnUrl = "http://example.com/return?gateway=paynow";
// The return url can be set at later stages. You might want to do this if you want to pass data to the return url (like the reference of the transaction)
```

Create a new payment passing in the reference for that payment (e.g invoice id, or anything that you can use to identify the transaction.

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
paynow.send(payment).then( (response) => {
    
    // Check if request was successful
    if(response.success) {
        // Get the link to redirect the user to, then use it as you see fit
        let link = response->redirectUrl;
    }
    
});
```

## Full Usage Example

```javascript
// Require in the Paynow class
const Paynow = require("paynow");

// Create instance of Paynow class
let paynow = new Paynow("INTEGRATION_ID", "INTEGRATION_KEY");

// Set return and result urls
paynow.resultUrl = "http://example.com/gateways/paynow/update";
paynow.returnUrl = "http://example.com/return?gateway=paynow";

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
        let link = response->redirectUrl;

        // Save poll url, maybe (recommended)?
        let pollUrl = response.pollUrl;
    }
    
});

```
