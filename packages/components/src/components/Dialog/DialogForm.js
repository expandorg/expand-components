import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { ReactComponent as Checkmark } from '@expandorg/uikit/assets/checkmark-3.svg';
import { ReactComponent as Warning } from '@expandorg/uikit/assets/warning.svg';

import './DialogForm.styl';

const Container = ({ children, className }) => (
  <div className={cn('gem-dialogform-container', className)}>
    <div className="gem-dialogform-container-inner">{children}</div>
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
};

Container.defaultProps = {
  className: null,
};

const Title = ({ children, className }) => (
  <div className={cn('gem-dialogform-title', className)}>{children}</div>
);

Title.propTypes = {
  className: PropTypes.string,
};

Title.defaultProps = {
  className: null,
};

const Field = ({ children, className }) => (
  <div className={cn('gem-dialogform-field', className)}>{children}</div>
);

Field.propTypes = {
  className: PropTypes.string,
};

Field.defaultProps = {
  className: null,
};

const Description = ({ children, className, bold }) => (
  <div
    className={cn(
      'gem-dialogform-description',
      { 'gem-dialogform-bold': bold },
      className
    )}
  >
    {children}
  </div>
);

Description.propTypes = {
  bold: PropTypes.bool,
  className: PropTypes.string,
};

Description.defaultProps = {
  bold: false,
  className: null,
};

const Actions = ({ children, className }) => (
  <div className={cn('gem-dialogform-actions', className)}>{children}</div>
);

Actions.propTypes = {
  className: PropTypes.string,
};

Actions.defaultProps = {
  className: null,
};

const FormError = ({ children, className }) => (
  <div className={cn('gem-dialogform-error', className)}>{children}</div>
);

FormError.propTypes = {
  className: PropTypes.string,
};

FormError.defaultProps = {
  className: null,
};

const TopIcon = ({ children, className }) => (
  <div className={cn('gem-dialogform-icon', className)}>{children}</div>
);

TopIcon.propTypes = {
  className: PropTypes.string,
};

TopIcon.defaultProps = {
  className: null,
};

const SuccessIcon = ({ className }) => (
  <TopIcon className={className}>
    <Checkmark
      className="gem-dialogform-icon-success"
      width={64}
      height={48}
      viewBox="0 0 64 48"
    />
  </TopIcon>
);

SuccessIcon.propTypes = {
  className: PropTypes.string,
};

SuccessIcon.defaultProps = {
  className: null,
};

const WarningIcon = ({ className }) => (
  <TopIcon className={className}>
    <Warning
      className="gem-dialogform-icon-warning"
      width={64}
      height={64}
      viewBox="0 0 42 42"
    />
  </TopIcon>
);

WarningIcon.propTypes = {
  className: PropTypes.string,
};

WarningIcon.defaultProps = {
  className: null,
};

export {
  Container,
  Title,
  Field,
  Description,
  Actions,
  FormError,
  TopIcon,
  SuccessIcon,
  WarningIcon,
};
