import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';
import Loading from '../../../components/Loading';
import { getAllCoupons } from '../../../helpers/coupons/getAllCoupons';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useDispatch, useSelector } from 'react-redux';
import { putCoupon } from '../../../helpers/coupons/putCoupon';
import { updateCurrentUser } from '../../../store/user/userSlice';


export const Roulette = () => {

    const {currentUser} = useSelector(state => state.users)

    const [start, setStart] = useState(false);
    const [coupons, setCoupons] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch();
    const winPrizeIndex = 0;
  
    useEffect(() => {
        getCouponsPrizes();
    }, [])
   
    const getCouponsPrizes = async() =>{
        const responseCoupons = await Promise.resolve(getAllCoupons());
        const filtered = responseCoupons.map(coupon=>{
                return{
                    id:coupon.id,
                    type:coupon.type,
                    quantity: coupon.quantity,
                    text:`CÓDIGO \n ${coupon.code} \n ${coupon.quantity}${coupon.type==='DIRECT'?'$':'%'}`,
                    status:coupon.status,
                    code:coupon.code,
                    userId: coupon.userId,
                    created: coupon.created,
                    image:"https://i.pinimg.com/originals/eb/2a/8f/eb2a8f4ddfb50c23712a3cd0d5cc2a3a.gif"
                }
        });
        setCoupons(filtered.filter(coupon => coupon.status === 'NOT_USED' && coupon.userId === null))
        setIsLoading(false);
    }

    const reproductionArray = (array = [], length = 0) => [
        ...Array(length)
          .fill('_')
          .map(() => array[Math.floor(Math.random() * array.length)]),
      ];
      
      const reproducedPrizeList = [
        ...coupons,
        ...reproductionArray(coupons, coupons.length * 3),
        ...coupons,
        ...reproductionArray(coupons, coupons.length),
      ];
      
      const generateId = () =>
        `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;
      
      const prizeList = reproducedPrizeList.map((prize) => ({
        ...prize,
        id: typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : generateId(),
      }));

    const prizeIndex = coupons.length * 4 + winPrizeIndex;
  
    const handleStart = () => {
      setStart((prevState) => !prevState);
    };
  
    const handlePrizeDefined = () => {
      console.log('🥳 Prize defined! 🥳');
      console.log(coupons[winPrizeIndex])
      setVisible(true)
    };

    const onHide = async () => {
        let _cupon = {
            id: coupons[winPrizeIndex].id,
            status:'RESERVED',
            quantity: coupons[winPrizeIndex].quantity,
            type:coupons[winPrizeIndex].type,
            userId:currentUser.id
        }
        const responsePutCoupon = await Promise.resolve(putCoupon(_cupon));

        //Cambiar el estado del currentUser verified tanto en el store 
        let _user = {...currentUser}
        _user.verified = true;
        dispatch(updateCurrentUser(_user))
        //Guardar en el local storage el cambio
        localStorage.setItem('currentUser', JSON.stringify(_user))
        //Guardar en la base de datos el cambio

        // como en la base de datos
        setVisible(false)
    }

    const renderFooter = () => {
        return (
            <div>
                <Button label="Continuar" icon="pi pi-check" onClick={onHide} autoFocus />
            </div>
        );
    }

  return (
    isLoading?
    <Loading/>
    :
    <>
    <Dialog header="Felicidades" visible={visible} onHide={onHide} breakpoints={{'960px': '75vw'}} style={{width: '50vw'}} footer={renderFooter}>
        <div className="flex align-items-center flex-column pt-6 px-3">
            {/* <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i> */}
            <img style={{width:200, height:200}} src="https://i.pinimg.com/originals/29/8f/2c/298f2ce6dead72fe992253c5ba0eba95.gif"/>
            <h3 style={{marginTop:30}}>Cupón de bienvenida activado!</h3>
            <h1 style={{ marginTop:20 }}>
            <b>Haz activado tu cupón de descuento de bienvenida, úsalo en tus próximas compras. </b>
            </h1>
            <h3 style={{ lineHeight: 1.5, textIndent: '1rem', marginTop:20 }}>
               <b>Código: </b> {coupons[winPrizeIndex].code}
            </h3>
            <h3 style={{ lineHeight: 1.5, textIndent: '1rem', marginTop:20 }}>
            <b>Cantidad: </b> {coupons[winPrizeIndex].quantity} {coupons[winPrizeIndex].type==='DIRECT'?'$':'%'}
            </h3>
        </div>
    </Dialog>
    <div style={{marginTop:150}}>
      <RoulettePro
        prizes={prizeList}
        prizeIndex={prizeIndex}
        start={start}
        onPrizeDefined={handlePrizeDefined}
        spinningTime={5}
        defaultDesignOptions={{ prizesWithText: true }}
      />
    </div>
      <Button onClick={handleStart} label="SPIN !" className="p-button-rounded p-button-success" />
  </>
  )
}
