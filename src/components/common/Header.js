import React from 'react'
import {Link} from 'react-router'
import { IconLogo, IconLock, IconStar }  from './Icons'

const Header = () => {
  return (
<header className="row center-md">
	<div className="col-xs col-md-8">
		<section className="box header">
			<div className="row">
				<div className="col-xs-10">
					<div className="box">
						<div className="logo">
							<IconLogo />
						</div>
					</div>
				</div>
				<div className="col-xs-2">
					<div className="box login">
							<Link to="/">
									<IconLock />
							</Link>
					</div>
				</div>					
			</div>
			<div className="header-bg">
				<IconStar />
				<IconStar id="star2"/>
				<IconStar id="star3"/>
				<IconStar id="star4"/>
				<IconStar id="star5"/>
			</div>
		</section>
	</div>
</header>
  );
};

export default Header;