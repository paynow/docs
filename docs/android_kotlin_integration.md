---
id: android_kotlin_integration
title: Android Kotlin Integration
sidebar_label: Android
---

## Sign in to Paynow and get integration details

> Before you can start making requests to Paynow's API, you need to get an integration ID and integration Key from Paynow. Details about how you can retrieve the ID and key are explained in detail on [this page](generation.md)

## Prerequisites

In order to make use of this project, the following prerequisites must be met for it to work.
This integration guide will use Kotlin. For those who must use Java, you can easily translate the Kotlin code to Java.

1. Java JDK 7 or higher

2. Web server
If you do not want or are not able to set up a web server, you do not need it to get PayNow transactions working with Android.
To store In-App purchases so as to be able to restore them later say after a user changes devices, you can use a free service such as Google's Firebase to do so.

3. Internet Aceess for users
Your user will need internet access to be able to make a PayNow payment and also get verification of the mobile payment. To protect your users, you may wish to enable some form of system check to verify that they are connected to the internet.

Another tip, keep your payment processing code in a single activity or fragment and process all paymnents from there. In any other part of the app that needs paid access, simply query the payment status and send the transactions to your payment class.

## Installation
To use the Java Paynow SDK, you need to add the latest release as a dependency to your project. The latest release will be in the [Maven Central Repository](https://mvnrepository.com/artifact/zw.co.paynow/java-sdk). Add the Maven Central repository to your project level build.gradle file of your Android project

#### Gradle
```gradle
repositories {
	mavenCentral()
}
```

Then, in the app module or whichever module will process the payment, add the latest library as a dependency in the build.gradle file

#### Gradle
```gradle
dependencies {
	implementation 'zw.co.paynow:java-sdk:1.1.0'
}
```

In the app module, inside the android tag, you also need to add the Java source and target compatibility options. If you let Android Studio do it for you, it somehow does not resolve the error, so a quick manual edit of the build.gradle file does the trick.

#### Gradle
```gradle
android {
    //some other options here

compileOptions {
        sourceCompatibility = 1.8
        targetCompatibility = 1.8
    }
}//this brace closes the android tag.
```

## Getting started
Create an instance of `Paynow` associated with your integration ID and integration key as supplied by Paynow. 

```kotlin
val paynow = Paynow("INTEGRATION_ID", "INTEGRATION_KEY")
```

## Initiating the mobile based transaction
A mobile transaction is a transaction made using mobile money e.g. using Ecocash

> Note: Mobile based transactions currently only work for Ecocash with Econet numbers and OneMoney with Netone numbers

Create a new payment using the `createPayment(...)` method that requires a unique merchant reference and the email address of the user making the payment.

```kotlin
payment = paynow.createPayment("Invoice 32", "user@example.com")
payment.cartDescription = "Pay for 1 month access to Awesome App"
```

Adding items to the cart is the same as in web based transactions.

```kotlin
// Passing in the name of the item and the price of the item
payment.add("1 month access to Awesome App", 10)
```

When you are ready to submit the payment request, initiate the transaction by calling the `sendMobile(...)` method. 
It is important to note that the following code will make a network request. The following request should not be run on the UI thread, the app will crash if you do so as network requests cannnot be run on the main UI thread. For Kotlin, it is best to run all the following code in a co-routine with a delay of 30 seconds or so to poll for the transaction's status.
If you are using Java, you can use an Async task.

This code is in a suspend function called from a button click. You call this function as follows

```kotlin
launch {
    makeNetworkRequest()
}
```

Now for the function that runs the network request:

```kotlin
private suspend fun runRequest() {
    withContext(Dispatchers.Default) {

    val response = paynow.sendMobile(payment, phoneNum, MobileMoneyMethod.ECOCASH)
    
    if (response.isRequestSuccess) {

        // Get the poll url of the transaction
        val pollUrl = response.pollUrl()

        //calling the suspend function that checks for payment status
        checkPaymentStatus(pollUrl)

        } else {
          // Something went wrong
          Log.d("PayNow", response.errors())
          //Also find a way to give the user feedback that the request failed.
        }
    }
}
```

## Poll the transaction to check for the payment status

The `MobileInitResponse` response from Paynow will contain various information including:
* instructions for your customer on how to make the payment on their mobile phone
* poll URL to check if the transaction has been paid

```kotlin
 private suspend fun checkPaymentStatus(pollUrl: String) {
        delay(30000) //30 second delay to check the payment status.
        //Dont forget to show some form of dialog while this happens so the user knows our app is not hanging
        
        //checking if the payment has been paid
        val status = paynow.pollTransaction(pollUrl)

        if (status.paid()) {
            //User has paid. Unlock the features or whatever else you may nedd to do.
            //Don't forget to save to online server for future reference

        } else {
            Log.v("PayNow", "not paid")
            //Also notify user they have not paid
        }
    }
```

## Full usage example
The following is a full usage example for transactions. 

```kotlin
import zw.co.paynow.core.Paynow
import zw.co.paynow.core.Payment

class PayActivity : AppCompatActivity(), CoroutineScope by MainScope() {

    private lateinit var payment: Payment
    private lateinit var paynow: Paynow
    private lateinit var response: MobileInitResponse
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_pay)
        
        paynow = Paynow("INTEGRATION_ID", "INTEGRATION_KEY")
        
        btn_pay.setOnClickListener {
              pay()
        }
        
  }
  
private fun pay() {
    payment = paynow.createPayment("Invoice 32", "user@example.com")
    payment.cartDescription = "Pay for 1 month access to Awesome App"
    
    launch {
        makeNetworkRequest()
      }
}

private suspend fun makeNetworkRequest() {
        runRequest()
}

private suspend fun runRequest() {
    withContext(Dispatchers.Default) {

    val response = paynow.sendMobile(payment, phoneNum, MobileMoneyMethod.ECOCASH)
    
    if (response.isRequestSuccess) {

        // Get the poll url of the transaction
        val pollUrl = response.pollUrl()

        //calling the suspend function that checks for payment status
        checkPaymentStatus(pollUrl)

        } else {
          // Something went wrong
          Log.d("PayNow", response.errors())
          //Also find a way to give the user feedback that the request failed.
        }
    }
}

 private suspend fun checkPaymentStatus(pollUrl: String) {
        delay(30000) //30 second delay to check the payment status.
        //Dont forget to show some form of dialog while this happens so the user knows our app is not hanging
        
        //checking if the payment has been paid
        val status = paynow.pollTransaction(pollUrl)

        if (status.paid()) {
            //User has paid. Unlock the features or whatever else you may nedd to do.
            //Don't forget to save to online server for future reference

        } else {
            Log.v("PayNow", "not paid")
            //Also notify user they have not paid
        }
    }
}
```
