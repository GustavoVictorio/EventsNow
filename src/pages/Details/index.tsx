import axios from "axios";
import { useEffect, useState } from "react";
import { Event } from "types/event";
import { BASE_URL } from "util/request";
import { useParams } from "react-router-dom";
import "./styles.css";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Details() {

    const { eventId } = useParams();

    const [events, setEvents] = useState<Event>();

    useEffect(() => {
        axios.get(`${BASE_URL}/events/${eventId}`).then(response => {
            setEvents(response.data);
        });
    }, []);

    const [tiket, setTiket] = useState(1);

    // const [price, setPrice] = useState(events?.price);

    const increase = () => {
        setTiket(tiket + 1);
    }

    const decrease = () => {
        if (tiket <= 1) {
            toast.warning("Quantidade minima é de 1");
            setTiket(1);
        } else {
            setTiket(tiket - 1);
        }
    }

    const buyTicket = () => {
        toast.success("Compra finalizada");
    }

    return (
        <div className="container-d">
            <div className="content-d">
                <h1>{events?.nameEvent}</h1>
                <div className="info-d">
                    <p><span>Realizado por: </span>{events?.name}</p>
                    <p><span>Local: </span>{events?.locale}</p>
                    <p><span>Data: </span>{events?.date}</p>
                    <p><span>Hora: </span>{events?.hour}</p>
                    <p><span>Traje: </span>{events?.costume}</p>
                    <p><span>Estacionamento: </span>R$: {events?.parking}</p>
                </div>
                <div className="detail-d">
                    <p>
                        {events?.description}
                    </p>
                </div>
                <div className="buy">
                    <div className="value">
                        R$: {events?.price.toFixed(2)}
                    </div>
                    <span onClick={decrease}> - </span>
                    <input type="text" placeholder={tiket.toString()} />
                    <span onClick={increase}> + </span>
                    <div className="btn-buy" onClick={buyTicket}>
                        Comprar
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}