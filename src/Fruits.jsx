const Fruits = ({fruit}) => {
    return (
        <div>
            <h3>Fruit : {fruit.name}</h3>
            <p>Season : {fruit.season}</p>
        </div>
    );
};

export default Fruits;