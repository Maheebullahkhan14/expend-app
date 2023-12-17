import React, { useEffect, useContext } from "react";
import SideNavbar from "./SideNavbar";
import Planscard from "./Planscard";
import { MynewContext } from "../ContextApi";
import NoDataComponent from "../Pages/NoData";
import plans_banner_img from "../Assets/plansbanner-img.png";
import { Link } from "react-router-dom";
import cancelIcon from "../Assets/cancel-icon.jpg";
import EditIcon from "../Assets/edit-icon.png";

const Myplanslist = () => {
  const { setNewplanData, NewplanData, setEditData, setactiveEditbtn } =
    useContext(MynewContext);

  useEffect(() => {
    const LocalplanData = JSON.parse(localStorage.getItem("LOCALPLAN_DATA"));
    if (LocalplanData) setNewplanData(LocalplanData);
  }, []);

  const GetData = (DataId) => {
    let editedData = NewplanData.filter((data) => {
      return DataId === data.Id;
    });
    setEditData(editedData[0]);
    setactiveEditbtn(true);
  };

  const deleteSelectedData = (selectedId) => {
    let DeleteData = NewplanData.filter((data) => {
      return data.Id !== selectedId;
    });
    setNewplanData(DeleteData);
    localStorage.setItem("LOCALPLAN_DATA", JSON.stringify(DeleteData));
  };

  return (
    <div className="myplans-main-cover">
      <SideNavbar />
      <div className="my-plans-list-cover">
        <h5 className="header-title">My Plans</h5>
        <div className="all-plans-cover">
          {NewplanData.length > 0 ? (
            NewplanData.map((data) => {
              return (
                <div className="planscard-main-cover-box">
                  <Planscard myplansdata={data} key={data.Id} myid={data.Id} />
                  <div className="edit-btn-box">
                    <Link to="/newplan-form">
                      <button
                        className="editbtn"
                        onClick={() => GetData(data.Id)}
                      >
                        <img src={EditIcon}></img>
                      </button>
                    </Link>
                    <button
                      className="deletebtn"
                      onClick={() => deleteSelectedData(data.Id)}
                    >
                      <img src={cancelIcon}></img>
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="No-data-cover">
              <NoDataComponent />
              <h5>No Data Found</h5>
            </div>
          )}
        </div>

        <div className="plans-banner-img">
          <img src={plans_banner_img}></img>
        </div>
      </div>
    </div>
  );
};

export default Myplanslist;
