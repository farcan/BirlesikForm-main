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
 
<table>
<tbody>
  <tr>
    <th>Eposta : </th>
    <td>banadisplayflexderler@birlesikyazilim.com</td>
  </tr>
  <tr>
    <th>İsim : </th>
    <td>Fahri</td>
  </tr>
  <tr>
    <th>Soyisim : </th>
    <td>Gedik</td>
  </tr>
  <tr>
    <th>Kurum Adı : </th>
    <td>Gedik</td>
  </tr>
  </tbody>
</table>
</div>

</div>
<div>
    <p style={{textAlign:'center'}}> <b>Kullanıcılar</b></p>
    <ExcelStyleTable/>
</div>
    </div>
    
  )
}
