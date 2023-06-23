import { useState } from "react";
import "../../style/ProfilePage.css"
import Pageheader from "../../utils/PageHeader";
import Orders from "../../components/UserProfileContents/Orders";
import Packages from "../../components/UserProfileContents/Packages";
import Favorites from "../../components/UserProfileContents/Favorites";
import Informations from "../../components/UserProfileContents/Informations";

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState('wants');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container user-page-container">
      <Pageheader header="İstifadəçi Hesabı" />
      <div className="row">
        <div className='col-lg-3 col-md-12'>
          <div className="sidebar">
            <ul>
              <li className="user-info p-3">
                <i style={{ 'font-size': '28px' }} class="bi bi-person-circle"></i>
                Name Surname
              </li>

              <li
                className={activeTab === 'wants' ? 'active' : ''}
                onClick={() => handleTabChange('wants')}
              >
                <i style={{ 'font-size': '20px' }} class="bi bi-box-seam"></i>
                Wants
              </li>
              <li
                className={activeTab === 'orders' ? 'active' : ''}
                onClick={() => handleTabChange('orders')}
              >
                <i style={{ 'font-size': '20px' }} class="bi bi-basket2"></i>
                Orders
              </li>
              <li
                className={activeTab === 'likeds' ? 'active' : ''}
                onClick={() => handleTabChange('likeds')}
              >
                <i style={{ 'font-size': '20px' }} className='bi bi-heart'></i>
                Likeds
              </li>
              <li
                className={activeTab === 'mydata' ? 'active' : ''}
                onClick={() => handleTabChange('mydata')}
              >
                <i style={{ 'font-size': '20px' }} className='bi bi-person'></i>
                Likeds
              </li>
              <li>
                <i style={{ 'font-size': '20px' }} className='bi bi-door-open'></i>
                Çıxış et
              </li>
            </ul>
          </div>
        </div>
        <div className='col-lg-9 col-md-12'>
          <div className="main-content">
            {activeTab === 'wants' && (
              <div>
                <Packages />
              </div>
            )}
            {activeTab === 'orders' && (
              <div>

                <Orders />
              </div>
            )}
            {activeTab === 'likeds' && (
              <div>

                <Favorites />
              </div>
            )}
            {activeTab === 'mydata' && (
              <div>

                <Informations />
              </div>
            )}
          </div>
        </div>
      </div>


    </div>
  );
};

export default UserProfilePage;
