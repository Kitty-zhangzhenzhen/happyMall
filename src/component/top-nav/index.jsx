import React from 'react'

import { Link } from 'react-router-dom'
class TopNav extends React.Component {
    constructor(props) {
        super(props)
    }
    //退出登录
    onLogout(){

    }
    render() {
        return (
            <nav className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand" href="index.html"><b>happy</b>mmall</Link>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <span className="dropdown-toggle" >
                            <i className="fa fa-user fa-fw"></i> 
                            <span>欢迎Adminxxx</span>
                            <i className="fa fa-caret-down"></i>
                        </span>
                        <ul className="dropdown-menu dropdown-user">
                         
                            <li><a onClick={()=>{this.onLogout()}}><i className="fa fa-sign-out fa-fw"></i> 退出登录</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        )


    }
}
export default TopNav