import './styles.css'

const Product = () => {
  return (
    <div className="product col-3">
        <img src="https://www.reidosanimais.com.br/media/catalog/product/cache/1/image/380x350/9df78eab33525d08d6e5fb8d27136e95/7/8/7896029082430-product-image-1.png" 
        className="img-fluid align center"/>
        <button className='btn btn-primary rounded-circle'>+</button>
        <h4>
            <label className="badge badge-primary">
                R$ 90,00
            </label>
        </h4>
        <small>
            <b>
            Ração Seca Pedigree Carne e Vegetais para Cães Adultos - 2,7Kg
            </b>
        </small>
    </div>
  )
}

export default Product