import React from 'react';

const Profile = () => {
  return (
<div className="box content" data-content-id="profile">
			<header className="content-header">
				<div className="profile-header-content">
					<h1>Jonathan Doherty</h1>
				</div>
			</header>
			<section className="row profile-content">
				<div className="col-xs-12 col-md-6">
					<div className="box">
						<div className="form-field-wrapper">
							<label>Location</label>
							<input type="text" value="Sweden" />
						</div>
						<div className="form-field-wrapper selectbox-wrapper">
							<label>Timezone</label>
							<select name="" id="">
								<option value="">hej</option>
								<option value="">hej</option>
								<option value="">hej</option>
							</select>
						</div>	
						<div className="form-field-wrapper">
							<label>Mirror URL</label>
							<input type="text" value="http://magicmirror.com/papa-ogen/3%#€345€#888##€" />
						</div>		
						<div className="form-field-wrapper form-field-center">
							<button className="btn-submit"><span>Save Profile</span></button>
						</div>																			
					</div>
				</div>			
			</section>
		</div>
  );
};

export default Profile;