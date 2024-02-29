
function Livro({dadosJSON}) {
    return(
            <>
                {
                    dadosJSON.map((livro) => (
                        <div className='cardBook'>
                            <h3 className="cardTitle">{livro.titulo}</h3>
                            <p>{livro.autor}</p>
                            <img src={livro.imagem} alt='capa do livro cavernas de aço por Isaac Asimov' style={{width:'300px'}}></img>
                            
                            <div className='descricao-caixa'>
                                <p className='descricao'>{livro.descricao}</p>
                            </div>
                        </div> /*--cardBook--*/
                    ))
                }
            </>
    );
}

export default Livro;