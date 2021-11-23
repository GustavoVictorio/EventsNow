import "./styles.css";

export default function Details() {
    return (
        <div className="container-d">
            <div className="content-d">
                <h1>Evento X</h1>
                <div className="info-d">
                    <p><span>Local: </span>Rua A</p>
                    <p><span>Data: </span>06/12/2021</p>
                    <p><span>Hora: </span>08:00</p>
                    <p><span>Traje: </span>Casual</p>
                    <p><span>Estacionamento: </span>R$: 30,00</p>
                </div>
                <div className="detail-d">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="buy">
                    <div className="value">
                        R$: 20.00
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