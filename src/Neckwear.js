import React, { Component } from "react";

function NotCounter(props){
    if(props.bowtie > 5){
        return <p>You are one cool dude</p> ;
    }else if(props.bowtie > 0){
        return <p>You have style</p>;
    }else if(props.bowtie ===0){
        return <p>What a square!</p>
    }
        return <p>...</p>;
}

class Neckwear extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {neckties: ''};
    }

    handleChange(e){
        this.setState({neckties: e.target.value});
    }

    render(){
        const neckties = this.state.neckties;
        return(
            <div>
                <fieldset>
                    <legend>How many Bowties do you own:</legend>
                        <input
                        value={neckties}
                        onChange={this.handleChange} />

                    <NotCounter
                        bowtie={parseFloat(neckties)} />

                 </fieldset>
            </div>
        );
    }
}

export default Neckwear;