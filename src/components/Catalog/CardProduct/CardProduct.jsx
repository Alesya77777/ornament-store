import classes from './CardProduct.module.css';



const CardProduct = () => {
  return (
    <div className={classes.card}>
        <img className={classes.card__picture} src="https://appevent.ru/devtasks/img/catalog_item_1.jpg" alt="" />
        <h2 className={classes.card__title}>Браслет Xiaomi Mi Band 4</h2>
        <span className={classes.card__cost} >1790 руб.</span>
        <button className={classes.card__add} >Добавить в корзину</button>
        <button className={classes.card__remove}>Оформить заказ</button>
      </div>
  )
};

export default CardProduct;