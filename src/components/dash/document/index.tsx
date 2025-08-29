"use client";
import UserDashboardLayout from "../userDashboardLayout";


const Documents = () => {
  const documents = [
    {
      id: 1,
      name: "Aadhaar Card",
      type: "Identity Proof",
      uploadedOn: "15 Jun 2023",
      status: "Verified"
    },
    {
      id: 2,
      name: "PAN Card",
      type: "Identity Proof",
      uploadedOn: "15 Jun 2023",
      status: "Verified"
    },
    {
      id: 3,
      name: "Bank Statement",
      type: "Financial Proof",
      uploadedOn: "20 Jul 2023",
      status: "Pending"
    },
    {
      id: 4,
      name: "Salary Slips",
      type: "Income Proof",
      uploadedOn: "Not Uploaded",
      status: "Required"
    }
  ];

  return (
    <UserDashboardLayout activeTab="documents">
      <div className="bg-white rounded-lg shadow p-6">
        
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Document Name</th>
                <th className="text-left py-3 px-4">Type</th>
                <th className="text-left py-3 px-4">Uploaded On</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{doc.name}</td>
                  <td className="py-3 px-4">{doc.type}</td>
                  <td className="py-3 px-4">{doc.uploadedOn}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      doc.status === "Verified" 
                        ? "bg-green-100 text-green-800" 
                        : doc.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {doc.status !== "Required" ? (
                      <>
                        <button className="text-blue-600 hover:underline mr-2">
                          View
                        </button>
                        <button className="text-blue-600 hover:underline">
                          Download
                        </button>
                      </>
                    ) : (
                      <button className="text-blue-600 hover:underline">
                        Upload
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
      <div className="flex justify-end items-center mt-6 mb-6">
          {/* <h2 className="text-2xl font-bold">Documents</h2> */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Upload New Document
          </button>
        </div>
    </UserDashboardLayout>
  );
};

export default Documents;