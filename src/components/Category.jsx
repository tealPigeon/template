function Category(props) {
    return <div className="category">
        <div className={"category__type "+ props.color}>{props.type}</div>
        <img className="category__image" src={props.img} alt="" />
        <div className="category__autor">{props.autor}</div>
        <div className="category__title">{props.title}</div>
        <div className="category__text">{props.text}</div>
        <button className={"category__button "+ props.color}>Call to action</button>
    </div>
}

export default Category;