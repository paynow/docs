---
id: initiate_mobile_transaction
title: Initiate a mobile money transaction
sidebar_label: Initiate a mobile money transaction
---

**Mobile money transactions are only supported on the Ecocash platform at the time of writing this
document.** 

The mobile subscriber specified in the initiate message will have a USSD session pushed to their handset prompting them to enter their mobile wallet PIN number to authorize the transaction (or to cancel the transaction)

To initiate a mobile money transaction, an HTTP POST should be made to the URL: https://www.paynow.co.zw/interface/remotetransaction

The fields included in the HTTP POST to Paynow are identical to those specified in the [Initiate a Transaction section](initiate_transaction.md), with the exception of the additional required fields below:

**Field**|**Data Type**|**Description**
-----|-----|-----
phone|String|The subscriber number of the mobile money wallet to be debited
method|String|Limited to only ecocash at the time of writing


> **NOTE:** The integration ID being used for a mobile money transaction cannot be in test mode. The integration ID must also have an Ecocash payment method selected for use in the Paynow setup area. 

Failure to conform to these requirements will result in an error being returned during the initiate mobile money transaction request with an error description relating to this fact


### Express Checkout Test Mode

To use mobile money Express Checkout in test mode, there are four pre-configured mobile numbers that can be used to simulate various results: 

*N.B. The authemail field supplied during test mode should match one of the login email addresses for the merchant account being tested.*

> Success – 0771111111

Paynow will send a SUCCESS status update message 5 seconds after the transaction is initiated.

> Delayed Success – 0772222222

Paynow will send a SUCCESS status update message 30 seconds after the transaction is initiated. This simulates the user taking a longer than normal amount of time to authorize the transaction from their handset

> User Cancelled – 0773333333

Paynow will send a FAILED status update message 30 seconds after the transaction is initiated. This simulates the user cancelling the mobile money transaction.

> Insufficient Balance – 0774444444

Paynow will immediately fail the transaction during initiation and return an “Insufficient balance” error message.
