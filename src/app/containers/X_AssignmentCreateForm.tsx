// import * as React from 'react';
// import { reduxForm, ConfigProps } from 'redux-form';
// import { default as AssignmentForm, AssignmentFormProps } from '../components/AssignmentForm';
// import {
//     Assignment
// } from '../api/index';
// // import { createAssignment } from '../modules/assignments/actions';
// import { default as FormSubmitButton, SubmitButtonProps } from '../components/FormElements/SubmitButton'
// import { connect } from 'react-redux';
// import { RootState } from '../store';


// // wrapping generic assignment form in redux-form
// const formConfig: ConfigProps<any, AssignmentFormProps> = {
//     form: 'CreateAssignment',
//     onSubmit: (values: { assignment: Assignment }, dispatch, props) => {
//         alert('TODO: Fix Me - waiting on more details on assignments');
//         // let newAssignment = { ...values.assignment, sheriffIds: [] }
//         // dispatch(createAssignment(newAssignment));
//     }
// };

// const mapStateToProps = (state: RootState, props: AssignmentFormProps) => {
//     return {
//         initialValues: {workSectionId: props.workSectionId},
//         isDefaultTemplate: false
//     }
// }

// // Here we create a class that extends the configured assignment form so that we
// // can add a static SubmitButton member to it to make the API cleaner
// export default class AssignmentCreateForm extends connect<any, {}, AssignmentFormProps>(mapStateToProps)(reduxForm(formConfig)(AssignmentForm)) {
//     static SubmitButton = (props: Partial<SubmitButtonProps>) => <FormSubmitButton {...props} formName={formConfig.form} />;
// }




