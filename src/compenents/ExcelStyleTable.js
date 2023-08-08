import React from 'react';
import './css/ExcelStyleTable.css';

const ExcelStyleTable = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Adı</th>
            <th>Soyadı</th>
            <th>Yaşı</th>
            <th>E-posta</th>
            <th>Kayıt Tarihi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Melih Emre</td>
            <td>Taşkın</td>
            <td>26</td>
            <td>melih@outlook.com</td>
            <td>02/26/2022 February 3:55 pm</td>
          </tr>
          {/* Diğer satırları buraya ekleyebilirsiniz */}
        </tbody>
      </table>
    </div>
  );
};

export default ExcelStyleTable;
