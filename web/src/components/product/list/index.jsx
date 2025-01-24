import './styles.css'

const Product = () => {
return(
    <div className="product-list col-12">
        <div className="row">
            <div className="col-3">
                <img src="https://images.tcdn.com.br/img/img_prod/587393/racao_special_dog_ultralife_frango_e_arroz_cachorro_adulto_de_raca_pequena_2651_1_20200630212739.jpg" className="img-fluid"/>
            </div>
            <div className="col-6">
                <h6>
                   <label className='badge badge-primary'>R$ 30,00</label> 
                </h6>
                <small>
                    <b>Ração Special Dog Ultralife Frango e Arroz - Cachorro Filhote de Raça Pequena</b>
                </small>
            </div>
            <div className="col-3">
                <button className="btn btn-secondary rounded-circle">-</button>
            </div>
        </div>
    </div>
)
}

export default Product