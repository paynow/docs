---
id: test_mode
title: Test Mode
sidebar_label: Test Mode
---
When you first create an integration it is in test mode.  Test mode allows you to create, cancel and pay a transaction to test all possible scenarios with your system.  However no actual money is moved and you do not need access to Visa/MasterCard/Vpayments/EcoCash/TeleCash/OneMoney to do a test transaction.

> After creating a transaction ONLY THE MERCHANT ACCOUNT USED TO CREATE THE INTEGRATION can login and Fake a Payment.  Any other users will get a message saying the merchant is in testing and they cannot proceed with payment.

When making payment in test mode select [TESTING: Faked Success] and click [Make Payment], Paynow will reply to your site as if payment has been made. 

When you are happy that you have completed integration go back to the Integration Keys section and click [Request to be Set Live].  Paynow support will check you have performed at least one successful test transaction and set you to live.  Once you are set live you will begin receive payment from your select Payment Methods.

## Express Checkout (Mobile Money)
To use mobile money Express Checkout in test mode, there are four pre-configured mobile numbers that can be used to simulate various results: 

*N.B. The `authemail` field supplied during test mode should match one of the login email addresses for the merchant account being tested.*

> Success – 0771111111

Paynow will send a SUCCESS status update message 5 seconds after the transaction is initiated.

> Delayed Success – 0772222222

Paynow will send a SUCCESS status update message 30 seconds after the transaction is initiated. This simulates the user taking a longer than normal amount of time to authorize the transaction from their handset

> User Cancelled – 0773333333

Paynow will send a FAILED status update message 30 seconds after the transaction is initiated. This simulates the user cancelling the mobile money transaction.

> Insufficient Balance – 0774444444

Paynow will immediately fail the transaction during initiation and return an “Insufficient balance” error message.