import React, { Component } from "react";
import { Link } from "react-router-dom";
class OngoingList extends Component {
  state = {};
  render() {
    return (
      <div className="content-grid">
        <div className="tabsview">
          <ul>
            <li>
              <Link to="/coach/tournament-list">Upcomming Tournament</Link>
            </li>
            <li>
              <Link to="/coach/ongoing-list" className="active">
                Ongoing Tournament
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid-column mt-4">
          <div className="upcomming-tournamnet">
            <div className="user-preview landscape">
              <div className="user-preview-info">
                <div className="user-short-description landscape teamvs  tiny padd-left-50">
                 <figure class="user-preview-cover liquid firstteam">
                   <img src="/common/img/coach/school1.png" alt="School Logo" />
                 </figure>
                  <p className="user-short-description-title">Delhi Public School</p>
                  <p className="user-short-description-text">Area Code-0512</p>
                </div>
                <div className="user-short-description landscape  tiny padd-right-50">
                  <p className="user-short-description-title text-right">Modal Public School</p>
                  <p className="user-short-description-text text-right">Area Code-0520</p>
                  <figure class="user-preview-cover liquid secondteam">
                   <img src="/common/img/coach/school2.png" alt="School Logo" />
                 </figure>
                </div>
                <div className="user-stats">
                  <div className="user-stat">
                    <p className="user-stat-title">1500-1800</p>
                    <p className="user-stat-text">Recomendadtion Score</p>
                  </div>
                  <div className="user-stat">
                    <p className="user-stat-title">28-03-2021 </p>
                    <p className="user-stat-text">Date</p>
                  </div>
                  <div className="user-stat">
                    <p className="user-stat-title">03:00 PM </p>
                    <p className="user-stat-text">Time</p>
                  </div>
                </div>
                <div className="user-preview-actions">
                  <div className="achievment-link">
                    <Link to="#">Enter</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-preview landscape">
              <div className="user-preview-info">
                <div className="user-short-description landscape teamvs  tiny padd-left-50">
                 <figure class="user-preview-cover liquid firstteam">
                   <img src="/common/img/coach/school1.png" alt="School Logo" />
                 </figure>
                  <p className="user-short-description-title">Delhi Public School</p>
                  <p className="user-short-description-text">Area Code-0512</p>
                </div>
                <div className="user-short-description landscape  tiny padd-right-50">
                  <p className="user-short-description-title text-right">Modal Public School</p>
                  <p className="user-short-description-text text-right">Area Code-0520</p>
                  <figure class="user-preview-cover liquid secondteam">
                   <img src="/common/img/coach/school2.png" alt="School Logo" />
                 </figure>
                </div>
                <div className="user-stats">
                  <div className="user-stat">
                    <p className="user-stat-title">1500-1800</p>
                    <p className="user-stat-text">Recomendadtion Score</p>
                  </div>
                  <div className="user-stat">
                    <p className="user-stat-title">28-03-2021 </p>
                    <p className="user-stat-text">Date</p>
                  </div>
                  <div className="user-stat">
                    <p className="user-stat-title">03:00 PM </p>
                    <p className="user-stat-text">Time</p>
                  </div>
                </div>
                <div className="user-preview-actions">
                  <div className="achievment-link">
                    <Link to="#">Enter</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-preview landscape">
              <div className="user-preview-info">
                <div className="user-short-description landscape teamvs  tiny padd-left-50">
                 <figure class="user-preview-cover liquid firstteam">
                   <img src="/common/img/coach/school1.png" alt="School Logo" />
                 </figure>
                  <p className="user-short-description-title">Delhi Public School</p>
                  <p className="user-short-description-text">Area Code-0512</p>
                </div>
                <div className="user-short-description landscape  tiny padd-right-50">
                  <p className="user-short-description-title text-right">Modal Public School</p>
                  <p className="user-short-description-text text-right">Area Code-0520</p>
                  <figure class="user-preview-cover liquid secondteam">
                   <img src="/common/img/coach/school2.png" alt="School Logo" />
                 </figure>
                </div>
                <div className="user-stats">
                  <div className="user-stat">
                    <p className="user-stat-title">1500-1800</p>
                    <p className="user-stat-text">Recomendadtion Score</p>
                  </div>
                  <div className="user-stat">
                    <p className="user-stat-title">28-03-2021 </p>
                    <p className="user-stat-text">Date</p>
                  </div>
                  <div className="user-stat">
                    <p className="user-stat-title">03:00 PM </p>
                    <p className="user-stat-text">Time</p>
                  </div>
                </div>
                <div className="user-preview-actions">
                  <div className="achievment-link">
                    <Link to="#">Enter</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-preview landscape">
              <div className="user-preview-info">
                <div className="user-short-description landscape teamvs  tiny padd-left-50">
                 <figure class="user-preview-cover liquid firstteam">
                   <img src="/common/img/coach/school1.png" alt="School Logo" />
                 </figure>
                  <p className="user-short-description-title">Delhi Public School</p>
                  <p className="user-short-description-text">Area Code-0512</p>
                </div>
                <div className="user-short-description landscape  tiny padd-right-50">
                  <p className="user-short-description-title text-right">Modal Public School</p>
                  <p className="user-short-description-text text-right">Area Code-0520</p>
                  <figure class="user-preview-cover liquid secondteam">
                   <img src="/common/img/coach/school2.png" alt="School Logo" />
                 </figure>
                </div>
                <div className="user-stats">
                  <div className="user-stat">
                    <p className="user-stat-title">1500-1800</p>
                    <p className="user-stat-text">Recomendadtion Score</p>
                  </div>
                  <div className="user-stat">
                    <p className="user-stat-title">28-03-2021 </p>
                    <p className="user-stat-text">Date</p>
                  </div>
                  <div className="user-stat">
                    <p className="user-stat-title">03:00 PM </p>
                    <p className="user-stat-text">Time</p>
                  </div>
                </div>
                <div className="user-preview-actions">
                  <div className="achievment-link">
                    <Link to="#">Enter</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-preview landscape">
              <div className="user-preview-info">
                <div className="user-short-description landscape teamvs  tiny padd-left-50">
                 <figure class="user-preview-cover liquid firstteam">
                   <img src="/common/img/coach/school1.png" alt="School Logo" />
                 </figure>
                  <p className="user-short-description-title">Delhi Public School</p>
                  <p className="user-short-description-text">Area Code-0512</p>
                </div>
                <div className="user-short-description landscape  tiny padd-right-50">
                  <p className="user-short-description-title text-right">Modal Public School</p>
                  <p className="user-short-description-text text-right">Area Code-0520</p>
                  <figure class="user-preview-cover liquid secondteam">
                   <img src="/common/img/coach/school2.png" alt="School Logo" />
                 </figure>
                </div>
                <div className="user-stats">
                  <div className="user-stat">
                    <p className="user-stat-title">1500-1800</p>
                    <p className="user-stat-text">Recomendadtion Score</p>
                  </div>
                  <div className="user-stat">
                    <p className="user-stat-title">28-03-2021 </p>
                    <p className="user-stat-text">Date</p>
                  </div>
                  <div className="user-stat">
                    <p className="user-stat-title">03:00 PM </p>
                    <p className="user-stat-text">Time</p>
                  </div>
                </div>
                <div className="user-preview-actions">
                  <div className="achievment-link">
                    <Link to="#">Enter</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OngoingList;
