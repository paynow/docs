/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div id={this.props.id} className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button id="getStarted" href={docUrl('quickstart.html', language)}>HOW TO GET STARTED</Button>
            <Button id="faqs" href={pageUrl('try.html', language)}>TRY IT OUT</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const FeatureCallout = props => (
  <div
    id="signupCallToAction"
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <div>
      <p>Create a free developer account </p>
      <Button id="signup" href={'https://forums.paynow.co.zw/signup'}>SIGN UP</Button>
    </div>
    {/* <MarkdownBlock>These are features of this project</MarkdownBlock> */}
  </div>
);

const Features = props => (
  <Block id="dsfb" layout="fourColumn">
    {[
      {
        content: 'Access Developer Documentation and start transacting online.<br/><a href="/docs/quickstart.html">View Documentation</a>',
        image: imgUrl('docs.png'),
        imageAlign: 'top',
        title: 'DOCUMENTATION',
      },
      {
        content: 'Get started quickly. Use our SDKs PHP, .NET, PYTHON and more.<br/><a href="https://www.gitlab.com/paynow">Get SDKs</a>',
        image: imgUrl('sdks.png'),
        imageAlign: 'top',
        title: 'SDKs',
      },      
      {
        content: 'Join our community and help each other integrate and #GetPaid.<br/><a href="https://forums.paynow.co.zw/">Browse Forums</a>',
        image: imgUrl('forums.png'),
        imageAlign: 'top',
        title: 'FORUM',
      },      
      {
        content: 'Get the latest Fintech news, information and tips.<br/><a href="/blog">View Blog</a>',
        image: imgUrl('blog.png'),
        imageAlign: 'top',
        title: 'BLOG',
      },
    ]}
  </Block>
);

