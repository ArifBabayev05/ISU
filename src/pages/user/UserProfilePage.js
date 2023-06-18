import { useState } from "react";
import "../../style/ProfilePage.css"

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState('wants');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="user-page-container">
      <div className="sidebar">
        <ul>
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
  );
};

export default UserProfilePage;
