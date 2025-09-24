import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <nav className='sidebar'>
            <h2 className='sidebar-title'>メニュー</h2>
            <ul className='sidebar-list'>
                <li><Link to="/">home</Link></li>
                <li><Link to="/imageUpload">ImageUpload</Link></li>
                <li><Link to="/canvas">Canvas</Link></li>
                <li><Link to="/kanban">Kanban</Link></li>
            </ul>
        </nav>
    );
};

export default Sidebar;