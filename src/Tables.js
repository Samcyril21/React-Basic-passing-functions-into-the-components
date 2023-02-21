import React from 'react';

import './index.css';


export default function Table(){
    return(
<div>
    <h2>Student Details</h2>
    <table>
        <tr>
        <th>Student Roll No</th>
        <th>Student Name</th>
        
        <th>Percentage</th>
        </tr>
        <tr>
        <td>1111</td>
            <td>
                Michel
            </td>
            
            <td>65%</td>
        </tr>
        <tr>
        <td>1112</td>
            <td>
                Ruban
            </td>
           
            <td>70%</td>
        </tr>
        <tr>
        <td>1113</td>
            <td>
                George
            </td>
            
            <td>60%</td>
        </tr>
        <tr>
        <td>1114</td>
            <td>
                Sibin
            </td>
            
            <td>80%</td>
        </tr>
      
    </table>
    {[1,2,3,4,5,6,7,8,9,10].map((data)=> (<p>{data*3}</p>))}
</div>
    );
    }