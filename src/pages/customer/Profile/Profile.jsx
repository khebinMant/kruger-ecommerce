
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
import { addAddress } from '../../../helpers/users/addAddress';
import { changePassword } from '../../../helpers/users/changePassword';
import { Dropdown } from 'primereact/dropdown';


const Profile = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const user = useSelector((state) => state.users.currentUser);
    const [todayDate, setTodayDate] = useState("");

    const ubicationForm=useRef(null);
    const personalform = useRef(null);

    const [userDirections, setUserDirections] = useState([]);
    const[city,setCity]=useState();
    const [selectedAddress,setSelectedAddress]=useState();

    const photoRef = useRef(null);
    const [profilePhoto, setProfilePhoto] = useState();

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
        console.log(user);

        if (user && user.imageUrl) {
            console.log(" not null");
            setProfilePhoto(user.imageUrl)
        } else {
            photoRef.current.src = defaultUserPhoto;
            console.log("null");
        }
    }

    function setTodaysDate(){
        const date = "" + new Date().getFullYear() + "-"
        + (new Date().getMonth() + 1) + "-" + new Date().getDate();
    setTodayDate(date);
    }

    function setResumenofAddresses (){
        const resumen=user.addresses.map((it)=>{
            return {
                id: it.id,
                name:it.province+" "+it.city+" "+it.address};
           });
           console.log(resumen);
            setUserDirections(resumen);
    }

    async function handleChangePassword(e) {
        e.preventDefault();

        const changeCredentialsRequest = {
            email: e.target[0].value,
            oldPassword: e.target[1].value,
            newPassword: e.target[2].value
        }
        //send the request to the server endpoint
        console.log(changeCredentialsRequest, user);
        const resp = await changePassword(changeCredentialsRequest, user.id);
        document.getElementById("formPersonal").reset();
        if (resp != null) {
            console.log("success");
        } else {
            console.log("failed");
        }
    }

  async  function changeUbication(e) {
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
        console.log(e.target[4].checked);

        let updatedUser = structuredClone(user);
        replaceAddressWithnewOne(updatedUser,address);
        console.log(updatedUser);
        //send the user with updated ubication

        const resp =await addAddress(updatedUser);
        if (resp != null) {
            localStorage.setItem("currentUser", JSON.stringify(updatedUser));
            dispatch(setCurrentUser(updatedUser));
            document.getElementById("formPersonal").reset();
            console.log("success");
        } else {
            console.log("failed");
        }

    }
    function replaceAddressWithnewOne(updatedUser,address){
        updatedUser.addresses.find((obj,index)=>{
            if(obj.id==selectedAddress.id){
                updatedUser.addresses[index]=address;
                console.log("object replaced with new one ");
                return true;
            }
        })
    }

    async function handleUpdatePersonalInfo(e) {

        let updatedUser = structuredClone(user);
        updatedUser.firstName = personalform.current[0].value ? personalform.current[0].value : user.firstName;
        updatedUser.lastName = personalform.current[1].value ? personalform.current[1].value : user.lastName;
        updatedUser.phoneNumber = personalform.current[2].value ? personalform.current[2].value : user.phoneNumber;
        updatedUser.birthDate = personalform.current[3].value ? personalform.current[3].value : user.birthDate;
        updatedUser.imageUrl = profilePhoto ? profilePhoto : user.photoUrl;


        const resp = await updatePersonalInfo(updatedUser);
        if (resp != null) {
            localStorage.setItem("currentUser", JSON.stringify(updatedUser));
            dispatch(setCurrentUser(updatedUser));
            document.getElementById("formPersonal").reset();
            console.log("success");
        } else {
            console.log("failed");
        }


    }

    function onResult(imageFile) {
        setProfilePhoto(imageFile.base64);

    }

    function handlePhotoPick(e) {
        ConvertImageToBase64(e.target.files[0], onResult);
    }
    function onUbiacitonSelected(e){
        console.log(e);
        let selectedItem=getAddressSelectedByID(e.value.id);
        setCity(e.target.value);
        setSelectedAddress(e.value);
        //fill the form inputs with selected address info
        ubicationForm.current[0].value=selectedItem.province;
        ubicationForm.current[1].value=selectedItem.city;
        ubicationForm.current[2].value=selectedItem.street;
        ubicationForm.current[3].value=selectedItem.address;
        ubicationForm.current[4].checked=selectedItem.isMatriz;
        console.log(selectedItem);

    }

    function getAddressSelectedByID(id){
        return user.addresses.find(item=> item.id==id);
    }

    return (

        <div>

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
                        <form onSubmit={changeUbication} id="formPersonal" ref={ubicationForm}>
                            <input type="text" placeholder='Province' required /><br />
                            <input type="text" placeholder='City' required /><br />
                            <input type="text" placeholder='Street' required /><br />
                            <input type="text" placeholder='Address in detail' required /><br />
                            <div className='matriz-div'><p>Es matriz:</p><input type="checkbox"/></div>
                            <input className='submit' type="submit" value="Actualizar direccion" />
                            
                        </form>
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