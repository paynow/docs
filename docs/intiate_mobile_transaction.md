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