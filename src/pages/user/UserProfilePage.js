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
              <li className="user-info">
                Name Surname
              </li>

              <li
                className={activeTab === 'wants' ? 'active' : ''}
                onClick={() => handleTabChange('wants')}
              >
                Wants
              </li>
              <li
                className={activeTab === 'orders' ? 'active' : ''}
                onClick={() => handleTabChange('orders')}
              >
                Orders
              </li>
              <li
                className={activeTab === 'likeds' ? 'active' : ''}
                onClick={() => handleTabChange('likeds')}
              >
                Likeds
              </li>
              <li
                className={activeTab === 'mydata' ? 'active' : ''}
                onClick={() => handleTabChange('mydata')}
              >
                My Data's
              </li>
            </ul>
          </div>
        </div>
        <div className='col-lg-9 col-md-12'>
          <div className="main-content">
            {activeTab === 'wants' && (
              <div>
                <Packages/>
              </div>
            )}
            {activeTab === 'orders' && (
              <div>
                
                <Orders/>
              </div>
            )}
            {activeTab === 'likeds' && (
              <div>
              
                <Favorites/>
              </div>
            )}
            {activeTab === 'mydata' && (
              <div>
              
                <Informations/>
              </div>
            )}
          </div>
        </div>
      </div>


    </div>
  );
};

export default UserProfilePage;
