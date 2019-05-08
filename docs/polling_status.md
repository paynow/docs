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