import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi";
import Form from "../reusableComponents/forms";
import { toast } from "react-toastify";
class OrganizeTournament extends Form {
  state = {};
  render() {
    return (
      <div className="content-grid organize-tournament">
        <div className="grid-column mt-4">
          <div className="widget-box">
            <form className="form">
              <div className="row">
                <div className="col-6">
                  <p className="widget-box-title">Single Player tournament or team tournament</p>
                  <div className="widget-box-content">
                    <div className="split ">
                      <div className="form-item">
                        <div className="form-group mb-0">
                          <input type="radio" name="tournament_type" />
                          <label className="label-part" >Single Player</label>
                        </div>
                      </div>
                    </div>
                    <div className="split mb-3">
                      <div className="form-item">
                        <div className="form-group">
                          <input type="radio" name="tournament_type" />
                          <label className="label-part"  >Team</label>
                        </div>
                      </div>
                    </div>
                    <div className="split mb-3">
                      <div className="form-item">
                        <div className="form-input small active">
                          <input type="text" placeholder="Enter Team 1 Name" />
                        </div>
                      </div>
                    </div>
                    <div className="split mb-3">
                      <div className="form-item">
                        <div className="form-input small active">
                          <input type="text" placeholder="Score Recomendadtion" />
                        </div>
                      </div>
                    </div>
                    <div className="split mb-3">
                      <div className="form-item">
                        <div className="form-input small active">
                          <input type="text" placeholder="Tournament Date 00/00/00" />
                        </div>
                      </div>
                    </div>
                    <div className="split mb-3">
                      <div className="form-item">
                        <div className="form-input small active">
                          <input type="text" placeholder="Tournament Duration" />
                        </div>
                      </div>
                    </div>
                    <div className="split mb-3">
                      <div className="form-item">
                        <div className="form-input small active">
                          <input type="text" placeholder="Player Allowed" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <p className="widget-box-title">School or Club Tournament</p>
                  <div className="widget-box-content">
                    <div className="split ">
                      <div className="form-item">
                        <div className="form-group  mb-0">
                          <input type="radio" name="team_type" />
                          <label className="label-part" >School</label>
                        </div>
                      </div>
                    </div>
                    <div className="split mb-3 ">
                      <div className="form-item">
                        <div className="form-group">
                          <input type="radio" name="team_type" />
                          <label className="label-part"  >Club</label>
                        </div>
                      </div>
                    </div>
                    <div className="split mb-3">
                      <div className="form-item">
                        <div className="form-input small active">
                          <input type="text" placeholder="Enter Team 2 Name" />
                        </div>
                      </div>
                    </div>
                    <div className="split mb-3">
                      <div className="form-item">
                        <div className="form-input small active">
                          <input type="text" placeholder="Entery Fees" />
                        </div>
                      </div>
                    </div>
                    <div className="split mb-3">
                      <div className="form-item">
                        <div className="form-input small active">
                          <input type="text" placeholder="Tournament Start Time" />
                        </div>
                      </div>
                    </div>
                    <div className="split mb-3">
                      <div className="form-item">
                        <div className="form-input small active">
                          <input type="text" placeholder="Game Time" />
                        </div>
                      </div>
                    </div>
                    <div className="split mb-3">
                      <div className="form-item">
                        <div className="form-input small active">
                          <input type="text" placeholder="Training Session Time" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 mt-3">
                  <p className="widget-box-title">Tournament Descripation</p>
                  <div className="widget-box-content mt-0">
                    <div className="split ">
                      <div className="form-item">
                        <div className="form-group mb-0">
                        
                          <textarea type="text" placeholder="Write Descripatione" className="textarea-height" rows="6"></textarea>
                        </div>
                      </div>
                    </div>
                    <div className=" split mt-3">
                      <div className="form-item">
                        <button className="button full secondary" name="default">Publish</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default OrganizeTournament;
