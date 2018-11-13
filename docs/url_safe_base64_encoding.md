---
id: url_safe_base64_encoding
title: URL Safe Base 64 Encoding
sidebar_label: URL Safe Base 64 Encoding
---

Base64 encoding of strings can result in characters like +, = and / which are **not** URL safe i.e. if included in a URL they would change the meaning/path of the URL.

For this reason Paynow uses **URL encoded, Base64 encoded** strings for some arguments. For your convenience, these methods are listed below

*N.B. You can also do this online at:*

- ***Base64 Encode*** - *http://www.freeformatter.com/base64-encoder.html*
- ***URL Encode*** - *http://www.freeformatter.com/url-encoder.html*


## C\#

```cs
private string GenerateLink(string reference, int locked, decimal amount, string merchantEmail, string customerEmail)
{
const string paynowUrl = "https://www.paynow.co.zw";

string arguments = string.Format(
"search={0}&amount={1}&reference={2}&l={3}",
HttpUtility.UrlEncode(merchantEmail),
HttpUtility.UrlEncode(amount.ToString("F02")),
HttpUtility.UrlEncode(reference),
locked);

arguments = HttpUtility.UrlEncode(Convert.ToBase64String(Encoding.ASCII.GetBytes(arguments)));
return string.Format("{0}/payment/link/{1}?q={2}", paynowUrl, customerEmail, arguments);
}
```