import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { themeSettings, text } from '../lib/settings';

const FooterMenu = () => {
		this.state = {
			isActive: false
		};

	isActiveToggle = () => {
		this.setState({
			isActive: !this.state.isActive
		});
	};

		const { title, items } = this.props;
		let ulItems = null;

		if (items && items.length > 0) {
			ulItems = items.map((item, index) => (
				<li key={index}>
					<NavLink to={item.url || ''}>{item.text}</NavLink>
				</li>
			));
		}

		return (
			<div className="column is-3">
				<div
					className={`footer-title mobile-padding${
						this.state.isActive ? ' footer-menu-open' : ''
					}`}
					onClick={this.isActiveToggle}
				>
					{title}
					<span />
				</div>
				<ul className="footer-menu">{ulItems}</ul>
			</div>
		);
	}
}

const SocialIcons = ({ icons }) => {
	if (icons && icons.length > 0) {
		const items = icons.map((icon, index) => (
			<a
				key={index}
				href={icon.url || ''}
				target="_blank"
				rel="noopener"
				title={icon.type}
				className={icon.type}
			/>
		));
		return <p className="social-icons">{items}</p>;
	}
	return null;
};

const Contacts = ({ contacts }) => {
	if (contacts && contacts.length > 0) {
		const items = contacts.map((item, index) => {
			const contact = item ? item.text : null;
			if (contact && contact.indexOf('@') > 0) {
				return (
					<li key={index}>
						<a href={`mailto:${contact}`}>{contact}</a>
					</li>
				);
			}
			return <li key={index}>{contact}</li>;
		});
		return <ul className="footer-contacts">{items}</ul>;
	}
	return null;
};

const Footer = () => {
	static propTypes = {
		settings: PropTypes.shape({}).isRequired
	};

		const { settings } = this.props;
		const footerLogoUrl =
			settings.logo && settings.logo.length > 0 ? settings.logo : null;

		return (
			<section className="section section-footer">
				<hr />
				<footer>
					<div className="container">
						<div className="content">
							<div className="columns is-gapless">
								<div className="column is-5">
									<div className="mobile-padding">
										<div className="footer-logo">
											<img src={footerLogoUrl} alt="logo" />
										</div>
										<p>
											<small>{themeSettings.footer_about}</small>
										</p>
										<Contacts contacts={themeSettings.footer_contacts} />
										<SocialIcons icons={themeSettings.footer_social} />
									</div>
								</div>
								<div className="column is-1 is-hidden-mobile" />
								<FooterMenu
									title={themeSettings.footer_menu_1_title}
									items={themeSettings.footer_menu_1_items}
								/>
								<FooterMenu
									title={themeSettings.footer_menu_2_title}
									items={themeSettings.footer_menu_2_items}
								/>
							</div>
						</div>
					</div>
				</footer>
			</section>
		);
	}

export default Footer