import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import {browserHistory} from 'react-router'
import {addGoods} from '../actions';

class AddGoodsForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            picture: '/media/image/default_picture.png',
            title: '',
            description: '',
            price: '',
            errors: {
                title: '',
                price: ''
            }
        };

        this.addGoods = this.addGoods.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.changePrice = this.changePrice.bind(this);
        this.getIdForGoods = this.getIdForGoods.bind(this);
        this.sendGoods = this.sendGoods.bind(this);
        this.errorSendGoods = this.errorSendGoods.bind(this);
    }

    changeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    changeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    changePrice(e) {
        if (Number(e.target.value)) {
            this.setState({
                price: Number(e.target.value),
                errors: {
                    price: ''
                }
            })
        } else {
            this.setState({
                price: '',
                errors: {
                    price: 'ВВЕДИТЕ ЧИСЛОВОЕ ЗНАЧЕНИЕ!'
                }
            })
        }


    }

    getIdForGoods(){
       var sortGoods = this.props.goods.map(function (item) {
           return Number(item.id);
        });
       return Math.max.apply(null, sortGoods);
    }

    errorSendGoods(){
        if (!this.state.title) {
            this.setState({
                errors: {
                    title: 'ВВЕДИТЕ НАЗВАНИЕ ТОВАРА!'
                }
            })
        }

        if (!this.state.price) {
            this.setState({
                errors: {
                    price: 'ВВЕДИТЕ ЦЕНУ ТОВАРА!'
                }
            })
        }
    }

    sendGoods(){
        var goods = {
            id: this.state.id,
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            picture: this.state.picture
        };

        if (this.state.title && this.state.price) {
            store.dispatch(addGoods(goods));
            this.setState({
                title: '',
                description: '',
                price: '',
                errors: {
                    title: '',
                    price: ''
                }
            });
        } else {
            this.errorSendGoods();
        }
    }


    addGoods() {
        var maxId = this.getIdForGoods();
        this.setState({
           id: maxId + 1
        }, this.sendGoods);



    }

    render() {
        return (
            <div>
                <form className="add-form">
                    <Paper zDepth={2}>
                        <h1 className="form-title">Добавте товар в каталог</h1>
                        <TextField
                            hintText="Введите название товара"
                            value={this.state.title}
                            onChange={this.changeTitle}
                            errorText={this.state.errors.title ? this.state.errors.title : null}
                        /><br />
                        <TextField
                            hintText="Введите краткое описание товара"
                            value={this.state.description}
                            onChange={this.changeDescription}
                        /><br />
                        <TextField
                            hintText="Введите цену товара"
                            value={this.state.price}
                            onChange={this.changePrice}
                            errorText={this.state.errors.price ? this.state.errors.price : null}
                        /><br />
                        <FlatButton label="Добавить" onClick={this.addGoods} primary={true}/>
                    </Paper>
                </form>
            </div>
        )

    }
}

export default AddGoodsForm;