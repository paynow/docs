const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const siteConfig = require(process.cwd() + '/siteConfig.js');


class MyPage extends React.Component {
  render() {
    // ... your rendering code

    return (
        <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h2>About Paynow Developer Hub</h2>
            </header>
            <article>
                <p>
                Paynow is the leading payments and fintech company in Zimbabwe. We are committed to working with innovative developers, entrepreneurs and organizations to explore the vast opportunities that abound in fintech. We are investing in tools that enable you to build solutions for your clients or to accelerate the growth of your payments and e-commerce enabled business.</p>
                
                <p>Paynow has worked tirelessly to build industry relationships as well as to integrate with businesses and organizations in the business and financial sector, including international card processors, local banks, regulatory bodies, as well as public sector institutions and 3rd party vendors. Paynow has done the hard work so you don’t have to. You can just focus on building great applications and user experiences for your users and customers.</p>
                
                <p>Using Paynow SDKs, APIs, plugins, extensions and widgets you can quickly build a vast array of solutions including e-commerce marketplaces and applications that help individuals and businesses get paid. The only limit is your imagination. Come build with us and get paid.
                </p>
            </article>
          </div>
        </Container>
        </div>
      );
  };
}

MyPage.title = 'About';

module.exports = MyPage;
