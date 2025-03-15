'use client'

import { useState } from 'react'
import { MapPin, Check } from 'lucide-react'
import apiClient from '@/api/client'

export default function PincodeChecker() {
    const [pincode, setPincode] = useState('')
    const [loading, setLoading] = useState(false)
    const [deliveryInfo, setDeliveryInfo] = useState(null)

    const checkDelivery = async () => {
        if (!pincode || pincode.length !== 6) return

        setLoading(true)
        try {
            // Replace with your actual API endpoint
            const response = await apiClient.get("/delivery/check-delivery-exist-by-pincode", { pinCode: pincode })

            if (response.data.inboundServiceExist == 'Yes') {
                setDeliveryInfo(response.data.result.GetServicesforPincodeResult)
            }
        } catch (error) {
            console.error('Failed to fetch delivery info:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleChange = () => {
        setDeliveryInfo(null)
        setPincode('')
    }

    return (
        <div className="max-w-md w-full mt-8">
            {!deliveryInfo ? (
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-700">
                        <MapPin className="w-5 h-5" />
                        <h2 className="text-lg font-medium">Delivery Options</h2>
                    </div>
                    <div className="flex gap-1 md:gap-2 w-full mr-10">
                        <input
                            type="text"
                            placeholder="Enter pincode"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button
                            onClick={checkDelivery}
                            disabled={loading || pincode.length !== 6}
                            className={`px-4 py-2 rounded-md text-white font-medium transition-colors duration-200 ${loading || pincode.length !== 6
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                        >
                            {loading ? 'Checking...' : 'Check'}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-700">
                            <MapPin className="w-5 h-5" />
                            <span className="text-sm">Delivery options for {pincode}</span>
                        </div>
                        <button
                            onClick={handleChange}
                            className="px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-200"
                        >
                            Change
                        </button>
                    </div>

                    <div className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-gray-700">
                            <Check className="w-4 h-4 text-green-500" />
                            <p className="text-sm text-gray-700">
                                Shipping to: {deliveryInfo.PincodeDescription}, {deliveryInfo.CityDescription}, {deliveryInfo.State}
                            </p>
                        </li>
                        {/* <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-gray-700">
                                <Check className="w-4 h-4 text-green-500" />
                                Delivery by {deliveryInfo.deliveryDate}
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-700">
                                <Check className="w-4 h-4 text-green-500" />
                                Free delivery above ₹{deliveryInfo.freeDeliveryThreshold}
                            </li>
                            {deliveryInfo.codAvailable && (
                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                    <Check className="w-4 h-4 text-green-500" />
                                    COD available
                                </li>
                            )}
                        </ul> */}

                    </div>
                </div>
            )}
        </div>
    )
}