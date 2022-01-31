import React from 'react';
import './Navlink.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link ,BrowserRouter} from 'react-router-dom'

const Navlink = ({
    text,
    tag,
    to,

}) => {
    const page = useSelector(state => state.page);
    const dispatch = useDispatch();
    const changePage = (value) => {
        dispatch({ type: 'pageChange', value})
    }
    return (
        <div className='Navlink' >
            <Link to={to} onClick={() => changePage(tag)} className="navP" style={(page == tag || (tag == 'home' && page == '/') || page == '/' + tag ) ? {color:'#75AF33', fontFamily: 'Spinnaker', fontSize: 'calc(2vmin - 2px)' } : { fontFamily: 'Spinnaker', fontSize: 'calc(2vmin - 2px)' }}>{text}</Link>
        </div>

    );
};

export default Navlink;
