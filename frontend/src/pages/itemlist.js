import Popup from "../components/popup";
import Card from "../components/card";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function Itemlist() {
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://192.168.1.110:5000/shoppinglist`,{withCredentials:true})
            .then(res => {
                const items = res.data;
                setItems(items);
            })
            .catch((res) =>{
                if(res.response.data.isError){
                    localStorage.setItem('isAuthenticated','false');
                    navigate("/error",{state:{ msg:res.response.data.msg}});
                }
            })
    }, [count, navigate]);

    const handleDelete = (itemId) => {
        axios.delete('http://192.168.1.110:5000/shoppinglist/' + itemId, {withCredentials:true})
            .then(res => {
                console.log(res);
                const filtered = items.filter(item => item._id !== itemId);
                setItems(filtered);
            })
            .catch((res) =>{
                if(res.response.data.isError){
                    localStorage.setItem('isAuthenticated','false');
                    navigate("/error",{state:{ msg:res.response.data.msg}});
                }
            })
    }


    return (
        <>
            <div className="container">
                <h1> Oggetti <Popup handler={setCount} /></h1>
                <div className="row">
                    {items.map((item) => (
                        <Card name={item.name} quantity={item.quantity} description={item.description} key={item._id} id={item._id} onDelete={handleDelete} />
                    ))}
                </div>
            </div>

        </>
    );
}

export default Itemlist;