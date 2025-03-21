import React, { useState } from "react";
import "./registeration.css";

export default function RegistrationForm() {
  const [sameAsCurrent, setSameAsCurrent] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    enrollmentNo: "",
    fullName: "",
    motherName: "",
    gender: "",
    dob: "",
    currentAddress: "",
    personalEmail: "",
    officialEmail: "",
    mobile: "",
    course: "",
    stream: "",
    admissionYear: "",
    passingYear: "",
    country: "",
    state: "",
    city: "",
    workingStatus: "",
    linkedIn: "",
    profilePicture: null,
    agreement: false,
  });

  const handleCheckboxChange = () => {
    setSameAsCurrent(!sameAsCurrent);
    setFormData((prev) => ({
      ...prev,
      permanentAddress: !sameAsCurrent ? prev.currentAddress : "",
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.profilePicture) {
      newErrors.profilePicture = "Profile picture is required";
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Update errors state
      return;
    }
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <h1>Registration Form</h1>
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          {/* Personal Details */}
          <h3 className="section-title">Personal Details</h3>
          <div className="half-width">
            <label>
              You are:<span>*</span>
              <select name="status" required onChange={handleChange}>
                <option value="" disabled selected>
                  Student/Alumni
                </option>
                <option value="Student">Student</option>
                <option value="Alumni">Alumni</option>
              </select>
            </label>
          </div>
          <div className="input-grid">
            <label>
              Enrollment No:<span>*</span>
              <input
                type="text"
                placeholder="Enter Roll No"
                name="enrollmentNo"
                required
                onChange={handleChange}
              />
            </label>
            <label>
              Full Name:<span>*</span>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                name="fullName"
                required
                onChange={handleChange}
              />
            </label>
            <label>
              Mother's Name:<span>*</span>
              <input
                type="text"
                placeholder="Enter Your Father's/Mother's Name"
                name="motherName"
                required
                onChange={handleChange}
              />
            </label>
            <label>
              Spouse's Name:
              <input type="text" placeholder="Enter Your Spouse's Name" />
            </label>
            <div className="gender-container">
              <label className="gender-label">
                Gender:<span>*</span>
              </label>
              <div className="gender-options">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    required
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    required
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    required
                    checked={formData.gender === "other"}
                    onChange={handleChange}
                  />
                  Other
                </label>
              </div>
            </div>

            <label>
              Date of Birth:<span>*</span>
              <input type="date" name="dob" required onChange={handleChange} />
            </label>
          </div>
          {/* Academic Details */}
          <h3 className="section-title">
            Academic Details<span>*</span>
          </h3>
          <div className="input-grid">
            <label>
              Course:<span>*</span>
              <select name="course" required onChange={handleChange}>
                <option value="" disabled selected>
                  select Programme<span>*</span>
                </option>
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
                <option value="MBA">MBA</option>
              </select>
            </label>
            <label>
              Stream:<span>*</span>
              <select name="stream" required onChange={handleChange}>
                <option value="" disabled selected>
                  Select discipline
                </option>
                <option value="CSE">CSE</option>
                <option value="ENTC">ENTC</option>
                <option value="Mechanical">Mechanical</option>
              </select>
            </label>
            <label>
              Year of Admission:<span>*</span>
              <select name="admissionYear" required onChange={handleChange}>
                <option value="" disabled selected>
                  Select Admission Year
                </option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
              </select>
            </label>
            <label>
              Year of Passing:<span>*</span>
              <select name="passingYear" required onChange={handleChange}>
                <option value="" disabled selected>
                  Select Year Of Passing
                </option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </select>
            </label>
          </div>
          {/* Contact Details */}
          <h3 className="section-title">Contact Details</h3>
          <div className="input-grid">
            <label>
              Mobile No:<span>*</span>
              <input
                type="tel"
                placeholder="Enter your phone number"
                name="mobile"
                required
                onChange={handleChange}
              />
            </label>
            <label>
              Alternate Mobile No:
              <input type="tel" placeholder="Enter Alterante Phone number" />
            </label>
            <label>
              Personal Email:<span>*</span>
              <input
                type="email"
                placeholder="Enter Your Personal Email"
                name="personalEmail"
                required
                onChange={handleChange}
              />
            </label>
            <label>
              Official Email:<span>*</span>
              <input
                type="email"
                placeholder="Enter Your Official Email"
                name="officialEmail"
                required
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="input-row full-width">
            <label>
              Current Address:<span>*</span>
              <input
                type="text"
                id="currentAddress"
                placeholder="Enter Your Current Address"
                name="currentAddress"
                required
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="location-grid">
            <label>
              Country:<span>*</span>
              <select name="country" required onChange={handleChange}>
                <option value="" disabled selected>
                  Select Country
                </option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </label>
            <label>
              State:<span>*</span>
              <select name="state" required onChange={handleChange}>
                <option value="" disabled selected>
                  Select State
                </option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
                <option>Delhi</option>
              </select>
            </label>
            <label>
              City:<span>*</span>
              <select name="city" required onChange={handleChange}>
                <option value="" disabled selected>
                  Select City<span>*</span>
                </option>
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
              </select>
            </label>
          </div>
          <div className="input-row full-width">
            <label>
              Permanent Address:<span>*</span>
              <label className="copy_add">
                <input
                  type="checkbox"
                  checked={sameAsCurrent}
                  onChange={handleCheckboxChange}
                />
                Same as Current Address
              </label>
              <input
                type="text"
                name="permanentAddress"
                value={formData.permanentAddress}
                required
                placeholder="Enter Your Permanent Address"
                onChange={handleChange}
              />
            </label>
          </div>
          {/* Experience & Higher Studies */}
          <h3 className="section-title">Experience & Higher Studies</h3>
          <label className="Working_Status">
            Working Status<span>*</span>
          </label>
          <div className="Working_options">
            <label>
              <input
                type="radio"
                name="workingStatus"
                value="Employed"
                required
                checked={formData.workingStatus === "Employed"}
                onChange={handleChange}
              />{" "}
              Is Working
            </label>
            <label>
              <input
                type="radio"
                name="workingStatus"
                value="Higher Studies"
                required
                checked={formData.workingStatus === "Higher Studies"}
                onChange={handleChange}
              />{" "}
              Is Pursuing Higher Studies
            </label>
            <label>
              <input
                type="radio"
                name="workingStatus"
                value="Self Employed"
                required
                checked={formData.workingStatus === "Self Employed"}
                onChange={handleChange}
              />{" "}
              Is Self Employed
            </label>
          </div>

          {/* Socials */}
          <h3 className="section-title">Socials</h3>
          <div className="input-grid">
            <label>
              LinkedIn:<span>*</span>
              <input
                type="url"
                placeholder="Enter you LinkedIn Profile Link"
                name="linkedIn"
                required
                onChange={handleChange}
              />
            </label>
            <label>
              Facebook:
              <input type="url" placeholder="Enter you Facebook Profile Link" />
            </label>
            <label>
              Instagram:
              <input
                type="url"
                placeholder="Enter you Instagram Profile Link"
              />
            </label>
            <label>
              Website:
              <input
                type="url"
                placeholder="Enter your Personal Portfolio Website "
              />
            </label>
          </div>
          <div className="full-width file-upload">
            <span className="file-name">
              {formData.profilePicture
                ? formData.profilePicture.name
                : "Choose your Profile Picture "}
            </span>
            <label className="browse-btn">
              Browse
              <input type="file" name="profilePicture"  onChange={handleChange} />
            </label>
          </div>
          {errors.profilePicture && <p className="error-message">{errors.profilePicture}</p>}

          {/* Checkbox */}
          <label className="checkbox-container">
            <input
              type="checkbox"
              name="agreement"
              required
              onChange={handleChange}
            />
            I will update my information at regular inetrvals and will engage in
            the Alumni network actively
            <span>*</span>
          </label>

          <button type="submit" >Submit</button>
        </form>
      </div>
    </>
  );
}
