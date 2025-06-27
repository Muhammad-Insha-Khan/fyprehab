import React, { useState } from 'react';
import '../styles/Header.css';
import { FaCog, FaUser, FaBell, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';
import Clickabletext from './Clickabletext';
import Dropdown from '../components/Dropdown';
import Notification from './Notification';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AccountPopup from './AccountPopup';

const Header = () => {
  const [showAccountPopup, setShowAccountPopup] = useState(false);
  const navigate = useNavigate();

  const handleReport = () => alert('Report clicked');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    Swal.fire({
      icon: 'success',
      title: 'Logged Out',
      text: 'You have been logged out successfully.',
      confirmButtonColor: '#00796b',
      confirmButtonText: 'OK',
    }).then(() => {
      navigate('/');
    });
  };

  const handleAgreement = () => {
    navigate('/Client-Contract');
  };

  const handleEditProfile = () => {
    setShowAccountPopup(false);
    navigate('/edit-profile');
  };
const handleDeleteAccount = async () => {
  const result = await Swal.fire({
    title: 'Confirm Account Deletion',
    text: 'This action is irreversible. Enter your password to confirm:',
    input: 'password',
    inputPlaceholder: 'Enter your password',
    inputAttributes: {
      autocapitalize: 'off',
      autocorrect: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Delete Account',
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6'
  });

  if (!result.isConfirmed || !result.value) return;

  const password = result.value.trim();
  const token = localStorage.getItem('token');

  try {
    const res = await fetch('http://localhost:5000/api/buyer/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ password }) // ✅ Send password
    });

    const data = await res.json();

    if (!res.ok) {
      return Swal.fire('Error', data.message || 'Delete failed', 'error');
    }

    Swal.fire('Deleted!', data.message || 'Your account has been deleted.', 'success');
    localStorage.clear();
    navigate('/');
  } catch (err) {
    console.error('DELETE ERROR:', err);
    Swal.fire('Error', 'Something went wrong on the server.', 'error');
  }
};
  const settingsOptions = [
    { label: 'Report', icon: FaFileAlt, onClick: handleReport },
    { label: 'Logout', icon: FaSignOutAlt, onClick: handleLogout },
    { label: 'Agreement', icon: FaUser, onClick: handleAgreement },
  ];

  return (
    <header className="header">
      <div className="logo"></div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="actions">
        <Notification Icon={FaBell} text="Notifications" />
        <Clickabletext
          icon={FaUser}
          text="Account"
          onClick={() => setShowAccountPopup(true)}
        />
        <Dropdown icon={FaCog} text="" options={settingsOptions} />
      </div>

      {showAccountPopup && (
        <AccountPopup
          onClose={() => setShowAccountPopup(false)}
          onEdit={handleEditProfile}
          onDelete={handleDeleteAccount}
        />
      )}
    </header>
  );
};

export default Header;
