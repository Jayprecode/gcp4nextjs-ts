/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
import React from "react";
import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";

/* -------------------------------------------------------------------------- */
/*                             Internal Dependency                            */
/* -------------------------------------------------------------------------- */
import AlertContainer from "styles/Alert";

const icons = {
	info: () => (
		<span className="mr-3">
			<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="0.177757" y="0.644444" width="31.2889" height="31.2889" rx="12.4444" fill="#2E6BDD" />
				<circle cx="15.8222" cy="16.2889" r="10.6667" fill="white" />
				<path
					d="M17.0667 9.65181C16.7366 9.65181 16.4201 9.78292 16.1867 10.0163C15.9533 10.2497 15.8222 10.5662 15.8222 10.8963C15.8222 11.2263 15.9533 11.5428 16.1867 11.7762C16.4201 12.0096 16.7366 12.1407 17.0667 12.1407C17.3967 12.1407 17.7132 12.0096 17.9466 11.7762C18.18 11.5428 18.3111 11.2263 18.3111 10.8963C18.3111 10.5662 18.18 10.2497 17.9466 10.0163C17.7132 9.78292 17.3967 9.65181 17.0667 9.65181ZM16.768 13.6091C15.7807 13.6921 13.0844 15.8409 13.0844 15.8409C12.9185 15.9653 12.9683 15.957 13.101 16.1893C13.2338 16.4133 13.2172 16.4299 13.3748 16.322C13.5407 16.2142 13.8145 16.04 14.2708 15.7579C16.0296 14.6296 14.5529 17.2346 13.7979 21.6234C13.4992 23.797 15.4572 22.677 15.9632 22.3451C16.461 22.0216 17.7967 21.1007 17.9295 21.0094C18.112 20.885 17.9792 20.7854 17.8382 20.578C17.7387 20.437 17.6391 20.5366 17.6391 20.5366C17.0998 20.8933 16.1126 21.64 15.9798 21.1671C15.8222 20.6942 16.8344 17.4503 17.3902 15.2186C17.4815 14.6877 17.7304 13.5262 16.768 13.6091Z"
					fill="#2E6BDD"
				/>
			</svg>
		</span>
	),
	success: () => (
		<span className="mr-3">
			<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="0.177757" y="0.333344" width="31.2889" height="31.2889" rx="12.4444" fill="#65BB6B" />
				<circle cx="15.8222" cy="15.9778" r="10.6667" fill="white" />
				<path
					d="M10.1333 16.3333L11.5555 14.9111L11.7333 14.7333L14.4 17.4L20.0889 11.7111L21.6889 13.3111L14.4 20.6L10.1333 16.3333Z"
					fill="#65BB6B"
				/>
			</svg>
		</span>
	),
	danger: () => (
		<span className="mr-3">
			<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="0.177757" y="0.266678" width="31.2889" height="31.2889" rx="12.4444" fill="#D95A3A" />
				<path
					d="M14.7555 6.89792C15.242 6.62853 15.8125 6.55339 16.3522 6.68763C16.8919 6.82188 17.3607 7.15554 17.6644 7.62148L17.7455 7.75641L25.3321 21.4541C25.5112 21.7778 25.6058 22.1415 25.6071 22.5114C25.6084 22.8814 25.5164 23.2457 25.3396 23.5707C25.1628 23.8956 24.9069 24.1708 24.5955 24.3706C24.2842 24.5705 23.9275 24.6886 23.5584 24.714L23.4078 24.7199H8.23663C7.86698 24.72 7.50326 24.6271 7.17904 24.4495C6.85482 24.272 6.58056 24.0156 6.38158 23.7041C6.18261 23.3926 6.06533 23.036 6.04059 22.6672C6.01584 22.2983 6.08443 21.9292 6.24001 21.5939L6.31041 21.4541L13.896 7.75641C14.0962 7.39526 14.3941 7.09775 14.7555 6.89792ZM15.8222 19.8241C15.6914 19.82 15.5611 19.8422 15.439 19.8894C15.317 19.9366 15.2056 20.0078 15.1116 20.0989C15.0176 20.19 14.9429 20.299 14.8919 20.4195C14.8408 20.54 14.8145 20.6696 14.8145 20.8005C14.8145 20.9313 14.8408 21.0609 14.8919 21.1814C14.9429 21.3019 15.0176 21.4109 15.1116 21.502C15.2056 21.5931 15.317 21.6643 15.439 21.7115C15.5611 21.7587 15.6914 21.7809 15.8222 21.7768C16.0758 21.7687 16.3163 21.6624 16.4929 21.4801C16.6694 21.2979 16.7681 21.0542 16.7681 20.8005C16.7681 20.5467 16.6694 20.303 16.4929 20.1208C16.3163 19.9385 16.0758 19.8322 15.8222 19.8241ZM15.8203 11.998C15.5806 11.9981 15.3494 12.0861 15.1704 12.2455C14.9914 12.4048 14.8771 12.6243 14.8493 12.8624L14.8445 12.9758V17.8666L14.8513 17.981C14.8786 18.2195 14.9927 18.4396 15.1719 18.5994C15.351 18.7592 15.5827 18.8475 15.8227 18.8475C16.0628 18.8475 16.2944 18.7592 16.4736 18.5994C16.6527 18.4396 16.7668 18.2195 16.7941 17.981L16.8 17.8666V12.9758L16.7932 12.8614C16.7651 12.6234 16.6506 12.404 16.4715 12.2448C16.2923 12.0856 16.0609 11.9978 15.8212 11.998H15.8203Z"
					fill="white"
				/>
			</svg>
		</span>
	),
};
/* --------------PropTypes Check------------------------- */

const propTypes = {
	variant: PropTypes.oneOf(["primary", "success", "danger"]),
	message: PropTypes.string.isRequired,
	close: PropTypes.func,
	dismissible: PropTypes.bool,
};

const BSAlert = ({ variant, message, close, dismissible }) => (
	<Alert variant={variant} onClose={close} dismissible={dismissible}>
		<div className="d-flex align-items-center">
			{icons[variant]()}

			{message}
		</div>
	</Alert>
);

BSAlert.propTypes = propTypes;

/* --------------PropTypes Check------------------------- */

const ApropTypes = {
	message: PropTypes.string.isRequired,
	close: PropTypes.func,
	style: PropTypes.object,
	className: PropTypes.string,
	options: PropTypes.object,
};

const AlertTemplate = ({ style, options, message, close, className }) => (
	<AlertContainer className={className} style={style}>
		{options.type === "info" && (
			// @ts-ignore
			<BSAlert variant="info" onClose={close} dismissible message={message} />
		)}

		{options.type === "success" && (
			// @ts-ignore
			<BSAlert variant="success" onClose={close} dismissible message={message} />
		)}

		{options.type === "error" && (
			// @ts-ignore
			<BSAlert variant="danger" onClose={close} dismissible message={message} />
		)}
	</AlertContainer>
);

AlertTemplate.propTypes = ApropTypes;

export { BSAlert };
export default AlertTemplate;
