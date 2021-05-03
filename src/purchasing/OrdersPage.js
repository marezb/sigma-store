import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import "./OrdersPage.scss";
import { useStateValue } from "../StateProvider";
import { nanoid } from "nanoid";
import OrderElement from "./OrderElement";

function OrdersPage() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState();

    useEffect(() => {
        if (user) {
            db.collection("users")
                .doc(user?.uid)
                .collection("orders")
                .orderBy("created", "desc")
                .onSnapshot((snapshot) =>
                    setOrders(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data: doc.data(),
                        }))
                    )
                );
        } else {
            setOrders([]);
        }
    }, [user]);

    return (
        <div className='orders'>
            <h1>Historia Twoich zamówień:</h1>
            <div className='orders__order'>
                {orders?.map((order) => (
                    <OrderElement order={order} key={nanoid(3)} />
                ))}
            </div>
        </div>
    );
}

export default OrdersPage;
