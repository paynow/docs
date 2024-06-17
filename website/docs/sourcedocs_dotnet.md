---
id: sourcedocs_dotnet
title: Source Docs for .NET Library
sidebar_label: .NET
---

## Class: Webdev.Core.CanFail

```csharp
public abstract class Webdev.Core.CanFail
```

Methods

| Type     | Name                         | Summary |
| -------- | ---------------------------- | ------- |
| `String` | Errors(`Char` separator = ,) |         |
| `void`   | Fail(`String` error)         |         |

## Class: Webdev.Core.Constants

```csharp
public static class Webdev.Core.Constants
```

Static Fields

| Type     | Name                         | Summary |
| -------- | ---------------------------- | ------- |
| `String` | MobileMoneyMethodEcocash     |         |
| `String` | ResponseAwaitingDelivery     |         |
| `String` | ResponseAwaitingRedirect     |         |
| `String` | ResponseCancelled            |         |
| `String` | ResponseCreatedNotPaid       |         |
| `String` | ResponseDelivered            |         |
| `String` | ResponseError                |         |
| `String` | ResponseFailed               |         |
| `String` | ResponseInvalidId            |         |
| `String` | ResponseOk                   |         |
| `String` | ResponsePaid                 |         |
| `String` | UrlInitiateMobileTransaction |         |
| `String` | UrlInitiateTransaction       |         |

## Class: Webdev.Core.InitResponse

```csharp
public class Webdev.Core.InitResponse
    : CanFail
```

Properties

| Type                          | Name          | Summary |
| ----------------------------- | ------------- | ------- |
| `IDictionary<String, String>` | Data          |         |
| `Boolean`                     | HasRedirect   |         |
| `Boolean`                     | WasSuccessful |         |

Methods

| Type                          | Name           | Summary |
| ----------------------------- | -------------- | ------- |
| `IDictionary<String, String>` | GetData()      |         |
| `String`                      | PollUrl()      |         |
| `String`                      | RedirectLink() |         |
| `Boolean`                     | Success()      |         |

## Class: Webdev.Core.IResponse

```csharp
public interface Webdev.Core.IResponse
```

Methods

| Type      | Name      | Summary |
| --------- | --------- | ------- |
| `Boolean` | Success() |         |

## Class: Webdev.Core.StatusResponse

```csharp
public class Webdev.Core.StatusResponse
    : CanFail, IResponse
```

Properties

| Type                          | Name          | Summary |
| ----------------------------- | ------------- | ------- |
| `Decimal`                     | Amount        |         |
| `IDictionary<String, String>` | Data          |         |
| `String`                      | Reference     |         |
| `Boolean`                     | WasPaid       |         |
| `Boolean`                     | WasSuccessful |         |

Methods

| Type                          | Name      | Summary |
| ----------------------------- | --------- | ------- |
| `IDictionary<String, String>` | GetData() |         |
| `Boolean`                     | Paid()    |         |
| `String`                      | PollUrl() |         |
| `Boolean`                     | Success() |         |

## Class: Webdev.Exceptions.EmptyCartException

```csharp
public class Webdev.Exceptions.EmptyCartException
    : Exception, ISerializable, _Exception
```

## Class: Webdev.Exceptions.HashMismatchException

```csharp
public class Webdev.Exceptions.HashMismatchException
    : Exception, ISerializable, _Exception
```

## Class: Webdev.Exceptions.InvalidIntegrationException

```csharp
public class Webdev.Exceptions.InvalidIntegrationException
    : Exception, ISerializable, _Exception
```

## Class: Webdev.Exceptions.InvalidReferenceException

```csharp
public class Webdev.Exceptions.InvalidReferenceException
    : Exception, ISerializable, _Exception
```

## Class: Webdev.Helpers.Extensions

```csharp
public static class Webdev.Helpers.Extensions
```

Static Methods

| Type                          | Name                                         | Summary |
| ----------------------------- | -------------------------------------------- | ------- |
| `String`                      | GetString(this `MobileMoneyMethod` method)   |         |
| `IDictionary<String, String>` | ToDictionary(this `NameValueCollection` col) |         |

## Class: Webdev.Helpers.Hash

```csharp
public static class Webdev.Helpers.Hash
```

Static Methods

| Type      | Name                                                              | Summary |
| --------- | ----------------------------------------------------------------- | ------- |
| `String`  | Make(`IDictionary<String, String>` values, `Guid` integrationKey) |         |
| `Boolean` | Verify(`IDictionary<String, String>` data, `Guid` integrationKey) |         |

## Class: Webdev.Http.Client

```csharp
public class Webdev.Http.Client
```

Methods

| Type     | Name                                                              | Summary |
| -------- | ----------------------------------------------------------------- | ------- |
| `String` | PostAsync(`String` url, `Dictionary<String, String>` data = null) |         |

## Class: MobileMoneyMethod

```csharp
public enum Webdev.Payments.MobileMoneyMethod
    : Enum, IComparable, IFormattable, IConvertible
```

Enum

| Value | Name    | Summary |
| ----- | ------- | ------- |
| `0`   | Ecocash |         |

## Class: Webdev.Payments.Payment

```csharp
public class Webdev.Payments.Payment
```

Fields

| Type     | Name      | Summary |
| -------- | --------- | ------- |
| `String` | AuthEmail |         |

Properties

| Type      | Name      | Summary |
| --------- | --------- | ------- |
| `String`  | Reference |         |
| `Decimal` | Total     |         |

Methods

| Type                         | Name                                  | Summary |
| ---------------------------- | ------------------------------------- | ------- |
| `Payment`                    | Add(`String` title, `Decimal` amount) |         |
| `String`                     | ItemsDescription()                    |         |
| `Payment`                    | Remove(`String` title)                |         |
| `Dictionary<String, String>` | ToDictionary()                        |         |

## Class: Webdev.Payments.Paynow

```csharp
public class Webdev.Payments.Paynow
```

Properties

| Type     | Name           | Summary |
| -------- | -------------- | ------- |
| `Client` | Client         |         |
| `String` | IntegrationId  |         |
| `Guid`   | IntegrationKey |         |
| `String` | ResultUrl      |         |
| `String` | ReturnUrl      |         |

Methods

| Type             | Name                                                                                                  | Summary |
| ---------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| `Payment`        | CreatePayment(`String` reference, `Dictionary<String, Decimal>` values = null, `String` authEmail = ) |         |
| `StatusResponse` | PollTransaction(`String` url)                                                                         |         |
| `StatusResponse` | ProcessStatusUpdate(`String` response)                                                                |         |
| `StatusResponse` | ProcessStatusUpdate(`Dictionary<String, String>` response)                                            |         |
| `InitResponse`   | Send(`Payment` payment)                                                                               |         |
| `InitResponse`   | SendMobile(`Payment` payment, `String` phone, `MobileMoneyMethod` method = Ecocash)                   |         |
