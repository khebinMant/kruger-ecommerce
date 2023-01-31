import React from "react";
import "./Faq.scss";

const Faq = () => {
  return (
    <div class="faq">
      <div class="faq-q">
        <span>
          <b>¿Cuáles son los métodos de pago disponibles?</b>
        </span>
        <p>
          Ofrecemos varios métodos de pago para que pueda elegir el que mejor se
          adapte a sus necesidades. Puede realizar el pago con tarjeta de
          crédito o débito, PayPal o transferencia bancaria. Todas las
          transacciones se realizan en un entorno seguro y protegido para
          garantizar la seguridad de sus datos financieros.
        </p>
      </div>
      <div class="faq-q">
        <span>
          <b>¿Qué garantía ofrecen en los productos?</b>
        </span>
        <p>
          Ofrecemos una garantía de 1 año en todos nuestros productos para
          garantizar la satisfacción del cliente y la calidad de los productos
          que vendemos. Si tiene algún problema con su compra dentro de ese
          período de tiempo, estaremos encantados de ayudarlo a resolver
          cualquier problema que pueda surgir.
        </p>
      </div>
      <div class="faq-q">
        <span>
          <b>¿Cuáles son las opciones de envío disponibles?</b>
        </span>
        <p>
          Ofrecemos envío gratuito a nivel nacional en todas nuestras compras y
          brindamos entregas rápidas y eficientes para garantizar que reciba su
          compra en el menor tiempo posible. También ofrecemos la opción de
          seguimiento en línea para que pueda monitorear el estado de su envío
          en todo momento.
        </p>
      </div>
      <div class="faq-q">
        <span>
          <b>¿Cómo hacer una devolución o cambio de producto?</b>
        </span>
        <p>
          En el caso de que desee devolver o cambiar un producto, puede
          contactarnos a través de nuestro servicio al cliente y le brindaremos
          asistencia en cada paso del proceso. Le proporcionaremos las
          instrucciones detalladas para realizar la devolución o el cambio y
          trabajaremos con usted para asegurarnos de que esté completamente
          satisfecho con su compra.
        </p>
      </div>
      <div class="faq-q">
        <span>
          <b>
            ¿Tienen disponibilidad en stock de todos los productos que aparecen
            en la página?
          </b>
        </span>
        <p>
          Sí, mantenemos actualizado el stock en tiempo real para garantizar que
          solo se muestren productos disponibles para la venta. Sin embargo, en
          algunos casos raros, un producto puede agotarse mientras se está
          procesando su compra. En ese caso, le informaremos de inmediato y le
          ofreceremos alternativas para que pueda elegir.
        </p>
      </div>
      <div class="faq-q">
        <span>
          <b>¿Ofrecen descuentos o promociones especiales?</b>
        </span>
        <p>
          Sí, ofrecemos regularmente descuentos y promociones especiales en
          nuestro sitio web para brindar a nuestros clientes una experiencia de
          compra aún más satisfactoria. Le recomendamos suscribirse a nuestro
          boletín de noticias para estar informado sobre las últimas ofertas y
          promociones.
        </p>
      </div>
      <div class="faq-q">
        <span>
          <b>¿Cómo protegen la privacidad de sus clientes?</b>
        </span>
        <p>
          Tomamos la privacidad de nuestros clientes muy en serio y tomamos
          todas las medidas necesarias para proteger sus datos personales. No
          compartimos su información con terceros sin su autorización y
          utilizamos tecnologías de seguridad avanzadas para garantizar la
          seguridad de sus datos en línea.
        </p>
      </div>
      <div class="faq-q">
        <span>
          <b>
            ¿Ofrecen servicios de reparación y mantenimiento para los productos
            vendidos?
          </b>
        </span>
        <ul>
          <li>
            Sí, ofrecemos servicios de reparación y mantenimiento para todos los
            productos vendidos en nuestro sitio web. Puede contactarnos para
            programar una reparación o solicitar asistencia técnica y
            trabajaremos con usted para resolver cualquier problema que pueda
            surgir con su producto.
          </li>
        </ul>
      </div>
      <div class="faq-q">
        <span>
          <b>¿Cómo se puede contactar con el servicio al cliente?</b>
        </span>
        <p>
          Puede contactar con nuestro servicio al cliente a través de nuestro
          formulario de contacto en línea, correo electrónico o llamando al
          número de teléfono proporcionado en nuestro sitio web. Estamos
          disponibles para responder a sus preguntas y brindar asistencia en
          todo momento para garantizar una experiencia de compra satisfactoria.
        </p>
      </div>
      <div class="faq-q">
        <span>
          <b>¿Cuáles son los términos y condiciones de la garantía?</b>
        </span>
        <p>
          Ofrecemos una garantía limitada para todos los productos vendidos en
          nuestro sitio web. Consulte los términos y condiciones específicos de
          la garantía para cada producto en su página de detalles. En caso de
          cualquier problema con su producto dentro del período de garantía,
          estaremos encantados de brindar un reemplazo o un reembolso.
        </p>
      </div>
      <div class="faq-q">
        <span>
          <b>¿Ofrecen envío internacional?</b>
        </span>
        <p>
          Sí, ofrecemos envío internacional a muchos países en todo el mundo.
          Consulte la lista de países aceptados en nuestro sitio web y los
          costos de envío para su ubicación.
        </p>
        <ul type="none" style={{ fontSize: "16px", fontWeight: "bold" }}>
          <li>
            <i>Account Name</i> :
          </li>
          <li>
            <i>Bank Name</i> :
          </li>
        </ul>
      </div>
      <div className="spacer layer10"></div>
      <div className="spacer layer11"></div>
    </div>
  );
};

export default Faq;
