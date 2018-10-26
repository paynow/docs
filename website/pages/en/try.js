const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const siteConfig = require(process.cwd() + '/siteConfig.js');


class MyPage extends React.Component {
  render() {
    // ... your rendering code

    return (
        <div className="docMainWrapper wrapper try">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h2>Playground</h2>
            </header>
            <div className="tabs-container">
              <ul className="tabs">
                <li className="tab-link current" data-tab="tab-nodejs">NodeJS</li>
                {/* <li className="tab-link" data-tab="tab-php">PHP</li> */}
                {/* <li className="tab-link" data-tab="tab-dotnet">.NET</li> */}
                <li className="tab-link" data-tab="tab-python">Python</li>
                {/* <li className="tab-link" data-tab="tab-java">Java</li> */}
              </ul>
              <div id="tab-nodejs" className="tab-content current"><div id="nodejs-runkit"></div></div>
              <div id="tab-php" className="tab-content">php</div>
              <div id="tab-dotnet" className="tab-content">dotnet</div>
              <div id="tab-python" className="tab-content"><a className="button" href="https://mybinder.org/v2/gh/spaghettiwews/paynow-demo-python/master?filepath=index.ipynb" target="_blank">Launch demo</a></div>
              <div id="tab-java" className="tab-content">java</div>
          </div>
          </div>
        </Container>
        </div>
      );
  };
}

MyPage.title = 'My Custom Title';

module.exports = MyPage;
