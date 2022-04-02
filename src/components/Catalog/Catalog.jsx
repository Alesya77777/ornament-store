import classes from './Catalog.module.css';



const Catalog = () => {
  return (<div className={classes.catalog}>
    <h1 className={classes.catalog__title}>Каталог товара</h1>
    <div className={classes.catalog__wrapper}>
      <div className={classes.card}>
        <img className={classes.card__picture} src="https://appevent.ru/devtasks/img/catalog_item_1.jpg" alt="" />
        <h2 className={classes.card__title}>Браслет Xiaomi Mi Band 4</h2>
        <span className={classes.card__cost} >1790 руб.</span>
        <button className={classes.card__add} >Добавить в корзину</button>
        <button className={classes.card__remove}>Оформить заказ</button>
      </div>
      <div className={classes.card}>
        <img className={classes.card__picture} src="https://appevent.ru/devtasks/img/catalog_item_1.jpg" alt="" />
        <h2 className={classes.card__title}>Браслет Xiaomi Mi Band 4</h2>
        <span className={classes.card__cost} >1790 руб.</span>
        <button className={classes.card__add} >Добавить в корзину</button>
        <button className={classes.card__remove}>Оформить заказ</button>
      </div>
      <div className={classes.card}>
        <img className={classes.card__picture} src="https://appevent.ru/devtasks/img/catalog_item_1.jpg" alt="" />
        <h2 className={classes.card__title}>Браслет Xiaomi Mi Band 4</h2>
        <span className={classes.card__cost} >1790 руб.</span>
        <button className={classes.card__add} >Добавить в корзину</button>
        <button className={classes.card__remove}>Оформить заказ</button>
      </div>
      <div className={classes.card}>
        <img className={classes.card__picture} src="https://appevent.ru/devtasks/img/catalog_item_1.jpg" alt="" />
        <h2 className={classes.card__title}>Браслет Xiaomi Mi Band 4</h2>
        <span className={classes.card__cost} >1790 руб.</span>
        <button className={classes.card__add} >Добавить в корзину</button>
        <button className={classes.card__remove}>Оформить заказ</button>
      </div>
      <div className={classes.card}>
        <img className={classes.card__picture} src="https://appevent.ru/devtasks/img/catalog_item_1.jpg" alt="" />
        <h2 className={classes.card__title}>Браслет Xiaomi Mi Band 4</h2>
        <span className={classes.card__cost} >1790 руб.</span>
        <button className={classes.card__add} >Добавить в корзину</button>
        <button className={classes.card__remove}>Оформить заказ</button>
      </div>
      <div className={classes.card}>
        <img className={classes.card__picture} src="https://appevent.ru/devtasks/img/catalog_item_1.jpg" alt="" />
        <h2 className={classes.card__title}>Браслет Xiaomi Mi Band 4</h2>
        <span className={classes.card__cost} >1790 руб.</span>
        <button className={classes.card__add} >Добавить в корзину</button>
        <button className={classes.card__remove}>Оформить заказ</button>
      </div>
      <div className={classes.card}>
        <img className={classes.card__picture} src="https://appevent.ru/devtasks/img/catalog_item_1.jpg" alt="" />
        <h2 className={classes.card__title}>Браслет Xiaomi Mi Band 4</h2>
        <span className={classes.card__cost} >1790 руб.</span>
        <button className={classes.card__add} >Добавить в корзину</button>
        <button className={classes.card__remove}>Оформить заказ</button>
      </div>
    </div>
  </div>)
};

export default Catalog;