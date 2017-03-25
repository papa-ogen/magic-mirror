import React from 'react';
import MirrorSettings from './MirrorSettings';
import ModuleSearchContainer from '../../containers/ModuleSearchContainer';
import MirrorGrid from './MirrorGrid';

const Mirror = () => {
  return (
  <div className="box content bg-pink color-light">
			<header className="content-header">

        <MirrorSettings />

      </header>

			<ModuleSearchContainer />

      <MirrorGrid />

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
