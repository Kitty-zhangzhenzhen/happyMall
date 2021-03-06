import React from 'react'

import { Link, NavLink } from 'react-router-dom'

class SideNav extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <nav className="navbar-default navbar-side">
                <div className="sidebar-collapse">
                    <ul className="nav">

                        <li>
                            <NavLink exact activeClassName="active-menu" to="/"><i className="fa fa-dashboard"></i> 首页</NavLink>
                        </li>



                        <li className="active">
                            <Link to="/product"><i className="fa fa-sitemap"></i> 商品<span className="fa arrow"></span></Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/product" activeClassName="active-menu">商品管理</NavLink>
                                    <NavLink to="/product-category" activeClassName="active-menu">品类管理</NavLink>
                                </li>

                            </ul>
                        </li>
                        <li className="active">
                            <Link to="/order"><i className="fa fa-sitemap"></i> 订单<span className="fa arrow"></span></Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/order" activeClassName="active-menu">订单管理</NavLink>
                                </li>

                            </ul>
                        </li>
                        <li className="active">
                            <Link to="/user"><i className="fa fa-sitemap"></i> 用户<span className="fa arrow"></span></Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/user" activeClassName="active-menu">用户管理</NavLink>
                                </li>

                            </ul>
                        </li>


                    </ul>

                </div>

            </nav>
        )


    }
}
export default SideNav