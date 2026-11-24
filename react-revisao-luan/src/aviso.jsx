function Aviso({urgente}) {
    return (
        <div>
            {urgente ? (
                <p>ATENÇÃO: Leia agora!</p> 
            ) : (
                <p>Aviso comum</p>
            )}
        </div>
    )
}

export default Aviso;