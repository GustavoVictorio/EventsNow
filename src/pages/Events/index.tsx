import axios from 'axios';
import { useEffect, useState } from 'react';
import { Event } from 'types/event';
import { BASE_URL } from 'util/request';
import './styles.css'

export default function Events() {

    const [events, setEvents] = useState<Event[]>();

    useEffect(() => {
        axios.get(`${BASE_URL}/events`).then(response => {
            setEvents(response.data);

        });
    }, []);

    return (
        <div className="container-e">
            <div className="content-e">
                {events?.map(x => (
                    <div className="card-info" key={x.id}>
                        <p>
                            {x?.nameEvent}
                        </p>
                        <p>
                            {x?.name}
                        </p>
                        <span>
                            <a href="/detalhes">
                                Saiba mais
                            </a>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}