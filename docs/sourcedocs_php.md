---
id: sourcedocs_php
title: Source Docs for PHP Library
sidebar_label: PHP
---

## Class: \Paynow\Core\Constants

| Visibility | Function |
|:-----------|:---------|

<hr />

## Class: \Paynow\Core\InitResponse

| Visibility | Function |
|:-----------|:---------|
| public | <strong>__construct(</strong><em>array</em> <strong>$response</strong>)</strong> : <em>void</em><br /><em>InitResponse constructor.</em> |
| public | <strong>data()</strong> : <em>array</em><br /><em>Get the original data sent from Paynow</em> |
| public | <strong>errors(</strong><em>bool</em> <strong>$pretty=true</strong>)</strong> : <em>string/array</em><br /><em>Get the errors sent by Paynow</em> |
| public | <strong>instructions()</strong> : <em>void</em> |
| public | <strong>pollUrl()</strong> : <em>bool/string</em><br /><em>Returns the poll URL sent from Paynow</em> |
| public | <strong>redirectUrl()</strong> : <em>bool/string</em><br /><em>Returns the url the user should be taken to so they can make a payment</em> |
| public | <strong>success()</strong> : <em>mixed</em><br /><em>Gets a boolean indicating whether a request succeeded or failed</em> |

<hr />

## Class: \Paynow\Core\Logger

> Class Logger

| Visibility | Function |
|:-----------|:---------|

<hr />

## Class: \Paynow\Core\StatusResponse

| Visibility | Function |
|:-----------|:---------|
| public | <strong>__construct(</strong><em>array</em> <strong>$response</strong>)</strong> : <em>void</em><br /><em>Default constructor</em> |
| public | <strong>amount()</strong> : <em>float/mixed Returns the amount of the transaction, -1 if not available</em><br /><em>Get the original amount of the transaction</em> |
| public | <strong>data()</strong> : <em>array</em><br /><em>Get the original data sent from Paynow</em> |
| public | <strong>errors(</strong><em>bool</em> <strong>$pretty=true</strong>)</strong> : <em>string/array</em><br /><em>Get the errors sent by Paynow</em> |
| public | <strong>paid()</strong> : <em>mixed/string</em><br /><em>Get the status of the transaction</em> |
| public | <strong>paynowReference()</strong> : <em>void</em> |
| public | <strong>reference()</strong> : <em>void</em> |
| public | <strong>status()</strong> : <em>mixed/string</em><br /><em>Get the status of the transaction</em> |

<hr />

## Class: \Paynow\Http\Client

> HTTP Client

