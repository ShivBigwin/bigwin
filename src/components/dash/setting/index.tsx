"use client";
import { useState } from "react";
import UserDashboardLayout from "../userDashboardLayout";

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    promotionalEmails: true,
    twoFactorAuth: false,
    language: "English"
  });

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  return (
    <UserDashboardLayout activeTab="settings">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Settings</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="emailNotifications"
                  name="emailNotifications"
                  checked={settings.emailNotifications}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 rounded"
                />
                <label htmlFor="emailNotifications" className="ml-2">
                  Email Notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="smsNotifications"
                  name="smsNotifications"
                  checked={settings.smsNotifications}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 rounded"
                />
                <label htmlFor="smsNotifications" className="ml-2">
                  SMS Notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="promotionalEmails"
                  name="promotionalEmails"
                  checked={settings.promotionalEmails}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 rounded"
                />
                <label htmlFor="promotionalEmails" className="ml-2">
                  Promotional Emails
                </label>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Security</h3>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="twoFactorAuth"
                name="twoFactorAuth"
                checked={settings.twoFactorAuth}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 rounded"
              />
              <label htmlFor="twoFactorAuth" className="ml-2">
                Two-Factor Authentication
              </label>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mr-3">
              Change Password
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
              View Login History
            </button>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Preferences</h3>
            <div className="flex items-center">
              <label htmlFor="language" className="w-32">Language:</label>
              <select
                id="language"
                name="language"
                value={settings.language}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </select>
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
};

export default Settings;