import React, { Component } from 'react';

class NumberList extends Component {
    constructor(props) {
        super(props);
        this.state = { nums: [1, 2, 3, 4, 5]};
    }


    render() {

        return (
            <div>
                <h1>First Number List</h1>
                <ul>NumList</ul>
            </div>
        )
    }
}

export default NumberList;