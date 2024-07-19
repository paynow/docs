---
id: express_checkout_transactions
title: Express Checkout Transactions
sidebar_label: Express Checkout Transactions
---

An express checkout transaction allows a merchant to capture their customer's payment method and details inside their application and complete payment without redirecting the customer to Paynow.

Express checkout transactions currently support the following payment methods:
- Visa/Mastercard (via tokenized card details)
- Zimswitch (via tokenized card details)
- EcoCash
- OneMoney
- InnBucks
- PayGo (e.g. Omari)

## Initiate an Express Checkout Transaction

To initiate an express checkout transaction, an HTTP POST request should be made to the URL:

[https://www.paynow.co.zw/interface/remotetransaction](https://www.paynow.co.zw/interface/remotetransaction)

The fields below are required **in addition to those specified in the [Initiate a Transaction](/docs/initiate_transaction.html) section**

| Field | Required For | Data Type | Description |
| --- | --- | --- | --- |
| method | All | String | The payment method to be used. One of the following:<ul><li>zimswitch</li><li>vmc (Visa Mastercard)</li><li>ecocash</li><li>onemoney</li><li>innbucks</li><li>paygo</li></ul>
| phone | Mobile Money | String | The subscriber number of the mobile money wallet to be debited |
| token | Visa/Mastercard/Zimswitch | String | A token returned by a previous tokenized transaction. Used to carry out recurring payments without requiring further input from the card holder |
| merchanttrace | Visa/Mastercard/Zimswitch | String | A unique merchanttrace is required for each request to ensure that no duplicate debits are processed in the event of a request timeout or network interruption |

## Important Notes
### Integration

The integration ID you use must be configured in Paynow to include the selected payment method e.g. if you use `method=ecocash` then the integration ID must be configured to include an EcoCash payment method

### InnBucks
An express checkout request for InnBucks will return the following additional values:
- **authorizationcode** - the authorization code for the InnBucks transaction (display to customer)
- **authorizationexpires** - the date and time at which the given authorization code will expire, in the format d-MMM-yyyy HH:mm (display to customer)

The authorization code can also be displayed as a QR code to be scanned by the InnBucks mobile app. See [https://developers.google.com/chart/infographics/docs/qr_codes](https://developers.google.com/chart/infographics/docs/qr_codes) for more details on generating a QR code

You should also present the customer with a deep link [schinn.wbpycode://innbucks.co.zw?pymInnCode=xxxxxx](schinn.wbpycode://innbucks.co.zw?pymInnCode=xxxxxx) where `xxxxxx` is replaced with the authorization code, which can be used to initiate a transaction in the InnBucks mobile app

### PayGo

An express checkout request for PayGo will return the following additional values:
- **authorizationcode** - the authorization code for the PayGo transaction (display to customer)
- **authorizationqr** - a URL to the QR code for the PayGo transaction (display to customer)
- **authorizationexpires** - the date and time at which the authorization code will expire in the format d-MMM-yyyy HH:mm (display to customer)

### Visa/Mastercard & Zimswitch

For Visa/Mastercard & Zimswitch **token** transactions, the **merchanttrace** field is required. These transactions will be automatically re-tokenized during the payment and the new token returned in the status update callback message

> In order to initially get a token for a customer's payment instrument (card) which can be used repeatedly here, the merchant must redirect the customer to Paynow to complete a transaction where `tokenize=true` is specified in the initiate transaction request (see [Initiate Transaction](initiate_transaction.md#tokenize) for more information)
>
>The token is returned following a successful card payment (in the Status Update from Paynow) and can be stored by the merchant for future payments for the customer