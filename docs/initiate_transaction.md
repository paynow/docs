---
id: initiate_transaction
title: Initiate a transaction
sidebar_label: Initiate a transaction
---

When the customer is ready to make payment the merchant site must perform an Initiate Transaction
request. This request is in the form of an HTTP POST to the URL:

[https://www.paynow.co.zw/interface/initiatetransaction](https://www.paynow.co.zw/interface/initiatetransaction)

The HTTP POST should include the following fields:

**Field**|**Data Type**|**Description**
-----|-----|-----
id|Integer|Integration ID shown to the merchant in the “3rd Party Site or Link Profile” area of “Receive Payment Links” section of “Sell or Receive” on Paynow.
reference|String|The transaction’s reference on the merchant site, this should be unique to the transaction.
amount|Decimal|Final amount of the transaction to two decimal places (do not include a currency symbol).
additionalinfo|String| (*optional*) Additional info to be displayed on Paynow to the Customer. This should not include any confidential information.
returnurl|String|The URL on the merchant website the customer will be returned to after the transaction has been processed. It is recommended this URL contains enough information for the merchant site to identify the transaction.
resulturl|String|The URL on the merchant website Paynow will post transaction results to. It is recommended this URL contains enough information for the merchant site to identify the transaction.
authemail|String|(*optional*) If the field is present and set to an email address Paynow will attempt to auto login the customers email address as an anonymous user.  If the email address has a registered account the user will be prompted to login to that account.<br/><br/>**N.B. This field is required when initiating [Express Checkout Transactions](express_checkout_transactions.md#initiate-an-express-checkout-transaction)**
authphone|String|(*optional*) If the field is present and set to a valid mobile phone number, Paynow will attempt to use it as the customers mobile number for the duration of their session
authname|String|(*optional*) If the field is present, Paynow will attempt to use it as the customers name for the duration of their session
tokenize|Boolean|(*optional*) If set to true and the customer uses Visa/Mastercard to complete the transaction, the tokenized payment instrument will be returned in the **status update** which can be used for recurring payments without requiring further input from the card holder.<br/><br/> **N.B.** *A merchant may only use this field if permitted to tokenize payment instruments. Contact support@paynow.co.zw to apply for this functionality.*
merchanttrace|String|*(optional)* Must be unique per merchant if specified. Can be up to 32 characters in length. Used to check the status of a transaction in the event of a timeout or network error
status|String|Should be set to “Message” at this stage of the transaction.
hash|String|Details of Hash generation are provided in the [Generating Hash](generating_hash.md) section.


## Success
If the initiate transaction request is successful Paynow will reply with a message as a string and
formatted as an HTTP Post, i.e. each field separated by a & and Key Value pairs separated by an = and
all Values URL Encoded.

The message will contain the following fields:

**Field**|**Data Type**|**Description**
-----|-----|-----
browserurl|String|The URL on Paynow that the merchant site will redirect the Customer’s browser to. Upon redirect the Customer will perform their transaction.
pollurl|String|The URL on Paynow the merchant site can poll to confirm the transaction’s current status.
status|String|Set to “Ok” at this stage of the transaction.
hash|String|Details of Hash generation are provided in a later section of this

> It is vital that the merchant site verify the hash value contained in the message before redirecting the
Customer to the `browserurl`. 

Below is an example of a successful initiate transaction request:

```http
Status=Ok&BrowserUrl=http%3a%2f%2fwww.paynow.co.zw%3a7106%2fPayment%2fConfirmPayment%2f1169&PollUrl=http%3a%2f%2fwww.paynow.co.zw%3a7106%2fInterface%2fCheckPayment%2f%3fg uid%3d3cb27f4b-b3ef-4d1f-9178-5e5e62a43995&Hash=8614C21DD93749339906DB35C51B06006B33DC8C192F40DFE2DB6549942C837C4452E1D1333DE9DB7814B278C8B9E3C34D1A76D2F937DEE57502336E0A071412
```

## Error

If the initiate transaction request failed Paynow will reply with a message as a string and formatted as an HTTP Post, i.e. each field separated by a & and Key Value pairs separated by an = and all Values URL Encoded. 

The message will contain the following fields:

**Field**|**Data Type**|**Description**
-----|-----|-----
status|String|Set to “Error” at this stage of the transaction.
error|String|Details of the failure on Paynow

Below is an example of a unsuccessful initiate transaction request:

```http
Status=Error&Error=Invalid+amount+field
```