import React from 'react'
import { Avatar, Button } from 'antd';

export default function Letters() {
    const alphabet=["A","B","C","Ç","D","E","Ə","F","G","H","X","İ","J","K","Q","L","M","N","O","Ö","P","R","S","Ş","T","U","Ü","V","Y","Z"]
  return (
    <div className="alphabet">
         <section className="container">
        <div >
        {
              alphabet.map((element,index) =>
              <Avatar style={{display:index<10?"":"none",marginRight:"2px"}} size="large">
              {element}
            </Avatar>
            )
          }
        </div>
      </section>
    </div>
  )
}
