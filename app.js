var data = {
  id: 0,
  title: "Mission: Impossible - Fallout",
  desc: "Konsekwencje zakończonej niepowodzeniem misji IMF może odczuć cały świat. Aby zapobiec katastrofie, Ethan Hunt i jego zespół muszą stanąć do wyścigu z czasem.",
  image: "https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg"
};

var MovieTitle = React.createClass({
  propTypes:{
    data: React.PropTypes.object.isRequired
  },
  render:function(){
    return(
      React.createElement('h2',{}, this.props.data.title)
    )
  }
});

var MovieDescription = React.createClass({
  propTypes:{
    data: React.PropTypes.object.isRequired
  },
  render:function(){
    return(
      React.createElement('p',{}, this.props.data.desc)
    )
  }
});

var Movie = React.createClass({
  propTypes:{
      data: React.PropTypes.object.isRequired
  },
  render:function(){
    return(
      React.createElement('div',{},
        React.createElement(MovieTitle,{data:data}),
        React.createElement(MovieDescription,{data:data}),
        React.createElement('img',{src: this.props.data.image})
      )
    )
  }
});

var MoviesList = React.createClass({
  propTypes:{
    data: React.PropTypes.object.isRequired
  },
  render:function(){
    return(
      React.createElement('div',{},
        React.createElement('h1',{},'Lista filmów'),
        React.createElement('ul',{},
          React.createElement('li',{key: this.props.data.id},
            React.createElement(Movie,{data:data})
          )
        )
      )
    )
  }
});

var element = React.createElement(MoviesList,{data: data});
ReactDOM.render(element, document.getElementById('app0'));