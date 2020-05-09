const React = require('react');

class Index extends React.Component {
    render() {
        const { todo } = this.props;
        
            <body>
                <h1>To-Do list</h1>
                    
                { todo <= 0 ? <h3>There are no To-Dos yet!</h3> : 
                    <ul>
                        {
                            todo.map((item, i) => {
                                return (
                                    <li>
                                        {item.name} - {item.complete ? `Not done yet!` : `You did that!`}
                                        <form action={`/${item._id}?_method=DELETE`} method="POST"><input type="submit" value="Delete"></input></form>
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
                <form action="/todos" method="POST">
                    <input type="text" name="name"/>
                    <input type="submit" name="" value="Create Todo"/>
                </form> 
            </body>
    }
}

module.exports = Index;

