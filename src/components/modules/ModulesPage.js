import React from 'react';
import {IconBell}  from '../icons';

const Module = () => {
  return (
    <div className="box content bg-lightest-blue" data-content-id="modules">
			<div className="modules-header-content">
				<h1>Modules</h1>			
			</div>
			<div className="modules">
				<div className="module-settings bg-lightest-blue">
					<div className="module-settings-inner">
						<header>
							<IconBell />
							<h2>Clock</h2>
							<div className="form-field-wrapper">
								<input type="checkbox" id="active-bell" checked /><label htmlFor="active-bell">Active</label>
							</div>
							<div className="form-field-wrapper">
								<a href="#/">Delete</a>
							</div>
						</header>
						<section>
							<div className="form-field-wrapper selectbox-wrapper">
								<label>Location</label>
								<select name="" id="">
									<option value="">hej</option>
									<option value="">hej</option>
									<option value="">hej</option>
								</select>
							</div>
							<div className="form-field-wrapper selectbox-wrapper">
								<label>Timezone</label>
								<select name="" id="">
									<option value="">hej</option>
									<option value="">hej</option>
									<option value="">hej</option>
								</select>
							</div>
						</section>
					</div>
				</div>	
			</div>	
    </div>
  );
};

export default Module;