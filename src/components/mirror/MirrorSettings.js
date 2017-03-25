import React from 'react';
import {IconLayout, IconSelfie, IconSettings}  from '../icons';

function MirrorSettings() {
  return (
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
   );
}

MirrorSettings.propTypes = {
};

export default MirrorSettings;
