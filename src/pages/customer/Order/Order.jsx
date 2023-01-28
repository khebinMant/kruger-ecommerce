import { Fieldset } from 'primereact/fieldset';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../../components/Loading';
import { getCartsByUserId } from '../../../helpers/carts/getCartsByUserId';
import "./Order.scss";
import OrderItem from './OrderItem/OrderItem';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';

export const Order = () => {

    const [carts, setCarts] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const { currentUser } = useSelector(state => state.users)
    
    useEffect(() => {
        getCarts()
    }, [])
    
    const getCarts = async () =>{
        const responseCarts = await  Promise.resolve(getCartsByUserId(currentUser.id))
        setCarts(responseCarts)
        setIsLoading(false)
    }
    
    const getOrderStatus = (status)=>{
        if(status=='PAID'){
            return 'PAGADO'
        }
        if(status=='ACCEPTED'){
            return 'ACEPTADO'
        }
        if(status=='IN_TRAVEL'){
            return 'EN VIAJE'
        }
        if(status=='RECEIVED'){
            return 'RECIBIDO'
        }
        if(status=='CANCELED'){
            return 'CANCELADO'
        }
    }
  return (
    isLoading?
    <Loading/>:
    <div className='cart'>

        <div class="cart_container">
        <div class="cart_header">
          <h3 class="cart_heading">Historial de compras</h3>
        </div>

        <div className="cart_items_container">
            {
                carts.map((cart,index) =>(
                    <>
                        <Fieldset  collapsed legend={`${cart.user.firstName} ${cart.user.lastName}, Compra N°:  ${index+1},  estado: ${getOrderStatus(cart.status)}`} toggleable>
                            {
                                cart.order.items.map((item,index)=>(
                                    <>
                                    <OrderItem item={item}/>
                                    <Divider />
                                    
                                    </>
                                ))
                            }
                        <div class="cart_checkout">
                            <div class="cart_total">
                                <div>
                                <div class="cart_subtotal">Sub-Total</div>
                                <div class="cart_items">{ Math.round(cart.order.totalPrice * 100)/100} $</div>
                                <div class="cart_subtotal">Total</div>
                                <div class="cart_items">{ cart.order.totalPrice}$</div>
                                </div>
                            </div>
                            <div className='cart__actions'>
                                <Button label="Cancelar Orden" className="p-button-danger __action" />
                                <Button style={{backgroundColor:'#A1FF60'}} label="Marcar como recibida" className="p-button-success __action" />
                            </div>
                        </div>
                    </Fieldset>
                    </>
                ))
            }
        </div>

        </div>
    </div>
  )
}
