---
id: polling_status
title: Polling for a Status Update
sidebar_label: Polling for a Status Update
---

The merchant site can poll for a current transaction status to Paynow at any point, but it should only be done in the following two scenarios:

- The merchant site receives an important status update from Paynow and wants to poll Paynow to confirm the status.
- The merchant site is going to delete old or unpaid transactions, before doing this the merchant site should poll Paynow and confirm the transaction status before deleting it from their system.

To poll for a transaction status the merchant site should perform an empty HTTP POST to the pollurl sent by Paynow in transaction initiation or status update.  Paynow will reply with a string formatted as an HTTP POST, i.e. each field separated by a & and Key Value pairs separated by an = and all Values URL Encoded, with the same fields as if it were posting a result to the merchant site.

An example of the result from Paynow is shown below:
```http
reference=siteid123&paynowreference=1%2c082&amount=100.00&status=Created&pollurl=http%3a%2f%2flocalhost%3a7105%2fInterface%2fCheckPayment%2f%3fguid%3d811e0233-e9c6-474f-a01a-f2a4df1dde51&hash=2D72F08C4F34B99DEC391E2A24F24C2598060B9F6D63CB0B961FEDAE7D7D69D6321931A18F8E1E0268DE5A4F72B5D76E5A8A767C810180D9D5AC921B444B51BA
```
## Using Merchant Trace
When making use of Express Checkout functionality on Paynow, the merchant should supply a **merchanttrace** field value in their request message (up to 32 characters in length, unique per merchant)

The merchant trace reference is stored against the transaction and will allow the merchant to query the status of a transaction in the event that they were unable to receive the **pollurl** in the response from Paynow e.g. network interruption or timeout.

A trace query can be made by request in the form of an HTTP POST to the URL:

[https://www.paynow.co.zw/interface/trace](https://www.paynow.co.zw/interface/trace)

The HTTP POST should include the following fields:

**Field**|**Data Type**|**Description**
-----|-----|-----
id|Integer|Integration ID shown to the merchant in the “3rd Party Site or Link Profile” area of “Receive Payment Links” section of “Sell or Receive” on Paynow.
merchanttrace|String|The original merchanttrace that was specified when the merchant initiated the transaction being traced
hash|String|Details of Hash generation are provided in the [Generating Hash](generating_hash.md) section.

### Transaction Found
If the trace successfully locates a transaction, Paynow will reply with a standard [Status Update](#status-update-from-paynow) message showing the status of the transaction

### Transaction Not Found
If a transaction is not found during a trace, the status NotFound will be returned. For example:

```http
status=NotFound&hash=2D72F08C4F34B99DEC391E2A24F24C2598060B9F6D63CB0B961FEDAE7D7D69D6321931A18F8E1E0268DE5A4F72B5D76E5A8A767C810180D9D5AC921B444B51BA
```

### Error

If there was an error during a trace operation, the error details will be returned. For example:

```http
status=Error&error=Trace+failed
```

>**N.B.** A trace error **does not** necessarily mean that the transaction was not found