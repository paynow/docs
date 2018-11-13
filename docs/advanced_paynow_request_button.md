---
id: advanced_paynow_request_button
title: Advanced Payment Request Button
sidebar_label: Advanced Payment Request Button
---
## How to Create

An advanced payment request button will allow the customer to enter additional details about the product or service they are purchasing. For the following tutorial, you will need to first create a "Custom Button Template" in the merchant's Paynow account. You can find this [here](https://www.paynow.co.zw/home/receivebuttonrequest)

**Once you've created a custom button template in Paynow, make note of its Integration ID as this will be required when creating the button or link URL.**

The button or link you create should have a hyperlink to the following URL:
https://www.paynow.co.zw/payment/billpaymentlink/`customer-email`?q=`arguments`

The parameter denoted by `customer-email` is optional. If specified, Paynow will anonymously log the customer in using the specified address (or present them with a log in page if they already have a Paynow account)

The parameter denoted by `arguments` above should be replaced by a URL encoded and then Base 64 encoded ([See URL Safe Base 64 Encoding](url_safe_base64_encoding.md)) string of the following options, each option separated by an ampersand (&) character:

Argument|Name|Data Type|Description|Default|Example
---|---|---|---|---|---
ID|id|Numeric|The Integration ID number of the custom button template on Paynow (see above)|n/a|1046
Payment Amount|amount|Numeric|The amount to be paid by the customer (if "Use Quantity" is ticked, this will be the unit price)|0.00|25.00
Quantity|quantity|Numeric|The quantity being paid for by the customer (unless "Use Quantity" is ticked, this will be ignored)|1.00|2.36
Locked|l|Numeric (1 or 0)|Whether or not the input fields will be editable by the customer|0|1
Fields|f1, f2, f3… etc.|Text|Any extra fields you have added to the template, in the order they appear on the custom button template on Paynow|(blank)|(see below)

*N.B. If the "Locked" argument is omitted or specified as 0 (zero) then the customer will be able to amend the **amount**, **quantity** and **any other input field** values when they arrive at Paynow. This may be useful in cases where the customer’s requirements are not pre-determined e.g. the quantity, item colour, caption and size of a t-shirt.*

*Due to the simplicity of this integration it is possible, even if the payment is marked as locked, that the customer can change the values. It is important the merchant checks these values after receiving payment. If you wish to integrate in a way that it is impossible for the customer to edit the amount and reference please see the 3 rd party shopping cart or link integration.*

## Step by step example

This example uses a custom button template where three extra fields were added:

- Item Colour (Select List)
- Caption (Text)
- Size (Text + Numeric)

1. Setup the Custom Button Template in Paynow and make note of its integration ID number.
	`1046`

1. Make note of the order of any extra fields you’ve added to your Custom Button Template in Paynow, and the default values you’d like them to have (if any). They will be inserted into your arguments as `f1, f2, f3 … etc`. in the order in which they have been setup in the template.

	Item|Value
	---|---
	**Payment amount (optional)**|75.50
	**f1 (optional)**|Red
	**f2 (optional)**|Pay when? Paynow!
	**f3 (optional)**|32
	**Locked (optional)**|1
	
1. Construct the arguments into key/value pairs.

	`id=1046&amount=75.50&f1=Red&f2=Pay+when%3F+Paynow%21&f3=32&l=1`
	
1. Base 64 encode the arguments ([See URL Safe Base 64 Encoding](url_safe_base64_encoding.md))

	`aWQ9MTA0NiZhbW91bnQ9NzUuNTAmZjE9UmVkJmYyPSBQYXkrd2hlbiUzRitQYXlub3clMjEmZjM9MzImbD0x`
	
1. URL encode the arguments ([See URL Safe Base 64 Encoding](url_safe_base64_encoding.md))

	`aWQ9MTA0NiZhbW91bnQ9NzUuNTAmZjE9UmVkJmYyPSBQYXkrd2hlbiUzRitQYXlub3clMjEmZjM9MzImbD0x`
	
1. Create the URL of the link, optionally including the customer’s email address before the arguments

	https://www.paynow.co.zw/payment/billpaymentlink/customer@gmail.com?q=aWQ9MTA0NiZhbW91bnQ9NzUuNTAmZjE9UmVkJmYyPSBQYXkrd2hlbiUzRitQYXlub3clMjEmZjM9MzImbD0x