import { useRef } from "react";
import defaultPhoto from "../../../assets/defaultUserPhoto.jpg"
import camera from "../../../assets/camera.png";
import "./updateCompany.scss"
import ConvertImageToBase64 from "../../customer/Profile/ConvertImageToBase64";
import { useState } from "react";
import { useEffect } from "react";
import { getCompany } from "../../../helpers/company/getCompany";

import { InputTextarea } from 'primereact/inputtextarea';
import { updateCompany } from "../../../helpers/company/updateCompany";
import { Toast } from "primereact/toast";
        
const UpdateCompany = () => {
    const photoRef = useRef(null);
    const [profilePhoto, setProfilePhoto] = useState();
    const formRef = useRef(null);
    const [company,setcompany]=useState(null);
    const[desc,setDesc]=useState();
    const[obj,setObj]=useState();
    const[history,setHistory]=useState();
    const toast=useRef(null);

    useEffect(()=>{
        loadCompany();

     
    },[])
    useEffect(()=>{
   
        if(photoRef){
           // setCompanyPhoto();
        }
        
        if(company){
            setDesc(company?.description);
            setObj(company?.objective);
            setHistory(company?.history);
         }
        
    },[company])

    function setCompanyPhoto (){
        if (company && company.imageUrl) {
            setProfilePhoto(company.imageUrl)
        } else {
            photoRef.current.src = defaultPhoto;
        }
    }

    const loadCompany=async ()=>{
        const resp= await getCompany();
        if(resp){
            console.log(resp)
            setcompany(resp);
        }else{
            console.log("not valid")
        }
    }

    function handlePhotoPick(e) {
        ConvertImageToBase64(e.target.files[0], onResult);
    }
    function onResult(imageFile) {
        setProfilePhoto(imageFile.base64);

    }

    const showWarning=(warningType,summary,details="",miliSeconds)=>{
        
        toast.current.show({ severity: warningType, summary: summary,
            detail:details, life: miliSeconds });
    }
  
    const handleUpdateCompany = async(e) => {
        
        let updatedCompany = structuredClone(company);
        updatedCompany.companyName = formRef.current[0].value ? formRef.current[0].value : company.companyName;
        updatedCompany.description = desc ? desc : company.description;
        updatedCompany.objective = obj ? obj : company.objective;
        updatedCompany.history = history ? history : company.history;
        updatedCompany.contact = formRef.current[4].value ? formRef.current[3].value : company.contact;
        updatedCompany.imageUrl = profilePhoto ? profilePhoto : company.imageUrl;
        console.log(updatedCompany);
        const resp = await updateCompany(updatedCompany);
        setDesc("");
        setHistory("");
        setObj("");
        setcompany(updatedCompany);
        
        showWarning("success",'Los cambios se han guardados',"",3000);
        document.getElementById("company-form").reset();
    }

    return (
        <div>
             <Toast ref={toast}/>
            <h1>Actualizar Emprssa</h1>
            <div className="form-container">
                <div className="image-container">
                    <img className="company-img" ref={photoRef}
                     src={company?.imageUrl?(company.imageUrl.startsWith("http")? company.imageUrl : `data:image/jpeg;base64,${company.imageUrl}`) : defaultPhoto}
                      />
                    <img className='pickPhoto' src={camera} onClick={() => { document.getElementById('file-picker').click() }} />
                    <input id='file-picker' accept="image/png, image/jpeg" className='invisible-file-picker' type="file" onChange={handlePhotoPick} />
                </div>
                <div>
                    <form onSubmit={handleUpdateCompany} id="company-form" className="company-form" ref={formRef}>
                        Nombre de la empressa:
                        <input type="text" placeholder={company?.companyName} /><br />
                        Descripcion de la empressa:<br />
                        <InputTextarea className="descriocion-empressa" autoResize value={desc} onChange={(e) => setDesc(e.target.value)}  cols={70} /><br />
                        Objectivo de la empressa:<br/>
                        <InputTextarea className="descriocion-empressa" autoResize value={obj} onChange={(e) => setObj(e.target.value)}  cols={70} /><br />
                        Historia de la empressa:<br/>
                        <InputTextarea className="descriocion-empressa" autoResize value={history} onChange={(e) => setHistory(e.target.value)}  cols={70} /><br />
                        Contacto:
                        <input type="text" placeholder={company?.contact}  /><br />

                        <input className='submit' type="submit" value="Actualizar empressa" />


                    </form>
                </div>

            </div>
        </div>
    );
}

export default UpdateCompany;