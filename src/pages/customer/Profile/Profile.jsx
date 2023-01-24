
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


const Profile = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const user = useSelector((state) => state.users.currentUser);
    const [todayDate, setTodayDate] = useState("");
    const personalform = useRef(null);
    const photoRef = useRef(null);
    const [profilePhoto, setProfilePhoto] = useState();
    const dispatch=useDispatch();
    useEffect(() => {
        //setting the today's date
        const date = "" + new Date().getFullYear() + "-"
            + (new Date().getMonth() + 1) + "-" + new Date().getDate();
        setTodayDate(date);
        //setting the default profile photo in case there is no photo selected
        if(photoRef.current){
            user?.imageUrl ? setProfilePhoto(user.imageUrl): photoRef.current.src=defaultUserPhoto;
        }
       

    }, [user])

    async function handleChangePassword(e) {
        e.preventDefault();

        const changeCredentialsRequest = {
            email: e.target[0].value,
            oldPassword: e.target[1].value,
            newPassword: e.target[2].value
        }
        //send the request to the server endpoint
        console.log(changeCredentialsRequest, user);
        const resp=await changePassword(changeCredentialsRequest,user.id);
        document.getElementById("formPersonal").reset();
        if(resp!=null){
            console.log("success");
        }else{
            console.log("failed");
        }
    }

    function changeUbication(e) {
        e.preventDefault();
        const address = 
            {
                "province": e.target[0].value,
                "city": e.target[1].value,
                "street": e.target[2].value,
                "address": e.target[3].value
            }
        ;

        let updatedUser = structuredClone(user);
        if(user.addresses){
            console.log(user.address)
            updatedUser.addresses.push(address);
        }else{
            updatedUser.addresses=[];
            updatedUser.addresses.push(address);
        }
        //send the user with updated ubication
        
        const resp=addAddress(updatedUser);
        if(resp!=null){
            localStorage.setItem("currentUser",JSON.stringify(updatedUser));
            dispatch(setCurrentUser(updatedUser));
            document.getElementById("formPersonal").reset();
            console.log("success");
        }else{
            console.log("failed");
        }
        
    }

    function handleUpdate(e) {
    
        let updatedUser = structuredClone(user);
        updatedUser.firstName = personalform.current[0].value ? personalform.current[0].value : user.firstName;
        updatedUser.lastName = personalform.current[1].value ? personalform.current[1].value : user.lastName;
        updatedUser.phoneNumber = personalform.current[2].value ? personalform.current[2].value : user.phoneNumber;
        updatedUser.birthDate = personalform.current[3].value ? personalform.current[3].value : user.birthDate;
        updatedUser.imageUrl=profilePhoto? profilePhoto : user.photoUrl;
        

        const resp=updatePersonalInfo(updatedUser);
        if(resp!=null){
            localStorage.setItem("currentUser",JSON.stringify(updatedUser));
            dispatch(setCurrentUser(updatedUser));
            document.getElementById("formPersonal").reset();
            console.log("success");
        }else{
            console.log("failed");
        }
        

    }

    function onResult(imageFile) {
        setProfilePhoto(imageFile.base64);

    }

    function handlePhotoPick(e) {
        ConvertImageToBase64(e.target.files[0], onResult);
    }

    return (


        <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            <TabPanel header="Personal">
                <div className='personalProfile'>
                    <div className='profileImageCont'>
                        <img className='profilePhoto' ref={photoRef} src={`data:image/jpeg;base64,${profilePhoto}`} />
                        <img className='pickPhoto' src={camera} onClick={() => { document.getElementById('file-picker').click() }} />
                        <input id='file-picker' accept="image/png, image/jpeg" className='invisible-file-picker' type="file" onChange={handlePhotoPick} />
                    </div>
                    <form ref={personalform} id="formPersonal" onSubmit={handleUpdate}>
                        First name<input type="text" placeholder={user?.firstName} /><br />
                        Last name<input type="text" placeholder={user?.lastName} /><br />
                        Phone number<input type="text" placeholder={user?.phoneNumber ? user.phoneNumber : "Type your phone number"} /><br />
                        Birth date<input type="date" id="start" name="trip-start" className="sign_input"
                            min="1940-01-01" max={todayDate}  /><br />
                        <input className='submit' type="submit" value="Update" />
                    </form>

                </div>
            </TabPanel>
            <TabPanel header="Ubication">
                <div className='personalProfile'>
                    <h2>Add a new address:</h2>
                    <br/>
                    <form onSubmit={changeUbication}  id="formPersonal" >
                        <input type="text" placeholder='Province' required /><br />
                        <input type="text" placeholder='City' required /><br />
                        <input type="text" placeholder='Street' required /><br />
                        <input type="text" placeholder='Address in detail' required /><br />

                        <input className='submit' type="submit" value="Add address" />
                    </form>
                </div>
            </TabPanel>
            <TabPanel header="Credentials">
                <div className='personalProfile'>
                <h2>Change password:</h2><br/>
                    <form onSubmit={handleChangePassword}  id="formPersonal" >
                        <input type="text" placeholder='Email' /><br />
                        <input type="password" placeholder='Old password' /><br />
                        <input type="password" placeholder='New password' /><br />
                        <input type="submit" className='submit' value="Change password" />
                    </form>
                </div>
            </TabPanel>
        </TabView>


    );
}

export default Profile;