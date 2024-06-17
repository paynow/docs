---
id: sourcedocs_php
title: Source Docs for PHP Library
sidebar_label: PHP
---

## Class: `\Paynow\Core\Constants`

| Visibility | Function |
|:-----------|:---------|
|||

## Class: `\Paynow\Core\InitResponse`

| Visibility | Function |
|:-----------|:---------|
| public | **`__construct(array $response)`** : `void`<br />*InitResponse constructor.* |
| public | **`data()`** : `array`<br />*Get the original data sent from Paynow* |
| public | **`errors(bool $pretty=true)`** : `string/array`<br />*Get the errors sent by Paynow* |
| public | **`instructions()`** : `void` |
| public | **`pollUrl()`** : `bool/string`<br />*Returns the poll URL sent from Paynow* |
| public | **`redirectUrl()`** : `bool/string`<br />*Returns the url the user should be taken to so they can make a payment* |
| public | **`success()`** : `mixed`<br />*Gets a boolean indicating whether a request succeeded or failed* |

## Class: `\Paynow\Core\Logger`

> Class Logger

| Visibility | Function |
|:-----------|:---------|
|||

## Class: `\Paynow\Core\StatusResponse`

| Visibility | Function |
|:-----------|:---------|
| public | **`__construct(array $response)`** : `void`<br />*Default constructor.* |
| public | **`amount()`** : `float/mixed` Returns the amount of the transaction, -1 if not available<br />*Get the original amount of the transaction* |
| public | **`data()`** : `array`<br />*Get the original data sent from Paynow* |
| public | **`errors(bool $pretty=true)`** : `string/array`<br />*Get the errors sent by Paynow* |
| public | **`paid()`** : `mixed/string`<br />*Get the status of the transaction* |
| public | **`paynowReference()`** : `void` |
| public | **`reference()`** : `void` |
| public | **`status()`** : `mixed/string`<br />*Get the status of the transaction* |

## Class: `\Paynow\Http\Client`

> HTTP Client

| Visibility | Function |
|:-----------|:---------|
| public | **`__construct()`** : `void`<br />*Default Constructor.* |
| public | **`execute([Paynow\Http\RequestInfo](#class-paynow-http-requestinfo) $info)`** : `mixed`<br />*Executes an HTTP request.* |

## Class: `\Paynow\Http\ConnectionException`

> Exception thrown if an error occurs while sending Http request

| Visibility | Function |
|:-----------|:---------|
|||

*This class extends \Exception*

*This class implements \Throwable*

## Class: `\Paynow\Http\RequestInfo`

> Stores parameters for an http request

| Visibility | Function |
|:-----------|:---------|
| public static | **`create(string $url, string $method, array $data=array())`** : `[Paynow\Http\RequestInfo](#class-paynow-http-requestinfo)`<br />*Create a new RequestInfo object.* |
| public | **`getData()`** : `string`<br />*Gets the data for the http request as an http query string.* |
| public | **`getMethod()`** : `string`<br />*Get the method for the http request.* |
| public | **`getUrl()`** : `string`<br />*Get the url for the http request.* |

## Class: `\Paynow\Payments\EmptyCartException`

> Exception thrown when there's an attempt to send an empty cart to Paynow

| Visibility | Function |
|:-----------|:---------|
| public | **`__construct([Paynow\Payments\FluentBuilder](#class-paynow-payments-fluentbuilder) $builder)`** : `void`<br />*EmptyCartException constructor.* |

*This class extends \InvalidArgumentException*

*This class implements \Throwable*

...

