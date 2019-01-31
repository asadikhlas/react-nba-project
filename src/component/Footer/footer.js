import React from 'react';
import Styles from './footer.module.css';
import {Link} from 'react-router-dom';

import { CURRENT_YEAR } from '../../config';

const Footer = () => (
    <div className={Styles.footer}>
        <Link to="/" className={Styles.logo}>
        <img alt="nba logo" src="/images/nba_logo.png" />
        </Link>
        <div className={Styles.right}>
            @NBA {CURRENT_YEAR} All Right Reserved.
        </div>
    </div>
)

export default Footer;