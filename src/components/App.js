import React           from 'react';
import { IconProfile,
         IconMirror,
         IconModules } from './icons';
import Header          from './Header';
import NavItem         from './NavItem';
import Footer          from './Footer';
import Credits         from './common/Credits';

require('../styles/magicmirror.scss');

const App = (props) => {
  return (
    <div className="container">

        <Header />

        <div className="row center-md">
            <div className="col-xs col-md-8">
                <div className="box sub-header">
                    <nav className="sub-nav">
                        <ul>
                            <NavItem to="/profile">
                                <IconProfile />
                                Profile
                            </NavItem>
                            <NavItem to="/mirror" className="sub-nav-pink">
                                <IconMirror />
                                Mirror
                            </NavItem>
                            <NavItem to="/modules" className="sub-nav-lightest-blue">
                                <IconModules />
                                Modules
                            </NavItem>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

        <main className="row center-md">
            <div className="col-xs col-md-8">
            {props.children}
            </div>
        </main>

        <Footer />

        <Credits />

    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.object
};

export default App;
