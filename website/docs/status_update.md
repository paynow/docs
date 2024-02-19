---
id: status_update
title: Status Update
sidebar_label: Status Update
---
## Status update from Paynow
Whenever the status of a transaction is changed, for example payment made, the Paynow server will send the following message to the merchant server. The message will be sent as an HTTP POST to the `resulturl` specified by the merchant when the transaction initiation occurred.


**Field**|**Data Type**|**Description**
-----|-----|-----
reference|String|The transaction’s reference on the merchant site.
amount|Decimal|Final amount of the transaction to two decimal places.
paynowreference|String|Reference number for the transaction in Paynow.
pollurl|String|The URL on Paynow the merchant site can poll to confirm the transaction’s current status. 
status|String|After payment is complete Paynow will notify the merchant site with one of the [Status](#statuses) values.
hash|String|Details of Hash generation are provided in the [Generating Hash](generating_hash.md) section.

The following fields will be returned in the status response message only if the merchant has been permitted to **tokenize payment instruments** on Paynow. Contact support@paynow.co.zw to apply for this functionality.

**Field**|**Data Type**|**Description**
-----|-----|-----
token|String|(*optional*) Payment instrument token for recurring payments. Refer to [the status update token field](#the-status-update-token-field) section for more details.
tokenexpiry|String|(*optional*) Payment instrument token expiry date in the format DDMMMYYYY

The following fields will be returned in the status response message only if the merchant has been setup to **return payment instrument details** OR in the status response message for [initiate a passenger ticket transaction](initiate_ticket_transaction.md). Contact support@paynow.co.zw to apply for this functionality.

**Field**|**Data Type**|**Description**
-----|-----|-----
paymentchannel|String|(*optional*) Only returned for successful payments: Name of the channel used e.g. Visa, Mastercard, Ecocash
paymentinstrument|String|(*optional*) Only returned for successful payments: Masked card number, mobile wallet MSISDN etc.
paymentinstrumentname|String|(*optional*) Only returned for successful payments:Cardholder Name
paymentinstrumentnationality|String|(*optional*) Only returned for successful payments: Domestic or Foreign
paymentchannelreference|String|(*optional*) Only returned for successful payments:Approval transaction code
paymentchanneleci|String|(*optional*) Only returned for successful payments:Electronic Commerce Indicator
paymentfraudscore|String|(*optional*) Payment Fraud Score
paymentfrauddecision|String|(*optional*) Issue, Request Manual Review, Reject




## Statuses

**Status**|**Description**
-----|-----
“Paid”|Transaction paid successfully, the merchant will receive the funds at next settlement.
“Awaiting Delivery”|Transaction paid successfully, but is sitting in suspense waiting on the merchant to confirm delivery of the goods.
“Delivered”|The user or merchant has acknowledged delivery of the goods but the funds are still sitting in suspense awaiting the 24 hour confirmation window to close.

The following are other possible status settings, these will sent to the merchant site if they change in Paynow or if the merchant polls Paynow for the current status:

**Status**|**Description**
-----|-----
“Created”|Transaction has been created in Paynow, but has not yet been paid by the customer.
“Sent”|Transaction has been created in Paynow and an up stream system, the customer has been referred to that upstream system but has not yet made payment.
“Cancelled”|The transaction has been cancelled in Paynow and may not be resumed and needs to be recreated.
“Disputed”|Transaction has been disputed by the Customer and funds are being held in suspense until the dispute has been resolved.
“Refunded”|Funds were refunded back to the customer.

The merchant server is not expected to reply to this message, however, if the response is an HTTP error status code, Paynow will resend the status update up to ten times before desisting.  If an important update is received, e.g. that the transaction has been paid it is recommended the merchant site polls Paynow for a status to confirm it matches the incoming message from Paynow.

> On any status update it is vital the merchant site [validates the hash](validating_hash.md) in the message to confirm the message authenticity.

## The Status Update “Token” Field
The token can be used to carry out recurring payments for customers of merchants who have recurring payments enabled, without exposing the customer’s sensitive payment instrument information to the merchant.

If *tokenize=true* is specified by the merchant in the initiate transaction message, then a token of the payment instrument will be returned in the [Status Update](#status-update-from-paynow) message along with its expiry date.

Tokens are valid for up to six (6) months from the date of issue, dependent upon the expiry date of the tokenized payment instrument.

>**N.B.** If a token is issued on 3 March 2019 for a credit card that expires at the end of April 2019, the token expiry date will be 30 April 2019, and not 3 September 2019 as one might otherwise expect.