const GetStarted = props => (
  // <Block background="light">
  //   {[
  //     {
  //       content: '',
  //       image: imgUrl('dev.png'),
  //       imageAlign: 'left',
  //       title: 'GETTING STARTED',
  //     },
  //   ]}
  // </Block>
  <div  id="gettingStarted" className="container paddingBottom paddingTop">
    <div className="wrapper">
      <div className="gridBlock">
        <div className="blockElement imageAlignSide imageAlignLeft twoByGridBlock">
          <div className="blockImage">
            <img src={imgUrl('dev.png')}></img>
          </div>
          <div className="blockContent">
            <h2><p>Getting Started</p></h2>
            <h3>Obtain the Integration API keys</h3>
            <p>PaynowZW authenticates all API requests using your integration's API keys. You will need the API keys to successfully make requests to the API request.</p>
            <p>You can create integrations and keys via the Dashboard as described <a href={docUrl('integration_generation.html')}>here</a></p>
            <div className="tabs-container">
              <ul className="tabs parents">
                <li className="tab-link current" data-tab="tab-php">PHP</li>
                <li className="tab-link" data-tab="tab-dotnet">.NET</li>
                <li className="tab-link" data-tab="tab-nodejs">NodeJS</li>
                <li className="tab-link" data-tab="tab-python">Python</li>
                <li className="tab-link" data-tab="tab-java">Java</li>
              </ul>

              <div id="tab-php" className="tab-content current">
              <div className="tabs-container">
              <ul className="tabs">
                <li className="tab-link current" data-tab="tab-php" data-subtab="install">Install Library</li>
                <li className="tab-link" data-tab="tab-php" data-subtab="apirequest">Make an API request</li>
                <li className="tab-link" data-tab="tab-php" data-subtab="apiresponse">Handle API response</li>
                <li className="tab-link" data-tab="tab-php" data-subtab="nextsteps">Next Steps</li>
              </ul>
              <div id="tab-php-install" className="tab-content">
              <p>This library has a set of prerequisites that must be met for it to work</p>
              <ul>
              <li>PHP version 5.6 or higher</li>
              <li>Curl extension</li>
              </ul>
              <p>The library can be installed via Composer as shown below:</p>
<MarkdownBlock>
{`\`\`\`bash
$ composer require paynow/php-sdk
\`\`\``}
</MarkdownBlock>
<p>and include the composer autoloader</p>
<MarkdownBlock>
{`\`\`\`php
<?php
require_once 'path/to/vendor/autoload.php';

// Do stuff
\`\`\``}
</MarkdownBlock>
<p>Alternatively, if you do not have composer installed, use the autoloader file included with the library</p>
<MarkdownBlock>
{`\`\`\`php
<?php
require_once 'path/to/library/autoloader.php';

// Do stuff
\`\`\``}
</MarkdownBlock>
              </div>
              <div id="tab-php-apirequest" className="tab-content">
              <MarkdownBlock>
{`\`\`\`php
$paynow = new Paynow\\Payments\\Paynow(
'INTEGRATION_ID',
'INTEGRATION_KEY',
'http://example.com/gateways/paynow/update', // This is the result URL
'http://example.com/return?gateway=paynow' // This is the return URL
);

// Create new payment and pass in the reference and payer's email address
$payment = $paynow->createPayment('Invoice 35', 'user@example.com');

// Add items and their amounts to the payment
$payment->add('Bananas', 2.50);
$payment->add('Apples', 3.40);

// Send the payment and save the response from Paynow in a variable
$response = $paynow->send($payment);
\`\`\``}
              </MarkdownBlock>              
              </div>
              <div id="tab-php-apiresponse" className="tab-content">
<MarkdownBlock>
{`\`\`\`php  
if($response->success()) {
    // Redirect the user to Paynow
    $response->redirect();

    // Or if you prefer more control, get the link to 
    // redirect the user to, then use it as you see fit
    $link = $response->redirectLink();

    // Get the poll url (used to check the status of a transaction). 
    // You might want to save this in your DB
    $pollUrl = $response->pollUrl();
}
\`\`\``}
</MarkdownBlock>              
              </div>
              <div id="tab-php-nextsteps" className="tab-content">
              <p>Congratulations! Read on to begin integrating Paynow: <a href={docUrl('php_quickstart.html')}>Full Guide</a></p>
              <p>Alternatively, you can use any of the following plugins written for:</p>
              <ul>
                <li><a href={docUrl('woocommerce.html')}>WooCommerce</a></li>
                <li><a href={docUrl('gravity_forms.html')}>Gravity Forms</a></li>
                <li><a href={docUrl('easy_digital_downloads.html')}>Easy Digital Downloads</a></li>
              </ul>
              </div>
              </div>
              </div>

              <div id="tab-dotnet" className="tab-content">
              <div className="tabs-container">
              <ul className="tabs">
                <li className="tab-link current" data-tab="tab-dotnet" data-subtab="install">Install Library</li>
                <li className="tab-link" data-tab="tab-dotnet" data-subtab="apirequest">Make an API request</li>
                <li className="tab-link" data-tab="tab-dotnet" data-subtab="apiresponse">Handle API response</li>
                <li className="tab-link" data-tab="tab-dotnet" data-subtab="nextsteps">Next Steps</li>
              </ul>
              <div id="tab-dotnet-apikeys" className="tab-content current">dotnet api keys</div>
              <div id="tab-dotnet-install" className="tab-content">
              <p>This library has a set of prerequisites that must be met for it to work</p>
              <ul>
                <li>.NET 4.0 or later</li>
              </ul>
              <p>To install via the Nuget package manager console, run the following command</p>
              <pre>
              <MarkdownBlock>
{`\`\`\`bash
PM> Install-Package Paynow
\`\`\``}
              </MarkdownBlock>
              </pre>
              <p>and import the library as shown below: </p>
              <pre>
              <MarkdownBlock>
{`\`\`\`csharp
using Webdev.Payments.Paynow;
\`\`\``}
              </MarkdownBlock>
              </pre>                    
              </div>
              <div id="tab-dotnet-apirequest" className="tab-content">
              <MarkdownBlock>
{`\`\`\`csharp
var paynow = new Paynow("INTEGRATION_ID", "INTEGRATION_KEY");

paynow.ResultUrl = "http://example.com/gateways/paynow/update";
paynow.ReturnUrl = "http://example.com/return?gateway=paynow";
// The return url can be set at later stages. You might want to do 
// this if you want to pass data to the return url (like the reference 
// of the transaction)

// Create new payment and pass in the reference and payer's email address
var payment = paynow.CreatePayment("Invoice 35");

// Passing in the name of the item and the price of the item
payment.add("Bananas", 2.5m);
payment.add("Apples", 3.4m);

// Save the response from paynow in a variable
var response = paynow.Send(payment);
\`\`\``}
              </MarkdownBlock>              
              </div>
              <div id="tab-dotnet-apiresponse" className="tab-content">
              <MarkdownBlock>
{`\`\`\`csharp
var response = paynow.Send(payment);

if(response.Success()) 
{   
    // Get the url to redirect the user to so they can make payment
    var link = response.RedirectLink();
    
    // Get the poll url of the transaction
    var pollUrl = response.PollUrl(); 
}
\`\`\``}
              </MarkdownBlock>                  
              </div>
              <div id="tab-dotnet-nextsteps" className="tab-content">
              <p>Congratulations! Read on to begin integrating Paynow: <a href={docUrl('csharp_quickstart.html')}>Full Guide</a></p>              
              </div>
              </div>
              </div>

              <div id="tab-nodejs" className="tab-content">
              <div className="tabs-container">
              <ul className="tabs">
                <li className="tab-link current" data-tab="tab-nodejs" data-subtab="install">Install Library</li>
                <li className="tab-link" data-tab="tab-nodejs" data-subtab="apirequest">Make an API request</li>
                <li className="tab-link" data-tab="tab-nodejs" data-subtab="apiresponse">Handle API response</li>
                <li className="tab-link" data-tab="tab-nodejs" data-subtab="nextsteps">Next Steps</li>
              </ul>
              <div id="tab-nodejs-apikeys" className="tab-content current">nodejs api keys</div>
              <div id="tab-nodejs-install" className="tab-content">
              <p>This library has a set of prerequisites that must be met for it to work</p>
              <ul>
              <li>Node version 0.6.0 and above</li>
              <li>NPM (node's package manager, used to install the node library)</li>
              </ul>
              <p>Install the library using NPM or yarn</p>
              <MarkdownBlock>
{`\`\`\`bash
$ npm install --save paynow
\`\`\``}              
              </MarkdownBlock>
              <p>or</p>
              <MarkdownBlock>
{`\`\`\`bash
$ yarn add paynow
\`\`\``}              
              </MarkdownBlock>
              <p>and import the library as shown below:</p>
              <MarkdownBlock>
{`\`\`\`nodejs
const Paynow = require("paynow");
\`\`\``}                    
              </MarkdownBlock>
              </div>
              <div id="tab-nodejs-apirequest" className="tab-content">
              <MarkdownBlock>
{`\`\`\`nodejs
let paynow = new Paynow("INTEGRATION_ID", "INTEGRATION_KEY");

paynow.resultUrl = "http://example.com/gateways/paynow/update";
paynow.returnUrl = "http://example.com/return?gateway=paynow";
// The return url can be set at later stages. You might want to do 
// this if you want to pass data to the return url (like the reference 
// of the transaction)

// Create new payment and pass in the reference and payer's email address
let payment = paynow.createPayment("Invoice 35");

// Passing in the name of the item and the price of the item
payment.add("Bananas", 2.5);
payment.add("Apples", 3.4);

// Save the response from paynow in a variable
let response = paynow.send(payment);
\`\`\``}                    
              </MarkdownBlock>
              </div>
              <div id="tab-nodejs-apiresponse" className="tab-content">
              <MarkdownBlock>
{`\`\`\`nodejs                
// Check if request was successful
  if (response.success) {
    // Get the poll url (used to check the status of a transaction). You might  
    // want to save this in your DB
    let pollUrl = response.pollUrl;

    // Get the instructions
    let instructions = response.instructions;
  } else {
    // Ahhhhhhhhhhhhhhh
    // *freak out*
  }
  \`\`\``}          
              </MarkdownBlock>
              </div>
              <div id="tab-nodejs-nextsteps" className="tab-content">
              <p>Congratulations! Read on to begin integrating Paynow: <a href={docUrl('nodejs_quickstart.html')}>Full Guide</a></p>              
              </div>
              </div>
              </div>

              <div id="tab-python" className="tab-content">
              <div className="tabs-container">
              <ul className="tabs">
                <li className="tab-link current" data-tab="tab-python" data-subtab="install">Install Library</li>
                <li className="tab-link" data-tab="tab-python" data-subtab="apirequest">Make an API request</li>
                <li className="tab-link" data-tab="tab-python" data-subtab="apiresponse">Handle API response</li>
                <li className="tab-link" data-tab="tab-python" data-subtab="nextsteps">Next Steps</li>
              </ul>
              <div id="tab-python-install" className="tab-content">
              <p>This library has a set of prerequisites that must be met for it to work</p>
              <ul>
                <li>Requests</li>
                <li>pip - a package manager for Python packages</li>
              </ul>
              <MarkdownBlock>
{`\`\`\`bash                
$ pip install paynow
  \`\`\``}          
              </MarkdownBlock>
              <p>and import the Paynow class into your project</p>
              <MarkdownBlock>
{`\`\`\`python                
from paynow import Paynow

# Do stuff
  \`\`\``}          
              </MarkdownBlock>              
              </div>
              <div id="tab-python-apirequest" className="tab-content">
              <MarkdownBlock>
{`\`\`\`python                
paynow = Paynow(
    'INTEGRATION_ID', 
    'INTEGRATION_KEY',
    'http://example.com/gateways/paynow/update', 
    'http://example.com/return?gateway=paynow'
)

# Create new payment and pass in the reference and payer's email address
payment = paynow.create_payment('Order #100', 'test@example.com')

# Passing in the name of the item and the price of the item
payment.add('Bananas', 2.50)
payment.add('Apples', 3.40)

# Save the response from paynow in a variable
response = paynow.send(payment)
\`\`\``}
              </MarkdownBlock>
              </div>
              <div id="tab-python-apiresponse" className="tab-content">
              <MarkdownBlock>
{`\`\`\`python                
if response.success:

    # Get the link to redirect the user to, then use it as you see fit
    link = response.redirect_url

    # Get the poll url (used to check the status of a transaction). 
    # You might want to save this in your DB
    pollUrl = response.poll_url
\`\`\``}                
              </MarkdownBlock>
              </div>
              <div id="tab-python-nextsteps" className="tab-content">
              <p>Congratulations! Read on to begin integrating Paynow: <a href={docUrl('python_quickstart.html')}>Full Guide</a></p> 
              </div>
              </div>
              </div>

              <div id="tab-java" className="tab-content">
              <div className="tabs-container">
              <ul className="tabs">
                <li className="tab-link current" data-tab="tab-java" data-subtab="install">Install Library</li>
                <li className="tab-link" data-tab="tab-java" data-subtab="apirequest">Make an API request</li>
                <li className="tab-link" data-tab="tab-java" data-subtab="apiresponse">Handle API response</li>
                <li className="tab-link" data-tab="tab-java" data-subtab="nextsteps">Next Steps</li>
              </ul>
              <div id="tab-java-install" className="tab-content">
              <p>This library has a set of prerequisites that must be met for it to work</p>
              <ul>
                <li>Java JDK 6 or higher</li>
              </ul>
              <p>Install the library using either Gradle:</p>
              <MarkdownBlock>
{`\`\`\`gradle                
repositories {
  mavenCentral()
}
dependencies {
  compile 'zw.paynow:java-sdk:+'
}
\`\`\``} 
              </MarkdownBlock>
              <p>OR using Maven:</p>
              <MarkdownBlock>
{`\`\`\`xml                
<dependency>
    <groupId>zw.paynow</groupId>
    <artifactId>java-sdk</artifactId>
    <version>LATEST</version>
</dependency>
\`\`\``} 
              </MarkdownBlock>
              <p>and import the library into your project using the code below:</p>
              <MarkdownBlock>
{`\`\`\`java                
import webdev.core.*;
import webdev.payments.Paynow;
import webdev.payments.Payment;
\`\`\``} 
              </MarkdownBlock>                                
              </div>
              <div id="tab-java-apirequest" className="tab-content">
              <MarkdownBlock>
{`\`\`\`java
Paynow paynow = new Paynow("INTEGRATION_ID", "INTEGRATION_KEY");

paynow.setResultUrl("http://example.com/gateways/paynow/update");
paynow.setReturnUrl("http://example.com/return?gateway=paynow");
// The return url can be set at later stages. You might want to do 
// this if you want to pass data to the return url (like the reference 
// of the transaction)

//
Payment payment = paynow.createPayment("Invoice 35");

// Passing in the name of the item and the price of the item
payment.add("Bananas", 2.5);
payment.add("Apples", 3.4);

// Save the response from paynow in a variable
InitResponse response = paynow.send(payment);
\`\`\``} 
              </MarkdownBlock>
              </div>
              <div id="tab-java-apiresponse" className="tab-content">
              <MarkdownBlock>
{`\`\`\`java
InitResponse response = paynow.send(payment);

if(response.success()) 
{   
    // Get the url to redirect the user to so they can make payment
    String link = response.redirectLink();
    
    // Get the poll url of the transaction
    String pollUrl = response.pollUrl(); 
}
\`\`\``}                
              </MarkdownBlock>
              </div>
              <div id="tab-java-nextsteps" className="tab-content">
              <p>Congratulations! Read on to begin integrating Paynow: <a href={docUrl('java_quickstart.html')}>Full Guide</a></p> 
              </div>
              </div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Talk about trying this out',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"You are in great company!"}</h2>
      <p>See the awesome companies integrated with Paynow</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <FeatureCallout />
          <Features />
          <GetStarted />
          {/* <TryOut /> */}
          {/* <Description /> */}
          {/* <Showcase language={language} /> */}
          <FeatureCallout />
        </div>
      </div>
    );
  }
}

module.exports = Index;
