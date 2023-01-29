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
        if(currentUser){
            const responseCarts = await Promise.resolve(getCartsByUserId(currentUser.id))
            setCarts(responseCarts)
            setIsLoading(false)
        }else{
            const isLogged =  JSON.parse( localStorage.getItem('currentUser'))
            const responseCarts = await Promise.resolve(getCartsByUserId(isLogged.id))
            setCarts(responseCarts)
            setIsLoading(false)
        }
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
    carts?
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
                        <Fieldset key={index}  collapsed legend={`${cart.user.firstName} ${cart.user.lastName}, Compra N°:  ${index+1},  estado: ${getOrderStatus(cart.status)}`} toggleable>
                            {
                                cart.order.items.map((item,index)=>(
                                    <OrderItem key={index} item={item}/>
                                ))
                            }
                        <div class="cart_checkout">
                            <div class="cart_total">
                                <div class="cart_subtotal">Sub-Total</div>
                                <div class="cart_items">{ Math.round(cart.order.subTotal * 100)/100}$</div>
                                {
                                    cart.order.coupon?
                                    <>
                                        <div class="cart_subtotal">Descuento por cupón</div>
                                            <div class="cart_items">
                                                { 
                                                    - Math.round(cart.order.coupon.quantity * 100)/100
                                                }
                                                {
                                                    cart.order.coupon.type === 'PERCENTAGE'?
                                                    `%`:
                                                    `$`
                                                }
                                            </div>
                                            <div  class="cart_items"> 
                                                {
                                                    cart.order.coupon.type === 'PERCENTAGE'?
                                                    <del>
                                                        {Math.round((cart.order.subTotal * cart.order.coupon.quantity)*0.01 * 100)/100}$
                                                    </del>
                                                    :
                                                    <del>
                                                        {Math.round((cart.order.subTotal - cart.order.coupon.quantity) * 100)/100}$
                                                    </del>
                                                }
                                            </div>
                                    </>
                                    :<></>
                                }   
                                <div class="cart_subtotal">Total + IVA(12%)</div>
                                <div class="cart_items">{  Math.round(cart.order.totalPrice * 100)/100}$</div>
                            </div>
                            <div className='cart__actions'>
                                <Button label="Cancelar Orden" className="p-button-danger" />
                                <Button style={{backgroundColor:'#A1FF60'}} label="Marcar como recibida" className="p-button-success" />
                                <Button label="Imprimir recibo" className="p-button-secondary" />
                            </div>
                        </div>
                    </Fieldset>
                ))
            }
        </div>

        </div>
    </div>
    :<p>no hay cartass</p>
  )
}
