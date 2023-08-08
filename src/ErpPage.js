 import React from 'react';
import MenuBar from './MenuBar';
import './ErpPage.css';
import VideoComponent from './compenents/VideoComponent';


function ErpPage() {
  return (
    <>


     <MenuBar/>
     <div className='main-container'>
     <div className='info-container'>
     <h1 style={{textAlign:'center'}}>Dinamo Plus | Yeni Nesil ERP</h1>
     <p style={{marginLeft:'20px'}}>
Dinamo Plus adını verdiğimiz ERP, BI, API, Wizard, Mobil App ve Plus Planning modüllerimiz 
ile yeni nesil bir ERP sunuyoruz. Birbirleri ile entegre modüllerimiz web ve mobil altyapısı sayesinde
 güncel teknolojilere daha hızlı adaptasyon sağlayabiliyor.

Ayrıca üçüncü parti yazılımlarla da daha kolay haberleşebiliyor. 
Windows, Linux ve macOS işletim sistemlerine kurulabilen ve Microsoft SQL, 
Oracle ve PostgreSQL veritabanları ile çalışabilen Dinamo Plus modüllerimizi kısaca tanıtalım.
</p>
</div>
<VideoComponent/>
     </div>
     


    

    </>
   
  )
}

export default ErpPage
