
import { TabView, TabPanel } from 'primereact/tabview';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import defaultUserPhoto from "../../../assets/defaultUserPhoto.jpg";
import camera from "../../../assets/camera.png";
import "./Profile.scss";
import ConvertImageToBase64 from './ConvertImageToBase64';
import { updatePersonalInfo } from '../../../helpers/users/updatePersonalInfo';
import { setCurrentUser } from '../../../store/user/userSlice';
import { updateUserUbication } from '../../../helpers/users/updateUserUbication';
import { changePassword } from '../../../helpers/users/changePassword';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';


const Profile = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const user = useSelector((state) => state.users.currentUser);
    const [todayDate, setTodayDate] = useState("");

    const ubicationForm=useRef(null);
    const personalform = useRef(null);

    const [userDirections, setUserDirections] = useState([]);
    const[city,setCity]=useState();

    const photoRef = useRef(null);
    const [profilePhoto, setProfilePhoto] = useState();

    const toast=useRef(null);

    const dispatch = useDispatch();
    useEffect(() => {

        //setting the today's date
       setTodaysDate();

       //set resumen of user directions if exists
       if(user && user.addresses){
        setResumenofAddresses();
       }
        //setting the default profile photo in case there is no photo selected
        if (photoRef.current) {
        setUserPhoto();
        }
    }, [user])

    function setUserPhoto (){
        if (user && user.imageUrl) {
            setProfilePhoto(user.imageUrl)
        } else {
            photoRef.current.src = defaultUserPhoto;
        }
    }

    function setTodaysDate(){
        const date = "" + new Date().getFullYear() + "-"
        + (new Date().getMonth() + 1) + "-" + new Date().getDate();
    setTodayDate(date);
    }

    function setResumenofAddresses (){
        let i=-1;
        const resumen=user.addresses.map((it)=>{
            i=i+1;
            return {
                id: i,
                name:it.province+" "+it.city+" "+it.address};
                
           });
           resumen.push({
            id:-1200,
            name:"[+] Agrega una nueva direcion"
           });
            setUserDirections(resumen);
            
            if(resumen.length==1){
                setCity(resumen[0]);
            }
    }

    async function handleChangePassword(e) {
        e.preventDefault();

        const changeCredentialsRequest = {
            email: e.target[0].value,
            oldPassword: e.target[1].value,
            newPassword: e.target[2].value
        }
        //send the request to the server endpoint
        const resp = await changePassword(changeCredentialsRequest, user.id);
        document.getElementById("formPersonal").reset();
        if (resp != null) {
            showWarning("success",'Los cambios se han guardados',"",3000);
        } else {
            showWarning("warn",'Porfavor asegurate de los datos ingresados',"",3000);
        }
    }

  async  function handleSubmitUbication(e) {
        e.preventDefault();
        const address =
        {
            "province": e.target[0].value,
            "city": e.target[1].value,
            "street": e.target[2].value,
            "address": e.target[3].value,
            "isMatriz": e.target[4].checked ,
            "status":"CREATED"
        };
        let updatedUser = structuredClone(user);
         //si este direcion es matriz entonces el resto de direcciones no pueden ser matriz
         if(address.isMatriz){
            updatedUser.addresses.forEach(it=>it.isMatriz=false);
        }
        //si el id del item selecionado del DropDown es menos que 0
        //entonces es agregar nueva direcion 
        if(city.id<0){
            address.isMatriz=true;
            updatedUser.addresses.push(address);
        }else{
            updatedUser.addresses[city.id]=address;
        }
        //send the user with updated ubication
        const resp =await updateUserUbication(updatedUser);
        updateLocalStorage(updatedUser,resp);

    }

    const updateLocalStorage=(updatedUser,resp)=>{
        
        if (resp != null) {
            localStorage.setItem("currentUser", JSON.stringify(updatedUser));
            dispatch(setCurrentUser(updatedUser));
            document.getElementById("formPersonal").reset();
            setCity(null);
            //show success message
           showWarning("success",'Los cambios se han guardados',"",3000);
        } else {
            //show failed message
           showWarning("warn",'No se pudo proccessar la actualizacion',"",3000);
        }
    }

    const showWarning=(warningType,summary,details="",miliSeconds)=>{
        
        toast.current.show({ severity: warningType, summary: summary,
            detail:details, life: miliSeconds });
    }
  

    async function handleUpdatePersonalInfo(e) {
        e.preventDefault();
        let updatedUser = structuredClone(user);
        updatedUser.firstName = personalform.current[0].value ? personalform.current[0].value : user.firstName;
        updatedUser.lastName = personalform.current[1].value ? personalform.current[1].value : user.lastName;
        updatedUser.phoneNumber = personalform.current[2].value ? personalform.current[2].value : user.phoneNumber;
        updatedUser.birthDate = personalform.current[3].value ? personalform.current[3].value : user.birthDate;
        updatedUser.imageUrl = profilePhoto ? profilePhoto : user.photoUrl;


        const resp = await updatePersonalInfo(updatedUser);
        updateLocalStorage(updatedUser,resp);
      
        document.getElementById("formPersonal").reset();
    }

    function onResult(imageFile) {
        setProfilePhoto(imageFile.base64);

    }

    function handlePhotoPick(e) {
        ConvertImageToBase64(e.target.files[0], onResult);
    }
    function onUbiacitonSelected(e){
        setCity(e.target.value);
        
        if(e.value.id>=0){
            let selectedItem=user.addresses[e.value.id];
            //fill the form inputs with selected address info
            ubicationForm.current[0].value=selectedItem.province;
            ubicationForm.current[1].value=selectedItem.city;
            ubicationForm.current[2].value=selectedItem.street;
            ubicationForm.current[3].value=selectedItem.address;
            ubicationForm.current[4].checked=selectedItem.isMatriz;
        }else{
            //caso que el usuario quiere agregar una nueva direccion
            document.getElementById("formPersonal").reset();
        }
       

    }

    function handleDeleteUbication(){
        if(user.addresses[city.id].isMatriz){
            showWarning("warn","Este es tu direccion matriz, porfavor marca otro direcion como matriz o agrega una direccion matriz","",5000);
        }else{
            confirmDialog({
                message: 'Estas seguro de eliminar la ubicacion?',
                header: 'Confirma la eliminacion de la ubicacion',
                icon: 'pi pi-exclamation-triangle',
                accept,
                reject
              });  
        }
        
    }
