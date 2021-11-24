import axios from "axios";
import { useEffect, useState } from "react";
import { Event } from "types/event";
import { BASE_URL } from "util/request";
import { useParams } from "react-router-dom";
import "./styles.css";

export default function Details() {

    const { eventId } = useParams();

    const [events, setEvents] = useState<Event>();

    useEffect(() => {
        axios.get(`${BASE_URL}/events/${eventId}`).then(response => {
            setEvents(response.data);

        });
    }, []);

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
                        R$: {events?.price}
                    </div>
                    <span> - </span>
                    <input type="text" placeholder="1" />
                    <span> + </span>
                    <div className="btn-buy">
                        Comprar
                    </div>
                </div>
            </div>
        </div>
    )
}