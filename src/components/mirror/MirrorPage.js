import React from 'react';
import {IconLayout, IconSelfie, IconSettings, 
        IconSearch, IconModules, IconBell, IconCalendar,
      IconCloud}  from '../icons';

const Mirror = () => {
  return (
  <div className="box content bg-pink color-light" data-content-id="mirror">
			<header className="content-header">
				<ul className="mirror-settings-menu">
					<li>
						<a href="#/">
							<IconLayout />
							Layouts
						</a>
						<div className="mirror-settings-list-wrapper bg-lightest-blue">
							<ul className="mirror-settings-list">
								<li>layout1</li>
								<li>layout2</li>
								<li>layout3</li>
							</ul>
						</div>
					</li>
					<li>
						<a href="#/">
							<IconSelfie />
							Take selfie
						</a>
						<div className="mirror-settings-list-wrapper bg-lightest-blue">
							<ul className="mirror-settings-list">
								<li>Selfie Time!</li>
							</ul>
						</div>
					</li>
					<li>
						<a href="#/">
							<IconSettings />
							Settings
						</a>
						<div className="mirror-settings-list-wrapper bg-lightest-blue">
							<ul className="mirror-settings-list">
								<li>Setting 1</li>
								<li>Setting 2</li>
								<li>Setting 3</li>
							</ul>
						</div>
					</li>
				</ul>
			</header>

			<section className="row bg-lightest-blue module-search">
				<div className="col-xs-12 col-md-6">
					<div className="box">
						<div className="form-field-wrapper">
							<input type="text" placeholder="Type to add module..." className="module-search-input" />
							<IconSearch />
							<div className="module-search-list-wrapper">
								<ul className="module-search-list">
									<li>
										<a href="#/">
											<IconSettings />
											<strong>Reminder</strong> - lorem ipsum
										</a>
									</li>
									<li>
										<a href="#/">
											<IconSelfie />
											<strong>Photos</strong> - lorem ipsum
										</a>
									</li>
									<li>
										<a href="#/">
											<IconModules className="icon small-icon" />
											<strong>Training</strong> - lorem ipsum
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="row bg-dark-blue color-light-blue mirror-grid">
				<div className="col-xs">
					<div className="box">
						<div className="module">
							<IconModules />
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
						<div className="module">
							<IconCalendar className="icon" />
							<div className="module-settings bg-lightest-blue">
								<div className="module-settings-inner">
									<header>
										<IconCalendar />
										<h2>Calendar</h2>
										<div className="form-field-wrapper">
											<input type="checkbox" id="active-bell" checked /><label htmlFor="active-bell">Active</label>
										</div>
										<div className="form-field-wrapper">
											<a href="#/">Delete</a>
										</div>
									</header>
									<section>
										<p>hej hopp</p>
									</section>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xs">
					<div className="box" />
				</div>
				<div className="col-xs">
					<div className="box">
						<div className="module">
							<IconCloud className="icon" />
							<div className="module-settings bg-lightest-blue">
								<div className="module-settings-inner">
									<header>
										<IconCloud />
										<h2>Weather</h2>
										<div className="form-field-wrapper">
											<input type="checkbox" id="active-bell" checked /><label htmlFor="active-bell">Active</label>
										</div>
										<div className="form-field-wrapper">
											<a href="#/">Delete</a>
										</div>
									</header>
									<section>
										<p>Eddie Weather</p>
									</section>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer className="row center-xs">
				<div className="col-xs">
					<div className="box">
						<strong>3</strong> modules active
					</div>
				</div>
			</footer>
		</div>
  );
};

export default Mirror;