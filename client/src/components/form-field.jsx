import React from 'react';

const renderInput = field =>
  <fieldset className="form-group">
    <label>{field.labelName}:</label>
    <input className="form-control" {...field.input} />
    {field.meta.touched && field.meta.error && <div className="error">{field.meta.error}</div>}
  </fieldset>;

export default renderInput;
