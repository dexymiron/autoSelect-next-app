"use client"

import { useDispatch, useSelector } from "react-redux"
import { fetchServices } from "../../redux/servicesSlice";

export default function OrderPage() {
    const dispatch = useDispatch();
    const { data: services, status, error } = useSelector((state) => state.services);
    

    const handleFetchServices = () => {
        dispatch(fetchServices());
    };

    return <>
        <h1>Замовити</h1>
        <button onClick={handleFetchServices} disabled={status === "loading"}>
            {status === "loading" ? "Завантаження..." : "Завантажити послуги"}
        </button>
        {status === "failed" && <p>Ошибка: {error}</p>}
        <ul style={{listStyle: "none"}}>
            {services.map((service) => (
                <li key={service.id}>
                    <span>{service.name}</span> - <span>{service.price} грн</span>
                </li>
            ))}
        </ul>
    </>
}