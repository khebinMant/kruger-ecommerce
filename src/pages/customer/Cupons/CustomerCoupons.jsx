import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../../components/Loading";
import SingleCoupon from "./SingleCoupon/SingleCoupon";
import "./CustomerCoupons.scss";
import { getAllCoupons } from "../../../helpers/coupons/getAllCoupons";
import { getCouponsByUserId } from "../../../helpers/coupons/getCouponsByUserId";
import { Roulette } from "../Roulette/Roulette";

const CustomerCoupons = () => {

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const {currentUser} = useSelector(state => state.users)


  const [isLoading, setIsLoading] = useState(true);
  const [coupons, setCoupons] = useState([])

  useEffect(() => {
    getCoupons();
  }, [currentUser])
  
  const getCoupons = async() =>{
      const responseCoupons = await Promise.resolve(getCouponsByUserId(user.id));
      setCoupons(responseCoupons)
      setIsLoading(false);
  }


  return (
    isLoading?
    <Loading/>
    :
    <>
    {
      user.verified?
      <></>
      :
      <Roulette/>
    }
    <div className="todo__main">
      <div className="todo__container">
      {
        coupons.length>0?
        coupons.map((coupon,index)=>(
            <SingleCoupon key={index} coupon={coupon}/>

        ))
        :<></>
      }
      </div>
    </div>
    </>
  );
};

export default CustomerCoupons;
