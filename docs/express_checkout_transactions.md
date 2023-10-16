---
id: express_checkout_transactions
title: Express Checkout Transactions
sidebar_label: Express Checkout Transactions
---

An express checkout transaction allows the integrator to capture the customers payment method and details inside their application and initiate payment without redirecting the user to Paynow. This is ideal for mobile applications; however, integrators should be aware of PCI DSS requirements for capturing Visa/Mastercard details within their applications.

Express checkout transactions currently support mobile money and Visa/Mastercard payment methods.

For mobile money payment method (Ecocash and OneMoney are currently supported) the mobile subscriber specified in the initiate message will have a USSD session pushed to their handset prompting them to enter their mobile wallet PIN number to authorize the transaction (or to cancel the transaction).

## Initiate an Express Checkout Transaction

To initiate an express checkout transaction, an HTTP POST request should be made to the URL:

[https://www.paynow.co.zw/interface/remotetransaction](https://www.paynow.co.zw/interface/remotetransaction)

The fields below are required in addition to those specified in the [Initiate a Transaction](/docs/initiate_transaction.html) section

| Required For | Field | Data Type | Description |
| --- | --- | --- | --- |
| All | method | String | ecocash = Ecocash mobile money **OR** onemoney = OneMoney mobile money  **OR** vmc = Visa Mastercard **OR** innbucks = InnBucks **OR** paygo = PayGo |
| Mobile Money | phone | String | The subscriber number of the mobile money wallet to be debited |
| Visa/Mastercard | token | String | A token returned by a previous tokenized transaction. Used to carry out recurring payments without requiring further input from the card holder |
| Visa/Mastercard | merchanttrace | String | A unique merchanttrace is required for each request to ensure that no duplicate debits are processed in the event of a request timeout or network interruption |

## Important Notes
### Integration

The integration ID must have an Ecocash/OneMoney/Visa/Mastercard/InnBucks payment method selected for use in the Paynow setup area.

### Visa/Mastercard

For Visa/Mastercard token transactions, the **merchanttrace** field is required. These transactions will be automatically re-tokenized during the payment and the updated token will be returned in the status update callback message

### InnBucks
An express checkout request for InnBucks will return values for **authorizationcode** and **authorizationexpires** in the response. **authorizationcode** should be presented to the customer (optionally as a QR code which can be used by the InnBucks mobile app, see https://developers.google.com/chart/infographics/docs/qr_codes for more details) whilst **authorizationexpires** (formatted as d-MMM-yyyy HH:mm) indicates the date and time at which the given authorization code will expire.<br>A customer can be presented with a deep link schinn.wbpycode://innbucks.co.zw?pymInnCode=authorizationcode which can be used to initiate a transaction in the InnBucks mobile app

### PayGo

An express checkout request for PayGo will return the following values:
- **authorizationcode** - the authorization code for the PayGo transaction (display to customer)
- **authorizationqr** - a URL to the QR code for the PayGo transaction (display to customer)
- **authorizationexpires** - the date and time at which the authorization code will expire in the format d-MMM-yyyy HH:mm (display to customer)