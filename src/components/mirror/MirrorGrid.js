import React from 'react';
import {IconModules, IconBell, IconCalendar, IconCloud}  from '../icons';

function MirrorGrid() {
  return (
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
   );
}

MirrorGrid.propTypes = {
};

export default MirrorGrid;
