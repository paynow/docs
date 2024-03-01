---
id: simple_paynow_request_button
title: Simple Payment Request Button
sidebar_label: Simple Payment Request Button
---
## How to Create

Using this functionality, you can send an e-mail (or put a button on a web page) requesting money from anybody with an email address and get notification as soon as they make payment.

The button or link you create should have a hyperlink to the following URL: https://www.paynow.co.zw/payment/link/`customer-email`?q=`arguments`

The parameter denoted by `customer-email` is optional. If specified, Paynow will anonymously log the customer in using the specified address (or present them with a log in page if they already have a Paynow account)

The parameter denoted by `arguments` above should be replaced by a URL encoded and then Base 64 encoded ([See URL Safe Base 64 Encoding](url_safe_base64_encoding.md)) string of the following options, each option separated by an ampersand (&) character:

Argument|Name|Data Type|Description|Default|Example
---|---|---|---|---|---
Merchant Email|search|Text|The Paynow email address of the merchant receiving payment|n/a|company@gmail.com
Payment Amount|amount|Numeric|The amount that is to be paid by the customer (see more below)|0.00|23.65
Payment Reference|reference|Text|The merchant's payment reference|(blank)|INV-12345
Locked|l|Numeric (1 or 0)|Whether or not the amount and reference fields will be editable by the customer|0|1

*N.B. If the “Locked” argument is omitted or specified as 0 (zero) then the customer will be able to amend the amount and reference values when they arrive at Paynow. This may be useful in cases where a donation amount (or any unspecified amount) is to be paid by the customer.*

*Due to the simplicity of this integration it is possible, even if the payment is marked as locked, that the customer can change the amount and reference. It is important the merchant checks these values after receiving payment. If you wish to integrate in a way that it is impossible for the customer to edit the amount and reference please see the 3 rd party shopping cart or link integration.*

## Step by step example

1. Gather the information you want to user to see.

	Item|Value
	---|---
	Merchant e-mail|company@gmail.com
	Payment amount (optional)|12.50
	Payment reference (optional)|ABC123
	Locked (optional)|1

1. URL encode each argument.

	Item|Value
	---|---
	Merchant e-mail|company%40gmail.com
	Payment amount|12.50
	Payment reference|ABC123
	Locked|1
	
1. Construct the arguments into key/value pairs.

	`search=company%40gmail.com&amount=12.50&reference=ABC123&l=1`
	
1. Base 64 encode the arguments ([See URL Safe Base 64 Encoding](url_safe_base64_encoding.md))

	`c2VhcmNoPWNvbXBhbnlAZ21haWwuY29tJmFtb3VudD0xMi41MCZyZWZlcmVuY2U9QUJDMTIzJmw9MQ==`

1. URL encode the arguments ([See URL Safe Base 64 Encoding](url_safe_base64_encoding.md))

	`c2VhcmNoPWNvbXBhbnlAZ21haWwuY29tJmFtb3VudD0xMi41MCZyZWZlcmVuY2U9QUJDMTIzJmw9MQ%3D%3D`

1. Create the URL of the link, optionally including the customer’s email address before the arguments.

	https://www.paynow.co.zw/payment/link/customer@gmail.com?q=c2VhcmNoPWNvbXBhbnlAZ21haWwuY29tJmFtb3VudD0xMi41MCZyZWZlcmVuY2U9QUJDMTIzJmw9MQ%3D%3D