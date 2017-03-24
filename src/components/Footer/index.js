import React from 'react';
import { IconInstagram, IconFacebook, IconPinetrest }  from '../icons';

const Footer = () => {
  return (
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
  );
};

export default Footer;