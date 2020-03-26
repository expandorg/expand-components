import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { NotificationAnimated } from '@expandorg/components/app';

import { useToggle } from '@expandorg/components';
import { Module } from '../Module';
import { Form, formProps, FormDataProvider } from '../Form';

import moduleControls from '../../app/moduleControls';

import FileUploadServiceMock from './FileUploadServiceMock';

import styles from './ModulesPlayground.module.styl';

const services = new Map([['fileUpload', new FileUploadServiceMock()]]);

const fd = {
  allowedRetries: 3,
  currentTry: 1,
};

export default function ModulesPlayground({ form, variables, initial, title }) {
  const [notification, setNotification] = useState(null);

  const [src, toggle] = useToggle();

  const notify = useCallback((type, message) => {
    setNotification({ type, message });
  }, []);

  const submit = useCallback((values) => {
    alert(JSON.stringify(values, undefined, 2));
  }, []);

  const change = useCallback((values) => {
    console.log(JSON.stringify(values, undefined, 2));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <button className={styles.toggle} onClick={toggle}>
          src
        </button>
        {title && <div className={styles.title}>{title}</div>}
        {src && (
          <pre className={styles.src}>
            {JSON.stringify(form.modules, undefined, 2)}
          </pre>
        )}
        <FormDataProvider formData={fd}>
          <Form
            controls={moduleControls}
            form={form}
            variables={variables}
            initial={initial}
            services={services}
            className={styles.form}
            onSubmit={submit}
            onNotify={notify}
            onChange={change}
          >
            {(props) => <Module {...props} />}
          </Form>
        </FormDataProvider>

        {form.modules && !form.modules.length && (
          <div className={styles.empty}>No modules</div>
        )}
      </div>
      <NotificationAnimated
        notification={notification}
        onClear={() => setNotification(null)}
      />
    </div>
  );
}

ModulesPlayground.propTypes = {
  form: formProps.isRequired,
  title: PropTypes.string,
  variables: PropTypes.shape({}),
  initial: PropTypes.shape({}),
};

ModulesPlayground.defaultProps = {
  title: undefined,
  variables: undefined,
  initial: undefined,
};
