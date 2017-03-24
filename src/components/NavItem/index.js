import React from 'react';
import { Link, IndexLink } from 'react-router';

class NavItem extends React.Component {
    render () {
        const { router } = this.context;
        const { index, onlyActiveOnIndex, to, children, ...props } = this.props;
        const isActive = router.isActive(to, onlyActiveOnIndex);
        const LinkComponent = index ? Link : IndexLink;

        return (
            <li className={isActive ? 'selected' : ''}>
                <LinkComponent {...props}>{children}</LinkComponent>
            </li>
        );
    }
}

NavItem.propTypes = {
  index: React.PropTypes.string,
  onlyActiveOnIndex: React.PropTypes.string,
  to: React.PropTypes.string,
  children: React.PropTypes.array
};


/*function Nav(props) {
    const context = {
        router: React.PropTypes.object
    };

    let isActive = context.router.isActive(props.to, true),
        className = isActive ? "selected " + props.className : props.className;    

    return (
        <li className={className}>
            <div className="sub-nav-inner">
                <Link {...this.props}>
                    {props.children}
                </Link>
            </div>
        </li>
    );
}*/


export default NavItem;
/*
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
});*/

// IconBell.propTypes = {
//   viewBox: React.PropTypes.string.isRequired,
//   className: React.PropTypes.string.isRequired
// };