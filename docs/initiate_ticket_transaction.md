---
id: initiate_ticket_transaction
title: Initiate a Passenger Ticket Transaction
sidebar_label: Initiate a Passenger Ticket Transaction
---
A merchant site that wants its customers to make payment for air tickets using Paynow can integrate using the `initiatetickettransaction` API.

When the customer is ready to make payment, the merchant site must perform an Initiate Transaction request.  This request is in the form of an HTTP POST to the URL:

https://www.paynow.co.zw/interface/initiatetickettransaction

The HTTP POST should include the following fields:

**Field**|**Data Type**|**Description**
-----|-----|-----
id|Integer|Integration ID shown to the merchant in the “3rd Party Site or Link Profile” area of “Receive Payment Links” section of “Sell or Receive” on Paynow.
reference|String|The transaction’s reference on the merchant site, this should be unique to the transaction.
amount|Decimal|Final amount of the transaction, in USD to two decimal places (do not include a currency symbol).
primaryticketnumber|String|Ticket/reservation number
passengerfirstname|String|-	
passengerlastname|String|-	
passengerid|String|ID of the passenger to whom the ticket was issued. For example, you can use this field for the frequent flyer number
passengerstatus|String|Your company's passenger classification, such as with a frequent flyer program. In this case, you might use values such as standard, gold, or platinum
passengertype|String|passenger classification associated with the price of the ticket. You can use one of the [Passenger Type](#passenger-types) values 
firstdeparturelocationcode|String|code for departure airport location, eg. JNB for Johannesburg
firstarrivallocationcode|String|code for arrival airport location, eg. JNB for Johannesburg
pnrnumber|String|The unique identifier to point to the PNR (Passenger Name Record) record in the database of a computer reservation system
officeiatanumber|String|-
ordernumber|String|-
placeofissue|String|The ticket office location
departuredate|Numeric|yyyymmdd (of the initial leg of the trip)
departuretime|String|Departure time of the initial leg of the trip. HH:mm \"GMT\"zzz e.g. 19:55 GMT+02:00
arrivaldate|Numeric|yyyymmdd (of the final leg of the trip)
arrivaltime|String|Departure time of the final leg of the trip. HH:mm \"GMT\"zzz e.g. 23:10 GMT+02:00
journeytype|String|Type of travel: one way, round trip
completeroute|String|Concatenation of individual travel legs in the format ORIG1-DEST1[:ORIG2-DEST2...:ORIGn-DESTn] e.g. CPT-JNB:JNB-NBO
additionalinfo|String|(*optional*) Additional info to be displayed on Paynow to the Customer.  This should not include any confidential information.
returnurl|String|The URL on the merchant website the customer will be returned to after the transaction has been processed.  It is recommended this URL contains enough information for the merchant site to identify the transaction.
resulturl|String|The URL on the merchant website Paynow will post transaction results to.  It is recommended this URL contains enough information for the merchant site to identify the transaction.
authemail|String|(*optional*) If the field is present and set to an email address Paynow will attempt to auto login the customers email address as an anonymous user.  If the email address has a registered account the user will be prompted to login to that account.
status|String|Should be set to “Message” at this stage of the transaction.
hash|String|Should conform to [hash generation](generating_hash.md)

### Passenger Types

The following are values that can be used for the `passengertype` field:

**Passenger Type**|**Details**
-----|-----
ADT|Adult
CNN|Child
INF|Infant 
YTH|Youth 
STU|Student 
SCR|Senior Citizen 
MIL|Military

## Status update

Please refer to the [status update](status_update.md) section