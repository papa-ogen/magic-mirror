import React from 'react'
import { Link } from 'react-router'
import { IconProfile, IconMirror, IconModules }  from './Icons'

export default React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },

    render: function () {
        let isActive = this.context.router.isActive(this.props.to, true),
            className = isActive ? "selected " + this.props.className : this.props.className;

        return (
            <li className={className}>
              <div className="sub-nav-inner">
                <Link {...this.props}>
                    {this.props.children}
                </Link>
              </div>
            </li>
        );
    }
});