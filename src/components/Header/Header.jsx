import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="navbar bg-base100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Wisdom Wolf</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    {/* <input type="text" placeholder="Search" className="input input-bordered" /> */}
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="user-profile-pic" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;