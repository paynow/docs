
# Contributing to Paynow SDKs

First and foremost, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to a Paynow SDK. Since everyone writes code differently, we need a way to ensure we have consistent code across the Paynow SDK family of projects. We kindly request you follow these guidelines in your contributions. Remember though that you can use your best judgment with regards to this, and feel free to propose changes to this document in a pull request.

Remember to stay in touch with the Paynow developer community at the [Paynow developer hub](https://developers.paynow.co.zw)!

## Issue tracking and pull requests
The SDK projects are maintained by you, the community. Pull requests and new issues are therefore very welcome. If you have a suggestion or identify an issue with a SDK, please raise it in the issues section as we use GitHub to track bugs. If you have solved any issues or implemented a suggestion, go ahead and create a pull request!

**Tags**

We uses tags to categorise issues. The following labels exist in Paynow SDKs.

| Label name	  | Description   |
| ------------- | ------------- |
| `bug`         | Something isn't working  |
| `duplicate`   | This issue or pull request already exists  |
| `enhancement`   | New feature or request |
| `good first issue`   | Good for newcomers  |
| `help wanted`   | Extra attention is needed  |
| `invalid`   | This doesn't seem right  |
| `question`   | Further information is requested  |
| `wontfix`   | This will not be worked on  |

**New issue guidelines**

Before raising an issue, keep the following in mind.

* If a bug is discovered, specify as much detail and instructions to reproduce it
* If a suggestion, describe benefits of the change

If you have a general usage question, you can seek help from the developer community at the [Paynow developer hub](https://developers.paynow.co.zw) rather than raise an issue on it.

**Pull request guidelines**

We follow the standard GitHub fork and pull approach to pull requests. Please adhere to this basic 3 step process when creating a pull request.

1. Fork the SDK repository
2. Develop your changes in a branch
3. Submit your pull request!

Keep the following in mind before submitting the pull request.
* Clearly describe the code change
* Describe benefits of the change
* Add comments if they can make the code more readable
* Where applicable, update the documentation to reflect your change
* If possible, specify possible drawbacks
* If the pull request addresses an existing issue, reference the issue
* If the SDK has tests,
  * ensure your change is covered in the tests by creating or updating and existing test
  * run the tests to ensure they still pass

## Coding Style
Each SDK is written in a different language, and since programming language best practises and design principles differ, each SDK has its own coding style requirements. Look for the `CODING-STYLE.md` file in the SDK project to see the guidelines relevant to the project you are working on.

The following however applies to all languages.

**General**

* Keep your code as readable as possible.
* The coding style in the SDK should be consistent.
* [Don't repeat yourself](http://en.wikipedia.org/wiki/Don't_repeat_yourself).
* Ignore all IDE and OS specific files in the repository.

**Git commit messages**
* Use the present tense e.g. "Add feature", not "Added feature"
* Structure your commit message like this:

    ```
    One line summary, specify what was changed (72 characters or less)

    Longer description
    ```

**Namespace**

For languages where a package or namespace applies, we use the name `zw.co.paynow`.

**Methods**

The following objects and method signatures (method name and args) are the same across the SDKs.

Paynow - represents a Paynow integration associated with an integration ID and key

| Method signature | Description |
| ------------- | ------------- |
| `Paynow(integrationId, integrationKey)` | Instantiate Paynow instance  |
| `Paynow(integrationId, integrationKey, resultUrl, returnUrl)` | Instantiate Paynow instance  |
| `setResultUrl(url)` | Set the result url where the payment update wll be posted |
| `setReturnUrl(url)` | Set the return url where the customer will be redirected to after payment |
| `createPayment(merchantReference)` | Create a payment instance |
| `createPayment(merchantReference, authEmail)` | Create a payment instance |
| `createPayment(merchantReference, authEmail, cart)`| Create a payment instance |
| `send(payment)` | Initiate a web based transaction |
| `sendMobile(payment, mobileNumber, mobileMoneyMethod)` | Initiate a mobile based transaction |
| `pollTransaction(url)` | Initiate a mobile based transaction |
<br>

Payment - Represents a single transaction related to a merchantReference on the merchant site

| Method signature | Description |
| ------------- | ------------- |
| `add(product, price)` | Adds a new item to the transaction cart  |
| `remove(product)` | Remove an item from the transaction cart  |
| `setDescription(description)` | Set the description of the cart |
| `total()` | Get the total of the items in the cart |
<br>

Initialisation response - The response from Paynow after initialising a transaction

| Method signature | Description |
| ------------- | ------------- |
| `success()` | Whether or not the request was successful  |
| `redirectURL()` | Get the redirect url for a web based transaction |
| `pollUrl()` | Get the poll url used to check for transaction status updates |
| `instructions()` | Get the instructions for a mobile based transaction |
| `errors()` | Get the errors in the response |
<br>

Status response - The response from Paynow after polling for a status update

| Method signature | Description |
| ------------- | ------------- |
| `success()` | Whether or not the request was successful  |
| `paid()` | Whether or not the customer has paid |
| `errors()` | Get the errors in the response |

**Documentation**

It is important that the `README.md` files across the SDKs maintain a similar, consistent structure. See the `README-BLUEPRINT.md` file for the expected structure and information that should be covered in each SDK. Remember to use markdown for documentation.

## License
All the Paynow family of SDKs specify the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html) as the `LICENSE` file in the root directory of the source tree.

By contributing to a Paynow SDK, you agree that your contributions will be licensed under the specified license file.
