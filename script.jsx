// Code goes here
var Button = React.createClass({
  localhandleClick : function(){
    this.props.localhandleClick(this.props.increment);
  },
  render : function(){
    return(
      <button onClick={this.localhandleClick}>{this.props.increment}</button>
    )
  }
});


var Result = React.createClass({
  render : function(){
    return(
      <div> 
        Result: {this.props.localCounter}
      </div>
      );
  }
});

var Main = React.createClass({
  getInitialState : function(){
    return {counter: 0};
  },
  handleClick : function(increment){
    
    this.setState({counter: this.state.counter+increment});
  },
  render : function(){
    return (
      <div>
        <Button localhandleClick={this.handleClick} increment={1} />
        <Button localhandleClick={this.handleClick} increment={2} />
        <Button localhandleClick={this.handleClick} increment={5} />
        <Button localhandleClick={this.handleClick} increment={10} />
        <Result localCounter={this.state.counter}/>
      </div>
      );
  }  
});

React.render(<Main />, document.getElementById("root"));
