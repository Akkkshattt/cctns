import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import toast from "react-hot-toast";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { getRefreshState } from "../store/homeSlice";
import { useNavigate } from "react-router-dom";
import RollCall from "./RollCall";
function AddGeneralDiary() {
  const [dateTime, setDateTime] = useState(
    new Date().toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  );
  const nav = useNavigate();
  const dispatch = useDispatch();
  const refresh = useSelector(state => state.home.refresh);
  // State for the first dropdown (GD Type)
  const [selectedGdType, setSelectedGdType] = useState("");
  const handleGdTypeChange = (event) => {
    setSelectedGdType(event.target.value);
  };

  // State for the second dropdown (Entry for Officer)
  const [selectedOfficer, setSelectedOfficer] = useState("");
  const handleOfficerChange = (event) => {
    setSelectedOfficer(event.target.value);
  };

  // State for the subject input
  const [subject, setSubject] = useState("");
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  // State for the description textarea
  const [description, setDescription] = useState("");
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const [caseType, setcaseType] = useState("");
  const handleCaseType = (event) => {
    setcaseType(event.target.value);
  };
  const [actType, setActType] = useState("");
  const handleActType = (event) => {
    setActType(event.target.value);
  };
  const [section, setsection] = useState("");
  const handleSection = (event) => {
    setsection(event.target.value);
  };

  // Update the dateTime every minute
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(
        new Date().toLocaleString([], {
          hour: "2-digit",
          minute: "2-digit",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
      );
    }, 60000); // 60000 milliseconds = 1 minute

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const diaryEntry = {
      dateTime,
      selectedGdType,
      officer: selectedOfficer,
      subject,
      description,
    };
    console.log(diaryEntry);
    try {
      const response = await axios.post(
        "http://localhost:8080/save",
        diaryEntry,
        {
          withCredentials: false, // This will include cookies in the request
        }
      );

      dispatch(getRefreshState(!refresh));
      toast.success("GD Created Successfully");
      // Optionally reset the form or show a success message here
    } catch (error) {
      toast.error("Internal server error ");
    }
  };

  return (
    <div>
      <Home />
      <h1>Add General Diary</h1>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom:"13px"
          }}
        >
          <div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  background: "lightBlue",
                  width: "200px",
                  margin: "1px",
                  marginBottom:"5px"
                }}
              >
                Date / Time
              </div>
              <div style={{ marginLeft: "10px" }}>{dateTime}</div>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  background: "lightBlue",
                  width: "200px",
                  margin: "1px",
                  marginBottom:"5px"
                }}
              >
                GD Type
              </div>
              <select
                required
                id="gd-type"
                style={{ marginLeft: "10px" }}
                value={selectedGdType}
                onChange={handleGdTypeChange}
              >
                <option value="">--Please choose an option--</option>
                <option value="ACCIDENT">Accident</option>
                <option value="DEATH">Death</option>
                <option value="MURDER">Murder</option>
                <option value="THEFT">Theft</option>
                <option value="Criminal Case">Criminal Case</option>
                <option value="Roll Call">Roll Call</option>
              </select>


            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  background: "lightBlue",
                  width: "200px",
                  margin: "1px",
                  marginBottom:"5px"
                }}
              >
                Entry for Officer
              </div>
              <select
                required
                id="officer"
                style={{ marginLeft: "10px" }}
                value={selectedOfficer}
                onChange={handleOfficerChange}
              >
                <option value="">--Please choose an option--</option>
                <option value="SHO">SHO</option>
                <option value="ACP">ACP</option>
                <option value="DSP">DSP</option>
                <option value="HC (Head Constable)">HC (Head Constable)</option>
                <option value="SI (Sub Inspector)">SI (Sub Inspector)</option>
                <option value="I (Inspector)">I (Inspector)</option>
              </select>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  background: "lightBlue",
                  width: "200px",
                  margin: "1px",
                  marginBottom:"5px"
                }}
              >
                Subject
              </div>
              <input
                required
                type="text"
                id="location"
                style={{ marginLeft: "10px", width: "180px" }}
                value={subject}
                onChange={handleSubjectChange}
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{ background: "lightBlue", width: "200px", margin: "1px" }}
            >
              Description
            </div>
            <textarea
              required
              id="description"
              style={{ marginLeft: "10px", height: "100px", width: "400px",marginRight:"50px" }}
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
        </div>
        {selectedGdType === "Criminal Case" && (
          <div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  background: "lightBlue",
                  width: "200px",
                  margin: "1px",
                 marginBottom:"5px"
                }}
              >
                Case Type
              </div>
              <select required id="caseType" style={{ marginLeft: "10px" }} value={caseType} onChange={handleCaseType} >
                <option value="">--Please choose an option--</option>
                <option value="ADULT">ADULT</option>
                <option value="JUVENILE AND ADULT">JUVENILE AND ADULT</option>
                <option value="ONLY JUVENILE">ONLY JUVENILE</option>
              </select>
            </div>


            <div style={{ display: "flex" }}>
              <div
                style={{
                  background: "lightBlue",
                  width: "200px",
                  margin: "1px",
                  marginBottom:"5px"
                }}
              >
                Act
              </div>
              <select required id="caseType" style={{ marginLeft: "10px" }} value={actType} onChange={handleActType} >
                <option value="">--Please choose an option--</option>
                <option value="The Indian Penal Code (IPC) (1860)">The Indian Penal Code (IPC) (1860)</option>
                <option value="The Right to Information Act (RTI) (2005">The Right to Information Act (RTI) (2005</option>
                <option value="The Code of Civil Procedure (CPC) (1908)">The Code of Civil Procedure (CPC) (1908)</option>
                <option value="The Consumer Protection Act (2019)">The Consumer Protection Act (2019)</option>
              </select>
            </div>


            <div style={{ display: "flex" }}>
              <div
                style={{
                  background: "lightBlue",
                  width: "200px",
                  margin: "1px",
                  marginBottom:"5px"
                }}
              >
                Section
              </div>
              <select required id="caseType" style={{ marginLeft: "10px" }} value={section} onChange={handleSection} >
                <option value="">--Please choose an option--</option>
                <option value="Section 307">Section 307</option>
                <option value="Section 302">Section 302</option>
                <option value="Section 375">Section 375</option>
                <option value="Section 376">Section 376</option>
                
              </select>
            </div>
            <button type="submit" style={{ marginTop: "10px" }}>
              Add
            </button>
          </div>

        )}

        {selectedGdType === "Roll Call" && (
          <div>
            <RollCall />
          </div>
        )}
        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddGeneralDiary;
