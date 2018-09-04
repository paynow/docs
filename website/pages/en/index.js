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
            <Button id="getStarted" href={docUrl('doc1.html', language)}>HOW TO GET STARTED</Button>
            <Button id="faqs" href={docUrl('doc2.html', language)}>FAQs</Button>
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
        content: 'Access Developer Documentation and start transacting online.<br/><a href="#">View Documentation</a>',
        image: imgUrl('docs.png'),
        imageAlign: 'top',
        title: 'DOCUMENTATION',
      },
      {
        content: 'Get started quickly. Use our SDKs PHP, .NET, PYTHON and more.<br/><a href="#">Get SDKs</a>',
        image: imgUrl('sdks.png'),
        imageAlign: 'top',
        title: 'SDKs',
      },      
      {
        content: 'Join our community and help each other integrate and #GetPaid.<br/><a href="#">Browse Forums</a>',
        image: imgUrl('forums.png'),
        imageAlign: 'top',
        title: 'FORUM',
      },      
      {
        content: 'Get the latest Fintech news, information and tips.<br/><a href="#">View Blog</a>',
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
            <div className="tabs-container">
              <ul className="tabs">
                <li className="tab-link current" data-tab="tab-1">PHP</li>
                <li className="tab-link" data-tab="tab-2">.NET</li>
                <li className="tab-link" data-tab="tab-3">NodeJS</li>
                <li className="tab-link" data-tab="tab-4">Python</li>
                <li className="tab-link" data-tab="tab-4">Java</li>
              </ul>

              <div id="tab-1" className="tab-content current">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
              <div id="tab-2" className="tab-content">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div id="tab-3" className="tab-content">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
              <div id="tab-4" className="tab-content">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
