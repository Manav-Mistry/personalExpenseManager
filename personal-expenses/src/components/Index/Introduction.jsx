import React from "react";
import Button from "../shared/Button";
import Navbar from "../shared/Navbar";
import { Link } from "react-router-dom";

function Introduction() {

    const expenseStyle = {
        fontWeight: 600,
        fontSize: '1.3em',
        color: '#2E8B57',
        margin: '5px',
        padding: '10px',
    }

  return (
    <div>
      <div className="introduction container-fluid pt-5">
        <div className="slogan">
            Stress to manage your personal
            <span style={expenseStyle}>
              Expenses
            </span>         
          <p className="slogan-secondary">
            Then Projectname is here for the solution
          </p>
          <Link to="./form">
            <Button btnType="button" btnColorStyle="primary" btnSize="large"> Sign Up</Button>
          </Link>
        </div>

        <div className="intro-img">
          <img src={require('./Images/expense-management.png')} width="650px" alt="intro_image"/>
          {/* <!--green shade -  #63CB63 --> */}
        </div>
      </div>

    </div>
  );
}

export default Introduction;
