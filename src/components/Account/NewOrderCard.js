"use client";
import React, { useEffect, useState } from "react";
import OrderCardHeader from "./OrderCardHeader";
import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";
import { IoDownloadOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import useAuth from "@/auth/useAuth";
import apiClient from "@/api/client";
import NewOrderChild from "./NewOrderChild";
import Loader from "../loader/Loader";
import EmptyOrder from "./EmptyOrder";

const NewOrderCard = () => {
  const { user } = useAuth();
  const [myOrder, setMyOrder] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user) {
      getMyOrder();
    }
  }, [user]);

  const getMyOrder = async () => {
    try {
      const response = await apiClient.get("/orders/myorders1", {
        userId: user.id,
      });
      console.log(response, "res");
      if (response.ok) {
        setMyOrder(response.data);
      } else {
        setError(response.statusText);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    // Display loader while loading
    return <Loader />;
  }

  return (
    <>
      {myOrder.length === 0 ? (
        <EmptyOrder />
      ) : (
        myOrder.map((orderData) => (
          <NewOrderChild key={orderData.id} orderData={orderData} />
        ))
      )}
    </>
  );
};

export default NewOrderCard;
