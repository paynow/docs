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
            <Button id="faqs" href="#">FAQs</Button>
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
      <Button id="signup" href={'https://forums.paynow.co.zw'}>SIGN UP</Button>
    </div>
    {/* <MarkdownBlock>These are features of this project</MarkdownBlock> */}
  </div>
);

const Features = props => (
  <Block layout="fourColumn">
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
            <div className="tabs-container">
              <ul className="tabs">
                <li className="tab-link current" data-tab="tab-php">PHP</li>
                <li className="tab-link" data-tab="tab-dotnet">.NET</li>
                <li className="tab-link" data-tab="tab-nodejs">NodeJS</li>
                <li className="tab-link" data-tab="tab-python">Python</li>
                <li className="tab-link" data-tab="tab-java">Java</li>
              </ul>

              <div id="tab-php" className="tab-content current">
              <p>This library has a set of prerequisites that must be met for it to work</p>
              <ul>
              <li>PHP version 5.6 or higher</li>
              <li>Curl extension</li>
              </ul>
              <p>The library can be installed via Composer as shown below:</p>
              <pre>
              <MarkdownBlock>
{`\`\`\`bash
composer require paynow/paynow
\`\`\``}
              </MarkdownBlock>
              </pre>
              </div>
              <div id="tab-dotnet" className="tab-content">
              <p>This library has a set of prerequisites that must be met for it to work</p>
              <ul>
                <li>.NET 4.0 or later</li>
              </ul>
              <p>To install via the Nuget package manager console, run the following command</p>
              <pre>
              <MarkdownBlock>
{`\`\`\`bash
PM> Install-Package PaynowZW
\`\`\``}
              </MarkdownBlock>
              </pre>
              </div>
              <div id="tab-nodejs" className="tab-content">
              <p>This library has a set of prerequisites that must be met for it to work</p>
              <ul>
              <li>Node version 0.6.0 and above</li>
              <li>NPM (node's package manager, used to install the node library)</li>
              </ul>
              <p>Install the library using NPM or yarn</p>
              <MarkdownBlock>
{`\`\`\`bash
$ npm install --save paynowzw/node-sdk
\`\`\``}              
              </MarkdownBlock>
              <p>or</p>
              <MarkdownBlock>
{`\`\`\`bash
$ yarn add paynowzw/node-sdk
\`\`\``}              
              </MarkdownBlock> 
              </div>
              <div id="tab-python" className="tab-content">
              <div className="tabs-container">
              <ul className="tabs">
                <li className="tab-link current" data-tab="tab-python" data-subtab="install">Obtain API Keys</li>
                <li className="tab-link" data-tab="tab-python" data-subtab="usage">Install Library</li>
                <li className="tab-link" data-tab="tab-python" data-subtab="something">Make test API request</li>
                <li className="tab-link" data-tab="tab-python" data-subtab="else">Handle test API response</li>
                <li className="tab-link" data-tab="tab-python" data-subtab="congratulations">Next Steps</li>
              </ul>
              </div>
              </div>
              <div id="tab-java" className="tab-content">
              <div className="tabs-container">
              <ul className="tabs">
                <li className="tab-link current" data-tab="tab-java" data-subtab="install">Obtain API Keys</li>
                <li className="tab-link" data-tab="tab-java" data-subtab="usage">Install Library</li>
                <li className="tab-link" data-tab="tab-java" data-subtab="something">Make test API request</li>
                <li className="tab-link" data-tab="tab-java" data-subtab="else">Handle test API response</li>
                <li className="tab-link" data-tab="tab-java" data-subtab="congratulations">Next Steps</li>
              </ul>
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
