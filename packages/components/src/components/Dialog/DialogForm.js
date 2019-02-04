import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './DialogForm.module.styl';

const Container = ({ children, className }) => (
  <div className={cn(styles.container, className)}>
    <div className={styles.inner}>{children}</div>
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
};

Container.defaultProps = {
  className: null,
};

const Title = ({ children, className }) => (
  <div className={cn(styles.title, className)}>{children}</div>
);

Title.propTypes = {
  className: PropTypes.string,
};

Title.defaultProps = {
  className: null,
};

const Field = ({ children, className }) => (
  <div className={cn(styles.field, className)}>{children}</div>
);

Field.propTypes = {
  className: PropTypes.string,
};

Field.defaultProps = {
  className: null,
};

const Description = ({ children, className, bold }) => (
  <div className={cn(styles.description, { [styles.bold]: bold }, className)}>
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
  <div className={cn(styles.actions, className)}>{children}</div>
);

Actions.propTypes = {
  className: PropTypes.string,
};

Actions.defaultProps = {
  className: null,
};

const FormError = ({ children, className }) => (
  <div className={cn(styles.Actions, className)}>{children}</div>
);

FormError.propTypes = {
  className: PropTypes.string,
};

FormError.defaultProps = {
  className: null,
};

export { Container, Title, Field, Description, Actions, FormError };
