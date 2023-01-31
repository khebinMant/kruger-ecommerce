import { useEffect, useState } from "react";
import { getProduct } from "../../../../../helpers/products/getProduct";

const useAnalize= (orders)=>{
    const [gamaBaja, setGamaBaja] = useState(0);
const [gamaMedia, setGamaMedia] = useState(0);
const [gamaAlta, setGamaAlta] = useState(0);
const [servicio, setServicio] = useState(0);
    useEffect(() => {
      if(orders){
        loadGamaBaja();
      }
      }, [orders]);
      
      
      const loadGamaBaja = async () => {
        orders?.forEach(async (it) => {
      
          loadProducts(it.items);
        })
      
      }
      const loadProducts = async (items) => {
        let gb = 0;
        let gm = 0;
        let ga = 0;
        let s=0;
        items.forEach(async (it) => {
          const resp = await getProduct(it.id);
          switch (resp.category.name) {
            case "Gama Baja":
              gb = gb + 1;
              setGamaBaja(gb);
              break;
            case "Gama Media":
              gm = gm + 1;
              setGamaMedia(gm);
              break;
            case "Gama Alta":
              ga = ga + 1;
              setGamaAlta(ga);
              break;
            case "Servicio":
              s = s + 1;
              setServicio(s);
              break;
          }
        });
      
      }
      return {gamaBaja,gamaMedia,gamaAlta,servicio};
      
}
export default useAnalize;
