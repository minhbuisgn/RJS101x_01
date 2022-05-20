import React, { Component } from "react";
import Menu from "./MenuComponent";
import Detail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dish";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    };

    onDishselect(dishId) {
        this.setState({selectedDish:dishId})
    };

    render() { 
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishselect(dishId)} />
                <Detail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                <Footer />
            </div>        
        );
    };
};

export default Main;