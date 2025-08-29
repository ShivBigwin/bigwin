"use client";
import UserDashboardLayout from "../userDashboardLayout";


const MyProfile = () => {
  return (
    <UserDashboardLayout activeTab="profile">
      <div className="bg-white rounded-lg shadow p-6">
        {/* <h2 className="text-2xl font-bold mb-6"></h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Full Name</label>
                <p className="mt-1">John Doe</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <p className="mt-1">john.doe@example.com</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Phone</label>
                <p className="mt-1">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Account Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Member Since</label>
                <p className="mt-1">January 15, 2023</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Last Login</label>
                <p className="mt-1">Today at 2:30 PM</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Status</label>
                <p className="mt-1 text-green-600">Verified</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </div>
    </UserDashboardLayout>
  );
};

export default MyProfile;