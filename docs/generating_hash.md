---
id: generating_hash
title: Gemerating Hash
sidebar_label: Complete transaction
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