| Visibility | Function |
|:-----------|:---------|
| public | <strong>__construct()</strong> : <em>void</em><br /><em>Default Constructor</em> |
| public | <strong>execute(</strong><em>[\Paynow\Http\RequestInfo](#class-paynow-http-requestinfo)</em> <strong>$info</strong>)</strong> : <em>mixed</em><br /><em>Executes an HTTP request</em> |

<hr />

## Class: \Paynow\Http\ConnectionException

> Exception thrown if an error occurs while sending Http request

| Visibility | Function |
|:-----------|:---------|

*This class extends \Exception*

*This class implements \Throwable*

<hr />

## Class: \Paynow\Http\RequestInfo

> Stores parameters for an http request

| Visibility | Function |
|:-----------|:---------|
| public static | <strong>create(</strong><em>string</em> <strong>$url</strong>, <em>string</em> <strong>$method</strong>, <em>array</em> <strong>$data=array()</strong>)</strong> : <em>[\Paynow\Http\RequestInfo](#class-paynow-http-requestinfo)</em><br /><em>Create a new RequestInfo object</em> |
| public | <strong>getData()</strong> : <em>string</em><br /><em>Gets the data for the http request as an http query string</em> |
| public | <strong>getMethod()</strong> : <em>string</em><br /><em>Get the method for the http request</em> |
| public | <strong>getUrl()</strong> : <em>string</em><br /><em>Get the url for the http request</em> |

<hr />

## Class: \Paynow\Payments\EmptyCartException

> Exception thrown when there's an attempt to send an empty cart to Paynow

| Visibility | Function |
|:-----------|:---------|
| public | <strong>__construct(</strong><em>[\Paynow\Payments\FluentBuilder](#class-paynow-payments-fluentbuilder)</em> <strong>$builder</strong>)</strong> : <em>void</em><br /><em>EmptyCartException constructor.</em> |

*This class extends \InvalidArgumentException*

*This class implements \Throwable*

<hr />

## Class: \Paynow\Payments\EmptyTransactionReferenceException

> Exception thrown when there's an attempt to send a transaction without a reference to Paynow

| Visibility | Function |
|:-----------|:---------|
| public | <strong>__construct(</strong><em>mixed</em> <strong>$builder</strong>)</strong> : <em>void</em> |

*This class extends \InvalidArgumentException*

*This class implements \Throwable*

<hr />

## Class: \Paynow\Payments\FluentBuilder

| Visibility | Function |
|:-----------|:---------|
| public | <strong>__construct(</strong><em>mixed</em> <strong>$ref</strong>, <em>string</em> <strong>$authEmail=`''`</strong>)</strong> : <em>void</em><br /><em>Default constructor</em> |
| public | <strong>__get(</strong><em>mixed</em> <strong>$name</strong>)</strong> : <em>void</em> |
| public | <strong>add(</strong><em>string/array</em> <strong>$item</strong>, <em>float/int</em> <strong>$amount=null</strong>)</strong> : <em>void</em><br /><em>Add a new item to the list</em> |
| public | <strong>computeTotal()</strong> : <em>void</em> |
| public | <strong>itemsDescription()</strong> : <em>void</em><br /><em>Get the description</em> |
| public | <strong>setDescription(</strong><em>mixed</em> <strong>$description</strong>)</strong> : <em>void</em> |
| public | <strong>toArray()</strong> : <em>void</em><br /><em>Convert the builder to an array</em> |
| protected | <strong>parseItems(</strong><em>array</em> <strong>$items</strong>)</strong> : <em>void</em><br /><em>Parse an array of items</em> |

<hr />

## Class: \Paynow\Payments\HashMismatchException

> Exception thrown if the hash sent from Paynow does not match the one generated locally

| Visibility | Function |
|:-----------|:---------|

*This class extends \Exception*

*This class implements \Throwable*

<hr />

## Class: \Paynow\Payments\InvalidIntegrationException

> Exception thrown if wrong credentials are used to make a request to Paynow

| Visibility | Function |
|:-----------|:---------|

*This class extends \Exception*

*This class implements \Throwable*

<hr />

## Class: \Paynow\Payments\InvalidUrlException

> Exception thrown when return or result url's are not set

| Visibility | Function |
|:-----------|:---------|

*This class extends \InvalidArgumentException*

*This class implements \Throwable*

<hr />

## Class: \Paynow\Payments\NotImplementedException

| Visibility | Function |
|:-----------|:---------|

*This class extends \Exception*

*This class implements \Throwable*

<hr />

## Class: \Paynow\Payments\Payment

| Visibility | Function |
|:-----------|:---------|
| public | <strong>__get(</strong><em>mixed</em> <strong>$name</strong>)</strong> : <em>void</em> |
| public | <strong>add(</strong><em>string/array</em> <strong>$item</strong>, <em>float/int</em> <strong>$amount=null</strong>)</strong> : <em>void</em><br /><em>Add a new item to the list</em> |
| public | <strong>computeTotal()</strong> : <em>void</em><br /><em>Calculate the total of the items in the 'cart'</em> |
| public static | <strong>create(</strong><em>string</em> <strong>$ref</strong>, <em>string</em> <strong>$authEmail=`''`</strong>)</strong> : <em>void</em><br /><em>Create an instance of the payment class (for normal payments)</em> |
| public static | <strong>createMobile(</strong><em>string</em> <strong>$ref</strong>, <em>string</em> <strong>$authEmail</strong>, <em>string</em> <strong>$phone</strong>, <em>string</em> <strong>$method</strong>)</strong> : <em>void</em><br /><em>Create an instance of the payment class (for mobile payments)</em> |
| public | <strong>itemsDescription()</strong> : <em>void</em><br /><em>Get the description for the items in the cart</em> |
| public | <strong>setDescription(</strong><em>string</em> <strong>$description</strong>)</strong> : <em>void</em><br /><em>Sets the description for the transaction</em> |
| public | <strong>toArray()</strong> : <em>void</em><br /><em>Convert the builder to an array</em> |
| protected | <strong>parseItems(</strong><em>array</em> <strong>$items</strong>)</strong> : <em>void</em><br /><em>Parse an array of items</em> |

<hr />

## Class: \Paynow\Payments\Paynow

| Visibility | Function |
|:-----------|:---------|
| public | <strong>__construct(</strong><em>string</em> <strong>$id</strong>, <em>string</em> <strong>$key</strong>, <em>mixed</em> <strong>$returnUrl</strong>, <em>mixed</em> <strong>$resultUrl</strong>)</strong> : <em>void</em><br /><em>Default constructor.</em> |
| public | <strong>createMobilePayment(</strong><em>string/null</em> <strong>$ref</strong>, <em>mixed</em> <strong>$authEmail</strong>)</strong> : <em>[\Paynow\Payments\FluentBuilder](#class-paynow-payments-fluentbuilder)</em> |
| public | <strong>createPayment(</strong><em>string/null</em> <strong>$ref</strong>)</strong> : <em>[\Paynow\Payments\FluentBuilder](#class-paynow-payments-fluentbuilder)</em> |
| public | <strong>getResultUrl()</strong> : <em>string</em><br /><em>Get the result url for the merchant</em> |
| public | <strong>getReturnUrl()</strong> : <em>string</em><br /><em>Get the merchant's return url</em> |
| public | <strong>pollTransaction(</strong><em>mixed</em> <strong>$url</strong>)</strong> : <em>[\Paynow\Core\StatusResponse](#class-paynow-core-statusresponse)</em><br /><em>Check the status of a transaction</em> |
| public | <strong>processStatusUpdate()</strong> : <em>[\Paynow\Core\StatusResponse](#class-paynow-core-statusresponse)</em><br /><em>Process a status update from Paynow</em> |
| public | <strong>send(</strong><em>[\Paynow\Payments\FluentBuilder](#class-paynow-payments-fluentbuilder)/array</em> <strong>$builder</strong>)</strong> : <em>[\Paynow\Core\InitResponse](#class-paynow-core-initresponse)</em><br /><em>Send a transaction to Paynow</em> |
| public | <strong>sendMobile(</strong><em>[\Paynow\Payments\FluentBuilder](#class-paynow-payments-fluentbuilder)</em> <strong>$builder</strong>, <em>mixed</em> <strong>$phone</strong>, <em>mixed</em> <strong>$method</strong>)</strong> : <em>[\Paynow\Core\InitResponse](#class-paynow-core-initresponse)</em><br /><em>Send a mobile transaction</em> |
| public | <strong>setResultUrl(</strong><em>string</em> <strong>$resultUrl</strong>)</strong> : <em>void</em><br /><em>Sets the merchant's result url</em> |
| public | <strong>setReturnUrl(</strong><em>string</em> <strong>$returnUrl</strong>)</strong> : <em>void</em><br /><em>Sets the merchant's return url</em> |
| protected | <strong>init(</strong><em>[\Paynow\Payments\FluentBuilder](#class-paynow-payments-fluentbuilder)</em> <strong>$builder</strong>)</strong> : <em>InitResponse The response from Paynow</em><br /><em>Initiate a new Paynow transaction</em> |
| protected | <strong>initMobile(</strong><em>[\Paynow\Payments\FluentBuilder](#class-paynow-payments-fluentbuilder)</em> <strong>$builder</strong>, <em>string</em> <strong>$phone</strong>, <em>string</em> <strong>$method</strong>)</strong> : <em>InitResponse The response from Paynow</em><br /><em>Initiate a new Paynow transaction</em> |

<hr />

## Class: \Paynow\Util\Hash

| Visibility | Function |
|:-----------|:---------|
| public static | <strong>make(</strong><em>array</em> <strong>$values</strong>, <em>mixed</em> <strong>$integration_key</strong>)</strong> : <em>void</em> |
| public static | <strong>verify(</strong><em>mixed</em> <strong>$values</strong>, <em>mixed</em> <strong>$key</strong>)</strong> : <em>void</em> |

