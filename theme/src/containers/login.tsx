import React from 'react'
import { themeSettings, text } from '../lib/settings'
import MetaTags from '../components/metaTags'
import Login from '../components/login/index'

const LoginContainer = (props) => {
	const {
		state: { pageDetails, loginUser },
	} = props

	return (
		<>
			<section className="section">
				<div className="container">
					<div className="content">
						<Login {...props} />
					</div>
				</div>
			</section>
		</>
	)
}

export default LoginContainer
