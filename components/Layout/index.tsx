/* -------------------------------------------------------------------------- */
/*                            External Dependecies                            */
/* -------------------------------------------------------------------------- */
import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import styled from "styled-components";

/* -------------------------- Internal Dependencies ------------------------- */
import SkipToMain from "../A11y/skip-to-main";

const propTypes = {
	title: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
	className: PropTypes.string,
};

const Main = styled.main`
	width: 100%;
	height: 100vh;
	.container {
		@media screen and (min-width: 1200px) {
			max-width: 1680px;
		}
	}
`;

const Layout = ({ children, title = "Home", className = "", ...rest }) => (
	<Main>
		<Helmet>
			<title>{`${title} | Fantastic Waffle`}</title>
			<meta name="msapplication-TileColor" content="#000000" />
			<meta name="theme-color" content="#000000" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0 viewport-fit=cover" />
		</Helmet>
		<SkipToMain content="main-content" />
		<section {...rest}>
			<div className={`container  ${className}`}>
				<div className="row align-items-center justify-content-center">
					<div className="col-md-12">{children}</div>
				</div>
			</div>
		</section>
	</Main>
);

Layout.propTypes = propTypes;

export default Layout;
