/** @format */

import React from 'react'
import { Link } from 'react-router-dom'

import * as url from '../../../config/route_url'

function NavigationBarItems() {

        return (
            <ul>
                <li>
                    <Link
                        to={url.HOME}>
                        Home
                    </Link>
                </li>
            </ul>
        )
}

export default NavigationBarItems
