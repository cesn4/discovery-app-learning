import React, { FunctionComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import { ApplicationState } from '~/store/types';
import Logo from '~/components/Logo';
import { LogoContentItems } from '~/store/types';

const LogoContainer: FunctionComponent<LogoCombinedProps> = ({
    logoContent,
    light = false,
    accent = false,
}: LogoCombinedProps) => {
    console.log(logoContent.title);
    return (
        <Fragment>
            <Logo title={logoContent.title} light={light} accent={accent} />
        </Fragment>
    );
};

const mapStateToProps = (state: ApplicationState): LogoTitle => {
    return {
        logoContent: state.logoContent,
    };
};

interface LogoTitle {
    logoContent: LogoContentItems;
}

interface LogoContainerProps {
    light?: boolean;
    accent?: boolean;
}

type LogoCombinedProps = LogoTitle & LogoContainerProps;

export default connect(mapStateToProps)(LogoContainer);
