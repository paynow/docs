---
id: notification_success_cancel_urls
title: Notification, Success & Cancel URLs
sidebar_label: Notification, Success & Cancel URLs
---
## How they work

When using a **Custom Button Template** to create an advanced payment request button, you have the option of entering a URL of your own that Paynow can post data to (by means of a form POST) to let you know about status updates, payment success or payment cancellation respectively.

The post is sent to the Notification URL, the client’s browser (with no extra information) will be redirected back to the Success or Cancel URL depending on transaction status.

### POST Data
The data posted by Paynow to the Notification URL will include the following fields:

Field|Description|Data Type|Example
---|---|---|---
Paynow_Reference|The Paynow transaction reference|Text|40222
Customer_Name|The name of the customer|Text|John Smith
Customer_Email|The customer’s email address|Text|customer@gmail.com
Customer_Phone|The customer’s phone number|Text|0733123456
Transaction_Amount|The transaction amount|Numeric|25.00
Amount_Paid|The amount debited from the customer's account|Numeric|26.30
Hash|A hash of the data in the form post ([see Verifying the Hash Value for more information](#verifying-the-hash-value))|Text|81D4957A0EB18F8079D33E5<br/>C0AF0F0F604D6F127F3C9EC9<br/>0D09FDB9001E1197CB0B276<br/>38348BD9FDB1ED72DA60830<br/>6F7E050C9445BFA08AC1A71<br/>F83F500CA59C
(extra fields)|A list of any extra fields you may have set up in the custom button template|Text|(see table below)

Any extra fields that were setup in the Custom Button Template will be included in the form post with their key and value, If the name contains a space it will be replaced with an underscore _, for example:

Field|Value
---|---
Item_Colour|Red
Caption|Pay when? Pay now!
Size|32

### Verifying the Hash Value

It is important for the developer to re-generate a hash of the posted data and compare it to the hash supplied in the form post to ensure that the data was in fact posted from Paynow (otherwise it is possible that the data may have been spoofed by a 3<sup>rd</sup> party)

You can find the Integration Key for the payment method in Paynow by clicking edit on the template.

To generate a hash value for the message follow the steps:

1. Concatenate the key plus the value with no space or separator in the same order they appear
in the post.
2. Append the Integration Key
3. UTF8 encode the string, note in PHP this should not be necessary, depending on your
configuration.
4. Create a SHA512 hash of the string and output the result as upper case hexadecimal.

This value should match the hash value in the post, if not do not accept the notification.