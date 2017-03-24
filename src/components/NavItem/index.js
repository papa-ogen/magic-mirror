import React, { Component } from 'react';
import { Link } from 'react-router';

class NavItem extends Component {
    render() {
        let isActive = this.context.router.isActive(this.props.to, true);
        let className = isActive ? "selected " + this.props.className : this.props.className;

        return (
            <li className={className}>
              <div className="sub-nav-inner">
                <Link {...this.props}/>
              </div>
            </li>
        );
    }
}

NavItem.contextTypes = {
    router: React.PropTypes.object
};

NavItem.propTypes = {
  to: React.PropTypes.string.isRequired,
  className: React.PropTypes.string
};

export default NavItem;
