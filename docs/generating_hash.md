---
id: generating_hash
title: Generating Hash
sidebar_label: Generating Hash
---

Any message to or from Paynow must include a hash and the hash must be validated to ensure the authenticity of the message. To generate a hash value for the message follow the steps:

1. Concatenate the values in the message for each element in their raw form (i.e. if it is from a
result string URL decode any values first, if it is from a form post then this will already have
been done).
2. Append the Integration Key which can be found by editing the appropriate receive payment
link in the Receive Payment Links area of Paynow
3. UTF8 encode the string, note in PHP this should not be necessary, depending on your
configuration.
4. Create a SHA512 hash of the string and output the result as upper case hexadecimal

In the examples below, we were using an integration key of **3e9fed89-60e1-4ce5-ab6e-6b1eb2d4f977**. You can test this with your hashing code to see if you get the same hashes.

## Generating a hash for an outbound message
Take the following outbound example message which still requires a “hash” key/value pair to be added:

```
id=1201
reference=TEST REF
amount=99.99
additionalinfo=A test ticket transaction
returnurl= http://www.google.com/search?q=returnurl
resulturl=http://www.google.com/search?q=resulturl
status=Message
```

1.	Join all values into one long string (do not URL encode each value before joining it into the string) 
e.g. 
```
1201TEST REF99.99A test ticket transactionhttp://www.google.com/search?q=returnurlhttp://www.google.com/search?q=resulturlMessage
```
2.	Add your integration key to the end of the string generated in step 1 above 
e.g.
```
1201TEST REF99.99A test ticket transactionhttp://www.google.com/search?q=returnurlhttp://www.google.com/search?q=resulturlMessage3e9fed89-60e1-4ce5-ab6e-6b1eb2d4f977
```
3.	Create a SHA512 hash of the string and convert the result to uppercase hexadecimal 
e.g. 
```
2A033FC38798D913D42ECB786B9B19645ADEDBDE788862032F1BD82CF3B92DEF84F316385D5B40DBB35F1A4FD7D5BFE73835174136463CDD48C9366B0749C689
```
4.	Add this hash value to your outbound message in the format hash=your_hash (where your_hash is the hash you generated in step 3 above

N.B. For this example we were using an integration key of **3e9fed89-60e1-4ce5-ab6e-6b1eb2d4f977**. You can test this with your hashing code to see if you get the same hash.

You can find code examples for hashing in the [Code Examples](#code-examples) section below.

## Code Examples

> Please note these examples are not intended as examples of the best way of doing the hash, merely ones that are easy to understand.

### PHP

```php
private function CreateHash($values, $IntegrationKey) {
    $string = "";

    foreach($values as $key=>$value) {
        if( strtoupper($key) != "HASH" ){
            $string .= $value;
        }
    }
    
    $string .= $IntegrationKey;
    $hash = hash("sha512", $string);

    return strtoupper($hash);
}
```


### C#

```csharp
private static string GenerateTwoWayHash(Dictionary<string, string> items, Guid guid)
{
    string concat = string.Join("", 
         items.Select(c => (c.Value != null ? c.Value.Trim() : "")).ToArray()
    );

    SHA512 check = SHA512.Create();

    byte[] resultArr = check.ComputeHash(Encoding.UTF8.GetBytes(concat + guid));
    return ByteArrayToString (resultArr);
}

public static string ByteArrayToString(byte[] ba)
{
    StringBuilder hex = new StringBuilder(ba.Length * 2);
    foreach (byte b in ba)
        hex.AppendFormat("{0:x2}", b);

    return hex.ToString();
}
```