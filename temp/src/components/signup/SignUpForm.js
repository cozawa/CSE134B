import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const SignUpForm = ({user, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Make an Account</h1>
      <TextInput
        name="username"
        label="Username"
        value={user.username}
        onChange={onChange}
        error={errors.username}/>

      <TextInput
        name="password"
        label="Password"
        value={user.password}
        onChange={onChange}
        error={errors.password}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

CourseForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default SignUpForm;
