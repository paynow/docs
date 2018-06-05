---
id: status_update
title: Status Update
sidebar_label: Status Update
---

Whenever the status of a transaction is changed, for example payment made, the Paynow server will send the following message to the merchant server. The message will be sent as an HTTP POST to the `resulturl` specified by the merchant when the transaction initiation occurred.


**Field**|**Data Type**|**Description**
-----|-----|-----
reference|String|The transaction’s reference on the merchant site.
amount|Decimal|Final amount of the transaction
paynowreference|String|Reference number for the transaction in Paynow.
pollurl|String|The URL on Paynow the merchant site can poll to confirm the transaction’s current status.
status|String|After payment is complete Paynow will notify the merchant site with one of the following [statuses](#statuses) 
hash|String|Details of Hash generation are provided in a later section of this document.

**Status**|**Description**
-----|-----
“Paid”|Transaction paid successfully, the merchant will receive the funds at next settlement
“Awaiting Delivery”|Transaction paid successfully, but is sitting in suspense waiting on the merchant to confirm delivery of the goods.
“Delivered”|The user or merchant has acknowledged delivery of the goods but the funds are still sitting in suspense awaiting the 24 hour confirmation window to close.

>The following are other possible status settings, these will sent to the merchant site if they change in Paynow or if the merchant polls Paynow for the current status:

**Status**|**Description**
-----|-----
“Created”|Transaction has been created in Paynow, but has not yet been paid by the customer.
“Sent”|Transaction has been created in Paynow and an up stream system, the customer has been referred to that upstream system but has not yet made payment.
“Cancelled”|The transaction has been cancelled in Paynow and may not be resumed and needs to be recreated.
“Disputed”|Transaction has been disputed by the Customer and funds are being held in suspense until the dispute has been resolved.
“Refunded”|Funds were refunded back to the customer.

The merchant server is not expected to reply to this message. If an important update is received, e.g. that the transaction has been paid it is recommended the merchant site polls Paynow for a status to confirm it matches the incoming message from Paynow.

> On any status update it is vital the merchant site validates the hash in the message to confirm the message authenticity.
