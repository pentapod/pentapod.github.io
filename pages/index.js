import React from 'react';
import Isvg from 'react-inlinesvg';

import Body from './../components/body';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textColor: '#575757',
    };
  }

  componentDidMount() {
    this.setState({
      textColor: `hsl(${Math.random() * 360}, 27%, 34%)`,
    });
  }

  render() {
    return (
      <Body>
        <div className="container" style={{ color: this.state.textColor }}>
          <div className="container-left">
            <div className="container-brand">
              <div className="logo"
                   style={{ width: 50, fill: this.state.textColor }}
                   >
                <Isvg src='/static/logo.svg'></Isvg>
              </div>
              <div className="brand"
                   style={{ width: 200, fill: this.state.textColor }}
                   >
                <Isvg src='/static/brand.svg'>pentapod</Isvg>
              </div>
            </div>
          </div>

          <div className="container-right">
            <section>
              <header><h2>About pentapod</h2></header>
              <p>
                pentapodは、ソフトウェア技術についての同人誌を制作する同人サークルです。
              </p>
            </section>
            <section>
              <header><h2>Member</h2></header>
              <ul>
                <li>緑豆はるさめ(<a href="https://twitter.com/spring_raining" target="_blank">@spring_raining</a>)</li>
              </ul>
            </section>
            <section>
              <p>
                ↓ご連絡はこちらまで↓<br />
                <a href="mailto:harusamex.com@gmail.com">harusamex.com@gmail.com</a>
              </p>
            </section>
          </div>
        </div>

        <style jsx global>{`
          body {
            background-color: #fff;
            font-size: 16px;
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
            font-weight: 200;
          }

          .isvg {
            transition: opacity 1s;
            opacity: 0;
          }
          .isvg.loaded {
            opacity: 1;
          }
        `}</style>

        <style jsx>{`
          .container {
            display: flex;
            max-width: 1080px;
            margin: 0 auto;
            padding-top: 10em;
          }
          .container-left {
            flex-basis: 300px;
            padding: 0 1em;
          }
          .container-right {
            flex-grow: 1;
            padding: 0 1em;
          }
          .container-brand {
            text-align: right;
          }
          .logo, .brand {
            display: block;
            margin-left: auto;
            padding-top: 1em;
          }

          @media (max-width: 640px) {
            .container {
              flex-direction: column;
              padding: 0 .5em;
            }
            .container-left {
              flex-basis: 150px;
              padding: 0;
            }
            .container-right {
              padding: 0;
            }
            .container-brand {
              padding-right: 3em;
            }
          }
        `}</style>
      </Body>
    );
  }
}
