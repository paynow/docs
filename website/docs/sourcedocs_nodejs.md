---
id: sourcedocs_nodejs
title: Source Docs for Node.js Library
sidebar_label: Node.JS
---

## Class: InitResponse

#### `constructor(data: *)`

Default constructor

#### `success: boolean`

Boolean indicating whether initiate request was successful or not

#### `hasRedirect: boolean`

Boolean indicating whether the response contains a url to redirect to

#### `redirectUrl: String`

The url the user should be taken to so they can make a payment

#### `error: String`

The error message from Paynow, if any

#### `pollUrl: String`

The poll URL sent from Paynow

#### `instructions: String`

The instructions for USSD push for customers to dial incase of mobile money payments

#### `status: String`

The status from paynow

## Class: Payment

#### `constructor(reference: String, authEmail: String)`

Payment constructor

#### `reference: string`

Unique identifier for transaction

#### `items: Array`

Items being paid from by client

#### `authemail: String`

Email address from client

#### `authEmail: *`

#### `add(title: String, amount: Number): Payment`

Adds an item to the 'shopping cart'

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| title | String |  |
| amount | Number |  |

#### `info(): String`

Generates the description for the payment

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

#### `total(): *|Number`

Get the total of the items in the cart

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## Class: Paynow

#### `constructor(integrationId: *, integrationKey: *, resultUrl: *, returnUrl: *)`

Default constructor

#### `integrationId: String`

Merchant's integration id

#### `integrationKey: String`

Merchant's integration key

#### `resultUrl: String`

Url where where transaction status will be sent

#### `returnUrl: String`

Url to redirect the user after payment

#### `send(payment: *): InitResponse`

Send a payment to paynow

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| payment | * |  | payment |

#### `sendMobile(payment: Payment, phone: String, method: String): InitResponse`

Send a mobile money payment to paynow

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| payment | Payment |  | The payment to send to paynow |
| phone | String |  | The phone number making payment |
| method | String |  | The mobile money method to use (currently only ecocash is supported) |

#### `createPayment(reference: *, authEmail: String): Payment`

Create a new Paynow payment

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| reference | * |  | The unique reference for the transaction |
| authEmail | String |  | The payer's email address |

#### `fail(message: *): void`

Throw an exception with the given message

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| message | * |  |

#### `init(payment: Payment): PromiseLike<InitResponse> | Promise<InitResponse>`

Initialize a new transaction with PayNow

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| payment | Payment |  |

#### `initMobile(payment: Payment, phone: String, method: String): PromiseLike<InitResponse> | Promise<InitResponse>`

Initialize a new mobile transaction with PayNow

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| payment | Payment |  | The payment to send to paynow |
| phone | String |  | The phone number making payment |
| method | String |  | The mobile money method to use (currently only ecocash is supported) |

#### `parse(response: *): InitResponse`

Parses the response from Paynow

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| response | * |  | response |

#### `generateHash(values: Object, integrationKey: String): string`

Creates a SHA512 hash of the transactions

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| values | Object |  | Key-value pair values to hash |
| integrationKey | String |  | The integration key to use when hashing the items |

#### `verifyHash(values: *): Boolean`

Verify hashes at all interactions with server

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| values | * |  | The values to validate |

#### `urlEncode(str: String): String`

URL encodes the given string

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| str | String |  | The string to encode |

#### `urlDecode(str: String): String`

URL decodes the given string

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| str | String |  | The string to decode |

#### `parseQuery(queryString: String): Object`

Parse responses from Paynow

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| queryString | String |  | The query string to parse |

#### `build(payment: Payment): {resulturl: String, returnurl: String, reference: String, amount: number, id: String, additionalinfo: String, authemail: String, status: String}`

Build up a payment into the format required by Paynow

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| payment | Payment |  | The payment to format |

#### `buildMobile(payment: Payment, phone: String, method: String): {resulturl: String, returnurl: String, reference: String, amount: number, id: String, additionalinfo: String, authemail: String, status: String}`

Build up a mobile payment into the format required by Paynow

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| payment | Payment |  | The payment to send to paynow |
| phone | String |  | The phone number making payment |
| method | String |  | The mobile money method to use (currently only ecocash is supported) |

#### `pollTransaction(url: String): PromiseLike<InitResponse> | Promise<InitResponse>`

Check the status of a transaction

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| url | String |  |

#### `parseStatusUpdate(response: String): StatusResponse`

Parses the response from Paynow

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| response | String |  |

#### `validate(payment: Payment): void`

Validates an outgoing request before sending it to Paynow (data sanity checks)

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| payment | Payment |  | The payment to validate |

## Class: StatusResponse

#### `constructor(data: *)`

Default constructor

#### `reference: String`

Merchant Transaction Reference

#### `amount: String`

The original amount of the transaction

#### `paynowreference: String`

Paynow transaction reference

#### `pollurl: String`

The URL on Paynow the merchant site can poll to confirm the transaction’s current status.

#### `status: String`

Status returned from Paynow

#### `error: String`

The error message returned from Paynow

# Global Functions

## Function: isNullOrEmpty()

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |