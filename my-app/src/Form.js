import React, { useState } from "react";

export default function Form() {
    const [data, setData] = useState();
    const changeHandler = (e) => 
    console.log(e.target.value)
    setData(e.target.id);
};
const changeHandler (e) => {
    console.log(e.target.value)
}
function handleSubmit(event);
event.preventDefault()
console.log(event);

return (
<div>
    <form>
        Test {data}
        <fieldset onSubmit={handleSubmit}>
            <legend>Üye Ekleme: </legend>
            <label htmlFor= "fname">İsim:</label>
             <input onChange = {changeHandler} type = "text" id="fname" name="fname"  value={data.isim}/>
             <label htmlFor= "fsurname">Soyisim:</label>
             <input onChange = {changeHandler} type = "text" id="fsurname" name="fsurname"  value={data.soyisim}/>
             <label htmlFor= "femail">e-mail:</label>
             <input onChange = {changeHandler} type = "text" id="femail" name="femail"  value={data.email}/>
             <label htmlFor= "frole">role:</label>
             <input onChange = {changeHandler} type = "text" id="frole" name="frole"  value={data.rol}/>



            <button onSubmit={handleSubmit} type="submit">Gönder</button>
    
        </fieldset>
    </form>
</div>
)