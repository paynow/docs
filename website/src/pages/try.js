import React from 'react'
import Container from '../../core/Container';
import MarkdownBlock from '../../core/MarkdownBlock';
import GridBlock from '../../core/GridBlock';
import siteConfig from '../../docusaurus.config';
import { defaultUrlTransform } from 'react-markdown';

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

MyPage.title = 'Playground';

export default MyPage;
