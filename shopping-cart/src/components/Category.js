import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';

export default function Category(props) {
    let { id } = useParams(); // Unpacking and retrieve id
    let category = props.category;
    console.log(id)
    useEffect(()=>{
      console.log('asd')
    },[id])
    return (
        <div>

category
        </div>
    )
}