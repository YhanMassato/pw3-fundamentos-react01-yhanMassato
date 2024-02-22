

function Livro({titulo, autor, imagem, descricao}) {
    return(
        <div className='cardBook'>
            <h3 className="cardTitle">{titulo}</h3>
            <p>{autor}</p>
            <img src={imagem} alt='capa do livro cavernas de aço por Isaac Asimov' style={{width:'800px',height:'300px'}}></img>
            <div className='descricao-caixa'>
                <p className='descricao'>{descricao}</p>
            </div>
        </div> /*--cardBook--*/
    );
}

export default Livro;