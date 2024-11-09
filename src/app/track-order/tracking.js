

"use client";
import {
  FaRegCheckCircle,
  FaTruck,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Tracking = ({ trackingData }) => {
  const scans = trackingData?.Shipment;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Your Tracking Details
      </h2>
      <div className="flex flex-col items-center">
        {scans?.map((scan, index) => (
          <div
            key={index}
            className="relative mb-8 w-full flex items-center justify-center"
          >
            {/* Dot for each scan */}
            <div className="flex flex-col items-center">
              <div
                className={`w-5 h-5 rounded-full ${
                  index === 0 ? "bg-green-500" : "bg-gray-400"
                } border-4 border-white shadow-lg`}
              ></div>
              {/* Line connecting dots */}
              {index < scans.length - 1 && (
                <div className="h-12 border-l-2 border-gray-300 absolute top-5 left-2" />
              )}
            </div>

            {/* Scan Details */}
            <div className="ml-8 w-3/4 bg-gray-50 p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <FaRegCheckCircle className="text-green-500 mr-2" />
                <span className="text-lg font-medium text-gray-700">
                  Status: {scan.Status}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaTruck className="text-blue-500 mr-2" />
                <span>Service: {scan.Service}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaCalendarAlt className="text-purple-500 mr-2" />
                <span>Date: {scan.StatusDate}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaClock className="text-yellow-500 mr-2" />
                <span>Time: {scan.StatusTime}</span>
              </div>
              <div className="text-sm text-gray-500 mt-2">
                {scan.Scans.map((s, i) => (
                  <div key={i} className="flex items-center mb-1">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    <span>Location: {s.ScanDetail.ScannedLocation}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracking;
