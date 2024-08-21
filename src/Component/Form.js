import React, { useState } from 'react';
import './Form.css'; 
const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        email: '',
        phoneNumber: '',
        gender: '',
        startTime: '',
        endTime: '',
        jobPosition: '',
        team: '',
        designation: '',
        billableHours: '',
        isBillable: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validate = () => {
        let newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key] && key !== 'MiddleName' && key !== 'isBillable') {
                newErrors[key] = `${key.replace(/([A-Z])/g, ' $1').trim()} is required`;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted successfully', formData);
        } else {
            console.log('Validation failed');
        }
    };

    return (
        <main>
        <h1>Employee Form</h1>
        <form onSubmit={handleSubmit} className="form-container">

        <div>
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && <span className="error-text">{errors.lastName}</span>}
            </div>


            <div>
                <label>Middle Name</label>
                <input
                    type="text"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && <span className="error-text">{errors.lastName}</span>}
            </div>

            <div>
                <label>Birth Date</label>
                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className={errors.dob ? 'error' : ''}
                />
                {errors.dob && <span className="error-text">{errors.dob}</span>}
            </div>

            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.Email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div>
                <label>Phone Number</label>
                <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={errors.phoneNumber ? 'error' : ''}
                />
                {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
            </div>

            <div>
                <label>Select Gender</label>
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={errors.gender ? 'error' : ''}
                >
                    <option value="">Choose Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                {errors.gender && <span className="error-text">{errors.gender}</span>}
            </div>

            <div>
                <label>Start Time</label>
                <input
                    type="time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    className={errors.startTime ? 'error' : ''}
                />
                {errors.startTime && <span className="error-text">{errors.startTime}</span>}
            </div>

            <div>
                <label>End Time</label>
                <input
                    type="time"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    className={errors.endTime ? 'error' : ''}
                />
                {errors.endTime && <span className="error-text">{errors.endTime}</span>}
            </div>

            <div>
                <label>Job Position</label>
                <input
                    type="text"
                    name="jobPosition"
                    value={formData.jobPosition}
                    onChange={handleChange}
                    className={errors.jobPosition ? 'error' : ''}
                />
                {errors.jobPosition && <span className="error-text">{errors.jobPosition}</span>}
            </div>

            <div>
                <label>Select Teams</label>
                <select
                    name="team"
                    value={formData.team}
                    onChange={handleChange}
                    className={errors.team ? 'error' : ''}
                >
                    <option value="">Select...</option>
                    <option value="team1">Team 1</option>
                    <option value="team2">Team 2</option>
                    <option value="team3">Team 3</option>
                </select>
                {errors.team && <span className="error-text">{errors.team}</span>}
            </div>

            <div>
                <label>Select Designation</label>
                <select
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className={errors.designation ? 'error' : ''}
                >
                    <option value="">Select...</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                    <option value="lead">Lead</option>
                </select>
                {errors.designation && <span className="error-text">{errors.designation}</span>}
            </div>

            <div>
                <label>Billable Hours</label>
                <input
                    type="number"
                    name="billableHours"
                    value={formData.billableHours}
                    onChange={handleChange}
                    className={errors.billableHours ? 'error' : ''}
                />
                {errors.billableHours && <span className="error-text">{errors.billableHours}</span>}
            </div>

            <div>
                <label>Is Billable</label>
                <input className='btn'
                    type="checkbox"/>

            </div>

            <button type="submit">Submit</button>
        </form>
        </main>
    );
};

export default Form;
