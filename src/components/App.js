import React  from 'react'
import {Link} from 'react-router'
import { IconProfile, IconMirror, IconModules,
        IconInstagram, IconFacebook, IconPinetrest }  from './common/Icons'
import Header from './common/Header'
import NavLink    from './common/Nav'
import styles from '../styles/magicmirror.scss'

const App = (props) => {
  return (
    <div className="container">

    <Header />

    

<div className="row center-md">
	<div className="col-xs col-md-8">
        <div className="box sub-header">
            <nav className="sub-nav">
                <ul>
                    <NavLink to="/profile">
                        <IconProfile />
                        Profile
                    </NavLink>
                    <NavLink to="/mirror" className="sub-nav-pink">
                        <IconMirror />
                        Profile
                    </NavLink>  
                    <NavLink to="/modules" className="sub-nav-lightest-blue">
                        <IconModules />
                        Modules
                    </NavLink>                                       
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

<footer className="row center-md mm-footer">
	<div className="col-xs col-md-8">
		<div className="box">
			<h1>Contact</h1>
			<section className="row mm-footer-social">
				<div className="col-xs">
					<div className="box">
						<a href="#/">
							<IconInstagram />
                            Instagram
						</a>
					</div>
				</div>
				<div className="col-xs">
					<div className="box">
						<a href="#/">
                            <IconFacebook />
							Facebook
						</a>
					</div>
				</div>
				<div className="col-xs">
					<div className="box">
						<a href="#/">
                        <IconPinetrest />
							Pinetrest
						</a>
					</div>
				</div>								
			</section>
		</div>
	</div>
</footer>
<section className="row mm-footer-credits">
	<div className="col-xs">
		<div className="box">Powered by <a href="http://craven-studio.com">Craven Studio</a></div>
	</div>
</section>    
    </div>
  );
};

export default App