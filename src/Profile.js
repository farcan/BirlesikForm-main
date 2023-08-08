import React from 'react'
import ExcelStyleTable from './compenents/ExcelStyleTable'
import MenuBar from './MenuBar'
import './Profile.css'
import AvatarUploader from './compenents/AvatarUploader'

export const Profile = () => {
  return (
    <div>
<MenuBar/>
<div className="profile-container">

<AvatarUploader/>
<div className="user-info">

<div className='text-container'>
  <h2>222804009</h2>
</div>

<div className='text-container'>
  <p>E-Posta :</p>
  <p>banadisplayflexderler@birlesikyazilim.com</p>
</div>

<div className='text-container'>
  <p>isim :</p>
  <p>Fahri</p>
</div>

<div className='text-container'>
  <p>Soyisim :</p>
  <p>Gedik</p>
</div>

<div className='text-container'>
  <p>Kurum Adı</p>
  <p>Gedik University</p>
</div>



</div>

</div>
    <p style={{marginLeft:'100vh'}}>Kullanıcılar</p>
    <ExcelStyleTable/>

    </div>
    
  )
}
