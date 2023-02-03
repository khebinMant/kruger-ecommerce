import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import Loading from "../../../components/Loading";
import { resetLostPassword } from "../../../helpers/users/recoverPasswordOperations/resetLostPassword";
import { sendRecoverycode } from "../../../helpers/users/recoverPasswordOperations/sendRecoveryCode";
import { validateRecoveryCode } from "../../../helpers/users/recoverPasswordOperations/validateRecoveryCode";
import "./passwordRecovery.scss"
const PasswordRecovery = () => {
    const toast = useRef(null);
    const senCodeFormRef = useRef(null);
    const resetPassFormRef = useRef(null);
    const [email, setEmail] = useState();
    const [code, setCode] = useState();
    const [codeSent, setCodeSent] = useState(false);
    const navigation = useNavigate();

    const sendCode = async (e) => {
        e.preventDefault();

        setCodeSent(true);
        document.getElementById("password-recover-cont").style.display = "none";
        const resp = await sendRecoverycode(email);


        console.log(resp);
        if (resp != null) {
            senCodeFormRef.current.style.display = "none";
            document.getElementById("password-recover-cont").style.display = "flex";

            document.getElementById("validate_code_form").style.display = "block";
            showWarning("success", "Hemos enviado un codigo a tu correo!", "", 3000);
            setCodeSent(false);
        } else {
            showWarning("warn", "Porvafor ingresa un correo correcto!", "", 2000);
            document.getElementById("password-recover-cont").style.display = "flex";
            setCodeSent(false);
        }

    }



    const validateCode = async (e) => {
        e.preventDefault();
        const validationRequest = {
            email: email,
            code: code
        }
        if (code?.length < 6) {
            showWarning("warn", "El codigo debe tener 6 numeros!", "", 2000);
        } else {
            const resp = await validateRecoveryCode(validationRequest);
            if (resp != null) {
                //changePassword
                showWarning("success", "Hemos validado el codigo!", "", 3000);
                document.getElementById("validate_code_form").style.display = "none";
                document.getElementById("change_password_form").style.display = "block";


            } else {
                showWarning("warn", "El codigo ingresado esta incorrecto!", "", 2000);
            }
        }
    }

    const setNewPassowrd = async (e) => {
        e.preventDefault();
        if (passwordIsValid()) {
            const request = {
                email: email,
                code: code,
                newPassword: resetPassFormRef.current[0].value
            };
            document.getElementById("password-recover-cont").style.display = "none";
            setCodeSent(true);

            const resp = await resetLostPassword(request);
            if (resp != null) {
                showWarning("success", "Su contraseña ha sido cambiada exitosamente!", "", 3000);
            } else {
                showWarning("warn", "No se pudo cambiar la contraseña!", "", 3000);
            }
            setTimeout(() => {
              navigation("/login");
            }, 1500)

        } else {
            showWarning("warn", "La contraseña debe tener 6 caracters y los dos campos deben ser iguales!", "", 2000);
        }

    }

    function passwordIsValid() {

        return resetPassFormRef.current[0].value.length >= 6 &&
            resetPassFormRef.current[0].value === resetPassFormRef.current[1].value ? true : false;
    }



    const showWarning = (warningType, summary, details = "", miliSeconds) => {

        toast.current.show({
            severity: warningType, summary: summary,
            detail: details, life: miliSeconds
        });

    }


    return (
        <>
            {codeSent && <Loading className="loading" />}
            <Toast ref={toast} />
            <div className="password-recover-cont" id="password-recover-cont">


                <form ref={senCodeFormRef} onSubmit={sendCode} className="sendCode-form" id="sendCode-form">
                    <label className="password_recovery_lable" id="lable" for="chk" aria-hidden="true">
                        Recuperar contraseña
                    </label>
                    <input
                        className="password_recovery_input"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button id="enviar_code" className="send_code_btn">Enviar codigo</button>
                </form>

                <div>
                    <form onSubmit={validateCode} className="validate_code_cont" id="validate_code_form">
                        <label className="password_recovery_lable" for="chk" aria-hidden="true">
                            Ingresa el codigo
                        </label>
                        <input
                            className="password_recovery_input"
                            type="text"
                            name="text"
                            placeholder="Ingresa el codigo"
                            value={code}
                            onChange={(e) => { setCode(e.target.value) }}
                            required
                        />
                        <button className="send_code_btn">Validar codigo</button>
                    </form>
                </div>
                <div>
                    <form ref={resetPassFormRef} onSubmit={setNewPassowrd} className="validate_code_cont" id="change_password_form">
                        <label className="password_recovery_lable" for="chk" aria-hidden="true">
                            Ingresa nueva contraseña
                        </label>
                        <input
                            className="password_recovery_input"
                            type="password"
                            name="password"
                            placeholder="Ingresa la contraseña nueva"

                            required
                        />
                        <input
                            className="password_recovery_input"
                            type="password"
                            name="password"
                            placeholder="Ingresa la contraseña nueva otra vez"


                            required
                        />
                        <button className="send_code_btn">Cambiar contraseña</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PasswordRecovery;