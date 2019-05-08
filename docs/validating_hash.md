---
id: validating_hash
title: Validating a hash on an inbound message
sidebar_label: Validating Hash
---
Take the following example message of a Paynow response message:

```http
status=Ok&browserurl=https%3a%2f%2fstaging.paynow.co.zw%2fPayment%2fConfirmPayment%2f9510&pollurl=https%3a%2f%2fstaging.paynow.co.zw%2fInterface%2fCheckPayment%2f%3fguid%3dc7ed41da-0159-46da-b428-69549f770413&paynowreference=9510&hash=750DD0B0DF374678707BB5AF915AF81C228B9058AD57BB7120569EC68BBB9C2EFC1B26C6375D2BC562AC909B3CD6B2AF1D42E1A5E479FFAC8F4FB3FDCE71DF4D
```

1.	Split the message into key/value pairs by splitting where you come across an ampersand (&) character
2.	Split each key/value pair into a key and a value by splitting where you come across an equal (=) character
3.	Join all values EXCEPT for the “hash” value into one long string, making sure to **URL decode each value** before joining it into the string 
e.g.
```http 
Okhttps://staging.paynow.co.zw/Payment/ConfirmPayment/9510https://staging.paynow.co.zw/Interface/CheckPayment/?guid=c7ed41da-0159-46da-b428-69549f7704139510
```
4.	Join your integration key to the end of the string from step 3 above
5.	Create a SHA512 hash of the string and convert the result to uppercase hexadecimal 
e.g.
```http
750DD0B0DF374678707BB5AF915AF81C228B9058AD57BB7120569EC68BBB9C2EFC1B26C6375D2BC562AC909B3CD6B2AF1D42E1A5E479FFAC8F4FB3FDCE71DF4D
```
6.	Compare the “hash” value from the inbound message to the hash you generated in step 5. If they match, then the inbound message hash is valid and you can be sure that the message came from Paynow.

> **N.B.** For this example we were using an integration key of **3e9fed89-60e1-4ce5-ab6e-6b1eb2d4f977**. You can test this with your hashing code to see if you get the same hash