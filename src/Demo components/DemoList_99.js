import React from 'react'
import Card from './Card_99';

const DemoList = ({demo}) => {
    return (
        <div>
            {demo.map((user,i) => {
                return(
                    <Card key={i} name={demo[i].name} username={demo[i].username} img={demo[i].img}/>
                )
            })}
        </div>
    )

}

export default DemoList;