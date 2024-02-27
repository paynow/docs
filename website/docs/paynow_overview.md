---
id: paynow_overview
title: How it works
sidebar_label: How it works
---

### How Paynow Works - Request flow
This is the communication that goes on between Paynow and merchant during a transaction.

<!-- Quick Tutorial
<iframe width="560" height="315" src="https://www.youtube.com/embed/Slh9aEpxm7U?si=ElXQd8QVTVj9RXgz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->

#### 1. You Send Request to Paynow
- You send a request to Paynow to initiate a transaction.
- The request contains payment information like  amount and validation details.

#### 2. Paynow Responds:
- Upon receiving the request, if the details are correct, Paynow responds with  *status=ok, hash=generated_hash,browserurl, pollurll*

#### 3. You process the response
- You need to verify the hash using the method as shown below, Once you verify the hash, you need to store the *pollurl* and then redirect your user to *browserurl*, where they will attempt to make payment.

#### 4. On Paynow secure payment page:
- The user completes the payment on Paynow's secure website.
- Once they have paid or cancelled, they are redirected to your site's  *returnurl* you sent on the iniatiate transaction body.
- Paynow sends a payment status details to your site's *resulturl*- which is an endpoint  you set in your server that waits for a status from Paynow.

#### 5. On Result URL(Your server):
- You receive data from Paynow as shown on status Update  Page.
- Validate the hash and store/ update the data in your database.
- You also use pollurl to verify the data before updating  your database.

#### 6. On Return URL(Your server):
- User is taken to this url  after they have completed the transaction on Paynow.
- On this page you  have to check for Payment status show relevant information to the user.
- *To get the status,You can check your payment status in the database as you are updating it on result url or poll the status from Paynow using  the pollurl*