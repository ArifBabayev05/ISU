import { useState } from "react";
import "../../style/ProfilePage.css"
import Pageheader from "../../utils/PageHeader";

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
                <h2>Wants</h2>
                {/* Content for the Wants tab */}
              </div>
            )}
            {activeTab === 'orders' && (
              <div>
                <h2>Orders</h2>
                {/* Content for the Orders tab */}
              </div>
            )}
            {activeTab === 'likeds' && (
              <div>
                <h2>Likeds</h2>
                {/* Content for the Likeds tab */}
              </div>
            )}
            {activeTab === 'mydata' && (
              <div>
                <h2>My Data's</h2>
                {/* Content for the My Data's tab */}
              </div>
            )}
          </div>
        </div>
      </div>


    </div>
  );
};

export default UserProfilePage;
