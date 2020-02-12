import React from 'react';
import './Footer.css';

class Home extends React.Component {
  render() {
  return(
    <div className="footer mt-5 pt-5 bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-college">
            <h2>About KGEI <i className="fas fa-university"></i></h2>
            <p className="pr-5 text-white-50">K.G.Engineering Institute is one of the Oldest Polytechnic College of West Bengal. It was Established on 1922.</p>
          </div>
          <div className="ml-auto col-lg-5 col-xs-12 address">
            <h4 className="mt-lg-0 mt-sm-4">Address <i className="fas fa-map-marker-alt"></i></h4>
            <p>Bishnupur, Bankura, West Bengal, Pin : 722122</p>
            <p className="mb-0"><i className="fa fa-phone mr-3"></i>(03244) 252030</p>
            <p><i className="fas fa-envelope mr-3"></i>noemail@noemail.com</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col copyright">
            <p className=""><small className="text-white-80"><i className="fas fa-copyright"></i> {(new Date().getFullYear())}. Designed and Developed by KGEI Students.</small></p>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default Home;