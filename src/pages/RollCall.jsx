import React, { useEffect, useState } from 'react'

const RollCall = () => {
    const [dateTime, setDateTime] = useState(
        new Date().toLocaleString([], {
            hour: "2-digit",
            minute: "2-digit",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        })
    );

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

    const [staff, setStaff] = useState("");
    const handleStaffChange = (event) => {
      setStaff(event.target.value);
    };

    const [staffonDuty, setStaffonDuty] = useState("");
    const handleStaffonDutyChange = (event) => {
        setStaffonDuty(event.target.value);
    };

    const [staffonLeave, setStaffonLeave] = useState("");
    const handleStaffonLeave = (event) => {
        setStaffonLeave(event.target.value);
    };

    const [FemaleStaff, setFemaleStaff] = useState("");
    const handlefemaleStaff = (event) => {
        setFemaleStaff(event.target.value);
    };

    const [inspector, setInspector] = useState("");
    const handleInspectorChange = (event) => {
        setInspector(event.target.value);
    };
    const [subinspector, setSubInspector] = useState("");
    const handleSubInspectorChange = (event) => {
        setSubInspector(event.target.value);
    };
    const [Asinspector, setAsInspector] = useState("");
    const handleAsInspectorChange = (event) => {
        setAsInspector(event.target.value);
    };

    const [constables, setConstables] = useState("");
    const handleConstableChange = (event) => {
        setConstables(event.target.value);
    };

    const [totalconstables, setTotalConstables] = useState("");
    const handleTotalConstableChange = (event) => {
        setTotalConstables(event.target.value);
    };

    const [mountedPolice, setMountedPolice] = useState("");
    const handleMountedPoliceChange = (event) => {
        setMountedPolice(event.target.value);
    };

    const [otherForces, setOtherForces] = useState("");
    const handleOtherForcesChange = (event) => {
        setOtherForces(event.target.value);
    };

    const [remarks, setRemarks] = useState("");
    const handleRemarks = (event) => {
        setRemarks(event.target.value);
    };

    return (
        <>
            <h4>Roll call</h4>
            <section style={{ display: 'flex', flexDirection: 'row', gap: "20cm" }}>
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
                          Roll Call Date / Time
                        </div>
                        <div style={{ marginLeft: "10px" }}>{dateTime}</div>
                    </div>
                    <div style={{ display: "flex", marginBottom:"5px" }}>
                        <div style={{ background: "lightBlue", width: "200px", margin: "1px" }} >
                        Total Sanctioned Staff No.*
                        </div>
                        <input required type="text" id="location" style={{ marginLeft: "10px", width: "100px" }}
                        value={staff} onChange={handleStaffChange} 
                        />
                    </div>
                    <div style={{ display: "flex", marginBottom:"5px" }}>
                        <div style={{ background: "lightBlue", width: "200px", margin: "1px" }} >
                        Total Posted Staff No.
                        </div>
                        <p style={{marginLeft:"10px"}}>0</p>
                    </div>
                    <div style={{ display: "flex", marginBottom:"5px" }}>
                        <div style={{ background: "lightBlue", width: "200px", margin: "1px" }} >
                        Enter total No. of staff on duty – Out of Police Station*
                        </div>
                        <input required type="text" id="location" style={{ marginLeft: "10px", width: "100px" }}
                         value={staffonDuty}  onChange={handleStaffonDutyChange}
                        />
                    </div>
                    <div style={{ display: "flex" , marginBottom:"5px"}}>
                        <div style={{ background: "lightBlue", width: "200px", margin: "1px" }} >
                        Total No. of Staff on Leave / Sick / Absent*
                        </div>
                        <input required type="text" id="location" style={{ marginLeft: "10px", width: "100px" }}
                        value={staffonLeave}  onChange={handleStaffonLeave}
                        />
                    </div>
                    <div style={{ display: "flex" , marginBottom:"5px"}}>
                        <div style={{ background: "lightBlue", width: "200px", margin: "1px" }} >
                        Total Available Staff No.
                        </div>
                        <p style={{marginLeft:"10px"}}>0</p>
                    </div>
                    <div style={{ display: "flex" , marginBottom:"5px"}}>
                        <div style={{ background: "lightBlue", width: "200px", margin: "1px" }} >
                        Total Available Female staff No.*
                        </div>
                        <input required type="text" id="location" style={{ marginLeft: "10px", width: "100px" }}
                         value={FemaleStaff}  onChange={handlefemaleStaff}
                        />
                    </div>
                    <div style={{ display: "flex" , marginBottom:"5px"}}>
                        <div style={{ background: "lightBlue", width: "200px", margin: "1px" }} >
                        Total No. of Inspectors*
                        </div>
                        <input required type="text" id="location" style={{ marginLeft: "10px", width: "100px" }}
                         value={inspector}  onChange={handleInspectorChange}
                        />
                    </div>
                    <div style={{ display: "flex" , marginBottom:"5px"}}>
                        <div style={{ background: "lightBlue", width: "200px", margin: "1px" }} >
                        Total No. of Sub-Inspectors*
                        </div>
                        <input required type="text" id="location" style={{ marginLeft: "10px", width: "100px" }}
                         value={subinspector}  onChange={handleSubInspectorChange}
                        />
                    </div>
                    <div style={{ display: "flex" , marginBottom:"5px"}}>
                        <div style={{ background: "lightBlue", width: "200px", margin: "1px" }} >
                        Total No. of Assistant Sub-Inspectors*
                        </div>
                        <input required type="text" id="location" style={{ marginLeft: "10px", width: "100px" }}
                         value={Asinspector}  onChange={handleAsInspectorChange}
                        />
                    </div>
                </div>





                <div>
                    <div style={{ display: "flex", marginBottom:"5px" }}>
                        <div style={{ background: "lightBlue", width: "200px", margin: "1px" }} >
                        Total No. of Head Constables*
                        </div>
                        <input required type="text" id="location" style={{ marginLeft: "10px", width: "100px" }}
                        value={constables} onChange={handleConstableChange}
                        />
                    </div>
                    <div style={{ display: "flex", marginBottom:"5px" }}>
                        <div style={{ background: "lightBlue", width: "200px", margin: "1px" }} >
                         Total No. of Constables*
                        </div>
                        <input required type="text" id="location" style={{ marginLeft: "10px", width: "100px" }}
                         value={totalconstables}  onChange={handleTotalConstableChange}
                        />
                    </div>
                    <div style={{ display: "flex" , marginBottom:"5px"}}>
                        <div style={{ background: "lightBlue", width: "200px", margin: "1px" }} >
                        Overstaffed by
                        </div>
                       
                    </div>
                    <div style={{ display: "flex" , marginBottom:"5px"}}>
                        <div style={{ background: "lightBlue", width: "200px", margin: "1px" }} >
                        Understaffed by
                        </div>
                        <p style={{marginLeft:"10px"}}>0</p>
                    </div>
                    <div style={{ display: "flex" , marginBottom:"5px"}}>
                        <div style={{ background: "lightBlue", width: "200px", margin: "1px" }} >
                        Details of Mounted Police Available in Police Station*
                        </div>
                        <input required type="text" id="location" style={{ marginLeft: "10px", width: "100px" }}
                         value={mountedPolice}  onChange={handleMountedPoliceChange}
                        />
                    </div>
                    <div style={{ display: "flex" , marginBottom:"5px"}}>
                        <div style={{ background: "lightBlue", width: "200px", margin: "1px" }} >
                        Details of Other Forces Available in Police Station*
                        </div>
                        <input required type="text" id="location" style={{ marginLeft: "10px", width: "100px" }}
                         value={otherForces}  onChange={handleOtherForcesChange}
                        />
                    </div>
                    <div style={{ display: "flex" , marginBottom:"5px"}}>
                        <div style={{ background: "lightBlue", width: "200px", margin: "1px" }} >
                           Remarks
                        </div>
                        <input required type="text" id="location" style={{ marginLeft: "10px", width: "100px" }}
                         value={remarks}  onChange={handleRemarks}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default RollCall