const accept=async ()=>{
    const updatedUser=structuredClone(user);
    updatedUser.addresses.splice(city.id,1);

    const resp =await updateUserUbication(updatedUser);

    updateLocalStorage(updatedUser,resp);
    
}
const reject=()=>{

}
    return (

        <div>
  <Toast ref={toast}/>
  <ConfirmDialog />
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header="Personal">
                    <div className='personalProfile'>
                        <div className='profileImageCont'>
                            <img className='profilePhoto' ref={photoRef} src={profilePhoto?(profilePhoto.startsWith("http") ? profilePhoto : `data:image/jpeg;base64,${profilePhoto}`) : defaultUserPhoto} />
                            <img className='pickPhoto' src={camera} onClick={() => { document.getElementById('file-picker').click() }} />
                            <input id='file-picker' accept="image/png, image/jpeg" className='invisible-file-picker' type="file" onChange={handlePhotoPick} />
                        </div>
                        <form ref={personalform} id="formPersonal" onSubmit={handleUpdatePersonalInfo}>
                            First name<input type="text" placeholder={user?.firstName} /><br />
                            Last name<input type="text" placeholder={user?.lastName} /><br />
                            Phone number<input type="text" placeholder={user?.phoneNumber ? user.phoneNumber : "Type your phone number"} /><br />
                            Birth date<input type="date" id="start" name="trip-start" className="sign_input"
                                min="1940-01-01" max={todayDate} /><br />
                            <input className='submit' type="submit" value="Update" />
                        </form>

                    </div>
                </TabPanel>
                <TabPanel header="Ubication">
                    <div className='personalProfile'>
                        <h2>Actualizar ubicacion:</h2>

                       {userDirections&& <Dropdown value={city} options={userDirections}
                            onChange={(e) => {onUbiacitonSelected(e)}}  optionLabel="name" placeholder="Elige ubicacion" />}

                        <br />
                        <form onSubmit={handleSubmitUbication} id="formPersonal" ref={ubicationForm}>
                            <input type="text" placeholder='Province' required /><br />
                            <input type="text" placeholder='City' required /><br />
                            <input type="text" placeholder='Street' required /><br />
                            <input type="text" placeholder='Address in detail' required /><br />
                            <div className='matriz-div'><p>Es matriz:</p><input type="checkbox"/></div>
                       
                            <input className='submit' type="submit" value="Actualizar direccion" />
                          
                            
                        </form>
                        {city?.id>=0&&<button className='delete-direccion-btn' onClick={handleDeleteUbication}>Eliminar direccion</button>}
                    </div>
                </TabPanel>
                <TabPanel header="Credentials">
                    <div className='personalProfile'>
                        <h2>Cambiar contraseña:</h2><br />
                        <form onSubmit={handleChangePassword} id="formPersonal" >
                            <input type="text" placeholder='Email' /><br />
                            <input type="password" placeholder='Old password' /><br />
                            <input type="password" placeholder='New password' /><br />
                            <input type="submit" className='submit' value="Change password" />
                        </form>
                    </div>
                </TabPanel>
            </TabView>
        </div>


    );
}

export default Profile;